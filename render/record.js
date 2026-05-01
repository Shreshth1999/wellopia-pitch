// Real-time screencast capture from headless Chrome.
// Uses CDP Page.startScreencast which streams frames as they're rendered.
// Output: PNG frames + concat.txt for ffmpeg variable-framerate assembly.

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const DURATION_MS = 36000;
const OUT_DIR = path.resolve(__dirname, 'frames');
const AD_PATH = `file://${path.resolve(__dirname, '..', 'ad.html')}`;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

(async () => {
  if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(OUT_DIR);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: [
      '--hide-scrollbars',
      '--no-sandbox',
      '--font-render-hinting=none',
      '--force-color-profile=srgb',
      '--disable-gpu-vsync',
      '--disable-frame-rate-limit'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });

  const client = await page.target().createCDPSession();

  // Frame collector
  let frameCount = 0;
  let firstTimestamp = null;
  const frameLog = [];

  client.on('Page.screencastFrame', async ({ data, sessionId, metadata }) => {
    if (firstTimestamp === null) firstTimestamp = metadata.timestamp;
    const tSec = metadata.timestamp - firstTimestamp;
    const filename = `f_${String(frameCount).padStart(5, '0')}.png`;
    fs.writeFileSync(path.join(OUT_DIR, filename), Buffer.from(data, 'base64'));
    frameLog.push({ idx: frameCount, t: tSec, file: filename });
    frameCount++;
    if (frameCount % 30 === 0) console.log(`  captured ${frameCount} frames (t=${tSec.toFixed(2)}s)`);
    try { await client.send('Page.screencastFrameAck', { sessionId }); } catch (e) {}
  });

  // Navigate first
  await page.goto(AD_PATH, { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1000));

  // Hide on-screen chrome (controls, counter, progress) for clean recording
  await page.addStyleTag({
    content: `.controls, .counter, .progress { display: none !important; }`
  });

  // Wait until the animation has started (.stage gets .running class)
  await page.waitForFunction(() => document.querySelector('.stage.running'), { timeout: 5000 });

  console.log('Animation started — beginning screencast');
  const startReal = Date.now();

  await client.send('Page.startScreencast', {
    format: 'png',
    quality: 100,
    everyNthFrame: 1
  });

  // Hold for full duration
  await new Promise(r => setTimeout(r, DURATION_MS));

  await client.send('Page.stopScreencast');
  await browser.close();

  console.log(`Captured ${frameCount} frames in ${((Date.now()-startReal)/1000).toFixed(1)}s real time`);

  // Write ffmpeg concat file with per-frame durations (variable frame rate)
  let concat = '';
  for (let i = 0; i < frameLog.length - 1; i++) {
    const dur = Math.max(0.01, frameLog[i+1].t - frameLog[i].t);
    concat += `file '${frameLog[i].file}'\nduration ${dur.toFixed(4)}\n`;
  }
  // Last frame — needs both file and duration, plus a trailing file line per ffmpeg docs
  const last = frameLog[frameLog.length - 1];
  concat += `file '${last.file}'\nduration 0.0333\n`;
  concat += `file '${last.file}'\n`;
  fs.writeFileSync(path.join(OUT_DIR, 'concat.txt'), concat);

  console.log('Wrote concat.txt');
})().catch(err => { console.error('FATAL', err); process.exit(1); });

// Record ad.html → PNG frame sequence at deterministic virtual time
// Then assembled to MP4 by render.sh

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const FPS = 30;
const DURATION = 36;            // seconds — covers full 35s + buffer
const TOTAL_FRAMES = FPS * DURATION;
const FRAME_BUDGET = 1000 / FPS; // ms of virtual time per frame
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
      '--disable-web-security',
      '--no-sandbox',
      '--font-render-hinting=none',
      '--force-color-profile=srgb'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });

  // Navigate first (real time) so fonts + assets actually load
  await page.goto(AD_PATH, { waitUntil: 'load', timeout: 30000 });

  // Wait for fonts to settle in real time
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  // NOW take control of virtual time for deterministic frame capture
  const client = await page.target().createCDPSession();
  await client.send('Emulation.setVirtualTimePolicy', { policy: 'pause' });

  // Advance 400ms virtual time so the setTimeout(start, 300) inside ad.html fires
  await client.send('Emulation.setVirtualTimePolicy', {
    policy: 'pauseIfNetworkFetchesPending',
    budget: 400
  });
  await new Promise(r => setTimeout(r, 100));

  console.log(`Recording ${TOTAL_FRAMES} frames at ${FPS}fps (${DURATION}s)`);
  const start = Date.now();

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    // Advance virtual time by one frame
    await client.send('Emulation.setVirtualTimePolicy', {
      policy: 'pauseIfNetworkFetchesPending',
      budget: FRAME_BUDGET
    });
    // Tiny real-time wait so paint completes
    await new Promise(r => setTimeout(r, 6));

    const filename = path.join(OUT_DIR, `f_${String(i).padStart(5, '0')}.png`);
    await page.screenshot({ path: filename, omitBackground: false });

    if (i % 30 === 0) {
      const sec = ((Date.now() - start) / 1000).toFixed(1);
      console.log(`  ${i}/${TOTAL_FRAMES} (real ${sec}s)`);
    }
  }

  await browser.close();
  console.log(`Done. Frames in ${OUT_DIR}`);
})().catch(err => {
  console.error('FATAL', err);
  process.exit(1);
});

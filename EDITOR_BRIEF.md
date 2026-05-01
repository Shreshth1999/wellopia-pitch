# Wellopia · "The Medicine War" — Editor's Brief

> Hand this entire document to your editor (human or AI). It contains everything: timing, music, sound design, type, color, transitions, end-card mechanics, and cutdown specs. Read it once end-to-end before touching the timeline.

---

## 0 · The Source

**Raw footage:** `/Users/apple/Downloads/Group 2 Video.mp4`
- Vertical 4K · 2160 × 3840 · 60 fps · HEVC · 83.66s · ~558 MB
- Currently transcoded to a proxy at `wellopia_edit/proxy.mp4` for editing speed

**Existing build pipeline:** `wellopia_edit/render.sh` (ffmpeg) — 8 segments → 34.5s output with 6 typographic supers, Kevin MacLeod *Carefree* music bed, ducked. **This is the foundation.** Refine, do not rewrite.

**Current cut:** `wellopia_edit/wellopia_ad.mp4` (25 MB, 34.5s)

---

## 1 · The Brand (non-negotiable)

This is **Wellopia**, the brand parents wish existed when they first had a child. Its promise: *Right care. Right time. Without the stress.* The brief explicitly forbids fear-based parenting marketing. Every editorial decision must pass three filters:

1. **Warm, never clinical.** No medical-ad polish. Family sitcom, not pharmacy.
2. **Joyful, never childish.** The chaos is funny because it's *recognizable*, not because it's cartoonish.
3. **The kid is never afraid.** Ever. The chaos lives on the parents.

Tagline lockup at end: **Clean & Joyful Care · Right care. Right time. Without the stress.**

Palette: yellow `#FFC72C`, deep forest green `#0F3D2E`, cream `#FFF6DA`. Type: Inter (UI/labels) + Fraunces or DM Serif Display (headlines).

---

## 2 · Creative Frame — "The Trial of the Spoon"

The existing edit casts the medicine refusal as a courtroom trial. **Lean in.** This is on-brief because it dramatizes the kid-rejection truth without pathologizing it. Every overlay is a piece of legal language: *Strikes. Order. Case. Exhibit. Ingredients. Verdict.* The viewer is the jury.

Tonal reference: **Wes Anderson chapter cards meets Drag Race confessionals.** Confident type. Dry timing. Never silly.

---

## 3 · The Edit — Beat-by-Beat (35.0s master cut)

| # | TC (out) | Source TC | Dur | Action | Super | Music | SFX |
|---|---|---|---|---|---|---|---|
| **01** | 0.0–3.0 | 0.5–3.5 | 3.0s | Cold open. Spoon dripping. Parent eyes. Tension. | `01_STRIKES` (0.3–2.7) | Music IN — fade 1.2s, gentle pizz strings | Single drum hit on super reveal |
| **02** | 3.0–6.0 | 12–15 | 3.0s | Stealth approach. Refusal. Splat. | `02_ORDER` (3.3–5.7) | Music continues, slight swell | Wet splat foley, chair creak |
| **03** | 6.0–10.0 | 24–28 | 4.0s | Tactical gear-up montage (helmet, gloves, goggles) | `03_CASE` (6.5–9.5) | Music — pizzicato accelerando | Velcro rip, helmet click, breath |
| **04** | 10.0–15.0 | 33–38 | 5.0s | Ambush + geyser. Hold the spit-take 1.0s post-impact. | `04_EXHIBIT` (10.5–14.5) | Music briefly drops 50% over geyser, restores | Long pfft, room tone, kid giggle (clean) |
| **05** | 15.0–20.0 | 53–58 | 5.0s | Discovery. Wellopia spray reveal. | `05_INGREDIENTS` (15.5–19.5) | Music shifts key — warm major chord, ukulele picks up | Bottle uncap "schrack", ambient hush |
| **06** | 20.0–25.0 | 62–67 | 5.0s | Two spritzes. The pause. Kid says **"Aur?"** | (clean — no super, let the line breathe) | Music thins to single guitar | Two clean spritz spritz, beat of silence, kid VO |
| **07** | 25.0–29.0 | 74–78 | 4.0s | Parent reaction → hiding bottle on top shelf | `07_VERDICT` (25.5–28.5) | Music swells back, full warmth | Cabinet creak, soft footstep |
| **08** | 29.0–34.5 | 78–83.5 | 5.5s | Brand reveal animation + tagline lockup | (handled by reveal animation) | Music resolves chord, fades out 1.5s | Soft mallet bell on logo land |

**Total: 34.5s.** Matches the existing render.sh almost exactly — proceed with that timing.

---

## 4 · Typography System (the supers)

Each `0X_NAME.png` overlay is a full-bleed typographic card that fades in over the live action.

**Master rules:**
- Type: **Fraunces** (300–400 weight) for the legal-frame word (`STRIKES`, `ORDER`, etc.) at ~280pt. Plus **Inter** at 14pt small-caps for the case number.
- Color: deep green `#0F3D2E` on a translucent yellow-tinted scrim (`#FFC72C` at 75% alpha) so live action ghosts through.
- Position: top third, left-anchored, 12vw safe margin.
- Each super gets a **CASE NO. WLP-2026-XX** detail in tiny mono caps under the main word — sells the courtroom.

**The 6 cards:**

```
01 · STRIKES        — kid has now refused 3 times. CASE NO. WLP-2026-03
02 · ORDER          — to take medicine. defendant: age 5. CASE NO. WLP-2026-03
03 · CASE           — re: failed administration of cough syrup. EXHIBIT A
04 · EXHIBIT B      — the spit-take. uncontested. CASE NO. WLP-2026-03
05 · INGREDIENTS    — no alcohol. no sugar. pediatrician-formulated. CLEAN.
07 · VERDICT        — defendant requests more. case dismissed.
```

**Animation per super:**
- IN: 0.35s, opacity 0 → 1 + scale 1.04 → 1.0 (subtle settle)
- HOLD: full opacity for ~2.0–3.0s
- OUT: 0.35s, opacity 1 → 0 (clean fade, no slide)

The render.sh has these timings dialed in already. Don't change them.

---

## 5 · Music — Architecture

**Bed:** Kevin MacLeod *Carefree* (Incompetech, CC BY 3.0) at `music/incompetech_carefree.mp3`. Already wired into render.sh at volume 0.16 (ducked). This is correct.

**Three musical movements within 35 seconds:**

1. **0.0–10.0s — Suspense build.** The pizzicato setup section of *Carefree*. Original audio (parents whispering) sits on top.
2. **10.0–15.0s — Comedic peak.** Music briefly thins to bass + percussion when the geyser hits, letting the splat carry. Restores immediately.
3. **15.0–34.5s — Warm resolution.** The melodic ukulele section. Full audio. Tagline lands on the resolving chord at 33.0s.

**Crucial:** music must duck **harder** during the kid's "Aur?" line at ~22s. Drop it to volume 0.05 for 1.2 seconds so the line is the only thing in the mix. That single word is the campaign — it cannot share frequency space with anything else.

```
ffmpeg filter (additional) for the duck:
  [mus]volume='if(between(t,21.5,23.5),0.05,0.16)':eval=frame[mus]
```

**If a different music track is wanted later:** keep the same three-movement architecture. Tense → comedic peak → warm resolution. Length: must hit a resolving cadence between 33.0–34.0s.

---

## 6 · Sound Design (the layer that wins this)

The existing edit only mixes original audio + music. The award-winning version adds 5 layered SFX:

| Time | Layer | Treatment |
|---|---|---|
| 0.5s | Single timpani hit | -18 LUFS, 200 Hz roll-off, 0.4s reverb tail. Sells the "trial begins" moment |
| 4.5s | Wet splat foley | Pitched up 5%, dry. Wet sound on the page. |
| 7.0s | Velcro rip + helmet click | Hard panning L→R. Cinematic gear-up. |
| 10.5s | Slow-mo whoosh | -1 octave wind, 0.8s tail. Lands the lunge. |
| 12.5s | THE GEYSER — wet, long, with a tiny giggle layered under | This is your money sound. 1.2s long. |
| 15.5s | Hush — actual ambient room tone, +6 dB | After the chaos, silence is the brand entering. |
| 17.0s | Bottle uncap "schrack" | Crisp, dry, present. Brand sounds clean. |
| 21.0s | Two distinct spritz hits | Spaced 0.4s apart. Hi-frequency, dry. |
| 22.5s | KID: "Aur?" — boost +3 dB | This is the pin in the chest of the spot. |
| 28.5s | Cabinet creak + soft footstep | The button. |
| 33.0s | Soft mallet bell on logo land | Clean. One hit. |

Free SFX sources: **freesound.org**, **Pixabay Sound Effects**, **YouTube Audio Library**. No copyrighted sounds.

---

## 7 · Color Grade

The existing render applies `eq=contrast=1.06:saturation=1.08:gamma=1.01`. **Refine to a two-tier grade:**

- **0.0–10.0s (failure phase):** desaturate by 8% (`saturation=0.92`), lift midtones slightly cool (`gamma=1.04`). The struggle feels gray.
- **15.0–34.5s (Wellopia phase):** push warmth (`gamma=0.98`, slight orange in mids), bump saturation back to 1.10. The brand glows.

**Filter snippet (replace existing eq):**
```
[vc]split=2[v_a][v_b];
[v_a]trim=0:10,setpts=PTS-STARTPTS,eq=saturation=0.92:gamma=1.04:contrast=1.04[vg_cool];
[v_b]trim=10:34.5,setpts=PTS-STARTPTS,eq=saturation=1.10:gamma=0.98:contrast=1.06[vg_warm];
[vg_cool][vg_warm]concat=n=2:v=1[vg]
```

This is the single biggest invisible upgrade. The audience won't notice the grade — they'll *feel* it.

---

## 8 · The "Aur?" Beat — Treat as Sacred

The 1.5 seconds around 22.0s are the entire campaign. Direction:

- Frame the kid centered, slight low angle (eye-line just below camera).
- Hold on the silent beat *before* "Aur?" for at least 0.6s. Music ducked.
- The line lands clean — no caption over it. Captions appear *after* the line, lower-third.
- After "Aur?" lands, freeze for 0.4s on the kid's smile before the cut.

If the existing footage doesn't have a usable close-up here, this is the one shot worth re-shooting.

---

## 9 · Captions (for muted Reels viewing — 85% of viewers)

**Style:** Inter Bold 18pt, white fill with deep green `#0F3D2E` outline 4px, centered lower-third with 12% bottom margin. Word-by-word reveal — never more than 4 words visible at once.

**The captions to burn in:**

| Time | Caption |
|---|---|
| 1.0s | "Day 3. Operation: Cough Syrup." |
| 5.5s | "Mission failed." |
| 13.0s | "Casualties: 2." |
| 17.5s | "There has to be a better way." |
| 22.5s | (no caption — let the audio "Aur?" carry) |
| 23.5s | "Aur?" *(appears 1s after the spoken line, as a typeset echo)* |
| 28.5s | "Now we hide this one." |
| 33.0s | "Wellopia · Clean & Joyful Care" |

---

## 10 · End Card (29.0–34.5s)

Five-second sequence:

1. **29.0–30.5s** — Wellopia bottle hero shot rises into frame on a soft yellow gradient bg. SVG-clean. No reflections.
2. **30.5–31.8s** — Wordmark `WELLOPIA` fades in below bottle. Letter-spacing animates from 0.4em → 0.32em (subtle settle).
3. **31.8–33.0s** — Tagline `Clean & Joyful Care` fades in (Fraunces italic, 32pt).
4. **33.0–34.0s** — Sub-line `Right care. Right time. Without the stress.` fades in.
5. **34.0–34.5s** — CTA `On Amazon · Wellopia.in · Quick Commerce` appears in tiny caps at very bottom.

The bell hits on step 2 (wordmark land). Not on the bottle.

---

## 11 · The "Two Years Later" Button (optional — 50s extended cut only)

If a 50-second cut is requested for YouTube/Facebook (where retention is longer), add this beat at 35.0s:

```
HARD CUT — black for 0.4s
WHITE TYPE on black: "TWO YEARS LATER."
HOLD 1.2s
CUT TO: now-7-year-old kid, taller, marching into the kitchen. Opens the cabinet. The Wellopia bottle is on the FOURTH shelf now. He sighs. Climbs onto the counter.
END CARD same as before.
```

Adds 12 seconds. Total: 47s. Earns it on YouTube.

**Do not include this in the 35s Reels master.** Reels punishes anything past 30 seconds for retention. Save it for long-form placements only.

---

## 12 · Cutdown Specifications

Deliver these five files. The render.sh handles the master; clone-and-trim for the rest.

| File | Aspect | Length | Use |
|---|---|---|---|
| `wellopia_master_35s_9x16.mp4` | 1080×1920 | 35s | Reels, Shorts, TikTok primary |
| `wellopia_15s_9x16.mp4` | 1080×1920 | 15s | Cut: drop scenes 02 + 03 (stealth + tactical), keep ambush → win → button |
| `wellopia_6s_9x16.mp4` | 1080×1920 | 6s | Bumper: just the geyser → spray → "Aur?" |
| `wellopia_master_47s_9x16.mp4` | 1080×1920 | 47s | YouTube long with "Two Years Later" |
| `wellopia_master_1x1.mp4` | 1080×1080 | 35s | Facebook feed crop |

For 1:1, crop the 9:16 master with a center-safe action area — keep all type and key action within the middle 1080×1080. Re-render captions; never auto-stretch type.

---

## 13 · Technical Spec (final delivery)

- Container: MP4
- Video: H.264 (libx264), CRF 18, preset medium, yuv420p, faststart
- Audio: AAC 192 kbps, 48 kHz stereo, -16 LUFS integrated loudness
- Frame rate: 30 fps for delivery (downsample from 60 fps source — preserves judder character of comedy)
- Color: Rec. 709, Full range OFF
- File naming: `wellopia_<length>_<aspect>.mp4`

The existing render.sh outputs CRF 18 H.264 — that's correct.

---

## 14 · Editor's Watch-Outs (the things that kill ads like this)

1. **Don't speed-ramp the geyser.** The pfft is funny *because* it's natural. Slow-mo it and it becomes cartoony.
2. **Don't add reaction shots that aren't already in the footage.** Inserts feel cheap. Trust the wide.
3. **Don't add a VO unless the existing kid line is unusable.** Native audio always wins.
4. **Don't put captions over the brand bottle.** Ever.
5. **Don't end on the logo for more than 1.5 seconds of dead screen.** The CTA needs to land warm, not linger awkwardly.
6. **Don't grade the failure scenes too cool.** A subtle desat is the move; a teal-and-orange Hollywood grade is fatal here. This is a family ad, not *Sicario*.
7. **The music must end on a resolving chord, not a fadeout.** If it fades, it feels unfinished. *Carefree* resolves naturally — preserve the resolution.

---

## 15 · How to Render the Improved Master

From `~/Downloads/wellopia_edit/`:

```bash
./render.sh
```

**Recommended additions to render.sh** (in priority order):

1. The two-tier color grade from §7 (replaces single `eq` filter)
2. The "Aur?" duck on music from §5 (replaces flat 0.16 volume)
3. The added SFX layers from §6 (require new asset files in `sfx/`)
4. Captions burned in per §9 (use ASS subtitle file → ffmpeg subtitles filter)

Each can be added incrementally without breaking the existing pipeline. **Test #1 and #2 first — biggest visible/audible win for least code.**

---

## 16 · Reference Cuts (for vibe alignment)

- **Tone:** *The IT Crowd* cold opens (dry comedy, escalation)
- **Pace:** *Modern Family* documentary cuts (quick, observational)
- **Type system:** Anderson's *The French Dispatch* chapter cards
- **Music feel:** *Amélie* score (warm, conspiratorial)
- **Color:** *Paddington 2* (warm, never sentimental)
- **Sound design:** Mother's *Ikea* Lamp ad (quiet → loud → quiet)

Watch one minute of each before opening the timeline. They will save you ten minutes of wandering.

---

## 17 · The Single Test Before Export

Show the cut to one parent who has not seen the brief.
Don't explain anything.
Watch their face during the "Aur?" beat.

If they smile or laugh — ship it.
If they don't react — re-cut around §8.

That's the only metric that matters.

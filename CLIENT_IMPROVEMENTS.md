# Client improvement checklist

Implemented from 网站(1).pdf on 8 October 2026.

## Completed changes

1. **Navigation (PDF pages 1–2):** Home → Yarn → Swatches & Garment → Sustainability → Company Culture, with the same order in the mobile menu. Added /yarn and /company-culture; existing /color-cards links still work. The homepage product button opens Yarn.
2. **Homepage (PDF pages 1–2):** Runsun Textile / 润昌纺织 branding, the supplied craftsmanship slogan, integrated manufacturing wording, and the three specified factory photographs. Found exact higher-resolution originals on the existing CDN. Replaced the factory video with the supplied building image above the orange background.
3. **Yarn (PDF page 3):** One Color Cards catalog, with six collection covers first and 19 previous cards below. Removed the separate E-Color Cards and Models tabs. Restored 15 missing cover images by rendering the first pages of their original CDN PDFs. Cards display full covers and captions.
4. **Swatches & Garment (PDF page 4):** Two tabs, Swatches and Garment. Combined the existing seasonal and new fabric swatches. Moved the 18 model images into Garment. Removed seasonal/factory tab headings and applied the client’s bilingual introduction.
5. **Sustainability (PDF pages 5 and 10):** Corrected Chinese branding to 润昌, including the natural farm label; navigation now places Sustainability fourth.
6. **Company Culture (PDF pages 6–8):** Added a dedicated page with the factory image, company events, industry–university cooperation, and bilingual headings/subtitles. Added Global Exhibitions, the five named cities, the supplied descriptions, and a seven-photo carousel with previous/next controls and image indicators. Used the four supplied exhibition photos plus three sharper existing exhibition originals.
7. **Contacts (PDF page 9):** Removed the Puyuan branch and Korea, Hong Kong, Japan, and UK office cards. Retained the main factory and existing three sales contacts. Added Business Department Four / 业务四部, HUA, hua@okyarn.com. Localized contact buttons and surrounding text.
8. **Chinese corrections and footer (PDF page 10):** Replaced 润盛 with 润昌 and 袁新 with 远欣 across translations. Footer categories are wool yarns, cashmere blends, specialty animal fibers, cotton/linen, and eco-friendly fibers. The document language follows the selected language.

## Additional media repairs

- Corrected 35 swatch image paths whose JPG/PNG extensions did not match the CDN files.
- Verified all 252 remaining remote catalog image references return HTTP 200.
- Restored complete homepage hero and yarn/swatches banner images from CDN originals; the previous local copies were truncated.
- Added the favicon referenced by the page metadata.
- Temporary browser tools, downloaded comparison images, and screenshots are under tmp/qa and ignored by Git.

## Verification

- Production TypeScript/Vite build: passed.
- ESLint for every changed component and page: passed.
- Browser checks at 1440 × 1000 and 390 × 844: passed.
- Checked all routes, English/Chinese switching, mobile menu navigation and closing, horizontal overflow, visible broken images, garment image count, exhibition carousel controls, and HUA’s email link. No browser JavaScript errors were recorded.
- Git whitespace check: passed.
- Full-project lint still reports pre-existing issues in PDFThumbnail, PerformanceMonitor, the shared button module, serviceWorker, and performance utilities; those modules were outside this change.

## Interpretation and image limits

- The PDF says to place new color cards before older cards but does not provide release dates. The six collection covers are treated as the newest group; the 19 existing digital/card-series covers follow.
- PDF arrows without exact measurements were interpreted as layout and content changes. The user clarified that the factory video should be replaced by the supplied building image; the homepage now shows that image above the orange background.
- Company event, factory building, and cooperation photos were extracted from the PDF without the red annotations. No sharper matching originals were found among the project’s referenced assets, so these retain the PDF’s limited resolution. Manufacturing photos and the three added exhibition photos use sharper originals.

## Review

Run npm run dev and open http://localhost:5173. The local preview was left running for review. Changes are local; no deployment or Git commit was made.

## Navbar logo follow-up

The client confirmed that the first-page logo annotation requests a slightly larger logo. Increased its height from 32 to 40 pixels on mobile and from 48 to 64 pixels on desktop, with intermediate responsive sizes. An equal-column header grid now keeps it at the exact center of the viewport. The existing logo artwork is preserved. Checked centering, overlap, and overflow at seven screen widths (320–1920 pixels) in both languages.

## Homepage building image quality follow-up

The PDF contains a 196 × 110 pixel building image. A sharper matching original was not found in the referenced assets. The homepage now uses a 1672 × 941 lossless PNG enhanced with the built-in image generation tool. This is an AI-assisted reconstruction of the supplied image, not a recovered original photograph; fine details may differ. The original PDF extraction remains preserved in manufacturing-4.jpg. The orange background and image placement are unchanged. Explicit image dimensions and asynchronous decoding prevent layout shifts.

Asset: src/assets/client/factory-building-enhanced.png

### Enhancement prompt

Edit target: the attached small factory building photograph. Enhance resolution, remove JPEG blocks and blur, and produce a clean sharp photographic version for a website banner, landscape 16:9, at least 1536 pixels wide. This is faithful restoration, not a redesign. Preserve the original camera angle, crop, proportions, exact building silhouette and number and positions of visible facade levels and windows. Preserve the tall light gray building to the left-center, the dark overhanging horizontal entrance canopy, the brightly illuminated glass ground-floor entrance, the darker building extending on the right, the blue dusk sky, trees to either side, a few people in the lower-left foreground and the driveway with the parked vehicle at the right. Keep the upper roof cut off as in the reference. Do not add floors, new architecture, landscaping, signs, text, logos or extra people. Restore plausible photographic edges and fine texture conservatively. Keep the same cool evening lighting and warm lit lobby, with realistic muted colors. Avoid oversharpening halos, stylization, glossy CGI, altered perspective, and decorative changes.

### Follow-up: homepage subtitle and shorter building section
- Confirmed the hero uses “Runsun Textile” and “Craftsmanship Persists, Yarn Splendor Blooms.”; Chinese uses “润昌纺织” and “润循匠心，昌绽纱彩。”
- Halved the building image aspect height and vertical section padding. The enhanced image remains in use, cropped centrally to fit the shorter card.

### Follow-up: client-confirmed banner subtitle
- Updated the English hero subtitle to “Innovating the Future of Manufacturing” and the Chinese subtitle to “创新制造业的未来”. Kept the Runsun Textile title and approved half-height building section.

## Company Culture photo clarity follow-up

Enhanced the eleven low-resolution PDF photographs with the built-in image generation tool and saved lossless PNG siblings in src/assets/client/ using the -enhanced.png suffix. Updated the Company Culture imports; preserved the original JPGs and the three higher-quality exhibition photographs. These are AI-assisted restorations: small faces, lettering and fine details cannot be recovered exactly from tiny source images.

### Enhancement prompt (used separately for each photograph)

Use case: identity-preserve. Edit target: the supplied low-resolution company documentary photograph. Enhance clarity and resolution for a website, preserving the exact original scene, composition, framing, lighting, colors, people count, poses, clothing, architecture and objects. Remove compression blur and pixelation; restore natural photographic texture with restrained sharpening. Preserve faces and existing sign shapes as faithfully as the input allows; do not invent readable text, new people, objects, logos or decorative elements. Keep its original aspect ratio. This is a faithful photo restoration, not a redesigned scene. Output a high-resolution standalone photograph.

Validation: production build and Company Culture ESLint check passed. All photos and seven exhibition slides decoded successfully at 1440px and 390px, with no horizontal overflow or browser page errors. Corrected the sideways third PDF exhibition photograph through display rotation.

## Company Culture fidelity correction

Replaced event-2 and carousel slides 4, 6 and 7 (exhibition-1, exhibition-3, exhibition-4) with restrained restorations of the original PDF JPGs using the built-in image generation tool. Visually compared every new output against its source before integration. Avoided the detailed invented rifle and reduced reconstructed faces, room fixtures and exhibition decorations. Some source softness remains intentionally. These are still AI-assisted versions, not exact recovered originals. Original JPGs and previous outputs are preserved; selected assets use the -faithful.png suffix. Slide 6 retains display-only orientation correction.

### event-2

Use case: identity-preserve. Edit target: supplied original PDF photograph, not a prior AI version. Make only a very restrained resolution and compression cleanup. This is documentary restoration with source fidelity as the highest priority. Preserve every visible person, exact pose, face silhouette, clothing color, object silhouette, room geometry, tables, ceiling, fixtures, framing, perspective and lighting. Keep ambiguous tiny details soft and unresolved; do not replace blur with invented texture, facial features, objects, or signage. No redesign, added people, decorations, text, or logos. Keep the original aspect ratio and orientation. Especially preserve the small dark item near the bent person exactly as the reference silhouette. Do NOT invent a detailed rifle, stock, barrel, magazine, or tactical equipment. Keep that unclear area soft, matching the original. A gently cleaned authentic image with some softness is preferred over a sharp invented scene.

### exhibition-1

Use case: identity-preserve. Edit target: supplied original PDF photograph, not a prior AI version. Make only a very restrained resolution and compression cleanup. This is documentary restoration with source fidelity as the highest priority. Preserve every visible person, exact pose, face silhouette, clothing color, object silhouette, room geometry, tables, ceiling, fixtures, framing, perspective and lighting. Keep ambiguous tiny details soft and unresolved; do not replace blur with invented texture, facial features, objects, or signage. No redesign, added people, decorations, text, or logos. Keep the original aspect ratio and orientation. Preserve the original exhibition booth and room layout exactly; do not upgrade the architecture or populate it differently. A gently cleaned authentic image with some softness is preferred over a sharp invented scene.

### exhibition-3

Use case: identity-preserve. Edit target: supplied original PDF photograph, not a prior AI version. Make only a very restrained resolution and compression cleanup. This is documentary restoration with source fidelity as the highest priority. Preserve every visible person, exact pose, face silhouette, clothing color, object silhouette, room geometry, tables, ceiling, fixtures, framing, perspective and lighting. Keep ambiguous tiny details soft and unresolved; do not replace blur with invented texture, facial features, objects, or signage. No redesign, added people, decorations, text, or logos. Keep the original aspect ratio and orientation. Preserve the original exhibition booth and room layout exactly; do not upgrade the architecture or populate it differently. A gently cleaned authentic image with some softness is preferred over a sharp invented scene.

### exhibition-4

Use case: identity-preserve. Edit target: supplied original PDF photograph, not a prior AI version. Make only a very restrained resolution and compression cleanup. This is documentary restoration with source fidelity as the highest priority. Preserve every visible person, exact pose, face silhouette, clothing color, object silhouette, room geometry, tables, ceiling, fixtures, framing, perspective and lighting. Keep ambiguous tiny details soft and unresolved; do not replace blur with invented texture, facial features, objects, or signage. No redesign, added people, decorations, text, or logos. Keep the original aspect ratio and orientation. Preserve the original exhibition booth and room layout exactly; do not upgrade the architecture or populate it differently. A gently cleaned authentic image with some softness is preferred over a sharp invented scene.

Correction validation: build and Company Culture lint passed. Verified all seven carousel images on desktop (1440px) and mobile (390px), including explicit checks that slides 4, 6 and 7 load the corrected assets. No page errors or horizontal overflow.

## Remade padded navbar logo

Recreated the Runsun / WOOLEN mark with the built-in image generation tool, retaining its distinctive lettering and rectangular black frame while adding white space outside the frame. Saved src/assets/runsun-logo-padded.png; original JPEG preserved. Navbar now uses 6px vertical padding and a 40–48px logo tile, reducing overall height to 52px on mobile and 60px on desktop (previously 64–88px). Verified centering, no overlap, correct asset, and no overflow at seven widths from 320 to 1920px in English and Chinese. Production build and navbar lint passed.

Prompt: Edit the attached Runsun logo as a faithful high-resolution recreation. Preserve the distinctive lowercase black runsun custom rounded lettering exactly as shown, and the smaller spaced uppercase WOOLEN below. Preserve their shapes, proportions, positioning and the thin rectangular black frame. Clean up pixelation and make edges crisp without redesigning the mark. Add a modest uniform pure-white margin outside the black rectangle on all four sides, approximately 10 percent of the framed logo height. The result should be a wide rectangular logo tile on a solid white background. Flat 2D black and white, no shadow, no texture, no extra text, no decorative elements, no altered letters.

## Company Events split layout

Changed the introductory row to two equal columns from 640px: the existing team photograph fills the left column at its natural aspect ratio, with the heading and subtitle vertically centered in the right column. Below 640px, the photo and text stack.

Validation: production build and desktop/mobile browser checks passed; all images and slides load, with no overflow or page errors.

## Pre-push PDF audit

Reviewed every PDF page against current code and local UI on 9 October 2026. Detailed findings, remaining interpretations, lint issues, photo-size/fidelity limitations and staging notes are in PDF_VERIFICATION.md. No site implementation changes were made during the audit.

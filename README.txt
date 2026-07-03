Directsell Buildcon Pvt. Ltd. static website
===========================================

This package is ready to publish on GitHub Pages with a custom domain, Netlify, Cloudflare Pages, or any normal static hosting service.

Clean folder URL structure
--------------------------
- /                  -> index.html
- /about/            -> about/index.html
- /projects/         -> projects/index.html
- /gallery/          -> gallery/index.html
- /documents/        -> documents/index.html
- /contact/          -> contact/index.html

Shared layout files
-------------------
- header.html
- footer.html

Edit header.html once to update the menu everywhere.
Edit footer.html once to update footer links and the WhatsApp floating button everywhere.

Important files
---------------
- assets/css/style.css
- assets/js/main.js
- assets/images/
- assets/docs/
- robots.txt
- sitemap.xml
- 404.html
- .nojekyll

Contact and WhatsApp
--------------------
WhatsApp number used: +91 7091257444
The floating WhatsApp button appears on every page through footer.html.

Publishing notes
----------------
Upload the contents of this zip to the website root.
For example, after upload, the contact page should open at:
https://directsell.co.in/contact/

Because header.html and footer.html are loaded as static partials using JavaScript, test through a local web server or after uploading. Do not test by double-clicking files directly from your computer.

Update in this version:
- Added a responsive "Plots" dropdown menu in header.html.
- Added external plot search links for project numbers 1, 2 and 6.

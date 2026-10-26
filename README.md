# K S Arjun — GitHub Pages Portfolio

A distinctive static portfolio using HTML, CSS and JavaScript. It includes the animated “Hello!” intro popup and works on GitHub Pages.

## Preview locally

Open `index.html` in a browser, or use VS Code's Live Server extension.

## Publish to your existing GitHub Pages repository

1. Extract this ZIP.
2. Open the extracted folder.
3. Copy `index.html`, `style.css`, and `script.js` into the root of your existing repository.
4. Keep a backup of your previous files first.
5. Replace the placeholder email and LinkedIn URL in `index.html`.
6. Check the project summaries and make sure links point to the correct repositories.
7. Commit and push the changes. GitHub Pages will publish the static site.

No Flask or build step is needed.

## Hello popup behaviour

The popup appears on a new browser session and closes when the visitor presses “Come on in”, taps outside it, or presses Escape. It is remembered for the rest of that browser session. To make it appear every time the page is loaded, remove the `sessionStorage` check and write in `script.js`.

# Nohara House

An interactive 3D fan-made visit to the Nohara family home from *Crayon Shin-chan*.

Start outside the garden gate and explore 21 connected viewpoints across the ground floor, second floor, balcony, and garden.

## Play

**[Play in your browser](https://bossbaby-tw.github.io/nohara-house/)** — no download or sign-in required.

- Drag to look around; click direction markers or nearby destinations to walk.
- Follow the blue stairs from the entry to the second-floor landing, playroom, family bedroom, and balcony.
- Find five family moments, pet Shiro, open the secret toy chest, and switch on the TV.
- Open **Music** for an original looping score or the official Shin-chan dance video.
- Use the floor map for shortcuts, Dollhouse for an overview, and the camera button to save a postcard.

## Run locally

The game is buildless HTML, CSS, and JavaScript with Three.js. No installation or build step is required.

```sh
python3 -m http.server 8000 --directory docs
```

Open `http://localhost:8000` in a browser with WebGL enabled.

Run the navigation checks with Node.js:

```sh
node navigation.test.mjs
```

## GitHub Pages

The playable site is in `docs/`. GitHub Pages can publish from the `main` branch and `/docs` folder.

## Credits

An unofficial fan interpretation inspired by *Crayon Shin-chan*. Character and series rights belong to their respective owners. The custom 3D models were informed by the [official family guide](https://manga-shinchan.com/character) and the user-provided room references.

The looping instrumental game score is original. The optional official song plays through the publisher’s visible YouTube embed. Original reference artwork and downloaded music recordings are not bundled.

Three.js and its example surface textures are included with their MIT license notice. See [all credits](docs/credits.txt) and [Three.js license](docs/vendor/THREE-LICENSE.txt).

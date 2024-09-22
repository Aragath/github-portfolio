# Portfolio

For changing the screenshot:
- first place the image in `images/` folder and then in HTML replace the name in `src` with the name of your image.
- Recommended size for project image (1366 x 767px) also make sure the size of all  project images is the same.

```html
<img
    src="./images/name-of-your-image.png"
    class="work__image"
    alt="Project 1"
/>
```

### Clients Section

- Place the logos of the clients and companies that you have worked with in `images/` directory and then replace the name in `src` with the name of your logos accordingly.
- Make sure that you don't have whitespace on either side of the logos.

```html
<img
    src="./images/your-logo.png"
    class="client__logo"
    alt="Your Logo"
/>
```

### Footer

- Replace the `href` attribute values to your profile URLs for all anchors.
- Remove the div with class `footer__github-buttons`.

```html
<footer role="contentinfo" class="footer">
    <div class="row">
        <!-- Update the links to point to your accounts -->
        <ul class="footer__social-links">
            <li class="footer__social-link-item">
                <a href="https://twitter.com/nisarhassan12/">
                    <img src="./images/twitter.svg" class="footer__social-image" alt="Twitter">
                </a>
            </li>
            <li class="footer__social-link-item">
                <a href="https://github.com/nisarhassan12/">
                    <img src="./images/github.svg" class="footer__social-image" alt="Github">
                </a>
            </li>
            <li class="footer__social-link-item">
                <a href="https://codepen.io/nisar_hassan">
                    <img src="./images/codepen.svg" class="footer__social-image" alt="Codepen">
                </a>
            </li>
            <li class="footer__social-link-item">
                <a href=https://www.linkedin.com/in/nisar-hassan-naqvi-413466199/">
                    <img src="./images/linkedin.svg" class="footer__social-image" alt="Linkedin">
                </a>
            </li>
        </ul>
    </div>
</footer>
```

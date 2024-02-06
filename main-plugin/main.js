let elementFoundClassName = "elementFound";

/**
 *  ClubDesk wrap content and script execution inside iFrames with a max depth of 2
 */
function topDocument() {
    return window.top.top.document;
}

/**
 * Main methods used to detect and react to the presence of a given element exactly once.
 * The corresponding element will be hidden by default, until the callback is processed (hence avoid element flashing).
 * The call receives the found javascript Element as unique parameter
 */
function onElement(selector, callback) {
    const style = topDocument().createElement("style");
    style.textContent = selector + `:not(.` + elementFoundClassName + `) {
    opacity: 0;
  }`;
    topDocument().head.appendChild(style);
    setInterval(() => {
        topDocument().querySelectorAll(selector + ":not(." + elementFoundClassName + ")").forEach(el => {
            el.classList.add(elementFoundClassName);
            callback(el);
        });
    }, 100);
}

/**
 **/


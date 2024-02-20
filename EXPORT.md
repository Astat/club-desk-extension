<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./main-plugin/main.js) -->
<!-- The below code snippet is automatically added from ./main-plugin/main.js -->
```js
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
    var timer = setInterval(() => {
        topDocument().querySelectorAll(selector + ":not(." + elementFoundClassName + ")").forEach(el => {
            el.classList.add(elementFoundClassName);
            if(callback(el)) {
                clearInterval(timer);
            }
        });
    }, 100);
}

/**
 * 
 **/
console.log("loaded");
```
<!-- MARKDOWN-AUTO-DOCS:END -->

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./limit-participants/main.js) -->
<!-- MARKDOWN-AUTO-DOCS:END -->

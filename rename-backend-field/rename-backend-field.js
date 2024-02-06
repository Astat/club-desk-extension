/**
 * rename-backend-field.js
 * Change the display of a given field in the backend.
 * Here it is use to change "Participants" to "Eligibles", which fits much better a proper translation and our usage
 */

onElement(".NK1446B-b-R-com-clubdesk-client-framework-bundle-css-CommonCss-label", el => {
    if (el.textContent.includes("Participants")) {
        el.textContent = "Eligibles:";
    }
})
/**
 * limit-participants.js
 * Used to allow restricting the number of participants to an event. Rely on specific pattern from the event description to set the maximum.
 */

function extractMaxParticipant(text) {
    const search = /Participants maximum ?: ?(\d{1,3})/i;
    const searchResult = text.match(search);
    if (searchResult && searchResult.length > 1) {
        return +searchResult[1];
    }
    return null;
}

onElement(".tinyMceContent", el => {
    let text = el.textContent;
    const maxParticipants = extractMaxParticipant(text);
    if (maxParticipants !== null) {
        console.log("Max participants : " + maxParticipants);
    }
})
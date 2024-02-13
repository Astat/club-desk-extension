# club-desk-extension

This tool helps to integrate new feature and customization to ClubDesk solution.

## Front-end extension
It is purely frontend and helps apply modification to the display of the webpage. This means that any modification applied through this tool is easily bypassed with for anybody willing to do so. Use it to improve your users quality of life, do not rely on it for any security related feature or as a trusted mean to enforce process/restrict features.

## How to deploy it
Refere to the ["main-plugin" installation doc](/main-plugin/main.js)

## Examples - Limiting participant registration
You can find a few examples, demonstrating how to use it. The "limit-participants" feature is a great example to show the different aspects of putting in place a new feature.
### Feature
In our process, all our members are invited to take part to all the events, and needs to register. For some events, there is a limited number of seats available - this extension allow to define a maximum number of attendes.
As stated above, we need to keep in mind that this is front-end only and can easily be bypassed. If anybody were to do so (forcing its registration), we can easily track back the registration history and arbitrate.
### Defining the limit
First job is to find a way to define a limit. At the time of writing, ClubDesk does not provide custom fields for events, so we will use the free text with specific pattern to define the limit. For us, it is :
```
Participants maximum : XXX
```
Finding this value is done through the following code
```
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
        console.log("Max participants defined : " + maxParticipants);
    }
})
```

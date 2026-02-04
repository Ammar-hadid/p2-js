import {tracks} from './tracks.js';

const tracksWrapperEl = document.getElementById('track-wrapper');
const longestTrackEl = document.getElementById('longest-track')

renderTracks()

function renderTracks() {

    if (!tracksWrapperEl || !longestTrackEl) return;

    const tracksObj = getTracksHtmlString();

    if (!tracksObj) return;

    const tracksHTML = tracksObj.tracksHTML;
    const longestTrackHTML = tracksObj.longestTrack.name

    longestTrackEl.innerHTML = longestTrackHTML;
    tracksWrapperEl.innerHTML = tracksHTML;
}

function getTracksHtmlString() {

    if (!tracks) return;

    let tracksHTML = '';
    let longestTrackDuration = 0;
    let longestTrack = {};


    for (const track of tracks) {
        tracksHTML += `<li>${track.name} - ${track.artist} (${track.duration} minutes) ${track.vibe}</li>`

        if (track.duration > longestTrackDuration) {
            longestTrackDuration = track.duration;
            longestTrack = track;
        }
    }

    return {tracksHTML: tracksHTML, longestTrack: longestTrack}
}
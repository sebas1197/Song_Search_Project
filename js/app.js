import * as UI from './interface.js';
import API from './api.js';

UI.form_search.addEventListener('submit', searchSong);

function searchSong(e){
    e.preventDefault();

    let artist = document.querySelector('#artist').value;
    let song = document.querySelector('#song').value;

    let api = new API(artist, song);
    api.consultApi();

}
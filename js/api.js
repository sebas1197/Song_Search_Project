import * as UI from './interface.js';

class API{
    constructor(artist, song){
        this.artist = artist;
        this.song = song;
    }

    consultApi(){
        const URL = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
        fetch(URL)
            .then(response => response.json())
                .then(response => {

                    if(response.lyrics){
                        let {lyrics} = response;
                        UI.result.textContent = lyrics;
                        UI.letterResult.textContent = this.song + ' - ' + this.artist;
                    }else{
                        alert("Prueba con otra búsqueda!");
                    }
                    
                })
    }

}

export default API;
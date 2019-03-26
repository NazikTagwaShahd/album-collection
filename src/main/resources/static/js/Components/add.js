import events from '../Utils/Events/event-actions'
import Artists from './Artists.js'
import Albums from './Albums.js'
import Songs from './Songs.js'
import artist from './artist.js'
import listArtists from './artist.js'
import listAlbums from './album.js'
import api from '../Utils/API/api-actions'

function addArtist() {
    return `
    <section class="add__artist">
        <h3>Add Artist</h3>
        
            <input type="select" class="add__artist--name" placeholder="artist name">
            <input type="text" class="add__artist--image" placeholder="image">
            <button class="add__artist--submit">Add Artist</button>
        </section> 
        `
}

function addAlbum() {
    api.getRequest('/artists', artists => {    
        document.querySelector('.add__album--artist').innerHTML =  listArtists(artists) 
    })
    return `
    <section class="add__album">
        <h3>Add Album</h3>
        
            <select type="select" class="add__album--artist" placeholder="Pick Artist">
            
            </select>                 
            <input type="text" class="add__album--title" placeholder="title">
            <input type="text" class="add__album--image" placeholder="image">
            <input type="text" class="add__album--recordLabel" placeholder="recordLabel">
            <button class="add__album--submit">Add Album</button>
        </section>
        `
}

function addSong() {
    api.getRequest('/albums', albums => {    
        document.querySelector('.add__song--album').innerHTML =  listAlbums(albums) 
    })

    return `
    <section class="add__song">
        <h3>Add Song</h3>
        
            <select type="select" class="add__song--album" placeholder="Pick Album">
            </select>
            <input type="text" class="add__song--title" placeholder="title">
            <input type="text" class="add__song--link" placeholder="link">
            <input type="text" class="add__song--duration" placeholder="duration">
            <button class="add__song--submit">Add Song</button>
        </section>
        `
}

function addComment() {
    return `
    <section class="add__comment">
        <h3>Add Comment</h3>
        
            <input type="text" class="add__comment--content" placeholder="comment">
          
            <button class="add__comment--submit">Add Comment</button>
        </section> 
        `
}


export default {
    addArtist, addAlbum, addSong, addComment
}
  
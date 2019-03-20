let newArtist = {
    name: 'Red Hot Chili Peppers',
    image: 'Red Hot Chili Peppers img'
}

// postData(`/artists/addArtist`, {
//         name: 'Red Hot Chili Peppers',
//         image: 'Red Hot Chili Peppers img'
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// function postData(url = ``, data = {}) {
//     // Default options are marked with *
//     return 

//     fetch(url, {
//             method: "POST", // *GET, POST, PUT, DELETE, etc.
//             headers: {
//                 "Content-Type": "text/plain",
//                 // "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: data, // body data type must match "Content-Type" header
//         })
//         .then(response => response.json()); // parses JSON response into native Javascript objects 
// }

fetch("/artists/addArtist", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "text/plain",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: newArtist, // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects
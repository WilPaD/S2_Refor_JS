
const apiKey = 'dV5wpJfUqgB1TKwWaedGLLS46nBaW72F'
// https://api.giphy.com/v1/gifs/random?api_key=dV5wpJfUqgB1TKwWaedGLLS46nBaW72F#

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
    .then( resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    } )

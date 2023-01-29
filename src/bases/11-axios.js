
import axios from 'axios'

const apiKey = 'dV5wpJfUqgB1TKwWaedGLLS46nBaW72F'
// `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})


export default giphyApi

/*
giphyApi.get('/random')
    .then(resp => {
       
        /*
        Desestructrurando el objeto data que se recive en resp(response)
        Es una forma más fácil de hacer y leer
        
        const { data } = resp.data
        const { url } = data.images.original
        
        /* 
        Forma complicada y dificil de leer
        const url = resp.data.data.images.original.url
        

        //Insercion de la imagen al body
        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })
*/
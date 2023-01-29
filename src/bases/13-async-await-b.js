
import giphyApi from './11-axios';


const getImage = async() => {
    try{
        const { data } = ( await giphyApi.get('/random') ).data // El await se pone dentro de ().data para que primero se ejecute el await y del resultado tomemos la propiedad data, esto para evitar poner data.data en linea siguiente
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )

    }catch(err){
        console.log('Error en la petición: ', err)
        throw err
    }
}

getImage()
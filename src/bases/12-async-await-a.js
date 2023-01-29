
const miPromesa = () => {
    return new Promise( (resolve, reject) =>{
        setTimeout(() =>{
            //resolve('Tenemos valor en la promesa') //Resolve para cuando la promesa sale bien
            //reject('Reject en mi promesa') //Reject para cuando la promesa sale mal
        }, 1000)
    })
}


const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('Fin')
    
        return "Fin de medirTiempoAsync" //Este es cuando sale bien .then()
        
        
    } catch (error) {
        // return  'Catch en medirTiempoAsync'
        throw "Error en medirTiempoAsync" //Para cuando sale mal catch()      
    }
    
}

medirTiempoAsync()
    .then( valor => console.log( 'Then existoso', valor ) ) // Se dispara cuando medirTiempoAsync retorna valor con return
    .catch( err => console.log( 'Error: ', err ) ) // Se dispara cuando medirTiempoAsync retorna valor con throw
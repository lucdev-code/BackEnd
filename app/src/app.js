import express from 'express'

const app = express()

// puerto por donde correra la api
const port = 1020

// esto es un enpoint, 
    // get es el metodo que se usa dentro de este enpoint, se usa get para obtener informacion (existen mas metodos)
    // '/' es el path o ruta por donde se accede o consume el enpoint
    // req es Request que es como la peticion que se hace
    // res es Response que es la respuesta que mandas despues de consumir el enpoint

app.get('/', (req, res) => {

    // con esto retornas una repsuesta al consumir el endpoint
    res.json({
        message: 'Hello world'
    })
} )

// aqui corremos la api por el puerto
app.listen(port, () => {
    console.log(`Api corriendo en el puerto: http://localhost:${port}`)
})
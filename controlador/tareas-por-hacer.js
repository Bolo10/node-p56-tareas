const fs = require('fs')

let TareasPorHacer = []

const cargarDB = () => {
    try {
        TareasPorHacer = require('../modelo/data.json')
    } catch (error) {
        TareasPorHacer = []
    }
}

const guardarDB = () => {
    let data = JSON.stringify(TareasPorHacer)
    fs.writeFile('modelo/data.json', data, (err) => {
        if (err) throw new Error('no se puedo guardar la data', err)
    })
}

const crear = (descripcion) => {
    cargarDB()
    let tarea = {
        descripcion,
        completado: false
    }

    TareasPorHacer.push(tarea)
    guardarDB()
    return tarea
}

module.exports = {
    crear
}
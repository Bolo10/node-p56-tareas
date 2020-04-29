const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea"
}
const completado = {
    demand: true,
    alias: 'c',
    desc: "Marca como completada o pendiente una tarea"
}
const argv = require('yargs')
    .command('crear', 'crear una tarea', { descripcion })
    .command('actualizar', 'actualizar una tarea', { descripcion, completado })
    .command('borrar', 'borrar una tarea', { descripcion }).argv;

module.exports = {
    argv
}
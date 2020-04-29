const argv = require('./config/yargs').argv
const tareas = require('./controlador/tareas-por-hacer')
let comando = argv._[0]
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion)
        console.log("Crear");
        break
    case 'listar':
        console.log("listar");
        break
    case 'actualizar':
        console.log("actualizar");
        break
    case 'borrar':
        console.log("borrar");
        break
    default:
        console.log('eror :v');

}
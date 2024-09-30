





const listaTareas = {
    tareas: [],

    agregarTarea: function(tarea) {
        this.tareas.push(tarea);
        console.log(`Tarea "${tarea}" agregada.`);
    },

    listarTareas: function() {
        console.log("Lista de tareas:");
        this.tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea}`);
        });
    },

    eliminarTarea: function(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            const tareaEliminada = this.tareas.splice(indice, 1);
            console.log(`Tarea "${tareaEliminada}" eliminada.`);
        } else {
            console.log("Índice no válido.");
        }
    }
};

function gestionarTareas() {
    let opcion;
    do {
        opcion = prompt("Elige una opción:\n1. Agregar tarea\n2. Listar tareas\n3. Eliminar tarea\n4. Salir");
        switch (opcion) {
            case '1':
                const nuevaTarea = prompt("Introduce la nueva tarea:");
                listaTareas.agregarTarea(nuevaTarea);
                break;
            case '2':
                listaTareas.listarTareas();
                break;
            case '3':
                const indice = parseInt(prompt("Introduce el índice de la tarea a eliminar:")) - 1;
                listaTareas.eliminarTarea(indice);
                break;
            case '4':
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== '4');
}

gestionarTareas();



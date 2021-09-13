

export class Todo{

            static fromJson ({id,tarea, completado,creado}){
                const tempTodo      = new Todo(tarea);
                tempTodo.id         = id;
                tempTodo.completado = completado;
                tempTodo.creado     = creado;

                return tempTodo;
            }

            constructor (tarea){
            this.tarea      = tarea;
            this.id         = new Date ().getTime();  //--numeros representacion de la hora minuto 
            this.completado = false;
            this.creado     = new Date();
    };

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
};

//entonces cuando se crea una nueva tarea, todo esto se va a crear
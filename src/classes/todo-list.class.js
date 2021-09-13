import { Todo } from './todo.class'

export class TodoList {

            constructor(){
            
                this.cargarlocalStorage()
                };
        
            nuevoTodo(todo){
                this.todos.push( todo );
                this.guardarLocalStorage();
                };
        
            eliminarTodo(id){
                
                this.todos = this.todos.filter ((todo)  => todo.id != id);
                this.guardarLocalStorage();
                
            };
            
            marcarCompletado(id){
                
                for (const todo of this.todos) {
                    
                    if (todo.id === id*1){
                        todo.completado = !todo.completado;
                        console.log(todo.id, id);
                        this.guardarLocalStorage();
                        break;
                    }        
                }
            };
            
            eliminarCompletados(){
                
                this.todos= this.todos.filter ( (todo)  => !todo.completado);
                this.guardarLocalStorage();
                }

            guardarLocalStorage(){
                localStorage.setItem('todo',JSON.stringify(this.todos)   );
                }   

            cargarlocalStorage(){
                localStorage.getItem('todo')
                        ?this.todos =  JSON.parse( localStorage.getItem('todo')):
                         this.todos = [];

                this.todos = this.todos.map((obj)=> Todo.fromJson(obj));
                };
};

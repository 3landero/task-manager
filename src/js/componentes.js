//referencias enel html

import { todoList } from "../index";
import { Todo } from "../classes";


const divTodoList      = document.querySelector ('.todo-list');
const txtInput         = document.querySelector('.new-todo');
const btnClean         = document.querySelector('.clear-completed');
const ulfiltros        = document.querySelector('.filters');      
const anchorFiltros    = document.querySelectorAll('.filtro');  





export  const crearTodoHTML = ( todo )=>{
            const htmlToDo  =    
                    `<li class="${ (todo.completado) ?'completed':''}" data-id="${todo.id}">
                            <div class="view">
                                <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
                                <label> ${todo.tarea} </label>
                                <button class="destroy"></button>
                            </div>
                            <input class="edit" value="Create a TodoMVC template">
                    </li>`  
            const div      = document.createElement('div');
            div.innerHTML  = htmlToDo;

            divTodoList.append(div.firstElementChild);
        
        return div.firstElementChild;

};


//Eventos

txtInput.addEventListener('keyup',(evento)=>{
        
        if( evento.keyCode === 13 && txtInput.value.length > 0 ){
                
                const nuevoTodo = new Todo ( txtInput.value );
                todoList.nuevoTodo( nuevoTodo ) ;


                crearTodoHTML(nuevoTodo)
                txtInput.value = '';
                

        }
});


divTodoList.addEventListener('click', (event)=>{

         const nombreElemento =  event.target.localName;
         const todoElemento = event.target.parentElement.parentElement;
         const todoId = todoElemento.getAttribute('data-id');

         
        
         if(nombreElemento.includes('input') ){   //--click en el check

                todoList.marcarCompletado(todoId) ;
                todoElemento.classList.toggle('completed')


         }else if ( nombreElemento.includes('button')){    //-- hay que borrar el todo
                todoList.eliminarTodo(todoId);
                divTodoList.removeChild(todoElemento );
         }
         
}) ;

btnClean.addEventListener('click', ()=>{

        todoList.eliminarCompletados()
        console.log(todoList);
        for( let i =divTodoList.children.length-1;i >=0; i--) {
                const  elemento =   divTodoList.children[i];
                if (elemento.classList.contains('completed')){
                        divTodoList.removeChild(elemento) 

                } 
        }


});



 ulfiltros.addEventListener('click',(event)=>{
         console.log(event.target.text);

         const filtro = event.target.text;

         if (!filtro) {return;}

         anchorFiltros.forEach( elem => elem.classList.remove('selected') )
         event.target.classList.toggle('selected');

         for (const elemento of divTodoList.children){
           
                 elemento.classList.remove('hidden');
                 const completado = elemento.classList.contains('completed')              
                 
                
                
                 switch (filtro){
                         case 'Completados':
                                 if(!completado){
                                         elemento.classList.add('hidden');
                                         
                                 };break
                         case 'Pendientes':
                                 if(completado){
                                         elemento.classList.add('hidden');
                                         
                                 };break
                 }
         }
   
 })

 
/* const completados      = document.getElementsByClassName('.completed');
 conteo = completados.length
 console.log(conteo);*/
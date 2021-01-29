import { Todo } from '.';

export class TodoList {
    
    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    marcarTodos(hecho){
        for(const todo of this.todos){
            todo.completado = hecho;
            this.guardarLocalStorage();
        }
    }
    
    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id !=  id );
        this.guardarLocalStorage();
    }

    eliminarCompletados(id){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [] ;
        
        this.todos = this.todos.map( Todo.fromJson );
        const todoContador = document.querySelector('.todo-count').firstChild;
        const pendientes = this.todos.filter(todo => !todo.completado);
        todoContador.innerText = pendientes.length;

        const btnAllComplete = document.querySelector('#all-complete-button');
        if(this.todos.length > 0){
            btnAllComplete.classList.remove('hidden');
        }

        const btnBorrarCompletados = document.querySelector('.clear-completed');
        const completados = this.todos.length - pendientes.length;

        if( completados > 0){
            btnBorrarCompletados.classList.remove('hidden');
        }
        if( completados === this.todos.length){
            setTimeout(() => {
                btnAllComplete.click();
            }, 50);
        }
    }
}
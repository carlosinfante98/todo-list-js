import { Todo } from '../classes';
import { todoList} from '../index';

// Referencias en HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
export const btnAllComplete = document.querySelector('#all-complete-button');
let btnCompletePressed = false;

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div =document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div;
}

const actualizarContador = () => {
    const todoContador = document.querySelector('.todo-count').firstChild;
    const pendientes = todoList.todos.filter(todo => !todo.completado);
    todoContador.innerText = pendientes.length;
};

// EVENTOS

// Listener para el input donde se escriben los inputs
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode == 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
        btnAllComplete.classList.remove('hidden');
        actualizarContador();
    }
});

// Listener para la lista de todos
divTodoList.addEventListener('click', (event) => {
    const completadosAntesClick = todoList.todos.filter(todo => todo.completado);
    let estabaLleno = completadosAntesClick.length == todoList.todos.length;
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){ //click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

        const completados = todoList.todos.filter(todo => todo.completado);
        if(completados.length > 0){
            btnBorrarCompletados.classList.remove('hidden');
        }
        else{
            btnBorrarCompletados.classList.add('hidden');
            if( btnCompletePressed ){
                btnAllComplete.click();
            }
        }

        if( completados.length == todoList.todos.length){
            btnAllComplete.click();
        }
        else{
            if( estabaLleno ){
                
                btnAllComplete.click();
                todoList.marcarTodos(true);
                for(const elem of divTodoList.children){
                    elem.classList.toggle('completed');
                    const checkbox = elem.getElementsByClassName('toggle').item(0);
                    checkbox.checked = true;
                }
                todoList.marcarCompletado(todoId);
                todoElemento.classList.toggle('completed');
                event.target.checked = false;
                btnBorrarCompletados.classList.remove('hidden');
                if(todoList.todos.length == 1){
                    btnAllComplete.click();
                }
            }
        }
    }
    else if( nombreElemento.includes('button') ){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
        if( todoList.todos.length === 0){
            btnAllComplete.classList.add('hidden');
        }
        if( btnCompletePressed ){
            btnAllComplete.click();
        }
        const completosRestantes = todoList.todos.filter(todo => todo.completado);
        if(completosRestantes.length === 0){
            btnBorrarCompletados.classList.add('hidden');
        }
    }
    actualizarContador();
});

// Listener para boton de borrar completados
btnBorrarCompletados.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length - 1; i >= 0; i--){
        
        const elemento = divTodoList.children[i];
        
        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
    actualizarContador();
    btnBorrarCompletados.classList.add('hidden');
    if( todoList.todos.length === 0){
        btnAllComplete.classList.add('hidden');
        btnAllComplete.click();
    }
});

// Listener para botones de filtros
ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    if(!filtro) {return ;}

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;
            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
});

// Listener para el boton de completar todos los todos
btnAllComplete.addEventListener('click', (event) => {
    btnCompletePressed = !btnCompletePressed;
    
    if(btnCompletePressed){
        todoList.todos.forEach(todo => todo.completado = true);
        for(const elem of divTodoList.children){
            elem.classList.add('completed');
            const checkbox = elem.getElementsByClassName('toggle').item(0);
            checkbox.checked = true;
        }
        todoList.marcarTodos(true);
        btnBorrarCompletados.classList.remove('hidden');
    }
    else{
        todoList.todos.forEach(todo => todo.completado = false);
        for(const elem of divTodoList.children){
            elem.classList.remove('completed');
            const checkbox = elem.getElementsByClassName('toggle').item(0);
            checkbox.checked = false;
        }
        todoList.marcarTodos(false);
        btnBorrarCompletados.classList.add('hidden');
    }
    actualizarContador();
});
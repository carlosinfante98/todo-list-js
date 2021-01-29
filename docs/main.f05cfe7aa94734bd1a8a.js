(()=>{"use strict";var e={378:(e,t,o)=>{function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}o.d(t,{L:()=>S});var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}return r(e,null,[{key:"fromJson",value:function(t){var o=t.id,n=t.tarea,r=t.completado,a=t.creado,i=new e(n);return i.id=o,i.completado=r,i.creado=a,i}}]),r(e,[{key:"imprimirClase",value:function(){console.log("Todo con id ".concat(this.id," de objeto"))}}]),e}();function i(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,o,n;return t=e,(o=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,o=i(this.todos);try{for(o.s();!(t=o.n()).done;){var n=t.value;if(n.id==e){n.completado=!n.completado,this.guardarLocalStorage();break}}}catch(e){o.e(e)}finally{o.f()}}},{key:"marcarTodos",value:function(e){var t,o=i(this.todos);try{for(o.s();!(t=o.n()).done;)t.value.completado=e,this.guardarLocalStorage()}catch(e){o.e(e)}finally{o.f()}}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"eliminarCompletados",value:function(e){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(a.fromJson);var e=document.querySelector(".todo-count").firstChild,t=this.todos.filter((function(e){return!e.completado}));e.innerText=t.length;var o=document.querySelector("#all-complete-button");this.todos.length>0&&o.classList.remove("hidden");var n=document.querySelector(".clear-completed"),r=this.todos.length-t.length;r>0&&n.classList.remove("hidden"),r===this.todos.length&&setTimeout((function(){o.click()}),50)}}])&&c(t.prototype,o),n&&c(t,n),e}();function d(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var f=document.querySelector(".todo-list"),m=document.querySelector(".new-todo"),h=document.querySelector(".clear-completed"),v=document.querySelector(".filters"),y=document.querySelectorAll(".filtro"),g=document.querySelector("#all-complete-button"),p=!1,b=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n            <label>").concat(e.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),o=document.createElement("div");return o.innerHTML=t,f.append(o.firstElementChild),o},L=function(){var e=document.querySelector(".todo-count").firstChild,t=S.todos.filter((function(e){return!e.completado}));e.innerText=t.length};m.addEventListener("keyup",(function(e){if(13==e.keyCode&&m.value.length>0){var t=new a(m.value);S.nuevoTodo(t),b(t),m.value="",g.classList.remove("hidden"),L()}})),f.addEventListener("click",(function(e){var t=S.todos.filter((function(e){return e.completado})).length==S.todos.length,o=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");if(o.includes("input")){S.marcarCompletado(r),n.classList.toggle("completed");var a=S.todos.filter((function(e){return e.completado}));if(a.length>0?h.classList.remove("hidden"):(h.classList.add("hidden"),p&&g.click()),a.length==S.todos.length)g.click();else if(t){g.click(),S.marcarTodos(!0);var i,l=d(f.children);try{for(l.s();!(i=l.n()).done;){var c=i.value;c.classList.toggle("completed"),c.getElementsByClassName("toggle").item(0).checked=!0}}catch(e){l.e(e)}finally{l.f()}S.marcarCompletado(r),n.classList.toggle("completed"),e.target.checked=!1,h.classList.remove("hidden")}}else o.includes("button")&&(S.eliminarTodo(r),f.removeChild(n),0===S.todos.length&&g.classList.add("hidden"));L()})),h.addEventListener("click",(function(){S.eliminarCompletados();for(var e=f.children.length-1;e>=0;e--){var t=f.children[e];t.classList.contains("completed")&&f.removeChild(t)}L(),h.classList.add("hidden"),0===S.todos.length&&(g.classList.add("hidden"),g.click())})),v.addEventListener("click",(function(e){var t=e.target.text;if(t){y.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var o,n=d(f.children);try{for(n.s();!(o=n.n()).done;){var r=o.value;r.classList.remove("hidden");var a=r.classList.contains("completed");switch(t){case"Pendientes":a&&r.classList.add("hidden");break;case"Completados":a||r.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}}})),g.addEventListener("click",(function(e){if(p=!p){S.todos.forEach((function(e){return e.completado=!0}));var t,o=d(f.children);try{for(o.s();!(t=o.n()).done;){var n=t.value;n.classList.add("completed"),n.getElementsByClassName("toggle").item(0).checked=!0}}catch(e){o.e(e)}finally{o.f()}S.marcarTodos(!0),h.classList.remove("hidden")}else{S.todos.forEach((function(e){return e.completado=!1}));var r,a=d(f.children);try{for(a.s();!(r=a.n()).done;){var i=r.value;i.classList.remove("completed"),i.getElementsByClassName("toggle").item(0).checked=!1}}catch(e){a.e(e)}finally{a.f()}S.marcarTodos(!1),h.classList.add("hidden")}L()}));var S=new s;S.todos.forEach(b)}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(378)})();
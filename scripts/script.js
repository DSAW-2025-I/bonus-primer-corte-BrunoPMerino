function agregarTarea() {
    const tareaInput = document.getElementById("tareaInput");
    const tareaTexto = tareaInput.value.trim();
    if (tareaTexto === "") return;
    
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
        li.style.textDecoration = this.checked ? "line-through" : "none";
    };
    
    const span = document.createElement("span");
    span.textContent = tareaTexto;
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
        li.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botonEliminar);
    document.getElementById("listaTareas").appendChild(li);
    tareaInput.value = "";
}
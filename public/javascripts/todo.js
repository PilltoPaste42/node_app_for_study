function todoCheckChenged(id) {  
    text = document.getElementById('todo-text-' + id);
    checkbox = document.getElementById('todo-check-' + id);

    if (checkbox.checked === true) {
        text.classList.add('checked');
    } else {
        text.classList.remove('checked');
    }
}
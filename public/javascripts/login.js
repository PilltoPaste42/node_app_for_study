var alert = document.getElementById('loginAlert');

if (alert.innerHTML === 'Success!'){
    alert.innerHTML = '<p class="alert alert-success"> Вход выполнен успешно! </p>'
} else if(alert.innerHTML === 'Fail!') {
    alert.innerHTML = '<p class="alert alert-danger"> Неверный логин или пароль! </p>'
}


//alert = '<p class="alert alert-success"> Tada! </p>';
function abaInicio () {

}

function cadProd () {

}

function abaInicio () {

}

function cadProd () {

}
function abaInicio () {

}

function formMenu(type) {
    const inicio = document.getElementById('inicio');
    const produtos = document.getElementById('produtos');
    const meusProd = document.getElementById('meusProd');
    const precos = document.getElementById('precos');
    const config = document.getElementById('config');

    if (type === 'inicio') {
        slider.style.transform = 'translateX(-50%)';
        indicator.style.transform = 'translateX(100%)';
        btnRegister.classList.add('active');
        btnLogin.classList.remove('active');
    } else if (type === 'produtos') {
        slider.style.transform = 'translateX(0)';
        indicator.style.transform = 'translateX(0)';
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
    } else if (type === 'meusProd') {
        slider.style.transform = 'translateX(0)';
        indicator.style.transform = 'translateX(0)';
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
    } else if (type === 'precos') {
        slider.style.transform = 'translateX(0)';
        indicator.style.transform = 'translateX(0)';
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
    } else if (type === 'config') {
        slider.style.transform = 'translateX(0)';
        indicator.style.transform = 'translateX(0)';
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
    }

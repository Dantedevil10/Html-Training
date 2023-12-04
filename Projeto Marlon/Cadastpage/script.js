function menubar(){
    let menu = document.querySelector('.menu')
    let menuh = document.querySelector('.menu h1')
    let menui = document.querySelector('.menu img')

    if(menu.style.width != '200px'){
        menu.style.width = '200px'
        menuh.style.left = '19px '
        menui.style.boxShadow = '1px 1px 6px black'
        
    }else{
        menu.style.width = '0px'
        menuh.style.left = '1900px'
        menui.style.boxShadow = '0px 0px 0px black'
    }


}
function verificarContador() {
    // Obter o valor do campo de texto
    var mensagem = document.getElementById('mensagem').value;

    // Contar o número de letras
    var numeroDeLetras = mensagem.replace(/[^a-zA-Z]/g, '').length;

    // Enviar a mensagem se o número de letras for maior que 0
    if (numeroDeLetras > 0) {
        alert('Mensagem enviada');
    } else {
        alert('Você Não pode Deixar Email EM Branco');
    }
}

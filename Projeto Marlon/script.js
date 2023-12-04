function menubar(){
    let menu = document.querySelector('.menu')
    let menuh = document.querySelector('.menu h1')

    if(menu.style.width != '200px'){
        menu.style.width = '200px'
        menuh.style.left = '19px'
        
    }else{
        menu.style.width = '0px'
        menuh.style.left = '1900px'
    }


}
function menubar1() {
    let puxar2 = document.querySelector('.menubar');
  
    if (puxar2.style.width === '0px' || puxar2.style.width === '') {
      puxar2.style.width = '500px';
    } else {
      puxar2.style.width = '0px';
    }
  }
  
window.onscroll = function showHeader () {

    var header = document.querySelector ('.head')
    const
    
    if(window.pageYOffset > 50) {
        header.classList.add('header_fixed')   }
        else(header.classList.remove('header_fixed'))
}
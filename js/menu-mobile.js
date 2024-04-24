
var toggleBtn = document.querySelector('#toggle-menu');

toggleBtn.addEventListener('click', () => {
    var toggleBtnIcon = document.querySelector('#toggle-menu');
    var dropDownMenu = document.querySelector('.dropdown-menu');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? toggleBtnIcon.src = "./images/icon-close.svg"
        : toggleBtnIcon.src = "./images/icon-menu.svg"
        
})
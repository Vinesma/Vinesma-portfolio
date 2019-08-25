// Select DOM items
const menuBtn = document.querySelector('.hm');

//set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('active');        

        //set menu state
        showMenu = true;
    }else{
        menuBtn.classList.remove('active');

        //set menu state
        showMenu = false;
    }
}
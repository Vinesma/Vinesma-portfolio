// Select filters
const selectAllBtn = document.querySelector     ('#select-all');
const wallpaperctgCheck = document.querySelector('#wallpaper-ctg');
const iconsLogosCheck = document.querySelector  ('#icon-ctg');
const vectorCheck = document.querySelector      ('#vector-ctg');
const pixelartCheck = document.querySelector    ('#pixelart-ctg');
const traditionalCheck = document.querySelector ('#traditional-ctg');
const photoshopCheck = document.querySelector   ('#photoshop-ctg');
const coreldrawCheck = document.querySelector   ('#coreldraw-ctg');

// Select filterable content
const allWallpapers = document.querySelectorAll ('.wallpaper');
const allIconsLogos = document.querySelectorAll ('.icon-logo');
const allVectors = document.querySelectorAll    ('.vector');
const allPixelart = document.querySelectorAll   ('.pixelart');
const allTraditional = document.querySelectorAll('.traditional');
const allPhotoshop = document.querySelectorAll  ('.photoshop');
const allCoreldraw = document.querySelectorAll  ('.coreldraw');

// Add event listeners to buttons and checkboxes
selectAllBtn.addEventListener       ('click', eventSelectAll);
wallpaperctgCheck.addEventListener  ('click', changeDisplayAll);
iconsLogosCheck.addEventListener    ('click', changeDisplayAll);
vectorCheck.addEventListener        ('click', changeDisplayAll);
pixelartCheck.addEventListener      ('click', changeDisplayAll);
traditionalCheck.addEventListener   ('click', changeDisplayAll);
photoshopCheck.addEventListener     ('click', changeDisplayAll);
coreldrawCheck.addEventListener     ('click', changeDisplayAll);

function eventSelectAll(){
    wallpaperctgCheck.checked   = true;
    iconsLogosCheck.checked     = true;
    vectorCheck.checked         = true;
    pixelartCheck.checked       = true;
    traditionalCheck.checked    = true;
    photoshopCheck.checked      = true;
    coreldrawCheck.checked      = true;

    changeDisplayAll();
}

function changeDisplayAll(){
    changeDisplay(wallpaperctgCheck, allWallpapers);
    changeDisplay(iconsLogosCheck, allIconsLogos);
    changeDisplay(vectorCheck, allVectors);
    changeDisplay(pixelartCheck, allPixelart);
    changeDisplay(traditionalCheck, allTraditional);
    changeDisplay(photoshopCheck, allPhotoshop);
    changeDisplay(coreldrawCheck, allCoreldraw);
}

function changeDisplay(checkbox, filterItems){
    if (checkbox.checked === false){
        filterItems.forEach(item => {
            item.style.display = 'none';
        });
    }else{
        filterItems.forEach(item =>{
            item.style.display = 'block';
        });
    }
}
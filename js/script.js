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
wallpaperctgCheck.addEventListener  ('click', eventChangeDisplay);
iconsLogosCheck.addEventListener    ('click', eventChangeDisplay);
vectorCheck.addEventListener        ('click', eventChangeDisplay);
pixelartCheck.addEventListener      ('click', eventChangeDisplay);
traditionalCheck.addEventListener   ('click', eventChangeDisplay);
photoshopCheck.addEventListener     ('click', eventChangeDisplay);
coreldrawCheck.addEventListener     ('click', eventChangeDisplay);

function eventSelectAll(){
    wallpaperctgCheck.checked   = true;
    iconsLogosCheck.checked     = true;
    vectorCheck.checked         = true;
    pixelartCheck.checked       = true;
    traditionalCheck.checked    = true;
    photoshopCheck.checked      = true;
    coreldrawCheck.checked      = true;

    eventChangeDisplay();
}

function eventChangeDisplay(){
    if(wallpaperctgCheck.checked === false) {
        allWallpapers.forEach(item => {
            item.style.display = 'none';
        })
    }else{
        allWallpapers.forEach(item => {
            item.style.display = 'block';
        })
    }

    if(iconsLogosCheck.checked === false) {
        allIconsLogos.forEach(item => {
            item.style.display = 'none';
        })
    }else{
        allIconsLogos.forEach(item => {
            item.style.display = 'block';
        })
    }

    if(vectorCheck.checked === false) {
        allVectors.forEach(item => {
            item.style.display = 'none';
        })
    }else{
        allVectors.forEach(item => {
            item.style.display = 'block';
        })
    }

    if(pixelartCheck.checked === false) {
        allPixelart.forEach(item => {
            item.style.display = 'none';
        })
    }else{
        allPixelart.forEach(item => {
            item.style.display = 'block';
        })
    }

    if(traditionalCheck.checked === false) {
        allTraditional.forEach(item => {
            item.style.display = 'none';
        })
    }else{
        allTraditional.forEach(item => {
            item.style.display = 'block';
        })
    }

    if(photoshopCheck.checked === false) {
        allPhotoshop.forEach(item => {
            item.style.display = 'none';
        })
    }else{
        allPhotoshop.forEach(item => {
            item.style.display = 'block';
        })
    }

    if(coreldrawCheck.checked === false) {
        allCoreldraw.forEach(item => {
            item.style.display = 'none';
        })
    }else{
        allCoreldraw.forEach(item => {
            item.style.display = 'block';
        })
    }
}
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
wallpaperctgCheck.addEventListener  ('change', eventChangeDisplay(wallpaperctgCheck));
iconsLogosCheck.addEventListener    ('change', eventChangeDisplay(iconsLogosCheck));
vectorCheck.addEventListener        ('change', eventChangeDisplay(vectorCheck));
pixelartCheck.addEventListener      ('change', eventChangeDisplay(pixelartCheck));
traditionalCheck.addEventListener   ('change', eventChangeDisplay(traditionalCheck));
photoshopCheck.addEventListener     ('change', eventChangeDisplay(photoshopCheck));
coreldrawCheck.addEventListener     ('change', eventChangeDisplay(coreldrawCheck));

function eventSelectAll(e){
    wallpaperctgCheck.checked = true;
    iconsLogosCheck.checked = true;
    vectorCheck.checked = true;
    pixelartCheck.checked = true;
    traditionalCheck.checked = true;
    photoshopCheck.checked = true;
    coreldrawCheck.checked = true;
}

function eventChangeDisplay(e){
    switch (e) {
        case value:

            break;
        default:
            break;
    }
}
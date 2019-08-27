// Select filters
const wallpaperCheck = document.querySelector   ('#wallpaper-ctg');
const pixelartCheck = document.querySelector    ('#pixelart-ctg');
const traditionalCheck = document.querySelector ('#traditional-ctg');
const vectorCheck = document.querySelector      ('#vector-ctg');
const iconsLogosCheck = document.querySelector  ('#icon-ctg');
const bannerCheck = document.querySelector      ('#banner-ctg');
const photoshopCheck = document.querySelector   ('#photoshop-ctg');
const coreldrawCheck = document.querySelector   ('#coreldraw-ctg');

// Select clickable text
const selectAllBtn = document.querySelector   ('#select-all');
const selectNoneBtn = document.querySelector  ('#select-none');
const wallpaperBtn = document.querySelector   ('#wp-click');
const vectorBtn = document.querySelector      ('#vc-click');
const pixelartBtn = document.querySelector    ('#pa-click');
const traditionalBtn = document.querySelector ('#tr-click');
const iconsLogosBtn = document.querySelector  ('#ic-click');
const bannerBtn = document.querySelector      ('#bn-click');
const photoshopBtn = document.querySelector   ('#ph-click');
const coreldrawBtn = document.querySelector   ('#co-click');

// Select filterable content
const allWallpapers = document.querySelectorAll ('.wallpaper');
const allVectors = document.querySelectorAll    ('.vector');
const allPixelart = document.querySelectorAll   ('.pixelart');
const allTraditional = document.querySelectorAll('.traditional');
const allIconsLogos = document.querySelectorAll ('.icon-logo');
const allBanners = document.querySelectorAll    ('.banner');
const allPhotoshop = document.querySelectorAll  ('.photoshop');
const allCoreldraw = document.querySelectorAll  ('.coreldraw');

// Add event listeners to buttons and checkboxes
wallpaperCheck.addEventListener     ('click', function(){ changeDisplay(wallpaperCheck, allWallpapers); });
vectorCheck.addEventListener        ('click', function(){ changeDisplay(vectorCheck, allVectors); });
pixelartCheck.addEventListener      ('click', function(){ changeDisplay(pixelartCheck, allPixelart); });
traditionalCheck.addEventListener   ('click', function(){ changeDisplay(traditionalCheck, allTraditional); });
iconsLogosCheck.addEventListener    ('click', function(){ changeDisplay(iconsLogosCheck, allIconsLogos); });
bannerCheck.addEventListener        ('click', function(){ changeDisplay(bannerCheck, allBanners); });
photoshopCheck.addEventListener     ('click', function(){ changeDisplay(photoshopCheck, allPhotoshop); });
coreldrawCheck.addEventListener     ('click', function(){ changeDisplay(coreldrawCheck, allCoreldraw); });

wallpaperBtn.addEventListener     ('click', function(){ changeDisplayBtn(wallpaperCheck, allWallpapers); });
vectorBtn.addEventListener        ('click', function(){ changeDisplayBtn(vectorCheck, allVectors); });
pixelartBtn.addEventListener      ('click', function(){ changeDisplayBtn(pixelartCheck, allPixelart); });
traditionalBtn.addEventListener   ('click', function(){ changeDisplayBtn(traditionalCheck, allTraditional); });
iconsLogosBtn.addEventListener    ('click', function(){ changeDisplayBtn(iconsLogosCheck, allIconsLogos); });
bannerBtn.addEventListener        ('click', function(){ changeDisplayBtn(bannerCheck, allBanners); });
photoshopBtn.addEventListener     ('click', function(){ changeDisplayBtn(photoshopCheck, allPhotoshop); });
coreldrawBtn.addEventListener     ('click', function(){ changeDisplayBtn(coreldrawCheck, allCoreldraw); });

selectAllBtn.addEventListener       ('click', eventSelectAll);
selectNoneBtn.addEventListener      ('click', eventSelectNone);

function eventSelectAll(){
    wallpaperCheck.checked      = true;
    vectorCheck.checked         = true;
    pixelartCheck.checked       = true;
    traditionalCheck.checked    = true;
    iconsLogosCheck.checked     = true;
    bannerCheck.checked         = true;
    photoshopCheck.checked      = true;
    coreldrawCheck.checked      = true;

    changeDisplay(wallpaperCheck, allWallpapers);
    changeDisplay(vectorCheck, allVectors);
    changeDisplay(pixelartCheck, allPixelart);
    changeDisplay(traditionalCheck, allTraditional);
    changeDisplay(iconsLogosCheck, allIconsLogos);
    changeDisplay(bannerCheck, allBanners);
    changeDisplay(photoshopCheck, allPhotoshop);
    changeDisplay(coreldrawCheck, allCoreldraw);
}

function eventSelectNone(){
    wallpaperCheck.checked      = false;
    vectorCheck.checked         = false;
    pixelartCheck.checked       = false;
    traditionalCheck.checked    = false;
    iconsLogosCheck.checked     = false;
    bannerCheck.checked         = false;
    photoshopCheck.checked      = false;
    coreldrawCheck.checked      = false;

    changeDisplay(wallpaperCheck, allWallpapers);
    changeDisplay(vectorCheck, allVectors);
    changeDisplay(pixelartCheck, allPixelart);
    changeDisplay(traditionalCheck, allTraditional);
    changeDisplay(iconsLogosCheck, allIconsLogos);
    changeDisplay(bannerCheck, allBanners);
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

function changeDisplayBtn(checkbox, filterItems){
    checkbox.checked = !checkbox.checked;

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
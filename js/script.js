// Select navigation buttons
const collapseAllBtn = document.querySelector('#collapse-all');
const expandAllBtn   = document.querySelector('#expand-all');

// Select clickable wrappers
const wallpaperBtn = document.querySelector('.wallpaper');
const vectorBtn = document.querySelector('.vector');
const pixelArtBtn = document.querySelector('.pixelart');
const traditionalBtn = document.querySelector('.traditional');
const iconBtn = document.querySelector('.icon');
const bannerBtn = document.querySelector('.banner');

// Select their displayboxes
let wallpaperDisplay = wallpaperBtn.lastElementChild;
let vectorDisplay = vectorBtn.lastElementChild;
let pixelArtDisplay = pixelArtBtn.lastElementChild;
let traditionalDisplay = traditionalBtn.lastElementChild;
let iconDisplay = iconBtn.lastElementChild;
let bannerDisplay = bannerBtn.lastElementChild;

// Add event listeners to items
collapseAllBtn.addEventListener('click', collapseAll);
expandAllBtn.addEventListener('click', expandAll);

wallpaperBtn.firstElementChild.addEventListener('click', function(){ changeDisplay(wallpaperDisplay); });
vectorBtn.firstElementChild.addEventListener('click', function(){ changeDisplay(vectorDisplay); });
pixelArtBtn.firstElementChild.addEventListener('click', function(){ changeDisplay(pixelArtDisplay); });
traditionalBtn.firstElementChild.addEventListener('click', function(){ changeDisplay(traditionalDisplay); });
iconBtn.firstElementChild.addEventListener('click', function(){ changeDisplay(iconDisplay); });
bannerBtn.firstElementChild.addEventListener('click', function(){ changeDisplay(bannerDisplay); });

// FUNCTIONS

function changeDisplay(itemNode){
    if (itemNode.style.display === "none") {
        itemNode.style.display = "flex";
    } else {
        itemNode.style.display = "none";
    }
}

function expandAll(){
    wallpaperDisplay.style.display = "flex";
    vectorDisplay.style.display = "flex";
    pixelArtDisplay.style.display = "flex";
    traditionalDisplay.style.display = "flex";
    iconDisplay.style.display = "flex";
    bannerDisplay.style.display = "flex";
}

function collapseAll(){
    wallpaperDisplay.style.display = "none";
    vectorDisplay.style.display = "none";
    pixelArtDisplay.style.display = "none";
    traditionalDisplay.style.display = "none";
    iconDisplay.style.display = "none";
    bannerDisplay.style.display = "none";
}
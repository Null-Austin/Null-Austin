document.querySelectorAll("*",e=>{
    e.style.fontFamily = "Papyrus";
    e.style.background = "unset";
    e.style.backgroundColor = "";
});

document.querySelector('div#header').style.background = 'url(\'https://static.wikia.nocookie.net/c182800e-d3b0-40d2-8cd1-b2c077816705/scale-to-width/755\') no-repeat center';
document.querySelector('div#header').style.backgroundSize = 'cover';
document.body.style.background = 'url(\'https://wallpapers.com/images/featured/funny-cat-v24i6v24vmtk4ygu.jpg\') no-repeat center';
document.body.style.backgroundSize = 'cover';
document.querySelector('.mainDiv').style.backgroundColor = '';

import styles from 'https://cdn.jsdelivr.net/gh/null-austin/pb-assets/Papyrus-Regular-stylesheet.css' assert { type: 'css' };
document.adoptedStyleSheets = [styles];

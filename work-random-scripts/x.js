let a = (selector) => document.querySelector(selector);
let x = a("div#header").style;
let b = document.body.style;

x.background = "url(\"https://static.wikia.nocookie.net/c182800e-d3b0-40d2-8cd1-b2c077816705/scale-to-width/755\") no-repeat center";
x.backgroundSize = "cover";
a(".mainDiv").style.backgroundColor = "transparent";
b.background = "url(\"https://cataas.com/cat\") no-repeat center";
b.backgroundSize = "cover";

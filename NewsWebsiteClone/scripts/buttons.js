const closeMenuBut = document.getElementById("closeMenuIcon");
const openMenuBut = document.getElementById("openMenuBut");
const theMenu = document.getElementById("mainMenuConiner");
const mainPageData = document.getElementById("main");
const mainPageData1 = document.getElementById("LiveDataMenu");
const mainPageData2 = document.getElementById("shrinkedDateTopBar");
const mainPageData3 = document.getElementById("shrinkedMain");


closeMenuBut.addEventListener('click', () => { 
    theMenu.style.display = "none"; 
    mainPageData.style.display = "block";
    mainPageData1.style.display = "block";
    mainPageData2.style.display = "block";
    mainPageData3.style.display = "flex";

 });
 openMenuBut.addEventListener('click', () => { 
    theMenu.style.display = "block"; 
    mainPageData.style.display = "none";
    mainPageData1.style.display = "none";
    mainPageData2.style.display = "none";
    mainPageData3.style.display = "none";
});
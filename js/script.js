if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

function showParagraph() {
  var a = document.getElementById("myParagraph");
  if(a.checkVisibility()){
    a.style.display = "none";
  }else{
    a.style.display = "block";
  }
}


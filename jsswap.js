document.onload = mantainClicked();

function mantainClicked()
{
    if (localStorage.getItem("href") == undefined) {
        document.getElementById("pagestyle").setAttribute("href", "stili.css");
    }
    else {
        document.getElementById("pagestyle").setAttribute("href", localStorage.getItem("href"));
        var z = document.getElementById("pagestyle").getAttribute("href");

        if (z == "site_styles_css/TelevideoSTYLE/teletext.css") {
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualtt.png");
            document.getElementById("Living").setAttribute("src", "images/curtains/livingtt.png");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumtt.png");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtaintt.png");
        }

        else if (z == "site_styles_css/BauhausSTYLE/bauhaus.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualbh.jpg");
            document.getElementById("Living").setAttribute("src", "images/curtains/livingbh.jpg");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumbh.jpg");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtainbh.jpg");
        }

        else if (z == "stili.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusual.png");
            document.getElementById("Living").setAttribute("src", "images/curtains/living.png");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/sound.png");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/today.png");
        }

        else if (z == "site_styles_css/GospelSTYLE/gospelSite.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualgo.png");
            document.getElementById("Living").setAttribute("src", "images/curtains/livinggo.png");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumgo.png");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtaingo.png");
        }

        else if (z == "site_styles_css/GalileiSTYLE/galilei.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualg.png");
            document.getElementById("Living").setAttribute("src", "images/curtains/livingg.png");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumg.png");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtaing.png");
        }

        else if (z == "site_styles_css/1890STYLE/artn.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualan.png");
            document.getElementById("Living").setAttribute("src", "images/curtains/livingan.png");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriuman.png");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtainan.png");
        }

        else if (z == "site_styles_css/MilleniumSTYLE/millennium.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualins.jpg");
            document.getElementById("Living").setAttribute("src", "images/curtains/livingins.jpg");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumins.jpg");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtainins.jpg");
        }

        else if (z == "site_styles_css/2025STYLE/2025.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusual20.png");
            document.getElementById("Living").setAttribute("src", "images/curtains/living20.png");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditorium20.png");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtain20.png");
        }

        else if (z == "site_styles_css/2040STYLE/20400.css"){
            document.getElementById("Unusual").setAttribute("src", "images/curtains/unusual40.png");
            document.getElementById("Living").setAttribute("src", "images/curtains/living40.png");
            document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditorium40.png");
            document.getElementById("Curtain").setAttribute("src", "images/curtains/curtain40.png");
        }
    }
}



function swapStyleSheet(url){
    document.getElementById("pagestyle").setAttribute("href", url);
    localStorage.setItem("href", url);
    var x = document.getElementById("pagestyle").getAttribute("href");

    if (x == "site_styles_css/TelevideoSTYLE/teletext.css") {
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualtt.png");
        document.getElementById("Living").setAttribute("src", "images/curtains/livingtt.png");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumtt.png");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtaintt.png");
    }
    else if (x == "site_styles_css/BauhausSTYLE/bauhaus.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualbh.jpg");
        document.getElementById("Living").setAttribute("src", "images/curtains/livingbh.jpg");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumbh.jpg");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtainbh.jpg");
    }
    else if (x == "stili.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusual.png");
        document.getElementById("Living").setAttribute("src", "images/curtains/living.png");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/sound.png");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/today.png");
    }
    else if (x == "site_styles_css/GospelSTYLE/gospelSite.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualgo.png");
        document.getElementById("Living").setAttribute("src", "images/curtains/livinggo.png");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumgo.png");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtaingo.png");
    }

    else if (x == "site_styles_css/GalileiSTYLE/galilei.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualg.png");
        document.getElementById("Living").setAttribute("src", "images/curtains/livingg.png");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumg.png");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtaing.png");
    }

    else if (x == "site_styles_css/1890STYLE/artn.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualan.png");
        document.getElementById("Living").setAttribute("src", "images/curtains/livingan.png");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriuman.png");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtainan.png");
    }
    else if (x == "site_styles_css/MilleniumSTYLE/millennium.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusualins.jpg");
        document.getElementById("Living").setAttribute("src", "images/curtains/livingins.jpg");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditoriumins.jpg");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtainins.jpg");
    }
    else if (x == "site_styles_css/2025STYLE/2025.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusual20.png");
        document.getElementById("Living").setAttribute("src", "images/curtains/living20.png");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditorium20.png");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtain20.png");
    }

    else if (x == "site_styles_css/2040STYLE/20400.css"){
        document.getElementById("Unusual").setAttribute("src", "images/curtains/unusual40.png");
        document.getElementById("Living").setAttribute("src", "images/curtains/living40.png");
        document.getElementById("Auditorium").setAttribute("src", "images/curtains/auditorium40.png");
        document.getElementById("Curtain").setAttribute("src", "images/curtains/curtain40.png");
    }

}

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();


function rndm_itm(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

colours = ["blue", "magenta", "pink", "red", "gray", "brown"];


images = ["dice1.png", "dice2.png"];

function Good_Vibes(){
    document.getElementById("good_vibes").innerHTML = "Be the best version of you!";
}

function changebg(){
    document.body.style.backgroundColor = `${rndm_itm(colours)}`;
}

function Show_Picture(){
    document.getElementById("manage_img").style.display = "block";
}

function changeimg(){
    document.getElementById("manage_img").src = rndm_itm(images);
}

function Hideimg(){
    document.getElementById("manage_img").style.display = "none";
}

function Time(){
    document.getElementById("cur_time").innerHTML = Date();
} 



function header_set(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "center";
      elements[i].style.alignItems = "center";
      elements[i].style.textAlign = "center";
      elements[i].style.background = "cyan";
      elements[i].style.margin = "50px";
    }
    document.getElementById("good_vibes").innerHTML = "Be the best version of you!";
    document.getElementById("manage_img").src = rndm_itm(images);
    document.getElementById("cur_time").innerHTML = Date();
    document.getElementById("manage_img").style.display = "block";
    document.getElementById("manage_img").style.border = "4px solid tan";
}

function Header_Remove(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "left";
      elements[i].style.textAlign = "left";
      elements[i].style.alignItems = "flex-start";
      elements[i].style.margin = "0px";
      elements[i].style.background = "none";
    }
    document.getElementById("manage_img").src = rndm_itm(images);
    document.getElementById("good_vibes").innerHTML = "";
    document.getElementById("manage_img").style.display = "none";
    document.getElementById("cur_time").innerHTML = "";
    document.getElementById("manage_img").style.border = "none";
}
const imgZoro = document.getElementById("img-zoro");
const imgChopper = document.getElementById("img-chopper");
const imgLuffy = document.getElementById("img-luffy");
const imgUsop = document.getElementById("img-usop");
const imgBrook = document.getElementById("img-brook");


imgZoro.addEventListener("click", () =>{
    zoro.style.display='flex';
    tonyChopper.style.display='none';
    luffy.style.display='none';
    usop.style.display='none';
    brook.style.display='none';
})

imgChopper.addEventListener("click", () =>{
    zoro.style.display='none';
    tonyChopper.style.display='flex';
    luffy.style.display='none';
    usop.style.display='none';
    brook.style.display='none';
})

imgLuffy.addEventListener("click", () =>{
    zoro.style.display='none';
    tonyChopper.style.display='none';
    luffy.style.display='flex';
    usop.style.display='none';
    brook.style.display='none';
})

imgUsop.addEventListener("click", () =>{
    zoro.style.display='none';
    tonyChopper.style.display='none';
    luffy.style.display='none';
    usop.style.display='flex';
    brook.style.display='none';
})

imgBrook.addEventListener("click", () =>{
    zoro.style.display='none';
    tonyChopper.style.display='none';
    luffy.style.display='none';
    usop.style.display='none';
    brook.style.display='flex';
})

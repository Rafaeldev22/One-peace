const imgZoro = document.getElementById("img-zoro");
const imgChopper = document.getElementById("img-chopper");
const imgLuffy = document.getElementById("img-luffy");

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

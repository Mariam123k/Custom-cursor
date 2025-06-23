var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(hte){
  crsr.style.left = hte.x+"px"
  crsr.style.top = hte.y+"px"
})

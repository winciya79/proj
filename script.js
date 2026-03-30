function show()
{
    head.style.display="none"
    container.style.display="block"
    catagery.style.display="block"
    redcart.style.display="block"
    cartimg.style.display="none"
}
function update(event)
{
  text.style.display="block"  
}
text.addEventListener
function dele(event)
{
  text.remove()
}
var redcart=document.getElementById("redcart")
var group=document.getElementById("group")
var aline=document.querySelector(".aline")
var alineimg=document.getElementById("lineimg")
aline.addEventListener("click",function(){
  lineimg.style.display="inline-flex"
container.style.display="none"
catagery.style.display="none"
head.style.display="none"
redcart.style.display="none"
})
var bridallehanga=document.getElementById("bridallehanga")
var lehanga=document.querySelector(".lehanga")
lehanga.addEventListener("click",function(){
  bridallehanga.style.display="inline-flex"
container.style.display="none"
catagery.style.display="none"
head.style.display="none"
redcart.style.display="none"
})
var cottonkurti=document.getElementById("cottonkurti")
var kurti=document.querySelector(".kurti")
kurti.addEventListener("click",function(){
cottonkurti.style.display="inline-flex"
container.style.display="none"
catagery.style.display="none"
head.style.display="none"
redcart.style.display="none"
})
var longfrock=document.getElementById("longfrock")
var frock=document.querySelector(".frock")
frock.addEventListener("click",function(){
longfrock.style.display="inline-flex"
container.style.display="none"
catagery.style.display="none"
head.style.display="none"
redcart.style.display="none"
})
var fashionablepant=document.getElementById("fashionablepant")
var pant=document.querySelector(".pant")
pant.addEventListener("click",function(){
fashionablepant.style.display="inline-flex"
container.style.display="none"
catagery.style.display="none"
head.style.display="none"
redcart.style.display="none"
})
var prettysaree=document.getElementById("prettysaree")
var saree=document.querySelector(".saree")
saree.addEventListener("click",function(){
prettysaree.style.display="inline-flex"
container.style.display="none"
catagery.style.display="none"
head.style.display="none"
redcart.style.display="none"
})
var trendytshirt=document.getElementById("trendytshirt")
var tshirt=document.querySelector(".tshirt")
tshirt.addEventListener("click",function(){
trendytshirt.style.display="inline-flex"
container.style.display="none"
catagery.style.display="none"
head.style.display="none"
redcart.style.display="none"
})
var image=document.querySelector("#image")
var iconscontainer=document.querySelector(".iconscontainer")
image.addEventListener("click",function(){
  iconscontainer.style.display="flex"
})

var lineimg=document.querySelector("#lineimg")
var longfrock=document.querySelector("#longfrock")
var bridallehanga=document.querySelector("#bridallehanga")
var cottonkurti=document.querySelector("#cottonkurti")
var fasionablepant=document.querySelector("#fashionablepant")
var prettysaree=document.querySelector("#prettysaree")
var trendytshirt=document.querySelector("#trendytshirt")
var redcart=document.querySelector("#redcart")

var arrow=document.querySelector(".arrow")
var container=document.querySelector("#container")
var catagery=document.querySelector("#catagery")
 arrow.addEventListener("click",function(){
  container.style.display="block"
  catagery.style.display="block"
  redcart.style.display="block"
  lineimg.style.display="none"
  longfrock.style.display="none"
  bridallehanga.style.display="none"
  cottonkurti.style.display="none"
  fashionablepant.style.display="none"
  prettysaree.style.display="none"
  trendytshirt.style.display="none"
  profile.style.display="none"
})

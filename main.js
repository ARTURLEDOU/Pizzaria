menuListArray = ["Pizza Vegetariana","Pizza de quatro queijos","Pizza de frango","Pizza de peito de peru","Pizza de muzzarela"];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags = '<img id = "im1 src = "pizzaImg.png">'
var item=document.getElementById("addItem").value
menuListArray.sort()
htmldata=""
for(var i=0;i<menuListArray.length;i++){
htmldata= htmldata+imgtags+menuListArray[i]+'<br>'
}
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
document.getElementById("displayAddedMenu".innerHTML = htmldata)

addItem();

}
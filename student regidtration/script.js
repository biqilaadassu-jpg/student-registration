const photo = document.getElementById("photo");

const preview = document.getElementById("preview");

photo.addEventListener("change",function(){

const file=this.files[0];

if(file){

preview.src=URL.createObjectURL(file);

}

});

document.getElementById("studentForm")

.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

document.getElementById("message").innerHTML=

"Student <b>"+name+"</b> Registered Successfully!";

});
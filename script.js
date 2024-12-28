var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton =document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton =document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
 event.preventDefault()
 popupoverlay.style.display="none"
 popupbox.style.display="none"
})
//selecting container,add-notes,note-title-input,sub-title-input,notes-input
var container =document.querySelector(".container")
var addnotes =document.getElementById("add-notes")
var notetitle =document.getElementById("note-title-input")
var subtitle =document.getElementById("sub-title-input")
var notesinput=document.getElementById("notes-input")

addnotes.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","notes-container")
    div.innerHTML=`<h2>${notetitle.value}</h2>
            <h5>${subtitle.value}</h5>
            <p>${notesinput.value}</p>
             <button onclick="deletenote(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
}) 

function deletenote(event){
    event.target.parentElement.remove()
}
var inputData=document.getElementById("write-data");
var tasks=document.getElementById("tasks");
var submiteBtn=document.getElementById("submiteBtn");
var complate=document.getElementById("complate");
var mouth=document.querySelector("img");
var alert=document.querySelector(".alert");
var search=document.querySelector(".search");
var updateBtn=document.querySelector(".updateBtn");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var color3=document.querySelector(".color3");
var color4=document.querySelector(".color4");
var mainSection=document.querySelector(".main-section");
var done=document.querySelector(".complate");
var tasksBg=document.querySelector(".tasks");
var tasksColor=document.querySelector(".tasks-complate");
// console.log(complate);
var dataArr=[]
var complateData=[];

if(localStorage.getItem('notes')!=null){
    dataArr=JSON.parse(localStorage.getItem('notes'));
  display();

}
else{
    search.classList.add('d-none')
}

function SearchInput(){
    if(dataArr.length<=1)
{
    search.classList.add('d-none');
}
else{
    search.classList.remove('d-none'); 
}
}

SearchInput()

if(localStorage.getItem('complate')!=null){
    complateData=JSON.parse(localStorage.getItem('complate'));
    displayComplate();
}
function addData(){
   if( validation()==true){
    var notes={
        note :inputData.value,
        }
        dataArr.push(notes);
               dataArr.reverse();

        localStorage.setItem('notes',JSON.stringify(dataArr))
        display()
        clear()
    alert.classList.add('d-none')
SearchInput()
    
   }
   else{
    alert.classList.remove('d-none')
   }
}
function clear(){
    inputData.value="";
}
function display(){
    var cartona =""

    for(var i=0; i<dataArr.length ;i++){
        cartona+=`<div class="task shadow-lg px-3">
        <div class=" mt-2"> 
        <button class="btnComplate"  onClick="complateFun(${i})"><i class="fa-solid fa-check  "></i><buttom/>
         <p class="">${dataArr[i].note}</p>
     </div>
         <div class="">
         <button class="btnUpdate" onClick="update(${i})"> <i class="fa-solid fa-pen-to-square"></i></button>

         <button class="btnClose" onClick="deleteNote(${i})"> <i class="fa-solid fa-xmark "></i></button>
            
         </div>
     </div>`;
    }
    tasks.innerHTML=cartona;

}
function deleteNote(id){
   dataArr.splice(id,1);
   localStorage.setItem('notes',JSON.stringify(dataArr))
display()
SearchInput()
}
var index;
function update(id){
    index=id;
  inputData.value=dataArr[id].note;
  updateBtn.classList.remove("d-none");
  submiteBtn.classList.add('d-none')

}
function changeData(){
dataArr[index].note=inputData.value;
localStorage.setItem('notes',JSON.stringify(dataArr))
display()
updateBtn.classList.add("d-none");
  submiteBtn.classList.remove('d-none')
  clear()
}
// search
function searchData(value){
    var cartona=""
for(var i=0;i<dataArr.length ;i++){
    if(dataArr[i].note.toUpperCase().includes(value.toUpperCase())==true){
        cartona+=`<div class="task shadow-lg px-3">
        <div > 
        <button class="btnComplate"  onClick="complateFun(${i})"><i class="fa-solid fa-check  "></i><buttom/>
         <p class="">${dataArr[i].note}</p>
     </div>
         <div>
         <button class="btnUpdate" onClick="update(${i})"> <i class="fa-solid fa-pen-to-square"></i></button>

         <button class="btnClose" onClick="deleteNote(${i})"> <i class="fa-solid fa-xmark "></i></button>
            
         </div>
     </div>`; 
    }
    
}
tasks.innerHTML=cartona;

}
// complate
function deleteCompalte(id){
    complateData.splice(id,1);
    localStorage.setItem('complate',JSON.stringify(dataArr))
    displayComplate()
 }
 var id;
function complateFun(id){
    var notes={
        note :dataArr[id],
        }
        complateData.push(notes);
        console.log(complateData);

        localStorage.setItem('complate',JSON.stringify(complateData))
        deleteNote(id)
        displayComplate()   
}

function displayComplate()
{
       var cartona =""
       for(var i=0 ;i<complateData.length;i++){
        cartona+=`<div class="task  color-complate  shadow-lg px-3 mt-1">
        <div > 
         <i class="fa-solid fa-check text-muted "></i>
         <p class="text-muted">${complateData[i].note.note}</p>
        </div>
         <div>
         
         <button class="btnClose " onClick="deleteCompalte(${i})"> <i class="fa-solid fa-xmark "></i></button>
         </div>
     </div>`;
       }
    complate.innerHTML=cartona;
}

function validation(){
    if(inputData.value !=""){
        return true
    }
}

// colors
color1.addEventListener('click' , function(){
    mainSection.style.backgroundColor="#3A4BA8";
    done.style.backgroundColor="#3A4BA8";
    tasksBg.style.backgroundColor="#3a4aa886";
    tasksColor.style.backgroundColor="#3a4aa836";
   
})
color2.addEventListener('click' , function(){
    mainSection.style.backgroundColor="#348538";
    done.style.backgroundColor="#348538";
    tasksBg.style.backgroundColor="#348538cb";
    tasksColor.style.backgroundColor="#3485386b";
   
})
color3.addEventListener('click' , function(){
    mainSection.style.backgroundColor="#764DBF";
    done.style.backgroundColor="#764DBF";
    tasksBg.style.backgroundColor="#3a4aa886";
    tasksColor.style.backgroundColor="#3a4aa836";
   
})
color4.addEventListener('click' , function(){
    mainSection.style.backgroundColor="#008C7F";
    done.style.backgroundColor=" #008C7F";
    tasksBg.style.backgroundColor="#93D2CD";
    tasksColor.style.backgroundColor="#B2DFDB";
   
})






var siteName=document.getElementById("siteName");
var siteURL=document.getElementById("siteURL");
var regex = /       /
var sitesContainer = [];
if(localStorage.getItem("sites")!=null){
    sitesContainer = JSON.parse(localStorage.getItem("sites"));
    display();
}

function add(){
    if(validate()==true){
    var site = {
        name:siteName.value,
        URL:siteURL.value,
    }
    
    sitesContainer.push(site);
    localStorage.setItem("sites",JSON.stringify(sitesContainer))
    display();
    clear();  
}
else{
    alert("Enter A Valid Site Name , Site URL");
}
}
function validate(){
    var regexN = /^[a-z]{5,20}$/;
    var regexS = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    if(regexN.test(siteName.value)==true && regexS.test(siteURL.value)==true){
        return true;
    }
    else if(regexN.test(siteName.value)==false || regexS.test(siteURL.value)==false){
        return false;
    }
}


function display(){
    var temp="";
    for(var i = 0 ; i<sitesContainer.length ; i++){
        temp+=`<tr>
        <td>`+(i+1)+`</td>
        <td>`+sitesContainer[i].name +`</td>
        <td><button class="btn btn-info"><a class="text-decoration-none text-bg-info" href="`+sitesContainer[i].URL +`"><i class="fa-solid fa-eye pe-2"></i>Visit</a></button></td>
        <td><button onclick="deleteS(`+i+`)" class="btn btn-danger"> <i class="fa-solid fa-trash-can pe-2"></i> Delete </button></td>
    </tr>`
    }
    document.getElementById("data").innerHTML=temp;
}

function clear(){
    siteName.value="";
    siteURL.value="";
}
function deleteS(index){
    sitesContainer.splice(index,1);
    localStorage.setItem("sites",JSON.stringify(sitesContainer));
    display();

}

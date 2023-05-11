var letters=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var box= /^[A-Za-z]+$/;
var name1,name2,numb,gmail,pass,tnc
function getvals(){
    name1=document.forms["myform"]["name1"].value
    name2=document.forms["myform"]["name2"].value
    numb=document.forms["myform"]["numb"].value
    gmail=document.forms["myform"]["gmail"].value
    pass=document.forms["myform"]["pass"].value

 
    if (name1==""){
        alert("Please fill the first name");
        return false;
    }
    
    if (name2==""){
        alert("Please fill the Last name");
        return false;
    }
    if(numb.length<10 || numb.length>10){
        alert("phone number should be of 10 digits");
        return false;
    }
    if (pass.match(letters)){
        return true;}
        else {
            alert("the password must be greater than 8 digits and must contain 1 special chracter and a number");
            return false;
        }    
        

  }

  
x=1;
const activation=document.querySelector('#bod')
activation.onclick=function (){x-=1;}
para1=document.querySelector('#p1')
para2=document.querySelector('#p2')
para1.onmouseover=function (){
    if (x==1){para1.style.backgroundColor="red";}
}
para1.onmouseout=function (){
    if(x==1){para1.style.backgroundColor='#C2C2C2';}
}
para2.onmouseover=function (){
    if (x==1){para2.style.backgroundColor="red";}
}
para2.onmouseout=function (){
    if(x==1){para2.style.backgroundColor='#C2C2C2';}}
police=document.querySelector("#s")
police.onblur=function (){
    document.querySelector('#b').style.fontFamily=police.value ;
}
var t=document.querySelector("#inputtaille");
var check=document.querySelector("#c1");
t.onblur=function (){
    if(check.checked === true){
        document.querySelector("#b").style.fontSize=t.value + "px";
    }
}
var e7 	= document.getElementById("r1");
var e2 	= document.getElementById("r2");
var e3	=	document.getElementById("r3");
var e4	=	document.getElementById("r4");
e7.onclick=function(){
    document.getElementById("b").style.textAlign= "left";
}
e2.onclick=function(){
    document.getElementById("b").style.textAlign = "right";
}
e3.onclick=function(){
    document.getElementById("b").style.textAlign="center";
}
e4.onclick=function(){
    document.getElementById("b").style.textAlign = "justify";
}
a1=document.querySelector("#a1")
a1.onclick=function(){
    if (window.confirm("really go to google ?")){
        alert('BYE !');
        window.location='http://www.google.com';
    }
    else{
        die();
    }
}
var es2=document.getElementById("a2");

es2.onclick= function(){
    if(window.confirm("Really go to google ??"))
    {
        alert("Bye Bye");
        window.location="http://www.w3c.com";
    }
    else{
        die();
    }
}
var inPseudo = document.getElementById("inPseudo");
var inEmail = document.getElementById("inEmail");
var inCommentaire = document.getElementById("inCommentaire");
var rebutton = document.getElementById("rebutton");
var subButton = document.getElementById("subButton");

var subemail = false;
var subpseudo = false;
var subcomm = false;

inPseudo.onkeyup= function(){

    var i=0;
    while(i < inPseudo.value.length){
        var b = inPseudo.value[i];
        if (!( (b >="a" && b<="z") ||( b>="A" && b<="Z") ||( b<="9" && b>="0")) ){
            var s1= inPseudo.value.substring(0,i);
            var s2= inPseudo.value.substring(i+1,inPseudo.length);
            inPseudo.value = s1+s2;
        }
        i+=1;
    }

    if(inPseudo.value.length!=0){
        subpseudo = true;
    }else{
        subpseudo=false;
    }

}

inPseudo.onkeydown= function(){
    var a=inPseudo.value[inPseudo.value.length-1];
    while(!( (a >="a" && a<="z") ||( a>="A" && a<="Z") ||( a<="9" && a>="0")) && inPseudo.value.length !=0 ){
        inPseudo.value = inPseudo.value.substring(0,inPseudo.value.length-1);
        a=inPseudo.value[inPseudo.value.length-1];

    }
    if(inPseudo.value.length!=0){
        subpseudo = true;
    }else{
        subpseudo=false;
    }
}

inEmail.onblur=function(){
    if(inEmail.value.length !=0){
        var a= inEmail.value.indexOf("@");

        var b= inEmail.value.indexOf(".",inEmail.value.indexOf("@"));
        if(a ==-1 || b==-1){
            inEmail.style.backgroundColor="red";
            subemail = false;
        }
        else{
            inEmail.style.backgroundColor="white";
            subemail =true;
        }

        if(inEmail.value.length!=0){
            subemail = true && subemail;
        }else{
            subemail =false && subemail;
        }
    }
}

inCommentaire.onkeyup= function(){
    var a=inCommentaire.value.length;;
    while(a>10){
        a=inCommentaire.value.length;
        inCommentaire.value = inCommentaire.value.substring(0,a-1);
    }

    if(inCommentaire.value.length!=0){
        subcomm = true;
    }else{
        subcomm =false;
    }
}

subButton.onclick= function () {
    if (subcomm === false || subpseudo===false || subemail === false){
        alert("CHECK YOUR INPUT !! ");
    }
    else{
        alert("THANKS !!");
    }
}

rebutton.onclick= function () {
    subcomm =false;
    subemail=false;
    subpseudo=false;
}
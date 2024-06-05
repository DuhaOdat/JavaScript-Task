
document.getElementById("hello").addEventListener("mouseover", function(){
    
    this.innerHTML="can I help you !";  
});
document.getElementById("hello").addEventListener("mouseout", function() {
    this.innerHTML="Hello world !";  
});




function changeflag()
 {
   let x= document.getElementById('country').value;

   if(x == 'Jordan'){
    document.getElementById('img').src="images/jordan.png";
   }
   else if(x =='Palasten'){
    document.getElementById('img').src="images/palastin.png";
   }
   else if(x =='sudia arabia'){
    document.getElementById('img').src="images/sudia.png";
   }
 }

 function change_font_family(value){
    document.getElementById('text').style.fontFamily=value;
 }

 function change_font_size(value){
    document.getElementById('text').style.fontSize=value;
 }

 function change_style ()
 {
   let text = document.getElementById("text");
    let italic  = document.getElementById("italic");
    let bold  = document.getElementById("bold");
    let underline  = document.getElementById("underline");

    if(text.style.fontStyle = italic.checked)
        {
            document.getElementById("text").style.fontStyle = "italic";
        }
        else
        {
            document.getElementById("text").style.fontStyle = "normal"; 
        }

    text.style.fontWeight=bold.checked?"bold":"normal";
    text.style.textDecoration=underline.checked?"underline":"none";
}
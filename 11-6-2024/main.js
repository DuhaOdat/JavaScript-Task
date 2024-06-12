
const url="https://66681676f53957909ff67af8.mockapi.io/users/Animals";

async function getData(){
  
    const response=  await fetch(url);
    console.log("response",response);
    const jsonData=  await response.json();
    console.log("jsonData",jsonData);


    const animal = document.getElementById("animal");
    const img = document.getElementById("img");

       for(i=0;i<jsonData.length;i++){

          const node = document.createElement("Option");
          const textnode = document.createTextNode(jsonData[i].name);
          node.appendChild(textnode);
          let myOption= document.getElementById("animal").appendChild(node);
              myOption.value=jsonData[i].name;
              
                   }
                    
        animal.addEventListener("change", function() {
          changePhoto(jsonData);
      });

   
      function changePhoto(data) {
          for (let i = 0; i < data.length; i++) {
              if (animal.value === data[i].name) {
                  img.src = data[i].image;
                  break;
              }
          }
      }
                 
 
  
}
getData();
var counter=0;
image_array = [
    "-1.jpg",
   "0.jpg",
   "1.jpg",
   "2.jpg",
   "3.jpg",
   "4.jpg",
   "5.jpg",
   "7.jpg",
   "8.jpg",
   "9.jpg",
   "10.jpg"
  ]
  
  function random_image(){
    
    random_index = Math.floor(Math.random() * image_array.length);
  
 
    selected_image = image_array[random_index]
  
    
    
    
    if(counter<2){
  document.getElementById('image_shower').src = `./Players-cards/${selected_image}`
    counter++;
}
else{
    location.replace("timer.html");
}
  }
  
  

  





// document.body.style.backgroundColor ="green"

// function ja_1(name, time){

//     console.log(name + " is sleeping from"+time);

    
    
// }
// ja_1("Kaashem"," 10 PM ");
// ja_1("Robin"," 09 PM");
// ja_1("Yasin"," 11 PM");

const car ={
  model:"BMW",
  weight:"860kg",
  chasis:"1370cc",
  year:2006,

  start:function(){
    console.log("it is a beautiful car");
    this.drive()


 
        
    },
    drive:function() {
        console.log("we like it");
  }





}
console.log(car.model);
console.log(car["weight"]);
car.start()





   

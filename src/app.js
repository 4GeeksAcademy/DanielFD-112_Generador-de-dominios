import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'our', 'your', 'my', 'their'];
let adj = ['great', 'big', 'magnificient', 'extraordinary', 'marvellous'];
let noun = ['jogger', 'racoon', 'potato', 'carrot', 'rock'];

for (let pronombre of pronoun) {
  for (let adjetivo of adj) {
    for (let nombre of noun) {
  
      let cadenaDominio = "www." + pronombre + adjetivo + nombre + ".com";
    // let cadenaDominio = `www.${pronombre}${adjetivo}${nombre}.com` // TAMBIÉN SE PUEDE HACER ASÍ
      console.log(cadenaDominio);
    }
  }
}
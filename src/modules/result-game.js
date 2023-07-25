
import { createElement } from "./createDOMElement.js";

export function showResultGame(result){
const areaShowChoice=document.querySelector('.show-choice');
function textResultGame(result){
  const textResult =createElement('p',['result'],null,`${result}`,null)
areaShowChoice.appendChild(textResult)};

function createBtnNewPlay(){
const buttonPlay =createElement('button',['btn-play'],null,'play again',null);
areaShowChoice.appendChild(buttonPlay);
buttonPlay.addEventListener( "click", newGame);
};


function createBtnPuls(result){
 
  areaShowChoice.insertAdjacentHTML('beforeend',
  '<button class="btn-zero btn-puls"></button><button class="btn-zero btn-puls sm"></button><button class="btn-zero btn-puls sx"></button>');
  
  if(result==='You lose'){
    
    const GetPulsBtn=document.querySelectorAll('.btn-puls');
    GetPulsBtn.forEach(item =>{
      item.style.gridArea = '1/3/3/4'; 
    })
  };
  if(result==='You win'){
    
    const GetPulsBtn=document.querySelectorAll('.btn-puls');
    GetPulsBtn.forEach(item =>{
      item.style.gridArea = '1/1/3/2'; 
    })
  }
   if(result==='Tie'){
     
      const GetPulsBtn=document.querySelectorAll('.btn-puls');
      GetPulsBtn.forEach(item =>{
        item.style.display = 'none'; 
      })
  }
  
}
textResultGame(result);
createBtnNewPlay();
createBtnPuls(result);
}

function newGame(){
  const areaShowChoice=document.querySelector('.show-choice');
 
  areaShowChoice.innerHTML="";
  document.querySelector('.move-game').style.display = "none"; 
  const startGame = document.querySelector(".game");
  startGame.style.display = "flex";

}
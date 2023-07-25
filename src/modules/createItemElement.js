
import { createElement } from "./createDOMElement.js";

//Button
 export function createChoiceBtn(id,style) {
  
  if( id ==="scissors"){
    createItemBtn('btn-choice-scissors',style);
  }
  if( id ==="paper"){
    createItemBtn('btn-choice-paper',style);
      }

  if( id ==="rock"){
    createItemBtn('btn-choice-rock',style);
    
      } 
  createItemBtn('btn-zero','1/3/3/4')
}
function createItemBtn(idStyle,style){
 
  const item = createElement('button', [idStyle],null,null);
  item.style.gridArea = style; 
  const pickedUser=document.querySelector('.show-choice') 
  return  pickedUser.append(item)
}



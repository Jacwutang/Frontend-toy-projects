//
//
// window.onload = function(){
//
//
//   var button = document.getElementById('button');
//   button.addEventListener('click', () => {
//
//     var list = document.getElementById('list');
//
//     var list_item = document.createElement('li');
//     list_item.innerHTML = document.getElementById('input').value;
//
//     list.appendChild(list_item);
//
//   });
//
//
// }

window.onload = () => {
  let app = document.querySelector('main')
  let h1 = document.createElement('h1')

  h1.textContent = 'Simple Todo List'

  let ul = document.createElement('ul');



  let input = document.createElement('input')
  input.placeholder = "Enter Todo Item";
  input.type = "text"

  let array = [];
  input.addEventListener('keyup', (e) => {


    if(e.keyCode === 13 ){
      let li = "<li>" + e.target.value + "<button id='delete' onclick='clearItem()'> Delete </button> </li>";
      ul.innerHTML += li;
      array.push(li);

      window.localStorage.setItem("items", JSON.stringify(array));

      //Reset input field
      input.value = ""
    } else{

      return;
    }

  });


  app.appendChild(h1);
  app.appendChild(ul);
  app.appendChild(input);
}

function clearItem(){

  event.currentTarget.parentElement.remove();

  let items = JSON.parse(window.localStorage.getItem("items"));

  let index = 0;


  for( var i in items){
      console.log(event.currentTarget.parentElement, i, items[i]);
      if(JSON.stringify(event.currentTarget.parentElement) === items[i]){

        return;

      }


  }

  items.splice(i,1);
  // console.log(items);

  window.localStorage.setItem("items", JSON.stringify(items));




}

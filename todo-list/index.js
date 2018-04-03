


function App(){
  //create html structure + starter DOM elements
  var main = document.querySelector('main');
  var h1 = document.createElement('h1');
  h1.textContent = "Simple Todo list";

  document.body.prepend(h1);

  let input = document.createElement('input');
  input.placeholder = "Enter todo item";

  let button = document.createElement('button');
  button.textContent = "Add";
  button.onclick = appendToList;

  let ul = document.createElement('ul');
  var listElements = [];

  main.prepend(ul);
  main.append(input);
  main.append(button);


  function appendToList(){
      //create li and append to list
      let delButton = document.createElement('button');
      delButton.textContent = "Delete";
      delButton.onclick = deleteFromList;

      let li = document.createElement('li');
      li.textContent = document.querySelector('input').value;
      li.append(delButton);
      ul.append(li);

      //add to localStorage

      addToStorage(li);
      let list = JSON.parse(localStorage.getItem('todolist'));
      //console.log(li) returns array of empty objects


      //clear input
      input.value = "";


  }

  function addToStorage(li){
    listElements.push(li);

    localStorage.setItem('todolist', JSON.stringify(listElements));

  }

  function removeFromStorage(){

  }

  function deleteFromList(){
    //remove li from list
    let li = this.parentElement;
    li.remove();


    //remove from localStorage
    removeFromStorage();
  }

  var fetchTodos = function(){
    // return Todos from localStorage
  }


  return{
    fetchTodos
  }









}



window.onload = () => {
  var app = App();

}

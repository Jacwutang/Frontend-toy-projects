


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

  fetchTodos();




  function appendToList(content){
      //create li and append to list
      let delButton = document.createElement('button');
      delButton.textContent = "Delete";
      delButton.onclick = deleteFromList;

      let li = document.createElement('li');

      let inputContent = document.querySelector('input').value;
      console.log("HJERE",inputContent);
      li.textContent = (inputContent) === ""? content: inputContent;


      li.append(delButton);
      ul.append(li);

      //add to localStorage

      let textContent = li.childNodes[0].textContent;
      addToStorage(textContent);
      // let list = JSON.parse(localStorage.getItem('todolist'));
      // console.log(list[0])


      //clear input
      input.value = "";


  }

  function addToStorage(content){

    listElements.push(content);

    localStorage.setItem('todolist', JSON.stringify(listElements));

  }

  function removeFromStorage(li){

    let content = li.childNodes[0].textContent;
    listElements = listElements.filter( (el) => el !== content );
    localStorage.setItem('todolist', JSON.stringify(listElements));
  }

  function deleteFromList(){
    //remove li from list
    let li = this.parentElement;



    //remove from localStorage first
    removeFromStorage(li);
    li.remove();
  }

  function fetchTodos(){
    let list = JSON.parse(localStorage.getItem('todolist'));

    for(let i = 0; i < list.length;i++){
      appendToList(list[i]);
    }
  }

} // App



window.onload = () => {
  var app = App();



}

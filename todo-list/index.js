function App(){

  var main = document.querySelector('main');
  var h1 = document.createElement('h1');
  h1.textContent = "Simple Todo list";
  main.append(h1);

  var createInput = function(){
    console.log("hello world")
  }

  return {
    createInput
  }



}



window.onload = () => {
  var app = new App();
  app.createInput();
}

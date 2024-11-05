function init(){
  var button = document.getElementById('entrybutton');

  function popUp()
  {
    var text = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = text.value;
    alert("Daniel Krieglstein: " + text.value);
  }
   
  button.addEventListener('click', popUp);
  
}
  window.addEventListener('load', init);
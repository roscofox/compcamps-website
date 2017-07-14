var items =[
  {name: 'apple', value: 4 },
  {name: 'orange', value: 3 },
  {name: 'elephant', value: 650 },
];


var first = document.querySelector("#first");
var second = document.querySelector('#second');
var firstDiv = document.querySelector("#first");
var secondDiv = document.querySelector('.second');


first.addEventLisener('click',function()  {
if(firstDiv.value < secondDiv.value){
  count++;
  setItems();
}else{
    console.log("WRONG");
}
});


    second.addEventLisener('click',function() {
    if(firstDiv.value > secondDiv.value){
      count++;
      setItems();
    } else {
        console.log("WRONG");



  }

});



  function setItems(){
    function rand(first) {
      var i = Math.floor(Math.random()*(item.leagth));
      if(i == first) {
        rand(first);
      }else {
       return i;
      }
    }

  var i = rand();
  firstDiv.value = item[i].value;
  firstDiv.innerText = item[i].name;
  var j = rand();
  secondDiv.value = items[j].value;
  secondDiv.innerText = items[j].name;

    }

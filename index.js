function addingEventListener(){
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
    alert('I was clicked!');
    });
}//Recheck for box to pop up in html
/*Does not Work
const input = document.getElementById('button');
function addingEventListener(){
    function clickAlert() {
        alert('I was clicked!');
      }
}
input.addEventListener('click', clickAlert);*/ 
//Box popped with this function 
const Buttons = document.querySelector('#Button');
const List = document.querySelector('.DataContainer');
const OuterContainer = document.querySelector('.OuterContainer');

Buttons.addEventListener('click', ()=>{
   List.style.display='block';
   OuterContainer.style.display='none';
   
});
const Buttons = document.querySelector('#Button');
const List = document.querySelector('.DataContainer');
const OuterContainer = document.querySelector('.OuterContainer');
const close = document.querySelector('.close');

Buttons.addEventListener('click', ()=>{
   List.style.display='block';
   OuterContainer.style.display='none';
});

close.addEventListener('click', ()=>{
   List.style.display = 'none';
   OuterContainer.style.display='flex';
});
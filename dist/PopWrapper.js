const Buttons = document.querySelector('#Button');
const List = document.querySelector('.DataContainer');
const OuterContainer = document.querySelector('.OuterContainer');
const close = document.querySelector('.close');

//this will display the student database section while clicking the database button
Buttons.addEventListener('click', ()=>{
   List.style.display='block';
   OuterContainer.style.display='none';
});

//this will close the student database section while clicking the x 
close.addEventListener('click', ()=>{
   List.style.display = 'none';
   OuterContainer.style.display='flex';
});
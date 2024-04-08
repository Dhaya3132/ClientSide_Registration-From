const TargetList = document.querySelector('.UnorderContainer');
const Editabeltext = document.querySelector('.Edit');

TargetList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('icons'))
    {
      e.target.parentElement.parentElement.remove();
    }
});

TargetList.addEventListener('click', (e)=>{
  if(e.target.classList.contains('deleteicon'))
  {
    Editabeltext.setAttribute("contenteditable","true");
  }
});



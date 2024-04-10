const TargetList = document.querySelector('.StudentTable');

TargetList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('icons'))
    {
      e.target.parentElement.parentElement.parentElement.remove();
    }
});









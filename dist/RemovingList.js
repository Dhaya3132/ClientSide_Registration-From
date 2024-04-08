const TargetList = document.querySelector('.UnorderContainer');

TargetList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('icons'))
    {
      e.target.parentElement.parentElement.remove();
    }
});









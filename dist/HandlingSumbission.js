const Forms = document.querySelector('.FormField');

Forms.addEventListener('Submit', (e)=>{

    e.preventDefault();
    
    Forms.reset();
});

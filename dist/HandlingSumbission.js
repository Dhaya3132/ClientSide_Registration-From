const StudentNames = document.querySelector('#StudentName');
const StudentIds = document.querySelector('#StudentId');
const StudentEmailIds = document.querySelector('#MailId');
const StudentMobileNos = document.querySelector('#MobileNo');

const Forms = document.querySelector('.FormField');
const Unorderitems = document.querySelector('.Unorderlistitems');

function addingList(Data){

    console.log(Data);
    // Unorderitems.innerHTML = `
    //   <li class="Listitems">
    //      <p>${Data.Name}</p>
    //      <p>${Data.Id}</p>
    //      <p>${Data.Email}</p>
    //      <p>${Data.MobileNo}</p>
    //   </li>
    // `

    console.log('element added');
};

Forms.addEventListener('submit', (e)=>{

    e.preventDefault();
    const Data = {
        Name : StudentNames.value,
        Id : StudentIds.value,
        Email : StudentEmailIds.value,
        MobileNo : StudentMobileNos.value,
    };
    addingList(Data);

});







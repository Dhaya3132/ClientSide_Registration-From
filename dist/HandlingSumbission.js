const StudentNames = document.querySelector('#StudentName');
const StudentIds = document.querySelector('#StudentId');
const StudentEmailIds = document.querySelector('#MailId');
const StudentMobileNos = document.querySelector('#MobileNo');

const Forms = document.querySelector('.FormField');
const Unorderitems = document.querySelector('.Unorderlistitems');

Forms.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log('form submitted');
    const Data = {
        Name : StudentNames.value,
        Id : StudentIds.value,
        Email : StudentEmailIds.value,
        MobileNo : StudentMobileNos.value,
    };
    addingList(Data);
});


function addingList(Datas){

    const html = `
      <li class="Listitems">
         <p>${Datas}</p>
         <p>${Datas.Id}</p>
         <p>${Datas.Email}</p>
         <p>${Datas.MobileNo}</p>
      </li>
    `

    Unorderitems.innerHTML += html;
    console.log('element added');
};




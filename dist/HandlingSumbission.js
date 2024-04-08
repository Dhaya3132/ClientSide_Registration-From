const StudentNames = document.querySelector('#StudentName');
const StudentIds = document.querySelector('#StudentId');
const StudentEmailIds = document.querySelector('#MailId');
const StudentMobileNos = document.querySelector('#MobileNo');

const Forms = document.querySelector('.FormField');
const UnOrderList = document.querySelector('.UnorderContainer');



function addingList(Data){

    const StudentList = document.createElement('li');
    StudentList.classList.add('Student');
    StudentList.innerHTML = `
      <li class="Listitems">
         <p>${Data.Name}</p>
         <p>${Data.Id}</p>
         <p>${Data.Email}</p>
         <p>${Data.MobileNo}</p>
      </li>
    `

    UnOrderList.appendChild(StudentList);
    Forms.reset();

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








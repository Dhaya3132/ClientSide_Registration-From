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

        <div class="List_Content">
            <p>Student Name : ${Data.Name}</p>
            <p>Student ID : ${Data.Id}</p>
            <p>Student Email : ${Data.Email}</p>
            <p>Student MobileNo : ${Data.MobileNo}</p>
        </div>
        
        <i class="fa-solid fa-trash icons"></i>

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








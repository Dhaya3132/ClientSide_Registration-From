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
            <p>Student Name : <span contenteditable="false" class="Edit"> ${Data.Name} </span> </p>
            <p>Student ID : <span contenteditable="false"> ${Data.Id} </span ></p>
            <p>Student Email : <span contenteditable="false"> ${Data.Email} </span> </p>
            <p>Student MobileNo : <span contenteditable="false"> ${Data.MobileNo} </span> </p>
        </div>
        
        <div class="Iconsclass">
            <i class="fa-solid fa-pen-to-square deleteicon"></i>
            <i class="fa-solid fa-trash icons"></i>
        </div>
       
      </li>
    `

    UnOrderList.appendChild(StudentList);
    Forms.reset();
    StudentNames.style.border = '1px solid rgba(0, 0, 0, 0.422)';
    StudentIds.style.border = '1px solid rgba(0, 0, 0, 0.422)';
    StudentEmailIds.style.border = '1px solid rgba(0, 0, 0, 0.422)';
    StudentMobileNos.style.border = '1px solid rgba(0, 0, 0, 0.422)';
    
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
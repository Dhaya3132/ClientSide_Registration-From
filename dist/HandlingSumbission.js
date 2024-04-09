const StudentNames = document.querySelector('#StudentName');
const StudentIds = document.querySelector('#StudentId');
const StudentEmailIds = document.querySelector('#MailId');
const StudentMobileNos = document.querySelector('#MobileNo');

const Forms = document.querySelector('.FormField');
const StudentList = document.querySelector('.StudentTable');
const DataForm = document.querySelector('.DataField');

const edit = document.querySelector('.editicon');

var selector = null;

function addingList(Data) {

    const StudentLists = document.createElement('tr');
    StudentLists.classList.add('Student');
    StudentLists.innerHTML = `
        <tr>
          <td>${Data.Name} </td>
          <td>${Data.Id}</td>
          <td>${Data.Email} </td>
          <td>${Data.MobileNo}</td>
          <td>
            <div class="Iconsclass">
               <i class="fa-solid fa-pen-to-square editicon" onClick = "update(this)"></i>
               <i class="fa-solid fa-trash icons deleteicon"></i>
            </div>
          </td>  
        </tr> 
      `

    StudentList.appendChild(StudentLists);
    Forms.reset();
    StudentNames.style.border = '1px solid rgba(0, 0, 0, 0.422)';
    StudentIds.style.border = '1px solid rgba(0, 0, 0, 0.422)';
    StudentEmailIds.style.border = '1px solid rgba(0, 0, 0, 0.422)';
    StudentMobileNos.style.border = '1px solid rgba(0, 0, 0, 0.422)';

};


Forms.addEventListener('submit', (e) => {

  e.preventDefault();
  const Data = {
    Name: StudentNames.value,
    Id: StudentIds.value,
    Email: StudentEmailIds.value,
    MobileNo: StudentMobileNos.value,
  };

  addingList(Data);
});


function update(IndexCurent) {

  DataForm.style.display = 'flex';

  selector = IndexCurent.parentElement.parentElement.parentElement;

  console.log(selector);

  document.querySelector('#NewName').value = selector.cells[0].innerHTML;
  document.querySelector('#NewId').value = selector.cells[1].innerHTML;
  document.querySelector('#NewEmail').value = selector.cells[2].innerHTML;
  document.querySelector('#NewNo').value = selector.cells[3].innerHTML;

}


DataForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  selector.cells[0].innerHTML = document.querySelector('#NewName').value;
  selector.cells[1].innerHTML = document.querySelector('#NewId').value;
  selector.cells[2].innerHTML = document.querySelector('#NewEmail').value;
  selector.cells[3].innerHTML = document.querySelector('#NewNo').value;

  DataForm.style.display = 'none';
});


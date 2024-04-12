//Getting the value from the Student Form Field

const StudentNames = document.querySelector('#StudentName');
const StudentIds = document.querySelector('#StudentId');
const StudentEmailIds = document.querySelector('#MailId');
const StudentMobileNos = document.querySelector('#MobileNo');

//Getting the value from the Student DataList in Database

const Forms = document.querySelector('.FormField');
const StudentList = document.querySelector('.StudentTable');
const DataForm = document.querySelector('.DataField');

//Getting the value from editicon

const edit = document.querySelector('.editicon');

var selector = null;

// Addinglist function is used to Add the new student data into table
// These datas stored in the table.
// I have been passing the table row dynamically using template literals.


function addingList(Data) {

  // I have created element called tr

  const StudentLists = document.createElement('tr');
  StudentLists.classList.add('Student');

  //I have create template string in this row will added with user value to table 
  //NOTE : I have been passing the value dynamically. By use of this we can easily add our data as element without storing those object into array.

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

  //after submiting the value the form should come to its original state for that i have used reset.

  Forms.reset();

  StudentNames.style.border = '1px solid rgba(0, 0, 0, 0.422)';
  StudentIds.style.border = '1px solid rgba(0, 0, 0, 0.422)';
  StudentEmailIds.style.border = '1px solid rgba(0, 0, 0, 0.422)';
  StudentMobileNos.style.border = '1px solid rgba(0, 0, 0, 0.422)';

};

//This is the form to get the value from the form and those values passed into object. and stored in the form of the object.

Forms.addEventListener('submit', (e) => {

  // This is for stopping the page refresh while submmiting the data.

  e.preventDefault();

  //I have created an Data object 

  const Data = {
    Name: StudentNames.value,
    Id: StudentIds.value,
    Email: StudentEmailIds.value,
    MobileNo: StudentMobileNos.value,
  };


  //The object data is passed to the addinglist function.

  addingList(Data);
});

//This is the function is used to update the value of edited text.

function update(IndexCurent) {

  DataForm.style.display = 'flex';

  selector = IndexCurent.parentElement.parentElement.parentElement;

  // console.log(selector);

  document.querySelector('#NewName').value = selector.cells[0].innerHTML;
  document.querySelector('#NewId').value = selector.cells[1].innerHTML;
  document.querySelector('#NewEmail').value = selector.cells[2].innerHTML;
  document.querySelector('#NewNo').value = selector.cells[3].innerHTML;

}

//After editing the text the value will updated while clicking the form.

DataForm.addEventListener('submit', (e) => {
  e.preventDefault();

  selector.cells[0].innerHTML = document.querySelector('#NewName').value;
  selector.cells[1].innerHTML = document.querySelector('#NewId').value;
  selector.cells[2].innerHTML = document.querySelector('#NewEmail').value;
  selector.cells[3].innerHTML = document.querySelector('#NewNo').value;

  DataForm.style.display = 'none';
});

// StudentList.style.overflowY = 'scroll';
//--> This to dynamic scroll bar the database i have not used here because i have storing the data in the form table, it will not look good.


// Logic in the Documentation file
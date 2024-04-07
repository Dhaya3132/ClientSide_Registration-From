

//Regex for Validation Forms.
const StudentName = document.querySelector('#StudentName');
const StudentId = document.querySelector('#StudentId');
const StudentEmailId = document.querySelector('#MailId');
const StudentMobileNo = document.querySelector('#MobileNo');

const Namepattern = /^[a-zA-Z]+$/;
const Idpattern = /^[0-9]+$/;
const MailIdPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+(\.[a-zA-Z]+)*$/;
const MobilePattern = /^[0-9]{10,}$/

StudentName.addEventListener( 'keyup', () =>{

    const Namevalue = StudentName.value;
    if(Namepattern.test(Namevalue))
    {
        StudentName.style.border = '1px solid green';
        StudentName.style.backgroundColor = "#ffffff";
    }
    else{
        StudentName.style.border = '1px solid red';
        StudentName.style.backgroundColor = "#ffffff";
    }

});

StudentId.addEventListener( 'keyup', () =>{

    const Idvalue = StudentId.value;
    if(Idpattern.test(Idvalue))
    {
        StudentId.style.border = '1px solid green';
        StudentId.style.backgroundColor = "#ffffff";
    }
    else
    {
        StudentId.style.border = '1px solid red';
        StudentId.style.backgroundColor = "#ffffff";
    }

});

StudentEmailId.addEventListener('keyup', ()=>
{
    const MailIdvalue = StudentEmailId.value;
    if(MailIdPattern.test(MailIdvalue))
    {
        StudentEmailId.style.border = '1px solid green';
        StudentEmailId.style.backgroundColor = "#ffffff";
    }
    else
    {
        StudentEmailId.style.border = '1px solid red';
        StudentEmailId.style.backgroundColor = "#ffffff";
    }

});

StudentMobileNo.addEventListener('keyup', ()=>
{
    const Numbervalue = StudentMobileNo.value;
    if(MobilePattern.test(Numbervalue))
    {
        StudentMobileNo.style.border = '1px solid green';
        StudentMobileNo.style.backgroundColor = "#ffffff";
    }
    else
    {
        StudentMobileNo.style.border = '1px solid red';
        StudentMobileNo.style.backgroundColor = "#ffffff";
    }

})







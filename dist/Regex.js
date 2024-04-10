const StudentName = document.querySelector('#StudentName');
const StudentId = document.querySelector('#StudentId');
const StudentEmailId = document.querySelector('#MailId');
const StudentMobileNo = document.querySelector('#MobileNo');

//Student name pattern
const Namepattern = /^[a-zA-Z]+$/;
//Student id pattern accepts only four numbers
const Idpattern = /^[0-9]{4}$/;
//Student email pattern
const MailIdPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+(\.[a-zA-Z]+)*$/;
//Student mobile pattern accepts only 10 digits.
const MobilePattern = /^[0-9]{10}$/;

//regex for student name...this will show the green color border if the user enters the crct name if its wrong red color.
StudentName.addEventListener( 'keyup', () =>{

    const Namevalue = StudentName.value;
    if(Namepattern.test(Namevalue))
    {
        StudentName.style.border = '1px solid green';
    }
    else{
        StudentName.style.border = '1px solid red';
    }

});

//regex for student id...this will show the green color border if the user enters the crct name if its wrong red color.
StudentId.addEventListener( 'keyup', () =>{

    const Idvalue = StudentId.value;
    if(Idpattern.test(Idvalue))
    {
        StudentId.style.border = '1px solid green';
    }
    else
    {
        StudentId.style.border = '1px solid red';
    }

});

//regex for student email...this will show the green color border if the user enters the crct name if its wrong red color.
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

//regex for student mobile...this will show the green color border if the user enters the crct name if its wrong red color.
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

});
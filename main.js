let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');

let firstName2 = document.getElementById('firstName2');
let lastName2 = document.getElementById('lastName2');

let jobTitle = document.getElementById('jobTitle');
let jobTitle2 = document.getElementById('jobTitle2');

let aboutMe = document.getElementById('aboutMe');

let workEx = document.getElementById('workEx');

let workJob = document.getElementById('workJob');

let workDate = document.getElementById('workDate');

let wordDetail = document.getElementById('wordDetail');
let wordDetail2 = document.getElementById('wordDetail2');

let refTaitle = document.getElementById('refTaitle');

let refSub = document.getElementById('refSub');

let refUser = document.getElementById('refUser');

let imgSrc = document.getElementsByTagName("img")[0];

let numberPhone = document.getElementById("numberPhone");

let email = document.getElementById("email");

let myLocation = document.getElementById("myLocation");

let gitHub = document.getElementById("gitHub");

let educatYear = document.getElementById("educatYear");

let educatUn = document.getElementById("educatUn");

let educatMajor = document.getElementById("educatMajor");

let mySkill = document.getElementById("mySkill");

let myLang = document.getElementById("myLang");



////////////////////////////////
function first_name() {
    firstName.textContent = "YOUSEF";
}
function last_name() {
    lastName.textContent = "ALSAADAN";
}

function first_name2() {
    firstName2.textContent = "YOUSEF";
}
function last_name2() {
    lastName2.textContent = "ALSAADAN";
}

function job_title() {
    jobTitle.textContent = "FullStack Web Developer";
}
function job_title2() {
    jobTitle2.textContent = "FullStack Web Developer";
}

function about_me() {
    aboutMe.textContent = "I am interested in developing web applications and cybersecurity, and I have worked on several projects in different fields, including deep learning";
}

function work_ex() {
    workEx.textContent = "SafeDecision Co.";
}

function work_job() {
    workJob.textContent = "Training";
}

function work_date() {
    workDate.textContent = "2022 - 3 months";
}

function word_detail() {
    wordDetail.textContent = "Website development using Express Node.js";
}
function word_detail2() {
    wordDetail2.textContent = "Create a virtual network and protect it from cyberattacks";
}

function ref_taitle() {
    refTaitle.textContent = "Social Media";
}

function ref_sub() {
    refSub.textContent = "LinkedIn";
}

function ref_user() {
    refUser.textContent = "User: Yousef Mohammed";
}

function img_src() {
    imgSrc.src = "./my.png";
}

function number_phone() {
    numberPhone.textContent = "+966 53 721 4756";
}

function e_mail() {
    email.textContent = "yousefmalsaadan@gmail.com";
}

function my_location() {
    myLocation.textContent = "Riyadh, Saudi Arabia";
}

function git_hub() {
    gitHub.textContent = "www.github.com/Yousef-Alsaadan";
}

function educat_year() {
    educatYear.textContent = "2018-2022";
}

function educat_un() {
    educatUn.textContent = "Prince Sattam bin Abdulaziz university";
}

function educat_major() {
    educatMajor.textContent = "Bachelor of Computer Science";
}

function my_skill() {
    mySkill.innerHTML=`
        <li>Web Development</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Django</li>
        <li>Git</li>
        <li>Java</li>
    `;
}

function my_lang() {
    myLang.innerHTML=`
        <li>English</li>
        <li>Arabic</li>
    `;
}


////////////////////////////////
firstName.setAttribute("onmouseover", "first_name()");
lastName.setAttribute("onmouseover", "last_name()");

firstName2.setAttribute("onmouseover", "first_name2()");
lastName2.setAttribute("onmouseover", "last_name2()");

jobTitle.setAttribute("onmouseover", "job_title()");
jobTitle2.setAttribute("onmouseover", "job_title2()");

aboutMe.setAttribute("onmouseover", "about_me()");

workEx.setAttribute("onmouseover", "work_ex()");

workJob.setAttribute("onmouseover", "work_job()");

workDate.setAttribute("onmouseover", "work_date()");

wordDetail.setAttribute("onmouseover", "word_detail()");
wordDetail2.setAttribute("onmouseover", "word_detail2()");

refTaitle.setAttribute("onmouseover", "ref_taitle()");

refSub.setAttribute("onmouseover", "ref_sub()");

refUser.setAttribute("onmouseover", "ref_user()");

imgSrc.setAttribute("onmouseover", "img_src()");

numberPhone.setAttribute("onmouseover", "number_phone()");

email.setAttribute("onmouseover", "e_mail()");

myLocation.setAttribute("onmouseover", "my_location()");

gitHub.setAttribute("onmouseover", "git_hub()");

educatYear.setAttribute("onmouseover", "educat_year()");

educatUn.setAttribute("onmouseover", "educat_un()");

educatMajor.setAttribute("onmouseover", "educat_major()");

mySkill.setAttribute("onmouseover", "my_skill()");

myLang.setAttribute("onmouseover", "my_lang()");



////////////////////////////////
let remover =  document.querySelectorAll('.remover')[0];
let remover1 =  document.querySelectorAll('.remover')[1];
let remover2 =  document.querySelectorAll('.remover')[2];
let remover3 =  document.querySelectorAll('.remover')[3];
let remover4 =  document.querySelectorAll('.remover')[4];
let remover5 =  document.querySelectorAll('.remover')[5];

function remove_it() {
    remover.remove();
    remover1.remove();
    remover2.remove();
    remover3.remove();
    remover4.remove();
    remover5.remove();
}

remover.setAttribute("onmouseover", "remove_it()");
remover1.setAttribute("onmouseover", "remove_it()");
remover2.setAttribute("onmouseover", "remove_it()");
remover3.setAttribute("onmouseover", "remove_it()");
remover4.setAttribute("onmouseover", "remove_it()");
remover5.setAttribute("onmouseover", "remove_it()");



//////////////
firstName.setAttribute("ontouchend", "first_name()");
lastName.setAttribute("ontouchend", "last_name()");

firstName2.setAttribute("ontouchend", "first_name2()");
lastName2.setAttribute("ontouchend", "last_name2()");

jobTitle.setAttribute("ontouchend", "job_title()");
jobTitle2.setAttribute("ontouchend", "job_title2()");

aboutMe.setAttribute("ontouchend", "about_me()");

workEx.setAttribute("ontouchend", "work_ex()");

workJob.setAttribute("ontouchend", "work_job()");

workDate.setAttribute("ontouchend", "work_date()");

wordDetail.setAttribute("ontouchend", "word_detail()");
wordDetail2.setAttribute("ontouchend", "word_detail2()");

refTaitle.setAttribute("ontouchend", "ref_taitle()");

refSub.setAttribute("ontouchend", "ref_sub()");

refUser.setAttribute("ontouchend", "ref_user()");

imgSrc.setAttribute("ontouchend", "img_src()");

numberPhone.setAttribute("ontouchend", "number_phone()");

email.setAttribute("ontouchend", "e_mail()");

myLocation.setAttribute("ontouchend", "my_location()");

gitHub.setAttribute("ontouchend", "git_hub()");

educatYear.setAttribute("ontouchend", "educat_year()");

educatUn.setAttribute("ontouchend", "educat_un()");

educatMajor.setAttribute("ontouchend", "educat_major()");

mySkill.setAttribute("ontouchend", "my_skill()");

myLang.setAttribute("ontouchend", "my_lang()");



////////////////////////////////
remover.setAttribute("ontouchend", "remove_it()");
remover1.setAttribute("ontouchend", "remove_it()");
remover2.setAttribute("ontouchend", "remove_it()");
remover3.setAttribute("ontouchend", "remove_it()");
remover4.setAttribute("ontouchend", "remove_it()");
remover5.setAttribute("ontouchend", "remove_it()");
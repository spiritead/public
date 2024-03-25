const age = document.querySelector('.age');

function calcAge() {
const birthDate = new Date('1992-08-06');
const currentDate = new Date();
let age = currentDate.getFullYear() - birthDate.getFullYear();
const months = currentDate.getMonth() - birthDate.getMonth();
if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
}
return age;
}

age.textContent = calcAge();

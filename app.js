const inputNameCompany = document.getElementById('inputNameCompany');
const inputNameLink = document.getElementById('inputNameLink');
const inputPhone = document.getElementById('inputPhone');

const btnSave = document.getElementById('btnSave');

btnSave.addEventListener('click', ()=>{
    const nameCompany = inputNameCompany.value;
    const nameLink = inputNameLink.value;
    const phone = inputPhone.value;
    const company = {
        nameCompany : nameCompany,
        nameLink,
        phone
    }
    console.log('Objeto')
    console.log(company);
    const jsonString = JSON.stringify(company);
    console.log('String')
    console.log(jsonString);
    sessionStorage.setItem('company', jsonString);
});

document.addEventListener('DOMContentLoaded', ()=>{
    const dataLocal = sessionStorage.getItem('company');

    if(dataLocal != null){
        console.log('Hay datos en SessionStorage');
        console.log(dataLocal);
        const jsonParse = JSON.parse(dataLocal);
        console.log('Datos Parseados');
        console.log(jsonParse);
        inputNameCompany.value = jsonParse.nameCompany;
        inputNameLink.value = jsonParse.nameLink;
        inputPhone.value = jsonParse.phone;

    }
});

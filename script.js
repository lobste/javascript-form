let userinfoDOM = document.querySelector('#user-info')
userinfoDOM.addEventListener('submit', formHandler)

const alertDOM = document.querySelector('#alert')

const ALERT = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Lütfen</strong> eksik bilgileri doldurunuz!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const USERNAME = document.querySelector('#username')
    const AGE = document.querySelector('#age')
    const CITY = document.querySelector('#city')

    if (USERNAME.value && AGE.value && CITY.value) {
        addItem (USERNAME.value,AGE.value,CITY.value)
        USERNAME =""
        AGE=""
        CITY =""
    }
    else {
        alertDOM.innerHTML = ALERT;
    }
}

let USERListDOM = document.querySelector('#USER-list')

function addItem (username,age,city) {
    let row = USERListDOM.insertRow();
    let USERNAME = row.insertCell();
    let AGE = row.insertCell();
    let CITY = row.insertCell();
    USERNAME.innerHTML = `${username}`
    AGE.innerHTML = `${age}`
    CITY.innerHTML = `${city}`
}

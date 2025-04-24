/** 

script for basic client-side input validation 
 
*/

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')


btn.addEventListener('click', navToggle)
linkForm.addEventListener('submit', formSubmit)

// Toggle Mobile Menu
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
  }

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

function formSubmit(e) {

    e.preventDefault()

    console.log(input.value)

    if (input.value === '') {
        errMsg.innerHTML = 'Pleas enter something'
        input.classList.add('border-red-500')
    }
    else if (!validURL(input.value)) {
        errMsg.innerHTML = 'Pleas enter a Valid URL'
        input.classList.add('border-red-500')
    }
    else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red-500')
        alert('Success')
    }

}


// eof 
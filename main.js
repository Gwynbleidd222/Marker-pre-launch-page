const email = document.querySelector('#email')
const btn = document.querySelector('#btn')
const errorMsg = document.querySelector('.msg-error')

const isValidEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
	return re.test(String(email).toLowerCase())
}

const checkInput = () => {
    const emailValue = email.value.trim()

    if(isValidEmail(emailValue)) {
        console.log('send')
        errorMsg.textContent = ''
        email.style.outlineColor = '#093F68'
    } else {
        errorMsg.textContent = 'Oops! That doesn’t look like an email address'
        email.style.outlineColor = '#FF2965'
    }
}

btn.addEventListener('click', checkInput)
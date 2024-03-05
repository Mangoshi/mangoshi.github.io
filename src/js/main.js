// Serious Code //

console.log("Hello, this is your console speaking.")

// Easter Eggs //

const logo = document.getElementById('logo')
logo.addEventListener('dblclick', () => {
	if(logo.classList.contains('h-paleOrange')) {
		logo.style.color = '#fdc253'
		logo.classList.remove('h-paleOrange')
	} else {
		logo.style.color = 'white'
		logo.classList.add('h-paleOrange')
	}
})

const jokeButton = document.getElementById('joke-button')
const jokeAnswer = document.getElementById('joke-answer')

jokeButton.addEventListener('click', () => {
	if(jokeAnswer.classList.contains('hidden')) {
		jokeAnswer.classList.remove('hidden')
		jokeButton.remove()
	}
})

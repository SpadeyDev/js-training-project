const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {

	const content = document.querySelector(button.dataset.target)
	button.innerText = button.dataset.hide

	button.addEventListener('click', () => {

		if (content.classList.contains('hide')) {
			button.innerText = button.dataset.hide
			content.classList.remove('hide')
		} else {
			button.innerText = button.dataset.show
			content.classList.add('hide')
		}
	})
})

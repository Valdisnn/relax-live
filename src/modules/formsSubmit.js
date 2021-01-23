/* eslint-disable max-len */
const formsSubmit = () => {
	const popupThank = document.querySelector('.popup-thank');

	const inputNAmes = document.querySelectorAll('input[name="name"]');

	inputNAmes.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/[a-zA-Z\d!"№;%:?]/ig, '');
		});
	});

	const validateForm = form => {
		const set = new Set();
		const elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
		elementsForm.forEach(item => {
			if (item.name === 'phone') {
				if (/^\+?[78]\s([-()\s]*\d){10}$/.test(item.value)) {
					item.classList.remove('no-input--active');
					set.delete(item);
				} else {
					item.classList.add('no-input--active');
					set.add(item);
				}
			}

			if (item.name === 'name') {
				if (/^[а-яА-Я\s]{2,20}$/gi.test(item.value)) {
					item.classList.remove('no-input--active');
					set.delete(item);
				} else {
					item.classList.add('no-input--active');
					set.add(item);
				}
			}

			if (item.getAttribute('type') === 'checkbox') {
				if (item.checked) {
					set.delete(item);
					item.parentElement.classList.remove('no-input--active');
				} else {
					item.parentElement.classList.add('no-input--active');
					set.add(item);
				}
			}
		});
		return set;
	};

	const  postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const clearInput = form => {
		const elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
		elementsForm.forEach(item => {
			item.value = '';
		});
	};

	const checkForms = elem => {
		const formData = new FormData(elem);
		const body = {};
		for (const val of formData.entries()) {
			body[val[0]] = val[1];
		}
		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('Что то пошло не так');
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	document.addEventListener('submit', event => {
		event.preventDefault();
		const target = event.target;
		validateForm(target);
		if (!validateForm(target).size) {
			popupThank.classList.add('visible');
			checkForms(target);
			clearInput(target);
		}
	});
};

export default formsSubmit;

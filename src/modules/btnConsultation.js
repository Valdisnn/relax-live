const btnConsultation = () => {
	const popupConsultation = document.querySelector('.popup-consultation');

	document.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.button_wide')) {
			popupConsultation.classList.add('visible');
		}
	});
};


export default btnConsultation;

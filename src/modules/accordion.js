const accordion = () => {

	const accordionElem = document.querySelector('.accordion');
	const titleBlockElem = document.querySelectorAll('.title_block');

	const showAccordion = elem => {
		elem.classList.toggle('msg-active');
	};

	const noShowAccordion = () => {
		titleBlockElem.forEach(item => {
			item.classList.remove('msg-active');
		});
	};

	accordionElem.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('.title_block')) {
			noShowAccordion();
			showAccordion(target);
		}
	});
};

export default accordion;

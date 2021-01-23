
const listPhones = () => {
	const ContactsArrowElem = document.querySelector('.header-contacts__arrow');
	const phoneNumberTwoAElem = document.querySelector('.header-contacts__phone-number-accord>a');
	let arrowFlag = false;

	ContactsArrowElem.addEventListener('click', () => {
		if (arrowFlag) {
			arrowFlag = false;
			ContactsArrowElem.style.transform = 'rotate(0deg)';
			phoneNumberTwoAElem.style.opacity = '0';
			phoneNumberTwoAElem.style.marginTop = '0';
		} else {
			arrowFlag = true;
			ContactsArrowElem.style.transform = 'rotate(180deg)';
			phoneNumberTwoAElem.style.opacity = '1';
			phoneNumberTwoAElem.style.marginTop = '20px';
		}
	});
};

export default listPhones;


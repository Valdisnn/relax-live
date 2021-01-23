/* eslint-disable max-len */


// popup-dialog-menu

const burgerMenuAdaptive = () => {
	const popupMenuElem = document.querySelector('.popup-menu');
	const popupRepairTypes = document.querySelector('.popup-repair-types');
	const popupDialogMenu = document.querySelector('.popup-dialog-menu');


	const closeAllPopup = () => {
		const popup = document.querySelectorAll('.popup');
		popup.forEach(item => {
			item.classList.remove('visible');
		});
	};

	const toggleMenu = () => {
		closeAllPopup();
		popupDialogMenu.classList.toggle('open-menu');
	};


	const scrollBurgerMenu = elem => {

		const scrollHeight = document.getElementById(elem.href.split('#')[1]).offsetTop;
		popupDialogMenu.classList.remove('open-menu');
		window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
	};


	const openPopupRepairTypes = () => {
		popupRepairTypes.classList.add('visible');
	};

	document.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('.menu__icon')) {
			event.preventDefault();
			popupMenuElem.classList.add('visible');
			toggleMenu();
		}
		if (target.closest('.close')) {
			closeAllPopup();
		}
		if (target.closest('.close-menu')) {
			closeAllPopup();
			toggleMenu();
		}

		if (target.closest('.popup-menu-nav__item')) {
			event.preventDefault();
			scrollBurgerMenu(target);
		}
		if (target.closest('.button-footer')) {
			event.preventDefault();
			scrollBurgerMenu(target);
		}
		if (target.closest('.link-list-menu')) {
			toggleMenu();
			openPopupRepairTypes();
		}
		if (target.closest('.link-list-repair')) {
			openPopupRepairTypes();
		}
		if (target.matches('.link-privacy')) {
			const popupPrivacy = document.querySelector('.popup-privacy');
			popupPrivacy.classList.add('visible');
		}
	});
};

export default burgerMenuAdaptive;

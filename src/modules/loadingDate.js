/* eslint-disable max-len */
const loadingDate = () => {
	const navWrapRepair = document.querySelectorAll('.nav-wrap-repair');

	const popupRepairTypes = document.querySelector('.popup-repair-types');

	// обертка кнопок
	const navListPopupRepair = document.querySelector('.nav-list-popup-repair');

	// заголовок для работ
	const switchInner = document.querySelector('#switch-inner');

	// дата
	const dateItem = document.querySelector('.popup-repair-types-content__head-date');

	// обертка для таблиц
	const popupRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table');

	const popupRepairTypesNavItem = document.querySelectorAll('.popup-repair-types-nav__item');
	const popupRepairTypesContentTableList = document.querySelectorAll('.popup-repair-types-content-table__list');

	const addDefaultActiveClass = (elem1, elem2) => {
		[...elem1.parentElement.children].forEach(item => {
			item.classList.remove('active-tab');
		});
		[...elem2.parentElement.children].forEach(item => {
			item.classList.remove('popup-repair-types-content-table__list--active');
		});
		elem1.classList.toggle('active-tab');
		elem2.classList.toggle('popup-repair-types-content-table__list--active');
	};

	popupRepairTypes.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.popup-repair-types-nav__item')) {
			switchInner.textContent = target.textContent;
			if (target.closest('.data-index-0')) {
				addDefaultActiveClass(document.querySelectorAll('.popup-repair-types-nav__item')[0], document.querySelectorAll('.popup-repair-types-content-table__list')[0]);
			}
			if (target.closest('.data-index-1')) {
				addDefaultActiveClass(document.querySelectorAll('.popup-repair-types-nav__item')[1], document.querySelectorAll('.popup-repair-types-content-table__list')[1]);
			}
			if (target.closest('.data-index-2')) {
				addDefaultActiveClass(document.querySelectorAll('.popup-repair-types-nav__item')[2], document.querySelectorAll('.popup-repair-types-content-table__list')[2]);
			}
			if (target.closest('.data-index-3')) {
				addDefaultActiveClass(document.querySelectorAll('.popup-repair-types-nav__item')[3], document.querySelectorAll('.popup-repair-types-content-table__list')[3]);
			}
			if (target.closest('.data-index-4')) {
				addDefaultActiveClass(document.querySelectorAll('.popup-repair-types-nav__item')[4], document.querySelectorAll('.popup-repair-types-content-table__list')[4]);
			}
			if (target.closest('.data-index-5')) {
				addDefaultActiveClass(document.querySelectorAll('.popup-repair-types-nav__item')[5], document.querySelectorAll('.popup-repair-types-content-table__list')[5]);
			}
		}
	});

	const getButtons = (value, i) => {
		const btn = document.createElement('button');
		btn.className = `button_o popup-repair-types-nav__item data-index-${i - 1}`;
		btn.textContent = value;
		navListPopupRepair.insertAdjacentElement('beforeend', btn);
	};

	const getTbody = arr => {
		const tbody = document.createElement('tbody');
		arr.forEach(({ typeService, units, cost }) => {
			const tr = document.createElement('tr');
			tr.className = 'mobile-row';
			tr.innerHTML = `
                    <td class="repair-types-name">${typeService}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${units}</sup></td>
                    <td class="repair-types-value">${cost} руб.</td>
                    `;
			tbody.insertAdjacentElement('beforeend', tr);
		});
		return tbody;
	};

	const render = data => {
		data.forEach((item, i) => {
			if (item.date) {
				dateItem.textContent = item.date;
			} else {
				getButtons(item.title, i);
				const table = document.createElement('table');
				table.className = 'popup-repair-types-content-table__list';
				table.insertAdjacentElement('afterbegin', getTbody(item.priceList));
				popupRepairTypesContentTable.insertAdjacentElement('beforeend', table);
			}
		});
		addDefaultActiveClass(document.querySelectorAll('.popup-repair-types-nav__item')[0], document.querySelectorAll('.popup-repair-types-content-table__list')[0]);
	};

	fetch('./db/db.json', {
		method: 'GET',
		mode: 'cors',
	})
		.then(response => {
			if (response.status !== 200) {
				throw new Error('status network mot 200');
			}
			return (response.json());
		})
		.then(response => {
			render(response);
		})
		.catch(error => {
			console.log('error: ', error);
		});

	let countDate = 0;
	let countSlideDate = 0;

	const prevDate = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				if (innerWidth >= 1024) {
					countDate -= 5;
				}
				if (innerWidth < 1024 && innerWidth <= 575) {
					countDate -= 1;
				}
				elem.style.transform = `translateX(${-countDate}%)`;
				const animate = requestAnimationFrame(go);
				if (innerWidth >= 1024) {
					if (countDate === 0) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 15) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 30) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 50) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 60) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 70) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth < 1024 && innerWidth <= 575) {
					if (countDate === 0) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 17) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 35) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 52) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 70) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 87) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideDate = 0;
		}
	};

	const nextDate = (elem, index) => {
		if (index <= elem.children.length - 1) {
			const go = () => {
				if (innerWidth >= 1024) {
					countDate += 5;
				}
				if (innerWidth < 1024 && innerWidth <= 575) {
					countDate += 1;
				}
				elem.style.transform = `translateX(${-countDate}%)`;
				const animate = requestAnimationFrame(go);
				if (innerWidth >= 1024) {
					if (countDate === 15) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 30) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 50) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 60) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 70) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth < 1024 && innerWidth <= 575) {
					if (countDate === 17) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 35) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 52) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 70) {
						cancelAnimationFrame(animate);
					}
					if (countDate === 87) {
						cancelAnimationFrame(animate);
					}
				}

			};
			requestAnimationFrame(go);
		} else {
			countSlideDate--;
		}
	};
	navWrapRepair[1].addEventListener('click', e => {
		const target = e.target;
		if (target.closest('#nav-arrow-popup-repair_left')) {
			countSlideDate--;
			prevDate(navListPopupRepair, countSlideDate);
		}
		if (target.closest('#nav-arrow-popup-repair_right')) {
			countSlideDate++;
			nextDate(navListPopupRepair, countSlideDate);
		}
	});


};

export default loadingDate;

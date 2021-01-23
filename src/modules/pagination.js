const pagination = () => {
	const designs = document.querySelector('#designs');
	const navDesigns = document.querySelector('.nav-designs');
	const designsSlider = document.querySelector('.designs-slider');
	const previewBlock = document.querySelectorAll('.preview-block');

	const designsList = document.querySelector('#designs-list');
	const designsSliderStyleNon = document.querySelectorAll('.designs-slider__style-non');

	const designsSliderStyleSlide = document.querySelectorAll('.designs-slider__style-slide');


	const popupDesign = document.querySelector('.popup-design');
	const navListPopupDesigns = document.querySelector('#nav-list-popup-designs');
	const popupDesignSlider = document.querySelector('.popup-design-slider');
	const popupDesignText = document.querySelectorAll('.popup-design-text');
	const popupDesignsSliderStyleNon = document.querySelectorAll('.popup-designs-slider__style-non');


	const sliderCounterContentCurrent = document.querySelectorAll('.slider-counter-content__current');
	const sliderCounterContenttTtal = document.querySelectorAll('.slider-counter-content__total');
	sliderCounterContentCurrent[5].textContent = '1';

	let countDesign = 0;
	let countSlideDesign = 0;
	let countPopupDesign = 0;
	let counSlidePopupDesign = 0;

	const addActiveClassSlider = (arr, ind, activeClass) => {
		[...arr.children].forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
			if (item.classList.contains('popup-designs-slider__style-non--active')) {
				[...item.children].forEach((item, inde) => {
					sliderCounterContenttTtal[5].textContent = inde + 1;
				});
			}
		});
	};
	addActiveClassSlider(designsSlider, 0, 'designs-slider__style-non--active');
	addActiveClassSlider(popupDesignSlider, 0, 'popup-designs-slider__style-non--active');


	const addActiveClassPreview = (arr, ind, activeClass) => {
		arr.forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};

	addActiveClassPreview(previewBlock, 0, 'visible');
	addActiveClassPreview(popupDesignText, 0, 'visible-content-block');


	const addActivePreview = (arr, ind, activeClass) => {
		[...arr.children].forEach((item, i) => {
			[...item.children].forEach((elem, index) => {
				if (item.classList.contains('designs-slider__style-non--active')) {
					elem.classList.add(activeClass);
					if (index === ind) {
						elem.classList.remove(activeClass);
					}
				}
			});
		});
	};


	const resetSliders = () => {
		counSlidePopupDesign = 0;
		countPopupDesign = 0;
		addActiveClassSlider(popupDesignSlider, 0, 'popup-designs-slider__style-non--active');
		addActiveClassPreview(popupDesignText, 0, 'visible-content-block');
		addActiveClassSlider(designsSlider, 0, 'designs-slider__style-non--active');
		addActiveClassPreview(previewBlock, 0, 'visible');
		addActiveClassPreview(designsSliderStyleSlide, 0, 'designs-slider__style-slide--active');
		designsSliderStyleSlide.forEach(item => {
			item.classList.remove('preview-block__item-inner--active');
		});
	};

	const prevDesign = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countDesign -= 5;
				elem.style.transform = `translateX(${-countDesign}%)`;
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 1024 && innerWidth > 576) {
					if (countDesign === 0) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 35) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth < 1024 && innerWidth <= 576) {
					if (countDesign === 0) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 20) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 40) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 55) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 75) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideDesign = 0;
		}
	};
	const nextDesign = (elem, index) => {
		let countIndex = 1;
		if (innerWidth < 1024 && innerWidth <= 576) {
			countIndex = 4;
		}
		if (index <= countIndex) {
			const go = () => {
				countDesign += 5;
				elem.style.transform = `translateX(${-countDesign}%)`;
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 1024 && innerWidth > 576) {
					if (countDesign === 35) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth < 1024 && innerWidth <= 576) {
					if (countDesign === 20) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 40) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 55) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 75) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideDesign--;
		}
	};



	const prevPopupDesign = (elem, index) => {
		elem.forEach(item => {
			if (item.classList.contains('popup-designs-slider__style-non--active') || item.classList.contains('designs-slider__style-non--active')) {
				if (index >= 0) {
					sliderCounterContentCurrent[5].textContent =  counSlidePopupDesign + 1;
					const go = () => {
						countPopupDesign -= 5;
						[...item.children].forEach(item => {
							item.style.transform = `translateY(${-countPopupDesign}%)`;
						});
						const animate = requestAnimationFrame(go);
						if (countPopupDesign === 0) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 100) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 200) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 300) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 400) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 500) {
							cancelAnimationFrame(animate);
						}
					};
					requestAnimationFrame(go);
				} else {
					counSlidePopupDesign = 0;
				}
			}
		});
	};
	const nextPopupDesign = (elem, index) => {
		elem.forEach(item => {
			if (item.classList.contains('popup-designs-slider__style-non--active') || item.classList.contains('designs-slider__style-non--active')) {
				if (index <= item.children.length - 1) {
					sliderCounterContentCurrent[5].textContent =  counSlidePopupDesign + 1;
					const go = () => {
						countPopupDesign += 5;
						[...item.children].forEach(item => {
							item.style.transform = `translateY(${-countPopupDesign}%)`;
						});
						const animate = requestAnimationFrame(go);
						if (countPopupDesign === 100) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 200) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 300) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 400) {
							cancelAnimationFrame(animate);
						}
						if (countPopupDesign === 500) {
							cancelAnimationFrame(animate);
						}
					};
					requestAnimationFrame(go);
				} else {
					counSlidePopupDesign--;
				}
			}
		});
	};



	// designsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesignsdesig
	designs.addEventListener('click', e => {
		const target = e.target;
		if (target.tagName === 'A') {
			popupDesign.classList.add('visible');
		}
		if (target.tagName === 'BUTTON') {
			resetSliders();
			[...designsList.children].forEach((item, i) => {
				item.classList.remove('active');
				if (item === target) {
					item.classList.add('active');
					addActiveClassSlider(designsSlider, i, 'designs-slider__style-non--active');
					addActiveClassPreview(previewBlock, i, 'visible');
				}
			});
		}
		if (target.closest('.preview-block__item')) {
			designsSliderStyleSlide.forEach(item => {
				item.style.transform = `translateY(0%)`;
			});
			counSlidePopupDesign = 0;
			countPopupDesign = 0;

			[...target.parentElement.parentElement.children].forEach((item, i) => {
				if (item === target.parentElement) {
					addActivePreview(designsSlider, i, 'preview-block__item-inner--active');
				}
			});

		}
		if (target.closest('#nav-arrow-designs_left')) {
			countSlideDesign--;
			prevDesign(designsList, countSlideDesign);
		}
		if (target.closest('#nav-arrow-designs_right')) {
			countSlideDesign++;
			nextDesign(designsList, countSlideDesign);
		}
		if (target.closest('#design_left')) {
			designsSliderStyleSlide.forEach(item => {
				item.classList.remove('preview-block__item-inner--active');
			});

			counSlidePopupDesign--;
			prevPopupDesign(designsSliderStyleNon, counSlidePopupDesign);
		}
		if (target.closest('#design_right')) {
			designsSliderStyleSlide.forEach(item => {
				item.classList.remove('preview-block__item-inner--active');
			});

			counSlidePopupDesign++;
			nextPopupDesign(designsSliderStyleNon, counSlidePopupDesign);
		}
	});





	// PopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopupPopup
	popupDesign.addEventListener('click', event => {
		const target = event.target;
		if (target.tagName === 'BUTTON') {
			resetSliders();
			sliderCounterContentCurrent[5].textContent =  '1';
			[...navListPopupDesigns.children].forEach((item, i) => {
				item.classList.remove('active');
				if (item === target) {
					item.classList.add('active');
					addActiveClassSlider(popupDesignSlider, i, 'popup-designs-slider__style-non--active');
					addActiveClassPreview(popupDesignText, i, 'visible-content-block');
				}
			});
		}
		if (target.closest('#nav-arrow-popup-designs_left')) {
			countSlideDesign--;
			prevDesign(navListPopupDesigns, countSlideDesign);
		}
		if (target.closest('#nav-arrow-popup-designs_right')) {
			countSlideDesign++;
			nextDesign(navListPopupDesigns, countSlideDesign);
		}
		if (target.closest('#popup_design_left')) {
			counSlidePopupDesign--;
			prevPopupDesign(popupDesignsSliderStyleNon, counSlidePopupDesign);
		}
		if (target.closest('#popup_design_right')) {
			counSlidePopupDesign++;
			nextPopupDesign(popupDesignsSliderStyleNon, counSlidePopupDesign);
		}
	});
};

export default pagination;



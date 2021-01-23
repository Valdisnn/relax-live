
const tabsWork = () => {
	const scheme = document.querySelector('#scheme');
	const wrapper = document.querySelector('#scheme-list');
	const schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide');
	const schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block');

	const addActiveClass = (arr, ind, activeClass) => {
		arr.forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};
	addActiveClass(schemeSliderSlide, 0, 'scheme-slider__slide--active');

	let countTabs = 0;
	let countSlideTabs = 0;


	const prevTabs = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countTabs -= 5;
				elem.style.transform = `translateX(${-countTabs}%)`;
				const animate = requestAnimationFrame(go);
				if (countTabs === 0) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 10) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 25) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 40) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 65) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 80) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideTabs = 0;
		}
	};

	const nextTabs = (elem, index) => {
		let countSlidesTabs = 5;
		if (innerWidth > 576) {
			countSlidesTabs = 3;
		}
		if (index <= countSlidesTabs) {
			const go = () => {
				countTabs += 5;
				elem.style.transform = `translateX(${-countTabs}%)`;
				const animate = requestAnimationFrame(go);
				if (countTabs === 10) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 25) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 40) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 65) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 80) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideTabs--;
		}
	};

	scheme.addEventListener('click', e => {
		const target = e.target;
		if (target.tagName === 'BUTTON') {
			[...wrapper.children].forEach((item, i) => {
				item.classList.remove('active');
				if (item === target) {
					item.classList.add('active');
					addActiveClass(schemeSliderSlide, i, 'scheme-slider__slide--active');
					addActiveClass(schemeDescriptionBlock, i, 'visible-content-block');
				}
			});
		}
		if (target.closest('#nav-arrow-scheme_left')) {
			countSlideTabs--;
			prevTabs(wrapper, countSlideTabs);
		}
		if (target.closest('#nav-arrow-scheme_right')) {
			countSlideTabs++;
			nextTabs(wrapper, countSlideTabs);
		}
	});

};
export default tabsWork;


const sliderCarouselPartners = () => {

	const partners = document.querySelector('#partners');
	const partnersSlider = document.querySelector('.partners-slider');
	const partnersSliderSlide = document.querySelectorAll('.partners-slider__slide');

	let countCarousel = 0;
	let countSlideCarousel = 0;

	if (innerWidth <= 1024) {
		partnersSlider.style.width = '290px';
	}

	const prevCarousel = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countCarousel -= 10;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countCarousel}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 576) {
					if (countCarousel === 0) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 660) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 880) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countCarousel === 0) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 710) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 950) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth > 1024) {
					if (countCarousel === 0) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 170) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 320) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 470) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 700) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			const go = () => {
				countCarousel += 10;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countCarousel}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 576) {
					if (countCarousel === 880) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth > 1024) {
					if (countCarousel === 700) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countCarousel === 950) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
			countSlideCarousel = elem.parentElement.children.length + 1;
		}
	};
	const nextCarousel = (elem, index) => {
		if (index <= elem.parentElement.children.length + 1) {
			const go = () => {
				countCarousel += 10;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countCarousel}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 576) {
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 660) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 880) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 710) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 950) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth > 1024) {
					if (countCarousel === 170) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 320) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 470) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 700) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			const go = () => {
				countCarousel -= 10;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countCarousel}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countCarousel === 0) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
			countSlideCarousel = 0;
		}
	};

	partners.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('#partners-arrow_left')) {
			countSlideCarousel--;
			prevCarousel(partnersSlider, countSlideCarousel);
		}
		if (target.closest('#partners-arrow_right')) {
			countSlideCarousel++;
			nextCarousel(partnersSlider, countSlideCarousel);
		}
	});
};
export default sliderCarouselPartners;


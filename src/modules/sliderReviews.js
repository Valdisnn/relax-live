const sliderReviews = () => {
	const reviewsSliderWrapElem = document.querySelector('.reviews-slider-wrap');
	const reviewsSliderElem = document.querySelector('.reviews-slider');

	let countReviews = 0;
	let currentSlideReviews = 0;

	const prevReviews = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countReviews -= 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateY(${-countReviews}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countReviews <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 100) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 200) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 300) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideReviews = 0;
		}
	};

	const nextReviews = (elem, index) => {
		if (index <= 4) {
			const go = () => {
				countReviews += 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateY(${-countReviews}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countReviews <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 100) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 200) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 300) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideReviews--;
		}
	};

	reviewsSliderWrapElem.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('#reviews-arrow_left')) {
			currentSlideReviews--;
			prevReviews(reviewsSliderElem, currentSlideReviews);
		}
		if (target.closest('#reviews-arrow_right')) {
			currentSlideReviews++;
			nextReviews(reviewsSliderElem, currentSlideReviews);
		}
	});
};


export default sliderReviews;


import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperBanner();
	swiperBannerMobile();
}

function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation, EffectFade, Pagination], // Đảm bảo đã import EffectFade
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".pagination",
			clickable: true,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-1 .btn-right",
			prevEl: ".home-1 .btn-left",
		},
	});
}

function swiperBannerMobile() {
	const swiper = new Swiper(".swiper-home-banner-mobile", {
		slidesPerView: 1,
		modules: [Autoplay, EffectFade, Pagination], // Đảm bảo đã import EffectFade
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".pagination-mobile",
			clickable: true,
		},
		speed: 1500,
	});
}
// function swiperSingleProject() {
// 	const swiperSingleProject = new Swiper(".swiper-single-project .swiper", {
// 		modules: [Autoplay, Navigation],
// 		spaceBetween: 12,
// 		slidesPerView: 1.25,
// 		freeMode: true,
// 		initialSlide: 1,
// 		loop: true,
// 		centeredSlides: true,
// 		breakpoints: {
// 			1024: {
// 				slidesPerView: 1,
// 				centeredSlides: false,
// 				spaceBetween: 40,
// 			},
// 		},
// 	});
// }

// function swiperStaff() {
// 	const swiper = new Swiper(".swiper-staff", {
// 		spaceBetween: 20, // Khoảng cách giữa các slide
// 		slidesPerView: 2,
// 		modules: [Autoplay, Navigation],
// 		autoplay: {
// 			delay: 3500,
// 			disableOnInteraction: false,
// 		},
// 		speed: 2000,
// 		navigation: {
// 			nextEl: ".custom-next",
// 			prevEl: ".custom-prev",
// 		},
// 		breakpoints: {
// 			640: {
// 				slidesPerView: 1, // Số slide trên mỗi hàng ở kích thước màn hình nhỏ
// 				spaceBetween: 20,
// 			},
// 			768: {
// 				slidesPerView: 2, // Số slide trên mỗi hàng ở kích thước màn hình trung bình
// 				spaceBetween: 30,
// 			},
// 			1024: {
// 				slidesPerView: 3, // Số slide trên mỗi hàng ở kích thước màn hình lớn
// 				spaceBetween: 40,
// 			},
// 		},
// 	});
// }

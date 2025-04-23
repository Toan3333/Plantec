import AOS from "aos";
import lozad from "lozad";

import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
import menuspy from "menuspy";

$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	buttonToTop();
	// showMenu();
	// countUpInit();
	indicatorSlide();

	const menu = new menuspy(document.getElementById("main-menu"), {
		activeClass: "active",
		threshold: 15,
	});

	const $proceedBtn = $(".contact-1-submit .button-primary.black");
	const $returnBtn = $(".contact-2 .button-primary.secondary");
	const $sendBtn = $(".contact-2 .button-primary.black");

	const $contactForm = $(".contact-1"); // contact-1
	const $contact2 = $(".contact-2"); // contact-2
	const $contact3 = $(".contact-3"); // contact-3

	// Ẩn contact-2 và contact-3 lúc đầu
	$contact2.hide();
	$contact3.hide();

	// Bấm Proceed → sang bước xác nhận (contact-2)
	$proceedBtn.on("click", function (e) {
		e.preventDefault();

		// Ẩn contact-1 (form ban đầu)
		$contactForm.fadeOut(300, function () {
			// Sau khi ẩn contact-1, hiển thị contact-2 (confirmation)
			$contact2.fadeIn(300);
		});
	});

	// Bấm Return → quay về bước nhập form (contact-1)
	$returnBtn.on("click", function (e) {
		e.preventDefault();

		// Ẩn contact-2 (confirmation)
		$contact2.fadeOut(300, function () {
			// Sau khi ẩn contact-2, hiển thị contact-1 (form)
			$contactForm.fadeIn(300);
		});
	});

	// Bấm Send → hiển thị contact-3 (cảm ơn, xác nhận gửi,...)
	$sendBtn.on("click", function (e) {
		e.preventDefault();

		// Ẩn contact-2 (confirmation)
		$contact2.fadeOut(300, function () {
			// Sau khi ẩn contact-2, hiển thị contact-3 (cảm ơn)
			$contact3.fadeIn(300);
		});
	});
});

export function indicatorSlide() {
	if ($(".indicator-swipe").length > 0) {
		var callback = function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
					setTimeout(function () {
						entry.target.classList.remove("active");
					}, 3000);
				}
			});
		};

		var observer = new IntersectionObserver(callback);
		var animationItems = document.querySelectorAll(".indicator-swipe");
		animationItems.forEach(function (item) {
			observer.observe(item);
		});
	}
}

// fancyfox popup
document.addEventListener("DOMContentLoaded", function () {
	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
	});
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

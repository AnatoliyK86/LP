
let header = document.querySelector('.header');
function stickyHeader(){
	if( window.scrollY > 10 || window.pageYOffset > 10 ){
		header.classList.add('scrolled');
	} 
	else{
		header.classList.remove('scrolled');
	}
}

function throttle (func, ms) {
	let isThrottled = false;
	let savedArgs;
	let savedThis;

	function wrapper() {
		if(isThrottled) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		func.apply(this, arguments);
		isThrottled = true;

		setTimeout(function() {
			isThrottled = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedThis = null;
			}
		}, ms);
	}
	return wrapper;
}

window.addEventListener('scroll', throttle(stickyHeader, 300), {passive: true});


let mobileBtn = document.querySelector('.btn-mobile');
let headerNav = document.querySelector('.header__menu');

function mobileMenuOpen(){
	mobileBtn.classList.add('is-open');
	headerNav.classList.add('is-open');
	document.body.classList.add('ov-h');
}

function mobileMenuClose(){
	document.body.classList.remove('ov-h');
	mobileBtn.classList.remove('is-open');
	headerNav.classList.remove('is-open');
}

mobileBtn.addEventListener('click', () => {
	if( mobileBtn.classList.contains('is-open') ){
		mobileMenuClose();
	} else {
		mobileMenuOpen();
	}
});

headerNav.addEventListener('click', e => {
	if( headerNav.classList.contains('is-open') ){
		mobileMenuClose();
	} 
});
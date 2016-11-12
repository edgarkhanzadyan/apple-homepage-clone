$(document).ready(function(){
	let open = false;
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.mobile').toggleClass('navigation');
		$('.header').toggleClass('toggle');
		let mob = document.querySelector('.mobile');
		let item = document.querySelector('.item_nav_mobile');
		item.addEventListener('animationstart', false);
	  item.addEventListener('animationiteration', false);
	  item.addEventListener('animationend', false);
		if(!open){
			$('.mobile').removeClass('closeMobileBlock');
			$('.mobile').addClass('openMobileBlock');
			$('.item_nav_mobile').removeClass('closeNavItem');
			$('.item_nav_mobile').addClass('openNavItem');
			open = true;
		}else{
			$('.mobile').removeClass('openMobileBlock');
			$('.mobile').addClass('closeMobileBlock');
			$('.item_nav_mobile').removeClass('openNavItem');
			$('.item_nav_mobile').addClass('closeNavItem');
			open = false;
		}
	});
});

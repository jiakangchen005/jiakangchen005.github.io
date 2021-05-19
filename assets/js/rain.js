var effect = function() {
	$('.temp').empty();

	var increment = 0;
	var drops = "";
	var backDrops = "";

	while (increment < 100) {
		var x = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
		var y = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
		increment += y;
		drops += '<div class = "drop" style = "left: ' + increment + '%; bottom: ' + (y + y - 1 + 100) + '%; animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"><div class = "stem" style = "animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div><div class = "splat" style = "animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div></div>';
		backDrops += '<div class = "drop" style = "right: ' + increment + '%; bottom: ' + (y + y - 1 + 100) + '%; animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"><div class = "stem" style = "animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div><div class = "splat" style = "animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div></div>';
	}

	$('.temp.front-row').append(drops);
	$('.temp.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function() {
	$('body').toggleClass('splat-toggle');
	$('.splat-toggle.toggle').toggleClass('active');
	effect();
});

$('.back-row-toggle.toggle').on('click', function() {
	$('body').toggleClass('back-row-toggle');
	$('.back-row-toggle.toggle').toggleClass('active');
	effect();
});

$('.single-toggle.toggle').on('click', function() {
	$('body').toggleClass('single-toggle');
	$('.single-toggle.toggle').toggleClass('active');
	effect();
});

effect();

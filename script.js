
document.getElementById('incorrect').addEventListener('click', function() {
	var x = document.getElementsByClassName('incorrect_x');
	for (var i = 0; i < x.length; i++) {
		var sel_x = x[i];
		sel_x.classList.add('show_x');
	}
	document.getElementById('strike').play();
	setTimeout(function() {
		for(var i = 0; i < x.length; i++) {
			x[i].classList.remove('show_x');
		}
	}, 1800);
});

document.getElementById('main').addEventListener('click', function(e) {
	if (e.target.nodeName === 'LI') {
		var ans_box = e.target.children[0];
		if (ans_box.className.indexOf('answer_show') === -1) {
			e.target.classList.add('right_answer');
			ans_box.classList.add('answer_show');
			document.getElementById('bell').play();
		}
	}
});
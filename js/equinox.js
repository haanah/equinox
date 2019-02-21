$(function () {


	$('.scroll').on('click', function (event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
	$('#toggle').on('click', function (event) {
			event.preventDefault();
			if ($('#gnb').attr('class') == 'show') {
				$('#gnb').removeClass('show');
			} else {
				$('#gnb').addClass('show');
			};
		});

		$('#gnb').on('click', function (event) {
			event.preventDefault();
			$('#gnb').removeClass('show');
		});
		/* attr은 속성을 의미. #gnb.show를 display:block;
		if문(만약 gnb 클래스가 show이면.) */

	$("#slider_wrap button").on("click", function () {
		$(".con1").removeClass("on");
		$(".con2").removeClass("on");
		var i = $(this).index();
		$(".style #slider_wrap .container").eq(i).addClass("on");
	});
	/*
	var mqM = window.matchMedia("screen and (max-width:767px)");

	mqM.media
	mqM.matches //true

	if (matchMedia("(max-width:767px)").matches) {

	}
	*/
	// Get the modal
	var modal1 = document.getElementById("myModal m1");
	var modal2 = document.getElementById("myModal m2");
	var modal3 = document.getElementById("myModal m3");

	// Get the button that opens the modal
	var btn1 = document.getElementById("myBtn b1");
	var btn2 = document.getElementById("myBtn b2");
	var btn3 = document.getElementById("myBtn b3");
	var btn4 = document.getElementById("myBtn c1");
	var btn5 = document.getElementById("myBtn c2");
	var btn6 = document.getElementById("myBtn c3");
	var btn7 = document.getElementById("myBtn d1");
	var btn8 = document.getElementById("myBtn d2");
	var btn9 = document.getElementById("myBtn d3");

	// Get the <span> element that closes the modal
	var span1 = document.getElementsByClassName("close1")[0];
	var span2 = document.getElementsByClassName("close2")[0];
	var span3 = document.getElementsByClassName("close3")[0];

	// When the user clicks on the button, open the modal 
	btn1.onclick = function () {
		modal1.style.display = "block";
	}
	btn2.onclick = function () {
		modal2.style.display = "block";
	}
	btn3.onclick = function () {
		modal3.style.display = "block";
	}
	btn4.onclick = function () {
		modal1.style.display = "block";
	}
	btn5.onclick = function () {
		modal2.style.display = "block";
	}
	btn6.onclick = function () {
		modal3.style.display = "block";
	}
	btn7.onclick = function () {
		modal1.style.display = "block";
	}
	btn8.onclick = function () {
		modal2.style.display = "block";
	}
	btn9.onclick = function () {
		modal3.style.display = "block";
	}


	// When the user clicks on <span> (x), close the modal
	span1.onclick = function () {
		modal1.style.display = "none";
	}
	span2.onclick = function () {
		modal2.style.display = "none";
	}
	span3.onclick = function () {
		modal3.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal1) {
			modal1.style.display = "none";
		} else if (event.target == modal2) {
			modal2.style.display = "none";
		} else if (event.target == modal3) {
			modal3.style.display = "none";
		}

	}
	$('dt').on('click', function () {
		/* $('dd').hide();
		    $(this).next().show(); */
		if ($(this).next().css('display') == 'none') {
			$('dd').slideUp(350);
			$(this).next().slideDown(350);
		} else {
			$(this).next().slideUp(350);
		}
	});
	var mqM = window.matchMedia("screen and (max-width:767px)");

	mqM.media
	mqM.matches //true

	if (matchMedia("(max-width:767px)").matches) {
		
		$('.d1').on('click', function () {
			$('#price').css('height', '270vh');
		});
		$('.d2').on('click', function () {
			$('#price').css('height', '170vh');
		});
		$('.d4').on('click', function () {
			$('#price').css('height', '180vh');
		});
	};


});

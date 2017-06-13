require.config({
	baseUrl: "../public",
	paths:{
		jquery: "jquery-1.8.2.min",
	}
});
require(['jquery'],function($){
	// show & hide
	$("#s_h").on('click','input',function(event) {
		event.preventDefault();
		var $this=$(this),
			txt=$this.val(),
			speed=1000,
			ele=$("#s_h_module");
		if(txt=="show"){
			ele.show(speed, function() {
				ele.html(txt+"时间:"+speed);
			});
		}else{
			ele.hide('speed', function() {
				alert(txt+"时间:"+speed);
			});
		}
	});
	// toggle
	$("#t_btn").on('click',function(event) {
		event.preventDefault();
		$("#t_module").toggle(500);
	});
	// fadeIn & fadeOut
	$("#f_f").on('click', '.btn', function(event) {
		event.preventDefault();
		var $this=$(this),
			txt=$this.val(),
			speed=1000,
			ele=$("#f_f_module");
		if(txt=="fadeIn"){
			ele.fadeIn(speed, function() {
				ele.html(txt+"速度:"+speed);
			});
		}else {
			ele.fadeOut(speed, function() {
				alert(txt+"速度:"+speed);
			});
		}
	});
	// fadeToggle
	$("#f_t_btn").on('click', function(event) {
		event.preventDefault();
		$("#f_t_module").fadeToggle('slow');
	});
	// fadeTo
	$("#f_to_btn").on('click', function(event) {
		event.preventDefault();
		$("#f_to_module").fadeTo('slow',0.5);
	});
	// slideDown & slideUp
	$("#s_s").on('click', '.btn', function(event) {
		event.preventDefault();
		var $this=$(this),
			txt=$this.val(),
			ele=$("#s_s_module"),
			speed=800;
		if(txt=="slideDown"){
			ele.slideDown(speed, function() {
				ele.html(txt+"速度:"+speed);
			});
		}else {
			ele.slideUp(speed);
		}
	});
})
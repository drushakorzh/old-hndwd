$(function() {
  $('.toggle-nav').click(function(event) {
	  event.stopPropagation();
    $(".wrapper").toggleClass('show-nav');
  });
  $('.canvas').click(function() {
	if($(".wrapper").hasClass('show-nav')) {
		$(".wrapper").toggleClass('hide-nav');  
	}
  })
});

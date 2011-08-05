$.fn.inline = function() {
	$(this).each(function(){
		$(this).prev().hide();
		$(this).val($(this).prev().html());
		$(this).focus(function(){
			if($(this).prev().html() == $(this).val()){
				$(this).val('');
				$(this).addClass("focus");
			}
		});
		$(this).keypress(function(){
			$(this).addClass("typing");
		});
		$(this).blur(function(){
			$(this).removeClass("focus").removeClass("typing");
			if($(this).val() == ""){
				$(this).val($(this).prev().html());
			}
		});
	});
};

 (function ($) {
 	"use strict"

 	$("#basicform").on('submit', function(e){
 		e.preventDefault();
 		$('.contact-btn').html('Sending...');
 		$.ajaxSetup({
 			headers: {
 				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
 			}
 		});
 		$.ajax({
 			type: 'POST',
 			url: this.action,
 			data: new FormData(this),
 			dataType: 'json',
 			contentType: false,
 			cache: false,
 			processData:false,

 			success: function(response){ 
 				$('.contact-btn').html('Send Message');
 				$('.contact-btn').prop("disabled",true);
 				$('#resmsg').show();
 				$('#erromsg').hide();
 				$('#basicform').trigger("reset");
 			},
 			error: function(xhr, status, error) 
 			{
 				$('.contact-btn').html('Send Message');
 				$('#resmsg').hide();
 				$('#erromsg').show();
 			}
 		})


 	});


 })(jQuery);

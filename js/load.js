$(function() {
 // $('.selectpicker').selectpicker();
});

$('#submit').click(function() {

	// var data = {};
	// data.uid = ;





	$.ajax({
		type: "POST",
		data: $('.uploadForm').serialize(),
		contentType: "application/json",
		url: "http://localhost:3000/upload",
		success: function(data) {
			console.log('success');
			console.log(JSON.stringify(data));
		}
	});
});
$( document ).ready(function() {

	var ValidName = false;
	var ValidEmail = false;

	$( "#exampleInputName" ).blur(function() {
		$("#NameMessage").empty();

		if( $(this).val().length === 0 ){
			$("#NameMessage").append("<p>This is required</p>");
			ValidName = false;
			return;
		}

		if( $(this).val().length > 10 ){
			$("#NameMessage").append("<p>Cannot be Greater than 10</p>");
			ValidName = false;
			return;
		}

		ValidName = true;
	});

	$( "#exampleInputEmail1" ).blur(function() {
		$("#EmailMessage").empty();

		if( $(this).val().length === 0 ){
			$("#EmailMessage").append("<p>This is required</p>");
			ValidEmail = false;
			return;
		}

		var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		if( !$(this).val().match(reg)){
			$("#EmailMessage").append("<p>This email address is invalid</p>");
			ValidEmail = false;
			return;
		}

		ValidEmail = true;
	});


	

















	 $('#loginButton').click(function(event){
		event.preventDefault();
		if(ValidName === true && ValidEmail === true){
			$( "#LogininForm" ).submit();	
		}
	});

});


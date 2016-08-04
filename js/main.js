$( document ).ready(function() {
    // alert("ready");
     var Namevalid = false;
     var Emailvalid = false;

    $( "#exampleInputName" ).blur(function() {
    	$("#NameMessage").empty();

		if( $(this).val().length === 0 ){
			$( "#NameMessage" ).append( "<p>This is required</p>" );
			Namevalid = false;
			return;
		};

		if( $(this).val().length > 10 ){
			$( "#NameMessage" ).append( "<p>Cant be longer than 10 letters</p>" );
			Namevalid = false;
			return;
		};

		Namevalid = true;

	});

    $( "#exampleInputEmail1" ).blur(function() {
    	$('#EmailMessage').empty();

		if( $(this).val().length === 0 ){
			$( "#EmailMessage" ).append( "<p>This is required</p>" );
			Emailvalid = false;
			return;
		};

		reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		if( !$(this).val().match(reg)){
			$( "#EmailMessage" ).append( "<p>This email is invalid</p>" );
			Emailvalid = false;
			return;
		};

		Emailvalid = true;

	});




    $('#loginButton').click(function(event){
    	event.preventDefault();
    	if(Namevalid === true && Emailvalid === true){
    		$( "#LogininForm" ).submit();
    	}
    });













});
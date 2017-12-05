console.log("todo list")	


// $('input').val();

$('.field').click(function() {

var new_task = $('input').val();
	$('ul').first().append('<li>'+'<input type="radio" id="myBtn"/>'+new_task+'</li>');
	$('input').val([]);

});

// $('list').click(function())

 

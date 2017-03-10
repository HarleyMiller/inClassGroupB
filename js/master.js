(function() {
	$('.thumbInfo img').on('click', function(){
		$.ajax({
			url: "includes/ajaxQuery.php",
			data: { model : this.id },
			type: "GET"
		})

		//don't terminate this function with a semicolon because we're going to run another one
		
		.done(function(data){
			console.log(data);
//To flip through cars take content out of if else and delete if else statement
			if (data !== "null") {
				//if theres a result and its not null (empty)
			
			data = JSON.parse(data);
			//need to do more validation first, and render data
			

			//animate the thumbnails
			$('.thumbInfo img').addClass('nonActive'); //jQuery is awesine for this
			$('#' + data.model).removeClass('nonActive');
		renderCarData(data);
			}else {
				console.log('no data? that is impossible');
			}

			
	})
		//no semicolon yet
		.fail(function(ajaxCall, status, error) {
			console.log(status, ", ", error);
			console.dir(ajaxCall);
		}); //this semicolon is here because we're done with this call

	});

	function renderCarData(car) {
		$('.subhead span').text(" mini Cooper " + car.model);
		$('.modelName').text(car.modelName);
		$('.price info').text("$" + car.pricing);
		$('.modelDetails').text(car.modelDetails);
	}
})();
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

			data = JSON.parse(data);
			//need to do more validation first, and render data
		renderCarData(data);
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
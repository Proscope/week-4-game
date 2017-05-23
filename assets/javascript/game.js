$(document).ready(function() {

	crystals = ["assets/images/red.jpg", "assets/images/blue.jpeg", "assets/images/yellow.jpg", "assets/images/green.jpeg"];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);

	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4) {
				var randomNumber = Math.ceil(Math.random()*12)
				var found = false;
				for (var i = 0; i < numbers.length; i++) {
					if (numbers[i] == randomNumber) {
						found = true; break
					}
				}
				if(!found)numbers[numbers.length] = randomNumber;
			}
			console.log(numbers);

			for (i = 0; i < numbers.length; i++) {
				var imageCrystal = $("<img>");
				imageCrystal.attr("data-num", numbers[i]);
				imageCrystal.attr("src", crystals[i]);
				imageCrystal.attr("alt", crystals[i]);
				imageCrystal.addClass("crystalImage");
				$("#crystals").append(imageCrystal);
			}
	}

	function newGame() {

		counter = 0;
		$("#yourScore").text(counter);


		function randomIntFromInterval(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		var numberToGuess = randomIntFromInterval(19, 120);

		$(".value").text(numberToGuess);

		$(".crystalImage").on("click", function() {
			counter = counter + parseInt($(this).data("num"));

			$("#yourScore").text(counter);

			if (counter == numberToGuess) {
				$("#status").text("Congrats You Win!!!!");
				wins++;
				$("#win").text(wins);
				
				$("#crystals").empty();
				newCrystals();
				newGame();
			}

			else if (counter > numberToGuess) {
				$("#status").text("Sorry You Lose Ha Ha!!!");
				losses++;
				$("#loss").text(losses);

				$("#crystals").empty();
				newCrystals();
				newGame();
			}
		});
	}
});
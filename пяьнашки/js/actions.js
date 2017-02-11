
	var numbers = [];

	for(var i = 1; i <= 15; i++) {
		var num = parseInt(Math.random()*15 + 1);
		while($.inArray(num, numbers) !== -1) {
			num = parseInt(Math.random()*15 + 1);
			console.log(num, numbers);
		}
		numbers.push(num);


	}

	numbers.push(0);
	render();

	var activeCell = 15;
	for(var i = 0; i<=15; i++) {
		$("#" + (i+1)).on('click', function() {
			var current = parseInt($(this).text());
			var currentCellnumber = $(this).attr('id') - 1;
			if((currentCellnumber == activeCell - 1 && activeCell % 4 != 0 )
			|| (currentCellnumber == activeCell + 1 && activeCell % 4 != 3 )
			|| (currentCellnumber == activeCell - 4 && activeCell >= 4 )
			|| (currentCellnumber == activeCell + 4 && activeCell <= 11 )
			) {
			numbers[$(this).attr('id') - 1] = 0;
			numbers[activeCell] = current;
			activeCell = $(this).attr('id') - 1;
			render();
			checkWin();
		}
	});
}

function checkWin() {
	if (numbers.toString() == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0])
		alert("Ну! Мои поздравления!")
}


	function render() {
		for(var i = 0; i <= 15; i++) {
			if(numbers[i] != 0) {
				$("#" + (i+1)).html(numbers[i]);
			}
			else {
				$("#" + (i+1)).html("");
			}
		}
	}	




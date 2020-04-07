$( document ).ready( function() { 

var num1 = ''
var num2 = ''
var total = ''
var operator = ''

$( 'button' ).click(function() {
//	var btn = $('.calculator-display').append( $(this).text() )
	var btn = ( $(this).text() )
	console.log(btn)


	if ( btn >= '0' && btn <= '9' ) {
		selectedNumber( btn )
	} else {
		selectedOperator( btn )
	}

})


function selectedNumber(number) {
	if (num1 === '') {
		num1 = number
	} else {
		num2 = number
	}
	displayButton(number)
}

function selectedOperator(oper) {
	operator = oper
	console.log(operator)
}


function displayButton(btn) {
	$(".calculator-display").text(btn)
}

function displayAnswer(total) {
	$(".calculator-display").text(total)
}


$( '.equals' ).click(function() { 
	if (operator = '+') {
		total = +num1 + +num2
		displayButton(total)
	} else if (operator = '-') {
		total = +num1 - +num2
		displayButton(total)
	} else if (operator = '*') {
		total = +num1 * +num2
		displayButton(total)
	} else {

		total = +num1 / +num2
		displayButton(total)
	}



		
	console.log(total)
	displayAnswer(total)
	updateVariables()
})

function updateVariables() {
	num1 = total
	num2 = ''
	operator = ''
}

})
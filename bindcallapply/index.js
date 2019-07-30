// Bind Call & Apply
 var john = {
 	name: 'John',
 	age: 28,
 	job: 'teacher',
 	presentation: function(style, timeOfDay) {
 		if(style === 'formal') {
 			console.log('Good ' + ', Ladies and gentlemen! I\'m' +
 			 this.name + 
 			 ', I\'m a ' + 
 			 this.job + 
 			 'and I\'m ' 
 			 + this.age + 
 			 ' years old.');
 		} else if (style === 'friendly') {
 			console.log('Hey! What\'s up? I\'m ' + ', Ladies and gentlemen! I\'m' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old.');
 		}
 	}
 };

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');

// Call method allows us to use it as a 'this' variables
john.presentation.call(emily, 'friendly', 'afternoon');

// Apply method allows us to our arguments inside of arrays
// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(emily, 'friendly');

johnFriendly('morning');
johnFriendly('night');





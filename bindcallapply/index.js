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

john.presentation.call(emily, 'friendly', 'afternoon');
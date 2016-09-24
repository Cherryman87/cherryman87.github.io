var a = prompt('введите число');
var b = prompt('введите степень');

console.log(stepen(a,b));

function stepen(a,b) {

		if (b < -1) {
			var y = (1/a);
			for(var j = -2; j >= b; j--){
				y *= 1/a;
			}
			return y; 
		} else if ( b > 1) {
			var x = a; 
			for(var i = 2; i <= b; i++){
				x *= a;
			}
			return x; 
		} else if (b == 0) {
			return 1;
		} else if (b == 1) {
			return a;
		} else if (b == -1) {
			return 1/a;	
		}
}

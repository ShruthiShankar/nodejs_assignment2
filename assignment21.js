function addelementtoarray(){
	var arr = [6,7,8,9];

	var newele = 5;

	arr.unshift(newele);	// unshifting new element to the first position of an array
	console.log(arr);

	arr.splice(2,0,3,4);	// inserting 2 numbers at the second position of the array
	console.log(arr);
}
addelementtoarray();
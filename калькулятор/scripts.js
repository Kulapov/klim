function sum(f){
	var x = 123;
	x = Number(f.s1.value);
	var y = 123; 
	y =  Number(f.s2.value);
	var z = 123; 
	z = x + y;
	f.s3.value = z;
}

function minus(f){
	var x = 123; 
	x = Number(f.s1.value);
	var y = 123; 
	y =  Number(f.s2.value);
	var z = 123; 
	z = x - y;
	f.s3.value = z;
}

function ymn(f){
	var x = 123; 
	x = f.s1.value;
	var y = 123; 
	y =  f.s2.value;
	var z = 123; 
	z = x * y;
	f.s3.value = z;
}

function del(f){
	var x = 123; 
	x = f.s1.value;
	var y = 123; 
	y =  f.s2.value;
	var z = 123; 
	z = x / y;
	f.s3.value = z;
}
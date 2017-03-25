function numword(obj){
	var x1 = obj.t1.value
	var x2 = obj.t2.value
	var res = "";
	if(x1==x2) 
		{res = "Равны"
}
else
{
	res = "Не равны"
}
obj.res.value = res;
	
}
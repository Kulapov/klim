function areArrayEqual(A,B){
if(A.length !=B.length) return false
var on = 0
for(var i = 0; i < A.length; i++){
if(A[i] !==B[i]){
on++
break
		}
  	}
return on==0?true:false
}


window.onload = function(){
	alert(areArrayEqual([1,2,3],[1,2]));
	alert(areArrayEqual([1,2,3],[1,4,3]));
	alert(areArrayEqual([1,2,3],["1",2,3]));
	alert(areArrayEqual([1,2,3],[1,2,3]));
	alert(areArrayEqual([1],["1"]));
}
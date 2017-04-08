function uznai(p){
	var chisloRozd = Number(p.dateborn.value);
	var mesRozd = Number(p.monthborn.value);
	var godRozd = Number(p.yearborn.value);
	var now = new Date();
	var nowDay = now.getDate();
	var nowMonth = now.getMonth();
	var nowYear = now.getFullYear();
	var z;
	if(mesRozd < nowMonth) {z = nowYear - godRozd}
	if(mesRozd > nowMonth)  {z = nowYear - godRozd - 1}
	if(mesRozd = nowMonth) {
	if(chisloRozd < nowDay) {z = nowYear - godRozd}
	if(chisloRozd > nowDay)  {z = nowYear - godRozd - 1}

	if (chisloRozd = nowDay) {alert("с др бро! купон на беслатное пиво я уже заюзал(")
	}


	}
	p.otvet.value = z;
}
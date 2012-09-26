function GetDays(ddate,iid){
	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;
	
	days=0;

	amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs
	days=Math.floor(amount/86400);//days
	amount=amount%86400;
	
	if (days > 0) {
	   out = days;
	} else {
	   out = 0;
	}
	
	document.getElementById(iid).innerHTML=out;
	setTimeout(function(){GetDays(ddate,iid)}, 1000);
}

function GetHours(ddate,iid){
	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;
	
	hours=0;

	amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

	days=Math.floor(amount/86400);//days
	amount=amount%86400;

	hours=Math.floor(amount/3600);//hours
	amount=amount%3600;
	
	if (hours > 0) {
	   out = hours;
	} else {
	   out = 0;
	}
	
	document.getElementById(iid).innerHTML=out;
	setTimeout(function(){GetHours(ddate,iid)}, 1000);
}

function GetMinutes(ddate,iid){
	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;
	
	mins=0;

	amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

	days=Math.floor(amount/86400);//days
	amount=amount%86400;

	hours=Math.floor(amount/3600);//hours
	amount=amount%3600;

	mins=Math.floor(amount/60);//minutes
	amount=amount%60;
	
	if (mins > 0) {
	   out = mins;
	} else {
	   out = 0;
	}
	
	document.getElementById(iid).innerHTML=out;
	setTimeout(function(){GetMinutes(ddate,iid)}, 1000);
}

function GetSeconds(ddate,iid){
	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;
	
	secs=0;

	amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

	days=Math.floor(amount/86400);//days
	amount=amount%86400;

	hours=Math.floor(amount/3600);//hours
	amount=amount%3600;

	mins=Math.floor(amount/60);//minutes
	amount=amount%60;
	
	secs=Math.floor(amount);//seconds
	
	if (secs > 0) {
	   out = secs;
	} else {
	   out = 0;
	}
	
	document.getElementById(iid).innerHTML=out;
	setTimeout(function(){GetSeconds(ddate,iid)}, 1000);
}

window.onload=function(){
	GetDays(dateFuture1, 'daysBox');
	GetHours(dateFuture1, 'hoursBox');
	GetMinutes(dateFuture1, 'minutesBox');
	GetSeconds(dateFuture1, 'secondsBox');
	//you can add additional countdowns here (just make sure you create dateFuture2 and countbox2 etc for each)
};
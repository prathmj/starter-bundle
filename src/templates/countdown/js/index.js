const render = (data) => {
	const teamOne = window.document.getElementById("js_teamOne"); //data.teams[0].nickname
	const teamTwo = window.document.getElementById("js_teamTwo"); //data.teams[1].nickname
	const venue 	= window.document.getElementById("js_venue");		//data.venue.name

	teamOne.innerText = `${data.teams[0].location.toUpperCase()} ${data.teams[0].nickname.toUpperCase()}`;
	teamTwo.innerText = `${data.teams[1].location.toUpperCase()} ${data.teams[1].nickname.toUpperCase()}`;
	venue.innerText = data.venue.name.toUpperCase();

	updateTimer(data.startDate[1])
}

function updateTimer(startDate, running) {
	const hours 	= window.document.getElementById("js_hours"); 	//data.startDate[1]
	const minutes = window.document.getElementById("js_minutes");	//data.startDate[1]
	const seconds = window.document.getElementById("js_seconds");	//data.startDate[1]

	const then = moment.utc(startDate.full).utcOffset(-5);
	const now = moment().utcOffset(-5)
	if (now.isSameOrAfter(then)) {
		hours.innerText = 0;
		minutes.innerText = 0;
		seconds.innerText = 0;
		return;
	}
	
	const timeleft = moment.utc(moment(then.format('DD/MM/YYYY HH:mm:ss'),"DD/MM/YYYY HH:mm:ss").diff(moment(now.format('DD/MM/YYYY HH:mm:ss'),"DD/MM/YYYY HH:mm:ss"))).format("HH mm ss").split(' ')
	hours.innerText = timeleft[0];
	minutes.innerText = timeleft[1];
	seconds.innerText = timeleft[2];
	if (running) return;
	setInterval(() => {
		updateTimer(startDate, true)
	}, 1000)
}
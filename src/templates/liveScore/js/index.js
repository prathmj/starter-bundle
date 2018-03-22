const render = (data, resolve, reject) => {
	try {
		const teamOneName = window.document.getElementById("js_teamOneName"); //data.teams[0].nickname
		const teamTwoName = window.document.getElementById("js_teamTwoName"); //data.teams[1].nickname
		const teamOneScore = window.document.getElementById("js_teamOneScore"); //data.teams[0].nickScore
		const teamTwoScore = window.document.getElementById("js_teamTwoScore"); //data.teams[1].nickScore
		const venue 	= window.document.getElementById("js_venue");		//data.venue.name
		const current = window.document.getElementById("js_period"); //data.eventStatus.inning || data.eventStatus.period

		teamOneName.innerText = `${data.teams[0].location.toUpperCase()} ${data.teams[0].nickname.toUpperCase()}`;
		teamTwoName.innerText = `${data.teams[1].location.toUpperCase()} ${data.teams[1].nickname.toUpperCase()}`;
		teamOneScore.innerText = `${data.teams[0].linescoreTotals.runs}`;
		teamTwoScore.innerText = `${data.teams[1].linescoreTotals.runs}`;

		venue.innerHTML = data.venue.name.toUpperCase();
		const period = data.eventStatus.inning ? `${data.eventStatus.inningDivision.toUpperCase()} ${formatPeriod(String(data.eventStatus.inning))}` : formatPeriod(String(data.eventStatus.period));
		current.innerText = period;
	} catch (e) {
		reject(e)
	}
}

function formatPeriod(n) {
	switch(n) {
		case "1":
			return "1ST";
		case "2":
			return "2ND";
		case "3":
			return "3RD";
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			return `${n}TH`
		default:
			return "LIVE SCORE"
	}
}

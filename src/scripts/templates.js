export default function getTemplates(type) {
	switch(type) {
		case 'liveScore':
			return `
	<div id="bannerContainer">
		<img src="#">
	</div>

	<div id="content">
		<span>LIVE</span>
		<fieldset id="contentContainer">
			<legend id="js_period">LIVE SCORE</legend>
			<div id="timeContainer">
				<h2 id="js_timeLeft"></h2>
			</div>
			<div id="scoreboard">
				<div id="teamOne">
					<h3 id="js_teamOneName"></h3>
					<h4 id="js_teamOneScore"></h4>
				</div>
				<div class="divider"></div>
				<div id="teamTwo">
					<h3 id="js_teamTwoName"></h3>
					<h4 id="js_teamTwoScore"></h4>
				</div>
			</div>
		</fieldset>
		<div id="venueContainer">
			<h3 id="js_venue"></h3>
		</div>
	</div>
`
	case 'countdown':
		return  `
	<div id="bannerContainer">
		<img src="#">
	</div>

	<div id="content">
		<fieldset id="contentContainer">
			<legend>COUNTDOWN</legend>
			<div id="teams">
				<h2 id="js_teamOne"></h2>
				<h3>VS</h3>
				<h2 id="js_teamTwo"></h2>
			</div>
			<div class="clearfix"></div>
			<div id="timeboard">
				<div id="hours">
						<h3>Hours</h3>
						 <h4 id="js_hours"></h4>
				</div>
				<div id="minutes">
						<h3>Minutes</h3>
						 <h4 id="js_minutes"></h4>
				</div>
				<div id="seconds">
						<h3>Seconds</h3>
						 <h4 id="js_seconds"></h4>
				</div>
			</div>
		</fieldset>
		<div id="venueContainer">
			<h3 id="js_venue"></h3>
		</div>
	</div>
`
	case 'standings':
		return `
	<div id="bannerContainer">
		<img src="#">
	</div>

	<div id="content">
		<fieldset id="contentContainer">
			<legend id="js_period">CURRENT STANDINGS</legend>
			<div id="flexContainer">
				<div id="rankings">
					<h1>Rank</h1>
					<h2>1</h2>
					<h2>2</h2>
					<h2>3</h2>
					<h2>4</h2>
					<h2>5</h2>
				</div>
				<div class="divider"></div>
				<div id="teamInfo">
					<h1>Teams</h1>
					<div id="teamOne">
						<h3 id="js_teamName"></h3>
						<h4 id="js_teamRecord"></h4>
					</div>
					<div id="teamTwo">
						<h3 id="js_teamName"></h3>
						<h4 id="js_teamRecord"></h4>
					</div>
					<div id="teamThree">
						<h3 id="js_teamName"></h3>
						<h4 id="js_teamRecord"></h4>
					</div>
					<div id="teamFour">
						<h3 id="js_teamName"></h3>
						<h4 id="js_teamRecord"></h4>
					</div>
					<div id="teamFive">
						<h3 id="js_teamName"></h3>
						<h4 id="js_teamRecord"></h4>
					</div>
				</div>
			</div>
		</fieldset>
	</div>
`
	}
}
 function template(obj) {
return `
	<img id="backgroundImage" src="images/${obj.source}-background.png"/>
	<img id="headerImage" src="images/header.png" />
	<div id="socialContainer">
		<div id="userImageWrapper">
			<div id="userImage" style="background-image: url('${obj.imagesrc}'); ${obj.styleObj}"/>
		</div>
		<div id="label">
			<p>${obj.username}</p>
			<img id="verifiedIcon" src="images/verified.png" />
			<img id="socialIcon" src="images/${obj.source}-icon.png" />
		</div>
		<p id="userMessage">${obj.message}</p>
	</div>
	<p id="userMessage2">${obj.message}</p>
`}

module.exports = template;
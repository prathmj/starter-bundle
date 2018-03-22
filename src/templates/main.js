main = () => {
	window.parent.postMessage('ready', '*')
	window.addEventListener('message', e => {
		const data = JSON.parse(e.data);
		window.document.body.style.backgroundImage = `url('../../images/${data.config.backgroundImage}')`
		window.document.querySelector("#bannerContainer > img").src = `../../images/${data.config.bannerImage}`
		render(data)
	})
}
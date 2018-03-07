main = () => {
		window.parent.dataPassback(data => {
		window.document.body.style.backgroundImage = `url('../../images/${data.backgroundImage}')`
		render(data)
	})
}
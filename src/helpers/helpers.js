export const pixels2percentages = d => {
	const relX = d._box._x/d._imageDims._width
	const relY = d._box._y/d._imageDims._height
	const relW = d._box._width/d._imageDims._width			
	const relH = d._box._height/d._imageDims._height
	return { id: Math.random(), relX, relY, relW, relH }
}

export const div2Canvas = (width, height, bkImg, faceBoxes, test) => {
	//initialize canvas and canvas dimensions
	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height
	//put img as background
	const ctx = canvas.getContext('2d');
	ctx.drawImage(bkImg, 0, 0, canvas.width, canvas.width * bkImg.height / bkImg.width)
	//draw smilies
	faceBoxes.forEach(d => {
		const {relX, relY, relW, relH} = d
		// ctx.fillRect(relX*width, relY*height, relW*width, relH*height)
		const imgSmile = document.createElement('img')
		imgSmile.src = './smiley.png'
		imgSmile.width = 20;
		imgSmile.height = 20;
		imgSmile.onload = function() {
		ctx.drawImage(imgSmile, relX*width, relY*height, relW*width, relH*height)
		}
	})
	//append canvas
	test.appendChild(canvas)
}
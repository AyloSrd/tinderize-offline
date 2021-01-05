export const pixels2percentages = d => {
	const relX = d._box._x/d._imageDims._width
	const relY = d._box._y/d._imageDims._height
	const relW = d._box._width/d._imageDims._width			
	const relH = d._box._height/d._imageDims._height
	return { id: Math.random(), relX, relY, relW, relH }
}

export const div2Canvas = (width, height, bkImg, test) => {
	//initialize canvas and canvas dimensions
	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height
	//put img as background
	const ctx = canvas.getContext('2d');
	ctx.drawImage(bkImg, 0, 0, canvas.width, canvas.width * bkImg.height / bkImg.width)
	//append canvas
	test.appendChild(canvas)
}
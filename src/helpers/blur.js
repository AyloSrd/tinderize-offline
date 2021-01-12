export const blur = imgData => {
	let k = 0
	let px = imgData.data
	while( k <= 100 ){
		for (let i = 0, len= px.length; i < len; i++) {
		   if (i % 4 === 3) continue  
		   px[i] = ( px[i] 
			  + (px[i - 4] || px[i])
			  + (px[i + 4] || px[i]) 
			  + (px[i - 4 * imgData.width] || px[i])
			  + (px[i + 4 * imgData.width] || px[i]) 
			  + (px[i - 4 * imgData.width - 4] || px[i])
			  + (px[i + 4 * imgData.width + 4] || px[i])
			  + (px[i + 4 * imgData.width - 4] || px[i])
			  + (px[i - 4 * imgData.width + 4] || px[i])
			)/9
		}
		k++
	}
}

export const addSmileys = (ctx, relX, relY, relW, relH, width, height) => {
	const newRelX = Math.floor(relX*width) - Math.floor(relW*width*0.1)
	const newRelY = Math.floor(relY*height) + Math.floor(relH*height*0.05)
	ctx.textAlign = 'left'
	ctx.textBaseline = 'top'
	ctx.font = `${(width >= height 
		? relW*width
		: relH*height)*0.9}px Arial`
	ctx.fillText('😄', newRelX, newRelY)
}
const gaussianBlur = imgData => {
	const tmpPx = imgData.data
	let k = 0

	while( k <= 100 ){
		for (var i = 0, len= tmpPx.length; i < len; i++) {
		   if (i % 4 === 3) continue
	  
		   tmpPx[i] = ( tmpPx[i] 
			  + (tmpPx[i - 4] || tmpPx[i])
			  + (tmpPx[i + 4] || tmpPx[i]) 
			  + (tmpPx[i - 4 * imgData.width] || tmpPx[i])
			  + (tmpPx[i + 4 * imgData.width] || tmpPx[i]) 
			  + (tmpPx[i - 4 * imgData.width - 4] || tmpPx[i])
			  + (tmpPx[i + 4 * imgData.width + 4] || tmpPx[i])
			  + (tmpPx[i + 4 * imgData.width - 4] || tmpPx[i])
			  + (tmpPx[i - 4 * imgData.width + 4] || tmpPx[i])
			  )/9
		}
		k++
	}
	console.log('2',tmpPx)
}

export default gaussianBlur
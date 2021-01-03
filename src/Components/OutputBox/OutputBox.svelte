<script>
	import { image } from '../../imageStore'
	import FaceBox from '../FaceBox/FaceBox.svelte'
	
	export let faceapi
	
	let width
	let height
	let img
	let detections

	const detectFaces = async() => {
		const res = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
		image.setBoxes(res.map(d => {
			const relX = d._box._x/d._imageDims._width
			const relY = d._box._y/d._imageDims._height
			const relW = d._box._width/d._imageDims._width			
			const relH = d._box._height/d._imageDims._height
			return { id: Math.random(), relX, relY, relW, relH }
		}))
	}

	$: src = $image.imgUrl
	$: faceBoxes = $image.boxes
	$: if(img) detectFaces()
	$: if(detections) {
		console.log(detections)
	}
	$: console.log(faceBoxes)

	

</script>
<style>
	#imgLayer {
		position: relative;
	}

	@media only screen and (max-width: 600px) {
		#imgLayer img {
			width: 100vw;
			max-width: 100%;
			height: auto;
		}
	}
	@media (min-width:600px)  { 
		#imgLayer {
			display: block;
			margin: 0 auto;
			
		}
		#imgLayer img {
			width: 100%;
			max-width: 100%;
			height: auto;
		}
	}
</style>
{#if src}
	<div 
		id="imgLayer"
		bind:clientWidth="{width}" 
		bind:clientHeight="{height}"
	>
		<img 
			alt="your pic"	
			{ src }
			bind:this="{img}"
		/>
		{#each faceBoxes as faceBoxData (faceBoxData.id)}
		<FaceBox 
			{ width }
			{ height }
			{ faceBoxData }
		/>
		{/each}
	</div>
{/if}
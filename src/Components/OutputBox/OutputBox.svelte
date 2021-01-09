<script>
	import { image } from '../../imageStore'
	import { pixels2percentages, div2Canvas } from '../../helpers/helpers.js'  
	import Modal from '../Modal/Modal.svelte'
	import FaceBox from '../FaceBox/FaceBox.svelte'
	
	export let faceapi
	
	let width
	let height
	let img
	let imgLayer
	let test
	
	$: src = $image.imgUrl
	$: faceBoxes = $image.boxes
	$: if(img) detectFaces()
	$: if(faceBoxes.length !== 0) {
		console.log('faceBoxes OutputBox', faceBoxes)
	}

	const detectFaces = async() => {
		const res = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
		image.setBoxes(res.map(d => pixels2percentages(d)))
	}

		
	const createPic = () => {
		let currFaceBoxes = $image.boxes
		console.log(currFaceBoxes)
		div2Canvas(width, height, img, currFaceBoxes, test)
	}

	const closeModal = () => image.reset()
		
</script>
<style>
	#test {
		position: fixed;
		left:0;
		top: 0;
		z-index: 1000;
	}

	#imgLayer {
		position: relative;
	}

	@media only screen and (max-width: 600px) {
		#imgLayer img {
			width: 100vw;
			max-width: 100%;
		}
	}
	@media (min-width:600px)  { 
		#imgLayer {
			display: block;
			margin: auto auto;
			width: 600px;
		}
		#imgLayer img {
			width: 100%;
			max-width: 100%;
			height: auto;
		}
	}
</style>
{#if src}
	<Modal>
		<div slot="nav">
			<button on:click="{closeModal}">X</button>
		</div>
		<div 
			slot="main"
			id="imgLayer"
			bind:clientWidth="{width}" 
			bind:clientHeight="{height}"
			bind:this="{imgLayer}"
		><div>

			<img 
				alt="your pic"	
				{ src }
				bind:this="{img}"
			/>
			{#each faceBoxes as faceBoxData (faceBoxData.id)}
			<FaceBox 
				{ width }
				{ height }
				boxId="{faceBoxData.id}"
			/>
			{/each}
		</div>
		</div>
		<div slot="footer">
			<button on:click="{createPic}">+</button>
		</div>
	</Modal>
	<div id='test' bind:this="{test}">

	</div>
{/if}
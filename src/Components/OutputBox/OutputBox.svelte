<script>
	import { image } from '../../imageStore'
	import { pixels2percentages, div2Canvas, getImgHeight } from '../../helpers/helpers.js'  
	import Modal from '../Modal/Modal.svelte'
	import FaceBox from '../FaceBox/FaceBox.svelte'
	import Button from '../Button/Button.svelte'

	
	export let faceapi
	
	let width
	let height
	let img
	
	$: src = $image.imgUrl
	$: faceBoxes = $image.boxes
	$: console.log('height', height)
	$: if(img) detectFaces()

	const detectFaces = async() => {
		const res = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
		console.log(res)
		height = Math.floor(res[0].imageHeight*width/res[0].imageWidth)
		image.setBoxes(res.map(d => pixels2percentages(d)))
	}
		
	const createPic = () => {
		console.log('creating canvas', width, height, img, faceBoxes)
		div2Canvas(width, height, img, faceBoxes)
	}

	const closeModal = () => image.reset()
</script>
<style>
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

	div.right {
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
	}
</style>
{#if src}
	<Modal>
		<div 
			class="right"
			slot="nav"
		>
			<Button
				dimensions="BigBtn"
				inner="Close"
				on:click="{closeModal}"
			></Button>
		</div>
		<div 
			slot="main"
			id="imgLayer"
			bind:clientWidth="{width}" 
		><div>

			<img 
				alt="your pic"	
				{ src }
				bind:this="{img}"
				width="600px"
				height="auto"
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
		<div 
			class="right"
			slot="footer"
		>
			<Button
				dimensions="BigBtn"
				inner="Download"
				on:click="{createPic}"
			></Button>
		</div>
	</Modal>
{/if}
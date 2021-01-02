<script>
	import { image } from '../../imageStore'
	import FaceBox from '../FaceBox/FaceBox.svelte'

	let width
	let height

	$: src = $image.imgUrl
	$: faceBoxes = $image.boxes

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
	<div 
		id="imgLayer"
		bind:clientWidth={width} 
		bind:clientHeight={height}
	>
		<img 
			alt="your pic"	
			{ src }
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
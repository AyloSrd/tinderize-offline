<script>
	import { onMount } from 'svelte'
	import { image } from '../../imageStore'

	export let width
	export let height
	export let boxId
	
	const contentList = ['blur', 'blur']
	const src = './smiley.png'
	
	let idx = 0
	let showButtons = false
	let style, 
		currBoxWidth,
		currBoxHeight,
		currX,
		currY

	$: boxContent = contentList[idx%2]
	$: newBoxSpecs = { 
		id: boxId,
		relX: currX,
		relY: currY,
		relW: currBoxWidth/width,
		relH: currBoxHeight/height,
		boxContent		
	}
	$: if (currX && currY && showButtons) image.setBoxes($image.boxes.map(box => box.id === boxId ? newBoxSpecs : box))

	onMount(() => {
		let initialFaceBoxData = $image.boxes.filter(box => box.id === boxId)[0]
		let initialTop = Math.floor(Number(initialFaceBoxData.relY)*height)
		let initialLeft = Math.floor(Number(initialFaceBoxData.relX)*width)
		let initialBoxWidth = Math.floor(Number(initialFaceBoxData.relW)*width)
		let initialBoxHeight = Math.floor(Number(initialFaceBoxData.relH)*height)
		currX = initialFaceBoxData.relX
		currY = initialFaceBoxData.relY
		style = `position: absolute; top: ${initialTop}px; left: ${initialLeft}px; height: ${initialBoxHeight}px; width: ${initialBoxWidth}px;`
		console.log('faceboxdata', initialFaceBoxData, 'style',style, 'top', initialTop)
	})	

	const close = () => {
		const faceboxes = $image.boxes.filter(box => box.id !== boxId)
		image.setBoxes(faceboxes)
	}

	const handleMouseEnter = () => {
		showButtons= true;
	}

	const handleMouseLeave = () => {
		showButtons= false;
	}

</script>
<style>
	.faceBox {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		cursor: pointer;
		resize: both;
  		overflow: auto;
	}

	.faceBox img {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.faceBox .closeBtn {
		border-radius: 50%;
		position: absolute;
		height: 20px;
		width: 20px;
		top: 0;
		right: 0;
		padding: 0;
		border: none;
		background-color: #f00;
		cursor: pointer;
	}

	.faceBox .closeBtn .removeIcon {
		color: #fff;
		position: absolute;
		margin: 0;
		width: 100%;
		height: 100%;
		margin-left: -35%;
		margin-top: -10%;
		cursor: pointer;
	}

	.faceBox .closeBtn .removeIcon::before {
		content: '';
		position: absolute;
		width: 70%;
		height: 20%;
		background-color: currentColor;
		-webkit-transform: rotate(45deg);
          transform: rotate(45deg);
	}

	.faceBox .closeBtn .removeIcon::after {
		content: '';
		position: absolute;
		width: 70%;
		height: 20%;
		background-color: currentColor;
		-webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
	}

	.faceBox.blur {
		background: rgba( 255, 255, 255, 0.00 );
		backdrop-filter: blur( 12.0px );
		-webkit-backdrop-filter: blur( 12.0px );
	}

	.faceBox img.hidden {
		visibility: hidden;
	}

</style>
<div 
	on:mouseenter="{handleMouseEnter}"
	on:mouseleave="{handleMouseLeave}"
	bind:clientWidth="{currBoxWidth}" 
	bind:clientHeight="{currBoxHeight}"
	class="{`faceBox ${boxContent}`}"
	{ style }
>	
	<img 
		{ src } 
		alt="face-cover"
		class:hidden="{boxContent === 'blur'}"
	>
	{#if showButtons}		
		<button 
			class="closeBtn"
			on:click="{close}"
		>
			<div class="removeIcon"></div>
		</button>
	{/if}
</div>
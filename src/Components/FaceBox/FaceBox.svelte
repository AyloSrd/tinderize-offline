<script>
	import { image } from '../../imageStore'

	export let width
	export let height
	export let faceBoxData
	let showButtons = false
	let blur = true

	const { id, relX, relY, relW, relH } = faceBoxData
	const src = './smiley.png'

	$: top = Math.floor(Number(relY)*height)
	$: left = Math.floor(Number(relX)*width)
	$: boxWidth = Math.floor(Number(relW)*width)
	$: boxHeight = Math.floor(Number(relH)*height)	
	
	$: style = `position: absolute; top: ${top}px; left: ${left}px; height: ${boxHeight}px; width: ${boxWidth}px;`

	$: console.log(style)

	const close = () => {
		const faceboxes = $image.boxes.filter(box => box.id !== id)
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

	.faceBox .switchBtn {
		border-radius: 50%;
		position: absolute;
		height: 20px;
		width: 20px;
		bottom: 0;
		left: 50%;
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
		padding: 0;
		border: none;
		background-color: #f00;
		cursor: pointer;
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
	bind:clientWidth={boxWidth} 
	bind:clientHeight={boxHeight}
	class="faceBox"
	class:blur="{blur}"
	{ style }
>	
	<img 
		{ src } 
		alt="face-cover"
		class:hidden="{blur}"
	>
	{#if showButtons}		
		<button 
			class="closeBtn"
			on:click="{close}"
		>
			<div class="removeIcon"></div>
		</button>
		<button 
			class="switchBtn"
			on:click="{() => blur = !blur}"
		>
			<div class="removeIcon"></div>
		</button>
	{/if}
</div>
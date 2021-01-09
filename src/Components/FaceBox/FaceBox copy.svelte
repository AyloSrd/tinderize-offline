<script>
	import { image } from '../../imageStore'

	export let width
	export let height
	export let faceBoxData

	const contentList = ['smiley', 'blur']
	let idx = 0

	let showButtons = true

	const { id, relX, relY, relW, relH } = faceBoxData
	const src = './smiley.png'

	$: boxContent = contentList[idx%2]
	$: top = Math.floor(Number(relY)*height)
	$: left = Math.floor(Number(relX)*width)
	$: boxWidth = Math.floor(Number(relW)*width)
	$: boxHeight = Math.floor(Number(relH)*height)	
	
	$: style = `position: absolute; top: ${top}px; left: ${left}px; height: ${boxHeight}px; width: ${boxWidth}px;`

	

	const close = () => {
		const faceboxes = $image.boxes.filter(box => box.id !== id)
		image.setBoxes(faceboxes)
	}

	const switchContent = () => idx = idx + 1

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


	.faceBox .switchBtn .switchIcon {
		color: #fff;
		position: absolute;
		margin-left: 2px;
		margin-top: 6px;
		width: 15px;
		height: 10px;
		border-top: solid 3px currentColor;
		border-bottom: solid 3px currentColor;
	}

	.faceBox .switchBtn .switchIcon:before {
		content: '';
		position: absolute;
		top: -2px;
		right: 5px;
		width: 9px;
		height: 9px;
		border-bottom: solid 3px currentColor;
		transform: rotate(30deg)
	}

	.faceBox .switchBtn .switchIcon:after {
		content: '';
		position: absolute;
		top: -6px;
		right: 1px;
		width: 9px;
		height: 9px;
		border-top: solid 3px currentColor;
		transform: rotate(30deg)
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
		<button 
			class="switchBtn"
			on:click="{switchContent}"
		>
			<div class="switchIcon"></div>
		</button>
	{/if}
</div>
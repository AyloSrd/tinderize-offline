<script>
	import { image } from '../../imageStore'

	export let width
	export let height
	export let faceBoxData
	let showButtons = false

	const src = './smiley.png'

	const boxDetails = faceBoxData.region_info.bounding_box

	const id = faceBoxData.id
	$: top = Number(boxDetails.top_row)*height
	$: left = Number(boxDetails.left_col)*width
	$: boxWidth = (Number(boxDetails.right_col) - Number(boxDetails.left_col))*width
	$: boxHeight = (Number(boxDetails.bottom_row) - Number(boxDetails.top_row))*height	
	
	$: style = `position: absolute; top: ${top}px; left: ${left}px; height: ${boxHeight}px; width: ${boxWidth}px; z-index:5000;`

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
</style>
<div 
	on:mouseenter="{handleMouseEnter}"
	on:mouseleave="{handleMouseLeave}"
	class="faceBox"
	{ style }
>	
	<img { src } alt="face-cover">
	{#if showButtons}		
		<button 
			class="closeBtn"
			on:click="{close}"
		>
			<div class="removeIcon"></div>
		</button>
	{/if}
</div>
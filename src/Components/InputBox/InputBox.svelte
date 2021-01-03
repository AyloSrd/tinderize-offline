<script>
	import { image } from '../../imageStore'
	let imgUrl = ''
	let fileinput
	
	const onFileSelected = e => imgUrl = URL.createObjectURL(e.target.files[0])

	$: imgUrl 
		? image.setImgUrl(imgUrl)
		: ''
	
</script>  

<div 
	class="chan" 
	on:click={()=>{fileinput.click()}}
>
	Choose Image
</div>
<input 
	id="hiddenInput"
	type="file" 
	accept="image/*" 
	on:change={ e => onFileSelected(e)} 
	bind:this={fileinput} 
>

<style>
	#hiddenInput {
		display: none;
	}
</style>

 
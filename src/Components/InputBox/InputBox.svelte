<script>
	import Header from '../Header/Header.svelte'
	import { image } from '../../imageStore'
	let imgUrl = ''
	let fileinput
	
	const onFileSelected = e => imgUrl = URL.createObjectURL(e.target.files[0])

	$: imgUrl 
		? image.setImgUrl(imgUrl)
		: ''
	
</script>  

<style>
	.inputBox {
		height: 100%;
		width: 100%;
		max-height: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.fakeUploadBtn {
		height: 50px;
		color: white;
		font-size: 1.2rem;
		font-weight: 800;
		background: rgb(255,0,102);
		background: linear-gradient(45deg, rgba(255,0,0,1) 3%, rgba(255,0,102,1) 57%);
		display: grid;
		place-content: center;
		cursor: pointer;
	}

	.fakeUploadBtn:hover {
		background: rgb(255,0,0);
		background: linear-gradient(45deg, rgba(210,0,0,1) 3%, rgba(210,0,57,1) 57%);
	}

	.fakeUploadBtn:active {
		background: rgb(255,0,0);
		background: linear-gradient(135deg, rgba(210,0,0,1) 3%, rgba(210,0,57,1) 57%);
		box-shadow: 0px 0px 15px -6px rgb(255,0,102);
	}

	.hiddenInput {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		.inputBox {
			justify-content: space-between;
		}

		.fakeUploadBtn {
			width: 100vw;
			max-width: 100%;
		}
	}

	@media (min-width:600px) {
		.inputBox {
			align-items: center;
			justify-content: space-around;
		}
		
		.fakeUploadBtn {
			width: 300px;
			border-radius: 5px;
		}
	}
</style>
<div class='inputBox'>
	<Header />
	<div 
		class="fakeUploadBtn" 
		on:click={()=>{fileinput.click()}}
	>
		Choose image
	</div>
	<input 
		class="hiddenInput"
		type="file" 
		accept="image/*" 
		on:change={ e => onFileSelected(e)} 
		bind:this={fileinput} 
	>
</div>
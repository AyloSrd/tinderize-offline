<script>
	import { image } from '../../imageStore'
	import Clarifai from 'clarifai'

	const apiKey = __myapp.env.API_KEY
	const app = new Clarifai.App({
		apiKey: apiKey,
		apiEndpoint: 'https://api.clarifai.com'
	})

	let imgUrl = 'https://media.gqitalia.it/photos/5caaecab8f8fd798887e394c/master/w_1996,c_limit/GettyImages-480403189.jpg'

	const handleSubmit = () => {
			image.setImgUrl(imgUrl)
			app.models
		.predict(
			// HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
			// A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
			// for the Face Detect Mode: https://www.clarifai.com/models/face-detection
			// If that isn't working, then that means you will have to wait until their servers are back up. Another solution
			// is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
			// so you would change from:
			// .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			// to:
			// .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
			Clarifai.FACE_DETECT_MODEL,
			imgUrl)
		.then(response => {
				image.setBoxes(response.rawData.outputs[0].data.regions)
			})
		.catch(err => console.error(err))
			
	}
</script>
<style>
	.container {
		width: 100vw;
		max-width: 100%;
		display: flex;
		justify-content: center;
		margin: 10vh 0 20px;
	}

	.container .Form {
		width: 100%;
		max-width: 600px;
		padding: 0 20px;
		display: flex;
		justify-content: center;
	}

	.container .Form .inputField {
		flex-grow: 1;
	}

	.container .Form .btn {
		border: none;
		color: white;
		background: rgb(192,0,0);
		background: linear-gradient(45deg, rgba(192,0,0,1) 15%, rgba(255,0,0,1) 78%);
	}
</style>
<div class="container">
	<form  
		class="Form"
		on:submit|preventDefault="{handleSubmit}"
	>
		<input 
			class="inputField"
			type="text"
			bind:value="{imgUrl}"
		/>
		<input 
			class="btn"
			type="submit"
			value="Tinderize!"
		/>
	</form>
</div>

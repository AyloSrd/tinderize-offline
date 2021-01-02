<script>
	import { onMount } from 'svelte'
	import * as faceapi from 'face-api.js'
	import Navigation from './Components/Navigation/Navigation.svelte'
	import Form from './Components/Form/Form.svelte'
	import OutputBox from './Components/OutputBox/OutputBox.svelte'
	import Footer from './Components/Footer/Footer.svelte'

	onMount(async() => {
		faceapi.nets.tinyFaceDetector.loadFromUri('./models').then(() => console.log('loaded'))
	})

</script>
<div class="Body">
	<Navigation />
	<main>
		<Form />
		<OutputBox />
	</main>
	<Footer />
</div>

<style>
	.Body {
		height: 100vh;
		width: 100vw;
		max-height: 100%;
		max-width: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
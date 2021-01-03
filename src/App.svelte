<script>
	import { onMount } from 'svelte'
	import * as faceapi from 'face-api.js'
	import Navigation from './Components/Navigation/Navigation.svelte'
	import Spinner from './Components/Spinner/Spinner.svelte'
	import InputBox from './Components/InputBox/InputBox.svelte'
	import OutputBox from './Components/OutputBox/OutputBox.svelte'
	import Footer from './Components/Footer/Footer.svelte'

	let isLoading = true

	onMount(async() => {
		faceapi.nets.tinyFaceDetector.loadFromUri('./models')
			.then(() => setTimeout(() => isLoading=false, 5000))
			.catch(err => console.error(err))
		}
	)

</script>
<div class="Body">
	{#if isLoading}
		<Spinner />
	{:else}	
		<Navigation />
		<main>
			<InputBox />
			<OutputBox { faceapi } />
		</main>
		<Footer />
	{/if}
</div>

<style>
	/*#ff0066*/
	.Body {
		height: 100vh;
		width: 100vw;
		max-height: 100%;
		max-width: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
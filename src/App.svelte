<script>
	import { onMount } from 'svelte'
	import * as faceapi from 'face-api.js'
	import { image } from './imageStore'
	import Navigation from './Components/Navigation/Navigation.svelte'
	import Spinner from './Components/Spinner/Spinner.svelte'
	import InputBox from './Components/InputBox/InputBox.svelte'
	import OutputBox from './Components/OutputBox/OutputBox.svelte'
	import Footer from './Components/Footer/Footer.svelte'

	let isLoading = true
	$: src = $image.imgUrl

	onMount(async() => {
		faceapi.nets.tinyFaceDetector.loadFromUri('./models')
			.then(() => setTimeout(() => isLoading=false, 2000))
			.catch(err => console.error(err))
		}
	)

</script>
{#if isLoading}
	<Spinner />
{:else}	
	<div class="Body">
		<Navigation />
		<main>
			{#if !src}
				<InputBox />
			{:else if src}	
				<OutputBox { faceapi } />
			{/if}
		</main>
		<Footer />
	</div>
{/if}

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
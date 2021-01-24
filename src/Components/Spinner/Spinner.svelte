<script>
	import Footer from '../Footer/Footer.svelte'

	export let footerText
</script>
<style>

	@-webkit-keyframes blurred {
		0% {
			-webkit-filter: blur(40px);
					filter: blur(40px);
		}
		100% {
			-webkit-filter: blur(0);
					filter: blur(0);
		}
	}
	
	@keyframes blurred {
		0% {
			-webkit-filter: blur(40px);
					filter: blur(40px);
			opacity: 0;
		}
		100% {
			-webkit-filter: blur(0);
					filter: blur(0);
			opacity: 1;
		}
	}

	.blurred {
		-webkit-animation: blurred 3s infinite ease-out alternate;
				animation: blurred 3s infinite ease-out alternate;
	}

	.container {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-rows: 1fr auto;
	}
	
	.spinnerWrapper {
		width: 5rem;
		height: auto;
		place-self: center;
	}

	.spinnerWrapper img {
		width: 100%;
		height: auto;
	}
</style>

<div class='container'>
	<div class="spinnerWrapper blurred">
		<img src="/logo.png" alt="spinner">
	</div>
	<Footer 
		textContent="{footerText}"
	/>
</div>
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

	.spinnerContainer {
		width: 5rem;
		height: auto;
	}

	.spinnerContainer img {
		width: 100%;
		height: auto;
	}
</style>


<div class="spinnerContainer blurred">
	<img src="/logo.png" alt="spinner">
</div>
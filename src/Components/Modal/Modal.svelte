<style>
	.modalContainer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		max-width: 100%;
		max-height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		background-color: black;
	}

	.modalContainer section.modalMain {
		overflow-y: auto;
	}
</style>
<div class="modalContainer">
	<nav class="modalNav">
		<slot name="nav"></slot>
	</nav>
	<section class="modalMain">
		<slot name="main"></slot>
	</section>
	<footer class="modalFooter">
		<slot name="footer"></slot>
	</footer>
</div>

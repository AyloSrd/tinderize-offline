<script>
	export let dimensions
	export let inner
</script>
<style>
	button {
		position: relative;
		background: rgb(255,0,102);
		background: linear-gradient(45deg, rgba(255,0,0,1) 3%, rgba(255,0,102,1) 57%);
		margin: 5px;
		cursor: pointer;
		border: none;
	}

	button.BigBtn {
		height: 40px;
		width: 40px;
		
	}

	button.SmallBtn {
		height: 20px;
		width: 20px;
		
	}

	div.Download {
		position: absolute;
		margin-left: 5px;
		margin-top: 3px;
		width: 18px;
		height: 5px;
		border-radius: 1px;
		border: solid 2px white;
		border-top: none;
	}
  
	div.Download:before {
		content: '';
		position: absolute;
		left: 6px;
		top: -11px;
		width: 2px;
		height: 11px;
		background-color: white;
	}
  
	div.Download:after {
		content: '';
		position: absolute;
		left: 4px;
		top: -6px;
		width: 6px;
		height: 6px;
		border-top: solid 2px white;
		border-right: solid 2px white;
		-webkit-transform: rotate(135deg);
				transform: rotate(135deg);
	}

	div.Close {
		color: #fff;
		position: absolute;
		margin: 0;
		width: 100%;
		height: 100%;
		margin-left: -50%;
		margin-top: -5%;
		cursor: pointer;
	}

	div.Close::before {
		content: '';
		position: absolute;
		width: 70%;
		height: 2px;
		background-color: currentColor;
		-webkit-transform: rotate(45deg);
          transform: rotate(45deg);
	}

	div.Close::after {
		content: '';
		position: absolute;
		width: 70%;
		height: 2px;
		background-color: currentColor;
		-webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
	}
</style>
<button
	class="{dimensions}"
	on:click
>
	<div class="{inner}"></div>
</button>
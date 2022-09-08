<script>
	export let open = false;
</script>

<button class:open on:click={() => (open = !open)} class="z-50 right-1 top-1 relative" aria-label="Navigation">
	<svg width="32" height="32">
		<line id="top" x1="0" y1="9" x2="32" y2="9" style="transition: transform 0.5s ease-in-out" />
		<line
			id="mid"
			x1="0"
			y1="18.5"
			x2="32"
			y2="18.5"
			style="transition: opacity 0.5s ease-in-out;"
		/>
		<line id="bot" x1="0" y1="28" x2="32" y2="28" style="transition: transform 0.5s ease-in-out" />
	</svg>
</button>

<style>
	svg line {
		stroke: rgb(68, 63, 63);
		stroke-width: 3;
	}

	/* rotate the top line */
	.open #top {
		transform: translate(10px, 0px) rotate(45deg);
	}

	/* hide the middle */
	.open #mid {
		opacity: 0;
	}

	/* rotate the bottom line */
	.open #bot {
		transform: translate(-15px, 8px) rotate(-45deg);
	}
</style>

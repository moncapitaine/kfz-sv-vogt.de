<script lang="ts">
	import Nav from '$lib/nav/nav.svelte';
	import logoNormal from './logo.svg';
	import logoBeam from './logo-beam.svg';

	let logo = logoNormal;
</script>

<header class="flex sm:flex-col p-3 gap-2 sm:gap-2 items-center">
	<a href="/" class="w-14 sm:w-full sm:flex-1 max-h-32 flex justify-center sm:mb-6" alt="Home">
		<img
			on:mouseenter={() => (logo = logoBeam)}
			on:blur={() => (logo = logoNormal)}
			on:mouseout={() => (logo = logoNormal)}
			src={logo}
			alt="SvelteKit"
			class="hover:drop-shadow-sm hover:animate-pulse"
		/>
	</a>
	<div class="sm:flex w-3/4 sm:w-full sm:flex-1 sm:flex-col">
		<h1
			class="flex-1 sm:text-center uppercase font-title sm:text-3xl font-semibold tracking-widest"
		>
			KFZ-Sach&shy;verständigen&shy;büro
		</h1>
		<h2 class="flex-1 sm:text-center uppercase font-title sm:text-4xl tracking-widest">Max Vogt</h2>
	</div>
	<div class="self-center">
		<Nav />
	</div>
</header>

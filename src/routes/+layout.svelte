<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Nav from '$lib/nav/nav.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Sachverständigenbüro: KFZ Gutachten in Freising</title>
	<meta
		name="description"
		content="Schadensgutachten und Wertgutachten für Kraftfahrzeuge in Freising"
	/>
</svelte:head>

<header class="container mt-2 sm:mt-12">
	<Header />
</header>

<main class="container my-12 flex justify-center">
	<slot />
</main>

<footer class="fixed bottom-0 border-t-2 h-12 z-50 w-full">
	<Nav />
</footer>


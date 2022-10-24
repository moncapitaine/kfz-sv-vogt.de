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
	<link rel="canonical" href="https://kfz-sv-vogt.de" />
</svelte:head>

<Header />

<main class="container mt-12 flex justify-center">
	<slot />
</main>

<Nav />

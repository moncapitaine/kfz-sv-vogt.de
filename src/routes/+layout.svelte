<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>KFZ-SV Max Vogt</title>
	<meta name="description" content="KFZ-Sachverständigenbüro Max Vogt" />
</svelte:head>

<Header />

<main class="flex flex-col items-center">
	<slot />
</main>

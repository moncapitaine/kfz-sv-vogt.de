<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="flex flex-col items-center">
	<slot />
</main>

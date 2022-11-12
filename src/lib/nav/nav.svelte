<script lang="ts">
	import MenuItem from './menuItem.svelte';
</script>

<nav data-sveltekit-prefetch class="bg-opacity-80  bg-white  flex font-bold flex-row gap-6 justify-center">
	<MenuItem href="/" title="Leistungen" />
	<MenuItem href="/about" title="Über mich" />
	<MenuItem href="/contact" title="Kontakt" />
	<MenuItem href="/impress" title="Impressum" />
</nav>

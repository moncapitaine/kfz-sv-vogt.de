<script lang="ts">
	import BurgerMenu from './burgerMenu.svelte';
	import MenuItem from './menuItem.svelte';
</script>

<nav data-sveltekit-prefetch class="sm:mt-6 self-center">
	<section class="sm:hidden overflow-hidden">
		<BurgerMenu>
			<MenuItem href="/" title="Leistungen" />
			<MenuItem href="/about" title="Über mich" />
			<MenuItem href="/contact" title="Kontakt" />
		</BurgerMenu>
	</section>
	<section class="hidden sm:flex gap-4 mb-4">
		<MenuItem href="/" title="Leistungen" />
		<MenuItem href="/about" title="Über mich" />
		<MenuItem href="/contact" title="Kontakt" />
	</section>
</nav>

<script>
	import BurgerButton from './burgerButton.svelte';
	import SideMenu from './sideMenu.svelte';
</script>

<BurgerButton />

<SideMenu>
	<slot />
</SideMenu>

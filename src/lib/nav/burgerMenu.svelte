<script>
	import BurgerButton from './burgerButton.svelte';
	import SideMenu from './sideMenu.svelte';

	export let open = false;
</script>

<BurgerButton bind:open />

<SideMenu bind:open>
	<slot />
</SideMenu>

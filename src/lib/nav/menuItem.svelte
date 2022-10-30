<script lang="ts">
	import { sideMenuOpen } from './navStore';
	import { page } from '$app/stores';
	export let href = '/';
	export let title = 'Title';

	let active = false
	$:active =  $page.url.pathname === href;
	$:console.log(title, $page.url.pathname, href)
</script>

<a class:inactive={!active} class:active {href} on:click={() => sideMenuOpen.update(() => false)}
	>{title}</a>

<style>
	a.inactive {
		@apply border-b-transparent border-b-2 opacity-40;
	}
	a.active {
		@apply border-b-red-800 border-b-2 rounded-none;
	}
</style>

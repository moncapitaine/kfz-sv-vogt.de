<script>
	export let open = false;
</script>

<div
	class="z-40 absolute h-full bg-slate-100 text-slate-700 w-48 right-0 top-0"
	class:hidden={!open}
>
	<div class="gap-4 p-4 pt-12 flex flex-col">
		<slot />
	</div>
</div>

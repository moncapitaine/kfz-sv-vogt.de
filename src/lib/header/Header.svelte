<script lang="ts">
	import logoNormal from './logo.svg';
	import logoBeam from './logo-beam.svg';

	let logo = logoNormal;
</script>

<header class="container mt-8 flex justify-center">
	<a href="/" class="" alt="Home">
		<img
			on:mouseenter={() => (logo = logoBeam)}
			on:blur={() => (logo = logoNormal)}
			on:mouseout={() => (logo = logoNormal)}
			src={logo}
			alt="SvelteKit"
			class="hover:drop-shadow-sm hover:animate-pulse"
		/>
	</a>
	<article class="flex flex-col justify-center">
		<h1 class="uppercase text-center font-title text-2xl tracking-widest">
			KFZ-Sach&shy;verständigen&shy;büro
		</h1>
		<h2 class="uppercase text-center font-title text-4xl font-semibold tracking-widest">
			Max Vogt
		</h2>
		<p class="text-center font-title text-xl tracking-widest">Freising - Landshut - München</p>
		<p class="text-center font-title text-xl tracking-widest">Telefon 0176 / 244 33 906</p>
	</article>
</header>

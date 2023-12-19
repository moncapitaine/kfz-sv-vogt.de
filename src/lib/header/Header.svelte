<script lang="ts">
	import logoNormal from './logo.svg';
	import logoBeam from './logo-beam.svg';

	let logo = logoNormal;
</script>

<div class="flex flex-col sm:flex-row sm:gap-4 justify-center items-center">
	<a href="/" class="absolute opacity-20 sm:opacity-100 sm:relative flex justify-center" alt="Home">
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
		<h1 class="uppercase text-center font-title text-xl md:text-2xl tracking-widest">
			KFZ-Sach&shy;verständigen&shy;büro
		</h1>
		<h2
			class="uppercase text-center font-title text-lg sm:text-2xl md:text-4xl font-semibold tracking-widest"
		>
			Max Vogt
		</h2>
		<p class="text-center font-title text-sm sm:text-lg tracking-widest">
			Freising - Erding -Landshut - München
		</p>
		<div class="flex flex-col content-center flex-wrap">
			<div class="flex flex-row gap-2">
				<div>Telefon</div>
				<div class="self-end"><a href="tel:+49 (0) 08161 / 862 4020">08161 / 862 4020</a></div>
			</div>
			<div class="flex flex-row gap-2">
				<div>Mobil</div>
				<div><a href="tel:+49 (0) 176 / 244 33 906"> 0176 / 244 33 906</a></div>
			</div>
		</div>
	</article>
</div>

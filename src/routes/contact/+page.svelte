<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>KFZ-Sachverständigenbüro: Kontakt</title>
	<meta name="description" content="Kontakt zu Max Vogt KFZ-Sachverständigenbüro" />
	<link rel="canonical" href="https://kfz-sv-vogt.de/contact" />
</svelte:head>

<article
	in:fade={{ delay: 300, duration: 300 }}
	class="w-[1024px] ml-2 bg-white bg-opacity-70 p-10 rounded-xl border-gray-300 border-4"
>
	<h2 class="text-4xl mb-4">So finden Sie mich:</h2>
	<div class="flex flex-col sm:flex-row justify-between gap-4">
		<div>
			<p class="text-xl">Max Vogt</p>
			<p class="text-xl">Attachinger Weg 37</p>
			<p class="text-xl">85356 Freising</p>
			<p class="text-xl"><a href="tel:+49 (0) 176 / 244 33 906">Telefon 0176 / 244 33 906</a></p>
			<a class="text-xl pt-2 block" href="mailto:max.vogt@kfz-sv-vogt.de?subject=Anfrage%20KFZ-SV"
				>max.vogt@kfz-sv-vogt.de</a
			>
		</div>
		<p>
			<iframe
				title="Karte KFZ-Sachverständigenbüro Max Vogt"
				width="350"
				height="400"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
				id="gmap_canvas"
				src="https://maps.google.com/maps?width=350&amp;height=400&amp;hl=en&amp;q=Attachinger%20Weg%2037%20Freising+(KFZ-Sachverst%C3%A4ndigenb%C3%BCro%20Max%20Vogt)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			/><a href="https://maps-generator.com/">Maps Generator</a>
		</p>
	</div>
</article>

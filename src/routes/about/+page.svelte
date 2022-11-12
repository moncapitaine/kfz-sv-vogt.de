<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>KFZ-Sachverständigenbüro: Max Vogt</title>
	<meta
		name="description"
		content="Wer ist Max Vogt, Inhaber des Sachverständigenbüros in Freising"
	/>
	<link rel="canonical" href="https://kfz-sv-vogt.de/about" />
</svelte:head>

<article
	in:fade={{ delay: 500, duration: 300 }}
	class="w-[1024px] ml-2 bg-white bg-opacity-70 p-10 rounded-xl border-gray-300 border-4"
>
	<h2 class="text-4xl mb-4">Über mich:</h2>

	<p class="text-xl mb-2 leading-loose">
		<img class="float-right m-2" src="/max_vogt_portrait.png" alt="Max Vogt Portrait" />
		Ich habe mein Hobby zum Beruf gemacht und 1998 eine Lehre zum KFZ-Mechaniker begonnen. Nach 12 Jahren
		Berufserfahrung kam dann 2010 der Schritt zur Weiterbildung zum Kfz-Meister und jetzt bringe ich
		meine 24 Jährige Berufserfahrung in meinen neuen Beruf als Kfz-Sachverständiger mit ein.
	</p>
	<p class="text-xl mb-2 leading-loose">
		Meine Prüfung habe ich bei der DESAG (Deutsche Sachverständigen Gesellschaft) abgelegt und mit
		Erfolg bestanden.
	</p>
	<p class="text-xl mb-2 leading-loose">
		Mein Büro wurde ebenfalls von der DESAG geprüft und mit der Registrierungsnummer K/220802
		anerkannt.
		<a class="float-right m-2 w-[126px] h-[200px]" target="_blank" rel="noreferrer" href="https://www.desag.de/zertifikat/maximilianvogt/">
			<img alt="DESAG Max Vogt" src="https://www.desag.de/zertifikat/maximilianvogt/?embed=true">
		</a>
	</p>
	<p class="text-xl mt-4 leading-loose">
		Ich freue mich auf die neue Aufgabe und heiße Sie mit ihrem Auto im Mittelpunkt, herzlich
		willkommen.
	</p>
	<p style="font-family: 'Caveat', cursive" class="text-center text-4xl mt-8">Ihr Max Vogt</p>

</article>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');
</style>

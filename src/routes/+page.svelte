<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quintOut } from "svelte/easing";
	import Icon from '../lib/icon/Icon.svelte';
	import type { IconName } from '$lib/icon/icon';
	type CategoryName =
		| 'schadensgutachten'
		| 'gebrauchtwagen-check'
		| 'kostenvoranschlag'
		| 'oldtimer-gutachten';
	let selectedCategoryName: CategoryName = 'schadensgutachten';
	const navClass =
		'sm:my-2 text-gray-500 hover:text-black bg-[#d9d9d9] md:rounded md:h-18 pl-5 md:py-2 pr-3 md:pr-2 md:w-[18em] text-left inline-flex items-center';
const navClassSelected =
		"sm:my-2 bg-[url('/bg-leistung-selected.svg')] bg-cover bg-center md:h-18 pl-5 md:py-2 md:w-[24em] text-left inline-flex items-center";
	
	const selectItem = (newCategoryName: CategoryName) => (selectedCategoryName = newCategoryName);

	const categories: Array<{
		name: CategoryName;
		title: string;
		imageSource: string;
		icon: IconName;
	}> = [
		{
			name: 'schadensgutachten',
			title: 'Schadensgutachten',
			imageSource: '/schaden-background.png',
			icon: 'crash'
		},
		{
			name: 'gebrauchtwagen-check',
			title: 'Gebrauchtwagen-Check',
			imageSource: '/gebrauchtwagen-check-background.png',
			icon: 'repair'
		},
		{
			name: 'kostenvoranschlag',
			title: 'Kostenvoranschlag',
			imageSource: '/kostenvoranschlag-background.png',
			icon: 'costs'
		},
		{
			name: 'oldtimer-gutachten',
			title: 'Oldtimer-Gutachten',
			imageSource: '/oldtimer-gutachten-background.png',
			icon: 'oldtimer'
		}
	];

	const collapse = (node: HTMLElement) => {
		return {
			duration: 300,
			easing: quintOut,
			css: (t: number, u: number) => { 
				return `transform: scale(${t}); height: ${t * 100}%; width: ${t * 100}%`
			}
		};
	};
</script>

<svelte:head>
	<title>Sachverständigenbüro: KFZ Gutachten in Freising</title>
	<link rel="canonical" href="https://kfz-sv-vogt.de" />
</svelte:head>

<article 	in:fade={{ delay: 100, duration: 300 }} out:fade={{ delay: 0, duration: 100 }} class="w-[1024px] flex sm:flex-row flex-col items-center md:items-start">
	<nav class="z-20 flex flex-col md:text-2xl md:pt-12">
		{#each categories as category (category.name)}
			<button
				on:click={() => selectItem(category.name)}
				type="button"
				class={selectedCategoryName === category.name ? navClassSelected : navClass}
			>
				<Icon class="w-10 h-10" name={category.icon} />
				{category.title}
			</button>
			{#if selectedCategoryName === category.name}
				<img
				class='m-0 hidden sm:block'
					transition:collapse
					src={category.imageSource}
					alt={category.title}
				/>
			{/if}
		{/each}
	</nav>
	<aside
		class="z-10 relative border-4 rounded-lg bg-gray-200 p-12 w-full opacity-70 border-gray-300 h-fit ml-[-2em] mt-4"
	>
		{#if selectedCategoryName === 'schadensgutachten'}
			<h2 class="text-2xl mb-4">
				Nach einem unverschuldeten Unfall haben Sie das Recht auf freie Wahl eines Sachverständigen
				Ihres Vertrauens.
			</h2>
			<p class="text-xl mb-4">
				Die Kosten trägt die Haftpflichtversicherung des Unfallverursachers.
			</p>
			<p class="mb-4">
				Lediglich bei Bagatellschäden bis ca. 700 Euro besteht für die gegnerische
				Haftpflichtversicherung keine Verpflichtung die Kosten zu tragen.
			</p>
			<p>Auf das Vorliegen eines Bagatellschadens werden Sie von mir hingewiesen.</p>
		{/if}
		{#if selectedCategoryName === 'gebrauchtwagen-check'}
			<h2>Gebrauchtwagen-Check</h2>
			<p>Ein Beispiel der ersten von 9 Seiten.</p>
			<p>
				<img src="/gebrauchtwagen-check-beispiel.jpg" alt="Gebrauchtwagen-Check Beispiel" />
			</p>
		{/if}
		{#if selectedCategoryName === 'kostenvoranschlag'}
			<h2 class="text-2xl mb-4">Kostenvoranschlag</h2>
			<p class="mb-4">Ein Kostenvoranschlag stellt die „schmale Variante“ eines Kfz-Gutachtens dar.</p>
			<p class="mb-4">Er ist kostengünstiger und leichter anzufertigen.</p>
			<p>Er entspricht lediglich einer Vorkalkulation, die einem verbindlichen Angebot gleichkommt.</p>
		{/if}
		{#if selectedCategoryName === 'oldtimer-gutachten'}
			<h2 class="text-2xl mb-4">Oldtimer-Wertgutachten</h2>
			<p class="mb-4">
				Das Wertgutachten für Ihren Oldtimer dient zur Versicherungseinstufung und als Grundlage für
				einen Kauf oder Verkauf.
			</p>
			<ul class="mb-4 list-disc">
				<li>Wertdarstellung im Schadenfall</li>
				<li>Orientierungshilfe bei Kauf oder Verkauf</li>
				<li>Einstufung bei der Kaskoversicherung</li>
			</ul>
		{/if}
	</aside>
</article>

<script lang="typescript">
	import { crossfade, fade, scale, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Icon from '../lib/icon/Icon.svelte';
	import type { IconName } from '$lib/icon/icon';
	import fadeScale from '$lib/transition-fade-scale';
	type CategoryName =
		| 'schadensgutachten'
		| 'gebrauchtwagen-check'
		| 'kostenvoranschlag'
		| 'oldtimer-gutachten';
	let selectedCategoryName: CategoryName = 'schadensgutachten';
	const navClassSelected =
		"bg-[url('/bg-leistung-selected.svg')] bg-cover bg-center h-18 pl-5 py-2 w-[24em] text-left inline-flex items-center gap-3";
	const navClass =
		'text-gray-500 hover:text-black bg-[#d9d9d9] rounded h-18 pl-5 py-2 w-[18em] text-left inline-flex items-center gap-3';
	const imageClass = 'ml-4 h-50 hidden';
	const imageClassSelected = 'ml-4 h-50 visible';
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
</script>

<article class="w-[1024px] flex">
	<nav class="z-20 flex flex-col gap-2 text-2xl pt-12">
		{#each categories as category (category.name)}
			<div animate:flip>
				<button
					on:click={() => selectItem(category.name)}
					type="button"
					class={selectedCategoryName === category.name ? navClassSelected : navClass}
				>
					<Icon class="w-10 h-10" name={category.icon} />
					{category.title}
				</button>
				<img
					transition:scale
					class={selectedCategoryName === category.name ? imageClassSelected : imageClass}
					src={category.imageSource}
					alt={category.title}
				/>
			</div>
		{/each}
	</nav>
	<aside
		class="z-10 relative border-4 rounded-lg bg-gray-200 p-12 w-full opacity-70 border-gray-300 h-fit ml-[-2em]"
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
		{/if}
		{#if selectedCategoryName === 'kostenvoranschlag'}
			Hellas
		{/if}
		{#if selectedCategoryName === 'oldtimer-gutachten'}
			<h2 class="text-2xl mb-4">Oldtimer-Wertgutachten</h2>
			<p class="text-xl mb-4">
				Das Wertgutachten für Ihren Oldtimer dient zur Versicherungseinstufung und als Grundlage für
				einen Kauf oder Verkauf.
			</p>
			<ul class="text-xl mb-4 list-disc">
				<li>Wertdarstellung im Schadenfall</li>
				<li>Orientierungshilfe bei Kauf oder Verkauf</li>
				<li>Einstufung bei der Kaskoversicherung</li>
			</ul>
		{/if}
	</aside>
</article>

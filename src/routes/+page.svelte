<script lang="ts">
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
		'my-2 text-gray-500 hover:text-black bg-[#d9d9d9] rounded h-18 pl-5 py-2 w-[18em] text-left inline-flex items-center';
const navClassSelected =
		"my-2 bg-[url('/bg-leistung-selected.svg')] bg-cover bg-center h-18 pl-5 py-2 w-[24em] text-left inline-flex items-center";
	
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

	const appear = (node: HTMLElement) => {
		return {
			duration: 400,
			easing: quintOut,
			css: (t: number, u: number) => { 
				return `transform: scale(${t}); height: ${t * 100}%; width: ${t * 100}%`
			}
		};
	};
	const disappear = (node: HTMLElement) => {
		return {
			duration: 400,
			easing: quintOut,
			css: (t: number, u: number) => {
				return `transform: scale(${t}); height: ${t * 100}%; width: ${t * 100}%`
			}
		};
	};
</script>

<article class="w-[1024px] flex">
	<nav class="z-20 flex flex-col text-2xl pt-12">
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
				class='m-0'
					in:appear
					out:disappear
					src={category.imageSource}
					alt={category.title}
				/>
			{/if}
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

<!-- <style>
	@keyframes height2Zero {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(0);
		}
	}
	img.disappear {
		animation-name: height2Zero;
		animation-duration: 1s;
		animation-fill-mode: forwards;
	}

	img.appear {
		animation-name: height2Zero;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-direction: reverse;
	}
</style> -->

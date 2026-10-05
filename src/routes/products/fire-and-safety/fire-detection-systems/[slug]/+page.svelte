<script lang="ts">
	// Svelte 5 (runes) compatible props + state
	// acquire incoming props using the $props() rune
	let { data } = $props();
	const { product } = data as { product: import('$lib/data/fire-detection-products').Product };

	import { onMount } from 'svelte';

	// make activeImage reactive with the $state() rune; initialize on client to avoid capture warning
	let activeImage = $state('');

	onMount(() => {
		activeImage = product?.image ?? '';
	});

	function selectImage(img: string) {
		activeImage = img;
		if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>
<svelte:head>
	<title>{product.name} | Ultimate Fire Solutions Ltd | Leading Fire Alarm Supplier in Kenya</title>
	<meta name="description" content={product.shortDescription} />
	<meta property="og:title" content={`${product.name} | Ultimate Fire Solutions Ltd`} />
	<meta property="og:description" content={product.shortDescription} />
	<meta property="og:image" content={product.image} />
</svelte:head>

<div class="min-h-screen bg-white text-slate-900">
	<header class="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
			<a href="/products/fire-and-safety/fire-detection-systems" class="text-sm font-semibold uppercase tracking-[0.22rem] text-ufs-blue">Back to Systems</a>
			<a href="/products" class="rounded-full bg-ufs-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-white transition hover:bg-blue-900">Products</a>
		</div>
	</header>

	<main class="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">
		{#if product}
		<section class="min-h-[85vh] grid items-center gap-8 lg:grid-cols-12">
			<div class="col-span-7 flex items-center justify-center">
					<div class="relative w-full max-w-5xl">
						<div class="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50 to-slate-200"></div>
						<div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_45px_100px_rgba(10,36,99,0.12)]">
							<div class="flex h-[75vh] items-center justify-center">
									<img src={activeImage} alt={product.name} class="h-full w-full max-w-5xl max-w-full object-contain" />
							</div>
						</div>
					</div>
			</div>

			<aside class="col-span-5 flex flex-col justify-center gap-6 px-4 lg:px-10">
				<p class="text-sm font-semibold uppercase tracking-[0.28rem] text-ufs-orange">{product.series}</p>
				<h1 class="text-4xl font-black tracking-tight text-ufs-blue md:text-5xl lg:text-6xl">{product.name}</h1>
				<p class="text-lg leading-8 text-slate-600">{product.subtitle}</p>
				<p class="text-base leading-7 text-slate-600">{product.shortDescription}</p>

				<!-- Trust badges -->
				<div class="flex items-center gap-3 pt-3">
					<span class="inline-flex items-center gap-2 rounded-full bg-[#0A2463]/10 px-3 py-1 text-sm font-semibold text-[#0A2463]">UL Listed</span>
					<span class="inline-flex items-center gap-2 rounded-full bg-[#FF5A00]/10 px-3 py-1 text-sm font-semibold text-[#FF5A00]">NFPA Standard Compliant</span>
				</div>

				<div class="flex flex-wrap gap-3 pt-2">
					{#each product.tags as tag}
						<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12rem] text-slate-600">{tag}</span>
					{/each}
				</div>

				<div class="grid gap-4 pt-5 sm:grid-cols-2">
					<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Architecture</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Modular</p>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Compliance</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">NFPA 72</p>
					</div>
				</div>
			</aside>

			<!-- Reactive gallery row below the hero -->
			<div class="col-span-12 mt-6">
				<div class="flex gap-4 overflow-x-auto py-4 px-2">
					{#each product.gallery as image, index}
						<div class="flex-shrink-0">
							<button onclick={() => selectImage(image)} class="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-ufs-orange cursor-pointer">
								<img src={image} alt={`${product.name} detail ${index + 1}`} class="h-24 w-40 rounded-xl object-contain bg-white" />
							</button>
						</div>
					{/each}
				</div>
			</div>
		</section>
		{:else}
		<section class="min-h-[50vh] flex items-center justify-center">
			<div class="text-center">
				<h2 class="text-2xl font-bold text-[#0A2463]">Product not found</h2>
				<p class="mt-2 text-slate-600">The product you requested could not be found in our catalog.</p>
			</div>
		</section>
		{/if}

		<section class="mt-12 space-y-8">
			<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
				<div class="mb-6 flex items-center justify-between gap-4">
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">Hardware features</h2>
					<span class="rounded-full bg-ufs-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18rem] text-ufs-orange">System overview</span>
				</div>
				<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{#each product.features as feature}
						<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ufs-orange/10 text-lg text-ufs-orange">✓</div>
							<p class="text-base leading-7 text-slate-700">{feature}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
				<div class="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">NFPA compliance & standards</h2>
					<div class="mt-6 space-y-4">
						{#each product.standards as standard}
							<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
								<p class="text-sm font-bold uppercase tracking-[0.2rem] text-ufs-orange">{standard.title}</p>
								<p class="mt-2 text-sm leading-7 text-slate-600">{standard.description}</p>
							</div>
						{/each}
					</div>
				</div>

				<div class="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white md:p-8">
					<p class="text-sm font-semibold uppercase tracking-[0.24rem] text-orange-300">System integrity</p>
					<h2 class="mt-3 text-3xl font-black tracking-tight">Built for code-driven safety and operator confidence.</h2>
					<div class="mt-6 space-y-4 text-sm leading-7 text-slate-200">
						<p>Ultimate Fire Solutions specifies fire alarm equipment with an emphasis on consistent detection, dependable communication, and maintainable system architecture across commercial developments.</p>
						<p>Each Previdia platform is designed to support practical installation, smooth maintenance, and clear alarm prioritization while improving digital supervision and occupant reassurance.</p>
					</div>
				</div>
			</div>

			<div class="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
				<div class="mb-6 flex items-center justify-between gap-4">
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">Compatible accessories</h2>
					<span class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18rem] text-slate-600">System ready</span>
				</div>
				<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{#each product.accessories as accessory}
						<div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
							<div class="flex h-48 items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
								<img src={accessory.image} alt={accessory.name} class="h-full w-full object-contain" />
							</div>
							<div class="p-4">
								<h3 class="text-lg font-bold text-ufs-blue">{accessory.name}</h3>
								<p class="mt-2 text-sm leading-6 text-slate-600">{accessory.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	</main>
</div>

<script lang="ts">
	import { page } from '$app/state';
	import { fireSuppressionProducts } from '$lib/data/fire-suppression-products';

	const product = fireSuppressionProducts.find((item) => item.slug === page.params.slug) ?? fireSuppressionProducts[0];
</script>

<svelte:head>
	<title>{product.name} | Ultimate Fire Solutions</title>
</svelte:head>

<div class="min-h-screen bg-white text-slate-900">
	<header class="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
			<a href="/products/fire-and-safety/fire-suppression-systems" class="text-sm font-semibold uppercase tracking-[0.22rem] text-ufs-blue">Back to Systems</a>
			<a href="/products" class="rounded-full bg-ufs-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-white transition hover:bg-blue-900">Products</a>
		</div>
	</header>

	<main class="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">
		<section class="grid min-h-[80vh] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
			<div class="space-y-6">
				<p class="text-sm font-semibold uppercase tracking-[0.28rem] text-ufs-orange">{product.series}</p>
				<h1 class="text-4xl font-black tracking-tight text-ufs-blue md:text-5xl lg:text-6xl">{product.name}</h1>
				<p class="max-w-xl text-lg leading-8 text-slate-600">{product.subtitle}</p>
				<p class="max-w-xl text-base leading-7 text-slate-600">{product.longDescription}</p>

				<div class="flex flex-wrap gap-3 pt-2">
					{#each product.tags as tag}
						<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12rem] text-slate-600">{tag}</span>
					{/each}
				</div>

				<div class="grid gap-4 pt-5 sm:grid-cols-3">
					<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Response</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Rapid</p>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">System type</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Modular</p>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Compliance</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">NFPA</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-ufs-orange/12 via-slate-50 to-ufs-blue/10 blur-2xl"></div>
				<div class="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-[0_35px_80px_rgba(10,36,99,0.10)] md:p-6">
					<div class="flex min-h-[500px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-slate-50 p-4">
						<img src={product.image} alt={product.name} class="h-[420px] w-full max-w-[640px] object-contain drop-shadow-[0_35px_65px_rgba(15,23,42,0.18)]" />
					</div>
				</div>

				<div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
					{#each product.gallery as image, index}
						<div class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
							<img src={image} alt={`${product.name} detail ${index + 1}`} class="h-24 w-full rounded-xl object-contain bg-white" />
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="mt-12 space-y-8">
			<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
				<div class="mb-6 flex items-center justify-between gap-4">
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">System capabilities</h2>
					<span class="rounded-full bg-ufs-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18rem] text-ufs-orange">Operational</span>
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
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">Standards & code alignment</h2>
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
					<p class="text-sm font-semibold uppercase tracking-[0.24rem] text-orange-300">Protection strategy</p>
					<h2 class="mt-3 text-3xl font-black tracking-tight">Engineered to safeguard life, assets, and operational continuity.</h2>
					<div class="mt-6 space-y-4 text-sm leading-7 text-slate-200">
						<p>Ultimate Fire Solutions designs suppression packages around the realities of critical asset protection, emergency response speed, and the practical needs of facility operators.</p>
						<p>Whether protecting a mechanical plant, server environment, or high-value risk area, the selected system balances performance, reliability, and clean operational deployment.</p>
					</div>
				</div>
			</div>

			<div class="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
				<div class="mb-6 flex items-center justify-between gap-4">
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">Compatible solutions</h2>
					<span class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18rem] text-slate-600">Integrated</span>
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

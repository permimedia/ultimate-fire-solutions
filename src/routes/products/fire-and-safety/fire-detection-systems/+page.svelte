<script lang="ts">
	import { fireDetectionProducts } from '$lib/data/fire-detection-products';
</script>

<div class="min-h-screen bg-slate-50 text-slate-900">
	<div class="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">
		<div class="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.25rem] text-ufs-orange">Fire detection</p>
				<h1 class="mt-3 text-4xl font-black tracking-tight text-ufs-blue md:text-5xl">Previdia fire detection systems</h1>
			</div>
			<p class="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
				Intelligent control panels engineered for scalable safety coverage, resilient alarm management, and premium code compliance.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each fireDetectionProducts as product}
				<a href={`/products/fire-and-safety/fire-detection-systems/${product.slug}`} class="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ufs-orange/60 hover:shadow-xl">
					<div class="bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6">
						<div class="flex min-h-[260px] items-center justify-center rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-inner">
							<img src={product.image} alt={product.name} class="h-56 w-full object-contain transition duration-500 group-hover:scale-[1.04]" />
						</div>
					</div>
					<div class="space-y-4 p-6">
						<div class="flex items-center justify-between gap-3">
							<span class="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18rem] text-ufs-orange">{product.series}</span>
							<span class="text-xs font-semibold uppercase tracking-[0.16rem] text-slate-400">Catalog</span>
						</div>
						<h2 class="text-2xl font-bold text-ufs-blue">{product.name}</h2>
						<p class="text-sm leading-6 text-slate-600">{product.shortDescription}</p>
						<div class="flex items-center justify-between pt-2">
							<span class="inline-flex items-center gap-2 text-sm font-semibold text-ufs-orange group-hover:text-ufs-blue">View details <span aria-hidden="true">→</span></span>
							<span class="text-xs font-medium uppercase tracking-[0.14rem] text-slate-400">Panel</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

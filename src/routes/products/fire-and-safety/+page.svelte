<script lang="ts">
	const categories = [
		{
			name: 'Fire Detection Systems',
			description: 'Previdia control panels and detection architecture for reliable, code-driven alarm networks.',
			href: '/products/fire-and-safety/fire-detection-systems',
			color: 'from-ufs-blue to-slate-700'
		},
		{
			name: 'Fire Suppression Systems',
			description: 'Mechanical protection, sprinklers, pumps, and suppression hardware built for dependable coverage.',
			href: '/products/fire-and-safety/fire-suppression-systems',
			color: 'from-ufs-orange to-orange-500'
		}
	];
</script>

<div class="min-h-screen bg-slate-100 text-slate-900">
	<div class="mx-auto max-w-7xl px-6 py-16">
		<div class="mb-10 max-w-2xl">
			<p class="text-sm font-semibold uppercase tracking-[0.24rem] text-ufs-orange">Fire and Safety</p>
			<h1 class="mt-4 text-4xl font-black tracking-tight text-ufs-blue md:text-5xl">Protection systems engineered with precision.</h1>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each categories as category}
				<a href={category.href} class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
					<div class={`relative min-h-[340px] overflow-hidden bg-gradient-to-br ${category.color} p-8`}>
						<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_25%)]"></div>
						<div class="relative z-10 flex h-full flex-col justify-between">
							<div>
								<span class="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22rem] text-white/90">Category</span>
							</div>
							<div class="space-y-3">
								<h2 class="text-3xl font-black text-white">{category.name}</h2>
								<p class="max-w-md text-sm leading-6 text-slate-100/90">{category.description}</p>
							</div>
							<div class="flex items-center justify-between">
								<span class="text-sm font-semibold text-white/90">Browse products</span>
								<span class="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-xl text-white transition group-hover:translate-x-1">→</span>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

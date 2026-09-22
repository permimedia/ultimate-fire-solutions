<script lang="ts">
	const categories = [
		{
			name: 'Fire and Safety',
			description: 'Integrated systems for life safety, early detection, structural protection, and dependable emergency response.',
			href: '/products/fire-and-safety',
			accent: 'from-ufs-blue via-blue-700 to-sky-500'
		},
		{
			name: 'Fire Detection Systems',
			description: 'Previdia control panels and intelligent detection architecture for reliable commercial alarm networks.',
			href: '/products/fire-and-safety/fire-detection-systems',
			accent: 'from-slate-800 via-slate-700 to-ufs-blue'
		},
		{
			name: 'Conventional Control Panels',
			description: 'Modular conventional panel solutions for critical monitoring, control, and scalable life-safety coverage.',
			href: '/products/fire-and-safety/conventional-control-panels',
			accent: 'from-[#0A2463] via-blue-800 to-indigo-600'
		},
		{
			name: 'Fire Suppression Systems',
			description: 'Mechanical fire suppression, pump systems, sprinklers, and specialist protection technologies.',
			href: '/products/fire-and-safety/fire-suppression-systems',
			accent: 'from-ufs-orange via-orange-500 to-amber-400'
		}
	];
</script>

<div class="min-h-screen bg-slate-50 text-slate-900">
	<div class="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-10">
		<div class="mb-12 text-center">
			<p class="text-sm font-semibold uppercase tracking-[0.28rem] text-ufs-orange">Product categories</p>
			<h1 class="mt-4 text-4xl font-black tracking-tight text-ufs-blue md:text-5xl">Ultimate Fire Solutions Product Portfolio</h1>
			<p class="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
				Engineered for safety, reliability, and code-driven confidence across detection, suppression, and protection technology.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each categories as category}
				<a href={category.href} class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-1 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
					<div class={`relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[calc(2rem-4px)] bg-gradient-to-br ${category.accent} p-8`}>
						<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.42),transparent_30%)]"></div>
						<div class="relative z-10">
							<span class="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24rem] text-white/90 backdrop-blur-sm">
								Solutions
							</span>
						</div>
						<div class="relative z-10 space-y-4">
							<h2 class="text-3xl font-black text-white">{category.name}</h2>
							<p class="max-w-sm text-sm leading-6 text-slate-100/90">{category.description}</p>
						</div>
						<div class="relative z-10 flex items-center justify-between">
							<span class="text-sm font-semibold text-white/90">Explore</span>
							<span class="flex h-12 w-12 items-center justify-center rounded-full bg-white/14 text-xl text-white transition duration-300 group-hover:translate-x-1">→</span>
						</div>
					</div>
			</a>
			{/each}
		</div>
	</div>
</div>

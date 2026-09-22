<script lang="ts">
	import BackNavigation from '$lib/components/layout/BackNavigation.svelte';
	import heroImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Control Panels - Landing Page.jfif';
	import previdiaThumb from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Previdia Micro/Previdia Micro - Landing page.png';
	import smartlineThumb from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Smartline/SmartLine Control Panel- landing page.webp';

	const panels = [
		{
			name: 'Previdia Micro',
			description:
				'Compact, modular conventional fire control for reliable detection, remote access, and scalable site coverage.',
			href: '/products/fire-and-safety/conventional-control-panels/previdia-micro',
			image: previdiaThumb,
			series: 'Advanced detection'
		},
		{
			name: 'Smartline',
			description:
				'Flexible conventional panel technology designed for integrated alarm supervision, extinguishing control, and strong operator visibility.',
			href: '/products/fire-and-safety/conventional-control-panels/smartline',
			image: smartlineThumb,
			series: 'Intelligent systems'
		}
	];
</script>

<div class="min-h-screen bg-slate-50 text-slate-900">
	<BackNavigation />

	<header class="relative isolate overflow-hidden">
		<img src={heroImage} alt="Conventional control panels" class="absolute inset-0 h-full w-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-r from-[#0A2463]/95 via-[#0A2463]/85 to-[#0A2463]/60"></div>

		<div class="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-10">
			<div class="max-w-2xl">
				<p class="text-sm font-semibold uppercase tracking-[0.32rem] text-orange-300">Conventional control panels</p>
				<h1 class="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
					Trusted protection for every project scale.
				</h1>
				<p class="mt-6 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
					Previdia Micro and Smartline conventional panel ranges combine dependable fire supervision, modular compatibility,
					and premium operational control for critical safety environments.
				</p>
			</div>
		</div>
	</header>

	<main class="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-10">
		<div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.26rem] text-ufs-orange">Product lines</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight text-ufs-blue md:text-4xl">Built for resilient fire and gas safety.</h2>
			</div>
			<p class="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
				Each platform is engineered to support straightforward installation, durable operation, and confident management from
				the control room to the final device loop.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each panels as panel}
				<a
					href={panel.href}
					class="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ufs-orange/60 hover:shadow-xl"
				>
					<div class="bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-5">
						<div class="flex min-h-[330px] items-center justify-center overflow-hidden rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-50 p-4 shadow-inner">
							<img
								src={panel.image}
								alt={panel.name}
								class="h-[240px] w-full object-contain transition duration-500 group-hover:scale-[1.04]"
							/>
						</div>
					</div>

					<div class="space-y-4 p-6">
						<div class="flex items-center justify-between gap-3">
							<span class="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18rem] text-ufs-orange">
								{panel.series}
							</span>
							<span class="text-[10px] font-semibold uppercase tracking-[0.18rem] text-slate-400">Panel range</span>
						</div>

						<h2 class="text-3xl font-black text-ufs-blue">{panel.name}</h2>
						<p class="text-sm leading-6 text-slate-600">{panel.description}</p>

						<div class="flex items-center justify-between pt-2">
							<span class="inline-flex items-center gap-2 text-sm font-semibold text-ufs-orange group-hover:text-ufs-blue">
								View details <span aria-hidden="true">→</span>
							</span>
							<span class="text-[10px] font-semibold uppercase tracking-[0.18rem] text-slate-400">Control</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</main>
</div>

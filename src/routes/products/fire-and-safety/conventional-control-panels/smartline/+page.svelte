<script lang="ts">
	import BackNavigation from '$lib/components/layout/BackNavigation.svelte';
	import primaryVisual from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Smartline/SmartLine036-4.webp';
	import connectionVisual from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Smartline/SmartLine conventional control panels Whole connection.webp';
	import extinguishingImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Smartline/EN54-certified extinguishing systems.webp';
	import lcdImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Smartline/SmartLetUSee LCD-Lite.webp';
	import expansionImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Smartline/SmartLine – Expansion Boards for Control Panels.webp';

	const capabilities = [
		'High-visibility operator interface for rapid site awareness and response workflows.',
		'Supports integrated extinguishing system architecture with EN54-certified reliability.',
		'Flexible expansion board options for larger commercial and mission-critical system layouts.',
		'Premium conventional panel design for durable installation and maintenance efficiency.'
	];

	const accessoryCards = [
		{
			name: 'EN54-certified extinguishing systems',
			image: extinguishingImage,
			description: 'Purpose-built extinguishing control support for compliant life-safety response systems.'
		},
		{
			name: 'SmartLetUSee LCD Lite',
			image: lcdImage,
			description: 'A clear, high-contrast user interface designed for monitoring, signals, and operational clarity.'
		},
		{
			name: 'Expansion boards',
			image: expansionImage,
			description: 'Scalable building blocks that expand conventional panel functionality across complex projects.'
		}
	];
</script>

<div class="min-h-screen bg-slate-50 text-slate-900">
	<BackNavigation />

	<main class="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">
		<section class="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
			<div class="space-y-6">
				<p class="text-sm font-semibold uppercase tracking-[0.28rem] text-ufs-orange">Smartline</p>
				<h1 class="text-4xl font-black tracking-tight text-ufs-blue md:text-5xl lg:text-6xl">Flexible conventional control with premium oversight.</h1>
				<p class="max-w-xl text-lg leading-8 text-slate-600">
					Smartline provides a refined conventional panel platform that balances dependable control, broader system compatibility,
					and operator-friendly presentation for modern fire and safety installations.
				</p>
				<p class="max-w-xl text-base leading-7 text-slate-600">
					Its architecture is designed for clean integration with expansion modules, extinguishing controls, and high-visibility
					monitoring requirements across commercial buildings and critical environments.
				</p>

				<div class="flex flex-wrap gap-3 pt-2">
					<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14rem] text-slate-600">Scalable</span>
					<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14rem] text-slate-600">EN54-ready</span>
					<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14rem] text-slate-600">Smart monitoring</span>
				</div>

				<div class="grid gap-4 pt-5 sm:grid-cols-3">
					<div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Application</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Industrial</p>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Architecture</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Expandable</p>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Monitoring</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">LCD-Lite</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-ufs-orange/12 via-slate-50 to-ufs-blue/10 blur-2xl"></div>
				<div class="grid gap-4">
					<div class="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-[0_35px_80px_rgba(10,36,99,0.10)] md:p-6">
						<div class="flex min-h-[260px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-slate-50 p-4">
							<img src={primaryVisual} alt="Smartline control panel" class="h-[260px] w-full max-w-[620px] object-contain drop-shadow-[0_35px_65px_rgba(15,23,42,0.18)]" />
						</div>
					</div>
					<div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-sm">
						<div class="flex min-h-[220px] items-center justify-center rounded-[1.6rem] bg-white p-4">
							<img src={connectionVisual} alt="Smartline system connection layout" class="h-[200px] w-full max-w-[620px] object-contain" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mt-12 space-y-8">
			<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
				<div class="mb-6 flex items-center justify-between gap-4">
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">Core capabilities</h2>
					<span class="rounded-full bg-ufs-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18rem] text-ufs-orange">System overview</span>
				</div>

				<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{#each capabilities as capability}
						<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ufs-orange/10 text-lg text-ufs-orange">✓</div>
							<p class="text-base leading-7 text-slate-700">{capability}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
				<div class="mb-6 flex items-center justify-between gap-4">
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">Components and compatibility</h2>
					<span class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18rem] text-slate-600">System ready</span>
				</div>

				<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{#each accessoryCards as accessory}
						<div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
							<div class="flex h-52 items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
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

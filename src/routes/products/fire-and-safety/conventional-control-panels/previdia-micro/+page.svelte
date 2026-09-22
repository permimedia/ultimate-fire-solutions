<script lang="ts">
	import BackNavigation from '$lib/components/layout/BackNavigation.svelte';
	import heroImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Previdia Micro/Previdia Micro.webp';
	import moduleImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Previdia Micro/C-COM, C-COM LAN, and C-DIAL4G Modules.webp';
	import cloudImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Previdia Micro/Extinguishing management and cloud connectivity for remote system control- previdia micro.webp';
	import overviewImage from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Previdia Micro/Previdia Micro- the conventional control panel that enhances fire and gas detection.webp';

	const capabilities = [
		'Modular detection interface and flexible conventional zone management.',
		'Cloud-enabled connectivity for remote monitoring and system responsiveness.',
		'Tailored for fire and gas applications in commercial and industrial environments.',
		'Supports practical maintenance, streamlined diagnostics, and dependable operation.'
	];

	const accessoryCards = [
		{
			name: 'C-COM Modules',
			image: moduleImage,
			description: 'Communications expansion for modular system integration and interface flexibility.'
		},
		{
			name: 'Remote system control',
			image: cloudImage,
			description: 'Extinguishing management and cloud connectivity support broader supervision and response planning.'
		},
		{
			name: 'Operational overview',
			image: overviewImage,
			description: 'A premium conventional panel design engineered for dependable fire and gas detection coverage.'
		}
	];
</script>

<div class="min-h-screen bg-slate-50 text-slate-900">
	<BackNavigation />

	<main class="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">
		<section class="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
			<div class="space-y-6">
				<p class="text-sm font-semibold uppercase tracking-[0.28rem] text-ufs-orange">Previdia micro</p>
				<h1 class="text-4xl font-black tracking-tight text-ufs-blue md:text-5xl lg:text-6xl">Compact conventional control built for faster response.</h1>
				<p class="max-w-xl text-lg leading-8 text-slate-600">
					The Previdia Micro range delivers a modern, modular approach to conventional fire control with dependable logic,
					smart connectivity, and simplified asset supervision.
				</p>
				<p class="max-w-xl text-base leading-7 text-slate-600">
					Designed for site flexibility, the system supports control panel confidence while helping operators manage fire and gas
					coverage through a cleaner, more responsive configuration.
				</p>

				<div class="flex flex-wrap gap-3 pt-2">
					<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14rem] text-slate-600">Modular</span>
					<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14rem] text-slate-600">Conventional</span>
					<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14rem] text-slate-600">Remote connectivity</span>
				</div>

				<div class="grid gap-4 pt-5 sm:grid-cols-3">
					<div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Application</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Commercial</p>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Architecture</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Modular</p>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<p class="text-[10px] font-semibold uppercase tracking-[0.2rem] text-slate-500">Network</p>
						<p class="mt-2 text-lg font-bold text-ufs-blue">Cloud ready</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-ufs-orange/12 via-slate-50 to-ufs-blue/10 blur-2xl"></div>
				<div class="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-[0_35px_80px_rgba(10,36,99,0.10)] md:p-6">
					<div class="flex min-h-[500px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-slate-50 p-4">
						<img src={heroImage} alt="Previdia Micro panel" class="h-[420px] w-full max-w-[640px] object-contain drop-shadow-[0_35px_65px_rgba(15,23,42,0.18)]" />
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
					<h2 class="text-3xl font-black tracking-tight text-ufs-blue">Modules and accessories</h2>
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

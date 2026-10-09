<script lang="ts">
	import { PenTool, Wrench, ClipboardCheck, ShieldCheck, ArrowRight, MessageCircle, Phone, FireExtinguisherIcon } from 'lucide-svelte';

	const services = [
		{
			icon: PenTool,
			title: 'System Design',
			tagline: 'detailed System Design',
			description:
				'Comprehensive fire protection system design translating NFPA requirements into scalable, commissionable architectures for detection, suppression, water supply, and notification.',
			points: [
				'Risk assessment and hazard classification',
				'Device coverage and zoning calculations',
				'Schematic and bill-of-materials preparation',
				'NFPA 72, NFPA 20, and NFPA 2001 alignment'
			],
			accent: 'blue'
		},
		{
			icon: Wrench,
			title: 'Precision Installation',
			tagline: 'Verified, standards-compliant deployment',
			description:
				'Meticulous installation of UL Listed hardware by trained technicians, ensuring every loop, zone, and discharge pathway performs exactly as designed.',
			points: [
				'Addressable and conventional panel commissioning',
				'Detector, call point, and sounder installation',
				'Pump package and piping installation',
				'Loop testing and functional verification'
			],
			accent: 'orange'
		},
		{
			icon: ClipboardCheck,
			title: 'Maintenance & Testing',
			tagline: 'Disciplined long-term readiness',
			description:
				'Scheduled inspection, testing, and maintenance programs that keep life safety systems dependable between annual certifications and across emergency duty cycles.',
			points: [
				'Annual and periodic NFPA inspection schedules',
				'Detector sensitivity and loop health testing',
				'Pump churn and flow performance verification',
				'Documented service reports and defect tracking'
			],
			accent: 'blue'
		},
		{
			icon: Wrench,
			title: 'Fire Extinguisher Servicing & Refills',
			tagline: 'Best installation, service, and refill services in town',
			description:
				'Complete portable extinguisher programs covering installation, scheduled servicing, hydrostatic testing, and certified refills across all extinguisher classes.',
			points: [
				'Extinguisher supply and placement planning',
				'Scheduled inspection and servicing visits',
				'Certified recharge and refill services',
				'NFPA 10 compliant maintenance records'
			],
			accent: 'orange'
		}
	];

	const commitments = [
		{ value: 'UL Listed', label: 'Hardware' },
		{ value: 'NFPA', label: 'Compliant Engineering' },
		{ value: 'Kenya', label: 'Regional Coverage' },
		{ value: '24/7', label: 'Emergency Support' }
	];
</script>

<svelte:head>
	<title>Our Services | Ultimate Fire Solutions Ltd | Fire Protection Engineering in Kenya</title>
	<meta name="description" content="Fire protection engineering services in Kenya: system design, precision installation, maintenance and testing, and the best fire extinguisher installation, service, and refill services in town. UL Listed products, NFPA compliant engineering." />
</svelte:head>

<div class="min-h-screen bg-white font-sans text-slate-900">
	<!-- Hero -->
	<section class="relative overflow-hidden bg-[#0A2463]">
		<div class="absolute inset-0 bg-gradient-to-br from-[#0A2463] via-[#0d2d75] to-[#071a44]"></div>
		<div class="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#FF5A00]/10 blur-3xl"></div>
		<div class="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#FF5A00]/5 blur-3xl"></div>

		<div class="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
			<div class="max-w-3xl">
				<span class="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF5A00] ring-1 ring-white/20">
					Our Capabilities
				</span>
				<h1 class="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
					Full-Scope Fire<br />Protection <span class="text-[#FF5A00]">Services</span>
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
					From code-driven system design to disciplined long-term maintenance, we deliver the complete life
					safety lifecycle for commercial, industrial, and institutional facilities across Kenya.
				</p>
				<div class="mt-10 flex flex-wrap gap-4">
					<a href="/contact" class="inline-flex items-center gap-2 rounded-md bg-[#FF5A00] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600 hover:shadow-xl">
						Request Official Quote
						<ArrowRight class="h-4 w-4" />
					</a>
					<a href="/products" class="inline-flex items-center gap-2 rounded-md bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/20">
						Browse Products
						<ArrowRight class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Core Capabilities -->
	<section class="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
		<div class="max-w-2xl">
			<span class="text-xs font-bold uppercase tracking-widest text-[#FF5A00]">Core Capabilities</span>
			<h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0A2463] md:text-4xl">
				Engineered end-to-end, maintained for the long run
			</h2>
			<p class="mt-5 text-base leading-relaxed text-slate-600">
				Four disciplined service pillars covering the entire fire protection lifecycle, from initial design
				philosophy through installation, verification, and scheduled servicing.
			</p>
		</div>

		<div class="mt-14 grid gap-8 lg:grid-cols-2">
			{#each services as service}
				{@const Icon = service.icon}
				<div class="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#FF5A00]/30 hover:shadow-xl md:p-10">
					<div class="flex items-start justify-between">
						<div class={`flex h-14 w-14 items-center justify-center rounded-xl transition ${service.accent === 'orange' ? 'bg-[#FF5A00]/10 text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:text-white' : 'bg-[#0A2463]/5 text-[#0A2463] group-hover:bg-[#0A2463] group-hover:text-white'}`}>
							<Icon class="h-7 w-7" />
						</div>
						<span class={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${service.accent === 'orange' ? 'bg-[#FF5A00]/10 text-[#FF5A00]' : 'bg-[#0A2463]/5 text-[#0A2463]'}`}>
							{service.tagline}
						</span>
					</div>

					<h3 class="mt-6 text-xl font-bold text-[#0A2463]">{service.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>

					<ul class="mt-6 space-y-2.5">
						{#each service.points as point}
							<li class="flex items-start gap-2.5 text-sm text-slate-600">
								<ShieldCheck class={`mt-0.5 h-4 w-4 shrink-0 ${service.accent === 'orange' ? 'text-[#FF5A00]' : 'text-[#0A2463]'}`} />
								<span>{point}</span>
							</li>
						{/each}
					</ul>

					<a href="/contact" class="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#FF5A00] transition hover:gap-3">
						Inquire About This Service
						<ArrowRight class="h-4 w-4" />
					</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- Commitments Bar -->
	<section class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-6 md:px-8">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				{#each commitments as item}
					<div class="text-center">
						<div class="text-2xl font-bold text-[#0A2463] md:text-3xl">{item.value}</div>
						<div class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Closing CTA -->
	<section class="bg-[#0A2463] py-16">
		<div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left md:px-8">
			<div>
				<h2 class="text-2xl font-bold text-white md:text-3xl">Let's scope your protection requirements</h2>
				<p class="mt-2 text-slate-300">Talk to our engineering team about design, installation, or servicing.</p>
			</div>
			<div class="flex flex-wrap gap-4">
				<a href="/contact" class="inline-flex items-center gap-2 rounded-md bg-[#FF5A00] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600">
					<MessageCircle class="h-4 w-4" />
					Contact Our Team
				</a>
				<a href="/products" class="inline-flex items-center gap-2 rounded-md bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/20">
					<Phone class="h-4 w-4" />
					Browse Products
				</a>
			</div>
		</div>
	</section>
</div>

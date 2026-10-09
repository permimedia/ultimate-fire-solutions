<script lang="ts">
	import { ShieldCheck, Award, Target, Eye, Users, Wrench, FileCheck2, Building2 } from 'lucide-svelte';

	const trustMetrics = [
		{
			icon: Award,
			value: 'UL Listed',
			label: 'Hardware Portfolio',
			description: 'Every product line we supply is UL Listed hardware, verified against internationally recognized safety testing laboratories.'
		},
		{
			icon: ShieldCheck,
			value: 'NFPA Compliant',
			label: 'Engineering Standard',
			description: 'All detection, suppression, and notification systems are engineered to NFPA standards including NFPA 72, NFPA 20, NFPA 2001, and NFPA 10.'
		},
		{
			icon: Building2,
			value: 'Kenya Focused',
			label: 'Regional Delivery',
			description: 'Deep regional expertise delivering compliant life safety infrastructure across Nairobi and the wider East African market.'
		}
	];

	const whoWeAre = [
		{
			icon: Users,
			title: 'Fire Safety Engineering',
			description: 'A team of fire safety engineering specialists translating code-driven design into dependable, commissionable protection systems.'
		},
		{
			icon: Wrench,
			title: 'UL-Listed Hardware',
			description: 'A curated portfolio of UL Listed panels, detectors, call points, suppression systems, and pump packages from proven manufacturers.'
		},
		{
			icon: FileCheck2,
			title: 'NFPA Compliance',
			description: 'Rigorous adherence to NFPA standards governing alarm, suppression, water supply, and portable extinguisher protection.'
		}
	];
</script>

<svelte:head>
	<title>About Us | Ultimate Fire Solutions Ltd | Fire Safety Engineering in Kenya</title>
	<meta name="description" content="Ultimate Fire Solutions Ltd is a premier fire safety engineering firm in Kenya delivering UL Listed products and NFPA compliant fire detection, suppression, and life safety infrastructure." />
</svelte:head>

<div class="min-h-screen bg-white font-sans text-slate-900">
	<!-- Executive Hero -->
	<section class="relative overflow-hidden bg-[#0A2463]">
		<div class="absolute inset-0 bg-gradient-to-br from-[#0A2463] via-[#0d2d75] to-[#071a44]"></div>
		<div class="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF5A00]/10 blur-3xl"></div>
		<div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#FF5A00]/5 blur-3xl"></div>

		<div class="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
			<div class="max-w-3xl">
				<span class="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF5A00] ring-1 ring-white/20">
					About Ultimate Fire Solutions
				</span>
				<h1 class="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
					Engineering Life Safety<br />Infrastructure Across <span class="text-[#FF5A00]">East Africa</span>
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
					Ultimate Fire Solutions Ltd is a premier fire safety engineering firm delivering UL Listed hardware and
					NFPA compliant detection, suppression, and emergency lighting systems to commercial, industrial, and
					institutional clients throughout Kenya and the wider East African region.
				</p>
				<div class="mt-10 flex flex-wrap gap-4">
					<a href="/contact" class="rounded-md bg-[#FF5A00] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600 hover:shadow-xl">
						Request Official Quote
					</a>
					<a href="/services" class="rounded-md bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/20">
						Explore Our Services
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Trust Metrics -->
	<section class="relative -mt-16 px-6 md:px-8">
		<div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
			{#each trustMetrics as metric}
				{@const Icon = metric.icon}
				<div class="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2463]/5 text-[#0A2463]">
						<Icon class="h-6 w-6" />
					</div>
					<div class="mt-5 text-2xl font-bold text-[#0A2463]">{metric.value}</div>
					<div class="mt-1 text-xs font-bold uppercase tracking-wider text-[#FF5A00]">{metric.label}</div>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">{metric.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Who We Are -->
	<section class="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
		<div class="max-w-2xl">
			<span class="text-xs font-bold uppercase tracking-widest text-[#FF5A00]">Who We Are</span>
			<h2 class="mt-3 text-3xl font-bold tracking-tight text-[#0A2463] md:text-4xl">
				A disciplined fire safety engineering practice built on compliance
			</h2>
			<p class="mt-5 text-base leading-relaxed text-slate-600">
				We exist to protect people, assets, and operations through engineered life safety infrastructure.
				Our work spans detection, suppression, water supply, and notification, delivered with the technical
				rigour that regulated facilities demand.
			</p>
		</div>

		<div class="mt-14 grid gap-8 md:grid-cols-3">
			{#each whoWeAre as item}
				{@const Icon = item.icon}
				<div class="group rounded-2xl border border-slate-100 bg-slate-50/60 p-8 transition hover:border-[#FF5A00]/30 hover:bg-white hover:shadow-lg">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#FF5A00] shadow-sm ring-1 ring-slate-100 transition group-hover:bg-[#FF5A00] group-hover:text-white">
						<Icon class="h-6 w-6" />
					</div>
					<h3 class="mt-5 text-lg font-bold text-[#0A2463]">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Mission & Vision -->
	<section class="bg-slate-50 py-20 md:py-28">
		<div class="mx-auto grid max-w-7xl gap-8 px-6 md:px-8 lg:grid-cols-2">
			<div class="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
				<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5A00]/10 text-[#FF5A00]">
					<Target class="h-6 w-6" />
				</div>
				<h3 class="mt-5 text-2xl font-bold text-[#0A2463]">Our Mission</h3>
				<p class="mt-4 text-base leading-relaxed text-slate-600">
					To deliver the best fire extinguisher installation, service, and refill services in town, alongside
					premier fire alarm systems, suppression engineering, and life safety infrastructure, engineered to
					the highest UL Listed and NFPA compliance standards across Kenya.
				</p>
			</div>

			<div class="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
				<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2463]/10 text-[#0A2463]">
					<Eye class="h-6 w-6" />
				</div>
				<h3 class="mt-5 text-2xl font-bold text-[#0A2463]">Our Vision</h3>
				<p class="mt-4 text-base leading-relaxed text-slate-600">
					To be East Africa's most trusted partner in life safety engineering, setting the benchmark for
					compliant design, dependable installation, and disciplined long-term maintenance of fire protection
					systems.
				</p>
			</div>
		</div>
	</section>

	<!-- Closing CTA -->
	<section class="bg-[#0A2463] py-16">
		<div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left md:px-8">
			<div>
				<h2 class="text-2xl font-bold text-white md:text-3xl">Ready to engineer a compliant protection strategy?</h2>
				<p class="mt-2 text-slate-300">Speak with our fire safety engineering team about your next project.</p>
			</div>
			<div class="flex flex-wrap gap-4">
				<a href="/contact" class="rounded-md bg-[#FF5A00] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600">
					Contact Our Team
				</a>
				<a href="/products" class="rounded-md bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/20">
					Browse Products
				</a>
			</div>
		</div>
	</section>
</div>

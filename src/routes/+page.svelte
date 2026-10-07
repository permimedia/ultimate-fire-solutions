<script lang="ts">
	import ufsLogo from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/UFS LOGO.png';
	import previdiaPanel from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Control Panels.png';
	import { fireDetectionProducts } from '$lib/data/fire-detection-products';
	import { fireSuppressionProducts } from '$lib/data/fire-suppression-products';

	const featuredDetection = fireDetectionProducts.slice(0, 3);
	const featuredSuppression = fireSuppressionProducts.slice(0, 3);
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50 font-sans text-slate-900">
	<main>
		<section class="mx-auto max-w-[90rem] px-6 py-18 md:px-8 lg:px-10">
			<div class="grid items-center gap-12 py-16 lg:grid-cols-12">
				<div class="space-y-8 lg:col-span-5">
					<p class="text-sm font-semibold uppercase tracking-[0.28rem] text-ufs-orange">Ultimate Fire Solutions</p>
					<h1 class="text-5xl font-extrabold leading-tight tracking-tight text-ufs-blue md:text-6xl lg:text-7xl">
						Engineering Your Safety with <span class="text-ufs-orange">Ultimate Precision</span>
					</h1>
					<p class="max-w-lg text-lg leading-relaxed text-slate-700">
						Industry-leading fire protection engineering, rigorous NFPA-compliant installations, and advanced addressable alarm control systems.
					</p>
					<div class="flex flex-wrap gap-4 pt-2">
						<a href="#products" class="rounded-md bg-ufs-blue px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-blue-900">Explore Products</a>
						<a href="#contact" class="rounded-md border-2 border-ufs-blue bg-white px-8 py-3.5 text-base font-bold text-ufs-blue transition hover:bg-blue-50">Contact Us</a>
					</div>
				</div>

				<div class="relative mt-8 flex justify-center lg:col-span-7 lg:mt-0 lg:justify-end">
					<div class="absolute inset-0 -z-10 scale-110 rounded-full bg-ufs-orange/20 blur-3xl"></div>
					<img
						src={previdiaPanel}
						alt="Previdia control panel"
						class="h-auto w-full max-w-4xl rounded-xl object-contain drop-shadow-2xl transition duration-500 hover:scale-[1.02]"
					/>
				</div>
			</div>
		</section>

		<section id="products" class="bg-white/80 px-6 py-20 md:px-8 lg:px-10">
			<div class="mx-auto max-w-7xl">
				<div class="mb-12 text-center">
					<p class="text-sm font-semibold uppercase tracking-[0.25rem] text-ufs-orange">Product portfolio</p>
					<h2 class="mt-4 text-4xl font-black tracking-tight text-ufs-blue md:text-5xl">Integrated fire and safety systems</h2>
					<p class="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
						Engineered for life safety, operational resilience, and scalable protection across commercial, industrial, and mission-critical facilities.
					</p>
				</div>

				<div class="grid gap-8 lg:grid-cols-2">
					<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-6">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-xs font-semibold uppercase tracking-[0.22rem] text-ufs-orange">Category</p>
								<h3 class="mt-2 text-3xl font-black text-ufs-blue">Fire Detection Systems</h3>
							</div>
							<a href="/products/fire-and-safety/fire-detection-systems" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18rem] text-ufs-blue transition hover:border-ufs-orange hover:text-ufs-orange">View all</a>
						</div>

						<div class="mt-6 grid gap-5 md:grid-cols-3">
							{#each featuredDetection as product}
								<a href={`/products/fire-and-safety/fire-detection-systems/${product.slug}`} class="group card overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ufs-orange/60 hover:shadow-xl">
									<div class="flex min-h-[180px] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
										<img src={product.image} alt={product.name} class="h-32 w-full object-contain transition duration-500 group-hover:scale-[1.04]" />
									</div>
									<div class="space-y-2 p-4">
										<p class="text-[10px] font-semibold uppercase tracking-[0.18rem] text-ufs-orange">{product.series}</p>
										<h4 class="text-lg font-bold text-ufs-blue">{product.name}</h4>
										<p class="text-sm leading-6 text-slate-600">{product.shortDescription}</p>
									</div>
								</a>
							{/each}
						</div>
					</div>

					<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-6">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-xs font-semibold uppercase tracking-[0.22rem] text-ufs-orange">Category</p>
								<h3 class="mt-2 text-3xl font-black text-ufs-blue">Fire Suppression Systems</h3>
							</div>
							<a href="/products/fire-and-safety/fire-suppression-systems" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18rem] text-ufs-blue transition hover:border-ufs-orange hover:text-ufs-orange">View all</a>
						</div>

						<div class="mt-6 grid gap-5 md:grid-cols-3">
							{#each featuredSuppression as product}
								<a href={`/products/fire-and-safety/fire-suppression-systems/${product.slug}`} class="group card overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ufs-orange/60 hover:shadow-xl">
									<div class="flex min-h-[180px] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
										<img src={product.image} alt={product.name} class="h-32 w-full object-contain transition duration-500 group-hover:scale-[1.04]" />
									</div>
									<div class="space-y-2 p-4">
										<p class="text-[10px] font-semibold uppercase tracking-[0.18rem] text-ufs-orange">{product.series}</p>
										<h4 class="text-lg font-bold text-ufs-blue">{product.name}</h4>
										<p class="text-sm leading-6 text-slate-600">{product.shortDescription}</p>
									</div>
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="about" class="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-10">
			<div class="grid gap-8 lg:grid-cols-2">
				<div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
					<p class="text-sm font-semibold uppercase tracking-[0.22rem] text-ufs-orange">Who we are</p>
					<h3 class="mt-3 text-3xl font-black tracking-tight text-ufs-blue">Protecting people, property, and process.</h3>
					<p class="mt-5 text-base leading-8 text-slate-600">
						Ultimate Fire Solutions delivers robust fire alarm, detection, and suppression strategies tailored to the demands of modern facilities, industrial infrastructure, and critical systems.
					</p>
				</div>
				<div class="rounded-[2rem] bg-gradient-to-br from-ufs-blue to-slate-900 p-8 text-white shadow-xl">
					<p class="text-sm font-semibold uppercase tracking-[0.22rem] text-orange-300">Why choose us</p>
					<ul class="mt-6 space-y-4 text-base leading-7 text-slate-200">
						<li>• Code-driven fire protection engineering and compliant systems</li>
						<li>• Advanced detection architecture and premium control panels</li>
						<li>• Integrated suppression solutions for high-risk environments</li>
						<li>• Technical support, specification, and project-ready deployment</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="services" class="bg-slate-950 px-6 py-20 text-white md:px-8 lg:px-10">
			<div class="mx-auto max-w-7xl">
				<p class="text-sm font-semibold uppercase tracking-[0.25rem] text-orange-300">Our services</p>
				<h3 class="mt-4 text-4xl font-black tracking-tight">Solutions built around risk, design, and performance.</h3>
				<div class="mt-8 grid gap-5 md:grid-cols-3">
					<div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
						<h4 class="text-xl font-bold text-white">System Design</h4>
						<p class="mt-3 text-sm leading-7 text-slate-300">Custom solution development aligned to building risks, compliance needs, and operational requirements.</p>
					</div>
					<div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
						<h4 class="text-xl font-bold text-white">Installation</h4>
						<p class="mt-3 text-sm leading-7 text-slate-300">Precision deployment of detection and suppression hardware supported by disciplined project execution.</p>
					</div>
					<div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
						<h4 class="text-xl font-bold text-white">Maintenance</h4>
						<p class="mt-3 text-sm leading-7 text-slate-300">Long-term support, inspection readiness, and continuity planning for safety-critical environments.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="contact" class="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-10">
			<div class="rounded-[2rem] bg-gradient-to-br from-ufs-blue via-blue-900 to-slate-950 p-8 text-white shadow-2xl md:p-10">
				<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
					<div>
						<p class="text-sm font-semibold uppercase tracking-[0.22rem] text-orange-300">Contact us</p>
						<h3 class="mt-3 text-4xl font-black tracking-tight">Request a project consultation.</h3>
					</div>
					<div class="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
						<p class="text-sm text-slate-200">Email us for specification support, product guidance, and site-ready fire protection solutions.</p>
						<a href="mailto:sales@ultimatefiresolutions.com" class="mt-4 inline-block text-lg font-bold text-orange-300 hover:text-white">sales@ultimatefiresolutions.com</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

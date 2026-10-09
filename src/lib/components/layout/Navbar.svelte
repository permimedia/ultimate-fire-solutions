<script lang="ts">
	// Svelte 5 runes usage
	import { Menu, X, ChevronDown } from 'lucide-svelte';
	import ufsLogo from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/UFS LOGO.png';
	import { categories } from '$lib/data/products';

	let { url = '' } = $props();

	let mobileOpen = $state(false);
	let activeMobileCategory: string | null = $state(null);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
		if (!mobileOpen) {
			activeMobileCategory = null;
		}
	}

	function closeMobile() {
		mobileOpen = false;
		activeMobileCategory = null;
	}

	function toggleMobileCategory(catId: string) {
		activeMobileCategory = activeMobileCategory === catId ? null : catId;
	}
</script>

<style>
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideUp {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-8px);
		}
	}

	.dropdown-panel {
		animation: slideDown 200ms ease-out forwards;
	}

	.mobile-panel {
		animation: slideDown 250ms ease-out forwards;
	}

	.nav-link {
		transition: color 150ms ease, background-color 150ms ease;
	}

	.subcategory-link {
		transition: all 150ms ease;
	}

	.subcategory-link:hover {
		background-color: #f8fafc;
		color: #0A2463;
		padding-left: 0.75rem;
	}

	@media (prefers-reduced-motion: reduce) {
		.dropdown-panel,
		.mobile-panel,
		.nav-link,
		.subcategory-link {
			animation: none !important;
			transition: none !important;
		}
	}
</style>

<nav class="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100/80">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
		<!-- Brand Logo -->
		<a href="/" class="flex items-center gap-3 shrink-0" aria-label="Ultimate Fire Solutions Home" onclick={closeMobile}>
			<img src={ufsLogo} alt="Ultimate Fire Solutions" class="h-10 w-auto" />
			<span class="hidden sm:block font-semibold text-[#0A2463] tracking-tight">Ultimate Fire Solutions</span>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden lg:flex lg:items-center lg:gap-6 lg:ml-8">
			<a href="/" class="nav-link text-sm font-medium text-slate-700 hover:text-[#FF5A00]">Home</a>
			<a href="/about" class="nav-link text-sm font-medium text-slate-700 hover:text-[#FF5A00]">About Us</a>

			<!-- Products Mega Menu -->
			<div class="relative group">
				<button
					aria-expanded="false"
					aria-haspopup="true"
					class="flex items-center gap-1.5 nav-link text-sm font-semibold text-slate-700 hover:text-[#FF5A00]"
				>
					<span>Products</span>
					<svg class="h-4 w-4 text-slate-500 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
					</svg>
				</button>

				<!-- Mega Menu Dropdown Panel -->
				<div class="dropdown-panel invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 top-full z-50 mt-2.5 w-[min(96vw,1000px)] -translate-x-1/2 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 border border-slate-100">
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
						{#each categories as cat}
							<div class="category-column">
								<h3 class="mb-3 flex items-center gap-2 rounded-lg bg-[#0A2463]/5 px-3 py-2 text-sm font-bold uppercase tracking-wider text-[#0A2463]">
									{cat.name}
								</h3>
								<ul class="space-y-1.5" role="list">
									{#each cat.subcategories as sub}
										<li>
											<a
												href={`/products/${cat.id}/${sub.id}`}
												class="subcategory-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#FF5A00]/10 hover:text-[#FF5A00] hover:pl-4"
											>
												<svg class="h-3.5 w-3.5 text-slate-300 transition-colors" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path d="M10.293 3.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
												</svg>
												{sub.name}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<a href="/services" class="nav-link text-sm font-medium text-slate-700 hover:text-[#FF5A00]">Services</a>
			<a href="/contact" class="nav-link text-sm font-medium text-slate-700 hover:text-[#FF5A00]">Contact Us</a>
			<a href="/contact" class="rounded-lg bg-[#FF5A00] px-5 py-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,90,0,0.3)] transition-all hover:bg-orange-600 hover:shadow-[0_12px_28px_rgba(255,90,0,0.4)] hover:-translate-y-0.5">
				Get a Quote
			</a>
		</div>

		<!-- Mobile Hamburger Button (Lucide Menu/X icons) -->
		<button
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
			aria-controls="mobile-menu"
			onclick={toggleMobile}
			class="flex lg:hidden items-center justify-center h-10 w-10 rounded-lg bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2"
		>
			{#if mobileOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>

	<!-- Mobile Drawer / Dropdown Panel -->
	{#if mobileOpen}
		<div id="mobile-menu" class="mobile-panel lg:hidden bg-white/95 backdrop-blur-md shadow-2xl rounded-b-2xl border-b border-gray-100 p-6" role="navigation" aria-label="Mobile navigation">
			<nav class="space-y-1">
				<a href="/" class="nav-link block py-3 text-base font-medium text-slate-700 hover:text-[#FF5A00]" onclick={closeMobile}>Home</a>
				<a href="/about" class="nav-link block py-3 text-base font-medium text-slate-700 hover:text-[#FF5A00]" onclick={closeMobile}>About Us</a>

				<!-- Mobile Products Accordion -->
				<div class="border-t border-slate-100 pt-3">
					<button
						aria-expanded={activeMobileCategory === 'products'}
						aria-controls="mobile-products-panel"
						onclick={() => toggleMobileCategory('products')}
						class="w-full flex items-center justify-between py-3 text-base font-semibold text-slate-700 hover:text-[#FF5A00]"
					>
						<span>Products</span>
						<ChevronDown
							class={`h-5 w-5 text-slate-500 transition-transform duration-200 ${activeMobileCategory === 'products' ? 'rotate-180' : ''}`}
						/>
					</button>

					{#if activeMobileCategory === 'products'}
						<div id="mobile-products-panel" class="mt-3 space-y-2" role="region" aria-label="Product categories">
							{#each categories as cat}
								<div class="rounded-lg bg-slate-50/50 p-3">
									<h4 class="mb-2 text-sm font-bold uppercase tracking-wider text-[#0A2463]">{cat.name}</h4>
									<ul class="space-y-1.5" role="list">
										{#each cat.subcategories as sub}
											<li>
												<a
													href={`/products/${cat.id}/${sub.id}`}
													class="subcategory-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#FF5A00]/10 hover:text-[#FF5A00]"
													onclick={closeMobile}
												>
													<svg class="h-3.5 w-3.5 text-slate-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path d="M10.293 3.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
													</svg>
													{sub.name}
												</a>
											</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					{/if}
				</div>

				<a href="/services" class="nav-link block py-3 text-base font-medium text-slate-700 hover:text-[#FF5A00]" onclick={closeMobile}>Services</a>
				<a href="/contact" class="nav-link block py-3 text-base font-medium text-slate-700 hover:text-[#FF5A00]" onclick={closeMobile}>Contact Us</a>

				<!-- Mobile CTA -->
				<div class="border-t border-slate-100 pt-4 mt-2">
					<a href="/contact" class="block w-full rounded-lg bg-[#FF5A00] px-6 py-3.5 text-base font-bold text-center text-white shadow-[0_8px_20px_rgba(255,90,0,0.3)] transition-all hover:bg-orange-600 hover:shadow-[0_12px_28px_rgba(255,90,0,0.4)]" onclick={closeMobile}>
						Get a Quote
					</a>
				</div>
			</nav>
		</div>
	{/if}
</nav>
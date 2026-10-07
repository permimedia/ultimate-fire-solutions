<script lang="ts">
	// Svelte 5 runes usage
	import ufsLogo from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/UFS LOGO.png';
	import { categories } from '$lib/data/products';
	
	let { url = '' } = $props();

	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}
</script>

<nav class="bg-white border-b border-slate-100">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
		<a href="/" class="flex items-center gap-3">
			<img src={ufsLogo} alt="Ultimate Fire Solutions" class="h-10 w-auto" />
			<span class="font-semibold text-ufs-blue">Ultimate Fire Solutions</span>
		</a>

		<!-- Desktop nav -->
		<div class="hidden lg:flex lg:items-center lg:gap-8">
			<a href="/" class="text-sm font-semibold text-slate-700 hover:text-ufs-blue">Home</a>
			<a href="#about" class="text-sm font-semibold text-slate-700 hover:text-ufs-blue">About</a>
			
			<!-- Products dropdown -->
			<div class="relative group">
				<button aria-expanded="false" class="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-ufs-blue">
					<span>Products</span>
					<svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/></svg>
				</button>

				<!-- Dropdown panel -->
				<div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-250 absolute right-0 mt-3 w-[900px] z-50 transform rounded-xl bg-white p-6 shadow-2xl ring-1 ring-slate-100">
					<div class="grid grid-cols-3 gap-6">
						{#each categories as cat}
							<div>
								<h3 class="mb-3 text-sm font-bold uppercase text-slate-500">{cat.name}</h3>
								<ul class="space-y-2">
									{#each cat.subcategories as sub}
										<li>
											<a href={`/products/${cat.id}/${sub.id}`} class="block rounded-md px-2 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-50">{sub.name}</a>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>
			
			<a href="#services" class="text-sm font-semibold text-slate-700 hover:text-ufs-blue">Services</a>
			<a href="/contact" class="text-sm font-semibold text-slate-700 hover:text-ufs-blue">Contact Us</a>
			<a href="/contact" class="rounded-md bg-ufs-orange px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-orange-600">Get a Quote</a>
		</div> <!-- [ADDED FIX]: This correctly closes the Desktop nav container -->

		<!-- Mobile hamburger -->
		<div class="flex items-center gap-3 lg:hidden">
			<button aria-label="menu" onclick={toggleMobile} class="rounded-md bg-slate-50 p-2">
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
			</button>
		</div>
	</div>

	<!-- Mobile accordion -->
	<div class="lg:hidden">
		<div class={`mx-auto max-w-7xl px-4 ${mobileOpen ? 'block' : 'hidden'}`}>
			<nav class="space-y-2 py-4">
				<div class="border-t border-slate-100 pt-4">
					<a href="/" class="block py-2 text-sm font-semibold text-slate-700 hover:text-ufs-blue">Home</a>
					<a href="#about" class="block py-2 text-sm font-semibold text-slate-700 hover:text-ufs-blue">About</a>
					
					<button class="w-full text-left flex items-center justify-between px-2 py-3 font-semibold text-slate-700" onclick={() => mobileOpen = !mobileOpen}>
						<span>Products</span>
						<svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
					</button>
					<div class="mt-2 space-y-2 px-2">
						{#each categories as cat}
							<a href={`/products/${cat.id}`} class="block rounded-md px-2 py-2 text-sm font-semibold text-ufs-blue">{cat.name}</a>
							<div class="mt-2 space-y-1 border-l border-slate-100 pl-3">
								{#each cat.subcategories as sub}
									<a href={`/products/${cat.id}/${sub.id}`} class="block py-1 text-sm">{sub.name}</a>
								{/each}
							</div>
						{/each}
					</div>
					
					<a href="/services" class="block py-2 text-sm font-semibold text-slate-700 hover:text-ufs-blue">Services</a>
<a href="/contact" class="block py-2 text-sm font-semibold text-slate-700 hover:text-ufs-blue">Contact Us</a>
<a href="/contact" class="block mt-4 rounded-md bg-ufs-orange px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-orange-600 text-center">Get a Quote</a>
				</div>
			</nav>
		</div>
	</div>
</nav>
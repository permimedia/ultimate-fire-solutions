<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	const brandBlue = '#0A2463';
	const brandOrange = '#FF5A00';

	function formatSegment(segment: string) {
		return segment
			.split('-')
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join(' ');
	}

	let currentPath = $derived(page.url.pathname);
	let breadcrumbs = $derived(
		currentPath === '/'
			? []
			: [
					{ label: 'Home', href: '/' },
					...currentPath
						.split('/')
						.filter(Boolean)
						.map((segment, index, segments) => {
							const href = '/' + segments.slice(0, index + 1).join('/');
							return {
								label: formatSegment(segment),
								href
							};
						})
						.filter((item, index, arr) => arr.findIndex((entry) => entry.href === item.href) === index)
			  ]
	);

	function handleBack() {
		if (window.history.length > 1) {
			window.history.back();
			return;
		}

		goto('/');
	}
</script>

<nav aria-label="Breadcrumb" class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/85 backdrop-blur-sm">
	<div class="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
		<button
			type="button"
			onclick={handleBack}
			aria-label="Go back"
			class="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[color:var(--brand-blue)] shadow-sm transition-all duration-200 hover:border-[color:var(--brand-orange)] hover:bg-orange-50 hover:text-[color:var(--brand-orange)] focus:outline-none focus:ring-2 focus:ring-orange-200"
			style="--brand-blue: {brandBlue}; --brand-orange: {brandOrange};"
		>
			<svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
				<path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>

		<div class="flex min-w-0 flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
			{#if breadcrumbs.length}
				{#each breadcrumbs as item, index}
					{#if index > 0}
						<span class="text-slate-400">/</span>
					{/if}

					{#if index === breadcrumbs.length - 1}
						<span class="truncate font-semibold text-[color:var(--brand-blue)]">{item.label}</span>
					{:else}
						<a href={item.href} class="truncate transition-colors duration-200 hover:text-[color:var(--brand-orange)]">{item.label}</a>
					{/if}
				{/each}
			{:else}
				<span class="font-semibold text-[color:var(--brand-blue)]">Home</span>
			{/if}
		</div>
	</div>
</nav>

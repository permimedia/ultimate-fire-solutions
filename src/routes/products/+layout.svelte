<script lang="ts">
	import BackNavigation from '$lib/components/layout/BackNavigation.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-50">
	<BackNavigation />
	{@render children()}
</div>

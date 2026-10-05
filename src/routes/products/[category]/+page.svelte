<script lang="ts">
  let { data } = $props();
  const { category, products } = data;
</script>

<svelte:head>
  <title>{category.name} | Ultimate Fire Solutions Ltd Kenya</title>
</svelte:head>

<main class="min-h-screen bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-12 border-b border-slate-200 pb-8">
      <h1 class="text-3xl font-bold tracking-tight text-[#0A2463] sm:text-4xl">{category.name}</h1>
      <p class="mt-3 text-lg text-slate-600">{category.description}</p>
    </div>
    <div class="mb-12">
      <h2 class="mb-6 text-xl font-semibold text-[#0A2463]">Subcategories</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each category.subcategories as sub}
          <a href="/products/{category.id}/{sub.id}" class="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#FF5A00] hover:shadow-md">
            <h3 class="font-semibold text-[#0A2463] group-hover:text-[#FF5A00]">{sub.name}</h3>
            <span class="mt-2 block text-sm font-medium text-slate-400">View Products &rarr;</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</main>

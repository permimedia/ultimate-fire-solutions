<script lang="ts">
  let { data } = $props();
  const { category, subCategory, products } = data;
</script>

<svelte:head>
  <title>{subCategory.name} - {category.name} | Ultimate Fire Solutions</title>
</svelte:head>

<main class="min-h-screen bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-10">
      <nav class="mb-4 flex text-sm text-slate-500">
        <a href="/products/{category.id}" class="hover:text-[#0A2463]">{category.name}</a>
        <span class="mx-2">/</span>
        <span class="font-semibold text-[#0A2463]">{subCategory.name}</span>
      </nav>
      <h1 class="text-3xl font-bold text-[#0A2463]">{subCategory.name}</h1>
    </div>
    {#if products.length === 0}
      <div class="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <p class="text-slate-500">Products for this category are being updated. Contact our sales office for inquiries.</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each products as product}
          <a href="/products/{category.id}/{subCategory.id}/{product.id}" class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-[#FF5A00] hover:shadow-xl">
            <div class="flex h-64 items-center justify-center bg-slate-100 p-6">
              <img src={product.image} alt={product.name} class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div class="p-6">
              <div class="mb-2 flex gap-2">
                {#each product.certifications as cert}
                  <span class="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-[#0A2463]">{cert}</span>
                {/each}
              </div>
              <h3 class="text-xl font-bold text-[#0A2463] group-hover:text-[#FF5A00]">{product.name}</h3>
              <p class="mt-2 line-clamp-2 text-sm text-slate-600">{product.description}</p>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</main>

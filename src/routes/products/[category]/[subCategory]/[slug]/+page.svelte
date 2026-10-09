<script lang="ts">
  import { ShieldCheck, CheckCircle2 } from 'lucide-svelte';
  let { data } = $props();
  let product = $derived(data.product);

  function handleImgError(e: Event) {
    const img = e.currentTarget as HTMLImageElement;
    img.style.opacity = '0';
  }
</script>

<svelte:head>
  <title>{product.name} | Ultimate Fire Solutions Kenya</title>
  <meta name="description" content="{product.description} NFPA and UL listed fire safety equipment in Kenya." />
</svelte:head>

<main class="min-h-screen bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 items-center gap-12 rounded-3xl bg-white p-8 shadow-xl lg:grid-cols-2 lg:p-12">
      <div class="flex w-full items-center justify-center rounded-2xl p-8" style="background: radial-gradient(circle at 10% 10%, rgba(10,36,99,0.04), rgba(255,255,255,0));">
        <div class="w-full h-[450px] lg:h-[600px] flex items-center justify-center rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} loading="lazy" decoding="async" onerror={handleImgError} class="object-contain w-full h-full max-h-[450px] lg:max-h-[600px] drop-shadow-2xl" />
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="mb-4 flex flex-wrap gap-2">
          {#each product.certifications as cert}
            <span class="inline-flex items-center gap-2 rounded-full bg-[#FF5A00]/10 px-3 py-1 text-xs font-semibold text-[#FF5A00] border border-[#FF5A00]/20">
              <ShieldCheck size={14} />
              {cert}
            </span>
          {/each}
        </div>
        <h1 class="text-3xl font-extrabold text-[#0A2463] sm:text-4xl">{product.name}</h1>
        <p class="mt-4 text-lg leading-relaxed text-slate-600">{product.description}</p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="/contact" class="flex items-center justify-center rounded-xl bg-[#FF5A00] px-8 py-4 font-semibold text-white transition-all hover:bg-orange-600 shadow-lg shadow-orange-500/20">
            Request Official Quote
          </a>
          <a href={`https://wa.me/254723717871?text=${encodeURIComponent(product.name)}`} target="_blank" class="flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:bg-green-600">
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
    <div class="mt-16 rounded-3xl bg-white p-8 shadow-xl lg:p-12">
      <h2 class="mb-8 border-b border-slate-100 pb-4 text-2xl font-bold text-[#0A2463]">
        Technical Specifications & Features
      </h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each product.features as feature}
          <div class="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <CheckCircle2 size={20} class="mt-0.5 shrink-0 text-[#FF5A00]" />
            <span class="text-sm font-medium text-slate-700">{feature}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>

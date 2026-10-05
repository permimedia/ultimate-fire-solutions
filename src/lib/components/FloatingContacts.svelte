<script lang="ts">
  import { Phone } from 'lucide-svelte';
  import whatsappIcon from '$lib/assets/whatsapp icon.png';

  // static hrefs kept in reactive state per Svelte 5 runes
  let phoneHref = $state('tel:+254180198660');
  let waHref = $state('https://wa.me/254723717871');
  let waIcon = $state(whatsappIcon);
</script>

<div class="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
  <a href={phoneHref} aria-label="Call Ultimate Fire Solutions" class="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2463] text-white shadow-[0_20px_40px_rgba(10,36,99,0.35)] transition-transform duration-200 hover:scale-110">
    <Phone class="h-6 w-6" />
  </a>

  <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Ultimate Fire Solutions" class="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-[0_18px_34px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110">
    <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-75 group-hover:animate-ping"></span>
    <img src={waIcon} alt="WhatsApp" class="relative z-10 h-full w-full object-cover p-2" />
  </a>
</div>

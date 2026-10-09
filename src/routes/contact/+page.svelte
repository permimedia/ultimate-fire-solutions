<script lang="ts">
  import { Phone, Mail, MapPin, MessageCircle } from 'lucide-svelte';

  // Svelte 5 runes - single reactive form object
  let formData = $state({ name: '', email: '', phone: '', service: '', message: '' });

  const services = [
    'Installation',
    'Maintenance',
    'Inspection',
    'Design Consultation',
    'Other',
  ];

  // Helper: format message for WhatsApp / Email
  function formatMessage(data: { name: string; email: string; phone: string; service: string; message: string }) {
    return `New Booking Request\n\nName: ${data.name || '-'}\nEmail: ${data.email || '-'}\nPhone: ${data.phone || '-'}\nService: ${data.service || '-'}\n\nMessage:\n${data.message || '-'}\n`;
  }

  function validate(data: typeof formData) {
    const missing: string[] = [];
    if (!data.name || !data.name.trim()) missing.push('Name');
    if (!data.email && !data.phone) missing.push('Email or Phone');
    if (!data.service) missing.push('Service');
    return missing;
  }

  // Open WhatsApp with encoded message in new tab
  function submitViaWhatsApp() {
    const missing = validate(formData);
    if (missing.length) {
      alert(`Please complete: ${missing.join(', ')}`);
      return;
    }

    const msg = formatMessage(formData);
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/254723717871?text=${encoded}`;
    if (typeof window !== 'undefined') window.open(url, '_blank');
    // optional: reset form
    formData = { name: '', email: '', phone: '', service: '', message: '' };
  }

  // Open default mail client with prefilled subject and body
  function submitViaEmail() {
    const missing = validate(formData);
    if (missing.length) {
      alert(`Please complete: ${missing.join(', ')}`);
      return;
    }

    const msg = formatMessage(formData);
    const encoded = encodeURIComponent(msg);
    const mailto = `mailto:info@ultimatefiresolutions.com?subject=${encodeURIComponent('New Booking Request')}&body=${encoded}`;
    if (typeof window !== 'undefined') window.location.href = mailto;
    // optional: reset form (will only occur if mail client doesn't navigate away)
    formData = { name: '', email: '', phone: '', service: '', message: '' };
  }
</script>

<svelte:head>
  <title>Contact & Booking | Ultimate Fire Solutions</title>
</svelte:head>

<main class="mx-auto max-w-7xl px-6 py-24">
  <div class="grid gap-12 lg:grid-cols-2">
    <!-- Booking Form -->
    <section class="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
      <h1 class="mb-4 text-3xl font-extrabold text-[#0A2463]">Contact & Booking</h1>
      <p class="mb-6 text-slate-600">Complete the form below and our team will respond to arrange booking and next steps.</p>

      <form class="grid gap-4">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block">
            <span class="sr-only">Full name</span>
            <input bind:value={formData.name} placeholder="Full name" required class="w-full rounded-lg border-2 border-slate-200 px-4 py-3 focus:outline-none focus:border-[#0A2463] focus:ring-2 focus:ring-[#0A2463]/20" />
          </label>

          <label class="block">
            <span class="sr-only">Email</span>
            <input type="email" bind:value={formData.email} placeholder="Email" required class="w-full rounded-lg border-2 border-slate-200 px-4 py-3 focus:outline-none focus:border-[#0A2463] focus:ring-2 focus:ring-[#0A2463]/20" />
          </label>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block">
            <span class="sr-only">Phone</span>
            <input bind:value={formData.phone} placeholder="Phone" class="w-full rounded-lg border-2 border-slate-200 px-4 py-3 focus:outline-none focus:border-[#0A2463] focus:ring-2 focus:ring-[#0A2463]/20" />
          </label>

          <label class="block">
            <span class="sr-only">Service</span>
            <select bind:value={formData.service} class="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 focus:outline-none focus:border-[#0A2463] focus:ring-2 focus:ring-[#0A2463]/20">
              <option value="" disabled selected>Select service</option>
              {#each services as s}
                <option value={s}>{s}</option>
              {/each}
            </select>
          </label>
        </div>

        <label class="block">
          <span class="sr-only">Message</span>
          <textarea bind:value={formData.message} rows={6} placeholder="Message / project details" class="w-full rounded-lg border-2 border-slate-200 px-4 py-3 focus:outline-none focus:border-[#0A2463] focus:ring-2 focus:ring-[#0A2463]/20"></textarea>
        </label>

        <div class="flex items-center justify-between pt-4">
          <p class="text-sm text-slate-500">Prefer to call? <a href="tel:+254180198660" class="font-semibold text-[#0A2463]">+254 1 801 98660</a></p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto sm:flex sm:gap-4">
            <button type="button" onclick={submitViaWhatsApp} class="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-600">
              <MessageCircle class="h-5 w-5" />
              Send via WhatsApp
            </button>

            <button type="button" onclick={submitViaEmail} class="flex items-center justify-center gap-2 rounded-full bg-[#FF5A00] px-6 py-3 font-semibold text-white shadow-lg hover:bg-orange-600">
              <Mail class="h-5 w-5" />
              Send via Email
            </button>
          </div>
        </div>
      </form>
    </section>

    <!-- Map & Details -->
    <aside class="space-y-6">
      <div class="overflow-hidden rounded-xl border-2 border-slate-100 shadow-lg">
        <iframe title="Ultimate Fire Solutions Office Location" class="w-full h-full min-h-[400px] rounded-xl" src="https://www.google.com/maps?q=ULTIMATE+FIRE+SOLUTIONS+LTD-+LEADING+FIRE+ALARM+SUPPLIER+IN+KENYA&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 class="mb-4 text-xl font-bold text-[#0A2463]">Contact details</h2>
        <ul class="space-y-4 text-slate-700">
          <li class="flex items-start gap-3">
            <Phone class="h-5 w-5 text-[#0A2463] mt-1" />
            <div>
              <div class="font-semibold">Phone</div>
              <a href="tel:+254180198660" class="text-slate-600">+254 1 801 98660</a>
            </div>
          </li>

          <li class="flex items-start gap-3">
            <Mail class="h-5 w-5 text-[#0A2463] mt-1" />
            <div>
              <div class="font-semibold">Email</div>
              <a href="mailto:info@ultimatefiresolutions.com" class="text-slate-600">info@ultimatefiresolutions.com</a>
            </div>
          </li>

          <li class="flex items-start gap-3">
            <MapPin class="h-5 w-5 text-[#0A2463] mt-1" />
            <div>
              <div class="font-semibold">Location</div>
              <div class="text-slate-600">Nairobi, Kenya</div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</main>

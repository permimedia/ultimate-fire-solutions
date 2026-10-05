<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import FloatingContacts from '$lib/components/FloatingContacts.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';

	let { children } = $props();

	// Global SEO defaults (can be overridden by pages)
	const SITE_TITLE = 'Ultimate Fire Solutions Ltd | Leading Fire Alarm Supplier in Kenya';
	const SITE_DESCRIPTION = 'Ultimate Fire Solutions Ltd — Premier fire safety engineering firm in Kenya. UL-listed products, NFPA-compliant systems, and comprehensive fire detection, suppression, and emergency lighting solutions.';
	const SITE_URL = 'https://ultimatefiresolutions.co.ke';
	const SITE_IMAGE = '/og-image.jpg';
	const KEYWORDS = 'fire alarm suppliers in Kenya, fire alarm panels, fire suppression systems, fire detection systems, fire extinguishers, fire safety, UL listed, NFPA compliant';
</script>

<svelte:head>
		<link rel="icon" href={favicon} />
		<title>{SITE_TITLE}</title>
		<meta name="description" content={SITE_DESCRIPTION} />
		<meta name="keywords" content={KEYWORDS} />
		<meta name="robots" content="index,follow" />

		<!-- Open Graph -->
		<meta property="og:locale" content="en_KE" />
		<meta property="og:site_name" content="Ultimate Fire Solutions Ltd" />
		<meta property="og:title" content={SITE_TITLE} />
		<meta property="og:description" content={SITE_DESCRIPTION} />
		<meta property="og:type" content="website" />
		<meta property="og:url" content={SITE_URL} />
		<meta property="og:image" content={SITE_IMAGE} />

		<!-- Twitter -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={SITE_TITLE} />
		<meta name="twitter:description" content={SITE_DESCRIPTION} />
		<meta name="twitter:image" content={SITE_IMAGE} />

		<!-- LocalBusiness structured data (Schema.org) -->
		<script type="application/ld+json">{`
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "Ultimate Fire Solutions Ltd",
			"image": "${SITE_IMAGE}",
			"@id": "${SITE_URL}",
			"url": "${SITE_URL}",
			"telephone": "+254-700-000000",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Nairobi",
				"addressLocality": "Nairobi",
				"addressRegion": "NA",
				"postalCode": "00100",
				"addressCountry": "KE"
			},
			"priceRange": "$$",
			"description": "Premier fire safety engineering firm in Kenya. UL-listed and NFPA-compliant fire detection, suppression, and emergency lighting solutions.",
			"sameAs": [
				"https://www.facebook.com/ultimatefiresolutions",
				"https://www.linkedin.com/company/ultimate-fire-solutions"
			]
		}
		`}</script>
	</svelte:head>

{@render children()}

<FloatingContacts />

<script lang="ts">
	import { Phone } from 'lucide-svelte';
	import whatsappIcon from '$lib/assets/whatsapp icon.png';

	let phoneHref = $state('tel:+254180198660');
	let waHref = $state('https://wa.me/254723717871');
	let waIcon = $state(whatsappIcon);

	// Circular badge text configurations
	const callBadgeText = 'CALL US NOW • 24/7 SUPPORT •';
	const whatsappBadgeText = 'CHAT ON WHATSAPP • FAST RESPONSE •';
</script>

<!-- Styles for the animated badge ring -->
<style>
	@keyframes spin-slow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse-glow {
		0%, 100% {
			opacity: 0.4;
			filter: drop-shadow(0 0 8px currentColor);
		}
		50% {
			opacity: 0.7;
			filter: drop-shadow(0 0 20px currentColor);
		}
	}

	.badge-ring {
		animation: spin-slow 20s linear infinite;
		transform-origin: center;
	}

	.badge-ring:hover {
		animation-play-state: paused;
	}

	.pulse-glow {
		animation: pulse-glow 3s ease-in-out infinite;
	}

	.floating-btn {
		transition: transform 200ms ease, box-shadow 200ms ease;
	}

	.floating-btn:hover {
		transform: scale(1.1);
	}

	.floating-btn:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 3px;
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.badge-ring {
			animation: none;
		}
		.pulse-glow {
			animation: none;
		}
		.floating-btn:hover {
			transform: none;
		}
	}

	/* Mobile responsiveness - smaller on small screens */
	@media (max-width: 640px) {
		.floating-container {
			bottom: 1rem;
			right: 1rem;
			gap: 0.75rem;
		}

		.floating-btn {
			width: 3.25rem;
			height: 3.25rem;
		}

		.badge-svg {
			width: 4.5rem;
			height: 4.5rem;
		}
	}
</style>

<div class="fixed bottom-6 right-6 z-50 flex flex-col gap-4 floating-container">
	<!-- Call Button with Circular Badge -->
	<div class="relative flex items-center justify-center">
		<svg class="absolute badge-svg badge-ring pulse-glow text-[#0A2463]/60 pointer-events-none" viewBox="0 0 120 120" aria-hidden="true">
			<defs>
				<path id="call-badge-path" d="M 60 10 a 50 50 0 1 1 0 100 a 50 50 0 1 1 0 -100" />
			</defs>
			<text font-size="9" font-weight="600" font-family="system-ui, sans-serif" fill="currentColor" letter-spacing="0.5">
				<textPath href="#call-badge-path" startOffset="50%" text-anchor="middle">{callBadgeText}</textPath>
			</text>
		</svg>

		<a
			href={phoneHref}
			aria-label="Call Ultimate Fire Solutions"
			class="relative floating-btn flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2463] text-white shadow-[0_12px_28px_rgba(10,36,99,0.4)]"
		>
			<Phone class="h-6 w-6" />
		</a>
	</div>

	<!-- WhatsApp Button with Circular Badge -->
	<div class="relative flex items-center justify-center">
		<svg class="absolute badge-svg badge-ring pulse-glow text-[#25D366]/60 pointer-events-none" viewBox="0 0 120 120" aria-hidden="true">
			<defs>
				<path id="whatsapp-badge-path" d="M 60 10 a 50 50 0 1 1 0 100 a 50 50 0 1 1 0 -100" />
			</defs>
			<text font-size="9" font-weight="600" font-family="system-ui, sans-serif" fill="currentColor" letter-spacing="0.5">
				<textPath href="#whatsapp-badge-path" startOffset="50%" text-anchor="middle">{whatsappBadgeText}</textPath>
			</text>
		</svg>

		<a
			href={waHref}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="WhatsApp Ultimate Fire Solutions"
			class="relative floating-btn flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-[0_12px_28px_rgba(37,211,102,0.4)]"
		>
			<img src={waIcon} alt="WhatsApp" class="relative z-10 h-full w-full object-cover p-2" />
		</a>
	</div>
</div>
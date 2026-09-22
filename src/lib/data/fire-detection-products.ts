import previdiaMicroPanel from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/Previdia Micro Control Panel.png';
import previdiaMicroExp from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/M-EXP Module.png';
import previdiaMicroLan from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/Previdia C-COM LAN module.png';
import previdiaMicroDial from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/Previdia C-DIAL 4G Module.png';
import previdiaCompactPanel from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/Previdia Compact Control Panel.png';
import previdiaCompactIndocBoxClg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/INDOCBOXCLG.png';
import previdiaCompactIndocBoxCsg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/INDOCBOXCSG.png';
import previdiaCompactStudio from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/Previdia Compact the compact, powerful, EN54-certified fire control panel.png';
import previdia216R from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/Previdia216R.png';
import previdia216Cpu from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/FPMCPU-L.png';
import previdia216LedPrn from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/FPMLEDPRN-L.png';
import previdia216FpmExt from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/FPMEXT-L.png';
import previdiaUltra216R from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/Previdia-Ultra216R.png';
import previdiaUltraVoxR from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/Previdia-UltraVoxR.png';
import previdiaVoxR from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/Previdia-VoxR.png';
import previdiaUltraAmp from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/IFAMAMP 250 W Audio amplifier module.png';
import previdiaUltraAudio from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/IFAMEVAC Audio matrix module.png';

export type ProductAccessory = {
	name: string;
	image: string;
	description: string;
};

export type Product = {
	slug: string;
	name: string;
	series: string;
	subtitle: string;
	shortDescription: string;
	longDescription: string;
	category: string;
	image: string;
	gallery: string[];
	tags: string[];
	features: string[];
	standards: { title: string; description: string }[];
	accessories: ProductAccessory[];
};

export const fireDetectionProducts: Product[] = [
	{
		slug: 'previdia-micro-control-panel',
		name: 'Previdia Micro Control Panel',
		series: 'Previdia Series',
		subtitle: 'Compact, flexible, and ideal for small to medium risk applications.',
		shortDescription: 'A compact addressable fire panel designed for scalable detection networks and quick deployment.',
		longDescription:
			'The Previdia Micro Control Panel delivers exceptional installation flexibility with smart modular expandability, efficient alarm processing, and a simplified user interface for cost-conscious building protection.',
		category: 'Fire Detection Systems',
		image: previdiaMicroPanel,
		gallery: [previdiaMicroPanel, previdiaMicroExp, previdiaMicroLan, previdiaMicroDial],
		tags: ['Addressable', 'Modular', 'EN 54', 'SILENT'],
		features: [
			'Compact footprint for limited-space installations and retrofit projects.',
			'Expandable I/O and network architecture for multi-zone configurations.',
			'Clear operator interface with user-friendly event management.',
			'Optimized for distributed detection and programmable alarm logic.'
		],
		standards: [
			{ title: 'NFPA 72', description: 'Compliant with national fire alarm and signaling requirements for occupancy protection and system integrity.' },
			{ title: 'EN 54', description: 'Certified for European fire detection and control system performance and safety expectations.' },
			{ title: 'UL / CSA Ready', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
		],
		accessories: [
			{ name: 'M-EXP Module', image: previdiaMicroExp, description: 'Expandable module for extended input or output capability.' },
			{ name: 'C-COM LAN Module', image: previdiaMicroLan, description: 'High-speed communication module for local network connectivity.' },
			{ name: 'C-DIAL 4G Module', image: previdiaMicroDial, description: 'Cellular-ready communication pathway for resilient alarm transmission.' }
		]
	},
	{
		slug: 'previdia-compact-control-panel',
		name: 'Previdia Compact Control Panel',
		series: 'Previdia Series',
		subtitle: 'The compact, powerful, EN54-certified fire control panel.',
		shortDescription: 'A powerful yet compact addressable panel built for medium-sized fire protection systems.',
		longDescription:
			'The Previdia Compact Control Panel combines a compact chassis, high-performance detection engine, and robust network capability, making it an excellent basis for efficient and resilient fire alarm systems.',
		category: 'Fire Detection Systems',
		image: previdiaCompactPanel,
		gallery: [previdiaCompactPanel, previdiaCompactStudio, previdiaCompactIndocBoxClg, previdiaCompactIndocBoxCsg],
		tags: ['Compact', 'EN54', 'Networkable', 'Robust'],
		features: [
			'High-density addressable logic with streamlined panel engineering.',
			'Flexible enclosure options for installations requiring discreet or robust physical housing.',
			'Scalable event management and resilient alarm communication routes.',
			'Suitable for commercial and high-occupancy protection strategies.'
		],
		standards: [
			{ title: 'NFPA 72', description: 'Supports compliant life-safety signaling and monitored detection events across commercial sites.' },
			{ title: 'EN 54', description: 'Compliant with the operational and reliability expectations of modern fire control systems.' },
			{ title: 'Code-Driven Design', description: 'Built for programmed alerting, zoning, and central management without sacrificing installation simplicity.' }
		],
		accessories: [
			{ name: 'INDOCBOXCLG', image: previdiaCompactIndocBoxClg, description: 'Dedicated enclosure system for clean and secure installation layouts.' },
			{ name: 'INDOCBOXCSG', image: previdiaCompactIndocBoxCsg, description: 'Robust panel housing for resilient field protection and maintenance access.' },
			{ name: 'Previdia Studio', image: previdiaCompactStudio, description: 'Configuration and monitoring interface for streamlined commissioning and service workflows.' }
		]
	},
	// Removed non-R Previdia 216 variant. Only Previdia 216R remains in catalog.
	{
		slug: 'previdia-216r-control-panel',
		name: 'Previdia 216R Control Panel',
		series: 'Previdia Series',
		subtitle: 'Redundant, resilient, and engineered for demanding detection networks.',
		shortDescription: 'A resilient 216R variant purpose-built for enhanced availability and high-demand alarm environments.',
		longDescription:
			'The Previdia 216R offers the same scalable performance envelope as the 216 platform while strengthening system resilience for mission-critical operations, critical infrastructure, and facilities requiring elevated system redundancy.',
		category: 'Fire Detection Systems',
		image: previdia216R,
		gallery: [previdia216R, previdia216Cpu, previdia216LedPrn, previdia216FpmExt],
		tags: ['216R', 'Redundant', 'Resilient', 'Critical Sites'],
		features: [
			'Enhanced availability across life-safety event handling and supervisory functions.',
			'Scalable architecture suitable for high-stakes commercial and industrial environments.',
			'Durable field modularity for long-term serviceability and upgrade paths.',
			'Designed to support advanced monitoring and alarm response patterns.'
		],
		standards: [
			{ title: 'NFPA 72', description: 'Supports compliant alarm, fault, and supervisory behavior across complex facilities.' },
			{ title: 'Mission-Critical Design', description: 'Engineered with resilience in mind for highly sensitive and high-occupancy environments.' },
			{ title: 'Serviceability', description: 'Modular architecture reduces replacement cycles and supports rapid maintenance for critical assets.' }
		],
		accessories: [
			{ name: 'FPMCPU-L', image: previdia216Cpu, description: 'High-performance core controller for critical system reliability.' },
			{ name: 'FPMLEDPRN-L', image: previdia216LedPrn, description: 'Clear event display and printer interface for operational clarity.' },
			{ name: 'FPMEXT-L', image: previdia216FpmExt, description: 'Prepared expansion path for additional networks and detection zones.' }
		]
	},
	{
		slug: 'previdia-ultra-control-panel',
		name: 'Previdia Ultra Series',
		series: 'Previdia Ultra',
		subtitle: 'Premium control architecture for high-end, voice-enabled fire protection ecosystems.',
		shortDescription: 'The Ultra series delivers premium alarm integration, audio management, and high-capacity system flexibility.',
		longDescription:
			'The Previdia Ultra Series is purpose-built for advanced commercial and institutional environments where intelligent event management, speech capability, and scalable integration matter most.',
		category: 'Fire Detection Systems',
		image: previdiaUltra216R,
		gallery: [previdiaUltra216R, previdiaUltraVoxR, previdiaVoxR, previdiaUltraAmp, previdiaUltraAudio],
		tags: ['Ultra', 'Voice', 'Audio', 'Advanced'],
		features: [
			'High-capacity control with advanced event routing and system prioritization.',
			'Audio amplification and emergency communication integration capability.',
			'Built for demanding commercial properties and multi-tenant systems.',
			'Supports modern notifications and centralized management.'
		],
		standards: [
			{ title: 'NFPA 72', description: 'Engineered to meet evolving notification, alarm, and emergency signal requirements.' },
			{ title: 'Voice Evacuation Readiness', description: 'Supports emergency audio distribution for orderly occupant movement and system communication.' },
			{ title: 'Commercial Protection', description: 'Optimized for premium, code-driven protection strategies in larger installations.' }
		],
		accessories: [
			{ name: 'IFAMAMP 250 W', image: previdiaUltraAmp, description: 'Audio amplifier module delivering dependable emergency voice coverage.' },
			{ name: 'IFAMEVAC', image: previdiaUltraAudio, description: 'Audio matrix support for coordinated emergency messaging and distribution.' },
			{ name: 'Ultra VoxR', image: previdiaUltraVoxR, description: 'Premium control and voice-enabled platform for enhanced communication capability.' }
		]
	}
];

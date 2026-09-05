import packagedFireFightingSystem from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/Packaged Fire Fighting System.png';
import endSuctionPump from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/End Suction.png';
import splitCasePump from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/Split Case.png';
import containerizedFirePump from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/Containerized Fire Pump (2).png';
import fm200Industrial from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM 200 - Industrial installation.png';
import fm200System2 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM 200 fire suppression system 2.png';
import fm200System from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM 200 Fire suppression system.png';
import fm200HangingExtinguisher from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM200 10KG Automatic Hanging Fire Extingusher.png';
import localFm200 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/Local 6 kgs automatic fm 200.png';

export type SuppressionProduct = {
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
	accessories: { name: string; image: string; description: string }[];
};

export const fireSuppressionProducts: SuppressionProduct[] = [
	{
		slug: 'packaged-fire-fighting-system',
		name: 'Packaged Fire Fighting System',
		series: 'Fire Pump Systems',
		subtitle: 'Turnkey water-based suppression package for rapid deployment and stable flow management.',
		shortDescription: 'A complete packaged pumping system designed to deliver dependable pressure and flow for robust system protection.',
		longDescription:
			'The packaged fire fighting system brings together pump capacity, control, and operating logic in a carefully integrated configuration for reliable water delivery in commercial and industrial settings.',
		category: 'Fire Suppression Systems',
		image: packagedFireFightingSystem,
		gallery: [packagedFireFightingSystem, endSuctionPump, splitCasePump, containerizedFirePump],
		tags: ['Turnkey', 'Water Supply', 'Industrial', 'Reliable'],
		features: [
			'Integrated pump package for rapid setup and dependable operation.',
			'Optimized system balancing and hydraulic continuity for measured discharge performance.',
			'Compact configuration suited to building and facility protection strategies.',
			'Engineered for operational resilience and simplified maintenance access.'
		],
		standards: [
			{ title: 'NFPA 20', description: 'Designed around the fire pump requirements and hydraulic performance expectations for reliable fire service water supply.' },
			{ title: 'System Reliability', description: 'Built to deliver robust pressure and discharge continuity during emergency demand.' },
			{ title: 'Field Serviceability', description: 'Modular package layout supports maintenance, inspection, and efficient upgrades.' }
		],
		accessories: [
			{ name: 'End Suction Pump', image: endSuctionPump, description: 'Flexible pump solution for efficient pressure support across a wide range of applications.' },
			{ name: 'Split Case Pump', image: splitCasePump, description: 'High-capacity pumping arrangement designed for extended flow demand.' },
			{ name: 'Containerized Fire Pump', image: containerizedFirePump, description: 'Portable and robust enclosure system suitable for modular and temporary installation needs.' }
		]
	},
	{
		slug: 'end-suction-fire-pump',
		name: 'End Suction Fire Pump',
		series: 'Fire Pump Systems',
		subtitle: 'Efficient pumping solution for stable and responsive emergency water delivery.',
		shortDescription: 'A dependable end suction configuration for reliable pressure and discharge performance in critical water-supply systems.',
		longDescription:
			'The end suction fire pump offers a compact, efficient configuration built for projects that demand consistent pressure support and easy service access without compromising reliability.',
		category: 'Fire Suppression Systems',
		image: endSuctionPump,
		gallery: [endSuctionPump, packagedFireFightingSystem, splitCasePump, containerizedFirePump],
		tags: ['End Suction', 'High Pressure', 'Serviceable', 'Compact'],
		features: [
			'Compact pump geometry suited to practical installation in constrained plant and facility rooms.',
			'Reliable hydraulic performance for emergency discharge and sustained pressure control.',
			'Low-complexity mechanical configuration designed for easier maintenance planning.',
			'Highly suitable for essential fire protection infrastructure in commercial and industrial settings.'
		],
		standards: [
			{ title: 'NFPA 20', description: 'Aligned with pump and driver performance expectations for emergency fire protection water supply.' },
			{ title: 'Mechanical Dependability', description: 'Engineered to perform under repeated emergency duty cycles with minimal operational drift.' },
			{ title: 'Site Readiness', description: 'Supports practical installation and smooth alignment with system piping and control layouts.' }
		],
		accessories: [
			{ name: 'Packaged Fire Fighting System', image: packagedFireFightingSystem, description: 'Integrated package for a complete water-distribution and control arrangement.' },
			{ name: 'Split Case Pump', image: splitCasePump, description: 'Alternative high-volume pumping configuration for larger system demand.' },
			{ name: 'Containerized Fire Pump', image: containerizedFirePump, description: 'Modular, durable configuration for elevated portability or limited-site constraints.' }
		]
	},
	{
		slug: 'split-case-fire-pump',
		name: 'Split Case Fire Pump',
		series: 'Fire Pump Systems',
		subtitle: 'High-capacity pump system for larger water-demand applications and demanding infrastructure.',
		shortDescription: 'A robust split case pump platform built for higher flow, resilient support, and long-term operational continuity.',
		longDescription:
			'The split case fire pump supports more demanding water delivery needs with balanced hydraulic design, strong mechanical durability, and a system layout suited to complex fire protection installations.',
		category: 'Fire Suppression Systems',
		image: splitCasePump,
		gallery: [splitCasePump, endSuctionPump, packagedFireFightingSystem, containerizedFirePump],
		tags: ['High Flow', 'Industrial', 'Robust', 'Demanding'],
		features: [
			'High-flow characteristics suitable for larger facilities and higher-demand water systems.',
			'Stable performance across long-duration emergency operation.',
			'Designed for dependable mechanical service in critical applications.',
			'Built to integrate smoothly with larger suppression control and water distribution strategies.'
		],
		standards: [
			{ title: 'NFPA 20', description: 'Supports code-driven installation and operational expectations for essential fire service pumps.' },
			{ title: 'Hydraulic Continuity', description: 'Maintains stable pressure characteristics under elevated system demand and emergency drawdown.' },
			{ title: 'Mission Critical', description: 'Suited to facilities where dependable full-flow performance is essential to resilience.' }
		],
		accessories: [
			{ name: 'End Suction Pump', image: endSuctionPump, description: 'Compact alternative for lower-to-medium hydraulic demand conditions.' },
			{ name: 'Containerized Fire Pump', image: containerizedFirePump, description: 'For modular or site-constrained emergency supply arrangements.' },
			{ name: 'Packaged Fire Fighting System', image: packagedFireFightingSystem, description: 'Complete integrated water supply package centred around efficiency and resilience.' }
		]
	},
	{
		slug: 'containerized-fire-pump',
		name: 'Containerized Fire Pump',
		series: 'Fire Pump Systems',
		subtitle: 'Portable, durable fire pump configuration for resilient deployment and reduced installation complexity.',
		shortDescription: 'A preassembled and transportable fire pump package offering practical deployment in demanding conditions.',
		longDescription:
			'The containerized fire pump package is designed for sites requiring robust fire-water support with high portability, mechanical strength, and dependable installation simplicity.',
		category: 'Fire Suppression Systems',
		image: containerizedFirePump,
		gallery: [containerizedFirePump, packagedFireFightingSystem, splitCasePump, endSuctionPump],
		tags: ['Portable', 'Modular', 'Resilient', 'Deployment'],
		features: [
			'Pre-integrated system reduces on-site installation time and coordination complexity.',
			'Transport-friendly structure supports flexible project conditions and temporary installations.',
			'Meets operational expectations for emergency pumping under strict site readiness demands.',
			'Provides durable protection for projects requiring mobility and reliability.'
		],
		standards: [
			{ title: 'NFPA 20', description: 'Developed around the core principles of fire pump reliability, duty support, and emergency readiness.' },
			{ title: 'Operational Flexibility', description: 'Supports variable site conditions with dependable emergency water delivery performance.' },
			{ title: 'Deployment Readiness', description: 'Designed to help contractors and facility operators mobilize protection quickly and efficiently.' }
		],
		accessories: [
			{ name: 'Packaged Fire Fighting System', image: packagedFireFightingSystem, description: 'A turnkey emergency water system for integrated facilities and large infrastructures.' },
			{ name: 'End Suction Pump', image: endSuctionPump, description: 'A compact alternative that supports lower-to-mid volume operation needs.' },
			{ name: 'Split Case Pump', image: splitCasePump, description: 'A large-capacity option for high-demand fire-water applications.' }
		]
	},
	{
		slug: 'fm200-fire-suppression-system',
		name: 'FM200 Fire Suppression System',
		series: 'Clean Agent Systems',
		subtitle: 'Cleansing, efficient gaseous suppression for mission-critical rooms and equipment spaces.',
		shortDescription: 'A clean agent extinguishing system designed for high-value spaces, electronics, and protected asset environments.',
		longDescription:
			'The FM200 clean agent suppression system is ideal for protecting rooms where water-based systems are impractical and rapid suppression is critical. It delivers fast occupant-safe extinguishing without the residual damage associated with conventional methods.',
		category: 'Fire Suppression Systems',
		image: fm200System,
		gallery: [fm200System, fm200Industrial, fm200System2, fm200HangingExtinguisher, localFm200],
		tags: ['Clean Agent', 'FM200', 'Sensitive Equipment', 'Fast Suppression'],
		features: [
			'Rapid extinguishing without damaging sensitive critical equipment or electronics.',
			'Ideal for server rooms, electrical rooms, and high-value asset protection spaces.',
			'Clean discharge profile supports non-destructive fire control for valuable environments.',
			'Engineered for practical design and dependable fire event response.'
		],
		standards: [
			{ title: 'NFPA 2001', description: 'Designed around the operational and safety standard for clean agent fire extinguishing systems.' },
			{ title: 'Equipment Protection', description: 'A well-suited answer for protecting high-value rooms where water can be damaging or impractical.' },
			{ title: 'Code-Conscious Design', description: 'Supports modern suppression planning within regulated commercial and critical infrastructure projects.' }
		],
		accessories: [
			{ name: 'FM200 Industrial Installation', image: fm200Industrial, description: 'Configuration for large-scale industrial and protected asset spaces.' },
			{ name: 'FM200 10KG Hanging Extinguisher', image: fm200HangingExtinguisher, description: 'Compact local agent option for targeted equipment rooms and enclosed hazard areas.' },
			{ name: 'Local 6kg FM200', image: localFm200, description: 'Flexible small-format suppression package for precise room-level protection.' }
		]
	},
	{
		slug: 'local-fm200-suppression',
		name: 'Local 6kg FM200 System',
		series: 'Clean Agent Systems',
		subtitle: 'Compact clean-agent protection for critical enclosed spaces.',
		shortDescription: 'A compact, local FM200 arrangement designed to suppress hazards in small but high-value rooms.',
		longDescription:
			'For enclosed assets and smaller high-risk zones, the local 6kg FM200 system offers dependable suppression with minimal footprint and efficient placement flexibility.',
		category: 'Fire Suppression Systems',
		image: localFm200,
		gallery: [localFm200, fm200HangingExtinguisher, fm200System, fm200System2],
		tags: ['Local', 'Compact', 'FM200', 'High Value'],
		features: [
			'Compact footprint suited to small electrical and mission-critical spaces.',
			'Fast suppression for enclosed accommodation of sensitive equipment.',
			'Designed for minimal operational disruption and reduced residual damage.',
			'Ideal for selective installation in contained fire-prone areas.'
		],
		standards: [
			{ title: 'NFPA 2001', description: 'Built to meet the key expectations for engineered clean-agent systems in protected spaces.' },
			{ title: 'Asset Protection', description: 'Supports the protection of critical electronic environments without water exposure risk.' },
			{ title: 'Operational Safety', description: 'Provides a focused suppression philosophy for discrete room protection strategies.' }
		],
		accessories: [
			{ name: 'FM200 Industrial Installation', image: fm200Industrial, description: 'Broader system arrangement for more extensive protected areas.' },
			{ name: 'FM200 Fire Suppression System', image: fm200System, description: 'General clean-agent arrangement suitable for larger protected spaces.' },
			{ name: 'FM200 10KG Hanging Extinguisher', image: fm200HangingExtinguisher, description: 'A local, overhead-installed unit for rapid mission-critical coverage.' }
		]
	}
];

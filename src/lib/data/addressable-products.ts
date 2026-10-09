import type { Product } from './products';

// Addressable Alarm Call Points
import ec0012eOutdoor from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/EC0012E outdoor manual call point – alarm activation with integrated micro module.webp';
import ec0020Visible from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/EC0020 manual call point - visible alarm activation and easy key reset.webp';
import ec0020xColored from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/EC0020x and EC0030x Colored Manual Buttons  Dedicated Indication for Special Systems.webp';
import eneaCallPoints from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/Manual Call Points – Enea Series.png';

// Addressable Signalling Devices
import addrSignalling from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Addressable Signalling Devices/Addressable Signalling Devices.png';
import es2000Module from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Addressable Signalling Devices/ES2000.png';

// Apollo Series Detectors
import apolloModules from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/Addressable modules and interfaces for fire detection systems.webp';
import apolloDetectors from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/Apollo Series Detectors.png';
import xp95HighPerf from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/High-performance XP95 analog addressable fire detectors for complete protection.png';
import xp95Bases from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/Mounting Bases for XP95 Detectors.webp';
import xp95CallPoints from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/XP95 Apollo addressable call points.webp';
import xp95VisualAudible from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/XP95 visual and visual audible alarm devices.webp';

// Argus Series Detectors
import alcpCallPoint from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/ALCP100 and AI-CPW-R-01 Call point.webp';
import altairDetectors from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Altair fire detectors- smoke, heat and multi-sensor models.webp';
import argusDevices from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Argus Series Devices.png';
import argusModules from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Argus Series Modules.webp';
import argusBases from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Fire detector bases-  standard models and versions with visual or visual audible indicators.webp';
import argusVisualAudible from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Visual-audible signalling devices from the Argus line.webp';

// Enea Mounting Bases and Accessories
import esb1000Bases from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/ESB1000 and ISB1000 Bases.png';
import eb0010eb0020Bases from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0010 and EB0020 Mounting Bases.png';
import eb0010Base from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0010 Mounting base for detectors.png';
import eb0020RelayBase from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0020 Relay mounting base for detectors with alarm output.png';
import eb0060Base from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0060 Mounting base with integrated buzzer.png';

// Enea Series Detectors
import ed100Addr from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Series Detectors/ED100.png';
import ed200Addr from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Series Detectors/ED200.png';
import ed300Addr from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Series Detectors/ED300.png';

export const addressableProducts: Product[] = [
  // Addressable Alarm Call Points
  {
    id: 'ec0012e-outdoor-manual-call-point',
    name: 'EC0012E Outdoor Manual Call Point',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'addressable-call-points',
    image: ec0012eOutdoor,
    description:
      'Rugged outdoor manual call point engineered for reliable alarm activation in exposed conditions; designed to meet NFPA guidelines for manual initiating devices and suitable for IP-rated installations.',
    features: [
      'Weatherproof IP-rated enclosure for outdoor installation',
      'Tamper-resistant and key-reset option',
      'Visual LED status indication for positive confirmation',
      'Low-profile mounting compatible with standard back boxes'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'ec0020-manual-call-point-visible-alarm',
    name: 'EC0020 Manual Call Point (Visible Alarm)',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'addressable-call-points',
    image: ec0020Visible,
    description:
      'Flush or surface-mount manual call point with highly visible alarm indication, designed to integrate with addressable loops while complying with NFPA requirements for manual activation and identification.',
    features: [
      'Clear visual alarm indicator for rapid location recognition',
      'Simple key-reset mechanism for fast servicing',
      'Compact footprint for easy mounting in occupied spaces',
      'Addressable loop compatibility with supervised circuits'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'ec0020x-ec0030x-colored-manual-buttons',
    name: 'EC0020x / EC0030x Colored Manual Buttons',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'addressable-call-points',
    image: ec0020xColored,
    description:
      'Modular colored manual buttons for zoned or special-purpose systems where dedicated indication and rapid visual differentiation are required by NFPA guidance.',
    features: [
      'Multiple color options for dedicated system indications',
      'Low profile, vandal-resistant design',
      'Simple address assignment on compatible loops',
      'Robust switching mechanism for long service life'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'enea-manual-call-points-collection',
    name: 'Manual Call Points – Enea Series',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'addressable-call-points',
    image: eneaCallPoints,
    description:
      'Enea series manual call points offering flexible mounting and clear actuation feedback; engineered to meet NFPA placement and accessibility recommendations for manual initiating devices.',
    features: [
      'Flush and surface-mount options',
      'Audible and visual feedback on activation',
      'High-contrast labelling for accessibility',
      'Engineered for easy maintenance and replacement'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },

  // Addressable Signalling Devices
  {
    id: 'addressable-signalling-devices',
    name: 'Addressable Signalling Devices',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'addressable-signalling-devices',
    image: addrSignalling,
    description:
      'Integrated signalling devices providing supervised visual and audible alerts on addressable loops; specified to align with NFPA egress notification performance and audibility criteria.',
    features: [
      'Selectable sounder tones and volume settings',
      'Synchronized multi-device signalling capability',
      'Low-current operation for loop efficiency',
      'Compact form factors for discreet installation'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'es2000-addressable-signalling-module',
    name: 'ES2000 Signalling Module',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'addressable-signalling-devices',
    image: es2000Module,
    description:
      'High-reliability signalling module for addressable loops, engineered for predictable alarm signalling and easy integration with NFPA-compliant notification schemes.',
    features: [
      'Supervised output with fault reporting',
      'Configurable cadence profiles',
      'Robust transient protection',
      'Wide operating temperature range'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },

  // Apollo Series Detectors
  {
    id: 'apollo-modules-and-interfaces',
    name: 'Apollo Modules & Interfaces',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'apollo-series-detectors',
    image: apolloModules,
    description:
      'Range of Apollo modules and interface devices to extend loop functionality while preserving NFPA-conformant detection and reporting behaviour.',
    features: [
      'Protocol converters and supervised interfaces',
      'Relay and monitoring module options',
      'Compact DIN-rail friendly designs',
      'Clear diagnostic LEDs for field servicing'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'apollo-series-detectors',
    name: 'Apollo Series Detectors',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'apollo-series-detectors',
    image: apolloDetectors,
    description:
      'Industry-standard Apollo detectors delivering consistent sensitivity and proven detection algorithms required by NFPA for life-safety systems.',
    features: [
      'Proven optical and multi-criteria sensing',
      'Field-configurable sensitivity levels',
      'Low false alarm characteristics',
      'Wide range of bases and accessories available'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'xp95-high-performance',
    name: 'High-performance XP95 Detectors',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'apollo-series-detectors',
    image: xp95HighPerf,
    description:
      'XP95 series detectors offering advanced analogue sensing and rapid, NFPA-compliant alarm reporting for complex environments.',
    features: [
      'Analogue measurement with drift compensation',
      'High immunity to transient events',
      'Wide field-of-view optical chambers',
      'Compatible with XP95 loop modules and bases'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'xp95-mounting-bases',
    name: 'Mounting Bases for XP95 Detectors',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'apollo-series-detectors',
    image: xp95Bases,
    description:
      'Range of mounting bases for XP95 detectors providing secure electrical and mechanical connections while facilitating NFPA-recommended serviceability.',
    features: [
      'Standard and relay bases available',
      'Quick-fit locking mechanism',
      'Integrated wiring channels',
      'Corrosion-resistant finishes for long service life'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'xp95-apollo-call-points',
    name: 'XP95 Apollo Addressable Call Points',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'apollo-series-detectors',
    image: xp95CallPoints,
    description:
      'Addressable call points designed to operate on XP95 loops offering clear actuation and loop supervision required for NFPA-compliant systems.',
    features: [
      'Loop-supervised contact with fault reporting',
      'High-visibility actuation element',
      'Robust construction for public areas',
      'Easy reset and maintenance access'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'xp95-visual-audible-devices',
    name: 'XP95 Visual & Audible Alarm Devices',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'apollo-series-detectors',
    image: xp95VisualAudible,
    description:
      'Combined visual and audible devices compatible with XP95 addressing, specified to meet NFPA notification appliance performance for occupied spaces.',
    features: [
      'Selectable tones and cadence profiles',
      'High-intensity LED visual indicators',
      'Surface and flush mounting options',
      'Low current draw for loop efficiency'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },

  // Argus Series Detectors
  {
    id: 'alcp100-ai-cpw-r-01-call-point',
    name: 'ALCP100 / AI-CPW-R-01 Call Point',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'argus-series-detectors',
    image: alcpCallPoint,
    description:
      'High-integrity call points from the Argus family providing reliable activation and supervised loop reporting in accordance with NFPA placement and accessibility guidance.',
    features: [
      'Loop supervision with fault reporting',
      'Robust IP-rated enclosures',
      'Tamper-resistant mounting',
      'Clear LED activation confirmation'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'altair-fire-detectors',
    name: 'Altair Fire Detectors (Smoke, Heat, Multisensor)',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'argus-series-detectors',
    image: altairDetectors,
    description:
      'Altair multisensor and single-criteria detectors offering flexible detection strategies for NFPA-compliant life-safety designs.',
    features: [
      'Multi-criteria sensing for reduced false alarms',
      'Fast thermal detection variant',
      'Field-configurable sensitivity profiles',
      'Robust contaminants immunity'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'argus-series-devices',
    name: 'Argus Series Devices',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'argus-series-detectors',
    image: argusDevices,
    description:
      'Complete Argus family providing detection, signalling and mounting solutions for comprehensive NFPA-guided system designs.',
    features: [
      'Wide product range for different environments',
      'Standardised mounting and wiring interfaces',
      'Long-term reliability and stability',
      'Extensive accessory support'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'argus-series-modules',
    name: 'Argus Series Modules',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'argus-series-detectors',
    image: argusModules,
    description:
      'Interface and expansion modules for Argus detectors enabling relay outputs, input monitoring and specialised signalling in NFPA-compliant installations.',
    features: [
      'Relay and supervised input modules',
      'DIN-rail and plate mounting variants',
      'Clear status diagnostics',
      'High MTBF design for critical applications'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'argus-detector-bases',
    name: 'Argus Detector Bases (Standard Models)',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'argus-series-detectors',
    image: argusBases,
    description:
      'Standard and specialised bases for Argus detectors offering reliable mechanical and electrical connections and support for notification accessories per NFPA recommendations.',
    features: [
      'Standard and visual/audible-compatible bases',
      'Secure locking and alignment features',
      'Pre-wired loop terminals for fast installation',
      'Durable, high-temp resin construction'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'argus-visual-audible-signalling',
    name: 'Argus Visual-Audible Signalling Devices',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'argus-series-detectors',
    image: argusVisualAudible,
    description:
      'Combined visual and audible signalling devices compatible with Argus bases and modules; engineered to deliver NFPA-compliant notification performance in public and industrial spaces.',
    features: [
      'High-decibel sounders with selectable profiles',
      'Vivid LED visual alerting',
      'Surface and flush mounting kits',
      'Low power consumption for loop-based systems'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },

  // Enea Mounting Bases and Accessories
  {
    id: 'eb0010-eb0020-mounting-bases',
    name: 'EB0010 / EB0020 Mounting Bases',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-mounting-bases',
    image: eb0010eb0020Bases,
    description:
      'Combined illustration of EB0010 and EB0020 mounting bases offering relay and standard base choices conforming to NFPA mechanical and electrical attachment standards.',
    features: [
      'Relay-equipped and standard bases',
      'Robust contactors for secure signal flow',
      'Easy wiring access for installers',
      'Compatible with Enea detector series'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'eb0010-mounting-base',
    name: 'EB0010 Mounting Base',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-mounting-bases',
    image: eb0010Base,
    description:
      'Standard EB0010 base providing secure mechanical support and reliable electrical interface for Enea detectors as specified by NFPA mounting practice.',
    features: [
      'Secure bayonet locking',
      'Standard screw terminals',
      'Heat-resistant polymer construction',
      'Compatible with detector tamper features'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'eb0020-relay-mounting-base',
    name: 'EB0020 Relay Mounting Base',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-mounting-bases',
    image: eb0020RelayBase,
    description:
      'EB0020 relay base enabling local relay outputs for interface with ancillary equipment while complying with NFPA requirements for supervised signalling.',
    features: [
      'Form-C relay contact output',
      'Positive mechanical lock for detector',
      'Test and service facilitation',
      'Wide operating temperature range'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'eb0060-mounting-base-with-isolator',
    name: 'EB0060 Mounting Base with Integrated Isolator',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-mounting-bases',
    image: eb0060Base,
    description:
      'EB0060 base with integrated isolation/buzzer option to maintain loop integrity and provide local audible indication per NFPA system robustness recommendations.',
    features: [
      'Integrated buzzer for local alerting',
      'Loop-isolation capability for fault tolerance',
      'Compact mounting footprint',
      'Field-serviceable components'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'esb1000-isb1000-bases',
    name: 'ESB1000 & ISB1000 Bases',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-mounting-bases',
    image: esb1000Bases,
    description:
      'Heavy-duty ESB1000/ISB1000 bases designed for specialised environments requiring enhanced mechanical protection and NFPA-aligned mounting reliability.',
    features: [
      'Enhanced environmental sealing',
      'High-temperature tolerant materials',
      'Large wiring compartments',
      'Secure locking to resist accidental removal'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },

  // Enea Series Detectors
  {
    id: 'enea-ed100-detector',
    name: 'Enea ED100 Detector',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-series-detectors',
    image: ed100Addr,
    description:
      'ED100 optical detector delivering reliable smoke detection performance for life-safety applications and designed to satisfy NFPA sensitivity and reporting expectations.',
    features: [
      'Optical chamber with contamination tolerance',
      'Low profile for concealed mounting',
      'Field-configurable sensitivity',
      'Easy-clean service access'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'enea-ed200-detector',
    name: 'Enea ED200 Detector',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-series-detectors',
    image: ed200Addr,
    description:
      'ED200 multi-criteria detector offering combined optical and thermal sensing to reduce nuisance alarms while meeting NFPA coverage requirements.',
    features: [
      'Multi-criteria sensing algorithm',
      'Enhanced false-alarm rejection',
      'Wide temperature compensation range',
      'Compatibility with standard Enea bases'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'enea-ed300-detector',
    name: 'Enea ED300 Detector',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'enea-series-detectors',
    image: ed300Addr,
    description:
      'ED300 high-performance detector for demanding environments where rapid detection and robust reporting are required by NFPA for critical protection zones.',
    features: [
      'High-sensitivity optical chamber',
      'Fast thermal response variant available',
      'On-board diagnostics for health reporting',
      'Long-term stability and low drift'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  }
];

export default addressableProducts;
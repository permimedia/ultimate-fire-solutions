export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  image: string;
  description: string;
  features: string[];
  certifications: string[];
  // Rich content fields (merged from legacy)
  series?: string;
  subtitle?: string;
  shortDescription?: string;
  longDescription?: string;
  gallery?: string[];
  tags?: string[];
  standards?: { title: string; description: string }[];
  accessories?: { name: string; image: string; description: string }[];
}

import previdia216 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/Previdia216R.png';
import previdia216Cpu from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/FPMCPU-L.png';
import previdia216LedPrn from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/FPMLEDPRN-L.png';
import previdia216FpmExt from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia 216, and  216R and its accessories/FPMEXT-L.png';
import previdiaMicro from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/Previdia Micro Control Panel.png';
import previdiaMicroExp from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/M-EXP Module.png';
import previdiaMicroLan from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/Previdia C-COM LAN module.png';
import previdiaMicroDial from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Micro Control Panel and its accessories/Previdia C-DIAL 4G Module.png';
import previdiaUltra216R from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/Previdia-Ultra216R.png';
import previdiaUltraVoxR from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/Previdia-UltraVoxR.png';
import previdiaVoxR from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/Previdia-VoxR.png';
import previdiaUltraAmp from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/IFAMAMP 250 W Audio amplifier module.png';
import previdiaUltraAudio from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Ultra Series/IFAMEVAC Audio matrix module.png';

import hp320 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Emergency Lighting/HP320 Emergency Exit Luminaire.png';
import previdiaCompact from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/Previdia Compact Control Panel.png';
import previdiaCompactIndocBoxClg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/INDOCBOXCLG.png';
import previdiaCompactIndocBoxCsg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/INDOCBOXCSG.png';
import previdiaCompactStudio from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Previdia Compact Control Panel and its accessories/Previdia Compact the compact, powerful, EN54-certified fire control panel.png';
import ed100 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Analogue Devices/Enea Series Detectors/ED100.png';
import ed200 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Analogue Devices/Enea Series Detectors/ED200.png';
import ed300 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Analogue Devices/Enea Series Detectors/ED300.png';
import eneaCallPoint from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/Manual Call Points – Enea Series.png';
import eb0010 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0010 Mounting base for detectors.png';
import eb0020 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0020 Relay mounting base for detectors with alarm output.png';
import eb0060 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0060 Mounting base with integrated buzzer.png';
import apolloImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/Apollo Series Detectors.png';
import argusImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Argus Series Devices.png';
import es2000 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Addressable Signalling Devices/ES2000.png';
import smartlineImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Smartline/SmartLine036-4.webp';

import packagedFireFightingSystem from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/Packaged Fire Fighting System.png';
import endSuctionPump from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/End Suction.png';
import splitCasePump from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/Split Case.png';
import containerizedFirePump from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Fire Pumps/Containerized Fire Pump (2).png';
import fm200Industrial from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM 200 - Industrial installation.png';
import fm200System2 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM 200 fire suppression system 2.png';
import fm200System from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM 200 Fire suppression system.png';
import fm200HangingExtinguisher from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/FM200 10KG Automatic Hanging Fire Extingusher.png';
import localFm200 from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/Local 6 kgs automatic fm 200.png';
import fireExtinguishers from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/FM 200 FIRE SUPPRESSION SYSTEMS/Fire Extinguishers.png';

import addrSignallingImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Addressable Signalling Devices/Addressable Signalling Devices.png';
import apolloModulesImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/Addressable modules and interfaces for fire detection systems.webp';
import apolloXp95VisualImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/XP95 visual and visual audible alarm devices.webp';
import apolloCallPointsImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/XP95 Apollo addressable call points.webp';
import apolloMountingBasesImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/Mounting Bases for XP95 Detectors.webp';

import argusVisualAudibleImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Visual-audible signalling devices from the Argus line.webp';
import argusBasesImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Fire detector bases-  standard models and versions with visual or visual audible indicators.webp';
import argusModulesImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Argus Series Modules.webp';
import argusAltairImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/Altair fire detectors- smoke, heat and multi-sensor models.webp';
import alcpImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Argus Series Detectors/ALCP100 and AI-CPW-R-01 Call point.webp';

import ec0020xImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/EC0020x and EC0030x Colored Manual Buttons  Dedicated Indication for Special Systems.webp';
import ec0020Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/EC0020 manual call point - visible alarm activation and easy key reset.webp';
import ec0012eImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/addressable alarm call points/EC0012E outdoor manual call point – alarm activation with integrated micro module.webp';

import esb1000Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/ESB1000 and ISB1000 Bases.png';
import eb0010andeb0020Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Mounting Bases and Accessories/EB0010, EB0020 and EB0060 Mounting Bases/EB0010 and EB0020 Mounting Bases.png';

import emergencyShowcaseImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Emergency Lighting/Emergency Lighting Product Showcase.png';
import xp95HighImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Apollo Series Detectors/High-performance XP95 analog addressable fire detectors for complete protection.png';
import ed100b from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Series Detectors/ED100.png';
import ed200b from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Series Detectors/ED200.png';
import ed300b from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/Addressable Devices/Enea Series Detectors/ED300.png';

import irisManualCollectionImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/Iris Series Manual Call Points Collection.png';
import ick010Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/ICK010  keyswitch.webp';
import icb010Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/ICB010  non-latching manual call point with automatic reset.webp';
import ic0020Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/IC0020   -resettable manual call point with LED visual indication.webp';
import ic0012e_convImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/IC0012E Quick-Activation Manual Alarm Button.webp';
import ic0012_convImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/IC0012  IP67 Manual call point for outdoor use.webp';
import convDetectorLineupImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/Conventional Devices Detector Lineup.png';

import id300Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Iris Series Detectors/ID 300.png';
import id200Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Iris Series Detectors/ID 200.png';
import id100Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Iris Series Detectors/ID 100.png';

import is2021reImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Conventional Signalling Devices/IS2021RE.png';
import is2000Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Conventional Signalling Devices/IS2000.png';

import apolloConv1Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Apollo Series Conventional Detectors/Orbis Series Marine-certified addressable devices.webp';
import apolloConv2Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Apollo Series Conventional Detectors/Orbis Marine Fire Detection Collection.png';
import apolloConv3Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Apollo Series Conventional Detectors/Marine-certified loop modules.webp';
import apolloConv4Img from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Apollo Series Conventional Detectors/Marine-certified conventional call points from the Orbis Series.webp';
import irisShowcaseImg from '$lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Iris Series Detectors/Iris Series Detector Showcase.png';

export const categories = [
  {
    id: 'addressable-fire-alarm-systems',
    name: 'Addressable Fire Alarm Systems',
    description: 'Advanced intelligent analogue addressable fire detection systems built for scalability and precise location reporting.',
    route: '/products/fire-and-safety/fire-detection-systems',
    subcategories: [
      { id: 'control-panels', name: 'Control Panels' },
      { id: 'enea-series-detectors', name: 'Enea Series Detectors' },
      { id: 'apollo-series-detectors', name: 'Apollo Series Detectors' },
      { id: 'argus-series-detectors', name: 'Argus Series Detectors' },
      { id: 'addressable-call-points', name: 'Addressable Call Points' },
      { id: 'addressable-signalling-devices', name: 'Addressable Signalling Devices' },
      { id: 'enea-mounting-bases', name: 'Enea Mounting Bases and Accessories' }
    ]
  },
  {
    id: 'conventional-fire-alarm-systems',
    name: 'Conventional Fire Alarm Systems',
    description: 'Robust, compliant conventional fire panels, detectors, call points, and beacons ideal for commercial buildings.',
    route: '/products/fire-and-safety/conventional-control-panels',
    subcategories: [
      { id: 'conventional-control-panels', name: 'Conventional Control Panels' },
      { id: 'iris-series-detectors', name: 'Iris Series Detectors' },
      { id: 'manual-call-points-iris-series', name: 'Manual Call Points – Iris Series' },
      { id: 'conventional-signalling-devices', name: 'Conventional Signalling Devices' },
      { id: 'apollo-series-conventional-detectors', name: 'Apollo Series Conventional Detectors' }
    ]
  },
  {
    id: 'extinguishing-systems',
    name: 'Extinguishing Systems',
    description: 'Gaseous fire suppression and control panels engineered to NFPA standards for critical assets.',
    subcategories: [
      { id: 'fm200-systems', name: 'FM 200 Fire Suppression System' },
      { id: 'local-6kg-fm200', name: 'Local 6kg FM200 System' },
      { id: 'industrial-installations', name: 'FM200 Industrial Installation' },
      { id: 'fire-extinguishers', name: 'Fire Extinguishers' }
    ]
  },
  {
    id: 'fire-pumps',
    name: 'Fire Pumps',
    description: 'Reliable pump packages for elevated-pressure fire protection systems.',
    subcategories: [
      { id: 'containerized-fire-pump', name: 'Containerized Fire Pump' },
      { id: 'packaged-system', name: 'Packaged Fire Fighting System' },
      { id: 'end-suction-pump', name: 'End Suction Fire Pump' },
      { id: 'split-case-pump', name: 'Split Case Fire Pump' }
    ]
  },
  {
    id: 'emergency-lighting',
    name: 'Emergency Lighting',
    description: 'Self-contained and centralized emergency exit luminaires ensuring safe evacuation route illumination.',
    subcategories: [
      { id: 'exit-luminaires', name: 'Emergency Exit Luminaires' },
      { id: 'lighting-showcase', name: 'Lighting Product Showcase' }
    ]
  }
];

export const products: Product[] = [
  {
    id: 'previdia-216r-control-panel',
    name: 'Previdia 216R Control Panel',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'control-panels',
    image: previdia216,
    description: 'A resilient 216R variant purpose-built for enhanced availability and high-demand alarm environments.',
    features: [
      'Enhanced availability across life-safety event handling and supervisory functions.',
      'Scalable architecture suitable for high-stakes commercial and industrial environments.',
      'Durable field modularity for long-term serviceability and upgrade paths.',
      'Designed to support advanced monitoring and alarm response patterns.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Previdia Series',
    subtitle: 'Redundant, resilient, and engineered for demanding detection networks.',
    shortDescription: 'A resilient 216R variant purpose-built for enhanced availability and high-demand alarm environments.',
    longDescription: 'The Previdia 216R offers the same scalable performance envelope as the 216 platform while strengthening system resilience for mission-critical operations, critical infrastructure, and facilities requiring elevated system redundancy.',
    gallery: [previdia216, previdia216Cpu, previdia216LedPrn, previdia216FpmExt],
    tags: ['216R', 'Redundant', 'Resilient', 'Critical Sites'],
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
    id: 'previdia-compact-control-panel',
    name: 'Previdia Compact Control Panel',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'control-panels',
    image: previdiaCompact,
    description: 'A powerful yet compact addressable panel built for medium-sized fire protection systems.',
    features: [
      'High-density addressable logic with streamlined panel engineering.',
      'Flexible enclosure options for installations requiring discreet or robust physical housing.',
      'Scalable event management and resilient alarm communication routes.',
      'Suitable for commercial and high-occupancy protection strategies.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Previdia Series',
    subtitle: 'The compact, powerful, EN54-certified fire control panel.',
    shortDescription: 'A powerful yet compact addressable panel built for medium-sized fire protection systems.',
    longDescription: 'The Previdia Compact Control Panel combines a compact chassis, high-performance detection engine, and robust network capability, making it an excellent basis for efficient and resilient fire alarm systems.',
    gallery: [previdiaCompact, previdiaCompactStudio, previdiaCompactIndocBoxClg, previdiaCompactIndocBoxCsg],
    tags: ['Compact', 'EN54', 'Networkable', 'Robust'],
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
  {
    id: 'previdia-ultra-control-panel',
    name: 'Previdia Ultra Series',
    category: 'addressable-fire-alarm-systems',
    subCategory: 'control-panels',
    image: previdiaUltra216R,
    description: 'The Ultra series delivers premium alarm integration, audio management, and high-capacity system flexibility.',
    features: [
      'High-capacity control with advanced event routing and system prioritization.',
      'Audio amplification and emergency communication integration capability.',
      'Built for demanding commercial properties and multi-tenant systems.',
      'Supports modern notifications and centralized management.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Previdia Ultra',
    subtitle: 'Premium control architecture for high-end, voice-enabled fire protection ecosystems.',
    shortDescription: 'The Ultra series delivers premium alarm integration, audio management, and high-capacity system flexibility.',
    longDescription: 'The Previdia Ultra Series is purpose-built for advanced commercial and institutional environments where intelligent event management, speech capability, and scalable integration matter most.',
    gallery: [previdiaUltra216R, previdiaUltraVoxR, previdiaVoxR, previdiaUltraAmp, previdiaUltraAudio],
    tags: ['Ultra', 'Voice', 'Audio', 'Advanced'],
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
  },
  {
    id: 'hp320-emergency-exit-luminaire',
    name: 'HP320 Emergency Exit Luminaire',
    category: 'emergency-lighting',
    subCategory: 'exit-luminaires',
    image: hp320,
    description: 'High-performance LED emergency exit luminaire for directional evacuation signage.',
    features: ['High-efficiency LED array', '3-hour emergency battery backup', 'Wall and ceiling mounting options'],
    certifications: ['UL Listed', 'CE Marked']
  },
  {
    id: 'smartline-control-panel',
    name: 'SmartLine Control Panel',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'conventional-control-panels',
    image: smartlineImg,
    description: 'A zone-based conventional fire alarm control panel designed for straightforward detection solutions in commercial and industrial buildings.',
    features: [
      'Zone-based architecture for simplified circuit supervision and fault isolation.',
      'Streamlined commissioning workflow for reduced installation time.',
      'Clear operator interface with intuitive event and status management.',
      'Robust design suited for dependable routine occupancy protection.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'SmartLine Series',
    subtitle: 'Zone-based conventional control for straightforward, dependable building protection.',
    shortDescription: 'A zone-based conventional fire alarm control panel designed for straightforward detection solutions in commercial and industrial buildings.',
    longDescription: 'The SmartLine Control Panel delivers dependable zone-based conventional fire detection with simplified commissioning, clear operator feedback, and robust performance for routine commercial and industrial protection strategies.',
    gallery: [smartlineImg],
    tags: ['Conventional', 'Zone-based', 'Easy commissioning', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional alarm, supervisory, and fault behavior across occupied commercial buildings.' },
      { title: 'EN 54', description: 'Compliant with European conventional fire detection and control system performance expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'previdia-micro-control-panel',
    name: 'Previdia Micro Control Panel',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'conventional-control-panels',
    image: previdiaMicro,
    description: 'A compact addressable fire panel designed for scalable detection networks and quick deployment.',
    features: [
      'Compact footprint for limited-space installations and retrofit projects.',
      'Expandable I/O and network architecture for multi-zone configurations.',
      'Clear operator interface with user-friendly event management.',
      'Optimized for distributed detection and programmable alarm logic.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Previdia Series',
    subtitle: 'Compact, flexible, and ideal for small to medium risk applications.',
    shortDescription: 'A compact addressable fire panel designed for scalable detection networks and quick deployment.',
    longDescription: 'The Previdia Micro Control Panel delivers exceptional installation flexibility with smart modular expandability, efficient alarm processing, and a simplified user interface for cost-conscious building protection.',
    gallery: [previdiaMicro, previdiaMicroExp, previdiaMicroLan, previdiaMicroDial],
    tags: ['Addressable', 'Modular', 'EN 54', 'SILENT'],
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
    id: 'emergency-lighting-showcase',
    name: 'Emergency Lighting Product Showcase',
    category: 'emergency-lighting',
    subCategory: 'lighting-showcase',
    image: emergencyShowcaseImg,
    description: 'Showcase of emergency luminaires and lighting products.',
    features: ['Exit signs', 'Bulkhead luminaires'],
    certifications: []
  },
  {
    id: 'ic0020-resettable-call-point',
    name: 'IC0020 Resettable Manual Call Point',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'manual-call-points-iris-series',
    image: ic0020Img,
    description: 'UL Listed and NFPA Compliant resettable manual call point featuring high-intensity LED visual indication for rapid alarm identification in conventional fire alarm systems.',
    features: [
      'Resettable operating element for repeated activation without replacement.',
      'High-intensity LED visual indication for clear alarm identification.',
      'Surface and flush mounting options for flexible installation layouts.',
      'Designed for NFPA 72 compliant conventional manual initiating device circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Iris Series',
    subtitle: 'Resettable conventional manual call point with LED visual indication.',
    shortDescription: 'UL Listed and NFPA Compliant resettable manual call point featuring high-intensity LED visual indication.',
    longDescription: 'The IC0020 Resettable Manual Call Point delivers dependable manual alarm initiation for conventional systems, combining resettable operation with high-intensity LED indication for clear identification in occupied spaces.',
    gallery: [ic0020Img, irisManualCollectionImg],
    tags: ['Resettable', 'LED Indication', 'Conventional', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional manual initiating device requirements for occupancy protection.' },
      { title: 'EN 54', description: 'Compliant with European manual call point performance and safety expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'ic0012e-quick-activation',
    name: 'IC0012E Quick-Activation Manual Alarm Button',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'manual-call-points-iris-series',
    image: ic0012e_convImg,
    description: 'UL Listed and NFPA Compliant quick-activation manual alarm button engineered for fast, reliable fire alarm initiation in conventional systems.',
    features: [
      'Quick-activation mechanism for immediate manual alarm initiation.',
      'Compact footprint for discreet installation in occupied corridors.',
      'High-contrast labelling for clear accessibility and identification.',
      'Designed for NFPA 72 compliant conventional initiating device circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Iris Series',
    subtitle: 'Quick-activation manual alarm button for fast emergency response.',
    shortDescription: 'UL Listed and NFPA Compliant quick-activation manual alarm button engineered for fast fire alarm initiation.',
    longDescription: 'The IC0012E Quick-Activation Manual Alarm Button provides rapid, dependable manual alarm initiation for conventional fire systems, with a compact design suited to corridors and occupied circulation spaces.',
    gallery: [ic0012e_convImg, irisManualCollectionImg],
    tags: ['Quick Activation', 'Compact', 'Conventional', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional manual initiating device requirements for occupancy protection.' },
      { title: 'EN 54', description: 'Compliant with European manual call point performance and safety expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'ic0012-ip67-outdoor',
    name: 'IC0012 IP67 Manual Call Point',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'manual-call-points-iris-series',
    image: ic0012_convImg,
    description: 'UL Listed and NFPA Compliant IP67-rated manual call point engineered for dependable outdoor and harsh-environment fire alarm initiation.',
    features: [
      'IP67-rated weatherproof enclosure for outdoor installation.',
      'Resettable operating element with key access for controlled testing.',
      'High-intensity LED alarm indication for outdoor visibility.',
      'Designed for NFPA 72 compliant conventional initiating device circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Iris Series',
    subtitle: 'IP67 weatherproof manual call point for outdoor and harsh environments.',
    shortDescription: 'UL Listed and NFPA Compliant IP67-rated manual call point for dependable outdoor fire alarm initiation.',
    longDescription: 'The IC0012 IP67 Manual Call Point provides reliable manual alarm initiation in outdoor and harsh environments, combining weatherproof construction with resettable operation and clear LED indication.',
    gallery: [ic0012_convImg, irisManualCollectionImg],
    tags: ['IP67', 'Weatherproof', 'Outdoor', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional manual initiating device requirements across outdoor installations.' },
      { title: 'EN 54', description: 'Compliant with European manual call point performance and safety expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'ick010-keyswitch',
    name: 'ICK010 Keyswitch',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'manual-call-points-iris-series',
    image: ick010Img,
    description: 'UL Listed and NFPA Compliant keyswitch accessory providing secure access control for manual call point testing and system management functions.',
    features: [
      'Secure key-based access control for call point and system functions.',
      'Durable construction for long service life in public areas.',
      'Compatible with Iris series manual call point installations.',
      'Designed for NFPA 72 compliant supervisory and access control schemes.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Iris Series',
    subtitle: 'Secure keyswitch access control for manual call point management.',
    shortDescription: 'UL Listed and NFPA Compliant keyswitch accessory for secure access control of manual call point functions.',
    longDescription: 'The ICK010 Keyswitch provides secure, key-based access control for manual call point testing and system management, supporting authorized-only operation in NFPA-compliant conventional installations.',
    gallery: [ick010Img],
    tags: ['Keyswitch', 'Access Control', 'Secure', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant supervisory and access control requirements for conventional systems.' },
      { title: 'EN 54', description: 'Compliant with European fire detection control and accessory expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'icb010-non-latching-call-point',
    name: 'ICB010 Non-latching Manual Call Point',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'manual-call-points-iris-series',
    image: icb010Img,
    description: 'UL Listed and NFPA Compliant non-latching manual call point with automatic reset and LED indication for dependable conventional alarm initiation.',
    features: [
      'Non-latching operation with automatic reset after activation.',
      'Integrated LED indication for clear alarm status feedback.',
      'Resettable design reduces maintenance and replacement cycles.',
      'Designed for NFPA 72 compliant conventional initiating device circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Iris Series',
    subtitle: 'Non-latching manual call point with automatic reset and LED indication.',
    shortDescription: 'UL Listed and NFPA Compliant non-latching manual call point with automatic reset.',
    longDescription: 'The ICB010 Non-latching Manual Call Point delivers dependable conventional alarm initiation with automatic reset and LED indication, reducing maintenance cycles while maintaining NFPA-compliant performance.',
    gallery: [icb010Img, irisManualCollectionImg],
    tags: ['Non-latching', 'Automatic Reset', 'LED Indication', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional manual initiating device requirements for occupancy protection.' },
      { title: 'EN 54', description: 'Compliant with European manual call point performance and safety expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'conv-detector-lineup',
    name: 'Conventional Devices Detector Lineup',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'conventional-control-panels',
    image: convDetectorLineupImg,
    description: 'Overview image showing conventional detector family lineup.',
    features: ['Family overview'],
    certifications: []
  },
  {
    id: 'id100-detector',
    name: 'ID100 Detector',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'iris-series-detectors',
    image: id100Img,
    description: 'Entry-level optical smoke detector designed for small commercial premises, offices, and compact installation areas requiring dependable early warning.',
    features: [
      'Optical chamber technology for sensitive smoke detection',
      'Low-profile aesthetic design for discreet installation',
      'Stable operation for routine commercial environments',
      'Suitable for UL Listed and NFPA compliant conventional systems'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'id200-detector',
    name: 'ID200 Detector',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'iris-series-detectors',
    image: id200Img,
    description: 'Rate-of-rise heat detector engineered for environments where smoke detection may be affected by dust, steam, or other nuisance conditions.',
    features: [
      'Heat sensing for environments with elevated false-alarm risk',
      'Robust housing for long service life',
      'Consistent performance in industrial and utility spaces',
      'Compliant with conventional alarm system standards'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'id300-detector',
    name: 'ID300 Detector',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'iris-series-detectors',
    image: id300Img,
    description: 'High-performance conventional detector for general commercial applications, delivering dependable coverage and reliable alarm initiation across diverse layouts.',
    features: [
      'General-purpose detection for broad commercial coverage',
      'Stable alarm threshold performance across varying environments',
      'Compatible with conventional zone-based control architectures',
      'Optimized for long-term service reliability'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'is2021re-sounder',
    name: 'IS2021RE Conventional Sounder',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'conventional-signalling-devices',
    image: is2021reImg,
    description: 'UL Listed and NFPA Compliant high-performance conventional sounder delivering loud, dependable alarm notification across commercial and industrial facilities.',
    features: [
      'High-decibel output for reliable notification in large open spaces.',
      'Selectable alarm tones for flexible notification schemes.',
      'Durable enclosure for long service life in demanding environments.',
      'Designed for NFPA 72 compliant conventional notification appliance circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Conventional Signalling',
    subtitle: 'High-performance conventional sounder for dependable alarm notification.',
    shortDescription: 'UL Listed and NFPA Compliant high-performance conventional sounder for reliable alarm notification.',
    longDescription: 'The IS2021RE Conventional Sounder delivers loud, dependable alarm notification for conventional fire systems, with selectable tones and durable construction suited to commercial and industrial facilities.',
    gallery: [is2021reImg, is2000Img],
    tags: ['Sounder', 'High Output', 'Conventional', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional notification appliance performance and audibility requirements.' },
      { title: 'EN 54', description: 'Compliant with European fire alarm sounder performance and safety expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'is2000-sounder',
    name: 'IS2000 Conventional Sounder',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'conventional-signalling-devices',
    image: is2000Img,
    description: 'UL Listed and NFPA Compliant conventional signalling device providing wide-coverage, reliable alarm notification for zone-based fire detection systems.',
    features: [
      'Wide sound coverage for dependable notification across large zones.',
      'Reliable performance under repeated emergency duty cycles.',
      'Low current draw for efficient conventional circuit operation.',
      'Designed for NFPA 72 compliant conventional notification appliance circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Conventional Signalling',
    subtitle: 'Wide-coverage conventional sounder for zone-based notification.',
    shortDescription: 'UL Listed and NFPA Compliant conventional signalling device with wide-coverage alarm notification.',
    longDescription: 'The IS2000 Conventional Sounder provides wide-coverage, reliable alarm notification for zone-based conventional fire systems, with efficient operation and durable performance for routine commercial protection.',
    gallery: [is2000Img, is2021reImg],
    tags: ['Sounder', 'Wide Coverage', 'Conventional', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional notification appliance performance and audibility requirements.' },
      { title: 'EN 54', description: 'Compliant with European fire alarm sounder performance and safety expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'orbis-conventional-collection',
    name: 'Orbis Series Conventional Devices',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'apollo-series-conventional-detectors',
    image: apolloConv1Img,
    description: 'UL Listed and NFPA Compliant Orbis series conventional devices offering marine-certified options for dependable wide-area fire protection.',
    features: [
      'Marine-certified device options for demanding environments.',
      'Proven conventional detection performance across commercial layouts.',
      'Standardised mounting and wiring interfaces for simplified installation.',
      'Designed for NFPA 72 compliant conventional detection circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Orbis Series',
    subtitle: 'Marine-certified conventional devices for dependable wide-area protection.',
    shortDescription: 'UL Listed and NFPA Compliant Orbis series conventional devices with marine-certified options.',
    longDescription: 'The Orbis Series Conventional Devices deliver dependable wide-area fire protection with marine-certified options, standardised interfaces, and NFPA-compliant performance across commercial and industrial layouts.',
    gallery: [apolloConv1Img, apolloConv2Img],
    tags: ['Orbis', 'Marine-certified', 'Conventional', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional detection and alarm behavior across occupied facilities.' },
      { title: 'EN 54', description: 'Compliant with European conventional fire detection performance expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'iris-series-detector-showcase',
    name: 'Iris Series Detector Showcase',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'iris-series-detectors',
    image: irisShowcaseImg,
    description: 'Showcase of Iris series detectors.',
    features: ['Range overview'],
    certifications: []
  },

  {
    id: 'orbis-loop-modules',
    name: 'Orbis Loop Modules',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'apollo-series-conventional-detectors',
    image: apolloConv3Img,
    description: 'UL Listed and NFPA Compliant loop interface modules for Orbis conventional systems enabling supervised signalling and ancillary equipment integration.',
    features: [
      'Loop interface for supervised conventional circuit integration.',
      'Relay output options for ancillary equipment control.',
      'Clear status diagnostics for efficient field servicing.',
      'Designed for NFPA 72 compliant conventional system architectures.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Orbis Series',
    subtitle: 'Loop interface modules for supervised conventional system integration.',
    shortDescription: 'UL Listed and NFPA Compliant loop interface modules for Orbis conventional systems.',
    longDescription: 'The Orbis Loop Modules provide supervised loop interface capability for conventional fire systems, enabling relay outputs and ancillary equipment integration within NFPA-compliant architectures.',
    gallery: [apolloConv3Img],
    tags: ['Loop Modules', 'Interface', 'Orbis', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional interface and supervised signalling requirements.' },
      { title: 'EN 54', description: 'Compliant with European conventional fire system component expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'orbis-conventional-call-points',
    name: 'Orbis Conventional Call Points',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'apollo-series-conventional-detectors',
    image: apolloConv4Img,
    description: 'UL Listed and NFPA Compliant marine-certified conventional call points from the Orbis series providing robust manual alarm initiation.',
    features: [
      'Marine-rated construction for demanding environments.',
      'Robust housing with high-visibility actuation element.',
      'Resettable operation with clear LED indication.',
      'Designed for NFPA 72 compliant conventional initiating device circuits.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified'],
    series: 'Orbis Series',
    subtitle: 'Marine-certified conventional call points for robust manual initiation.',
    shortDescription: 'UL Listed and NFPA Compliant marine-certified conventional call points from the Orbis series.',
    longDescription: 'The Orbis Conventional Call Points deliver robust manual alarm initiation with marine-rated construction, high-visibility actuation, and resettable operation for NFPA-compliant conventional systems.',
    gallery: [apolloConv4Img],
    tags: ['Call Points', 'Marine-rated', 'Orbis', 'NFPA 72'],
    standards: [
      { title: 'NFPA 72', description: 'Supports compliant conventional manual initiating device requirements for occupancy protection.' },
      { title: 'EN 54', description: 'Compliant with European manual call point performance and safety expectations.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: []
  },
  {
    id: 'iris-manual-call-point-red',
    name: 'Iris Series Conventional Manual Call Point',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'manual-call-points-iris-series',
    image: '/src/lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Manual Call Points – Iris Series/Iris Series Manual Call Points Collection.png',
    description: 'Resettable conventional manual break-glass call point for immediate manual evacuation triggering.',
    features: [
      'Resettable operating element with key access',
      'High-intensity LED alarm indicator',
      'Surface and flush mounting options'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'conventional-wall-sounder-beacon',
    name: 'Conventional Sounder Beacon',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'conventional-signalling-devices',
    image: '/src/lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Conventional Signalling Devices/IS2021RE.png',
    description: 'High-decibel audible and visual warning device for fast emergency notification across large facilities.',
    features: [
      'Multi-tone selectable alarm signals',
      'Low current LED strobe light',
      'Weatherproof IP65 enclosure options'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  {
    id: 'apollo-series-conventional-detector',
    name: 'Apollo Series Conventional Optical Detector',
    category: 'conventional-fire-alarm-systems',
    subCategory: 'apollo-series-conventional-detectors',
    image: '/src/lib/assets/ULTIMATE FIRE SOLUTIONS PROJECT/CONVENTIONAL CONTROL PANELS/Conventional Devices/Apollo Series Conventional Detectors/Orbis Marine Fire Detection Collection.png',
    description: 'Reliable conventional smoke detector engineered for wide-area protection in commercial buildings.',
    features: [
      'Wide operating voltage range (9-33V DC)',
      'Unaffected by wind or atmospheric pressure',
      'Integrated alarm LED'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'EN54 Certified']
  },
  // Fire Suppression Systems - Clean Agent (FM200)
  {
    id: 'fm200-fire-suppression-system',
    name: 'FM200 Fire Suppression System',
    category: 'extinguishing-systems',
    subCategory: 'fm200-systems',
    image: fm200System,
    description: 'A clean agent extinguishing system designed for high-value spaces, electronics, and protected asset environments.',
    features: [
      'Rapid extinguishing without damaging sensitive critical equipment or electronics.',
      'Ideal for server rooms, electrical rooms, and high-value asset protection spaces.',
      'Clean discharge profile supports non-destructive fire control for valuable environments.',
      'Engineered for practical design and dependable fire event response.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 2001 Certified'],
    series: 'Clean Agent Systems',
    subtitle: 'Cleansing, efficient gaseous suppression for mission-critical rooms and equipment spaces.',
    shortDescription: 'A clean agent extinguishing system designed for high-value spaces, electronics, and protected asset environments.',
    longDescription: 'The FM200 clean agent suppression system is ideal for protecting rooms where water-based systems are impractical and rapid suppression is critical. It delivers fast occupant-safe extinguishing without the residual damage associated with conventional methods.',
    gallery: [fm200System, fm200Industrial, fm200System2, fm200HangingExtinguisher, localFm200],
    tags: ['Clean Agent', 'FM200', 'Sensitive Equipment', 'Fast Suppression'],
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
    id: 'local-fm200-suppression',
    name: 'Local 6kg FM200 System',
    category: 'extinguishing-systems',
    subCategory: 'local-6kg-fm200',
    image: localFm200,
    description: 'A compact, local FM200 arrangement designed to suppress hazards in small but high-value rooms.',
    features: [
      'Compact footprint suited to small electrical and mission-critical spaces.',
      'Fast suppression for enclosed accommodation of sensitive equipment.',
      'Designed for minimal operational disruption and reduced residual damage.',
      'Ideal for selective installation in contained fire-prone areas.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 2001 Certified'],
    series: 'Clean Agent Systems',
    subtitle: 'Compact clean-agent protection for critical enclosed spaces.',
    shortDescription: 'A compact, local FM200 arrangement designed to suppress hazards in small but high-value rooms.',
    longDescription: 'For enclosed assets and smaller high-risk zones, the local 6kg FM200 system offers dependable suppression with minimal footprint and efficient placement flexibility.',
    gallery: [localFm200, fm200HangingExtinguisher, fm200System, fm200System2],
    tags: ['Local', 'Compact', 'FM200', 'High Value'],
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
  },
  {
    id: 'fm200-industrial-installation',
    name: 'FM200 Industrial Installation',
    category: 'extinguishing-systems',
    subCategory: 'industrial-installations',
    image: fm200Industrial,
    description: 'A large-scale clean-agent suppression configuration engineered for industrial facilities, critical infrastructure, and extensive protected asset environments.',
    features: [
      'Scalable clean-agent architecture for large-scale industrial protected zones.',
      'Engineered for critical infrastructure and high-value asset environments.',
      'Rapid extinguishing without damaging sensitive equipment or electronics.',
      'Designed for NFPA 2001 compliant industrial suppression strategies.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 2001 Certified'],
    series: 'Clean Agent Systems',
    subtitle: 'Large-scale clean-agent suppression for industrial and critical infrastructure.',
    shortDescription: 'A large-scale clean-agent suppression configuration engineered for industrial facilities and critical infrastructure.',
    longDescription: 'The FM200 Industrial Installation provides dependable large-scale clean-agent suppression for industrial facilities and critical infrastructure, delivering rapid extinguishing with minimal residual damage and NFPA 2001 compliant performance.',
    gallery: [fm200Industrial, fm200System, fm200System2, localFm200],
    tags: ['Industrial', 'Clean Agent', 'Critical Infrastructure', 'NFPA 2001'],
    standards: [
      { title: 'NFPA 2001', description: 'Designed around the operational and safety standard for clean agent fire extinguishing systems.' },
      { title: 'Industrial Protection', description: 'Supports dependable suppression across demanding industrial and high-value asset environments.' },
      { title: 'Code-Conscious Design', description: 'Aligned with regulated commercial and critical infrastructure suppression planning requirements.' }
    ],
    accessories: [
      { name: 'FM200 Fire Suppression System', image: fm200System, description: 'General clean-agent arrangement suitable for protected spaces.' },
      { name: 'Local 6kg FM200 System', image: localFm200, description: 'Flexible small-format suppression package for precise room-level protection.' },
      { name: 'Fire Extinguishers', image: fireExtinguishers, description: 'Portable extinguisher options for supplemental local protection coverage.' }
    ]
  },
  {
    id: 'fire-extinguishers',
    name: 'Fire Extinguishers',
    category: 'extinguishing-systems',
    subCategory: 'fire-extinguishers',
    image: fireExtinguishers,
    description: 'A comprehensive range of portable and installed fire extinguishers providing dependable first-response suppression, inspection, and refill services.',
    features: [
      'Full range of extinguisher classes for diverse hazard applications.',
      'Professional installation, inspection, and refill services.',
      'Portable and wheeled configurations for flexible deployment.',
      'Designed for NFPA 10 compliant portable extinguisher protection.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 10 Certified'],
    series: 'Portable Suppression',
    subtitle: 'Complete extinguisher supply, installation, service, and refill solutions.',
    shortDescription: 'A comprehensive range of portable and installed fire extinguishers with professional service and refill support.',
    longDescription: 'Our Fire Extinguishers range delivers dependable first-response suppression across diverse hazard classifications, supported by professional installation, scheduled inspection, and compliant refill services in line with NFPA 10.',
    gallery: [fireExtinguishers, fm200System, fm200HangingExtinguisher],
    tags: ['Extinguishers', 'Installation', 'Refill', 'NFPA 10'],
    standards: [
      { title: 'NFPA 10', description: 'Compliant with the standard for portable fire extinguishers covering selection, placement, and maintenance.' },
      { title: 'Service & Refill', description: 'Professional inspection, recharge, and refill programs keep extinguishers ready for emergency duty.' },
      { title: 'UL Listed', description: 'Designed for international regulatory alignment across commercial and institutional environments.' }
    ],
    accessories: [
      { name: 'FM200 Fire Suppression System', image: fm200System, description: 'Clean-agent arrangement for protected equipment and asset spaces.' },
      { name: 'FM200 10KG Hanging Extinguisher', image: fm200HangingExtinguisher, description: 'Compact overhead-installed unit for targeted equipment protection.' }
    ]
  },
  // Fire Pumps
  {
    id: 'packaged-fire-fighting-system',
    name: 'Packaged Fire Fighting System',
    category: 'fire-pumps',
    subCategory: 'packaged-system',
    image: packagedFireFightingSystem,
    description: 'A complete packaged pumping system designed to deliver dependable pressure and flow for robust system protection.',
    features: [
      'Integrated pump package for rapid setup and dependable operation.',
      'Optimized system balancing and hydraulic continuity for measured discharge performance.',
      'Compact configuration suited to building and facility protection strategies.',
      'Engineered for operational resilience and simplified maintenance access.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 20 Certified'],
    series: 'Fire Pump Systems',
    subtitle: 'Turnkey water-based suppression package for rapid deployment and stable flow management.',
    shortDescription: 'A complete packaged pumping system designed to deliver dependable pressure and flow for robust system protection.',
    longDescription: 'The packaged fire fighting system brings together pump capacity, control, and operating logic in a carefully integrated configuration for reliable water delivery in commercial and industrial settings.',
    gallery: [packagedFireFightingSystem, endSuctionPump, splitCasePump, containerizedFirePump],
    tags: ['Turnkey', 'Water Supply', 'Industrial', 'Reliable'],
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
    id: 'end-suction-fire-pump',
    name: 'End Suction Fire Pump',
    category: 'fire-pumps',
    subCategory: 'end-suction-pump',
    image: endSuctionPump,
    description: 'A dependable end suction configuration for reliable pressure and discharge performance in critical water-supply systems.',
    features: [
      'Compact pump geometry suited to practical installation in constrained plant and facility rooms.',
      'Reliable hydraulic performance for emergency discharge and sustained pressure control.',
      'Low-complexity mechanical configuration designed for easier maintenance planning.',
      'Highly suitable for essential fire protection infrastructure in commercial and industrial settings.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 20 Certified'],
    series: 'Fire Pump Systems',
    subtitle: 'Efficient pumping solution for stable and responsive emergency water delivery.',
    shortDescription: 'A dependable end suction configuration for reliable pressure and discharge performance in critical water-supply systems.',
    longDescription: 'The end suction fire pump offers a compact, efficient configuration built for projects that demand consistent pressure support and easy service access without compromising reliability.',
    gallery: [endSuctionPump, packagedFireFightingSystem, splitCasePump, containerizedFirePump],
    tags: ['End Suction', 'High Pressure', 'Serviceable', 'Compact'],
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
    id: 'split-case-fire-pump',
    name: 'Split Case Fire Pump',
    category: 'fire-pumps',
    subCategory: 'split-case-pump',
    image: splitCasePump,
    description: 'A robust split case pump platform built for higher flow, resilient support, and long-term operational continuity.',
    features: [
      'High-flow characteristics suitable for larger facilities and higher-demand water systems.',
      'Stable performance across long-duration emergency operation.',
      'Designed for dependable mechanical service in critical applications.',
      'Built to integrate smoothly with larger suppression control and water distribution strategies.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 20 Certified'],
    series: 'Fire Pump Systems',
    subtitle: 'High-capacity pump system for larger water-demand applications and demanding infrastructure.',
    shortDescription: 'A robust split case pump platform built for higher flow, resilient support, and long-term operational continuity.',
    longDescription: 'The split case fire pump supports more demanding water delivery needs with balanced hydraulic design, strong mechanical durability, and a system layout suited to complex fire protection installations.',
    gallery: [splitCasePump, endSuctionPump, packagedFireFightingSystem, containerizedFirePump],
    tags: ['High Flow', 'Industrial', 'Robust', 'Demanding'],
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
    id: 'containerized-fire-pump',
    name: 'Containerized Fire Pump',
    category: 'fire-pumps',
    subCategory: 'containerized-fire-pump',
    image: containerizedFirePump,
    description: 'A preassembled and transportable fire pump package offering practical deployment in demanding conditions.',
    features: [
      'Pre-integrated system reduces on-site installation time and coordination complexity.',
      'Transport-friendly structure supports flexible project conditions and temporary installations.',
      'Meets operational expectations for emergency pumping under strict site readiness demands.',
      'Provides durable protection for projects requiring mobility and reliability.'
    ],
    certifications: ['UL Listed', 'NFPA Compliant', 'NFPA 20 Certified'],
    series: 'Fire Pump Systems',
    subtitle: 'Portable, durable fire pump configuration for resilient deployment and reduced installation complexity.',
    shortDescription: 'A preassembled and transportable fire pump package offering practical deployment in demanding conditions.',
    longDescription: 'The containerized fire pump package is designed for sites requiring robust fire-water support with high portability, mechanical strength, and dependable installation simplicity.',
    gallery: [containerizedFirePump, packagedFireFightingSystem, splitCasePump, endSuctionPump],
    tags: ['Portable', 'Modular', 'Resilient', 'Deployment'],
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
  }
];

// Merge addressable products added separately to keep the file manageable
import addressableProducts from './addressable-products';
for (const p of addressableProducts) {
  products.push(p);
}

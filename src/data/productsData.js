export const productsData = [
  {
    slug: 'nexlume',
    title: 'Nexlume',
    headline: 'Nexlume is our dedicated LED products division, engineering fine-pitch video walls, digital signage, and large-format outdoor displays. Built for demanding commercial environments, Nexlume panels combine high brightness, colour accuracy, and long service life with the flexibility to scale from a single boardroom screen to a stadium façade.',
    shortDesc: 'Nexlume LED, LED display brand, proprietary LED solutions',
    image: '/nexlume.png',
    story: 'Nexlume represents the pinnacle of micro-LED technology. Designed for situations where every pixel matters, it offers absolute color accuracy, deep structural blacks, and a seamless visual canvas. From high-stakes boardrooms to major broadcast studios, Nexlume redefines digital environments.',
    valueProp: 'Nexlume matches sub-millimeter pixel pitches with advanced heat dissipation and dynamic power supplies. The result is a display that operates cooler, draws less power, and maintains flawless visual consistency across decades.',
    features: [
      {
        title: '0.9mm MicroPixel Pitch',
        desc: 'Unmatched sharpness that remains crisp and visible even from inches away, ideal for ultra-close viewing.'
      },
      {
        title: 'HDR10+ & Rec. 2020 Support',
        desc: 'Reproduces over a billion colors with perfect dynamic range, creating lifelike cinematic views.'
      },
      {
        title: 'Ultra-Cool Driver Tech',
        desc: 'Advanced semiconductor substrates that minimize thermal emissions and increase product lifespan by 40%.'
      }
    ],
    benefits: [
      'Seamless Visual Canvas (Modular design with zero seam artifacts)',
      'Camera-Ready Refresh Rates (7680Hz refresh prevents scanning lines under lens)',
      'Front-Serviceable Modules (Magnetic alignment permits single-module replacement in under 30 seconds)'
    ],
    industries: ['Corporate HQs', 'Television Broadcast', 'Luxury Hospitality', 'Control Rooms'],
    specifications: {
      'Pixel Pitch': '0.9mm / 1.2mm / 1.5mm',
      'Max Brightness': '1600 nits (calibrated)',
      'Contrast Ratio': '20,000:1',
      'Refresh Rate': '7680Hz',
      'Cabinet Ratio': '16:9 aspect native'
    },
    showcaseImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'ndur',
    title: 'NDURANCE',
    headline: 'NDURANCE represents our commitment to durability — a line engineered for environments where standard AV and security equipment struggle: outdoor installations, high-traffic public spaces, and industrial settings. NDUR products are built to endure, so performance never depends on the weather or the wear.',
    shortDesc: 'NDURANCE AV Dynamics, rugged AV systems, durable technology brand',
    image: '/ndur.png',
    story: 'NDURANCE is forged to survive the most grueling conditions while rendering brilliant, high-contrast imagery. IP66 weatherproof certified, NDUR modules are designed for stadiums, transport terminals, and high-visibility architectural facades exposed to blazing sun, torrential rain, and sub-zero ice.',
    valueProp: 'Built with marine-grade structural alloys and high-efficiency optical diodes, NDUR cuts through direct midday sunlight without overheating or dimming.',
    features: [
      {
        title: 'IP66 Weatherproofing',
        desc: 'Fully encapsulated electronics that completely repel water, high dust, salt, and sand.'
      },
      {
        title: '10,000 Nits Brightness',
        desc: 'Extreme-luminance diodes that deliver highly readable graphics even under direct sunlight.'
      },
      {
        title: 'Intelligent Thermal Venting',
        desc: 'Integrated fanless convection venting that keeps operating temperatures safe without filter cleaning.'
      }
    ],
    benefits: [
      'High Sunlight Visibility (Stunning legibility regardless of solar position)',
      'Vandal-Resistant Shielding (Toughened structural materials withstand physical impacts)',
      'Automated Daylight Sensors (Dims display during nighttime to comply with municipal emission rules)'
    ],
    industries: ['Outdoor Arenas', 'Transit Terminals', 'Smart Retail Hubs', 'Sports Stadiums'],
    specifications: {
      'Weather Protection': 'IP66 rating',
      'Luminance Range': 'Up to 10,000 cd/m²',
      'Pixel Pitch': '3.9mm / 4.8mm / 6.2mm',
      'Viewing Angle': '160° Horizontal / Vertical',
      'Operational Limits': '-40°C to +60°C'
    },
    showcaseImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'spatial',
    title: 'Spatial',
    headline: 'SPATIAL is our flagship experience-technology brand, unifying audio, video, acoustics, and immersive systems under a single design language. From precision-tuned loudspeaker arrays to projection-mapped installations, SPATIAL products are engineered to make environments feel alive — used across our Immersive Experience and Audio & Acoustics service lines.',
    shortDesc: 'SPATIAL AV Dynamics, immersive audio video brand, acoustic technology products',
    image: '/spatial.png',
    story: 'Spatial is a revolutionary real-time acoustic rendering system. Instead of panning sound between classic left-right channels, Spatial treats sounds as distinct coordinate-based objects. As these digital audio assets move, our DSP automatically calculates phase, volume, and reflections for hundreds of speaker nodes.',
    valueProp: 'Spatial enables immersive centers, retail environments, and premium boardrooms to deliver natural, three-dimensional auditory environments.',
    features: [
      {
        title: 'Coordinate-Based Tracking',
        desc: 'Define sound origins in a 3D coordinate model; our engine takes care of the math for all physical speaker nodes.'
      },
      {
        title: 'Sub-Millisecond Rendering',
        desc: 'Real-time positioning with zero latency, syncing perfectly with interactive visuals and projections.'
      },
      {
        title: 'Smart Acoustic Tuning',
        desc: 'Analyzes room echoes and automatically structures EQ curves to compensate for reflections.'
      }
    ],
    benefits: [
      'True Spatial Immersion (Sounds move naturally with simulated distance dynamics)',
      'Legacy Speaker Compatible (Operates on standard Dante digital audio networks)',
      'Highly Intuitive Software (Drag-and-drop spatial coordinate map UI)'
    ],
    industries: ['Experience Centers', 'Theme Parks', 'Auditoriums', 'Modern Corporate Spaces'],
    specifications: {
      'Audio Channels': 'Up to 256 channels discrete output',
      'Network Protocol': 'Dante / AES67 standard support',
      'Core Processors': 'Dual redundant floating-point DSPs',
      'Latency Rating': '< 0.8 milliseconds',
      'Tuning Resolution': '1/96th octave EQ adjustment'
    },
    showcaseImages: [
      'https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'sentinel',
    title: 'Sentinel',
    headline: 'SENTINEL is our dedicated surveillance and security products brand, powering the CCTV Solutions we design and install. From AI-assisted analytics to centralized monitoring hardware, SENTINEL gives facility owners a smart security backbone that scales from a single site to a multi-location enterprise.',
    shortDesc: 'SENTINEL surveillance, AV Dynamics security products, smart CCTV brand',
    image: '/sentinal.png',
    story: 'Sentinel is the smart nervous system of modern secure venues. By marrying optical cameras with advanced neural detection algorithms, Sentinel automatically detects physical intrusions, analyzes crowds, tracks temperatures, and identifies structural risks in real-time, sending instant telemetry alerts.',
    valueProp: 'Unlike passive recording setups, Sentinel analyzes video feeds at the edge, offering immediate notifications and saving precious bandwidth.',
    features: [
      {
        title: 'Neural Object Analysis',
        desc: 'Instantly categorizes vehicles, assets, humans, and items, flagging unauthorized presence.'
      },
      {
        title: 'Thermal Core Telemetry',
        desc: 'Embedded long-wave infrared sensors track machinery heat and identify fire hazards before smoke.'
      },
      {
        title: 'Edge Decoupled Operations',
        desc: 'Keeps tracking actively working locally even during complete WAN network failures.'
      }
    ],
    benefits: [
      'Zero False Alarms (Advanced ML algorithms filter out shadows, wind, and animals)',
      'Instant Emergency Sync (Direct secure integration with central command software and alarms)',
      'Privacy-First Architecture (Filters out personal facial metrics locally to protect user privacy)'
    ],
    industries: ['Logistics Centers', 'Critical Utilities', 'Corporate Campus', 'Smart Venue Hubs'],
    specifications: {
      'AI Processing': 'Dual core edge TPU modules',
      'Optical Resolution': '4K HDR sensor streams',
      'Thermal Precision': '±0.2°C thermal core mapping',
      'Encryption': 'AES-256 local and transport',
      'PoE Powering': 'IEEE 802.3bt Type 4 support'
    },
    showcaseImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'mclane',
    title: 'Mclane',
    headline: 'Mclane is our events and production division, supplying the technical backbone for live experiences — staging systems, mobile AV infrastructure, and production-grade equipment engineered for fast load-in and dependable performance under show conditions.',
    shortDesc: 'Mclane events, AV Dynamics production brand, event technology equipment',
    image: '/mclane.png',
    story: 'Mclane is an enterprise-grade digital video routing powerhouse built for extreme staging. Routing uncompressed 4K video feeds with zero visual lag, Mclane connects multi-camera setups, projection systems, and large LED displays seamlessly for live television and high-profile corporate events.',
    valueProp: 'Utilizing a robust hardware chassis and dynamic switching cards, Mclane eliminates frame-drops and guarantees perfect sync.',
    features: [
      {
        title: 'Uncompressed 4K Routing',
        desc: 'True color fidelity routing over long-distance single fiber feeds without compression artifacts.'
      },
      {
        title: 'Sub-Frame Matrix Switcher',
        desc: 'Switch between video sources in less than 2 milliseconds, maintaining seamless display synchronization.'
      },
      {
        title: 'Modular Hot-Swap Cards',
        desc: 'Replace HDMI, SDI, or fiber connector cards mid-show without interrupting operational status.'
      }
    ],
    benefits: [
      'Zero Visual Frame Drops (Hardware-level matrix guarantees continuous stream synchronization)',
      'Highly Versatile Inputs (Cross-converts signals automatically between analog and digital cards)',
      'Double Backup Systems (Secondary internal power supplies step in instantly during power anomalies)'
    ],
    industries: ['Live Broadcast', 'Sports Arenas', 'Theater Production', 'Conference Centers'],
    specifications: {
      'Routing Bandwidth': 'Up to 28.8 Tbps total throughput',
      'Video Standards': '12G-SDI / SMPTE ST 2110 / HDMI 2.1',
      'Switch Latency': '< 2 microseconds latency',
      'Hot Swap Slots': '32 expandable chassis slots',
      'Network Sync': 'PTP IEEE 1588 timing support'
    },
    showcaseImages: [
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'green-sphere',
    title: 'Green Sphere',
    headline: "Green Sphere extends AV Dynamics' integration expertise into sustainable energy — battery energy storage systems (BESS) and solar solutions designed to power resilient, lower-carbon facilities. As venues demand more from their technology, Green Sphere ensures that power infrastructure keeps pace responsibly.",
    shortDesc: 'Green Sphere BESS, solar energy solutions, battery energy storage systems',
    image: '/solar.png',
    story: 'Green Sphere is the intelligence center for energy management. It connects directly with building management systems, AV hardware, and environmental sensors to dynamically adjust resources. By powering down unused displays, dimming LED lights, and lowering climate settings based on active occupancy, Green Sphere guarantees deep energy savings.',
    valueProp: 'Achieve LEED and WELL building standards effortlessly with continuous automation and real-time sustainability telemetry.',
    features: [
      {
        title: 'Occupancy Automation',
        desc: 'Continuously tracks room presence using sensors and powers down AV stacks immediately after meetings.'
      },
      {
        title: 'Dynamic Resource Damping',
        desc: 'Harvests external daylight and lowers internal light brightness, saving up to 35% in energy fees.'
      },
      {
        title: 'ESG Data Telemetry',
        desc: 'Compiles certified, audit-ready carbon offset and energy reduction reports with one-click exports.'
      }
    ],
    benefits: [
      'Proven Cost Reductions (Lowers commercial electricity expenses from day one)',
      'Automated ESG Compliance (Maintains real-time compliance with environmental reporting rules)',
      'Universal IoT Support (Communicates natively with Crestron, BACnet, and Modbus hardware)'
    ],
    industries: ['Modern Office towers', 'Academic Campuses', 'Sustainable Resorts', 'Tech Parks'],
    specifications: {
      'Protocol Bridging': 'BACnet / Modbus / MQTT / Zigbee',
      'Dashboard Output': 'Web-based API / CSV & PDF exports',
      'Diagnostic Speed': '15-second polling interval',
      'Security Core': 'Hardware TPM 2.0 cryptoprocessor',
      'Energy Scaling': 'Up to 5,000 distinct IoT nodes'
    },
    showcaseImages: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'alchemist',
    title: 'ALCHEMIST THE LAKE VIEWERY',
    headline: 'Alchemist is our hospitality-focused brand, purpose-built for hotels, restaurants, lounges, and guest-facing venues. From ambient lighting and audio scenes to guest room automation, Alchemist blends technology into hospitality design so it enhances the guest experience without ever intruding on it.',
    shortDesc: 'Alchemist hospitality tech, hotel AV solutions, guest experience technology',
    image: '/alchemist.png',
    story: 'Alchemist is the brain behind modern immersive arts and cafe building architectures. A media workstation equipped with custom GPU kernels, Alchemist calculates complex particle arrays, interactive visuals, and multi-projector blending on the fly. It converts large rooms and complex hospitality spaces into interactive canvases that react to guest movements and environmental factors.',
    valueProp: 'Alchemist blends dynamic projection mapping and motion tracking with premium ambience styling. It is designed to craft refined environments where hospitality becomes an unforgettable experiential journey.',
    features: [
      {
        title: 'Atmosphere & Ambience Design',
        desc: 'Orchestrating ambient lighting, soundscapes, and digital artwork overlays to match the mood and circadian rhythm of visitors.'
      },
      {
        title: 'Culture & Identity Projection',
        desc: 'Displaying generative digital murals that reflect brand heritage, regional art, or community culture in real-time.'
      },
      {
        title: 'Elevated Guest Engagement',
        desc: 'Interactive motion-tracking matrices that respond to guest movements, generating subtle particle flows as they navigate the venue.'
      }
    ],
    benefits: [
      'Bespoke Cafe Designs (Immersive interactive wall projections that shift dynamically with room occupancy)',
      'Atmospheric Staging (Blends dynamic projections, spatial color calibration, and audio nodes)',
      'Interactive Input Ready (Integrates with Azure Kinect, Lidar, and pressure floor mats out of the box)'
    ],
    industries: ['Luxury Hospitality', 'Bespoke Cafes & Lounges', 'Digital Art Museums', 'Experience Galleries'],
    specifications: {
      'Atmosphere Sync': 'Automated Circadian & Ambient light matching',
      'Design Integration': 'Bespoke custom projection mappings & LED wraps',
      'Cultural Asset Engine': 'Real-time generative local art rendering',
      'Guest Tracking Scale': 'Handles up to 150 simultaneous interactive nodes',
      'Experiential Venues': 'Luxury Cafes, Fine Dining, Premium Resorts'
    },
    showcaseImages: [
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

export const workDetails = {
  'smart-city': {
    subtitle:
      'End-to-end smart city architecture that connects citizens, services, and government into one intelligent ecosystem.',
    intro:
      'We design, implement, and support integrated command centre infrastructure for smart cities — bringing cutting-edge digital services to citizens and government bodies. From traffic management to public safety, our smart city solutions create safer, more efficient, and more liveable urban environments.',
    liveUrl: null,
    recognition: [],
    sections: [
      {
        heading: 'ARCHITECTURE & DESIGN',
        body: 'Our smart city solutions begin with deep urban analysis and stakeholder consultation. We design integrated ICT architectures that enable real-time data exchange between traffic systems, surveillance networks, emergency services, utilities, and public information systems — all operating from a single unified command platform.',
        image: 'https://avdynam.com/img/work/new/Smart%20city.jpg',
      },
      {
        heading: 'IMPLEMENTATION & SUPPORT',
        body: 'From procurement and infrastructure setup to network integration and operator training, our end-to-end approach ensures uncompromising quality on every project. We work closely with government bodies and urban planners to deliver solutions that scale with city growth and remain operationally resilient for decades.',
        image: null,
      },
    ],
    testimonial: null,
    gallery: ['https://avdynam.com/img/work/new/Smart%20city.jpg', 'https://avdynam.com/img/work/new/ICCC.jpg'],
    nextWork: { id: 'ai-surveillance', title: 'AI Surveillance' },
  },

  'ai-surveillance': {
    subtitle:
      'Advanced AI-powered surveillance solutions that monitor, analyse, and respond to the world around us — intelligently and responsibly.',
    intro:
      'Our AI surveillance systems leverage computer vision, deep learning, and edge processing to deliver real-time monitoring and analytics for cities, enterprises, and critical infrastructure. We design every deployment with a strong commitment to privacy, ethics, and regulatory compliance.',
    liveUrl: null,
    recognition: [],
    sections: [
      {
        heading: 'AI-DRIVEN ANALYTICS',
        body: 'Beyond traditional CCTV, our systems apply machine learning models to detect anomalies, recognise behavioural patterns, and trigger automated alerts in real time. This transforms passive monitoring into an intelligent, proactive security layer — dramatically reducing response times and operational costs.',
        image: 'https://avdynam.com/img/work/new/AI%20surivellance.jpg',
      },
      {
        heading: 'ETHICAL DEPLOYMENT',
        body: 'We prioritise privacy-conscious design in every surveillance deployment. Our systems are built with robust data governance frameworks, granular access controls, and full compliance with applicable legal and regulatory standards — ensuring surveillance capability that is powerful yet responsible.',
        image: null,
      },
    ],
    testimonial: null,
    gallery: ['https://avdynam.com/img/work/new/AI%20surivellance.jpg'],
    nextWork: { id: 'drones-solutions', title: 'Drones & Solutions' },
  },

  'drones-solutions': {
    subtitle:
      'End-to-end drone solutions for surveillance, agriculture, deliveries, border security, and defence.',
    intro:
      'AV Dynamics delivers fully integrated drone systems combining advanced hardware with AI-powered software platforms. Whether for urban surveillance, agricultural monitoring, logistics optimisation, or national security, we provide complete solutions from concept through to long-term operational support.',
    liveUrl: null,
    recognition: [],
    sections: [
      {
        heading: 'MULTI-DOMAIN APPLICATIONS',
        body: 'Our drone solutions serve a wide range of industries and mission types. For government and defence, we deploy AI-enabled surveillance platforms. For agriculture, we deliver precision mapping and crop monitoring systems. For logistics, last-mile delivery optimisation. Each solution is purpose-built, rigorously tested, and compliant with applicable aviation regulations.',
        image: 'https://avdynam.com/img/work/new/drone.jpg',
      },
      {
        heading: 'END-TO-END DELIVERY',
        body: 'From system design and hardware integration through to software development, regulatory compliance, operator training, and ongoing maintenance — we manage every aspect of your drone programme, delivering a turnkey solution that performs from day one and continues to deliver value over its operational lifetime.',
        image: null,
      },
    ],
    testimonial: null,
    gallery: ['https://avdynam.com/img/work/new/drone.jpg'],
    nextWork: { id: 'projection-mapping', title: 'Projection Mapping' },
  },

  'projection-mapping': {
    subtitle:
      'Transforming any surface into a canvas for immersive, large-scale visual storytelling and brand engagement.',
    intro:
      'Our projection mapping services bring brand experiences, events, and architectural facades to life with breathtaking visual precision. Using cutting-edge projection technology and creative content design, we deliver unforgettable immersive experiences at any scale — from intimate product launches to landmark building facades.',
    liveUrl: null,
    recognition: [],
    sections: [
      {
        heading: 'CREATIVE & TECHNICAL EXCELLENCE',
        body: 'Projection mapping sits at the intersection of art and engineering. Our team combines creative content designers with precision technical engineers to deliver seamlessly blended visuals on complex architectural surfaces, product forms, and stage designs — with pixel-perfect alignment even across curved or irregular geometry.',
        image: 'https://avdynam.com/img/work/new/projection%20mapping.jpg',
      },
      {
        heading: 'END-TO-END PRODUCTION',
        body: 'From concept and 3D surface modelling through content production, on-site calibration, and live event support, we manage every stage of the project. Our turnkey approach means clients can focus entirely on their audience while we manage the full technical complexity behind the spectacle.',
        image: null,
      },
    ],
    testimonial: null,
    gallery: [
      'https://avdynam.com/img/work/new/projection%20mapping.jpg',
      'https://avdynam.com/img/work/DoME.jpeg',
    ],
    nextWork: { id: 'smart-city', title: 'Smart City' },
  },
}

export function generateFallback(work) {
  return {
    subtitle: `${work.title} — an end-to-end solution designed, built, and delivered by AV Dynamics.`,
    intro:
      'AV Dynamics brings deep technical expertise and global project experience to every engagement. We work closely with clients to understand their operational needs, design the right solution architecture, and implement with precision — delivering results that solve real-world challenges and stand up over time.',
    liveUrl: null,
    recognition: [],
    sections: [
      {
        heading: 'OUR APPROACH',
        body: 'Every project begins with a thorough needs assessment. We analyse the operational environment, define success metrics, and design a solution architecture that is scalable, resilient, and purpose-built for the client\'s specific context — drawing on our experience across government, enterprise, and critical infrastructure sectors.',
        image: null,
      },
      {
        heading: 'DELIVERY & SUPPORT',
        body: 'We manage the full implementation lifecycle — from procurement and system integration through to commissioning, operator training, and long-term support. Our team remains engaged throughout the project lifetime to ensure optimal system performance and rapid response to any operational needs.',
        image: null,
      },
    ],
    testimonial: null,
    gallery: [work.image],
    nextWork: null,
  }
}

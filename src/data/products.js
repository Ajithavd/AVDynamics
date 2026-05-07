import domeImg from '../assets/IMMERSIVE.png'
import projectionImg from '../assets/IMMERSIVETECH.png'
import smartCityImg from '../assets/work/smart-city.png'
import aiImg from '../assets/work/ai-surveillance.png'
import droneImg from '../assets/work/drone.png'
import projectionMappingImg from '../assets/work/projection-mapping.png'
import hero1Img from '../assets/hero1.png'
import hero3Img from '../assets/hero3.png'

export const products = [
  {
    id: 'fulldome-theatre',
    num: '01',
    title: 'Fulldome Theatre',
    description:
      'A 14-metre immersive dome delivering 8K-per-eye content with calibrated audio and integrated showcontrol. Designed for visitor centres, planetariums, and flagship brand experiences.',
    image: domeImg,
    aspect: 'aspect-1-1',
    align: 'right',
  },
  {
    id: 'projection-mapping-rig',
    num: '02',
    title: 'Projection Mapping Rig',
    description:
      'High-lumen projection arrays calibrated for complex architectural surfaces. Pixel-perfect blending across curved facades, with on-site recalibration tooling included.',
    image: projectionImg,
    aspect: 'aspect-16-9',
    align: 'left',
  },
  {
    id: 'smart-pole',
    num: '03',
    title: 'Smart Pole',
    description:
      'Integrated streetside infrastructure combining lighting, CCTV, public Wi-Fi, environmental sensors, and emergency call points — managed from a single command dashboard.',
    image: smartCityImg,
    aspect: 'aspect-4-3',
    align: 'right',
  },
  {
    id: 'ai-surveillance-suite',
    num: '04',
    title: 'AI Surveillance Suite',
    description:
      'Edge-AI camera stack with anomaly detection, behavioural analytics, and privacy-conscious data governance. Deploys across enterprise, transit, and city-scale environments.',
    image: aiImg,
    aspect: 'aspect-16-9',
    align: 'left',
  },
  {
    id: 'led-video-wall',
    num: '05',
    title: 'LED Video Wall',
    description:
      'Modular fine-pitch LED panels with seamless edge alignment and colour-matched processing. Built for control rooms, broadcast studios, and immersive briefing spaces.',
    image: hero1Img,
    aspect: 'aspect-1-1',
    align: 'right',
  },
  {
    id: 'drone-platform',
    num: '06',
    title: 'Drone Platform',
    description:
      'End-to-end UAV programmes for surveillance, agricultural mapping, and last-mile delivery. Hardware, autonomy software, regulatory compliance, and operator training in one bundle.',
    image: droneImg,
    aspect: 'aspect-4-3',
    align: 'left',
  },
  {
    id: 'command-centre',
    num: '07',
    title: 'Command Centre Console',
    description:
      'Operator-grade ICCC and MCCC consoles unifying CCTV, traffic, emergency response, and city services into a single real-time operational picture.',
    image: hero3Img,
    aspect: 'aspect-1-1',
    align: 'right',
  },
  {
    id: 'projection-spectacle',
    num: '08',
    title: 'Projection Spectacle Stack',
    description:
      'Turn-key live-event package combining content authoring, projection mapping, kinetic lighting, and synchronised sound — built for product launches and heritage activations.',
    image: projectionMappingImg,
    aspect: 'aspect-16-9',
    align: 'left',
  },
]

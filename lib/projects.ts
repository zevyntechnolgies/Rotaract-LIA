export interface ProjectOrganizer {
  name: string
  role: string
  avatar: string
}

export interface ProjectTimelineItem {
  stage: string
  date: string
  description: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  location: string
  date: string
  beneficiaries: number
  image: string
  color: string
  gallery: string[]
  objectives: string[]
  timeline: ProjectTimelineItem[]
  impact: string
  organizers: ProjectOrganizer[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'VISION',
    title: 'VISION',
    category: 'DPP',
    description: ' Prevent Road Accidents through lights',
    longDescription: '',
    location: 'Perur,ChettyPalayam',
    date: '01 July 2026',
    beneficiaries: '150+',
    image: '/1.jpeg',
    color: 'from-red-500 to-pink-500',
    gallery: [
    ],
    objectives: [

    ],
    timeline: [
      { stage: '', date: '', description: '' },
      { stage: '', date: '', description: '' },
      { stage: '', date: '', description: '' }
    ],
    impact: '',
    organizers: [
      { name: 'Rtr. Prajwal', role: 'Community Service Director', avatar: '' }
    ]
  },
  {
    id: 2,
    slug: 'THE GIFT OF WARMTH',
    title: 'THE GIFT OF WARMTH',
    category: 'Community Service',
    description: 'Cloth Distribution at Orpahnage',
    longDescription: '',
    location: '1N and Around Coimbatore',
    date: '10 July 2026',
    beneficiaries: '50+',
    image: '/2.jpeg',
    color: 'from-green-500 to-emerald-500',
    gallery: [
      
    ],
    objectives: [
      
    ],
    timeline: [
      { stage: '', date: '', description: '' },
      { stage: '', date: '', description: '' },
      { stage: '', date: '', description: '' }
    ],
    impact: '',
    organizers: [
      { name: 'Rtr. Tharani', role: 'Blood Donar Cell Chair', avatar: '' }
    ]
  }
]

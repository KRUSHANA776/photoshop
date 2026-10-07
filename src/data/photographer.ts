export const DEMO_MODE = true;

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  location: string;
  coverImage: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'tall';
  layoutSpan?: 'span-1' | 'span-2' | 'col-span-2' | 'row-span-2';
  description: string;
  story: string[];
  equipment?: string;
  images: {
    url: string;
    caption: string;
    aspect?: 'landscape' | 'portrait' | 'full';
  }[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  coverImage: string;
  inclusions: string[];
  deliverables: string[];
  timeline: string;
  samplePrice: string;
  faq: { q: string; a: string }[];
  gallery: string[];
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  recommendedFor: string;
  samplePrice: string;
  isPopular?: boolean;
  features: string[];
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  event: string;
  location: string;
  rating: number;
  date: string;
  image?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
}

export const photographer = {
  name: 'Charudatta Arya',
  brandName: 'Charudatta Arya Studios',
  tagline: 'Stories Worth Remembering.',
  subTagline: 'PHOTOGRAPHY • FILMS • STORIES',
  experienceYears: '8+',
  location: 'Pune & Worldwide',
  phone: '+91 98220 18492',
  whatsapp: '919822018492',
  email: 'hello@charudattaarya.com',
  instagram: 'https://instagram.com/charudattaarya',
  instagramHandle: '@charudatta.arya',
  website: 'https://charudattaarya.com',

  hero: {
    eyebrow: 'PHOTOGRAPHY • FILMS • STORIES',
    title: 'CHARUDATTA ARYA',
    headline: 'Stories Worth Remembering.',
    supportingCopy:
      'Preserving fleeting glances, heartfelt vows, and editorial splendor with authentic, timeless cinematic vision.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85',
    secondaryImage:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80',
    scrollIndicator: 'SCROLL TO EXPLORE ↓',
  },

  intro: {
    eyebrow: '01 — THE ART OF STORYTELLING',
    statement:
      'We do not just take photographs.\nWe preserve the feeling of a moment.',
    body:
      'Founded on the philosophy of unhurried observation and editorial refinement, Charudatta Arya Studios approaches every wedding, portrait, and commercial commission with an artistic eye. We blend intimate candid warmth with the cinematic composure of high-fashion print, creating heirlooms that grow richer with time.',
    signature: '— Charudatta Arya',
    signatureRole: 'Lead Photographer & Visual Director',
  },

  categories: [
    'All',
    'Weddings',
    'Pre-Weddings',
    'Portraits',
    'Fashion',
    'Events',
    'Commercial',
    'Products',
    'Travel',
  ],

  portfolio: [
    {
      id: 'akshay-priya-udaipur',
      title: 'Akshay & Priya',
      subtitle: 'Royal Lake Palace Ceremony',
      category: 'Weddings',
      year: '2025',
      location: 'Udaipur, Rajasthan',
      coverImage:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'tall',
      layoutSpan: 'row-span-2',
      description:
        'An opulent lakeside wedding bathed in golden hour amber, balancing regality with raw candid affection.',
      story: [
        'Set against the marble majesty of Lake Pichola, Priya and Akshay gathered sixty of their closest confidants for a three-day celebration that celebrated ancestral heritage through a contemporary lens.',
        'Our brief was to capture the subtle, whispered glances and the silent tears during the pheras without turning sacred rituals into a staged spectacle.',
      ],
      equipment: 'Leica SL2, Sony A1 • 35mm f/1.4 GM, 85mm f/1.2',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=85',
          caption: 'Sunset arrival across Lake Pichola under ceremonial silver canopies.',
          aspect: 'portrait',
        },
        {
          url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85',
          caption: 'Priya during the bridal portraits, draped in handwoven heirloom zardozi.',
          aspect: 'landscape',
        },
        {
          url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85',
          caption: 'The sacred twilight pheras reflected in mirrored courtyard lamps.',
          aspect: 'full',
        },
        {
          url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=85',
          caption: 'Spontaneous laughter during the Jaimala exchange.',
          aspect: 'landscape',
        },
      ],
    },
    {
      id: 'kabir-ananya-tuscan-notes',
      title: 'Kabir & Ananya',
      subtitle: 'Cypress Groves & Evening Vows',
      category: 'Pre-Weddings',
      year: '2025',
      location: 'Val d’Orcia, Tuscany',
      coverImage:
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'landscape',
      layoutSpan: 'col-span-2',
      description:
        'Cinematic pre-wedding frames wandering through sun-drenched Italian vineyards and medieval hilltowns.',
      story: [
        'Kabir and Ananya wanted their pre-wedding chapter to feel like an intimate European film stills reel rather than choreographed poses.',
        'We embraced soft natural morning mists and 35mm film tones to highlight the honest cadence of their partnership.',
      ],
      equipment: 'Hasselblad X2D 100C • 55mm f/2.5',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1800&q=85',
          caption: 'Walking barefoot along the sun-baked cypress driveways of Pienza.',
          aspect: 'landscape',
        },
        {
          url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1800&q=85',
          caption: 'Quiet embrace beneath an ancient olive grove at sunset.',
          aspect: 'portrait',
        },
      ],
    },
    {
      id: 'miraya-haute-couture',
      title: 'Miraya Editorial',
      subtitle: 'Silk, Shadows & Monochrome',
      category: 'Fashion',
      year: '2025',
      location: 'Mumbai Studio',
      coverImage:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'portrait',
      layoutSpan: 'span-1',
      description:
        'Sculptural editorial portraits capturing stark chiaroscuro textures and bespoke bridal couture.',
      story: [
        'A conceptual editorial collection produced for high-fashion print, blending dramatic studio tungsten with sculpted shadow lines.',
      ],
      equipment: 'Profoto Pro-11 • Sony FX3 & A7R V',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85',
          caption: 'Sculpted drape and dramatic rim lighting in studio.',
          aspect: 'portrait',
        },
        {
          url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85',
          caption: 'The gaze: high-contrast monochrome study.',
          aspect: 'portrait',
        },
      ],
    },
    {
      id: 'dr-aditya-roy-portrait',
      title: 'Aditya Roy',
      subtitle: 'Architectural Portraiture',
      category: 'Portraits',
      year: '2024',
      location: 'Pune',
      coverImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'square',
      layoutSpan: 'span-1',
      description:
        'Intimate character study of an architect amidst exposed concrete, glass, and warm timber.',
      story: [
        'An environmental portrait commission portraying the relationship between designer and structured space.',
      ],
      equipment: 'Fujifilm GFX 100 II • 110mm f/2',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=85',
          caption: 'Window light study in brutalist studio pavilion.',
          aspect: 'portrait',
        },
      ],
    },
    {
      id: 'the-oberoi-grand-soiree',
      title: 'Grand Soirée',
      subtitle: 'Sangeet & Candlelit Celebration',
      category: 'Events',
      year: '2025',
      location: 'New Delhi',
      coverImage:
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'landscape',
      layoutSpan: 'col-span-2',
      description:
        'Vibrant evening revelry documented with moody low-light sharpness and celebratory warmth.',
      story: [
        'A 500-guest sangeet evening documenting high-energy musical choreography and spontaneous family joy.',
      ],
      equipment: 'Dual Sony A1 • 24-70mm f/2.8 GM II',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1800&q=85',
          caption: 'Fairylit outdoor banquet lawn under starless night skies.',
          aspect: 'landscape',
        },
      ],
    },
    {
      id: 'aurum-fine-jewelry',
      title: 'Maison Aurum',
      subtitle: '24K Temple Goldsmithing',
      category: 'Commercial',
      year: '2025',
      location: 'Jaipur',
      coverImage:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'portrait',
      layoutSpan: 'span-1',
      description:
        'Macro jewelry still lifes emphasizing gemstone refraction, velvet textures, and gold sheen.',
      story: [
        'Commercial catalog and campaign assets for luxury heritage jewelers based out of Rajasthan.',
      ],
      equipment: 'Nikon Z8 • 105mm f/2.8 Micro',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1800&q=85',
          caption: 'Emerald drop earrings with antique filigree detail.',
          aspect: 'portrait',
        },
      ],
    },
    {
      id: 'kyoto-autumn-solitude',
      title: 'Autumn in Kyoto',
      subtitle: 'Zen Gardens & Mountain Mist',
      category: 'Travel',
      year: '2024',
      location: 'Kyoto, Japan',
      coverImage:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'landscape',
      layoutSpan: 'col-span-2',
      description:
        'Atmospheric travel documentary exploring dawn mist, vermilion torii gates, and bamboo groves.',
      story: [
        'Personal editorial essay published in independent print journals celebrating silence and seasonal transitions.',
      ],
      equipment: 'Leica M11 • Summilux 35mm f/1.4',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85',
          caption: 'Morning light piercing the bamboo grove in Arashiyama.',
          aspect: 'landscape',
        },
      ],
    },
    {
      id: 'lumina-horology-timepiece',
      title: 'Chronos Mechanical',
      subtitle: 'Swiss Tourbillon Movement',
      category: 'Products',
      year: '2025',
      location: 'Geneva / Studio',
      coverImage:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      aspectRatio: 'square',
      layoutSpan: 'span-1',
      description:
        'Surgical precision lighting revealing sapphire dials, oscillating weights, and satin-brushed steel.',
      story: [
        'Commercial product series highlighting artisan hand-finishing on limited edition horological masterpieces.',
      ],
      equipment: 'Phase One IQ4 150MP',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85',
          caption: 'Beveled tourbillon escapement captured with polarized lighting.',
          aspect: 'square',
        },
      ],
    },
  ] as PortfolioProject[],

  services: [
    {
      id: 'wedding-photography',
      title: 'Wedding Photography',
      tagline: 'Authentic moments from your most important day.',
      description:
        'Comprehensive, unobtrusive documentary coverage tailored for intimate gatherings and grand multi-day destination weddings.',
      detailedOverview:
        'We approach weddings with deep reverence for family dynamics and subtle emotion. Rather than forcing awkward smiles or interrupting sacred ceremonies, our team blends in quietly to capture tears, laughter, and unrehearsed intimacy in rich editorial tones.',
      coverImage:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      samplePrice: 'Starting from ₹1,75,000 / day',
      inclusions: [
        'Charudatta Arya as Lead Visual Artist + 2 Senior Associate Photographers',
        'Up to 10 hours of daily continuous coverage',
        'Custom private digital gallery with full-resolution downloads',
        '400-600 individually hand-graded photographs per event day',
        'Pre-wedding consultation & wedding day timeline curation',
      ],
      deliverables: [
        'Curated sneak peek delivered within 72 hours',
        'Master digital gallery online for 24 months',
        'Handcrafted 14x11 Italian leather heirloom album (optional)',
      ],
      timeline: 'Sneak peek in 72 hours; full master gallery within 4 to 6 weeks.',
      faq: [
        {
          q: 'Do you travel for destination weddings?',
          a: 'Yes, nearly 70% of our weddings take place across Rajasthan, Goa, Kerala, Europe, and Southeast Asia. Travel and accommodation are arranged seamlessly.',
        },
        {
          q: 'How many photographers attend the wedding?',
          a: 'Depending on your guest count, we typically deploy Charudatta Arya plus 1 to 3 senior associates to ensure both bride and groom sides are covered without chaos.',
        },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    {
      id: 'pre-wedding',
      title: 'Pre-Wedding & Couple Stories',
      tagline: 'Editorial portraits and cinematic couple stories.',
      description:
        'A relaxed, location-specific experience designed to reflect your unique connection before the wedding rush.',
      detailedOverview:
        'Whether in the serene hills of Mahabaleshwar, the heritage courtyards of Jaipur, or a private coastal villa, pre-wedding sessions are unhurried artistic conversations that feel like a romantic weekend escape.',
      coverImage:
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
      samplePrice: 'Starting from ₹75,000 / session',
      inclusions: [
        'Half-day or full-day shoot on curated picturesque locations',
        'Style consultation & moodboard planning',
        'Up to 3 distinct wardrobe transitions',
        'Drone aerial landscapes where permitted',
      ],
      deliverables: [
        '60-80 master retouched editorial frames',
        'High-resolution slideshow for wedding reception projection',
      ],
      timeline: 'Delivered within 14 working days.',
      faq: [
        {
          q: 'Can we suggest our own meaningful location?',
          a: 'Absolutely! We love photographing couples in spaces that hold deep personal memories—childhood streets, favorite cafes, or family estates.',
        },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    {
      id: 'portrait-photography',
      title: 'Editorial & Fine Art Portraits',
      tagline: 'Professional portraits with personality.',
      description:
        'Sculpted lighting and deep emotional depth for artists, executives, founders, and creative leaders.',
      detailedOverview:
        'We reject stale corporate headshots. We craft timeless editorial portraits that elevate your personal narrative, emphasizing quiet confidence and genuine soul.',
      coverImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      samplePrice: 'Starting from ₹35,000 / session',
      inclusions: [
        'Studio or on-location lighting setup',
        'Wardrobe & aesthetic direction',
        'Detailed skin retouching preserving natural skin pore texture',
      ],
      deliverables: ['15-25 high-resolution magazine-ready portraits'],
      timeline: 'Delivered within 7 business days.',
      faq: [
        {
          q: 'Where do portrait sessions take place?',
          a: 'At our studio in Koregaon Park, Pune, or at an architectural location of your choice.',
        },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    {
      id: 'event-photography',
      title: 'Event Photography',
      tagline: 'Every important moment, beautifully documented.',
      description:
        'From private anniversary banquets to cultural galas and high-profile launches.',
      detailedOverview:
        'Discreet, elegant storytelling that respects guest privacy while immortalizing atmosphere, architectural styling, and keynote moments.',
      coverImage:
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
      samplePrice: 'Starting from ₹50,000 / event',
      inclusions: [
        'Candid guest coverage and VIP protocol photography',
        'Venue decor, lighting, and culinary styling documentation',
        'Rapid media-ready highlights for press or social release',
      ],
      deliverables: ['Same-night PR select set + complete curated archive in 10 days'],
      timeline: 'Express press selects in 12 hours; master set in 10 days.',
      faq: [
        {
          q: 'Do you deliver photos on the same evening?',
          a: 'Yes, we provide a 20-image press release set within hours for social announcements.',
        },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    {
      id: 'commercial-photography',
      title: 'Commercial & Brand Campaigns',
      tagline: 'Visual storytelling for brands and businesses.',
      description:
        'High-impact visual narratives designed for advertising, billboards, hospitality, and luxury fashion lookbooks.',
      detailedOverview:
        'Translating brand DNA into unforgettable imagery. We collaborate closely with creative directors and marketing leads to ensure cohesive art direction.',
      coverImage:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      samplePrice: 'Custom quote per project scope',
      inclusions: [
        'Full creative deck alignment & location scouting',
        'Commercial usage licensing agreements',
        'Tethered live review on Phase One / Sony calibrated displays',
      ],
      deliverables: ['Print-ready TIFFs and web-optimized deliverables'],
      timeline: 'Based on production sprint schedule.',
      faq: [
        {
          q: 'Are commercial rights included?',
          a: 'We provide structured worldwide or regional usage rights transparently tailored to your distribution plan.',
        },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    {
      id: 'product-photography',
      title: 'Product & Luxury Horology',
      tagline: 'Clean, detailed imagery designed to sell.',
      description:
        'Microscopic detail, controlled reflection management, and tactile luxury textures for jewelry and cosmetics.',
      detailedOverview:
        'Precision light shaping engineered to showcase craftsmanship, gemstone luster, and material perfection.',
      coverImage:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
      samplePrice: 'Starting from ₹40,000 / set',
      inclusions: [
        'Specialist macro focus stacking & polarization',
        'Color calibration against standardized charts',
        'High-end dust, scratch, and reflection cleaning',
      ],
      deliverables: ['Alpha-channel cutouts and lifestyle staged compositions'],
      timeline: 'Typically 5-8 business days from sample receipt.',
      faq: [
        {
          q: 'Can products be shipped to your studio?',
          a: 'Yes, we regularly accept secure couriered high-value items at our studio in Pune.',
        },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      ],
    },
  ] as ServiceDetail[],

  packages: [
    {
      id: 'essential',
      name: 'Essential Heritage',
      tagline: 'For intimate ceremonies and discerning single-day events.',
      recommendedFor: 'Intimate Weddings • Up to 150 Guests',
      samplePrice: 'Starting from ₹1,25,000',
      features: [
        'Single-day documentary coverage (up to 8 hours)',
        'Charudatta Arya as Lead Visual Artist + 1 Associate',
        'Color grading in signature editorial film tone',
        '300+ hand-curated high-resolution photographs',
        'Private cloud gallery active for 1 year',
        'Sneak peek highlights within 48 hours',
      ],
      deliverables: [
        'High-resolution digital master files (JPEG)',
        'Web-ready resolution for instant social sharing',
      ],
    },
    {
      id: 'signature',
      name: 'Signature Story',
      tagline: 'Our most sought-after coverage for full wedding celebrations.',
      recommendedFor: 'Multi-day Weddings • 200–500 Guests',
      samplePrice: 'Starting from ₹2,95,000',
      isPopular: true,
      features: [
        'Two full days of celebration coverage (Mehendi, Sangeet, Wedding & Reception)',
        'Charudatta Arya + 2 Senior Associates + Drone Specialist',
        'Full-length cinematic couple portrait session included',
        '750+ master hand-graded editorial photographs',
        'Priority editing turnaround (within 4 weeks)',
        'One bespoke 12x12 Linen Heirloom Album (40 spreads)',
        'Full private cloud archive with unlimited downloads for 2 years',
      ],
      deliverables: [
        'Master high-resolution files + Web archive',
        'Custom engraved wooden keepsake USB drive with raw selects',
        'Hand-bound Linen Album shipped to doorstep',
      ],
    },
    {
      id: 'couture',
      name: 'Royal Monograph',
      tagline: 'Ultimate bespoke documentation with cinematic 4K film.',
      recommendedFor: 'Destination Weddings • Grand Celebrations',
      samplePrice: 'Starting from ₹4,75,000',
      features: [
        'Complete 3-to-4 day destination wedding coverage',
        'Full visual team: Charudatta Arya + 3 Photographers + 2 Cinematographers + Aerial Pilot',
        'Pre-wedding international or heritage shoot included',
        '4K Cinematic Wedding Film (5-7 min highlight + 25 min feature film)',
        '1,200+ master retouched editorial frames',
        'Two Parent Albums (10x10) + One Couple Deluxe Leather Album (14x11)',
        'Private consultation on lighting, mandap placement & aesthetic schedule',
      ],
      deliverables: [
        'Master Photo Archive + 4K Apple ProRes Master Films',
        'Handcrafted Italian Full-Grain Leather Heirloom Box',
        'Lifetime cloud archival backup guarantee',
      ],
    },
  ] as PackageTier[],

  beforeAfter: [
    {
      id: 'ba-bridal-gold',
      title: 'Bridal Warmth & Skin Tone Balance',
      category: 'Color Grading & Retouching',
      description:
        'Balancing harsh mixed tungsten lamps into creamy, luminous royal gold while preserving authentic skin pore texture.',
      beforeImage:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=50&sat=-40&con=-20',
      afterImage:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=90',
      technique: 'Custom 3D LUT + Frequency Separation Retouching',
    },
    {
      id: 'ba-cinematic-portrait',
      title: 'Editorial Shadow Recovery & Depth',
      category: 'High-Fashion Dynamic Range',
      description:
        'Sculpting ambient daylight into high-contrast chiaroscuro with velvety blacks and champagne highlights.',
      beforeImage:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=50&sat=-50&bri=-15',
      afterImage:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=90',
      technique: 'Dodge & Burn Micro-Sculpting + Kodak Portra 400 Curve Emulation',
    },
  ] as BeforeAfterItem[],

  stats: [
    { value: '8+', label: 'Years Behind The Lens', isDemo: true },
    { value: '250+', label: 'Weddings & Stories Captured', isDemo: true },
    { value: '18', label: 'Countries & States Visited', isDemo: true },
    { value: '100%', label: 'Dedicated Artistic Focus', isDemo: false },
  ],

  testimonials: [
    {
      id: 't-1',
      quote:
        'The photographs didn’t just show what happened. They brought us back to how it felt. Charudatta and his team felt like quiet friends who understood our families instinctively.',
      client: 'Priya & Akshay Singhania',
      event: 'Destination Wedding',
      location: 'Udaipur, Rajasthan',
      rating: 5,
      date: 'December 2024',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 't-2',
      quote:
        'Working with Charudatta was the most effortless experience of our wedding planning. The frames look like still frames from a classic romantic film. Pure understated luxury.',
      client: 'Ananya & Kabir Mehta',
      event: 'Pre-Wedding & Sangeet',
      location: 'Florence & Mumbai',
      rating: 5,
      date: 'October 2024',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 't-3',
      quote:
        'For our luxury campaign, Arya brought an unmatched aesthetic maturity. Every shadow was sculpted with deliberate poise. Our sales jumped 40% following the campaign launch.',
      client: 'Devina Shroff',
      event: 'Creative Director, Maison Aurum',
      location: 'Jaipur & Delhi',
      rating: 5,
      date: 'January 2025',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ] as TestimonialItem[],

  quoteSection: {
    quote:
      'Every photograph has a story.\nEvery story deserves to be remembered.',
    author: 'Charudatta Arya',
    image:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2400&q=80',
  },

  about: {
    eyebrow: '04 — BEHIND THE CAMERA',
    title: 'The Art of Silent Observation',
    subtitle: 'Charudatta Arya — Visual Artist & Storyteller',
    portraitImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    bioP1:
      'With over eight years of experience behind medium format digital and analog film cameras, Charudatta Arya brings a rare sensibility born out of formal architectural design and classical painting studies.',
    bioP2:
      'Rather than orchestrating artificial moments or relying on cookie-cutter poses, he works with natural light, gentle human interaction, and cinematic composition. His work has been celebrated across distinguished wedding publications and luxury fashion houses across India and Europe.',
    philosophy:
      'To make an image that stands the test of thirty years is harder than making one that trends for thirty minutes. We design for longevity, nostalgia, and quiet elegance.',
    studioLocation: 'Koregaon Park, Pune, Maharashtra, India',
    availableFor: 'Available across India, Europe, Southeast Asia & the Americas.',
  },

  instagramGrid: [
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      caption: 'The twilight pheras in Udaipur.',
      likes: '1.2k',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
      caption: 'Priya in handwoven zardozi veil.',
      likes: '2.4k',
    },
    {
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
      caption: 'Golden hour in Tuscany with Kabir & Ananya.',
      likes: '980',
    },
    {
      url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
      caption: 'Editorial couture studies in studio.',
      likes: '1.8k',
    },
    {
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80',
      caption: 'The midnight banquet under lanterns.',
      likes: '840',
    },
    {
      url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
      caption: 'Emerald and gold still life detail.',
      likes: '1.1k',
    },
  ],

  contact: {
    eyebrow: '05 — GET IN TOUCH',
    headline: 'Your Story Deserves More Than a Photograph.',
    subheadline:
      'Let’s create something you will want to remember forever. Dates fill up to 9 months in advance for peak wedding seasons.',
    address: 'Studio Arya, Lane 7, Koregaon Park, Pune, Maharashtra 411001',
    phoneDisplay: '+91 98220 18492',
    phoneCall: '+919822018492',
    email: 'hello@charudattaarya.com',
    hours: 'Monday – Saturday: 10:00 AM – 7:30 PM (By Appointment Only)',
    googleMapsUrl:
      'https://maps.google.com/?q=Koregaon+Park+Pune+Maharashtra',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.339247167073!2d73.8906606822818!3d18.53620862078512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c050085a8647%3A0xb35a3962b166299!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com', handle: '@charudatta.arya' },
      { name: 'WhatsApp', url: 'https://wa.me/919822018492', handle: '+91 98220 18492' },
      { name: 'Behance', url: 'https://behance.net', handle: 'charudattaarya' },
      { name: 'YouTube', url: 'https://youtube.com', handle: 'Arya Visual Films' },
    ],
  },

  agencyCredit: {
    text: 'Website crafted by KSJ Technologies',
    url: 'https://ksjtechnologies.in',
  },
};

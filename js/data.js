/**
 * A P STUDIO — Master Data Store
 * Photography, Videography & Creative Production House
 */

const AP_STUDIO_DATA = {
  brand: {
    name: "A P STUDIO",
    subName: "PHOTOGRAPHY & CREATIVE PRODUCTION",
    tagline: "Stories Behind Every Frame",
    phone: "+91 98765 43210",
    email: "booking@apstudio.com",
    whatsapp: "919876543210",
    address: "Studio 4, Creative Enclave, Bengaluru, India"
  },

  hero: {
    eyebrow: "A PHOTOGRAPHY & CREATIVE STUDIO",
    headline: "Stories Behind\nEvery Frame.",
    subtext: "Photography, production and creative spaces designed to bring your vision to life.",
    primaryCta: "Explore Our Work →",
    secondaryCta: "Book the Studio"
  },

  about: {
    eyebrow: "THE STUDIO",
    headline: "Where Vision\nBecomes Visual.",
    paragraph: "A P Studio is a premier multi-disciplinary photography and creative production house. We provide high-end portrait and commercial photography, cinematic video production, state-of-the-art studio floor rentals, professional camera equipment, and end-to-end creative production services for artists, agencies, and brands.",
    stats: [
      { number: "4", label: "Studio Floors" },
      { number: "150+", label: "Productions Executed" },
      { number: "24/7", label: "Crew & Support" }
    ],
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=85"
  },

  services: [
    {
      number: "01",
      title: "Photography",
      tag: "Portraits, Fashion & Commercial",
      desc: "Portraits, fashion editorials, commercial advertising, lookbooks, and fine-art photography crafted to international publishing standards."
    },
    {
      number: "02",
      title: "Videography",
      tag: "Cinematic & Commercial Films",
      desc: "High-end video production, commercial brand films, music videos, fashion films, and documentary visual storytelling in 4K/RAW."
    },
    {
      number: "03",
      title: "Studio Rental",
      tag: "4 Specialized Floors",
      desc: "Professional sound-dampened studio floors featuring natural daylight windows, cyclorama corner walls, DMX lighting grids, and vehicle drive-in access."
    },
    {
      number: "04",
      title: "Camera Rental",
      tag: "Cinema Bodies & Prime Glass",
      desc: "Comprehensive inventory of cinema camera bodies, medium-format systems, prime lens sets, Profoto strobes, Aputure LEDs, and grip trucks."
    },
    {
      number: "05",
      title: "Props & Production",
      tag: "Set Design & Styling",
      desc: "Curated vintage props, custom architectural set builds, backdrops, styling wardrobes, and specialized set styling resources."
    },
    {
      number: "06",
      title: "Creative Production",
      tag: "Full Crew & Direction",
      desc: "End-to-end production management including art direction, talent casting, location scouting, gaffers, technicians, and post-production suites."
    }
  ],

  portfolio: [
    {
      id: "p1",
      title: "Portrait Study — The Human Essence",
      category: "Portrait Photography",
      year: "2026",
      client: "Vogue India Feature",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
      layout: "feature-large"
    },
    {
      id: "p2",
      title: "Through The Lens — Monochromatic Shadows",
      category: "Creative Editorial",
      year: "2026",
      client: "Aethera Apparel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
      layout: "medium-left"
    },
    {
      id: "p3",
      title: "Studio Stories — Light & Architecture",
      category: "Commercial Photography",
      year: "2025",
      client: "Noire Design House",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
      layout: "medium-right"
    },
    {
      id: "p4",
      title: "Cinematic Frames — High Fashion Runway",
      category: "Fashion & Visual Storytelling",
      year: "2025",
      client: "Velora Couture",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=85",
      layout: "full-width"
    }
  ],

  hallOfFame: [
    {
      number: "01",
      name: "Ananya Roy",
      category: "Portrait / Editorial",
      tags: "Vogue • Harper's Bazaar",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "02",
      name: "Vikramaditya Studio",
      category: "Fashion / Commercial",
      tags: "Elle • GQ India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "03",
      name: "Redefine Films",
      category: "Creative / Studio Production",
      tags: "Commercial Films • Music Videos",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "04",
      name: "Elena Rostova",
      category: "Fine Art / Cinematography",
      tags: "Documentary • Exhibition",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "05",
      name: "Craft & Co.",
      category: "Commercial & Spatial Styling",
      tags: "Architectural Digest",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80"
    }
  ],

  studioSpaces: [
    {
      id: "s01",
      tag: "STUDIO 01",
      name: "Natural Light Studio (Floor 1)",
      desc: "Spacious 2,500 sq.ft floor featuring 16ft high ceilings, floor-to-ceiling north-facing windows, and a seamless white corner cyclorama.",
      specs: { area: "2,500 sq.ft", ceiling: "16 ft", light: "North Daylight" },
      facilities: ["North-facing Diffused Daylight Windows", "White Corner Cyclorama Wall (24ft x 20ft)", "Private Hair & Makeup Vanity Suite", "High-Speed Fiber & Dedicated Client Lounge"],
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "s02",
      tag: "STUDIO 02",
      name: "Creative Production Space (Floor 2)",
      desc: "A sound-dampened 3,000 sq.ft blackbox studio floor equipped with overhead DMX lighting grid rigs and silent HVAC climate control.",
      specs: { area: "3,000 sq.ft", ceiling: "18 ft", light: "Controlled Blackbox" },
      facilities: ["Sound-Dampened Blackbox Environment", "Overhead DMX Lighting Rig Grid", "Green Room & Talent VIP Lounge", "3-Phase 100A Industrial Power Supply"],
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "s03",
      tag: "STUDIO 03",
      name: "Portrait & Editorial Space (Floor 3)",
      desc: "Intimate 1,800 sq.ft boutique portrait floor curated with hand-painted textured canvas backdrops, vintage furniture props, and softbox rigs.",
      specs: { area: "1,800 sq.ft", ceiling: "14 ft", light: "Strobe & Ambient" },
      facilities: ["Hand-Painted Oliphant Canvas Backdrops", "Vintage Furniture & Architectural Props", "Private Styling & Wardrobe Changing Rooms", "Profoto Strobes & Para Softbox Setup"],
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "s04",
      tag: "STUDIO 04",
      name: "Multi-Purpose Bay (Floor 4)",
      desc: "Heavy-duty commercial bay with drive-in vehicle access, heavy hoist equipment points, and an expansive production mezzanine desk.",
      specs: { area: "4,000 sq.ft", ceiling: "22 ft", light: "High Bay Industrial" },
      facilities: ["Drive-in Vehicle Access Bay", "Heavy Hoist & Rigging Overhead Points", "Production Mezzanine Office Desk Space", "24/7 Security & Gear Loading Dock"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85"
    }
  ],

  cameraRental: [
    {
      category: "Cameras",
      items: "ARRI Alexa Mini, RED V-Raptor, Sony FX6, Hasselblad X2D",
      desc: "Full-frame cinema & high-resolution medium format camera bodies.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Lenses",
      desc: "Anamorphic, prime cine sets & fast portrait glass.",
      items: "Cooke Anamorphic Primes, Canon L-Series, Zeiss Master Primes",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Lighting",
      desc: "Profoto strobes, Aputure COB LEDs & Nanlite tubes.",
      items: "Profoto Pro-11 2400W, Aputure 600d Pro, Astera Titan Tubes",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Audio",
      desc: "Sennheiser shotguns, wireless lavaliers & field recorders.",
      items: "Sennheiser MKH416, Sound Devices MixPre-10, Lectrosonics Wireless",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Accessories",
      desc: "Monitors, wireless video transmitters, gimbals & tripods.",
      items: "SmallHD Cine 7, Teradek Bolt 4K, DJI Ronin 2, Sachtler Tripods",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80"
    }
  ],

  gallery: [
    {
      title: "Fine Art Portrait",
      category: "Portrait",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Fashion Editorial",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Studio Lighting Rig",
      category: "Behind the Scenes",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Commercial Product",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Cinematic Mood Study",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Natural Light Studio",
      category: "Space",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Minimalist Portrait",
      category: "Portrait",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Cinema Camera Gear",
      category: "Equipment",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85"
    }
  ],

  behindTheScenes: [
    {
      title: "Lighting Precision",
      caption: "Calibrating key lights and parabolic softboxes for fine-art portrait sessions.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Set Construction",
      caption: "Building custom architectural set pieces for commercial brand campaigns.",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Director & Camera",
      caption: "Real-time 4K wireless monitor monitoring with fashion creative directors.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Post-Production Review",
      caption: "Color grading and high-end retouching in our color-managed edit suites.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=85"
    }
  ],

  whyUs: [
    {
      title: "Professional Studio Spaces",
      desc: "4 specialized floors designed for daylight, blackbox cinema, portrait, and commercial car/heavy shoots."
    },
    {
      title: "Creative Production Support",
      desc: "On-ground art directors, set builders, technicians, and gaffers dedicated to your project."
    },
    {
      title: "Photography & Videography",
      desc: "Master photographers and cinematographers with extensive editorial and commercial experience."
    },
    {
      title: "Equipment & Production Resources",
      desc: "Full in-house inventory of cinema camera bodies, prime glass, Profoto strobes, and grip trucks."
    }
  ],

  testimonials: [
    {
      quote: "A P Studio is our first choice for high-fashion editorial covers. Their natural light floor and lighting inventory make every production seamless.",
      author: "Vikramaditya S.",
      role: "Creative Director, Vogue & GQ Collaborator"
    },
    {
      quote: "The blackbox studio space and overhead DMX lighting grid saved us hours of rigging during our latest commercial film shoot.",
      author: "Radhika K.",
      role: "Executive Producer, Redefine Media"
    }
  ]
};

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
    paragraph: "A P Studio is a multi-disciplinary photography and creative production house. We provide high-end portrait and commercial photography, video production, state-of-the-art studio floor rentals, professional camera equipment, and end-to-end creative production services for artists, agencies, and brands.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=85"
  },

  services: [
    {
      number: "01",
      title: "Photography",
      desc: "Portraits, fashion, commercial, editorial, and creative photography tailored to fine-art standards."
    },
    {
      number: "02",
      title: "Videography",
      desc: "Cinematic video production, commercial films, brand documentaries, and visual storytelling."
    },
    {
      number: "03",
      title: "Studio Rental",
      desc: "Professional sound-dampened studio floors equipped with natural light bays and cyc walls."
    },
    {
      number: "04",
      title: "Camera Rental",
      desc: "Professional photography and cinema camera bodies, prime lenses, lighting rigs, and grip equipment."
    },
    {
      number: "05",
      title: "Props & Production",
      desc: "Curated vintage props, custom set construction, backdrop rigs, and production styling resources."
    },
    {
      number: "06",
      title: "Creative Production",
      desc: "End-to-end creative support including casting, location scouting, art direction, and post-production."
    }
  ],

  portfolio: [
    {
      id: "p1",
      title: "Portrait Study",
      category: "Portrait Photography",
      year: "2026",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      layout: "feature-large"
    },
    {
      id: "p2",
      title: "Through The Lens",
      category: "Creative Editorial",
      year: "2026",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
      layout: "medium-left"
    },
    {
      id: "p3",
      title: "Studio Stories",
      category: "Commercial Photography",
      year: "2025",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
      layout: "medium-right"
    },
    {
      id: "p4",
      title: "Cinematic Frames",
      category: "Fashion & Visual Storytelling",
      year: "2025",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85",
      layout: "full-width"
    }
  ],

  hallOfFame: [
    {
      number: "01",
      name: "Ananya Roy",
      category: "Portrait / Editorial",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "02",
      name: "Vikramaditya Studio",
      category: "Fashion / Commercial",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "03",
      name: "Redefine Films",
      category: "Creative / Studio Production",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "04",
      name: "Elena Rostova",
      category: "Fine Art / Cinematography",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    },
    {
      number: "05",
      name: "Craft & Co.",
      category: "Commercial & Spatial Styling",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80"
    }
  ],

  studioSpaces: [
    {
      id: "s01",
      tag: "STUDIO 01",
      name: "Natural Light Studio (Floor 1)",
      desc: "Spacious 2,500 sq.ft floor featuring 16ft high ceilings, floor-to-ceiling north-facing windows, and a seamless white corner cyclorama.",
      facilities: ["North-facing Diffused Daylight", "White Corner Cyclorama (24ft x 20ft)", "Hair & Makeup Vanity Suite", "High-Speed Fiber & Client Lounge"],
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "s02",
      tag: "STUDIO 02",
      name: "Creative Production Space (Floor 2)",
      desc: "A sound-dampened 3,000 sq.ft blackbox studio floor equipped with overhead DMX lighting grid rigs and silent HVAC climate control.",
      facilities: ["Sound-Dampened Blackbox Environment", "Overhead DMX Lighting Rig Grid", "Green Room & Talent Lounge", "3-Phase 100A Power Supply"],
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "s03",
      tag: "STUDIO 03",
      name: "Portrait & Editorial Space (Floor 3)",
      desc: "Intimate 1,800 sq.ft boutique portrait floor curated with hand-painted textured canvas backdrops, vintage furniture props, and softbox rigs.",
      facilities: ["Hand-Painted Oliphant Canvas Backdrops", "Vintage Furniture & Architectural Props", "Private Styling & Wardrobe Changing Rooms", "Profoto Lighting Setup"],
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "s04",
      tag: "STUDIO 04",
      name: "Multi-Purpose Bay (Floor 4)",
      desc: "Heavy-duty commercial bay with drive-in vehicle access, heavy hoist equipment points, and an expansive production mezzanine desk.",
      facilities: ["Drive-in Vehicle Access Bay", "Heavy Hoist & Rigging Points", "Production Mezzanine Office Space", "24/7 Security & Gear Loading Dock"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85"
    }
  ],

  cameraRental: [
    {
      category: "Cameras",
      desc: "Full-frame cinema & high-resolution medium format bodies.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Lenses",
      desc: "Anamorphic, prime cine sets & fast portrait glass.",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Lighting",
      desc: "Profoto strobes, Aputure COB LEDs & Nanlite tubes.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Audio",
      desc: "Sennheiser shotguns, wireless lavaliers & field recorders.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Accessories",
      desc: "Monitors, wireless video transmitters, gimbals & tripods.",
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

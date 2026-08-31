
/**
 * FLOORLAMP.AE — Product Catalog
 * All 11 products. Slugs match URL pattern: product.html?id={slug}
 * Prices set to null until confirmed — formatPrice() handles the display.
 */

const PRODUCTS = [

  /* ══════════════════════════════════════════════════════
     PRODUCT 01 — Modern Black LED Floor Lamp 185cm
     Source: Amazon UAE B0HCC2WF5M
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-001',
    slug: 'modern-led-floor-lamp-living-room',
    images: [
      'images/products/f11.jpg',
      'images/products/f55.jpg',
      'images/products/gj.jpg',
      'images/products/g.jpg',
    ],
    name: 'Modern Black LED Floor Lamp 185cm',
    seoTitle: 'Modern Black LED Floor Lamp 185cm | Warm Light Standing Lamp for Living Room, Bedroom & Office | Floorlamp.ae',
    metaDesc: 'A modern 185cm matte black LED floor lamp with warm white light, slim vertical design and 110-240V compatibility. Ideal for living rooms, bedrooms and offices. UAE delivery.',
    imageAlt: 'Modern matte black LED floor lamp 185cm tall with warm white light, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 180,
    oldPrice: 360,
    rating: 4.7,
    reviewCount: 18,
    badge: 'New',
    new: true,
    inStock: true,
    stock: 4,
    tags: ['LED', 'vertical', 'warm', 'black', 'matte black', '185cm', 'living room', 'bedroom', 'office', 'modern', 'minimalist'],

    shortDesc: 'A slim 185cm matte black LED floor lamp with warm white light and a clean modern design. Simple one-mode operation, wide voltage compatibility (110-240V).',

    description: 'A simple, elegant way to bring warm and comfortable lighting into your space. This modern vertical floor lamp combines a slim silhouette with a clean matte black finish, making it an easy addition to contemporary, minimalist and modern interiors.\n\nIts soft warm light creates a relaxing atmosphere that\'s ideal for reading, unwinding in the evening, working, or adding ambient lighting to your room. The slim vertical design fits neatly beside a sofa, bed, desk or in an empty corner without making the space feel cluttered.\n\nStanding at 185cm tall, with a 26 x 70 x 185cm footprint, the lamp provides practical lighting while maintaining a sleek, understated appearance. It supports 110-240V, making it suitable for a wide range of electrical environments.\n\nWith its straightforward one-mode operation, there\'s no need to deal with complicated settings. Simply plug it in, switch it on, and enjoy warm, comfortable illumination.',

    bullets: [
      'Soft Warm Light — Creates a comfortable and relaxing atmosphere for evenings, reading and everyday use',
      'Eye-Friendly Illumination — Soft, flicker-free warm lighting for comfortable extended use',
      'Slim Vertical Design — 185cm-tall profile fits neatly beside sofas, beds, desks and in corners',
      'Modern Matte Black Finish — Complements modern, contemporary and minimalist interiors',
      'Versatile Placement — Ideal for living rooms, bedrooms, home offices and reading corners',
      '110-240V Compatibility — Supports a wide voltage range for versatile use',
      'Simple Operation — One straightforward lighting mode with no complicated controls',
    ],

    features: [
      'Warm white LED light source',
      'Matte black finish',
      'Slim vertical standing design',
      'Height: 185cm',
      'Input voltage: 110-240V',
      'Single lighting mode',
      'Simple on/off control',
    ],

    specs: {
      'Product Type': 'LED Floor Lamp',
      'Design': 'Vertical / Standing',
      'Color': 'Matte Black',
      'Light Color': 'Warm White',
      'Lighting Mode': 'Single Mode',
      'Voltage': '110-240V',
      'Dimensions': '26 x 70 x 185cm',
      'Height': '185cm',
      'Suitable For': 'Living Room, Bedroom, Office, Reading Corner',
      'Style': 'Modern / Minimalist',
      'Installation': 'Floor Standing',
      'Controls': 'Simple On/Off',
      'Dimmable': 'No',
      'Remote Control': 'No',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Home offices',
      'Reading corners',
      'Beside sofas',
      'Beside beds',
      'Desk-side lighting',
      'Empty corners',
      'Modern and minimalist interiors',
    ],

    whatsIncluded: ['1 x Modern LED Floor Lamp', '1 x Power connection', '1 x Installation instructions'],

    faqs: [
      { q: 'Is a separate bulb required?', a: 'No. This lamp uses an integrated LED light source. No separate bulb purchase is needed.' },
      { q: 'Is this lamp compatible with UAE power sockets?', a: 'Yes. The lamp supports 110-240V and is fully compatible with UAE mains power at 220-240V.' },
      { q: 'Can I dim this lamp?', a: 'No. This lamp operates in a single warm white mode with simple on/off control. It does not have dimming functionality.' },
      { q: 'How tall is this lamp?', a: 'The lamp stands 185cm tall with a 26 x 70cm base footprint, making it a full-height standing lamp suitable for most rooms.' },
      { q: 'Is it suitable beside a bed?', a: 'Yes. Its slim vertical profile makes it ideal for bedside use as a stylish alternative to a table lamp.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Office, Reading Corner',
  },

  /* ══════════════════════════════════════════════════════
     PRODUCT 02 — Modern Floor Lamp with Linen Shade 158cm
     Source: Amazon UAE B0HCCHV6DL
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-002',
    slug: 'dimmable-gooseneck-reading-floor-lamp',
    images: [
      'images/products/f22.jpg',
      'images/products/lp.jpg',
      'images/products/ko.jpg',
      'images/products/kp.jpg',
    ],
    name: 'Modern Floor Lamp with Linen Shade',
    seoTitle: 'Modern Floor Lamp with Linen Shade | 158cm Black Standing Lamp with 2700K Bulb & Foot Switch | Floorlamp.ae',
    metaDesc: 'Elegant 158cm black floor lamp with a soft linen shade, 2700K warm LED bulb included, E27 socket and foot switch. Perfect for living rooms, bedrooms and offices. UAE delivery.',
    imageAlt: 'Modern black floor lamp with linen shade 158cm tall, warm 2700K light, foot switch, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 125,
    oldPrice: 250,
    rating: 4.8,
    reviewCount: 31,
    badge: 'Best Seller',
    new: false,
    inStock: true,
    stock: 10,
    tags: ['linen shade', 'black', 'warm light', '2700K', 'foot switch', 'E27', 'bulb included', '158cm', 'living room', 'bedroom', 'office', 'modern', 'minimalist'],

    shortDesc: 'An elegant 158cm black floor lamp with a soft linen shade, 2700K warm LED bulb included, E27 socket and foot switch. Ready to use straight out of the box.',

    description: 'Bring a warm and welcoming atmosphere to your home with this elegant modern floor lamp with a linen shade. Designed with a tall 158cm profile and a sleek black finish, it adds a refined touch to living rooms, bedrooms, offices and cozy reading corners.\n\nThe soft linen lampshade gently diffuses the light, creating a comfortable warm glow that\'s perfect for relaxing evenings, reading or adding ambient lighting to your space. The included 2700K LED bulb produces a soft warm-white light, so the lamp is ready to use straight out of the box.\n\nFor everyday convenience, the lamp features a practical foot switch, allowing you to turn the light on or off with a simple tap of your foot. Its standard E27 socket also gives you the flexibility to replace or upgrade the bulb whenever you choose.\n\nWith its minimalist black design, natural-looking linen shade and tall, space-conscious profile, this floor lamp fits effortlessly into modern and contemporary interiors.',

    bullets: [
      'Elegant Linen Shade — Softly diffuses the light to create a warm, comfortable glow while adding a refined decorative touch',
      '2700K Warm LED Bulb Included — Enjoy soft warm lighting without needing to purchase a bulb separately',
      'Convenient Foot Switch — Easily turn the lamp on or off with your foot without reaching for the cable',
      'Standard E27 Socket — Compatible with E27 replacement bulbs, giving you flexibility when you want to change the lighting',
      'Tall 158cm Design — Provides useful ambient lighting while adding height and style to your room',
      'Modern Black Finish — The clean black design works naturally with contemporary, minimalist and modern interiors',
      'Versatile Lighting — Ideal for creating a cozy atmosphere in living rooms, bedrooms, offices and reading areas',
    ],

    features: [
      'Linen lampshade',
      'Matte black finish',
      'Height: 158cm',
      '2700K warm LED bulb included',
      'E27 socket',
      'Foot switch',
      'Ambient lighting',
    ],

    specs: {
      'Product Type': 'Floor Lamp',
      'Design': 'Modern Standing Lamp',
      'Color': 'Black',
      'Shade Material': 'Linen',
      'Height': '158cm',
      'Light Color': 'Warm White',
      'Color Temperature': '2700K',
      'Bulb Included': 'Yes',
      'Bulb Type': 'LED',
      'Socket Type': 'E27',
      'Switch Type': 'Foot Switch',
      'Lighting Purpose': 'Ambient Lighting',
      'Suitable For': 'Living Room, Bedroom, Office, Reading Corner',
      'Installation': 'Floor Standing',
      'Style': 'Modern / Minimalist',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Home offices',
      'Reading corners',
      'Beside sofas',
      'Relaxing areas',
      'Modern apartments',
      'Contemporary interiors',
      'Ambient home lighting',
    ],

    whatsIncluded: [
      '1 x Modern Floor Lamp',
      '1 x Linen Lampshade',
      '1 x 2700K LED Bulb',
      '1 x Foot Switch',
      '1 x E27 Socket',
    ],

    faqs: [
      { q: 'Is a bulb included with this lamp?', a: 'Yes. A 2700K warm white LED bulb is included, so the lamp is ready to use straight out of the box.' },
      { q: 'Can I replace the bulb with a different type?', a: 'Yes. The E27 socket accepts any standard E27 LED bulb, giving you flexibility to choose your preferred wattage or colour temperature.' },
      { q: 'How does the foot switch work?', a: 'The foot switch is located near the base of the lamp. A simple tap turns the lamp on or off without needing to reach for the cable or shade.' },
      { q: 'Is the linen shade replaceable?', a: 'The linen shade is attached to the lamp. Please contact us if you require a replacement shade.' },
      { q: 'Is this lamp suitable for a bedroom?', a: 'Yes. The 2700K warm light and soft linen shade make it ideal for bedrooms, creating a relaxing, comfortable atmosphere.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Office, Reading Corner',
  },


  /* ══════════════════════════════════════════════════════
     PRODUCT 03 — Dimmable Linen Floor Lamp with Remote
     Source: Amazon UAE B0HCCK98NB
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-003',
    slug: 'modern-black-vertical-floor-lamp-185cm',
    images: [
      'images/products/f33.jpg',
      'images/products/hu.jpg',
      'images/products/hi.jpg',
      'images/products/hm.jpg',
    ],
    name: 'Dimmable Linen Floor Lamp with Remote Control',
    seoTitle: 'Dimmable Linen Floor Lamp with Remote Control | 3 Color Temperatures & 9W LED Bulb | Floorlamp.ae',
    metaDesc: 'Elegant dimmable floor lamp with linen shade, 3 colour temperatures, remote control, foot switch and 9W LED bulb included. Perfect for living rooms and bedrooms. UAE delivery.',
    imageAlt: 'Dimmable floor lamp with linen shade, remote control and 3 colour temperatures, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 160,
    oldPrice: 320,
    rating: 4.6,
    reviewCount: 22,
    badge: null,
    new: false,
    inStock: true,
    stock: 5,
    tags: ['dimmable', 'linen', 'remote control', 'foot switch', '3 colour temperatures', '9W', 'bulb included', 'living room', 'bedroom', 'office', 'corner', 'modern'],

    shortDesc: 'A dimmable linen shade floor lamp with remote control, 3 colour temperatures, foot switch and 9W LED bulb included. Ready to use straight out of the box.',

    description: 'Create the right atmosphere for every moment with this elegant dimmable floor lamp with a linen shade. Designed for modern homes, it combines a soft, stylish appearance with flexible lighting and convenient controls.\n\nThe linen shade gently diffuses the light, creating a warm and comfortable glow that works beautifully in living rooms, bedrooms, home offices and cozy corners. Whether you\'re relaxing in the evening, reading a book or working during the day, you can adjust the lighting to suit the moment.\n\nChoose between three color temperatures — warm, neutral and cool white — to create different lighting environments throughout the day. The dimming function also allows you to adjust the brightness according to your preference.\n\nYou can control the lamp in two convenient ways. Use the foot switch for quick on/off operation, or use the included remote control to adjust the lighting from across the room.\n\nThe lamp comes with a 9W LED bulb, making it ready to use straight out of the box. Its combination of a classic linen shade, modern standing design and adjustable lighting makes it a practical and stylish addition to contemporary interiors.',

    bullets: [
      'Remote-Controlled Lighting — Adjust the lamp conveniently from across the room without needing to get up',
      '3 Color Temperatures — Switch between warm, neutral and cool white light to suit different activities and moods',
      'Dimmable Brightness — Adjust the brightness from soft ambient lighting to brighter everyday illumination',
      'Dual Control — Use the foot switch for quick on/off or the remote for full lighting adjustments',
      'Linen Shade — Gently diffuses the light and adds a warm, sophisticated look to your interior',
      '9W LED Bulb Included — Ready to use without needing to purchase a separate bulb',
      'Versatile Design — Works well as a living room lamp, bedroom lamp, office lamp or corner light',
    ],

    features: [
      'Linen shade',
      '3 colour temperatures: warm / neutral / cool white',
      'Dimmable brightness',
      'Remote control',
      'Foot switch',
      '9W LED bulb included',
      'Modern standing design',
    ],

    specs: {
      'Product Type': 'Dimmable Floor Lamp',
      'Design': 'Modern Standing Lamp',
      'Shade': 'Linen',
      'Light Type': 'LED',
      'Bulb Power': '9W',
      'Color Temperatures': '3 Adjustable Color Temperatures',
      'Lighting': 'Warm / Neutral / Cool White',
      'Brightness': 'Dimmable',
      'Remote Control': 'Yes',
      'Foot Switch': 'Yes',
      'Bulb Included': 'Yes',
      'Suitable For': 'Living Room, Bedroom, Office, Corner Spaces',
      'Installation': 'Floor Standing',
      'Style': 'Modern / Contemporary',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Home offices',
      'Reading corners',
      'Beside sofas',
      'Relaxing areas',
      'Bedroom corners',
      'Modern apartments',
      'Ambient lighting',
      'Reading and working',
    ],

    whatsIncluded: [
      '1 x Dimmable Floor Lamp',
      '1 x Linen Lampshade',
      '1 x 9W LED Bulb',
      '1 x Remote Control',
      '1 x Foot Switch',
    ],

    faqs: [
      { q: 'Is a bulb included?', a: 'Yes. A 9W LED bulb is included so the lamp is ready to use straight out of the box.' },
      { q: 'How many colour temperatures does this lamp have?', a: 'The lamp has 3 colour temperature settings — warm, neutral and cool white — so you can adjust the light to suit different activities and times of day.' },
      { q: 'Can I use the remote and the foot switch together?', a: 'Yes. Both controls work independently. Use the foot switch for quick on/off and the remote for dimming and colour temperature adjustments.' },
      { q: 'What is the range of the remote control?', a: 'The remote control operates effectively within a standard room. Please refer to the product documentation for the exact specified range.' },
      { q: 'Is this lamp suitable for a bedroom?', a: 'Yes. The linen shade, dimmable brightness and warm colour temperature setting make it ideal for creating a relaxing bedroom atmosphere.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Office, Corner Spaces',
  },

  /* ══════════════════════════════════════════════════════
     PRODUCT 04 — Modern Black Floor Lamp with Lampshade
     Source: Amazon UAE B0HCCY5GC9
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-004',
    slug: 'linen-shade-floor-lamp-black-158cm',
    images: [
      'images/products/f44.jpg',
      'images/products/pi.jpg',
      'images/products/pu.jpg',
      'images/products/ps.jpg',
    ],
    name: 'Modern Black Floor Lamp with Lampshade',
    seoTitle: 'Modern Black Floor Lamp with Lampshade | 3 Color Temperatures & 12W LED Bulb | Floorlamp.ae',
    metaDesc: 'Minimalist black floor lamp with lampshade, 3 colour temperatures (3000K/4500K/6000K), 12W LED bulb included and foot switch. For living rooms and bedrooms. UAE delivery.',
    imageAlt: 'Modern minimalist black floor lamp with lampshade and 3 colour temperatures, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 105,
    oldPrice: 210,
    rating: 4.8,
    reviewCount: 27,
    badge: 'Best Seller',
    new: false,
    inStock: true,
    stock: 10,
    tags: ['black', 'lampshade', '3 colour temperatures', '12W', 'foot switch', 'bulb included', 'minimalist', 'living room', 'bedroom', 'office', 'reading corner', 'modern'],

    shortDesc: 'A minimalist black pole floor lamp with lampshade, 3 colour temperatures (3000K / 4500K / 6000K), 12W LED bulb included and foot switch. Ready to use out of the box.',

    description: 'Bring versatile lighting and a clean modern look to your home with this minimalist black floor lamp with lampshade. Designed with a tall, slim silhouette and a classic black finish, it adds a refined touch to contemporary, Scandinavian and minimalist interiors without taking up unnecessary space.\n\nChoose between three color temperatures to create the right atmosphere for different moments. Select Warm Light at 3000K for relaxing evenings, Natural Light at 4500K for comfortable everyday illumination, or Cool White at 6000K when you need brighter lighting for reading or working.\n\nThe included 12W LED bulb provides comfortable illumination straight out of the box, so there\'s no need to purchase a separate bulb before using the lamp.\n\nFor everyday convenience, the lamp features a foot switch, allowing you to turn the light on or off with a simple tap of your foot. Its tall pole design and compact footprint make it easy to position beside a sofa, bed, reading chair or desk.\n\nWith its combination of practical lighting, a stylish lampshade and a sleek black pole, this standing lamp is an easy way to add both function and character to your space.',

    bullets: [
      '3 Color Temperatures — Choose between 3000K warm, 4500K natural and 6000K cool white for different activities and moods',
      'Modern Minimalist Design — A sleek black pole and lampshade create a clean look that complements modern interiors',
      '12W LED Bulb Included — Ready to use straight out of the box with a powerful and energy-efficient LED bulb',
      'Convenient Foot Switch — Easily turn the lamp on or off without bending down or searching for a switch',
      'Tall & Space-Saving — The slim standing design fits naturally beside sofas, beds, desks and reading chairs',
      'Versatile Home Lighting — Suitable for relaxing, reading, working and everyday ambient lighting',
      'Stable Construction — Designed with a sturdy pole and weighted base for added stability',
    ],

    features: [
      'Fabric lampshade',
      'Black pole finish',
      '3 colour temperatures: 3000K / 4500K / 6000K',
      '12W LED bulb included',
      'Foot switch',
      'Weighted base',
      'Tall slim standing design',
    ],

    specs: {
      'Product Type': 'LED Floor Lamp',
      'Design': 'Minimalist Standing / Pole Lamp',
      'Color': 'Black',
      'Lampshade': 'Fabric Lampshade',
      'Light Type': 'LED',
      'Bulb Power': '12W',
      'Bulb Included': 'Yes',
      'Color Temperatures': '3000K / 4500K / 6000K',
      'Warm Light': '3000K',
      'Natural Light': '4500K',
      'Cool White': '6000K',
      'Switch Type': 'Foot Switch',
      'Base': 'Weighted Base',
      'Suitable For': 'Living Room, Bedroom, Office, Reading Corner',
      'Style': 'Modern / Minimalist',
      'Installation': 'Floor Standing',
      'Assembly': 'Required',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Reading corners',
      'Home offices',
      'Study areas',
      'Beside sofas',
      'Beside beds',
      'Reading chairs',
      'Modern apartments',
      'Minimalist interiors',
      'Scandinavian-style interiors',
    ],

    whatsIncluded: [
      '1 x Modern Floor Lamp',
      '1 x Lampshade',
      '1 x 12W LED Bulb',
      '1 x Foot Switch',
      '1 x Lamp Base',
      'Assembly components',
    ],

    faqs: [
      { q: 'Is a bulb included?', a: 'Yes. A 12W LED bulb is included so the lamp is ready to use straight out of the box.' },
      { q: 'How do I switch between the 3 colour temperatures?', a: 'Colour temperature is switched using the foot switch. Each press cycles through the three available settings: 3000K warm, 4500K natural and 6000K cool white.' },
      { q: 'Can I use this lamp for reading?', a: 'Yes. The 6000K cool white setting provides bright, clear light that is well suited for reading and working.' },
      { q: 'Is this lamp suitable for a bedroom?', a: 'Yes. The 3000K warm setting creates a soft, relaxing atmosphere that is ideal for bedrooms and evening use.' },
      { q: 'Is the base stable?', a: 'Yes. The lamp is designed with a weighted base for added stability on flat floor surfaces.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Office, Reading Corner',
  },


  /* ══════════════════════════════════════════════════════
     PRODUCT 05 — Modern Black Arc Floor Lamp
     Source: Amazon UAE B0HCJ8W553
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-005',
    slug: 'modern-arc-floor-lamp-black',
    images: [
      'images/products/f55.jpg',
      'images/products/p9.jpg',
      'images/products/pj.jpg',
      'images/products/pd.jpg',
    ],
    name: 'Modern Black Arc Floor Lamp with Adjustable Shade',
    seoTitle: 'Modern Black Arc Floor Lamp with Adjustable Shade | Standing Reading Lamp with Foot Switch | Floorlamp.ae',
    metaDesc: 'Elegant black arc floor lamp with adjustable hanging drum shade, foot switch and bulb included. Extends over sofas and reading chairs. UAE delivery.',
    imageAlt: 'Modern black arc floor lamp with adjustable drum shade over a sofa, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 180,
    oldPrice: 360,
    rating: 4.7,
    reviewCount: 34,
    badge: 'Best Seller',
    new: false,
    inStock: true,
    stock: 4,
    tags: ['arc', 'black', 'adjustable', 'drum shade', 'foot switch', 'bulb included', 'reading', 'over sofa', 'living room', 'bedroom', 'modern', 'contemporary'],

    shortDesc: 'A modern black arc floor lamp with an adjustable hanging drum shade, foot switch and bulb included. Extends over sofas, armchairs and beds for practical overhead-style lighting.',

    description: 'Add a distinctive touch of modern lighting to your home with this elegant arc floor lamp. Its sweeping curved design allows the lamp to extend over sofas, armchairs and beds, providing overhead-style illumination without requiring ceiling installation or additional wiring.\n\nThe tall arched pole creates a striking silhouette while keeping the base positioned conveniently beside your furniture. This makes it particularly useful for living rooms where you want to place the light over a sofa or reading chair without occupying valuable table space.\n\nThe adjustable hanging drum shade allows you to reposition the direction of the light according to your needs. Use it to create comfortable lighting for reading, relaxing, working or adding a warm ambient glow to your space.\n\nA convenient foot switch makes everyday operation simple. Turn the lamp on or off with a quick tap of your foot without having to reach behind furniture or search for a switch.\n\nFinished in a sleek black color, this modern standing lamp works naturally with contemporary, minimalist and modern interiors. A light bulb is included, allowing you to set up the lamp and start using it straight away.',

    bullets: [
      'Elegant Arc Design — The curved silhouette extends over sofas, chairs and beds to provide practical overhead-style lighting',
      'Adjustable Hanging Shade — Position the drum shade to direct light where you need it for reading, relaxing or accent lighting',
      'Convenient Foot Switch — Turn the lamp on or off easily with a simple tap of your foot',
      'Tall Standing Design — The extended pole reaches over furniture while keeping the base positioned beside it',
      'Bulb Included — Comes with a light bulb so you can use the lamp soon after setup',
      'Modern Black Finish — A sophisticated black design that complements contemporary and minimalist interiors',
      'Versatile Placement — Works beautifully beside sofas, armchairs, beds and reading chairs',
    ],

    features: [
      'Curved arc pole design',
      'Adjustable hanging drum shade',
      'Black finish',
      'Foot switch',
      'Bulb included',
      'Tall standing design',
      'Weighted base',
    ],

    specs: {
      'Product Type': 'Arc Floor Lamp',
      'Design': 'Arched / Standing Lamp',
      'Color': 'Black',
      'Shade Type': 'Hanging Drum Shade',
      'Shade': 'Adjustable',
      'Switch Type': 'Foot Switch',
      'Bulb': 'Included',
      'Lighting Style': 'Ambient / Reading Lighting',
      'Installation': 'Floor Standing',
      'Design Feature': 'Curved Arc Pole',
      'Suitable For': 'Living Room, Bedroom, Office, Reading Corner',
      'Placement': 'Beside Sofa, Armchair or Bed',
      'Style': 'Modern / Contemporary',
      'Assembly': 'Required',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Home offices',
      'Reading corners',
      'Beside sofas',
      'Over couches',
      'Beside armchairs',
      'Reading chairs',
      'Bedside areas',
      'Modern and minimalist interiors',
    ],

    whatsIncluded: [
      '1 x Arc Floor Lamp',
      '1 x Adjustable Drum Lampshade',
      '1 x Light Bulb',
      '1 x Foot Switch',
      '1 x Lamp Base',
      'Assembly components',
    ],

    faqs: [
      { q: 'Is a bulb included?', a: 'Yes. A light bulb is included so you can set up and use the lamp straight away.' },
      { q: 'Is the arc long enough to reach over a standard sofa?', a: 'Yes. The lamp is designed specifically to arc over a sofa or seating area. Please refer to the product dimensions for the exact reach.' },
      { q: 'Can I adjust the position of the shade?', a: 'Yes. The hanging drum shade is adjustable so you can reposition it to direct light where you need it.' },
      { q: 'How does the foot switch work?', a: 'The foot switch is positioned near the base of the lamp. A simple tap turns the lamp on or off without needing to reach behind furniture.' },
      { q: 'Is this lamp suitable for a bedroom?', a: 'Yes. The arc design works well beside a bed, extending over the sleeping area to provide reading or ambient light without taking up bedside table space.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Office, Reading Corner',
  },

  /* ══════════════════════════════════════════════════════
     PRODUCT 06 — Dimmable LED Corner Floor Lamp 180°
     Source: Amazon UAE B0HCJ7M48S
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-006',
    slug: 'dimmable-linen-floor-lamp-remote-control',
    images: [
      'images/products/f666.jpg',
      'images/products/pq.jpg',
      'images/products/ik.jpg',
      'images/products/if.jpg',
    ],
    name: 'Dimmable LED Corner Floor Lamp',
    seoTitle: 'Dimmable LED Corner Floor Lamp | 3 Color Temperatures & 180° Wide-Area Lighting | Floorlamp.ae',
    metaDesc: 'Modern dimmable LED corner floor lamp with 3 colour temperatures, 180° wide-area lighting and slim vertical profile. Ideal for living rooms, bedrooms and home offices. UAE delivery.',
    imageAlt: 'Dimmable LED corner floor lamp with 3 colour temperatures and 180 degree wide area lighting, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 180,
    oldPrice: 360,
    rating: 4.9,
    reviewCount: 41,
    badge: 'Best Seller',
    new: false,
    inStock: true,
    stock: 15,
    tags: ['dimmable', 'corner', 'LED', '3 colour temperatures', '180 degree', 'wide area', 'minimalist', 'living room', 'bedroom', 'office', 'modern'],

    shortDesc: 'A slim dimmable LED corner floor lamp with 3 colour temperatures, 180° wide-area lighting and a modern minimalist profile. Fits neatly into corners without taking up floor space.',

    description: 'Bring flexible, comfortable lighting to your home with this modern LED corner floor lamp. Designed with a slim, minimalist profile, it fits neatly into corners and smaller spaces while providing wide-area illumination across your room.\n\nThe lamp features three color temperature options, allowing you to switch between warm white, neutral white and cool white lighting depending on the time of day or activity. Choose a warmer tone when relaxing in the evening, a neutral tone for everyday lighting, or a cooler light when reading, working or focusing.\n\nIts dimmable brightness gives you additional control, allowing you to create anything from a soft ambient glow to brighter task lighting. This makes the lamp versatile enough for different activities and moods.\n\nThe 180° wide-area lighting design helps distribute light across a broad section of the room, making it particularly useful in living rooms, bedrooms and home offices.\n\nWith its slim vertical profile and contemporary appearance, the lamp can be positioned neatly in an unused corner without taking up much floor space. Its clean design complements modern, minimalist and contemporary interiors while providing practical everyday illumination.',

    bullets: [
      '3 Color Temperatures — Switch between warm white, neutral white and cool white to match your mood or activity',
      'Dimmable Brightness — Adjust the intensity from a soft ambient glow to brighter lighting for reading or working',
      '180° Wide-Area Lighting — Provides broad illumination to help light a larger portion of your room',
      'Space-Saving Corner Design — The slim vertical profile fits neatly into corners and smaller spaces',
      'Modern Minimalist Style — Clean, contemporary design complements a variety of interior styles',
      'Versatile Everyday Lighting — Suitable for relaxing, reading, working, studying and general room illumination',
      'Easy Placement — Designed to make use of unused corners while keeping your floor area uncluttered',
    ],

    features: [
      'LED light source',
      '3 colour temperatures: warm / neutral / cool white',
      'Dimmable brightness',
      '180° wide-area lighting',
      'Slim vertical corner design',
      'Modern minimalist profile',
    ],

    specs: {
      'Product Type': 'LED Floor Lamp',
      'Design': 'Corner / Standing Lamp',
      'Style': 'Modern / Minimalist',
      'Lighting Type': 'LED',
      'Color Temperatures': '3 Color Modes',
      'Light Modes': 'Warm White / Neutral White / Cool White',
      'Brightness': 'Dimmable',
      'Lighting Coverage': '180° Wide-Area Lighting',
      'Profile': 'Slim Vertical',
      'Placement': 'Corner / Floor Standing',
      'Suitable For': 'Living Room, Bedroom, Home Office',
      'Lighting Purpose': 'Ambient & Task Lighting',
      'Installation': 'Floor Standing',
      'Assembly': 'Required',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Home offices',
      'Study areas',
      'Reading corners',
      'Empty corners',
      'Small apartments',
      'Modern interiors',
      'Minimalist interiors',
      'Ambient lighting',
      'Task lighting',
    ],

    whatsIncluded: [
      '1 x LED Corner Floor Lamp',
      '1 x Lamp Base',
      '1 x Power Connection',
      'Assembly components',
      'User instructions',
    ],

    faqs: [
      { q: 'Does this lamp have dimming functionality?', a: 'Yes. The lamp has dimmable brightness so you can adjust the light intensity from a soft ambient glow to brighter illumination.' },
      { q: 'How many colour temperatures does this lamp have?', a: 'The lamp has 3 colour temperature modes — warm white, neutral white and cool white — so you can adjust the lighting to suit different activities and times of day.' },
      { q: 'What does 180° wide-area lighting mean?', a: 'The lamp is designed to distribute light broadly across approximately 180 degrees, helping to illuminate a larger section of the room rather than directing light in a single narrow beam.' },
      { q: 'Is this lamp suitable for a corner?', a: 'Yes. The slim vertical profile is specifically designed to fit neatly into corners without taking up much floor space.' },
      { q: 'Is this lamp suitable for a home office?', a: 'Yes. The cool white colour temperature and dimmable brightness make it practical for working, studying and focused tasks.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Home Office, Corner',
  },


  /* ══════════════════════════════════════════════════════
     PRODUCT 07 — Smart RGB Corner Floor Lamp
     Source: Amazon UAE B0HCL6TSJR
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-007',
    slug: 'minimalist-3-colour-floor-lamp-black',
    images: [
      'images/products/f77.jpg',
      'images/products/ij.jpg',
      'images/products/ip.jpg',
      'images/products/ia.jpg',
    ],
    name: 'Smart RGB Corner Floor Lamp',
    seoTitle: 'Smart RGB Corner Floor Lamp | 16 Million Colors with App, Remote & Music Sync | Floorlamp.ae',
    metaDesc: 'Modern smart RGB corner floor lamp with 16 million DIY colours, music sync, app control and remote. Perfect for living rooms, bedrooms and gaming rooms. UAE delivery.',
    imageAlt: 'Smart RGB corner floor lamp with 16 million colours, music sync and app control, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 105,
    oldPrice: 210,
    rating: 4.6,
    reviewCount: 19,
    badge: null,
    new: false,
    inStock: true,
    stock: 15,
    tags: ['RGB', 'smart', 'app control', 'remote control', 'music sync', '16 million colors', 'corner', 'black', 'living room', 'bedroom', 'gaming', 'entertainment', 'modern'],

    shortDesc: 'A smart RGB corner floor lamp with 16 million DIY colour options, music sync, app control and remote. Slim black corner design for living rooms, bedrooms and gaming rooms.',

    description: 'Transform your room with customizable ambient lighting using this modern RGB corner floor lamp. Designed with a sleek black finish and slim standing profile, it fits neatly into corners while adding vibrant color and atmosphere to your living space.\n\nWith up to 16 million DIY color options, you can create a lighting setup to match almost any mood, occasion or interior. Choose soft colors for a relaxed evening, vibrant shades for entertaining guests, or your favorite color to personalize your space.\n\nThe built-in music sync function takes your lighting experience further by responding to sound in real time. As your music plays, the lights can change and pulse with the rhythm, creating an immersive atmosphere for parties, gaming, movie nights or simply enjoying your favorite songs.\n\nControl the lamp conveniently using the dedicated smartphone app or included remote control. Adjust colors, brightness and lighting modes without having to reach for the lamp.\n\nIts slim corner design makes it ideal for living rooms, bedrooms, entertainment areas and other spaces where you want stylish accent lighting without taking up much floor space.\n\nWith its contemporary black finish and customizable RGB illumination, this smart floor lamp is an easy way to add personality and modern ambience to your home.',

    bullets: [
      '16 Million DIY Colors — Personalize your room with an enormous range of colors to suit different moods and occasions',
      'Music Sync Mode — Let the lighting react to music and sound to create a dynamic, immersive atmosphere',
      'App Control — Conveniently control colors, brightness and lighting modes using a compatible smartphone app',
      'Remote Control Included — Adjust your lighting comfortably from across the room',
      'Modern Corner Design — Slim vertical construction fits neatly into corners without taking up unnecessary floor space',
      'Customizable Mood Lighting — Create relaxing, colorful or vibrant atmospheres for everyday use and special occasions',
      'Sleek Black Finish — Contemporary styling complements modern, minimalist and entertainment-focused interiors',
    ],

    features: [
      'RGB LED light source',
      '16 million DIY colour options',
      'Music sync mode',
      'Smartphone app control',
      'Remote control included',
      'Dimmable brightness',
      'Slim black corner design',
    ],

    specs: {
      'Product Type': 'Smart RGB Floor Lamp',
      'Design': 'Corner / Standing Lamp',
      'Color': 'Black',
      'Lighting Type': 'RGB LED',
      'Color Options': 'Up to 16 Million Colors',
      'Color Customization': 'DIY Colors',
      'Music Sync': 'Yes',
      'App Control': 'Yes',
      'Remote Control': 'Yes',
      'Brightness Control': 'Yes',
      'Lighting Purpose': 'Ambient / Mood Lighting',
      'Placement': 'Corner / Floor Standing',
      'Suitable For': 'Living Room, Bedroom, Gaming Room, Entertainment Area',
      'Style': 'Modern / Contemporary',
      'Installation': 'Floor Standing',
      'Assembly': 'Required',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Gaming rooms',
      'Entertainment areas',
      'Movie nights',
      'Music rooms',
      'Home offices',
      'Party lighting',
      'Relaxing spaces',
      'Corner spaces',
      'Ambient mood lighting',
      'Modern interiors',
    ],

    whatsIncluded: [
      '1 x Smart RGB Floor Lamp',
      '1 x Lamp Base',
      '1 x Remote Control',
      '1 x Power Connection',
      'Assembly components',
      'User instructions',
    ],

    faqs: [
      { q: 'How do I control the lamp colors?', a: 'You can control the lamp using the dedicated smartphone app or the included remote control. Both allow you to change colors, adjust brightness and switch lighting modes.' },
      { q: 'How does the music sync work?', a: 'The music sync feature uses a built-in microphone on the lamp to detect ambient sound. The lighting then responds to the rhythm and beat of the music playing in the room.' },
      { q: 'How many colors does this lamp have?', a: 'The lamp supports up to 16 million DIY color options, giving you an enormous range of choices to personalize your lighting.' },
      { q: 'Is this lamp suitable for a gaming room?', a: 'Yes. The RGB color options, music sync and app control make it a popular choice for gaming rooms and entertainment setups.' },
      { q: 'Is the lamp compatible with UAE WiFi networks?', a: 'The lamp is compatible with standard 2.4GHz WiFi networks used across the UAE. Please refer to the product documentation for full connectivity details.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Gaming Room, Entertainment Area',
  },

  /* ══════════════════════════════════════════════════════
     PRODUCT 08 — Dimmable LED Reading Floor Lamp Gooseneck
     Source: Amazon UAE B0HCLKZ8T7
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-008',
    slug: 'dimmable-led-corner-floor-lamp-180-degree',
    images: [
      'images/products/f88.jpg',
      'images/products/hd.jpg',
      'images/products/h9.jpg',
      'images/products/he.jpg',
    ],
    name: 'Dimmable LED Reading Floor Lamp with Gooseneck',
    seoTitle: 'Dimmable LED Reading Floor Lamp with Gooseneck | 3 Colors, 10 Brightness Levels & 120 LEDs | Floorlamp.ae',
    metaDesc: 'Dimmable LED floor lamp with flexible gooseneck, 120 LEDs, 3 colour temperatures (3000K-6000K), 10 brightness levels and USB power. Perfect for reading and home offices. UAE delivery.',
    imageAlt: 'Dimmable LED reading floor lamp with flexible gooseneck, 120 LEDs and 10 brightness levels, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 107,
    oldPrice: 214,
    rating: 4.7,
    reviewCount: 28,
    badge: null,
    new: false,
    inStock: true,
    stock: 10,
    tags: ['dimmable', 'reading', 'gooseneck', 'LED', '120 LEDs', '3 colour temperatures', '10 brightness levels', 'USB', 'office', 'bedroom', 'craft', 'study', 'task lighting'],

    shortDesc: 'A dimmable LED reading floor lamp with a flexible 15.7-inch gooseneck, 120 LEDs, 3 colour temperatures, 10 brightness levels and USB power with 5V/2A adapter included.',

    description: 'Enjoy comfortable, adjustable lighting for reading, working and everyday activities with this modern dimmable LED floor lamp with a flexible gooseneck. Designed for focused lighting, it gives you precise control over both the color and brightness of the light, making it suitable for different activities and times of day.\n\nChoose from three color temperatures — 3000K warm white, 4500K neutral white and 6000K cool white — and combine them with 10 brightness levels to create the lighting you need. Use warm light for relaxing or reading in the evening, neutral light for everyday activities, or cool white light for focused work and detailed tasks.\n\nThe lamp features 120 LED beads designed to provide smooth, flicker-free illumination. Its flexible 15.7-inch gooseneck and 360° rotatable segmented metal tube allow you to direct the light toward your book, workspace, craft table or another specific area.\n\nA USB-powered design makes the lamp convenient to use with compatible USB power sources. The included 5V/2A adapter allows straightforward connection to a suitable power outlet, while USB compatibility can also make it convenient for use with compatible laptops, power banks and USB docks.\n\nThe compact 7-inch non-slip square base provides stability without taking up excessive floor space. With tool-free twist-and-tighten assembly, the lamp can be set up quickly and positioned wherever you need focused lighting.',

    bullets: [
      '3 Color Temperatures — Choose 3000K warm, 4500K neutral or 6000K cool white light for different activities and moods',
      '10 Brightness Levels — Fine-tune the brightness from softer ambient lighting to brighter task illumination',
      '120 LED Beads — Provides smooth, flicker-free illumination for comfortable everyday use',
      'Flexible Gooseneck — The 15.7-inch flexible neck allows you to position the light exactly where you need it',
      '360° Adjustable Direction — Rotate the segmented tube to direct light toward your reading area, desk or craft space',
      'USB Powered — Convenient USB connection with a 5V/2A adapter included',
      'Stable Space-Saving Base — The non-slip square base provides stability while keeping the footprint compact',
      'Versatile Task Lighting — Ideal for reading, working, studying, sewing, crafts and other detailed activities',
    ],

    features: [
      '120 LED beads',
      '3 colour temperatures: 3000K / 4500K / 6000K',
      '10 brightness levels',
      'Flexible 15.7-inch gooseneck',
      '360° adjustable light direction',
      'USB powered with 5V/2A adapter',
      '7-inch non-slip square base',
      'Tool-free assembly',
    ],

    specs: {
      'Product Type': 'LED Reading Floor Lamp',
      'Design': 'Standing / Task Lamp',
      'LED Quantity': '120 LEDs',
      'Color Temperatures': '3000K / 4500K / 6000K',
      'Light Modes': 'Warm / Neutral / Cool White',
      'Brightness Levels': '10',
      'Brightness': 'Dimmable',
      'Gooseneck Length': '15.7 inches',
      'Light Direction': '360° Adjustable',
      'Power Connection': 'USB',
      'Adapter': '5V / 2A Included',
      'Cable Length': '120 inches',
      'Base Size': '7-inch Square Base',
      'Base Type': 'Non-Slip',
      'Assembly': 'Tool-Free Twist & Tighten',
      'Suitable For': 'Living Room, Bedroom, Office, Craft Room',
      'Lighting Purpose': 'Reading / Task / Work Lighting',
    },

    perfectFor: [
      'Reading',
      'Living rooms',
      'Bedrooms',
      'Home offices',
      'Study areas',
      'Craft rooms',
      'Sewing',
      'Painting',
      'Hobby spaces',
      'Desk-side lighting',
      'Reading chairs',
      'Dorm rooms',
      'Focused task lighting',
    ],

    whatsIncluded: [
      '1 x LED Floor Lamp',
      '1 x Flexible Gooseneck',
      '1 x Square Non-Slip Base',
      '1 x USB Power Cable',
      '1 x 5V/2A Power Adapter',
      'Assembly components',
      'User instructions',
    ],

    faqs: [
      { q: 'How do I switch between the colour temperatures?', a: 'The colour temperature is switched using the control button on the lamp. Each press cycles through the three settings: 3000K warm, 4500K neutral and 6000K cool white.' },
      { q: 'How flexible is the gooseneck?', a: 'The 15.7-inch gooseneck is flexible and can be bent and repositioned to direct light at any angle, including directly over a book, desk or work surface.' },
      { q: 'Does this lamp require a separate bulb?', a: 'No. This lamp uses an integrated 120-LED panel. No separate bulb purchase is required.' },
      { q: 'What power source does this lamp use?', a: 'The lamp is USB powered. A 5V/2A adapter is included so you can connect it to a standard power outlet. It may also be compatible with USB ports on laptops and power banks.' },
      { q: 'Is this lamp suitable for a craft or sewing room?', a: 'Yes. The 6000K cool white setting and adjustable gooseneck make it well suited for detailed craft, sewing, painting and hobby work.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Office, Craft Room',
  },

  /* ══════════════════════════════════════════════════════
     PRODUCT 09 — Modern LED Floor Lamp Warm Light
     Source: Amazon UAE B0HCPFJG15
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-009',
    slug: 'smart-rgb-corner-floor-lamp',
    images: [
      'images/products/f99.jpg',
      'images/products/hb.jpg',
      'images/products/hw.jpg',
      'images/products/hx.jpg',
    ],
    name: 'Modern LED Floor Lamp with Warm Light',
    seoTitle: 'Modern LED Floor Lamp with Warm Light | Slim Vertical Standing Lamp for Living Room & Bedroom | Floorlamp.ae',
    metaDesc: 'A slim modern LED floor lamp with warm white light, vertical standing design and minimalist finish. Ideal for living rooms, bedrooms, bedside areas and reading corners. UAE delivery.',
    imageAlt: 'Modern slim vertical LED floor lamp with warm white light for living room and bedroom, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 140,
    oldPrice: 280,
    rating: 4.5,
    reviewCount: 36,
    badge: 'New',
    new: true,
    inStock: true,
    stock: 10,
    tags: ['LED', 'warm light', 'vertical', 'slim', 'standing lamp', 'living room', 'bedroom', 'bedside', 'modern', 'minimalist', 'ambient', 'decorative'],

    shortDesc: 'A slim modern LED floor lamp with soft warm light and a clean vertical design. Perfect for living rooms, bedrooms, bedside areas and reading corners.',

    description: 'Bring a warm and inviting atmosphere to your home with this modern LED floor lamp. Featuring a sleek vertical design and a minimalist appearance, it provides comfortable ambient lighting while adding a stylish decorative element to your space.\n\nThe soft warm light creates a cozy atmosphere that works beautifully in the evening, whether you\'re relaxing on the sofa, reading a book or simply winding down after a long day. Its understated design allows it to blend naturally with modern, minimalist and cozy interior styles.\n\nThe slim standing profile makes this lamp especially useful for spaces where you want additional lighting without taking up too much room. Place it beside your sofa, next to your bed, in a living room corner or alongside your workspace to add a soft layer of light exactly where you need it.\n\nDesigned for everyday home use, the LED lighting provides an energy-efficient alternative to traditional lighting while offering a simple and attractive way to enhance your interior.',

    bullets: [
      'Soft Warm Lighting — Creates a cozy and relaxing atmosphere for evenings, reading and everyday use',
      'Modern Vertical Design — A slim standing profile adds visual height while keeping the design clean and understated',
      'Space-Saving Profile — Fits naturally beside sofas, beds, desks and in unused corners',
      'Energy-Efficient LED Lighting — Uses LED technology for efficient everyday illumination',
      'Versatile Home Lighting — Suitable for both decorative and practical lighting around your home',
      'Easy to Style — Complements modern, minimalist and cozy interior designs',
      'Multi-Room Use — Works beautifully in living rooms, bedrooms, offices, bedside areas and sofa corners',
    ],

    features: [
      'Warm white LED light',
      'Slim vertical standing design',
      'Minimalist modern finish',
      'Energy-efficient LED',
      'Ambient and decorative lighting',
    ],

    specs: {
      'Product Type': 'LED Floor Lamp',
      'Design': 'Vertical / Standing Lamp',
      'Lighting Type': 'LED',
      'Light Color': 'Warm White',
      'Lighting Style': 'Ambient / Decorative',
      'Design Style': 'Modern / Minimalist',
      'Installation': 'Floor Standing',
      'Placement': 'Living Room, Bedroom, Bedside, Sofa Corner, Office',
      'Energy Type': 'LED',
      'Suitable For': 'Indoor Home Use',
      'Assembly': 'Required',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Bedside areas',
      'Sofa corners',
      'Reading corners',
      'Home offices',
      'Study areas',
      'Empty corners',
      'Modern apartments',
      'Minimalist interiors',
      'Ambient lighting',
      'Home decoration',
    ],

    whatsIncluded: [
      '1 x Modern LED Floor Lamp',
      '1 x Lamp Base',
      '1 x Power Connection',
      'Assembly components',
      'User instructions',
    ],

    faqs: [
      { q: 'Does this lamp require a separate bulb?', a: 'No. This lamp uses an integrated LED light source. No separate bulb purchase is required.' },
      { q: 'Is the light warm or cool?', a: 'The lamp produces soft warm white light, which creates a cozy and relaxing atmosphere ideal for evenings, reading and everyday home use.' },
      { q: 'Is this lamp suitable for a bedroom?', a: 'Yes. The slim vertical profile and soft warm light make it an ideal bedside or bedroom floor lamp.' },
      { q: 'Can I use this lamp beside a sofa?', a: 'Yes. The slim standing design fits naturally beside sofas, armchairs and reading chairs without taking up much floor space.' },
      { q: 'Is assembly required?', a: 'Minimal assembly is required. The lamp can typically be set up quickly without specialist tools.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Bedside, Office',
  },


  /* ══════════════════════════════════════════════════════
     WALL LAMP 01 — Battery Wall Sconces 2 Pack
     Source: Amazon UAE B0HCPLL4S9
  ══════════════════════════════════════════════════════ */
  {
    id: 'wl-001',
    slug: 'battery-wall-sconce-2-pack-remote-dimmable',
    images: [
      'images/products/f10.jpg',
      'images/products/bu.jpg',
      'images/products/bn.jpg',
      'images/products/bc.jpg',
    ],
    name: 'Battery Operated Wall Sconces 2 Pack with Remote',
    seoTitle: 'Battery Operated Wall Sconces 2 Pack with Remote | Dimmable Linen Wall Lamps | Floorlamp.ae',
    metaDesc: 'Battery operated wall sconces 2 pack with remote control, dimmable linen shade and bulbs included. No hardwiring required. Perfect for bedrooms and living rooms. UAE delivery.',
    imageAlt: 'Battery operated wall sconces 2 pack with remote control and linen shade, not hardwired, UAE',
    category: 'wall-lamps',
    categoryLabel: 'Wall Lamp',
    price: 149,
    oldPrice: 298,
    rating: 4.8,
    reviewCount: 44,
    badge: 'Sold Out',
    new: false,
    inStock: false,
    stock: 5,
    tags: ['battery', 'wall sconce', 'remote', 'dimmable', 'linen', 'not hardwired', '2 pack', 'bedroom', 'living room', 'hallway', 'modern', 'contemporary'],

    shortDesc: 'A set of two battery-operated wall sconces with remote control, dimmable linen shade and bulbs included. No hardwiring required — mount anywhere.',

    description: 'Add warm, elegant lighting to your home without the need for complicated electrical installation. This set of two battery operated wall sconces combines a classic linen shade with convenient wireless operation, making it an easy way to add lighting wherever you need it.\n\nEach wall sconce features a soft fabric linen shade that gently diffuses the light, creating a warm and inviting atmosphere. The understated design works beautifully with modern, minimalist and contemporary interiors, making these wall lights suitable for bedrooms, living rooms, reading corners and other indoor spaces.\n\nBecause the sconces are battery operated and do not require hardwiring, you have greater flexibility when deciding where to place them. There is no need to connect them to existing wall wiring, making them a convenient option for spaces where traditional wall lighting installation isn\'t practical.\n\nThe included remote control allows you to conveniently adjust the brightness from across the room. With dimmable lighting, you can create softer illumination for relaxing evenings or brighter lighting when you need it.\n\nSupplied as a matching set of two, these wall sconces are ideal for symmetrical placement on either side of a bed, mirror, sofa or other feature in your home.',

    bullets: [
      'Set of Two Matching Sconces — Perfect for creating a balanced and symmetrical lighting arrangement',
      'Battery Operated Design — Enjoy wall lighting without connecting the fixture to existing electrical wiring',
      'No Hardwiring Required — A flexible alternative to permanently wired wall lights',
      'Remote Control Included — Conveniently control the lighting from across the room',
      'Dimmable Lighting — Adjust brightness to create the atmosphere you want',
      'Elegant Linen Shade — Softly diffuses light while adding a refined decorative element',
      'Bulbs Included — Ready to use once the sconces are properly installed and powered',
      'Versatile Placement — Ideal for bedrooms, living rooms, reading areas and decorative wall spaces',
    ],

    features: [
      '2 sconces included',
      'Battery operated',
      'No hardwiring required',
      'Remote control',
      'Dimmable brightness',
      'Fabric linen shade',
      'Bulbs included',
      'Wall mounted',
    ],

    specs: {
      'Product Type': 'Wall Sconce / Wall Lamp',
      'Quantity': '2 Pack',
      'Power Type': 'Battery Operated',
      'Hardwiring': 'Not Required',
      'Control': 'Remote Control',
      'Brightness': 'Dimmable',
      'Shade Material': 'Fabric Linen',
      'Bulb': 'Included',
      'Installation': 'Wall Mounted',
      'Lighting Style': 'Ambient / Decorative',
      'Suitable For': 'Bedroom, Living Room, Reading Corner, Hallway',
      'Design Style': 'Modern / Contemporary',
      'Indoor Use': 'Yes',
      'Placement': 'Indoor Wall',
    },

    perfectFor: [
      'Bedrooms',
      'Living rooms',
      'Bedside lighting',
      'Reading corners',
      'Hallways',
      'Accent walls',
      'Around mirrors',
      'Beside sofas',
      'Home offices',
      'Modern apartments',
      'Symmetrical wall lighting',
    ],

    whatsIncluded: [
      '2 x Battery Operated Wall Sconces',
      '2 x Fabric Linen Shades',
      '2 x Bulbs',
      '1 x Remote Control',
      'Mounting / installation components',
      'User instructions',
    ],

    faqs: [
      { q: 'Do these sconces require hardwiring?', a: 'No. These wall sconces are battery operated and do not require any electrical wiring or a qualified electrician to install.' },
      { q: 'Can both sconces be controlled with one remote?', a: 'Yes. The single included remote controls both sconces simultaneously.' },
      { q: 'Are bulbs included?', a: 'Yes. Bulbs are included with both sconces so they are ready to use once mounted and powered.' },
      { q: 'How long do the batteries last?', a: 'Battery life depends on usage frequency. For best results, use quality alkaline batteries and turn the lights off when not needed.' },
      { q: 'Is drilling required to mount these sconces?', a: 'Minimal wall fixing is required to secure the mounting bracket. No electrical wiring is needed.' },
    ],

    perfectForSchema: 'Bedroom, Living Room, Reading Corner, Hallway',
  },

  /* ══════════════════════════════════════════════════════
     WALL LAMP 02 — Battery Operated Wall Sconces 2 Pack
     Source: Amazon UAE B0HCTVHP55
  ══════════════════════════════════════════════════════ */
  {
    id: 'wl-002',
    slug: 'dimmable-wall-sconce-2-pack-linen',
    images: [
      'images/products/f111.jpg',
      'images/products/ba.jpg',
      'images/products/bq.jpg',
      'images/products/bw.jpg',
    ],
    name: 'Battery Operated Wall Sconces 2 Pack with Remote',
    seoTitle: 'Battery Operated Wall Sconces 2 Pack with Remote | Dimmable Linen Wall Lamps for Bedroom & Living Room | Floorlamp.ae',
    metaDesc: 'Battery operated wall sconces 2 pack with remote control, dimmable linen shade and bulbs included. No hardwiring required. Ideal for bedrooms and living rooms. UAE delivery.',
    imageAlt: 'Battery operated dimmable wall sconces 2 pack with linen shade and remote control, UAE',
    category: 'wall-lamps',
    categoryLabel: 'Wall Lamp',
    price: 145,
    oldPrice: 290,
    rating: 4.7,
    reviewCount: 29,
    badge: 'Sold Out',
    new: false,
    inStock: false,
    stock: 5,
    tags: ['battery', 'dimmable', 'wall sconce', 'remote', 'linen', 'not hardwired', '2 pack', 'bedroom', 'living room', 'hallway', 'accent wall', 'modern', 'contemporary'],

    shortDesc: 'A matching set of two battery-operated wall sconces with remote control, dimmable linen shade and bulbs included. No hardwiring required — ideal for bedrooms and living rooms.',

    description: 'Bring stylish, flexible lighting to your home with this set of two battery operated wall sconces. Designed with elegant fabric linen shades and a clean, timeless look, these wall lamps add a soft decorative glow to bedrooms, living rooms, reading areas and other indoor spaces.\n\nThe battery-powered design means no hardwiring is required, giving you the freedom to place the sconces where you want without needing to connect them to existing electrical wiring. This makes them a convenient option for adding wall lighting to spaces where traditional wired fixtures may not be practical.\n\nEach sconce features a fabric linen shade that gently diffuses the light, creating a warm and comfortable atmosphere while adding a sophisticated touch to your interior.\n\nThe included remote control provides convenient control from a distance, while the dimmable function allows you to adjust the brightness according to your needs. Choose softer lighting for relaxing evenings or brighter illumination when reading or using the space.\n\nWith two matching sconces included, you can create a balanced and symmetrical look on either side of a bed, sofa, mirror or other focal point.',

    bullets: [
      '2-Piece Matching Set — Create a coordinated and symmetrical lighting arrangement around beds, sofas, mirrors and more',
      'Battery Operated — Add wall lighting without depending on existing electrical wiring',
      'No Hardwiring Required — A convenient option for flexible indoor lighting installation',
      'Remote Controlled — Adjust your lighting conveniently from across the room',
      'Dimmable Brightness — Set the light level to suit relaxing, reading or everyday use',
      'Elegant Linen Shade — Softly diffuses the light while adding a warm, sophisticated appearance',
      'Bulbs Included — Comes with bulbs for convenient setup without needing to purchase them separately',
      'Versatile Indoor Lighting — Suitable for bedrooms, living rooms, hallways, reading corners and accent walls',
    ],

    features: [
      '2 sconces included',
      'Battery operated',
      'No hardwiring required',
      'Remote control',
      'Dimmable brightness',
      'Fabric linen shade',
      'Bulbs included',
      'Wall mounted',
      'Matching pair',
    ],

    specs: {
      'Product Type': 'Wall Sconce / Wall Lamp',
      'Quantity': '2 Pack',
      'Power Type': 'Battery Operated',
      'Hardwiring': 'Not Required',
      'Control': 'Remote Control',
      'Brightness': 'Dimmable',
      'Shade Material': 'Fabric Linen',
      'Bulb': 'Included',
      'Installation': 'Wall Mounted',
      'Lighting Type': 'Ambient / Decorative',
      'Suitable For': 'Bedroom, Living Room, Hallway, Reading Area',
      'Design Style': 'Modern / Contemporary',
      'Usage': 'Indoor',
      'Placement': 'Indoor Wall',
      'Set Type': 'Matching Pair',
    },

    perfectFor: [
      'Bedrooms',
      'Living rooms',
      'Bedside lighting',
      'Reading corners',
      'Hallways',
      'Accent walls',
      'Around mirrors',
      'Beside sofas',
      'Home offices',
      'Modern apartments',
      'Decorative wall lighting',
      'Symmetrical lighting arrangements',
    ],

    whatsIncluded: [
      '2 x Battery Operated Wall Sconces',
      '2 x Fabric Linen Shades',
      '2 x Bulbs',
      '1 x Remote Control',
      'Mounting / installation components',
      'User instructions',
    ],

    faqs: [
      { q: 'Do these sconces require hardwiring?', a: 'No. These wall sconces are battery operated and do not require any electrical wiring or a qualified electrician to install.' },
      { q: 'Can both sconces be controlled with one remote?', a: 'Yes. The single included remote controls both sconces simultaneously.' },
      { q: 'Are bulbs included?', a: 'Yes. Bulbs are included with both sconces so they are ready to use once mounted and powered.' },
      { q: 'What type of batteries do these sconces use?', a: 'Please refer to the product instructions for the battery type. Standard AA or AAA alkaline batteries are typically used.' },
      { q: 'How are the sconces mounted?', a: 'The sconces mount using a wall bracket with standard fixing screws. No electrical wiring is required.' },
    ],

    perfectForSchema: 'Bedroom, Living Room, Hallway, Reading Area',
  },

  /* ══════════════════════════════════════════════════════
     PRODUCT 10 — Modern Floor Lamp with Linen Shade 158cm
  ══════════════════════════════════════════════════════ */
  {
    id: 'fl-010',
    slug: 'modern-floor-lamp-linen-shade-158cm',
    images: [
      'images/products/z2.jpg',
      'images/products/jt.jpg',
      'images/products/js.jpg',
      'images/products/jy.jpg',
    ],
    name: 'Modern Floor Lamp with Linen Shade',
    seoTitle: 'Modern Floor Lamp with Linen Shade | 158cm Black Standing Lamp with 2700K Bulb & Foot Switch | Floorlamp.ae',
    metaDesc: 'Elegant 158cm black floor lamp with soft linen shade, 2700K warm LED bulb included, E27 socket and foot switch. Perfect for living rooms, bedrooms and offices. UAE delivery.',
    imageAlt: 'Modern black floor lamp with linen shade 158cm, warm 2700K light and foot switch, UAE',
    category: 'floor-lamps',
    categoryLabel: 'Floor Lamp',
    price: 180,
    oldPrice: 360,
    rating: 4.8,
    reviewCount: 24,
    badge: 'Sold Out',
    new: false,
    inStock: false,
    stock: 4,
    tags: ['linen shade', 'black', 'warm light', '2700K', 'foot switch', 'E27', 'bulb included', '158cm', 'living room', 'bedroom', 'office', 'modern', 'minimalist'],

    shortDesc: 'An elegant 158cm black floor lamp with a soft linen shade, 2700K warm LED bulb included, E27 socket and foot switch. Ready to use straight out of the box.',

    description: 'Bring a warm and welcoming atmosphere to your home with this elegant modern floor lamp with a linen shade. Designed with a tall 158cm profile and a sleek black finish, it adds a refined touch to living rooms, bedrooms, offices and cozy reading corners.\n\nThe soft linen lampshade gently diffuses the light, creating a comfortable warm glow that\'s perfect for relaxing evenings, reading or adding ambient lighting to your space. The included 2700K LED bulb produces a soft warm-white light, so the lamp is ready to use straight out of the box.\n\nFor everyday convenience, the lamp features a practical foot switch, allowing you to turn the light on or off with a simple tap of your foot. Its standard E27 socket also gives you the flexibility to replace or upgrade the bulb whenever you choose.\n\nWith its minimalist black design, natural-looking linen shade and tall, space-conscious profile, this floor lamp fits effortlessly into modern and contemporary interiors.',

    bullets: [
      'Elegant Linen Shade — Softly diffuses the light to create a warm, comfortable glow while adding a refined decorative touch',
      '2700K Warm LED Bulb Included — Enjoy soft warm lighting without needing to purchase a bulb separately',
      'Convenient Foot Switch — Easily turn the lamp on or off with your foot without reaching for the cable',
      'Standard E27 Socket — Compatible with E27 replacement bulbs, giving you flexibility when you want to change the lighting',
      'Tall 158cm Design — Provides useful ambient lighting while adding height and style to your room',
      'Modern Black Finish — The clean black design works naturally with contemporary, minimalist and modern interiors',
      'Versatile Lighting — Ideal for creating a cozy atmosphere in living rooms, bedrooms, offices and reading areas',
    ],

    features: [
      'Linen lampshade',
      'Matte black finish',
      'Height: 158cm',
      '2700K warm LED bulb included',
      'E27 socket',
      'Foot switch',
      'Ambient lighting',
    ],

    specs: {
      'Product Type': 'Floor Lamp',
      'Design': 'Modern Standing Lamp',
      'Color': 'Black',
      'Shade Material': 'Linen',
      'Height': '158cm',
      'Light Color': 'Warm White',
      'Color Temperature': '2700K',
      'Bulb Included': 'Yes',
      'Bulb Type': 'LED',
      'Socket Type': 'E27',
      'Switch Type': 'Foot Switch',
      'Lighting Purpose': 'Ambient Lighting',
      'Suitable For': 'Living Room, Bedroom, Office, Reading Corner',
      'Installation': 'Floor Standing',
      'Style': 'Modern / Minimalist',
    },

    perfectFor: [
      'Living rooms',
      'Bedrooms',
      'Home offices',
      'Reading corners',
      'Beside sofas',
      'Relaxing areas',
      'Modern apartments',
      'Contemporary interiors',
      'Ambient home lighting',
    ],

    whatsIncluded: [
      '1 x Modern Floor Lamp',
      '1 x Linen Lampshade',
      '1 x 2700K LED Bulb',
      '1 x Foot Switch',
      '1 x E27 Socket',
    ],

    faqs: [
      { q: 'Is a bulb included with this lamp?', a: 'Yes. A 2700K warm white LED bulb is included, so the lamp is ready to use straight out of the box.' },
      { q: 'Can I replace the bulb with a different type?', a: 'Yes. The E27 socket accepts any standard E27 LED bulb, giving you flexibility to choose your preferred wattage or colour temperature.' },
      { q: 'How does the foot switch work?', a: 'The foot switch is located near the base of the lamp. A simple tap turns the lamp on or off without needing to reach for the cable or shade.' },
      { q: 'Is this lamp suitable for a bedroom?', a: 'Yes. The 2700K warm light and soft linen shade create a relaxing atmosphere that is ideal for bedrooms and evening use.' },
      { q: 'Is the linen shade replaceable?', a: 'The linen shade is attached to the lamp. Please contact us if you require a replacement shade.' },
    ],

    perfectForSchema: 'Living Room, Bedroom, Office, Reading Corner',
  },

]; /* end PRODUCTS array */


/* ════════════════════════════════════════════════════════
   HELPER FUNCTIONS
════════════════════════════════════════════════════════ */

/** Get all products or filter by category slug */
function getProducts(category) {
  if (!category) return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

/** Get a single product by URL slug */
function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug) || null;
}

/** Get a single product by internal id */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

/** Get related products (same category, exclude current) */
function getRelatedProducts(productId, limit) {
  limit = limit || 4;
  const product = getProductById(productId);
  if (!product) return [];
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== productId);
  return related.slice(0, limit);
}

/** Search products by name, category, description or tags */
function searchProducts(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.categoryLabel.toLowerCase().includes(q) ||
    p.shortDesc.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}

/**
 * Format price in AED.
 * Returns "Price Coming Soon" when price is null.
 */
function formatPrice(price) {
  if (price === null || price === undefined) return 'Coming Soon';
  return 'AED\u00A0' + Number(price).toLocaleString('en-AE');
}

/** Generate accessible star-rating HTML */
function generateStars(rating) {
  const rounded = Math.round(rating * 2) / 2; // nearest 0.5
  const full  = Math.floor(rounded);
  const half  = rounded % 1 !== 0 ? 1 : 0;
  const empty = 5 - full - half;
  const star  = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  const halfS = '<svg viewBox="0 0 24 24" class="half" aria-hidden="true"><defs><linearGradient id="hg"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#hg)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  const emptyS = '<svg viewBox="0 0 24 24" class="empty" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  return '<div class="stars" role="img" aria-label="' + rating + ' out of 5 stars">' +
    star.repeat(full) + (half ? halfS : '') + emptyS.repeat(empty) + '</div>';
}

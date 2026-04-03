/**
 * VARSHA FANCY STORE — Product & Category Data
 * Realistic dummy data — realistic Indian fancy store products
 */

const STORE_INFO = {
  name: "Varsha Fancy Store",
  tagline: "Est. 2008 · 16 Years of Heritage",
  phone: "+91 91319 02266",
  whatsapp: "+919131902266",
  email: "varshastore@gmail.com",
  address: "123, Main Bazaar Road, T. Nagar, Chennai - 600017",
  hours: "Mon–Sat: 9:00 AM – 9:00 PM | Sun: 10:00 AM – 7:00 PM",
  instagram: "#",
  facebook: "#",
  youtube: "#"
};

const CATEGORIES = [
  {
    id: 1,
    name: "Sarees & Dress Materials",
    slug: "sarees",
    count: 142,
    description: "Silk, cotton, chiffon, and georgette sarees for every occasion",
    image: "assets/images/saree.png",
    featured: true
  },
  {
    id: 2,
    name: "Bangles & Kadas",
    slug: "bangles",
    count: 87,
    description: "Glass, lac, metal, and designer bangles in vibrant colors",
    image: "assets/images/bangles.png",
    featured: true
  },
  {
    id: 3,
    name: "Earrings & Jhumkas",
    slug: "earrings",
    count: 213,
    description: "Traditional and contemporary earring designs",
    image: "assets/images/earrings.png",
    featured: true
  },
  {
    id: 4,
    name: "Necklaces & Chains",
    slug: "necklaces",
    count: 95,
    description: "Gold-plated, silver-plated, and beaded necklace sets",
    image: "assets/images/necklace.png",
    featured: true
  },
  {
    id: 5,
    name: "Hair Accessories",
    slug: "hair",
    count: 156,
    description: "Clips, pins, bands, gajras and decorative hair items",
    image: "assets/images/hair.png",
    featured: true
  },
  {
    id: 6,
    name: "Bindis & Kumkum",
    slug: "bindis",
    count: 74,
    description: "Velvet, stone-studded, and traditional bindi sets",
    image: "assets/images/bindi.png",
    featured: true
  },
  {
    id: 7,
    name: "Dupattas & Stoles",
    slug: "dupattas",
    count: 63,
    description: "Embroidered, printed, and georgette dupattas",
    image: "assets/images/saree.png",
    featured: false
  },
  {
    id: 8,
    name: "Wristbands & Bracelets",
    slug: "bracelets",
    count: 48,
    description: "Beaded, fabric, and adjustable bracelets",
    image: "assets/images/bangles.png",
    featured: false
  },
  {
    id: 9,
    name: "Toe Rings & Payal",
    slug: "anklets",
    count: 38,
    description: "Anklets, toe rings, and silver-look payal sets",
    image: "assets/images/anklet.png",
    featured: false
  },
  {
    id: 10,
    name: "Maang Tikka & Matha Patti",
    slug: "tikka",
    count: 52,
    description: "Bridal and festive headpieces",
    image: "assets/images/necklace.png",
    featured: false
  },
  {
    id: 11,
    name: "Pottu & Kum Kum",
    slug: "pottu",
    count: 41,
    description: "Traditional South Indian pottu in all styles",
    image: "assets/images/bindi.png",
    featured: false
  },
  {
    id: 12,
    name: "Ladies & Gents Purses",
    slug: "purses",
    count: 54,
    description: "Wallets, clutches, and premium everyday purses",
    image: "https://picsum.photos/seed/purse/200/200",
    featured: false
  },
  {
    id: 13,
    name: "Cosmetics",
    slug: "cosmetics",
    count: 120,
    description: "Premium branded makeup and beauty products",
    image: "https://picsum.photos/seed/makeup/200/200",
    featured: true
  },
  {
    id: 14,
    name: "Face Care",
    slug: "facecare",
    count: 85,
    description: "Creams, lotions, face washes, and organic skincare",
    image: "https://picsum.photos/seed/facecare/200/200",
    featured: false
  },
  {
    id: 15,
    name: "Deo & Perfumes",
    slug: "perfumes",
    count: 76,
    description: "Long-lasting fragrances and body sprays for all",
    image: "https://picsum.photos/seed/perfume/200/200",
    featured: false
  },
  {
    id: 16,
    name: "Plushies & Soft Toys",
    slug: "plushies",
    count: 65,
    description: "Cute teddy bears and soft toys for all ages",
    image: "https://picsum.photos/seed/plush/200/200",
    featured: false
  },
  {
    id: 17,
    name: "Gift Items",
    slug: "gifts",
    count: 150,
    description: "Souvenirs, showpieces, and thoughtful gifts",
    image: "https://picsum.photos/seed/gifts/200/200",
    featured: true
  },
  {
    id: 18,
    name: "Gift Hampers",
    slug: "hampers",
    count: 42,
    description: "Curated combo hampers for special occasions",
    image: "https://picsum.photos/seed/hamper/200/200",
    featured: false
  },
  {
    id: 19,
    name: "Home Decor",
    slug: "homedecor",
    count: 88,
    description: "Wall hangings, lamps, and beautiful home accessories",
    image: "https://picsum.photos/seed/decor/200/200",
    featured: true
  }
];

const PRODUCTS = [
  {
    id: 991,
    name: "Luxury Matte Lipstick Collection",
    category: "Cosmetics",
    categorySlug: "cosmetics",
    price: 899,
    originalPrice: 1200,
    discount: 25,
    rating: 4.6,
    reviewCount: 84,
    stock: 12,
    image: "https://picsum.photos/seed/lipstick/400/400",
    images: ["https://picsum.photos/seed/lipstick/400/400"],
    featured: true,
    isNew: true,
    description: "Premium matte lipstick set featuring long-lasting, vibrant shades perfect for weddings and active wear.",
    specifications: { "Type": "Matte", "Duration": "12 Hours", "Finish": "Velvet" },
    colors: ["Ruby Red", "Deep Plum", "Nude"],
    variants: null,
    tags: ["makeup", "lipstick", "cosmetics"]
  },
  {
    id: 992,
    name: "Organic Glow Face Serum",
    category: "Face Care",
    categorySlug: "facecare",
    price: 499,
    originalPrice: 750,
    discount: 33,
    rating: 4.8,
    reviewCount: 156,
    stock: 20,
    image: "https://picsum.photos/seed/faceserum/400/400",
    images: ["https://picsum.photos/seed/faceserum/400/400"],
    featured: true,
    isNew: false,
    description: "Rejuvenating vitamin C face serum for a radiant daily glow. Made with 100% natural ingredients.",
    specifications: { "Volume": "30ml", "Skin Type": "All", "Ingredient": "Vitamin C & E" },
    colors: null,
    variants: null,
    tags: ["skincare", "serum", "face"]
  },
  {
    id: 993,
    name: "Oud Wood Eau De Parfum",
    category: "Deo & Perfumes",
    categorySlug: "perfumes",
    price: 1499,
    originalPrice: 2000,
    discount: 25,
    rating: 4.9,
    reviewCount: 342,
    stock: 15,
    image: "https://picsum.photos/seed/oud/400/400",
    images: ["https://picsum.photos/seed/oud/400/400"],
    featured: true,
    isNew: true,
    description: "A rich, exotic oud fragrance with notes of rosewood, cardamom, and sandalwood. Long-lasting scent for evening wear.",
    specifications: { "Volume": "100ml", "Type": "Eau De Parfum", "Longevity": "8-10 Hours" },
    colors: null,
    variants: null,
    tags: ["perfume", "fragrance", "oud"]
  },
  {
    id: 994,
    name: "Giant Cuddly Teddy Bear",
    category: "Plushies & Soft Toys",
    categorySlug: "plushies",
    price: 1299,
    originalPrice: 1500,
    discount: 13,
    rating: 4.7,
    reviewCount: 92,
    stock: 5,
    image: "https://picsum.photos/seed/teddy/400/400",
    images: ["https://picsum.photos/seed/teddy/400/400"],
    featured: false,
    isNew: false,
    description: "Extremely soft 3-foot teddy bear. The perfect lovable gift for kids and adults alike.",
    specifications: { "Height": "3 Feet", "Material": "Non-toxic Plush", "Washable": "Yes" },
    colors: ["Brown", "White", "Pink"],
    variants: null,
    tags: ["toys", "plush", "teddy"]
  },
  {
    id: 995,
    name: "Brass Elephant Showpiece Set",
    category: "Home Decor",
    categorySlug: "homedecor",
    price: 2199,
    originalPrice: 3000,
    discount: 26,
    rating: 4.5,
    reviewCount: 41,
    stock: 7,
    image: "https://picsum.photos/seed/brass/400/400",
    images: ["https://picsum.photos/seed/brass/400/400"],
    featured: true,
    isNew: false,
    description: "Detailed crafted heavy brass elephant pair. Brings a traditional royal aesthetic to your living room.",
    specifications: { "Material": "Brass", "Weight": "1.2 kg", "Finish": "Antique Gold" },
    colors: null,
    variants: null,
    tags: ["decor", "brass", "showpiece", "traditional"]
  },
  {
    id: 996,
    name: "Premium Leather Clutch",
    category: "Ladies & Gents Purses",
    categorySlug: "purses",
    price: 899,
    originalPrice: 1299,
    discount: 30,
    rating: 4.4,
    reviewCount: 63,
    stock: 10,
    image: "https://picsum.photos/seed/clutch/400/400",
    images: ["https://picsum.photos/seed/clutch/400/400"],
    featured: false,
    isNew: true,
    description: "Elegant party-wear clutch with a detachable metallic chain. Spacious enough for your phone and cosmetics.",
    specifications: { "Material": "Vegan Leather", "Closure": "Magnetic Snap", "Dimensions": "8x4 inches" },
    colors: ["Black", "Rose Gold", "Silver"],
    variants: null,
    tags: ["purse", "clutch", "accessories"]
  },
  {
    id: 997,
    name: "Crystal Swan Showpiece",
    category: "Gift Items",
    categorySlug: "gifts",
    price: 599,
    originalPrice: 800,
    discount: 25,
    rating: 4.8,
    reviewCount: 34,
    stock: 25,
    image: "https://picsum.photos/seed/swan/400/400",
    images: ["https://picsum.photos/seed/swan/400/400"],
    featured: true,
    isNew: false,
    description: "An elegant crystal swan pair to symbolize love and harmony. A beautiful wedding or anniversary gift.",
    specifications: { "Material": "Glass Crystal", "Weight": "200g" },
    colors: null,
    variants: null,
    tags: ["gift", "crystal", "swan"]
  },
  {
    id: 998,
    name: "Festive Joy Diwali Hamper",
    category: "Gift Hampers",
    categorySlug: "hampers",
    price: 1999,
    originalPrice: 2500,
    discount: 20,
    rating: 4.9,
    reviewCount: 112,
    stock: 10,
    image: "https://picsum.photos/seed/hamperf/400/400",
    images: ["https://picsum.photos/seed/hamperf/400/400"],
    featured: true,
    isNew: true,
    description: "The perfect corporate or family gift hamper. Includes premium dry fruits, artisanal chocolates, and decorative diyas.",
    specifications: { "Weight": "1.5 kg", "Items": "Dry Fruits, Chocolates, Diyas" },
    colors: null,
    variants: null,
    tags: ["hamper", "gift", "diwali", "festive"]
  },
  {
    id: 1,
    name: "Kanjivaram Silk Saree — Peacock Blue",
    category: "Sarees & Dress Materials",
    categorySlug: "sarees",
    price: 2499,
    originalPrice: 3200,
    discount: 22,
    rating: 4.8,
    reviewCount: 124,
    stock: 8,
    image: "assets/images/saree.png",
    images: [
      "assets/images/saree.png",
      "assets/images/saree.png",
      "assets/images/saree.png",
      "assets/images/saree.png"
    ],
    featured: true,
    isNew: false,
    description: "Handwoven pure silk Kanjivaram saree in deep peacock blue with golden zari border. Perfect for weddings and festive occasions. Each saree is unique with traditional temple motifs.",
    specifications: {
      "Fabric": "Pure Silk",
      "Length": "5.5 metres + blouse piece",
      "Width": "44 inches",
      "Zari": "Gold zari",
      "Occasion": "Wedding, Festival, Ceremony",
      "Care": "Dry clean only"
    },
    colors: ["Peacock Blue", "Emerald Green", "Ruby Red"],
    variants: null,
    tags: ["silk", "kanjivaram", "wedding", "festive"]
  },
  {
    id: 2,
    name: "Multicolor Glass Bangle Set (12 Pieces)",
    category: "Bangles & Kadas",
    categorySlug: "bangles",
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.5,
    reviewCount: 312,
    stock: 50,
    image: "assets/images/bangles.png",
    images: ["assets/images/bangles.png", "assets/images/bangles.png"],
    featured: true,
    isNew: false,
    description: "Beautiful multicolor glass bangles with mirror work and glitter finish. Comes in a set of 12 pieces. Available in multiple sizes.",
    specifications: {
      "Material": "Glass",
      "Pieces": "12 per set",
      "Sizes Available": "2.4, 2.6, 2.8, 2.10, 2.12",
      "Finish": "Mirror work + Glitter",
      "Occasion": "Casual, Festival"
    },
    colors: ["Red-Gold", "Blue-Silver", "Green-Gold", "Pink-Silver"],
    sizes: ["2.4", "2.6", "2.8", "2.10", "2.12"],
    tags: ["bangles", "glass", "festive", "colorful"]
  },
  {
    id: 3,
    name: "Antique Gold Jhumka Earrings",
    category: "Earrings & Jhumkas",
    categorySlug: "earrings",
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.7,
    reviewCount: 89,
    stock: 23,
    image: "assets/images/earrings.png",
    images: ["assets/images/earrings.png", "assets/images/earrings.png"],
    featured: true,
    isNew: true,
    description: "Elegant antique gold-plated jhumka earrings with intricate filigree work and a hanging tassel. The oxidized finish adds a vintage charm. Lead-free and hypoallergenic hooks.",
    specifications: {
      "Material": "Brass with Gold Plating",
      "Finish": "Antique / Oxidized Gold",
      "Weight": "~18 grams",
      "Hook Type": "Push back (hypoallergenic)",
      "Length": "6.5 cm"
    },
    colors: null,
    variants: null,
    tags: ["earrings", "jhumka", "antique", "traditional"]
  },
  {
    id: 4,
    name: "Kundan Bridal Necklace Set",
    category: "Necklaces & Chains",
    categorySlug: "necklaces",
    price: 1299,
    originalPrice: 1800,
    discount: 28,
    rating: 4.9,
    reviewCount: 54,
    stock: 5,
    image: "assets/images/necklace.png",
    images: ["assets/images/necklace.png", "assets/images/necklace.png"],
    featured: true,
    isNew: false,
    description: "Stunning Kundan work bridal necklace set with matching earrings and maang tikka. Includes 3 pieces — necklace, earrings, and tikka. Perfect for weddings and sangeet.",
    specifications: {
      "Material": "Alloy with Gold Plating",
      "Set Includes": "Necklace, Earrings, Tikka",
      "Stone": "Kundan, Ruby, Emerald",
      "Closure": "Lobster clasp",
      "Occasion": "Wedding, Sangeet, Reception"
    },
    colors: ["Gold-Red", "Gold-Green"],
    variants: null,
    tags: ["necklace", "kundan", "bridal", "wedding"]
  },
  {
    id: 5,
    name: "Floral Gajra Hair Accessory Set",
    category: "Hair Accessories",
    categorySlug: "hair",
    price: 79,
    originalPrice: 120,
    discount: 34,
    rating: 4.3,
    reviewCount: 201,
    stock: 100,
    image: "assets/images/hair.png",
    images: ["assets/images/hair.png"],
    featured: true,
    isNew: false,
    description: "Festive floral gajra hair accessory set with artificial jasmine and rose flowers. Soft fabric flowers that stay fresh all day. Pack of 2.",
    specifications: {
      "Material": "Fabric, Artificial Flowers",
      "Pack of": "2",
      "Colors": "White, Pink",
      "Length": "18 inches each",
      "Occasion": "Festivals, Puja, Weddings"
    },
    colors: ["White Jasmine", "Pink Rose", "Mixed"],
    variants: null,
    tags: ["gajra", "hair", "flowers", "festival"]
  },
  {
    id: 6,
    name: "Designer Stone Bindi Set (10 Sheets)",
    category: "Bindis & Kumkum",
    categorySlug: "bindis",
    price: 59,
    originalPrice: 89,
    discount: 34,
    rating: 4.6,
    reviewCount: 445,
    stock: 200,
    image: "assets/images/bindi.png",
    images: ["assets/images/bindi.png"],
    featured: true,
    isNew: false,
    description: "Premium velvet stone-studded bindi set with 10 assorted design sheets. Each sheet contains 24 bindis in different shapes, colors, and sizes. Long-lasting adhesive.",
    specifications: {
      "Sheets": "10",
      "Bindis per sheet": "24",
      "Total Bindis": "240",
      "Material": "Velvet + Rhinestone",
      "Adhesive": "Skin-safe, long-lasting"
    },
    colors: null,
    variants: null,
    tags: ["bindi", "stone", "festive", "daily"]
  },
  {
    id: 7,
    name: "Heavy Embroidered Dupatta — Orange",
    category: "Dupattas & Stoles",
    categorySlug: "dupattas",
    price: 449,
    originalPrice: 650,
    discount: 31,
    rating: 4.4,
    reviewCount: 67,
    stock: 18,
    image: "assets/images/saree.png",
    images: ["assets/images/saree.png"],
    featured: false,
    isNew: true,
    description: "Heavy embroidered georgette dupatta in vibrant orange with golden thread work and mirror embellishments on the border. Perfect for salwar suits and lehengas.",
    specifications: {
      "Fabric": "Georgette",
      "Length": "2.5 metres",
      "Width": "36 inches",
      "Work": "Thread embroidery + Mirror",
      "Color": "Orange with Gold"
    },
    colors: ["Orange-Gold", "Red-Gold", "Blue-Silver"],
    variants: null,
    tags: ["dupatta", "embroidered", "georgette", "occasion"]
  },
  {
    id: 8,
    name: "Silver Payal — Traditional Design (Pair)",
    category: "Toe Rings & Payal",
    categorySlug: "anklets",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.6,
    reviewCount: 183,
    stock: 32,
    image: "assets/images/anklet.png",
    images: ["assets/images/anklet.png"],
    featured: false,
    isNew: false,
    description: "Traditional silver-look payal with delicate ghungroo bells. Made from high-quality german silver. The soft jingling sound adds charm to every step. Adjustable chain.",
    specifications: {
      "Material": "German Silver (Silver-plated alloy)",
      "Type": "Ghungroo Payal",
      "Quantity": "1 Pair",
      "Closure": "Lobster clasp + extension chain",
      "Weight": "~30 grams"
    },
    colors: ["Silver"],
    variants: null,
    tags: ["payal", "anklet", "silver", "traditional"]
  },
  {
    id: 9,
    name: "Maang Tikka — Pearl & Kundan",
    category: "Maang Tikka & Matha Patti",
    categorySlug: "tikka",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 4.8,
    reviewCount: 92,
    stock: 15,
    image: "assets/images/necklace.png",
    images: ["assets/images/necklace.png"],
    featured: false,
    isNew: false,
    description: "Exquisite pearl and kundan maang tikka with adjustable chain. The tic drop pendant features an intricate kundan center with surrounding pearls. Bridal and festive wear.",
    specifications: {
      "Material": "Alloy with Gold Plating",
      "Stone": "Kundan + Pearl",
      "Adjustable": "Yes, 5 cm range",
      "Attachment": "Hair pin style",
      "Occasion": "Bridal, Festive, Sangeet"
    },
    colors: ["Gold-Pearl", "Gold-Red"],
    variants: null,
    tags: ["tikka", "maangtikka", "pearl", "bridal"]
  },
  {
    id: 10,
    name: "Beaded Pottu Set — Large (Pack of 6)",
    category: "Pottu & Kum Kum",
    categorySlug: "pottu",
    price: 45,
    originalPrice: 75,
    discount: 40,
    rating: 4.2,
    reviewCount: 368,
    stock: 0,
    image: "assets/images/bindi.png",
    images: ["assets/images/bindi.png"],
    featured: false,
    isNew: false,
    description: "Premium large beaded pottu (bindi) set for traditional South Indian wear. Each pack contains 6 assorted color rolls with 50+ bindis per roll. Velvet base with rhinestone center.",
    specifications: {
      "Pack Contents": "6 rolls",
      "Bindis per roll": "50+",
      "Size": "Large (1 cm diameter)",
      "Type": "Beaded velvet",
      "Colors": "Assorted (Red, Maroon, Black)"
    },
    colors: null,
    variants: null,
    tags: ["pottu", "bindi", "traditional", "daily"]
  },
  {
    id: 11,
    name: "Chaniya Choli — Navratri Special",
    category: "Sarees & Dress Materials",
    categorySlug: "sarees",
    price: 1499,
    originalPrice: 2200,
    discount: 32,
    rating: 4.7,
    reviewCount: 77,
    stock: 12,
    image: "assets/images/saree.png",
    images: ["assets/images/saree.png"],
    featured: false,
    isNew: true,
    description: "Vibrant Navratri chaniya choli with heavy mirror and embroidery work on the choli and flared chaniya. Includes dupatta. Perfect for Garba and Dandiya nights.",
    specifications: {
      "Set Includes": "Chaniya, Choli, Dupatta",
      "Fabric": "Ghagra: Cotton Silk | Choli: Velvet",
      "Work": "Mirror, Thread, Sequins",
      "Length": "Full length (44 inches)",
      "Occasion": "Navratri, Garba, Festival"
    },
    colors: ["Red-Gold", "Green-Gold", "Blue-Silver", "Orange-Gold"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["chaniya", "navratri", "garba", "festival"]
  },
  {
    id: 12,
    name: "Crochet Potli Bag — Festive",
    category: "Bags & Purses",
    categorySlug: "bags",
    price: 199,
    originalPrice: 299,
    discount: 33,
    rating: 4.5,
    reviewCount: 43,
    stock: 20,
    image: "assets/images/bag.png",
    images: ["assets/images/bag.png"],
    featured: false,
    isNew: true,
    description: "Handmade crochet potli bag with drawstring closure and embellished with sequins and mirrors. Perfect for carrying festive essentials. Fits phone, keys, and cards.",
    specifications: {
      "Material": "Cotton crochet",
      "Closure": "Drawstring",
      "Capacity": "Small — phone, keys, cards",
      "Embellishment": "Sequins, Mirrors",
      "Occasion": "Festivals, Weddings, Parties"
    },
    colors: ["Red", "Gold", "Green", "Blue", "Pink"],
    variants: null,
    tags: ["potli", "bag", "crochet", "festive"]
  },
  {
    id: 13,
    name: "Oxidised Silver Layered Necklace",
    category: "Necklaces & Chains",
    categorySlug: "necklaces",
    price: 399,
    originalPrice: 549,
    discount: 27,
    rating: 4.6,
    reviewCount: 128,
    stock: 30,
    image: "assets/images/necklace.png",
    images: ["assets/images/necklace.png"],
    featured: false,
    isNew: false,
    description: "Elegant oxidised silver layered necklace with tribal motifs. 3-layer design with a coin pendant, geometric beads, and tassel drop. Looks stunning with both ethnic and Indo-western outfits.",
    specifications: {
      "Material": "Brass with Oxidised Silver Plating",
      "Layers": "3",
      "Pendant": "Coin + Beads + Tassel",
      "Clasp": "Toggle",
      "Length": "16 inches + 3 inch extension"
    },
    colors: ["Oxidised Silver", "Oxidised Gold"],
    variants: null,
    tags: ["necklace", "oxidised", "tribal", "layered"]
  },
  {
    id: 14,
    name: "Velvet Hair Scrunchies — Set of 5",
    category: "Hair Accessories",
    categorySlug: "hair",
    price: 99,
    originalPrice: 149,
    discount: 34,
    rating: 4.4,
    reviewCount: 287,
    stock: 80,
    image: "assets/images/hair.png",
    images: ["assets/images/hair.png"],
    featured: false,
    isNew: false,
    description: "Soft velvet scrunchies in rich festive colors. Pack of 5 in assorted jewel tones — perfect for everyday wear and special occasions. No creasing, gentle on hair.",
    specifications: {
      "Material": "Premium Velvet",
      "Pack of": "5",
      "Colors": "Assorted (Maroon, Teal, Purple, Gold, Black)",
      "Size": "Standard (fits all hair types)"
    },
    colors: ["Mixed Festive", "Mixed Pastels", "Mixed Dark"],
    variants: null,
    tags: ["scrunchie", "hair", "velvet", "everyday"]
  },
  {
    id: 15,
    name: "Gold Plated Temple Earrings",
    category: "Earrings & Jhumkas",
    categorySlug: "earrings",
    price: 449,
    originalPrice: 699,
    discount: 36,
    rating: 4.9,
    reviewCount: 156,
    stock: 18,
    image: "assets/images/earrings.png",
    images: ["assets/images/earrings.png"],
    featured: false,
    isNew: false,
    description: "South Indian temple-style gold-plated earrings with Lakshmi design. Features intricate carvings and ruby-colored stone embellishments. Ideal for traditional functions and temple visits.",
    specifications: {
      "Material": "Brass with Gold Plating",
      "Style": "Temple (South Indian)",
      "Design": "Goddess Lakshmi",
      "Stone": "Ruby Color Glass",
      "Earring Type": "Stud with drop"
    },
    colors: ["Gold-Ruby", "Gold-Green"],
    variants: null,
    tags: ["earrings", "temple", "gold", "south-indian"]
  },
  {
    id: 16,
    name: "Lac Bangle Set — Rajasthani Style",
    category: "Bangles & Kadas",
    categorySlug: "bangles",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 4.7,
    reviewCount: 94,
    stock: 40,
    image: "assets/images/bangles.png",
    images: ["assets/images/bangles.png"],
    featured: false,
    isNew: true,
    description: "Authentic Rajasthani lac bangles with embedded mirror work and colorful thread wrapping. Each set contains 4 bangles. These are handcrafted by artisans from Jodhpur.",
    specifications: {
      "Material": "Lac (Shellac)",
      "Work": "Mirror + Thread",
      "Pieces": "4 per set",
      "Craft": "Handcrafted, Jodhpur",
      "Sizes": "2.4, 2.6, 2.8, 2.10"
    },
    colors: ["Red-Green", "Blue-Orange", "Pink-Gold", "Multicolor"],
    sizes: ["2.4", "2.6", "2.8", "2.10"],
    tags: ["lac", "bangles", "rajasthani", "handcrafted"]
  },
  {
    id: 17,
    name: "Full Bridal Jewellery Set — 7 Pieces",
    category: "Necklaces & Chains",
    categorySlug: "necklaces",
    price: 2999,
    originalPrice: 4500,
    discount: 33,
    rating: 4.8,
    reviewCount: 38,
    stock: 6,
    image: "assets/images/necklace.png",
    images: ["assets/images/necklace.png", "assets/images/necklace.png"],
    featured: true,
    isNew: false,
    description: "Complete bridal jewellery set with full necklace, choker, jhumka earrings, maang tikka, nosering, bangles, and matha patti. Gold-plated with kundan and pearl work. Comes in a gift box.",
    specifications: {
      "Items": "7 (Necklace, Choker, Earrings, Tikka, Nosering, 2 Bangles)",
      "Material": "Alloy with 22K Gold Plating",
      "Stone": "Kundan, Pearl, Ruby",
      "Occasion": "Wedding, Reception",
      "Comes With": "Gift box"
    },
    colors: ["Gold-Red", "Gold-Green", "Gold-Pink"],
    variants: null,
    tags: ["bridal", "jewellery", "set", "wedding"]
  },
  {
    id: 18,
    name: "Cotton Bandhani Saree — Gujarati Print",
    category: "Sarees & Dress Materials",
    categorySlug: "sarees",
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.5,
    reviewCount: 167,
    stock: 25,
    image: "assets/images/saree.png",
    images: ["assets/images/saree.png"],
    featured: false,
    isNew: false,
    description: "Authentic Gujarati Bandhani tie-dye cotton saree. Lightweight and comfortable for daily wear. Beautiful circular motif pattern in vibrant colors.",
    specifications: {
      "Fabric": "Pure Cotton",
      "Technique": "Bandhani (Tie & Dye)",
      "Length": "5.5 metres + blouse piece",
      "Occasion": "Casual, Festival, Daily",
      "Care": "Hand wash in cold water"
    },
    colors: ["Yellow-Red", "Pink-White", "Orange-Green", "Blue-White"],
    variants: null,
    tags: ["saree", "bandhani", "cotton", "gujarati"]
  },
  {
    id: 19,
    name: "Afghani Silver Adjustable Ring",
    category: "Bangles & Kadas",
    categorySlug: "bangles",
    price: 129,
    originalPrice: 199,
    discount: 35,
    rating: 4.3,
    reviewCount: 213,
    stock: 55,
    image: "assets/images/bangles.png",
    images: ["assets/images/bangles.png"],
    featured: false,
    isNew: false,
    description: "Boho-style adjustable silver ring with turquoise stone setting. Oxidised finish with tribal engravings on the band. One size fits all (adjustable 5–10).",
    specifications: {
      "Material": "German Silver",
      "Stone": "Turquoise (synthetic)",
      "Adjustable": "Yes (Size 5–10)",
      "Finish": "Oxidised / Antique Silver"
    },
    colors: ["Silver-Turquoise", "Silver-Coral", "Silver-Clear"],
    variants: null,
    tags: ["ring", "afghan", "silver", "adjustable"]
  },
  {
    id: 20,
    name: "Meenakari Nose Pin — Traditional",
    category: "Earrings & Jhumkas",
    categorySlug: "earrings",
    price: 89,
    originalPrice: 129,
    discount: 31,
    rating: 4.4,
    reviewCount: 176,
    stock: 45,
    image: "assets/images/hair.png",
    images: ["assets/images/hair.png"],
    featured: false,
    isNew: false,
    description: "Delicate meenakari nose pin with colorful enamel work and a tiny pearl drop. Gold-plated with secure screw-back for stud piercings. Suitable for daily wear.",
    specifications: {
      "Material": "Gold-plated Brass",
      "Work": "Meenakari (Enamel)",
      "Closure": "Screw-back",
      "Stone": "Tiny pearl + enamel",
      "Size": "6 mm diameter"
    },
    colors: ["Gold-Red", "Gold-Blue", "Gold-Green"],
    variants: null,
    tags: ["nosering", "nosepin", "meenakari", "enamel"]
  }
];

// Reviews data
const REVIEWS = {
  1: [
    { id: 1, user: "Priya S.", rating: 5, date: "2024-11-12", comment: "The saree is absolutely gorgeous! The silk quality is excellent and the zari work is stunning. Exactly as shown in the picture.", helpful: 24 },
    { id: 2, user: "Meena R.", rating: 5, date: "2024-10-28", comment: "Bought this for my daughter's wedding. She looked like a queen! The color is even more vibrant in person.", helpful: 18 },
    { id: 3, user: "Kavitha M.", rating: 4, date: "2024-09-15", comment: "Beautiful saree, fast delivery. The blouse piece is a bit narrow than expected, but overall very happy.", helpful: 9 }
  ],
  2: [
    { id: 4, user: "Deepa L.", rating: 5, date: "2024-12-01", comment: "These bangles are beautiful! The colors are so vibrant and they don't break easily unlike cheap glass bangles.", helpful: 31 },
    { id: 5, user: "Rekha P.", rating: 4, date: "2024-11-20", comment: "Good quality bangles. Ordered 2.8 size and it fits perfectly. Mirror work is lovely.", helpful: 15 }
  ],
  3: [
    { id: 6, user: "Sindhu K.", rating: 5, date: "2024-12-10", comment: "Stunning jhumkas! Got so many compliments at the festival. The craftsmanship is very detailed.", helpful: 42 },
    { id: 7, user: "Anu T.", rating: 4, date: "2024-11-05", comment: "Nice earrings, lightweight and comfortable to wear all day. Gold plating looks real.", helpful: 17 }
  ]
};

// Featured announcements
const ANNOUNCEMENTS = [
  "🎉 Grand Navratri Sale — Up to 40% OFF on all festive items | Free shipping above ₹499",
  "💫 New arrivals: Bridal Jewellery Sets now in stock | WhatsApp us for custom orders",
  "🌸 Limited stock on Kanjivaram sarees — Order now to avoid disappointment!"
];

// Determine which products are available
function getProductsByCategory(slug) {
  return PRODUCTS.filter(p => p.categorySlug === slug);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q)) ||
    p.description.toLowerCase().includes(q)
  );
}

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function getStarHTML(rating, interactive = false) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (interactive) {
      stars.push(`<span class="star-rating__star ${i <= Math.round(rating) ? 'filled' : ''}" data-value="${i}">★</span>`);
    } else {
      if (i <= Math.floor(rating)) {
        stars.push('<span style="color:#F59E0B">★</span>');
      } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
        stars.push('<span style="color:#F59E0B">★</span>');
      } else {
        stars.push('<span style="color:#D1D5DB">★</span>');
      }
    }
  }
  return stars.join('');
}

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
    name: "Luxury Cosmetics",
    slug: "cosmetics",
    count: 142,
    description: "Silk, cotton, chiffon, and georgette cosmetics for every occasion",
    image: "assets/products/saree.png",
    featured: true
  },
  {
    id: 2,
    name: "Lipsticks & Kadas",
    slug: "lipsticks",
    count: 87,
    description: "Glass, lac, metal, and designer lipsticks in vibrant colors",
    image: "assets/products/lipsticks.png",
    featured: true
  },
  {
    id: 3,
    name: "Eyeshadows & Jhumkas",
    slug: "eyeshadows",
    count: 213,
    description: "Traditional and contemporary earring designs",
    image: "assets/products/eyeshadows.png",
    featured: true
  },
  {
    id: 4,
    name: "Makeup Palettes & Chains",
    slug: "makeup palettes",
    count: 95,
    description: "Premium, silver-plated, and beaded makeup palette sets",
    image: "assets/products/makeup palette.png",
    featured: true
  },
  {
    id: 5,
    name: "Hair Accessories",
    slug: "hair",
    count: 156,
    description: "Clips, pins, bands, gajras and decorative hair items",
    image: "assets/products/hair.png",
    featured: true
  },
  {
    id: 6,
    name: "Bindis & Kumkum",
    slug: "bindis",
    count: 74,
    description: "Velvet, stone-studded, and traditional bindi sets",
    image: "assets/products/bindi.png",
    featured: true
  },
  {
    id: 7,
    name: "Dupattas & Stoles",
    slug: "dupattas",
    count: 63,
    description: "Embroidered, printed, and georgette dupattas",
    image: "assets/products/saree.png",
    featured: false
  },
  {
    id: 8,
    name: "Wristbands & Bracelets",
    slug: "bracelets",
    count: 48,
    description: "Beaded, fabric, and adjustable bracelets",
    image: "assets/products/lipsticks.png",
    featured: false
  },
  {
    id: 9,
    name: "Toe Rings & Payal",
    slug: "anklets",
    count: 38,
    description: "Anklets, toe rings, and silver-look payal sets",
    image: "assets/products/anklet.png",
    featured: false
  },
  {
    id: 10,
    name: "Maang Tikka & Matha Patti",
    slug: "tikka",
    count: 52,
    description: "Bridal and festive headpieces",
    image: "assets/products/makeup palette.png",
    featured: false
  },
  {
    id: 11,
    name: "Pottu & Kum Kum",
    slug: "pottu",
    count: 41,
    description: "Traditional South Indian pottu in all styles",
    image: "assets/products/bindi.png",
    featured: false
  },
  {
    id: 12,
    name: "Ladies & Gents Purses",
    slug: "purses",
    count: 54,
    description: "Wallets, clutches, and premium everyday purses",
    image: "assets/products/bag.png",
    featured: false
  },
  {
    id: 13,
    name: "Cosmetics",
    slug: "cosmetics",
    count: 120,
    description: "Premium branded makeup and beauty products",
    image: "assets/store/logo.png",
    featured: true
  },
  {
    id: 14,
    name: "Face Care",
    slug: "facecare",
    count: 85,
    description: "Creams, lotions, face washes, and organic skincare",
    image: "assets/store/logo.png",
    featured: false
  },
  {
    id: 15,
    name: "Deo & Perfumes",
    slug: "perfumes",
    count: 76,
    description: "Long-lasting fragrances and body sprays for all",
    image: "assets/store/logo.png",
    featured: false
  },
  {
    id: 16,
    name: "Plushies & Soft Toys",
    slug: "plushies",
    count: 65,
    description: "Cute teddy bears and soft toys for all ages",
    image: "assets/store/logo.png",
    featured: false
  },
  {
    id: 17,
    name: "Gift Items",
    slug: "gifts",
    count: 150,
    description: "Souvenirs, showpieces, and thoughtful gifts",
    image: "assets/store/logo.png",
    featured: true
  },
  {
    id: 18,
    name: "Gift Hampers",
    slug: "hampers",
    count: 42,
    description: "Curated combo hampers for special occasions",
    image: "assets/store/logo.png",
    featured: false
  },
  {
    id: 19,
    name: "Home Decor",
    slug: "homedecor",
    count: 88,
    description: "Wall hangings, lamps, and beautiful home accessories",
    image: "assets/store/store_interior.png",
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
    image: "assets/store/logo.png",
    images: ["assets/store/logo.png"],
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
    image: "assets/store/logo.png",
    images: ["assets/store/logo.png"],
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
    image: "assets/store/logo.png",
    images: ["assets/store/logo.png"],
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
    image: "assets/store/logo.png",
    images: ["assets/store/logo.png"],
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
    image: "assets/store/store_interior.png",
    images: ["assets/store/store_interior.png"],
    featured: true,
    isNew: false,
    description: "Detailed crafted heavy brass elephant pair. Brings a traditional royal aesthetic to your living room.",
    specifications: { "Material": "Brass", "Weight": "1.2 kg", "Finish": "Classic Matte" },
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
    image: "assets/products/bag.png",
    images: ["assets/products/bag.png"],
    featured: false,
    isNew: true,
    description: "Elegant party-wear clutch with a detachable metallic chain. Spacious enough for your phone and cosmetics.",
    specifications: { "Material": "Vegan Leather", "Closure": "Magnetic Snap", "Dimensions": "8x4 inches" },
    colors: ["Black", "Rose Gold", "Glossy"],
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
    image: "assets/store/logo.png",
    images: ["assets/store/logo.png"],
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
    image: "assets/store/logo.png",
    images: ["assets/store/logo.png"],
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
    name: "Luxury Matte Ruby Lipstick",
    category: "Luxury Cosmetics",
    categorySlug: "cosmetics",
    price: 2499,
    originalPrice: 3200,
    discount: 22,
    rating: 4.8,
    reviewCount: 124,
    stock: 8,
    image: "assets/products/saree.png",
    images: [
      "assets/products/saree.png",
      "assets/products/saree.png",
      "assets/products/saree.png",
      "assets/products/saree.png"
    ],
    featured: true,
    isNew: false,
    description: "Premium long-lasting matte lipstick in deep peacock blue with golden zari border. Perfect for weddings and festive occasions. Each saree is unique with traditional temple motifs.",
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
    category: "Lipsticks & Kadas",
    categorySlug: "lipsticks",
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.5,
    reviewCount: 312,
    stock: 50,
    image: "assets/products/lipsticks.png",
    images: ["assets/products/lipsticks.png", "assets/products/lipsticks.png"],
    featured: true,
    isNew: false,
    description: "Beautiful multicolor glass lipsticks with mirror work and glitter finish. Comes in a set of 12 pieces. Available in multiple sizes.",
    specifications: {
      "Material": "Glass",
      "Pieces": "12 per set",
      "Sizes Available": "2.4, 2.6, 2.8, 2.10, 2.12",
      "Finish": "Mirror work + Glitter",
      "Occasion": "Casual, Festival"
    },
    colors: ["Red-Gold", "Blue-Glossy", "Green-Gold", "Pink-Glossy"],
    sizes: ["2.4", "2.6", "2.8", "2.10", "2.12"],
    tags: ["lipsticks", "glass", "festive", "colorful"]
  },
  {
    id: 3,
    name: "Classic Matte Jhumka Eyeshadows",
    category: "Eyeshadows & Jhumkas",
    categorySlug: "eyeshadows",
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.7,
    reviewCount: 89,
    stock: 23,
    image: "assets/products/eyeshadows.png",
    images: ["assets/products/eyeshadows.png", "assets/products/eyeshadows.png"],
    featured: true,
    isNew: true,
    description: "Elegant antique premium blush eyeshadows with intricate filigree work and a hanging tassel. The oxidized finish adds a vintage charm. Lead-free and hypoallergenic hooks.",
    specifications: {
      "Material": "Brass with Matte Finish",
      "Finish": "Antique / Oxidized Gold",
      "Weight": "~18 grams",
      "Hook Type": "Push back (hypoallergenic)",
      "Length": "6.5 cm"
    },
    colors: null,
    variants: null,
    tags: ["eyeshadows", "blush", "antique", "traditional"]
  },
  {
    id: 4,
    name: "Organic Bridal Makeup Palette Set",
    category: "Makeup Palettes & Chains",
    categorySlug: "makeup palettes",
    price: 1299,
    originalPrice: 1800,
    discount: 28,
    rating: 4.9,
    reviewCount: 54,
    stock: 5,
    image: "assets/products/makeup palette.png",
    images: ["assets/products/makeup palette.png", "assets/products/makeup palette.png"],
    featured: true,
    isNew: false,
    description: "Stunning Organic work bridal makeup palette set with matching eyeshadows and maang tikka. Includes 3 pieces — makeup palette, eyeshadows, and tikka. Perfect for weddings and sangeet.",
    specifications: {
      "Material": "Alloy with Matte Finish",
      "Set Includes": "Makeup Palette, Eyeshadows, Tikka",
      "Stone": "Organic, Ruby, Emerald",
      "Closure": "Lobster clasp",
      "Occasion": "Wedding, Sangeet, Reception"
    },
    colors: ["Matte-Red", "Matte-Green"],
    variants: null,
    tags: ["makeup palette", "organic", "bridal", "wedding"]
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
    image: "assets/products/hair.png",
    images: ["assets/products/hair.png"],
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
    image: "assets/products/bindi.png",
    images: ["assets/products/bindi.png"],
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
    image: "assets/products/saree.png",
    images: ["assets/products/saree.png"],
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
    colors: ["Orange-Gold", "Red-Gold", "Blue-Glossy"],
    variants: null,
    tags: ["dupatta", "embroidered", "georgette", "occasion"]
  },
  {
    id: 8,
    name: "Glossy Payal — Traditional Design (Pair)",
    category: "Toe Rings & Payal",
    categorySlug: "anklets",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.6,
    reviewCount: 183,
    stock: 32,
    image: "assets/products/anklet.png",
    images: ["assets/products/anklet.png"],
    featured: false,
    isNew: false,
    description: "Traditional silver-look payal with delicate ghungroo bells. Made from high-quality german silver. The soft jingling sound adds charm to every step. Adjustable chain.",
    specifications: {
      "Material": "German Glossy (Glossy-plated alloy)",
      "Type": "Ghungroo Payal",
      "Quantity": "1 Pair",
      "Closure": "Lobster clasp + extension chain",
      "Weight": "~30 grams"
    },
    colors: ["Glossy"],
    variants: null,
    tags: ["payal", "anklet", "silver", "traditional"]
  },
  {
    id: 9,
    name: "Maang Tikka — Pearl & Organic",
    category: "Maang Tikka & Matha Patti",
    categorySlug: "tikka",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 4.8,
    reviewCount: 92,
    stock: 15,
    image: "assets/products/makeup palette.png",
    images: ["assets/products/makeup palette.png"],
    featured: false,
    isNew: false,
    description: "Exquisite pearl and organic maang tikka with adjustable chain. The tic drop pendant features an intricate organic center with surrounding pearls. Bridal and festive wear.",
    specifications: {
      "Material": "Alloy with Matte Finish",
      "Stone": "Organic + Pearl",
      "Adjustable": "Yes, 5 cm range",
      "Attachment": "Hair pin style",
      "Occasion": "Bridal, Festive, Sangeet"
    },
    colors: ["Matte-Pearl", "Matte-Red"],
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
    image: "assets/products/bindi.png",
    images: ["assets/products/bindi.png"],
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
    name: "Festive Glow Makeup Kit",
    category: "Luxury Cosmetics",
    categorySlug: "cosmetics",
    price: 1499,
    originalPrice: 2200,
    discount: 32,
    rating: 4.7,
    reviewCount: 77,
    stock: 12,
    image: "assets/products/saree.png",
    images: ["assets/products/saree.png"],
    featured: false,
    isNew: true,
    description: "Complete festive makeup palette with heavy mirror and embroidery work on the choli and flared chaniya. Includes dupatta. Perfect for Garba and Dandiya nights.",
    specifications: {
      "Set Includes": "Chaniya, Choli, Dupatta",
      "Fabric": "Ghagra: Cotton Silk | Choli: Velvet",
      "Work": "Mirror, Thread, Sequins",
      "Length": "Full length (44 inches)",
      "Occasion": "Navratri, Garba, Festival"
    },
    colors: ["Red-Gold", "Green-Gold", "Blue-Glossy", "Orange-Gold"],
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
    image: "assets/products/bag.png",
    images: ["assets/products/bag.png"],
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
    name: "Oxidised Glossy Layered Makeup Palette",
    category: "Makeup Palettes & Chains",
    categorySlug: "makeup palettes",
    price: 399,
    originalPrice: 549,
    discount: 27,
    rating: 4.6,
    reviewCount: 128,
    stock: 30,
    image: "assets/products/makeup palette.png",
    images: ["assets/products/makeup palette.png"],
    featured: false,
    isNew: false,
    description: "Elegant oxidised silver layered makeup palette with tribal motifs. 3-layer design with a coin pendant, geometric beads, and tassel drop. Looks stunning with both ethnic and Indo-western outfits.",
    specifications: {
      "Material": "Brass with Oxidised Glossy Plating",
      "Layers": "3",
      "Pendant": "Coin + Beads + Tassel",
      "Clasp": "Toggle",
      "Length": "16 inches + 3 inch extension"
    },
    colors: ["Oxidised Glossy", "Oxidised Gold"],
    variants: null,
    tags: ["makeup palette", "oxidised", "tribal", "layered"]
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
    image: "assets/products/hair.png",
    images: ["assets/products/hair.png"],
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
    name: "Rose Premium Matte Pearl Eyeshadows",
    category: "Eyeshadows & Jhumkas",
    categorySlug: "eyeshadows",
    price: 449,
    originalPrice: 699,
    discount: 36,
    rating: 4.9,
    reviewCount: 156,
    stock: 18,
    image: "assets/products/eyeshadows.png",
    images: ["assets/products/eyeshadows.png"],
    featured: false,
    isNew: false,
    description: "South Indian professional-style premium eyeshadows with Lakshmi design. Features intricate carvings and ruby-colored stone embellishments. Ideal for traditional functions and temple visits.",
    specifications: {
      "Material": "Brass with Matte Finish",
      "Style": "Professional (South Indian)",
      "Design": "Goddess Lakshmi",
      "Stone": "Ruby Color Glass",
      "Earring Type": "Stud with drop"
    },
    colors: ["Matte-Ruby", "Matte-Green"],
    variants: null,
    tags: ["eyeshadows", "temple", "gold", "south-indian"]
  },
  {
    id: 16,
    name: "Lac Bangle Set — Rajasthani Style",
    category: "Lipsticks & Kadas",
    categorySlug: "lipsticks",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 4.7,
    reviewCount: 94,
    stock: 40,
    image: "assets/products/lipsticks.png",
    images: ["assets/products/lipsticks.png"],
    featured: false,
    isNew: true,
    description: "Authentic Rajasthani lac lipsticks with embedded mirror work and colorful thread wrapping. Each set contains 4 lipsticks. These are handcrafted by artisans from Jodhpur.",
    specifications: {
      "Material": "Lac (Shellac)",
      "Work": "Mirror + Thread",
      "Pieces": "4 per set",
      "Craft": "Handcrafted, Jodhpur",
      "Sizes": "2.4, 2.6, 2.8, 2.10"
    },
    colors: ["Red-Green", "Blue-Orange", "Pink-Gold", "Multicolor"],
    sizes: ["2.4", "2.6", "2.8", "2.10"],
    tags: ["lac", "lipsticks", "rajasthani", "handcrafted"]
  },
  {
    id: 17,
    name: "Full Bridal Beauty Products Set — 7 Pieces",
    category: "Makeup Palettes & Chains",
    categorySlug: "makeup palettes",
    price: 2999,
    originalPrice: 4500,
    discount: 33,
    rating: 4.8,
    reviewCount: 38,
    stock: 6,
    image: "assets/products/makeup palette.png",
    images: ["assets/products/makeup palette.png", "assets/products/makeup palette.png"],
    featured: true,
    isNew: false,
    description: "Complete bridal beauty products set with full makeup palette, choker, blush eyeshadows, maang tikka, nosering, lipsticks, and matha patti. Premium with organic and pearl work. Comes in a gift box.",
    specifications: {
      "Items": "7 (Makeup Palette, Choker, Eyeshadows, Tikka, Nosering, 2 Lipsticks)",
      "Material": "Alloy with 22K Matte Finish",
      "Stone": "Organic, Pearl, Ruby",
      "Occasion": "Wedding, Reception",
      "Comes With": "Gift box"
    },
    colors: ["Matte-Red", "Matte-Green", "Matte-Pink"],
    variants: null,
    tags: ["bridal", "beauty products", "set", "wedding"]
  },
  {
    id: 18,
    name: "Organic Turmeric Face Scrub",
    category: "Luxury Cosmetics",
    categorySlug: "cosmetics",
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.5,
    reviewCount: 167,
    stock: 25,
    image: "assets/products/saree.png",
    images: ["assets/products/saree.png"],
    featured: false,
    isNew: false,
    description: "Authentic organic exfoliating scrub tie-dye cotton saree. Lightweight and comfortable for daily wear. Beautiful circular motif pattern in vibrant colors.",
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
    name: "Afghani Glossy Adjustable Ring",
    category: "Lipsticks & Kadas",
    categorySlug: "lipsticks",
    price: 129,
    originalPrice: 199,
    discount: 35,
    rating: 4.3,
    reviewCount: 213,
    stock: 55,
    image: "assets/products/lipsticks.png",
    images: ["assets/products/lipsticks.png"],
    featured: false,
    isNew: false,
    description: "Boho-style adjustable silver ring with turquoise stone setting. Oxidised finish with tribal engravings on the band. One size fits all (adjustable 5–10).",
    specifications: {
      "Material": "German Glossy",
      "Stone": "Turquoise (synthetic)",
      "Adjustable": "Yes (Size 5–10)",
      "Finish": "Oxidised / Antique Glossy"
    },
    colors: ["Glossy-Turquoise", "Glossy-Coral", "Glossy-Clear"],
    variants: null,
    tags: ["ring", "afghan", "silver", "adjustable"]
  },
  {
    id: 20,
    name: "Meenakari Nose Pin — Traditional",
    category: "Eyeshadows & Jhumkas",
    categorySlug: "eyeshadows",
    price: 89,
    originalPrice: 129,
    discount: 31,
    rating: 4.4,
    reviewCount: 176,
    stock: 45,
    image: "assets/products/hair.png",
    images: ["assets/products/hair.png"],
    featured: false,
    isNew: false,
    description: "Delicate meenakari nose pin with colorful enamel work and a tiny pearl drop. Premium with secure screw-back for stud piercings. Suitable for daily wear.",
    specifications: {
      "Material": "Premium Brass",
      "Work": "Meenakari (Enamel)",
      "Closure": "Screw-back",
      "Stone": "Tiny pearl + enamel",
      "Size": "6 mm diameter"
    },
    colors: ["Matte-Red", "Matte-Blue", "Matte-Green"],
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
    { id: 4, user: "Deepa L.", rating: 5, date: "2024-12-01", comment: "These lipsticks are beautiful! The colors are so vibrant and they don't break easily unlike cheap glass lipsticks.", helpful: 31 },
    { id: 5, user: "Rekha P.", rating: 4, date: "2024-11-20", comment: "Good quality lipsticks. Ordered 2.8 size and it fits perfectly. Mirror work is lovely.", helpful: 15 }
  ],
  3: [
    { id: 6, user: "Sindhu K.", rating: 5, date: "2024-12-10", comment: "Stunning blushs! Got so many compliments at the festival. The craftsmanship is very detailed.", helpful: 42 },
    { id: 7, user: "Anu T.", rating: 4, date: "2024-11-05", comment: "Nice eyeshadows, lightweight and comfortable to wear all day. Gold plating looks real.", helpful: 17 }
  ]
};

// Featured announcements
const ANNOUNCEMENTS = [
  "🎉 Grand Navratri Sale — Up to 40% OFF on all festive items | Free shipping above ₹499",
  "💫 New arrivals: Bridal Beauty Products Sets now in stock | WhatsApp us for custom orders",
  "🌸 Limited stock on Kanjivaram cosmetics — Order now to avoid disappointment!"
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

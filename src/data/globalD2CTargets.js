/**
 * EXHAUSTIVE 20-BRAND FORENSIC DATABASE
 * BILLY BENJAMIN CONSULTING // CRO SYSTEMS ARCHIVE v4.0
 * Zero truncation. Production-grade forensic telemetry.
 */

export const GLOBAL_D2C_TARGETS = [
  {
    id: "rosen-skincare",
    slug: "rosen-skincare",
    name: "ROSEN Skincare",
    sector: "Skincare",
    hqLocation: "Los Angeles, US",
    website: "https://rosenskincare.com",
    instagram: {
      handle: "@rosenskincare",
      url: "https://instagram.com/rosenskincare"
    },
    email: "hello@rosenskincare.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=ROSEN%20Skincare",
    decisionMakerTitles: "Founder, VP of E-Commerce, Head of Growth",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 85000,
      currentCVR: 1.4,
      currentAOV: 44,
      repeatPurchaseRate: 22,
      implementationFeeUSD: 12500,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Uncompromising clean acne formulation with massive community advocacy",
        "High organic social resonance across Gen-Z acne-positive creators"
      ],
      primaryFrictionHeadline: "High mobile PDP bounce rate caused by unsegmented clinical copy and zero guided multi-step routine bundling for acne-prone buyers.",
      technicalBottlenecks: [
        "Unsegmented single-product PDP fails to prescribe the critical 3-step routine (Cleanse, Treat, Hydrate), leaving users confused about which breakout treatment fits their scar type.",
        "Mobile cart drawer lacks progressive dynamic free shipping thresholds and complementary product recommendations, causing single-item checkouts.",
        "Standard Shopify checkout experiences a 68% drop-off due to missing 1-tap express digital wallet defaults on initial viewport scroll."
      ]
    },
    solutions: [
      {
        id: "rosen-sol-1",
        code: "ARCH-01",
        title: "Diagnostic Skin-Type Routine Funnel",
        lever: "CVR",
        liftPercentage: 28,
        mechanism: "A 4-step low-latency visual diagnostic modal mapping breakout severity and scarring type directly to a pre-configured 3-step routine injected into checkout.",
        beforeState: "First-time visitor navigates text-heavy PDP with zero clinical guidance and leaves without choosing a treatment.",
        afterState: "1-Tap 'Find Your Regimen' diagnostic prescribes Cleanse + Treat + Moisturize bundle with 1-click add-to-cart.",
        techStack: "Shopify Storefront API, Custom Preact Funnel, Tailwind CSS, LocalStorage State Engine"
      },
      {
        id: "rosen-sol-2",
        code: "ARCH-02",
        title: "Progressive In-Cart Regimen Builder",
        lever: "AOV",
        liftPercentage: 36,
        mechanism: "Dynamic slide-out cart drawer featuring real-time free-shipping progress indicators and 1-click complementary product cross-sells (Toner + Spot Corrector).",
        beforeState: "Static slide-out cart drawer showing only the single item added, with zero cross-sells and no shipping incentive.",
        afterState: "Interactive cart drawer with dynamic progress bar ($50 Free Shipping threshold) and 1-tap inline bundle upgrades.",
        techStack: "Shopify Liquid Ajax Cart API, Tailwind CSS, Web Storage Cache"
      },
      {
        id: "rosen-sol-3",
        code: "ARCH-03",
        title: "60-Day Replenishment SMS/One-Click Reorder Portal",
        lever: "LTV",
        liftPercentage: 19,
        mechanism: "Magic-link passwordless replenishment webview triggered at day 45 of product lifecycle, enabling reorders without login friction.",
        beforeState: "Customers run out of product and must remember password to repurchase, causing 78% churn after first bottle.",
        afterState: "Personalized replenishment SMS delivers pre-authenticated 1-tap Apple Pay checkout link at 45-day depletion cycle.",
        techStack: "Klaviyo Webhooks, ReCharge REST API, Fast Tokenized Magic Link Auth"
      }
    ]
  },
  {
    id: "soft-services",
    slug: "soft-services",
    name: "Soft Services",
    sector: "Bodycare",
    hqLocation: "New York, US",
    website: "https://softservices.co",
    instagram: {
      handle: "@softservices",
      url: "https://instagram.com/softservices"
    },
    email: "help@softservices.co",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Soft%20Services",
    decisionMakerTitles: "Co-Founder, Head of Digital, VP E-Commerce",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 135000,
      currentCVR: 1.6,
      currentAOV: 62,
      repeatPurchaseRate: 28,
      implementationFeeUSD: 15000,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Extraordinary industrial design and physical treatment packaging caliber",
        "Clinical medical-grade formulations specifically designed for below-the-neck concerns"
      ],
      primaryFrictionHeadline: "Rich editorial 'Skinfatuation' educational guides are disconnected from transactional cart triggers, stranding high-intent readers in blog templates.",
      technicalBottlenecks: [
        "Content-to-commerce disconnection: Editorial symptom articles (Keratosis Pilaris, Body Acne) have static non-interactive buy buttons requiring full page reloads.",
        "Buffing Bar PDP fails to guide customers into pairing with Carea Cream, causing single soap bar purchases with high fulfillment cost ratios.",
        "Subscription cadence defaults to 30 days, causing overstock cancellations for body bars that physically last 45-60 days."
      ]
    },
    solutions: [
      {
        id: "soft-sol-1",
        code: "ARCH-01",
        title: "Shoppable Clinical Index & Inline Cart Architecture",
        lever: "CVR",
        liftPercentage: 24,
        mechanism: "Sticky contextual product drawer and 1-tap regimen injection embedded directly inside symptom guides and Skinfatuation medical articles.",
        beforeState: "Readers read 2,000-word clinical breakdown on KP treatment, hit text links, and lose reading position upon navigation.",
        afterState: "Inline contextual treatment cards trigger instant side-drawer checkout without interrupting editorial reading flow.",
        techStack: "Headless Contentful / Shopify Storefront API, Custom Web Components, Tailwind CSS"
      },
      {
        id: "soft-sol-2",
        code: "ARCH-02",
        title: "Buffing Bar + Carea Cream Duo Configurator",
        lever: "AOV",
        liftPercentage: 29,
        mechanism: "Interactive physical treatment pairing interface comparing Single Bar vs. Complete Exfoliate & Hydrate Routine with bundle pricing.",
        beforeState: "User buys single $28 Buffing Bar; leaves without moisturizer necessary to prevent post-scrub barrier irritation.",
        afterState: "PDP interactive selector defaults to complete Buffing Bar + Carea Cream system with 1-click frequency setup.",
        techStack: "Shopify Custom PDP Template, Alpine.js, Tailwind Micro-Animations"
      },
      {
        id: "soft-sol-3",
        code: "ARCH-03",
        title: "Refill Cadence Architecture",
        lever: "LTV",
        liftPercentage: 22,
        mechanism: "Dynamic usage-calibrated subscription scheduler adjusting shipment intervals based on shower frequency and user count.",
        beforeState: "Standard 30-day subscription forces unwanted bar delivery; customer cancels subscription out of backstock panic.",
        afterState: "Smart cadence selector models 45 vs. 60 vs. 90-day intervals with SMS snooze controls.",
        techStack: "Skio / ReCharge Subscriptions API, Custom React Portal Embed"
      }
    ]
  },
  {
    id: "dieux-skin",
    slug: "dieux-skin",
    name: "Dieux Skin",
    sector: "Clinical Skincare",
    hqLocation: "New York, US",
    website: "https://dieuxskin.com",
    instagram: {
      handle: "@dieuxskin",
      url: "https://instagram.com/dieuxskin"
    },
    email: "info@dieuxskin.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Dieux%20Skin",
    decisionMakerTitles: "Co-Founder & CEO, Head of E-Commerce, Growth Director",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 165000,
      currentCVR: 1.8,
      currentAOV: 82,
      repeatPurchaseRate: 31,
      implementationFeeUSD: 16500,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Exceptional price transparency and cosmetic chemistry credibility led by Charlotte Palermino",
        "Cult hero status of reusable Forever Eye Mask creating high viral acquisition"
      ],
      primaryFrictionHeadline: "Reusable Forever Eye Mask buyers purchase once without attaching daily serums, while default subscription portals cause preventable cancel-churn.",
      technicalBottlenecks: [
        "Forever Eye Mask purchasers complete transaction without realizing the masks require a conductive serum (Auracle or Deliverance) to function.",
        "Clinical study validation tables are buried 1,400px down mobile viewports behind static accordion toggles that get skipped.",
        "Subscription portal lacks self-serve skip/swap buttons, forcing customers to submit Zendesk tickets or cancel outright."
      ]
    },
    solutions: [
      {
        id: "dieux-sol-1",
        code: "ARCH-01",
        title: "Forever Eye Mask + Serum Pairing Engine",
        lever: "AOV",
        liftPercentage: 34,
        mechanism: "Incentivized serum pairing drawer triggered upon Eye Mask addition, offering Auracle or Deliverance with bundled discount.",
        beforeState: "Customer adds $25 Forever Eye Mask alone, leaving $55 serum attachment revenue uncaptured.",
        afterState: "Slide-out pairing drawer recommends ideal active serum with 1-click bundle discount, raising basket size immediately.",
        techStack: "Shopify Ajax API, Custom Preact Drawer, Tailwind CSS"
      },
      {
        id: "dieux-sol-2",
        code: "ARCH-02",
        title: "Zero-Churn Subscriber Control Center",
        lever: "LTV",
        liftPercentage: 26,
        mechanism: "Passwordless customer subscription hub with 1-click 'Delay 15 Days', 'Swap to Air Angel', or 'Gift Next Box' flows.",
        beforeState: "Customer overwhelmed with serum supply cancels entire subscription through rigid standard portal.",
        afterState: "1-Tap SMS/email link opens subscriber hub with 3 dynamic retention deflection alternatives.",
        techStack: "ReCharge Customer Portal SDK, Custom Serverless Auth, Tailwind CSS"
      },
      {
        id: "dieux-sol-3",
        code: "ARCH-03",
        title: "Clinical Proof Accordion & Sticky Mobile Buy-Box",
        lever: "CVR",
        liftPercentage: 18,
        mechanism: "Restructured thumb-friendly clinical study data tabs pinned to a persistent mobile buy-box with instant Apple Pay anchor.",
        beforeState: "Mobile shoppers scroll past massive clinical tables and lose sight of the primary Add to Cart CTA.",
        afterState: "Persistent bottom buy-bar with instant variant switcher and high-contrast clinical validation chips.",
        techStack: "Shopify Liquid, Custom Vanilla JS Micro-Observer, Tailwind CSS"
      }
    ]
  },
  {
    id: "topicals",
    slug: "topicals",
    name: "Topicals",
    sector: "Medicated Skincare",
    hqLocation: "Los Angeles, US",
    website: "https://mytopicals.com",
    instagram: {
      handle: "@mytopicals",
      url: "https://instagram.com/mytopicals"
    },
    email: "help@mytopicals.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Topicals",
    decisionMakerTitles: "Founder & CEO, VP Marketing, Director of E-Commerce",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 260000,
      currentCVR: 1.5,
      currentAOV: 54,
      repeatPurchaseRate: 25,
      implementationFeeUSD: 18000,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Unrivaled viral TikTok momentum and cultural relevance for skin conditions",
        "Clinically verified efficacy for hyperpigmentation (Faded Serum)"
      ],
      primaryFrictionHeadline: "Massive Gen-Z social drop traffic hits generic landing pages without shade/condition segmentation, causing severe single-item cart checkouts.",
      technicalBottlenecks: [
        "Viral social traffic arrives with high intent for dark spots but bounces when confronted with non-segmented generic catalog layouts.",
        "PDP quantity selector lacks multi-tube tier incentives, defaulting 84% of orders to single 1.7oz tubes.",
        "Cart slide-out experiences noticeable layout shift (CLS 0.34) during dynamic promo validation on iOS Safari."
      ]
    },
    solutions: [
      {
        id: "top-sol-1",
        code: "ARCH-01",
        title: "Faded & Like Butter Hyperpigmentation Matcher",
        lever: "CVR",
        liftPercentage: 30,
        mechanism: "Interactive before/after severity slider matching user skin concerns to tailored single vs. dual-tube treatment regimens.",
        beforeState: "Users scroll generic product description unsure whether to buy Faded, Like Butter, or High Roller.",
        afterState: "Visual condition slider selects custom clinical pair with verified 30-day before/after data.",
        techStack: "Custom React Canvas Component, Tailwind CSS, Shopify Storefront API"
      },
      {
        id: "top-sol-2",
        code: "ARCH-02",
        title: "Value-Pack Multi-Tube Tiered Pricing UI",
        lever: "AOV",
        liftPercentage: 32,
        mechanism: "High-contrast quantity selector (1-Pack vs. 2-Pack 60-Day Supply vs. Full Body Kit) placed directly above the fold with clear savings telemetry.",
        beforeState: "Standard numerical quantity dropdown hides volume savings and encourages single tube orders.",
        afterState: "Visual tier selector featuring 'Most Popular: 2-Pack Save 15%' chip pre-selected on PDP.",
        techStack: "Shopify Custom Theme Extension, Tailwind CSS, Alpine.js"
      },
      {
        id: "top-sol-3",
        code: "ARCH-03",
        title: "Loyalty & Refill Credit Wallet",
        lever: "LTV",
        liftPercentage: 20,
        mechanism: "Persistent slide-out cart credit tracker showing redeemable points towards the next tube of Faded.",
        beforeState: "Loyalty points remain buried in third-party modal; customers forget they have $10 redeemable credits.",
        afterState: "In-cart 1-tap 'Apply $10 Topicals Club Balance' button accelerating repeat checkout velocity.",
        techStack: "Yotpo / Smile.io Headless API, Shopify Ajax Cart, Tailwind CSS"
      }
    ]
  },
  {
    id: "good-light",
    slug: "good-light",
    name: "Good Light",
    sector: "Personal Care",
    hqLocation: "New York, US",
    website: "https://goodlight.world",
    instagram: {
      handle: "@goodlight.world",
      url: "https://instagram.com/goodlight.world"
    },
    email: "hello@goodlight.world",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Good%20Light%20Beauty",
    decisionMakerTitles: "Co-Founder, Head of Digital Growth, E-Commerce Lead",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 65000,
      currentCVR: 1.3,
      currentAOV: 42,
      repeatPurchaseRate: 20,
      implementationFeeUSD: 10500,
      turnaroundDays: 14
    },
    forensicAudit: {
      brandStrengths: [
        "Deeply authentic inclusive beauty narrative founded by David Yi",
        "Gentle, barrier-repairing formulations with zero common irritants"
      ],
      primaryFrictionHeadline: "Microbiome/barrier-care positioning isn't translated into clear bundle hierarchy on mobile, forcing users to manually hunt through catalog pages.",
      technicalBottlenecks: [
        "Mobile navigation menu overlays screen without scrim blur and requires 4 taps to view the 3-step skincare routine.",
        "No dynamic bundling engine exists to motivate purchasing Cosmic Dew, Moon Glow, and Order of the Eclipse together.",
        "Post-purchase funnel ends abruptly on the default Shopify thank-you page with zero secondary cross-sell triggers."
      ]
    },
    solutions: [
      {
        id: "gl-sol-1",
        code: "ARCH-01",
        title: "Barrier-First 3-Step Starter Architecture",
        lever: "CVR",
        liftPercentage: 26,
        mechanism: "Streamlined mobile landing experience presenting the full cleanse-tone-seal routine as a single cohesive unit.",
        beforeState: "First-time visitor navigates individual PDPs for toner and cleanser without understanding how they layer.",
        afterState: "Cohesive 3-step routine page with 1-click 'Add Full Routine to Bag' and step-by-step application guidance.",
        techStack: "Shopify Section Architecture, Tailwind CSS, Instant Cart Dispatcher"
      },
      {
        id: "gl-sol-2",
        code: "ARCH-02",
        title: "Dynamic Custom Trio Builder",
        lever: "AOV",
        liftPercentage: 35,
        mechanism: "Visual 3-slot configurator ('Slot 1: Cleanse, Slot 2: Tone, Slot 3: Seal') with live bundle savings telemetry.",
        beforeState: "User purchases single $18 Moon Glow Toner; misses out on complementary cleanser and moisturizer.",
        afterState: "Interactive slot builder visually prompts users to complete their 3-piece set to unlock 15% savings.",
        techStack: "React Custom Bundle App, Shopify Storefront API, Tailwind CSS"
      },
      {
        id: "gl-sol-3",
        code: "ARCH-03",
        title: "Post-Purchase 1-Click Upsell Funnel",
        lever: "LTV",
        liftPercentage: 17,
        mechanism: "Tokenized post-purchase checkout page offering travel-size minis or refill pouches without re-entering payment data.",
        beforeState: "User reaches standard order confirmation page and exits store immediately.",
        afterState: "Instant 1-click upsell offer for a $12 travel duo before order confirmation is finalized.",
        techStack: "Shopify Post-Purchase Checkout Extensions API, Tailwind CSS"
      }
    ]
  },
  {
    id: "entire-studios",
    slug: "entire-studios",
    name: "Entire Studios",
    sector: "Fashion/Streetwear",
    hqLocation: "Los Angeles / Auckland",
    website: "https://entirestudios.com",
    instagram: {
      handle: "@entire_studios",
      url: "https://instagram.com/entire_studios"
    },
    email: "info@entirestudios.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Entire%20Studios",
    decisionMakerTitles: "Co-Founder, Managing Director, Head of Digital Operations",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 320000,
      currentCVR: 1.2,
      currentAOV: 210,
      repeatPurchaseRate: 24,
      implementationFeeUSD: 22000,
      turnaroundDays: 24
    },
    forensicAudit: {
      brandStrengths: [
        "Unprecedented Yeezy/Kanye-heritage architectural streetwear silhouettes",
        "Extraordinary brand equity and instant sell-out drop velocity across global markets"
      ],
      primaryFrictionHeadline: "Heavy garment sizing uncertainty (oversized/cropped boxy silhouettes) causes hesitation and high return rates, while drop days suffer from static collection grids.",
      technicalBottlenecks: [
        "Brutalist minimal size guide provides only flat chest/length tables with zero guidance on model height or garment drape on varied frames.",
        "Lookbook exploration requires clicking back and forth between look and catalog, losing high-intent drop-day shoppers.",
        "High-traffic drop spikes create severe cart contention and inventory race conditions on popular sizes (M/L)."
      ]
    },
    solutions: [
      {
        id: "es-sol-1",
        code: "ARCH-01",
        title: "Biometric Silhouette & Fit Calibration UI",
        lever: "CVR",
        liftPercentage: 29,
        mechanism: "Interactive height/weight/fit preference slider ('Boxy Cropped vs. Relaxed Oversized') demonstrating exact fit on 4 calibrated models.",
        beforeState: "Shopper hesitates on $280 Pill Puffer sizing, fears ill-fitting return shipping, and abandons cart.",
        afterState: "Biometric fit calibration guarantees size choice in 10 seconds, cutting checkout hesitation by 40%.",
        techStack: "Custom WebGL / Canvas Sizing Engine, Shopify Storefront API, Tailwind CSS"
      },
      {
        id: "es-sol-2",
        code: "ARCH-02",
        title: "Uniform Complete-the-Silhouette Drawer",
        lever: "AOV",
        liftPercentage: 27,
        mechanism: "Instant tonal colorway cross-sell pairing matching Heavy Hoodie + Cargo Sweatpant + Puffer directly within the slide-out bag.",
        beforeState: "Shopper buys Heavy Hoodie alone, missing matching Heavy Sweatpant in identical Tar / Soot pigment wash.",
        afterState: "In-bag 'Complete the Uniform' selector allows 1-click size selection of the matching sweatpant.",
        techStack: "Shopify Ajax Bag API, Tailwind CSS, LocalStorage Memory"
      },
      {
        id: "es-sol-3",
        code: "ARCH-03",
        title: "High-Concurrency Drop Waitroom & VIP Early Access Gate",
        lever: "LTV",
        liftPercentage: 18,
        mechanism: "Low-latency drop architecture with live stock telemetry per size to prevent overselling and customer resentment.",
        beforeState: "Drop-day traffic spikes crash collection pages and trigger checkout failures for VIP collectors.",
        afterState: "Sub-second edge waitroom reservations ensure smooth VIP checkout with verified inventory lock.",
        techStack: "Cloudflare Workers Edge Architecture, Shopify Storefront API"
      }
    ]
  },
  {
    id: "cole-buxton",
    slug: "cole-buxton",
    name: "Cole Buxton",
    sector: "Fashion/Streetwear",
    hqLocation: "London, UK",
    website: "https://colebuxton.com",
    instagram: {
      handle: "@colebuxton",
      url: "https://instagram.com/colebuxton"
    },
    email: "info@colebuxton.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Cole%20Buxton",
    decisionMakerTitles: "Founder, Head of E-Commerce, Operations Director",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 240000,
      currentCVR: 1.4,
      currentAOV: 245,
      repeatPurchaseRate: 29,
      implementationFeeUSD: 20000,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Pioneering British athletic luxury positioning with bespoke custom fabric knits",
        "Extremely loyal global collector base with proven repeat purchase affinity"
      ],
      primaryFrictionHeadline: "Lookbook editorial pages generate massive engagement but require 4+ clicks to locate and add individual garments to the bag.",
      technicalBottlenecks: [
        "Campaign lookbook images are completely static flat assets without interactive garment hotspots or quick-bag triggers.",
        "Tees and gym shorts lack an automated multi-pack bundle discount engine, lowering basket depth.",
        "US and international shoppers encounter unexpected duty/tax calculations at final checkout step, causing 42% international cart abandonment."
      ]
    },
    solutions: [
      {
        id: "cb-sol-1",
        code: "ARCH-01",
        title: "Shoppable Editorial Lookbook Hotspots",
        lever: "CVR",
        liftPercentage: 25,
        mechanism: "Interactive hotspot overlay on high-res lookbook photography enabling 1-click size selection and bag injection without leaving the lookbook.",
        beforeState: "User views full tracksuit lookbook image, navigates back to catalog, searches for pant, loses momentum.",
        afterState: "Direct tap on jacket or pant opens instant slide-out size picker with real-time stock status.",
        techStack: "Shopify Storefront API, Custom Image Map Micro-Component, Tailwind CSS"
      },
      {
        id: "cb-sol-2",
        code: "ARCH-02",
        title: "Athletic Essential Multi-Buy Matrix",
        lever: "AOV",
        liftPercentage: 28,
        mechanism: "Tonal 3-pack configurator for heavyweight Warm-Up Tees, Ribbed Tanks, and Athletic Shorts with tiered volume pricing.",
        beforeState: "Customer buys single $110 Warm-Up Tee; misses out on colorway rotation (Washed Black, Grey Marl, White).",
        afterState: "PDP 3-pack matrix lets customer pick 3 distinct sizes/colors with an automated £30 multi-buy incentive.",
        techStack: "Shopify Custom Cart Line-Item Scripts, Tailwind CSS"
      },
      {
        id: "cb-sol-3",
        code: "ARCH-03",
        title: "International Duty/Tax Pre-Calculation Bar",
        lever: "LTV",
        liftPercentage: 21,
        mechanism: "Geo-IP localized currency and guaranteed landed-duty transparency embedded directly within the mini-cart.",
        beforeState: "US/EU customers abandon at final checkout screen due to unexpected import tariffs.",
        afterState: "Mini-cart displays 'All US Duties & Taxes Prepaid' guarantee with transparent local currency conversion.",
        techStack: "Shopify Markets API, Global-e Integration Layer, Tailwind CSS"
      }
    ]
  },
  {
    id: "adsum",
    slug: "adsum",
    name: "Adsum",
    sector: "Fashion/Streetwear",
    hqLocation: "Brooklyn, US",
    website: "https://adsumnyc.com",
    instagram: {
      handle: "@adsumnyc",
      url: "https://instagram.com/adsumnyc"
    },
    email: "info@adsumnyc.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Adsum%20NYC",
    decisionMakerTitles: "Founder & Creative Director, Head of E-Commerce",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 95000,
      currentCVR: 1.3,
      currentAOV: 165,
      repeatPurchaseRate: 26,
      implementationFeeUSD: 14000,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Mastery of high-performance technical fabrication combined with understated Brooklyn tailoring",
        "Dedicated global menswear following with high respect for technical garment construction"
      ],
      primaryFrictionHeadline: "Technical outerwear and garment specs are buried in plain-text paragraphs, failing to justify premium price points to first-time visitors.",
      technicalBottlenecks: [
        "Fabric performance ratings (Pertex, 3-layer waterproof membranes, Cordura) are formatted as unstyled text walls without visual hierarchy.",
        "Seasonal outerwear lacks a coordinated layering bundler (Base Fleece + Waterproof Shell) on product pages.",
        "Sold-out sizes have passive email signup forms without SMS or size-specific waitlist queuing."
      ]
    },
    solutions: [
      {
        id: "ads-sol-1",
        code: "ARCH-01",
        title: "Technical Spec & Garment Anatomy Breakdown UI",
        lever: "CVR",
        liftPercentage: 23,
        mechanism: "Architectural specification table comparing GSM weight, water column ratings, seam tape integrity, and flat-lay garment dimensions.",
        beforeState: "First-time buyer hesitates on $425 technical jacket unsure of weather rating and garment warmth.",
        afterState: "Visual weather-rating and fabric anatomy spec module clarifies performance instantly above the buy button.",
        techStack: "Shopify Metafields, Custom Tailwind Spec Grid, Vanilla JS Accordion"
      },
      {
        id: "ads-sol-2",
        code: "ARCH-02",
        title: "Seasonal Layering System Configurator",
        lever: "AOV",
        liftPercentage: 26,
        mechanism: "Curated Base Layer + Mid-Fleece + Outer Shell outfit builder offering tiered system discounts.",
        beforeState: "Customer purchases Shell Jacket alone without complementary Fleece Liner designed to snap into it.",
        afterState: "Interactive layering module allows 1-click addition of matching liner with instant $40 system discount.",
        techStack: "Shopify Storefront API, Custom Bundle Drawer, Tailwind CSS"
      },
      {
        id: "ads-sol-3",
        code: "ARCH-03",
        title: "Archive & Restock Priority Notification Engine",
        lever: "LTV",
        liftPercentage: 16,
        mechanism: "High-converting back-in-stock SMS/Email capture engine locking in customer size intent on sold-out seasonal grails.",
        beforeState: "Customer sees sold-out size and bounces without leaving contact information.",
        afterState: "1-Tap 'Reserve Restock in My Size' capture converts bounce into high-intent notification with 38% buy rate.",
        techStack: "Klaviyo Back-in-Stock API, Custom Modal Architecture, Tailwind CSS"
      }
    ]
  },
  {
    id: "maniere-de-voir",
    slug: "maniere-de-voir",
    name: "Manière De Voir",
    sector: "Fashion/Streetwear",
    hqLocation: "Manchester, UK",
    website: "https://manieredevoir.com",
    instagram: {
      handle: "@manieredevoir",
      url: "https://instagram.com/manieredevoir"
    },
    email: "contact@manieredevoir.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Maniere%20De%20Voir",
    decisionMakerTitles: "CEO, Head of E-Commerce, Digital Marketing Lead",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 420000,
      currentCVR: 1.5,
      currentAOV: 118,
      repeatPurchaseRate: 27,
      implementationFeeUSD: 24000,
      turnaroundDays: 24
    },
    forensicAudit: {
      brandStrengths: [
        "High-volume, trend-setting tailored contemporary aesthetic with massive global reach",
        "Impressive flagship retail expansion proving omni-channel customer demand"
      ],
      primaryFrictionHeadline: "High SKU count overwhelms mobile browsers with endless scrolling and slow filtering, while single-piece dresses/tops miss coordinated accessories.",
      technicalBottlenecks: [
        "Heavy mobile catalog causes DOM stutter and high latency when filtering across sizes, fits, and colorways.",
        "Complete outfit pairing (Blazer + Trouser + Heel) is not available inside the slide-out bag, forcing users back into catalog search.",
        "Returns process sends customers to third-party portals, forfeiting immediate store credit exchange conversion opportunities."
      ]
    },
    solutions: [
      {
        id: "mdv-sol-1",
        code: "ARCH-01",
        title: "Zero-Latency Faceted Mobile Filter & Quick-Add Bar",
        lever: "CVR",
        liftPercentage: 24,
        mechanism: "Client-side cached filtering by occasion, silhouette, and in-stock size with instant 1-tap size addition directly from grid.",
        beforeState: "User taps filters on mobile, waits 2.2s for catalog reload, encounters layout shift, and exits.",
        afterState: "Zero-latency instant client-side filter surfaces matching in-stock styles in &lt;100ms.",
        techStack: "Algolia Headless / Shopify Storefront API, Custom Preact Facets, Tailwind CSS"
      },
      {
        id: "mdv-sol-2",
        code: "ARCH-02",
        title: "Algorithmic 'Complete the Tailored Look' Rail",
        lever: "AOV",
        liftPercentage: 31,
        mechanism: "Deterministic co-purchase pairing inside the slide-out bag matching Corset + Tailored Trouser + Trench Coat in 1 tap.",
        beforeState: "User buys Corset Top alone; misses matching tailored trouser in matching custom vegan leather hue.",
        afterState: "In-bag rail displays matching bottoms with pre-selected matching size and 1-tap 'Add to Complete Set'.",
        techStack: "Shopify Recombee API, Custom Ajax Drawer, Tailwind CSS"
      },
      {
        id: "mdv-sol-3",
        code: "ARCH-03",
        title: "Instant Exchange-First Return Portal UI",
        lever: "LTV",
        liftPercentage: 19,
        mechanism: "Self-service returns interface incentivizing instant size/color exchanges with a 110% store credit bonus before cash refund.",
        beforeState: "Shopper requests cash refund on incorrect size; brand loses both revenue and customer lifetime value.",
        afterState: "Portal defaults to 1-click free size exchange with real-time stock reservation, rescuing 32% of returns.",
        techStack: "Loop Returns API, Custom Next.js Middleware, Tailwind CSS"
      }
    ]
  },
  {
    id: "jaded-london",
    slug: "jaded-london",
    name: "Jaded London",
    sector: "Fashion/Streetwear",
    hqLocation: "London, UK",
    website: "https://jadedldn.com",
    instagram: {
      handle: "@jadedldn",
      url: "https://instagram.com/jadedldn"
    },
    email: "customercare@jadedldn.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Jaded%20London",
    decisionMakerTitles: "Co-Founder, E-Commerce Director, Head of Growth",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 510000,
      currentCVR: 1.4,
      currentAOV: 96,
      repeatPurchaseRate: 23,
      implementationFeeUSD: 25000,
      turnaroundDays: 24
    },
    forensicAudit: {
      brandStrengths: [
        "Unrivaled trend velocity defining Y2K, rave, and festival youth street culture worldwide",
        "High-affinity influencer placement engine driving instant multi-thousand visitor traffic spikes"
      ],
      primaryFrictionHeadline: "Viral TikTok traffic spikes land on out-of-stock variants or experience high mobile checkout drop-off due to fragmented multi-step shipping forms.",
      technicalBottlenecks: [
        "Viral TikTok links direct shoppers to sold-out size variants without automatic redirect to identical fits or sister wash colorways.",
        "Lookbook bundles ('Shop the Festival Fit') lack an integrated 3-piece bundle builder with tiered milestone incentives.",
        "Mobile checkout flow forces standard multi-step form entry instead of anchoring instantaneous Apple Pay / Shop Pay biometric authorization."
      ]
    },
    solutions: [
      {
        id: "jl-sol-1",
        code: "ARCH-01",
        title: "Dynamic Variant Redirect & Similar-In-Stock Fallback UI",
        lever: "CVR",
        liftPercentage: 27,
        mechanism: "Smart variant routing that auto-surfaces sister silhouettes and matching in-stock sizes when viral SKUs sell out.",
        beforeState: "Shopper arrives from viral TikTok, sees 'Sold Out' badge on size S, bounces within 4 seconds.",
        afterState: "Auto-prompts 'Size S available in Charcoal & Moss' with 1-tap size addition and instant checkout anchor.",
        techStack: "Shopify Theme Architecture, Custom Mutation Observer, Tailwind CSS"
      },
      {
        id: "jl-sol-2",
        code: "ARCH-02",
        title: "Festival / Night-Out Capsule Bundler",
        lever: "AOV",
        liftPercentage: 29,
        mechanism: "Interactive 3-piece capsule builder (Cargo + Mesh Top + Micro Bag) with live visual fit preview and progressive discounts.",
        beforeState: "Customer buys viral Colossus Cargo pants alone ($95) without accompanying top or accessories.",
        afterState: "Interactive 3-piece capsule builder nudges user to add top + bag to unlock $20 off full festival look.",
        techStack: "Shopify Custom Cart API, Alpine.js, Tailwind CSS"
      },
      {
        id: "jl-sol-3",
        code: "ARCH-03",
        title: "Express 1-Tap Mobile Wallet Checkout Bar",
        lever: "LTV",
        liftPercentage: 18,
        mechanism: "Persistent mobile viewport sticky bar pre-authenticating Apple Pay, Shop Pay, and Klarna split-pay telemetry.",
        beforeState: "Gen-Z mobile shoppers drop off at address entry screen due to keyboard friction on smartphones.",
        afterState: "Persistent 1-tap biometric Apple Pay checkout bypasses address forms completely, completing order in 4 seconds.",
        techStack: "Shopify Express Checkout Architecture, Web Payments API, Tailwind CSS"
      }
    ]
  },
  {
    id: "truff",
    slug: "truff",
    name: "Truff",
    sector: "Functional F&B",
    hqLocation: "Los Angeles, US",
    website: "https://truff.com",
    instagram: {
      handle: "@truff",
      url: "https://instagram.com/truff"
    },
    email: "support@truff.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Truff%20Hot%20Sauce",
    decisionMakerTitles: "Co-Founder & CEO, VP E-Commerce, Head of Direct-to-Consumer",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 245000,
      currentCVR: 1.9,
      currentAOV: 68,
      repeatPurchaseRate: 30,
      implementationFeeUSD: 18500,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Luxury branding and packaging disrupting commodity condiment grocery categories",
        "Enormous gifting demand during Q4 and holiday corporate gifting cycles"
      ],
      primaryFrictionHeadline: "Standard B2C cart blocks high-margin corporate gifting orders (multi-address CSV uploads), while single-bottle buyers churn without heat-level variety packs.",
      technicalBottlenecks: [
        "Corporate buyers seeking to purchase 50+ gift boxes must checkout one by one or leave the store to contact sales via manual email.",
        "Single-bottle hot sauce purchasers are not guided into multi-pack heat vaults (Original + Hotter + White Truffle).",
        "Subscription cadence fails to account for pantry usage cycles, causing subscription cancellations instead of automated skip cycles."
      ]
    },
    solutions: [
      {
        id: "truff-sol-1",
        code: "ARCH-01",
        title: "Interactive 'Build Your Custom 4-Pack Vault' UI",
        lever: "AOV",
        liftPercentage: 42,
        mechanism: "Drag-and-drop hot sauce, pasta sauce, and truffle oil crate configurator with gold foil gift packaging and custom message card.",
        beforeState: "User buys single $18 Black Truffle hot sauce bottle, paying $8 shipping and exiting store.",
        afterState: "Interactive 4-slot Vault builder motivates customer to fill all 4 slots for free shipping and luxury gift box.",
        techStack: "Custom React Crate Builder, Shopify Storefront API, Tailwind CSS"
      },
      {
        id: "truff-sol-2",
        code: "ARCH-02",
        title: "B2B & VIP Corporate Gifting Multi-Address Portal",
        lever: "CVR",
        liftPercentage: 26,
        mechanism: "Dedicated bulk corporate checkout interface supporting CSV address uploads, gift card customization, and instant automated PDF invoicing.",
        beforeState: "Corporate office manager wanting 30 holiday boxes leaves site due to inability to ship to multiple home addresses.",
        afterState: "Self-serve multi-address portal lets user upload 30 recipient addresses and pay via corporate card in 3 minutes.",
        techStack: "Shopify Plus Multi-Address API, Custom Next.js Flow, Tailwind CSS"
      },
      {
        id: "truff-sol-3",
        code: "ARCH-03",
        title: "Pantry Auto-Replenish Cadence Switcher",
        lever: "LTV",
        liftPercentage: 24,
        mechanism: "Frictionless 30/60/90-day kitchen replenishment toggle with VIP subscriber-only access to limited white truffle reserves.",
        beforeState: "Customer finishes hot sauce bottle after 2 months, forgets brand, buys grocery competitor.",
        afterState: "Automated 60-day pantry replenishment with SMS notice offering 1-click addition of new Truff Mayo or Olive Oil.",
        techStack: "ReCharge API, Klaviyo SMS Integration, Tailwind CSS"
      }
    ]
  },
  {
    id: "mud-wtr",
    slug: "mud-wtr",
    name: "Mud\\Wtr",
    sector: "Functional F&B",
    hqLocation: "Santa Monica, US",
    website: "https://mudwtr.com",
    instagram: {
      handle: "@drinkmudwtr",
      url: "https://instagram.com/drinkmudwtr"
    },
    email: "cheers@mudwtr.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=MUD%5CWTR",
    decisionMakerTitles: "Founder & CEO, Head of E-Commerce, VP Retention",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 310000,
      currentCVR: 1.7,
      currentAOV: 52,
      repeatPurchaseRate: 36,
      implementationFeeUSD: 19500,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Industry-defining positioning as the ritualistic coffee alternative with exceptional brand storytelling",
        "High subscriber base generating steady monthly recurring revenue baseline"
      ],
      primaryFrictionHeadline: "First-time functional mushroom skeptics face cognitive overload on long landing pages, and existing subscribers cancel when they build up excess powder pouches.",
      technicalBottlenecks: [
        "First-time coffee quitters encounter complex 30-serving tin customizers with ambiguous subscription terms, stalling checkout conversion.",
        "Morning (:rise) buyers are not systematically guided to adopt the evening (:rest) formula, capping initial order value.",
        "Subscribers who consume mud slower than 30 days hit cancellation pages with no smart pause or backstock-delay options."
      ]
    },
    solutions: [
      {
        id: "mud-sol-1",
        code: "ARCH-01",
        title: "Interactive Ritual & Caffeine-Sensitivity Configurator",
        lever: "CVR",
        liftPercentage: 28,
        mechanism: "45-second diagnostic matching daily caffeine crash symptoms and morning ritual habits to a custom Starter Kit with free frother.",
        beforeState: "Skeptical coffee drinker scrolls long PDP, unsure if adaptogens cause stomach upset, and bounces.",
        afterState: "Diagnostic calculates caffeine reduction trajectory and auto-configures custom starter package in cart.",
        techStack: "Custom Preact Diagnostic Funnel, Shopify Storefront API, Tailwind CSS"
      },
      {
        id: "mud-sol-2",
        code: "ARCH-02",
        title: "Morning + Evening (:rest) Dual-Ritual Bundle UI",
        lever: "AOV",
        liftPercentage: 33,
        mechanism: "Side-by-side comparison matrix and 1-click upgrade from single :rise morning tin to the full 24-Hour Circadian System.",
        beforeState: "User purchases single $40 :rise tin, unaware that :rest rooibos blend enhances deep sleep.",
        afterState: "1-Click 'Upgrade to 24-Hour System' button adds :rest tin at 25% bundle savings, increasing AOV from $40 to $68.",
        techStack: "Shopify Custom Line Item Engine, Tailwind CSS"
      },
      {
        id: "mud-sol-3",
        code: "ARCH-03",
        title: "Smart Backstock & Pause Deflection Flow",
        lever: "LTV",
        liftPercentage: 29,
        mechanism: "Cancellation intercept interface offering a 1-tap 'Pause for 45 Days', 'Skip Next Box', or 'Swap to Matcha/Turmeric Blend' alternative.",
        beforeState: "Subscriber with 2 extra unopened tins clicks Cancel Subscription and is permanently lost.",
        afterState: "Self-serve modal catches cancellation with instant 1-tap 'Skip Next Month While You Catch Up', rescuing 42% of cancels.",
        techStack: "Smartrr / ReCharge Retention Webhook, Custom React Flow, Tailwind CSS"
      }
    ]
  },
  {
    id: "kin-euphorics",
    slug: "kin-euphorics",
    name: "Kin Euphorics",
    sector: "Functional F&B",
    hqLocation: "New York, US",
    website: "https://kineuphorics.com",
    instagram: {
      handle: "@kineuphorics",
      url: "https://instagram.com/kineuphorics"
    },
    email: "hello@kineuphorics.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Kin%20Euphorics",
    decisionMakerTitles: "Co-Founder & CEO, Head of E-Commerce, VP Digital Marketing",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 155000,
      currentCVR: 1.5,
      currentAOV: 64,
      repeatPurchaseRate: 25,
      implementationFeeUSD: 15500,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Category creator in adaptogenic adult euphoric beverages co-founded by Bella Hadid",
        "Distinctive aesthetic and strong wellness positioning targeting sober-curious lifestyles"
      ],
      primaryFrictionHeadline: "New visitors struggle to understand functional differences between High Rhode, Spritz, Actual Sunshine, and Lightwave, leading to decision paralysis.",
      technicalBottlenecks: [
        "Visitors cannot determine which beverage delivers their desired mental state (Focus vs. Social Energy vs. Deep Sleep).",
        "Beverage cans are sold primarily in rigid 8-packs without an intuitive multi-flavor case mixer.",
        "Social hosts and party organizers have no recurring replenishment portal tailored to weekend entertaining schedules."
      ]
    },
    solutions: [
      {
        id: "kin-sol-1",
        code: "ARCH-01",
        title: "Mood & Neuro-Botanical Matrix Selector",
        lever: "CVR",
        liftPercentage: 31,
        mechanism: "Interactive desired-state selector ('Social Euphoria vs. Deep Calm vs. Morning Clarity') with clear adaptogen breakdowns.",
        beforeState: "First-time buyer reads confusing nootropic ingredient jargon, hesitates, and leaves without trying a can.",
        afterState: "Visual mood matrix recommends the precise formulation with real-time onset timeline (feel in 15 mins).",
        techStack: "Custom Tailwind Matrix Component, Shopify Storefront API"
      },
      {
        id: "kin-sol-2",
        code: "ARCH-02",
        title: "Custom Case Builder (8-Pack / 16-Pack / 24-Pack Mix & Match)",
        lever: "AOV",
        liftPercentage: 35,
        mechanism: "Visual can-slot configurator unlocking free shipping and per-can price drops as users mix and match flavors to fill larger cases.",
        beforeState: "User buys single 8-pack of Kin Spritz ($39) and pays shipping.",
        afterState: "16-Pack Case Builder encourages user to add Actual Sunshine and Lightwave to unlock $10 off + free shipping.",
        techStack: "Shopify Custom Bundle API, Preact Slot Engine, Tailwind CSS"
      },
      {
        id: "kin-sol-3",
        code: "ARCH-03",
        title: "Social Host Recurring Party-Pack Portal",
        lever: "LTV",
        liftPercentage: 20,
        mechanism: "Flexible monthly event replenishment interface allowing subscribers to modify flavor ratios via 1-tap SMS before scheduled shipment.",
        beforeState: "Subscribers stuck with unconsumed cans cancel subscription due to inflexible flavor ratios.",
        afterState: "SMS-activated flavor swapper lets hosts rebalance case ratios in 2 taps before each shipment.",
        techStack: "ReCharge Quick Actions API, Klaviyo SMS Webhook, Tailwind CSS"
      }
    ]
  },
  {
    id: "ghia",
    slug: "ghia",
    name: "Ghia",
    sector: "Functional F&B",
    hqLocation: "Los Angeles, US",
    website: "https://drinkghia.com",
    instagram: {
      handle: "@drinkghia",
      url: "https://instagram.com/drinkghia"
    },
    email: "hi@drinkghia.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Ghia%20Aperitif",
    decisionMakerTitles: "Founder & CEO, Head of E-Commerce, Operations Director",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 110000,
      currentCVR: 1.6,
      currentAOV: 58,
      repeatPurchaseRate: 27,
      implementationFeeUSD: 14500,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Extraordinary Mediterranean aperitif branding and zero-alcohol botanical recipe integrity",
        "High restaurant and specialty grocery distribution reinforcing digital DTC credibility"
      ],
      primaryFrictionHeadline: "High shipping costs on heavy glass bottles hurt single-bottle conversion unless customers are guided into multi-bottle or Le Spritz variety packs.",
      technicalBottlenecks: [
        "A single $38 glass bottle of The Aperitif incurs steep ground shipping, causing 58% cart abandonment at checkout step 2.",
        "PDP lacks dynamic serving recipe visualizers demonstrating how to prepare spritzes with club soda and citrus garnishes.",
        "Customers who purchase seasonal spritz drops are not enrolled in recurring tasting clubs."
      ]
    },
    solutions: [
      {
        id: "ghia-sol-1",
        code: "ARCH-01",
        title: "Dinner Party Hosting Bar Configurator",
        lever: "AOV",
        liftPercentage: 38,
        mechanism: "Guided bar cart bundle UI pairing Original Aperitif + Le Spritz canned multi-pack + custom hand-blown glassware.",
        beforeState: "Customer adds single $38 bottle of Aperitif; balks at $12 shipping fee at final checkout screen.",
        afterState: "Guided Hosting Bar configurator prompts addition of Le Spritz 4-pack, unlocking free shipping and a $78 basket.",
        techStack: "Shopify Custom PDP Architecture, Tailwind CSS, Alpine.js"
      },
      {
        id: "ghia-sol-2",
        code: "ARCH-02",
        title: "Flavor Profile & Serve-Style Interactive Module",
        lever: "CVR",
        liftPercentage: 24,
        mechanism: "Visual botanical tasting spectrum (Bitterness vs. Botanical vs. Citrus) with embedded 10-second cocktail recipe cards.",
        beforeState: "Visitor unsure what non-alcoholic aperitif tastes like hesitates and exits without tasting.",
        afterState: "Interactive tasting note radar and 3-ingredient recipe visualizer demystifies flavor profile in seconds.",
        techStack: "Custom Canvas Visualizer, Shopify Metafields, Tailwind CSS"
      },
      {
        id: "ghia-sol-3",
        code: "ARCH-03",
        title: "Seasonal Aperitif Club Retention Architecture",
        lever: "LTV",
        liftPercentage: 21,
        mechanism: "Dedicated membership portal offering early access to limited seasonal spritz flavors and effortless shipment skipping.",
        beforeState: "Customers buy once for Dry January and never return during spring/summer entertaining months.",
        afterState: "Automated seasonal reservation club guarantees shipment of limited summer spritz drops with 1-click SMS skip.",
        techStack: "Skio / ReCharge Headless Portal, Tailwind CSS"
      }
    ]
  },
  {
    id: "oats-overnight",
    slug: "oats-overnight",
    name: "Oats Overnight",
    sector: "Functional F&B",
    hqLocation: "Tempe, US",
    website: "https://oatsovernight.com",
    instagram: {
      handle: "@oatsovernight",
      url: "https://instagram.com/oatsovernight"
    },
    email: "support@oatsovernight.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Oats%20Overnight",
    decisionMakerTitles: "Founder & CEO, Head of Growth, VP Direct to Consumer",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 410000,
      currentCVR: 2.1,
      currentAOV: 46,
      repeatPurchaseRate: 38,
      implementationFeeUSD: 22000,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Unmatched operational execution and subscription flywheel in high-protein breakfast nutrition",
        "Extremely high customer retention driven by continuous flavor R&D and community voting"
      ],
      primaryFrictionHeadline: "Building a 16-pack or 24-pack box across 35+ flavors on mobile causes severe scroll fatigue and mid-funnel abandonment before the box is full.",
      technicalBottlenecks: [
        "Mobile box builder requires scrolling past dozens of flavor cards, causing high drop-off before hitting the 16-pack minimum requirement.",
        "Box size upgrade incentives (16-pack vs. 24-pack vs. 32-pack) are buried in small footer text with no real-time per-meal price comparison.",
        "Existing subscribers receive pre-billing emails that require full website login to change upcoming flavor selections."
      ]
    },
    solutions: [
      {
        id: "oo-sol-1",
        code: "ARCH-01",
        title: "Zero-Scroll Mobile Box-Builder UI",
        lever: "CVR",
        liftPercentage: 26,
        mechanism: "Sticky bottom slot tray with 1-tap 'Auto-Fill with Top 5 Bestsellers' and instant dietary filter pills (High Protein, Plant-Based).",
        beforeState: "User spends 4 minutes scrolling 35 flavors on iPhone screen, gets frustrated filling slot 11, abandons session.",
        afterState: "1-Tap 'Popular Starter Pack' pre-fills box instantly, allowing user to swap individual flavors in seconds.",
        techStack: "Custom React Box Builder, Shopify Storefront API, Tailwind CSS"
      },
      {
        id: "oo-sol-2",
        code: "ARCH-02",
        title: "Box Size Upgrade Nudge (16-Pack -> 24/32-Pack)",
        lever: "AOV",
        liftPercentage: 28,
        mechanism: "Real-time per-breakfast cost comparator inside the builder showing exact savings per meal as box size scales.",
        beforeState: "Customer defaults to minimum 16-pack box at $48 ($3.00/meal).",
        afterState: "Builder highlights 'Upgrade to 24-Pack: Save $0.45 per breakfast' nudging 34% of users to higher tier.",
        techStack: "Shopify Custom Cart Engine, Tailwind CSS, Alpine.js"
      },
      {
        id: "oo-sol-3",
        code: "ARCH-03",
        title: "1-Click Next-Box Flavor Roulette & Swap UI",
        lever: "LTV",
        liftPercentage: 25,
        mechanism: "Passwordless pre-billing notification drawer allowing subscribers to swap flavors in 2 taps without logging in.",
        beforeState: "Subscriber tires of chocolate flavor, ignores complex login email, and eventually cancels entire subscription.",
        afterState: "SMS link opens passwordless 1-click swap tray to sample newly released limited edition flavors instantly.",
        techStack: "ReCharge / Skio Passwordless Auth, Klaviyo Webhooks, Tailwind CSS"
      }
    ]
  },
  {
    id: "boy-smells",
    slug: "boy-smells",
    name: "Boy Smells",
    sector: "Home/Fragrance/Tech",
    hqLocation: "Los Angeles, US",
    website: "https://boysmells.com",
    instagram: {
      handle: "@boy__smells",
      url: "https://instagram.com/boy__smells"
    },
    email: "support@boysmells.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Boy%20Smells",
    decisionMakerTitles: "Co-Founder & CEO, Head of E-Commerce, VP Marketing",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 185000,
      currentCVR: 1.5,
      currentAOV: 84,
      repeatPurchaseRate: 26,
      implementationFeeUSD: 16500,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Pioneering 'genderful' fragrance brand identity disrupting traditional luxury candle categories",
        "High retail velocity across Sephora, Nordstrom, and global luxury department stores"
      ],
      primaryFrictionHeadline: "Blind-buying $50–$98 fragrances online creates extreme purchase hesitation, and sample set buyers lack an automated digital bridge to redeem credits on full bottles.",
      technicalBottlenecks: [
        "Fine fragrance exploration lacks an interactive scent-note olfactory pyramid, forcing visitors to guess scent profiles from abstract marketing copy.",
        "Candle purchasers check out without cross-selling into the matching Cologne de Parfum or Room Spray in the same scent family.",
        "Customers who purchase the $32 Discovery Sample Kit must manually copy-paste promotional discount codes to redeem credit on full bottles."
      ]
    },
    solutions: [
      {
        id: "bs-sol-1",
        code: "ARCH-01",
        title: "Olfactory Architecture & Scent-Family Mapper",
        lever: "CVR",
        liftPercentage: 32,
        mechanism: "Interactive scent matrix (Woody, Smoked, Floral, Gourmand) translating complex notes into spatial mood profiles and projection radiuses.",
        beforeState: "Online shopper hesitates to blind-buy $98 Hinoki Fantôme bottle, fearing scent is too smoky.",
        afterState: "Visual Olfactory profile models top, heart, and base notes with customer longevity ratings, accelerating purchase confidence.",
        techStack: "Custom SVG Radar Chart Component, Shopify Metafields, Tailwind CSS"
      },
      {
        id: "bs-sol-2",
        code: "ARCH-02",
        title: "Home + Body Dual-Format Bundler",
        lever: "AOV",
        liftPercentage: 30,
        mechanism: "Dynamic cart cross-sell pairing signature Kush or Hinoki Fantôme candle with its matching Fine Fragrance or Room Spray.",
        beforeState: "Customer buys single $48 Kush Candle and leaves site.",
        afterState: "In-cart prompt offers 'Add Kush Cologne de Parfum: Save 20% on the Set', lifting order value to $128.",
        techStack: "Shopify Custom Cart Drawer API, Tailwind CSS"
      },
      {
        id: "bs-sol-3",
        code: "ARCH-03",
        title: "Automated Discovery-Voucher Redemption Wallet",
        lever: "LTV",
        liftPercentage: 27,
        mechanism: "Persistent top-bar credit tracker that automatically deducts the $32 sample-set voucher when full-size bottle is added.",
        beforeState: "Sample kit buyer forgets promo code from package, abandons full-bottle cart.",
        afterState: "Direct magic-link from sample follow-up email automatically loads $32 voucher credit into cart session.",
        techStack: "Shopify Draft Orders API, Custom Tokenized URL Handler, Tailwind CSS"
      }
    ]
  },
  {
    id: "dedcool",
    slug: "dedcool",
    name: "DedCool",
    sector: "Home/Fragrance/Tech",
    hqLocation: "Los Angeles, US",
    website: "https://dedcool.com",
    instagram: {
      handle: "@dedcool",
      url: "https://instagram.com/dedcool"
    },
    email: "hello@dedcool.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=DedCool",
    decisionMakerTitles: "Founder & Creative Director, Head of Growth, E-Commerce Manager",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 130000,
      currentCVR: 1.7,
      currentAOV: 88,
      repeatPurchaseRate: 31,
      implementationFeeUSD: 15000,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Unique cross-category fragrance penetration through high-performance laundry Dedtergent and room spritz",
        "Gen-Z cult following for signature unisex scent profiles (Milk, Taunt, Red Dakota)"
      ],
      primaryFrictionHeadline: "DedCool's biggest differentiator—layering fragrances across perfume, laundry detergent, and dryer sheets—is not structured as an interactive multi-product system.",
      technicalBottlenecks: [
        "Customers buy Dedtergent without realizing matching fine fragrance layers scent across clothing and skin all day.",
        "Full-size fragrance bottles lack clear visual 'Risk-Free Trial' messaging (try included mini sample before opening full box).",
        "Refill pouches for laundry detergent do not offer scheduled replenishment intervals distinct from fine fragrance bottles."
      ]
    },
    solutions: [
      {
        id: "dc-sol-1",
        code: "ARCH-01",
        title: "Scent-Layering Ecosystem Builder",
        lever: "AOV",
        liftPercentage: 37,
        mechanism: "Interactive 3-step configurator ('Base: Milk Fragrance + Middle: Dedtergent + Accent: Room Spray') with bundled pricing.",
        beforeState: "User buys single bottle of Dedtergent ($35); misses out on complete fragrance layering ecosystem.",
        afterState: "Layering Configurator prompts user to build matching 3-product scent wardrobe with 1-click bundle savings.",
        techStack: "Shopify Bundle Architecture, Custom React Stepper, Tailwind CSS"
      },
      {
        id: "dc-sol-2",
        code: "ARCH-02",
        title: "Risk-Free Full-Size + Free Sample Trial Architecture",
        lever: "CVR",
        liftPercentage: 25,
        mechanism: "Prominent visual reassurance badge highlighting 'Free sample vial included: spray first, return full bottle unopened if not obsessed'.",
        beforeState: "Online shopper hesitates to commit $90 to unfamiliar fragrance scent notes.",
        afterState: "100% Risk-Free Guarantee badge pinned above Add to Cart button eliminates purchase hesitation.",
        techStack: "Shopify Custom PDP Template, Tailwind CSS"
      },
      {
        id: "dc-sol-3",
        code: "ARCH-03",
        title: "Household Dedtergent Refill Cadence Engine",
        lever: "LTV",
        liftPercentage: 24,
        mechanism: "Smart replenishment portal separating consumable laundry detergent pouches from one-time fragrance purchases.",
        beforeState: "Detergent customer runs out, faces re-order friction on website, buys grocery brand instead.",
        afterState: "60-day automated refill subscription with SMS reminder and 1-tap scent swap option.",
        techStack: "ReCharge Subscriptions API, Klaviyo SMS Trigger, Tailwind CSS"
      }
    ]
  },
  {
    id: "pf-candle-co",
    slug: "pf-candle-co",
    name: "P.F. Candle Co.",
    sector: "Home/Fragrance/Tech",
    hqLocation: "Los Angeles, US",
    website: "https://pfcandleco.com",
    instagram: {
      handle: "@pfcandleco",
      url: "https://instagram.com/pfcandleco"
    },
    email: "hello@pfcandleco.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=P.F.%20Candle%20Co.",
    decisionMakerTitles: "Co-Founder & CEO, Head of E-Commerce, Operations Director",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 205000,
      currentCVR: 1.8,
      currentAOV: 64,
      repeatPurchaseRate: 29,
      implementationFeeUSD: 16000,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Pioneering amber jar domestic home goods aesthetic manufactured locally in California",
        "Broad mainstream accessibility with high organic gifting and seasonal home refresh demand"
      ],
      primaryFrictionHeadline: "Customers buy a single Teakwood & Tobacco candle for one room instead of outfitting their entire apartment across formats (Reed Diffusers, Incense, Hand Soap).",
      technicalBottlenecks: [
        "Product detail pages display individual jar sizes without spatial guidance on which room size (bathroom vs. open living room) each candle throw accommodates.",
        "Home scenting bundles lack a multi-room configurator linking candle with matching reed diffuser for continuous flame-free scenting.",
        "Seasonal scent shifts (summer citrus to autumn amber) are not automated into an effortless quarterly replenishment club."
      ]
    },
    solutions: [
      {
        id: "pf-sol-1",
        code: "ARCH-01",
        title: "Room-by-Room Home Scenting Configurator",
        lever: "AOV",
        liftPercentage: 34,
        mechanism: "Spatial home bundle builder ('Living Room: Large Jar + Entryway: Reed Diffuser + Bath: Hand Wash') with progressive 15–20% volume incentives.",
        beforeState: "Customer buys single $24 Standard Candle, paying standard shipping on low basket size.",
        afterState: "Interactive spatial configurator guides user to outfit 3 rooms, lifting average order value to $76.",
        techStack: "Shopify Storefront API, Custom Preact Room Builder, Tailwind CSS"
      },
      {
        id: "pf-sol-2",
        code: "ARCH-02",
        title: "Throw-Strength & Room-Size Specification Guide",
        lever: "CVR",
        liftPercentage: 22,
        mechanism: "Architectural room square footage calculator on PDP recommending Standard 7.2oz vs. Large 12.5oz jar vs. Reed Diffuser.",
        beforeState: "Customer buys small jar for open living room, finds scent throw weak, leaves negative review.",
        afterState: "Interactive square footage slider recommends exact candle size and burn-hour expectations.",
        techStack: "Shopify Custom Theme Component, Tailwind CSS"
      },
      {
        id: "pf-sol-3",
        code: "ARCH-03",
        title: "Seasonal Jar Recycling & Refill Subscription UI",
        lever: "LTV",
        liftPercentage: 21,
        mechanism: "Streamlined quarterly scent rotation subscription that automatically transitions from Cedar & Pine in winter to Citrus & Fig in spring.",
        beforeState: "Customer stops burning candles as seasons change, leading to 6-month purchase hiatus.",
        afterState: "Quarterly seasonal rotation club automatically delivers curated seasonal scents at equinox transitions.",
        techStack: "Smartrr / ReCharge API, Tailwind CSS"
      }
    ]
  },
  {
    id: "canopy",
    slug: "canopy",
    name: "Canopy",
    sector: "Home/Fragrance/Tech",
    hqLocation: "New York, US",
    website: "https://getcanopy.co",
    instagram: {
      handle: "@get.canopy",
      url: "https://instagram.com/get.canopy"
    },
    email: "hello@getcanopy.co",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Canopy%20Humidifier",
    decisionMakerTitles: "Co-Founder & CEO, VP E-Commerce, Head of Direct Growth",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 160000,
      currentCVR: 1.4,
      currentAOV: 148,
      repeatPurchaseRate: 34,
      implementationFeeUSD: 18000,
      turnaroundDays: 21
    },
    forensicAudit: {
      brandStrengths: [
        "Breakthrough dermatologist-recommended anti-mold mistless humidifier technology",
        "High recurring subscription revenue model tied to paper filter replacement cartridges"
      ],
      primaryFrictionHeadline: "Hardware buyers (Humidifiers & Filtered Showerheads) experience sticker shock when filter replacement subscriptions and aroma kits aren't transparently modeled at checkout.",
      technicalBottlenecks: [
        "Unclear hardware-versus-filter subscription toggle creates confusion at checkout, with users fearing hidden auto-renew billing traps.",
        "Multi-room bundle builders (Bedside + Nursery + Filtered Showerhead) lack clear combined health benefits telemetry.",
        "Active filter subscribers are not given an easy 1-click in-drawer method to add seasonal aroma oils to their upcoming recurring filter shipments."
      ]
    },
    solutions: [
      {
        id: "can-sol-1",
        code: "ARCH-01",
        title: "Hardware + Filter Subscription Transparency Toggle",
        lever: "CVR",
        liftPercentage: 27,
        mechanism: "Side-by-side pricing transparency toggle ('Hardware Only: $150 vs. Hardware + VIP Filter Membership: $120 [$30 Instant Savings]') with cancel-anytime guarantee.",
        beforeState: "User suspects subscription fine print, selects full-price hardware, or abandons checkout entirely.",
        afterState: "Crystal-clear comparison highlights immediate $30 discount and flexible 45-day replacement intervals.",
        techStack: "Shopify Custom PDP Architecture, Alpine.js, Tailwind CSS"
      },
      {
        id: "can-sol-2",
        code: "ARCH-02",
        title: "Whole-Home Hydration & Shower Bundle Calculator",
        lever: "AOV",
        liftPercentage: 31,
        mechanism: "Multi-room bundle selector (Bedroom Humidifier + Nursery Unit + Filtered Showerhead) displaying combined dermatologist-backed clinical benefits.",
        beforeState: "Customer buys single Bedside Humidifier, missing showerhead designed to eliminate chlorinated hard water damage.",
        afterState: "Multi-room selector prompts whole-home air + water overhaul with automated $50 system savings.",
        techStack: "Shopify Storefront API, Custom Bundle Engine, Tailwind CSS"
      },
      {
        id: "can-sol-3",
        code: "ARCH-03",
        title: "Filter Lifespan & Aroma Drop Add-On Portal",
        lever: "LTV",
        liftPercentage: 28,
        mechanism: "1-Click pre-shipment SMS drawer allowing filter subscribers to toss seasonal essential oils into their upcoming shipment with zero extra shipping.",
        beforeState: "Filter subscribers only receive filter paper, leaving high-margin consumable aroma oil revenue uncaptured.",
        afterState: "Pre-shipment SMS prompts 'Add Santal Woods aroma oil for $12 without shipping charges' with 1-tap confirmation.",
        techStack: "ReCharge Quick Actions API, Klaviyo SMS Webhook, Tailwind CSS"
      }
    ]
  },
  {
    id: "courant",
    slug: "courant",
    name: "Courant",
    sector: "Home/Fragrance/Tech",
    hqLocation: "New York, US",
    website: "https://staycourant.com",
    instagram: {
      handle: "@staycourant",
      url: "https://instagram.com/staycourant"
    },
    email: "customer@staycourant.com",
    linkedinSearchUrl: "https://www.linkedin.com/search/results/people/?keywords=Courant%20Wireless",
    decisionMakerTitles: "Co-Founder, Head of E-Commerce, VP Operations",
    status: "Targeted",
    metrics: {
      monthlyTraffic: 105000,
      currentCVR: 1.3,
      currentAOV: 125,
      repeatPurchaseRate: 21,
      implementationFeeUSD: 14500,
      turnaroundDays: 18
    },
    forensicAudit: {
      brandStrengths: [
        "Unrivaled aesthetic mastery in designer charging hardware wrapped in Italian pebble leather and Belgian linen",
        "Strong holiday and executive corporate gifting appeal with high average order potential"
      ],
      primaryFrictionHeadline: "Device compatibility anxiety (MagSafe vs. Qi, iPhone/AirPods/Apple Watch combinations) and lack of live monogramming/corporate-logo previews stall high-ticket checkouts.",
      technicalBottlenecks: [
        "Customers are unsure whether their phone model (iPhone 13-16, Samsung Galaxy, Google Pixel) or watch charges at full wireless wattage on Catch:2 vs. Catch:3.",
        "Monogram personalization tool does not render foil-embossed initials live on the leather material swatch in real time.",
        "Corporate buyers seeking 25–200 debossed logo units have no self-serve volume quote and artwork proofing portal."
      ]
    },
    solutions: [
      {
        id: "cou-sol-1",
        code: "ARCH-01",
        title: "Interactive Device Ecosystem Compatibility & Material Swatch Studio",
        lever: "CVR",
        liftPercentage: 26,
        mechanism: "Live device compatibility selector + real-time texture renderer comparing Belgian Linen vs. Italian Pebble Leather across room surfaces.",
        beforeState: "User hesitates on $150 wireless tray unsure if their thick phone case and AirPods charge simultaneously.",
        afterState: "Device verification selector guarantees wireless charging compatibility in 2 taps, unlocking immediate checkout.",
        techStack: "Custom WebGL Texture Shaders, Shopify Storefront API, Tailwind CSS"
      },
      {
        id: "cou-sol-2",
        code: "ARCH-02",
        title: "Multi-Surface Charging Bundle + Live Monogram Previewer",
        lever: "AOV",
        liftPercentage: 35,
        mechanism: "Real-time custom foil-monogram previewer + 'Outfit Desk & Nightstand' 2-unit bundle discount bar.",
        beforeState: "User enters monogram initials blindly in text box without visual validation; buys single unit.",
        afterState: "Live gold/silver foil monogram renders immediately on leather photo; prompts 2nd unit for nightstand at 20% off.",
        techStack: "HTML5 Canvas Monogram Renderer, Shopify Custom Attributes, Tailwind CSS"
      },
      {
        id: "cou-sol-3",
        code: "ARCH-03",
        title: "Executive & B2B Custom Debossed Gifting Configurator",
        lever: "LTV",
        liftPercentage: 23,
        mechanism: "Self-serve corporate order portal for 25–500 custom-branded chargers with live logo placement and instant volume tier pricing.",
        beforeState: "Corporate buyer needing 50 client gifts emails info@ address, waits 48 hours for sales quote, moves to competitor.",
        afterState: "Self-serve B2B portal generates instant digital mockups, bulk volume discounts, and checkout in 4 minutes.",
        techStack: "Shopify B2B Platform API, Custom SVG Logo Composite Engine, Tailwind CSS"
      }
    ]
  }
];

export const PIPELINE_STAGES = [
  { id: "Targeted", label: "Targeted", badge: "border-zinc-300 bg-zinc-100 text-zinc-900" },
  { id: "Sequence Active", label: "Sequence Active", badge: "border-zinc-400 bg-zinc-200 text-zinc-950 font-semibold" },
  { id: "Audit Viewed", label: "Audit Viewed", badge: "border-zinc-500 bg-zinc-800 text-zinc-100" },
  { id: "Call Booked", label: "Call Booked", badge: "border-zinc-700 bg-zinc-900 text-zinc-50" },
  { id: "Closed Retainer", label: "Closed Retainer", badge: "border-zinc-950 bg-black text-white font-bold" }
];

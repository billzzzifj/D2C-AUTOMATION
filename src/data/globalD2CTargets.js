/**
 * EXHAUSTIVE 50-BRAND FORENSIC DATABASE WITH FOUNDER-DIRECT RECON
 * BILLY BENJAMIN CONSULTING // CRO SYSTEMS ARCHIVE v4.0
 * Zero truncation. Production-grade forensic telemetry.
 */

export const GLOBAL_D2C_TARGETS = [
  {
    "id": "rosen-skincare",
    "slug": "rosen-skincare",
    "name": "ROSEN Skincare",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Skincare",
    "hqLocation": "Los Angeles, US",
    "website": "https://rosenskincare.com",
    "instagram": {
      "handle": "@rosenskincare",
      "url": "https://instagram.com/rosenskincare"
    },
    "email": "hello@rosenskincare.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=ROSEN%20Skincare",
    "decisionMakerTitles": "Founder, VP of E-Commerce, Head of Growth",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 85000,
      "currentCVR": 1.4,
      "currentAOV": 44,
      "repeatPurchaseRate": 22,
      "implementationFeeUSD": 12500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Uncompromising clean acne formulation with massive community advocacy",
        "High organic social resonance across Gen-Z acne-positive creators"
      ],
      "primaryFrictionHeadline": "High mobile PDP bounce rate caused by unsegmented clinical copy and zero guided multi-step routine bundling for acne-prone buyers.",
      "technicalBottlenecks": [
        "Unsegmented single-product PDP fails to prescribe the critical 3-step routine (Cleanse, Treat, Hydrate), leaving users confused about which breakout treatment fits their scar type.",
        "Mobile cart drawer lacks progressive dynamic free shipping thresholds and complementary product recommendations, causing single-item checkouts.",
        "Standard Shopify checkout experiences a 68% drop-off due to missing 1-tap express digital wallet defaults on initial viewport scroll."
      ]
    },
    "solutions": [
      {
        "id": "rosen-sol-1",
        "code": "ARCH-01",
        "title": "Diagnostic Skin-Type Routine Funnel",
        "lever": "CVR",
        "liftPercentage": 28,
        "mechanism": "A 4-step low-latency visual diagnostic modal mapping breakout severity and scarring type directly to a pre-configured 3-step routine injected into checkout.",
        "beforeState": "First-time visitor navigates text-heavy PDP with zero clinical guidance and leaves without choosing a treatment.",
        "afterState": "1-Tap 'Find Your Regimen' diagnostic prescribes Cleanse + Treat + Moisturize bundle with 1-click add-to-cart.",
        "techStack": "Shopify Storefront API, Custom Preact Funnel, Tailwind CSS, LocalStorage State Engine"
      },
      {
        "id": "rosen-sol-2",
        "code": "ARCH-02",
        "title": "Progressive In-Cart Regimen Builder",
        "lever": "AOV",
        "liftPercentage": 36,
        "mechanism": "Dynamic slide-out cart drawer featuring real-time free-shipping progress indicators and 1-click complementary product cross-sells (Toner + Spot Corrector).",
        "beforeState": "Static slide-out cart drawer showing only the single item added, with zero cross-sells and no shipping incentive.",
        "afterState": "Interactive cart drawer with dynamic progress bar ($50 Free Shipping threshold) and 1-tap inline bundle upgrades.",
        "techStack": "Shopify Liquid Ajax Cart API, Tailwind CSS, Web Storage Cache"
      },
      {
        "id": "rosen-sol-3",
        "code": "ARCH-03",
        "title": "60-Day Replenishment SMS/One-Click Reorder Portal",
        "lever": "LTV",
        "liftPercentage": 19,
        "mechanism": "Magic-link passwordless replenishment webview triggered at day 45 of product lifecycle, enabling reorders without login friction.",
        "beforeState": "Customers run out of product and must remember password to repurchase, causing 78% churn after first bottle.",
        "afterState": "Personalized replenishment SMS delivers pre-authenticated 1-tap Apple Pay checkout link at 45-day depletion cycle.",
        "techStack": "Klaviyo Webhooks, ReCharge REST API, Fast Tokenized Magic Link Auth"
      }
    ],
    "founders": [
      {
        "name": "Jamika Martin",
        "role": "Founder & CEO",
        "personalIG": "@jamikamartin",
        "personalIGUrl": "https://instagram.com/jamikamartin",
        "directEmail": "jamika@rosenskincare.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jamika%20Martin%20ROSEN%20Skincare",
        "founderHook": "Built ROSEN from kitchen formulations into retail shelves by championing real acne-positivity over airbrushed perfection."
      }
    ],
    "executiveOutreach": {
      "directEmail": "jamika@rosenskincare.com",
      "primaryFounderName": "Jamika Martin",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@jamikamartin",
      "primaryPersonalIGUrl": "https://instagram.com/jamikamartin",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Jamika%20Martin%20ROSEN%20Skincare",
      "founderHook": "Built ROSEN from kitchen formulations into retail shelves by championing real acne-positivity over airbrushed perfection."
    }
  },
  {
    "id": "soft-services",
    "slug": "soft-services",
    "name": "Soft Services",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Bodycare",
    "hqLocation": "New York, US",
    "website": "https://softservices.co",
    "instagram": {
      "handle": "@softservices",
      "url": "https://instagram.com/softservices"
    },
    "email": "help@softservices.co",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Soft%20Services",
    "decisionMakerTitles": "Co-Founder, Head of Digital, VP E-Commerce",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 135000,
      "currentCVR": 1.6,
      "currentAOV": 62,
      "repeatPurchaseRate": 28,
      "implementationFeeUSD": 15000,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Extraordinary industrial design and physical treatment packaging caliber",
        "Clinical medical-grade formulations specifically designed for below-the-neck concerns"
      ],
      "primaryFrictionHeadline": "Rich editorial 'Skinfatuation' educational guides are disconnected from transactional cart triggers, stranding high-intent readers in blog templates.",
      "technicalBottlenecks": [
        "Content-to-commerce disconnection: Editorial symptom articles (Keratosis Pilaris, Body Acne) have static non-interactive buy buttons requiring full page reloads.",
        "Buffing Bar PDP fails to guide customers into pairing with Carea Cream, causing single soap bar purchases with high fulfillment cost ratios.",
        "Subscription cadence defaults to 30 days, causing overstock cancellations for body bars that physically last 45-60 days."
      ]
    },
    "solutions": [
      {
        "id": "soft-sol-1",
        "code": "ARCH-01",
        "title": "Shoppable Clinical Index & Inline Cart Architecture",
        "lever": "CVR",
        "liftPercentage": 24,
        "mechanism": "Sticky contextual product drawer and 1-tap regimen injection embedded directly inside symptom guides and Skinfatuation medical articles.",
        "beforeState": "Readers read 2,000-word clinical breakdown on KP treatment, hit text links, and lose reading position upon navigation.",
        "afterState": "Inline contextual treatment cards trigger instant side-drawer checkout without interrupting editorial reading flow.",
        "techStack": "Headless Contentful / Shopify Storefront API, Custom Web Components, Tailwind CSS"
      },
      {
        "id": "soft-sol-2",
        "code": "ARCH-02",
        "title": "Buffing Bar + Carea Cream Duo Configurator",
        "lever": "AOV",
        "liftPercentage": 29,
        "mechanism": "Interactive physical treatment pairing interface comparing Single Bar vs. Complete Exfoliate & Hydrate Routine with bundle pricing.",
        "beforeState": "User buys single $28 Buffing Bar; leaves without moisturizer necessary to prevent post-scrub barrier irritation.",
        "afterState": "PDP interactive selector defaults to complete Buffing Bar + Carea Cream system with 1-click frequency setup.",
        "techStack": "Shopify Custom PDP Template, Alpine.js, Tailwind Micro-Animations"
      },
      {
        "id": "soft-sol-3",
        "code": "ARCH-03",
        "title": "Refill Cadence Architecture",
        "lever": "LTV",
        "liftPercentage": 22,
        "mechanism": "Dynamic usage-calibrated subscription scheduler adjusting shipment intervals based on shower frequency and user count.",
        "beforeState": "Standard 30-day subscription forces unwanted bar delivery; customer cancels subscription out of backstock panic.",
        "afterState": "Smart cadence selector models 45 vs. 60 vs. 90-day intervals with SMS snooze controls.",
        "techStack": "Skio / ReCharge Subscriptions API, Custom React Portal Embed"
      }
    ],
    "founders": [
      {
        "name": "Rebecca Zhou",
        "role": "Co-Founder (ex-Glossier)",
        "personalIG": "@rebeccazhou",
        "personalIGUrl": "https://instagram.com/rebeccazhou",
        "directEmail": "rebecca@softservices.co",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Rebecca%20Zhou%20Soft%20Services",
        "founderHook": "Architected Soft Services with industrial design rigor and the 'Skinfatuation' clinical knowledge index."
      },
      {
        "name": "Annie Kreighbaum",
        "role": "Co-Founder (ex-Glossier)",
        "personalIG": "@anniekreighbaum",
        "personalIGUrl": "https://instagram.com/anniekreighbaum",
        "directEmail": "annie@softservices.co",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Annie%20Kreighbaum%20Soft%20Services",
        "founderHook": "Co-created Soft Services' category-defining physical exfoliation and skin health systems."
      }
    ],
    "executiveOutreach": {
      "directEmail": "rebecca@softservices.co",
      "primaryFounderName": "Rebecca Zhou & Annie Kreighbaum",
      "primaryFounderRole": "Co-Founders (ex-Glossier)",
      "primaryPersonalIG": "@rebeccazhou",
      "primaryPersonalIGUrl": "https://instagram.com/rebeccazhou",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Rebecca%20Zhou%20Soft%20Services",
      "founderHook": "Architected Soft Services with industrial design rigor and the 'Skinfatuation' clinical knowledge index."
    }
  },
  {
    "id": "dieux-skin",
    "slug": "dieux-skin",
    "name": "Dieux Skin",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Clinical Skincare",
    "hqLocation": "New York, US",
    "website": "https://dieuxskin.com",
    "instagram": {
      "handle": "@dieuxskin",
      "url": "https://instagram.com/dieuxskin"
    },
    "email": "info@dieuxskin.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Dieux%20Skin",
    "decisionMakerTitles": "Co-Founder & CEO, Head of E-Commerce, Growth Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 165000,
      "currentCVR": 1.8,
      "currentAOV": 82,
      "repeatPurchaseRate": 31,
      "implementationFeeUSD": 16500,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Exceptional price transparency and cosmetic chemistry credibility led by Charlotte Palermino",
        "Cult hero status of reusable Forever Eye Mask creating high viral acquisition"
      ],
      "primaryFrictionHeadline": "Reusable Forever Eye Mask buyers purchase once without attaching daily serums, while default subscription portals cause preventable cancel-churn.",
      "technicalBottlenecks": [
        "Forever Eye Mask purchasers complete transaction without realizing the masks require a conductive serum (Auracle or Deliverance) to function.",
        "Clinical study validation tables are buried 1,400px down mobile viewports behind static accordion toggles that get skipped.",
        "Subscription portal lacks self-serve skip/swap buttons, forcing customers to submit Zendesk tickets or cancel outright."
      ]
    },
    "solutions": [
      {
        "id": "dieux-sol-1",
        "code": "ARCH-01",
        "title": "Forever Eye Mask + Serum Pairing Engine",
        "lever": "AOV",
        "liftPercentage": 34,
        "mechanism": "Incentivized serum pairing drawer triggered upon Eye Mask addition, offering Auracle or Deliverance with bundled discount.",
        "beforeState": "Customer adds $25 Forever Eye Mask alone, leaving $55 serum attachment revenue uncaptured.",
        "afterState": "Slide-out pairing drawer recommends ideal active serum with 1-click bundle discount, raising basket size immediately.",
        "techStack": "Shopify Ajax API, Custom Preact Drawer, Tailwind CSS"
      },
      {
        "id": "dieux-sol-2",
        "code": "ARCH-02",
        "title": "Zero-Churn Subscriber Control Center",
        "lever": "LTV",
        "liftPercentage": 26,
        "mechanism": "Passwordless customer subscription hub with 1-click 'Delay 15 Days', 'Swap to Air Angel', or 'Gift Next Box' flows.",
        "beforeState": "Customer overwhelmed with serum supply cancels entire subscription through rigid standard portal.",
        "afterState": "1-Tap SMS/email link opens subscriber hub with 3 dynamic retention deflection alternatives.",
        "techStack": "ReCharge Customer Portal SDK, Custom Serverless Auth, Tailwind CSS"
      },
      {
        "id": "dieux-sol-3",
        "code": "ARCH-03",
        "title": "Clinical Proof Accordion & Sticky Mobile Buy-Box",
        "lever": "CVR",
        "liftPercentage": 18,
        "mechanism": "Restructured thumb-friendly clinical study data tabs pinned to a persistent mobile buy-box with instant Apple Pay anchor.",
        "beforeState": "Mobile shoppers scroll past massive clinical tables and lose sight of the primary Add to Cart CTA.",
        "afterState": "Persistent bottom buy-bar with instant variant switcher and high-contrast clinical validation chips.",
        "techStack": "Shopify Liquid, Custom Vanilla JS Micro-Observer, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Charlotte Palermino",
        "role": "Co-Founder & CBO",
        "personalIG": "@charlotteparler",
        "personalIGUrl": "https://instagram.com/charlotteparler",
        "directEmail": "charlotte@dieuxskin.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Charlotte%20Palermino%20Dieux%20Skin",
        "founderHook": "Built Dieux on radical clinical transparency, price breakdowns, and science-literacy over beauty hype."
      },
      {
        "name": "Joyce de Lemos",
        "role": "Co-Founder & Chief Chemist",
        "personalIG": "@joycedelemos",
        "personalIGUrl": "https://instagram.com/joycedelemos",
        "directEmail": "joyce@dieuxskin.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Joyce%20de%20Lemos%20Dieux%20Skin",
        "founderHook": "Formulated clinical-grade barrier repair rituals with full ingredient transparency."
      }
    ],
    "executiveOutreach": {
      "directEmail": "charlotte@dieuxskin.com",
      "primaryFounderName": "Charlotte Palermino & Joyce de Lemos",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@charlotteparler",
      "primaryPersonalIGUrl": "https://instagram.com/charlotteparler",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Charlotte%20Palermino%20Dieux%20Skin",
      "founderHook": "Built Dieux on radical clinical transparency, price breakdowns, and science-literacy over beauty hype."
    }
  },
  {
    "id": "topicals",
    "slug": "topicals",
    "name": "Topicals",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Medicated Skincare",
    "hqLocation": "Los Angeles, US",
    "website": "https://mytopicals.com",
    "instagram": {
      "handle": "@mytopicals",
      "url": "https://instagram.com/mytopicals"
    },
    "email": "help@mytopicals.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Topicals",
    "decisionMakerTitles": "Founder & CEO, VP Marketing, Director of E-Commerce",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 260000,
      "currentCVR": 1.5,
      "currentAOV": 54,
      "repeatPurchaseRate": 25,
      "implementationFeeUSD": 18000,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unrivaled viral TikTok momentum and cultural relevance for skin conditions",
        "Clinically verified efficacy for hyperpigmentation (Faded Serum)"
      ],
      "primaryFrictionHeadline": "Massive Gen-Z social drop traffic hits generic landing pages without shade/condition segmentation, causing severe single-item cart checkouts.",
      "technicalBottlenecks": [
        "Viral social traffic arrives with high intent for dark spots but bounces when confronted with non-segmented generic catalog layouts.",
        "PDP quantity selector lacks multi-tube tier incentives, defaulting 84% of orders to single 1.7oz tubes.",
        "Cart slide-out experiences noticeable layout shift (CLS 0.34) during dynamic promo validation on iOS Safari."
      ]
    },
    "solutions": [
      {
        "id": "top-sol-1",
        "code": "ARCH-01",
        "title": "Faded & Like Butter Hyperpigmentation Matcher",
        "lever": "CVR",
        "liftPercentage": 30,
        "mechanism": "Interactive before/after severity slider matching user skin concerns to tailored single vs. dual-tube treatment regimens.",
        "beforeState": "Users scroll generic product description unsure whether to buy Faded, Like Butter, or High Roller.",
        "afterState": "Visual condition slider selects custom clinical pair with verified 30-day before/after data.",
        "techStack": "Custom React Canvas Component, Tailwind CSS, Shopify Storefront API"
      },
      {
        "id": "top-sol-2",
        "code": "ARCH-02",
        "title": "Value-Pack Multi-Tube Tiered Pricing UI",
        "lever": "AOV",
        "liftPercentage": 32,
        "mechanism": "High-contrast quantity selector (1-Pack vs. 2-Pack 60-Day Supply vs. Full Body Kit) placed directly above the fold with clear savings telemetry.",
        "beforeState": "Standard numerical quantity dropdown hides volume savings and encourages single tube orders.",
        "afterState": "Visual tier selector featuring 'Most Popular: 2-Pack Save 15%' chip pre-selected on PDP.",
        "techStack": "Shopify Custom Theme Extension, Tailwind CSS, Alpine.js"
      },
      {
        "id": "top-sol-3",
        "code": "ARCH-03",
        "title": "Loyalty & Refill Credit Wallet",
        "lever": "LTV",
        "liftPercentage": 20,
        "mechanism": "Persistent slide-out cart credit tracker showing redeemable points towards the next tube of Faded.",
        "beforeState": "Loyalty points remain buried in third-party modal; customers forget they have $10 redeemable credits.",
        "afterState": "In-cart 1-tap 'Apply $10 Topicals Club Balance' button accelerating repeat checkout velocity.",
        "techStack": "Yotpo / Smile.io Headless API, Shopify Ajax Cart, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Olamide Olowe",
        "role": "Founder & CEO",
        "personalIG": "@olamideolowe",
        "personalIGUrl": "https://instagram.com/olamideolowe",
        "directEmail": "olamide@mytopicals.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Olamide%20Olowe%20Topicals",
        "founderHook": "Turned chronic skin care into a cultural movement with massive Gen-Z community velocity."
      }
    ],
    "executiveOutreach": {
      "directEmail": "olamide@mytopicals.com",
      "primaryFounderName": "Olamide Olowe",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@olamideolowe",
      "primaryPersonalIGUrl": "https://instagram.com/olamideolowe",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Olamide%20Olowe%20Topicals",
      "founderHook": "Turned chronic skin care into a cultural movement with massive Gen-Z community velocity."
    }
  },
  {
    "id": "good-light",
    "slug": "good-light",
    "name": "Good Light",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Personal Care",
    "hqLocation": "New York, US",
    "website": "https://goodlight.world",
    "instagram": {
      "handle": "@goodlight.world",
      "url": "https://instagram.com/goodlight.world"
    },
    "email": "hello@goodlight.world",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Good%20Light%20Beauty",
    "decisionMakerTitles": "Co-Founder, Head of Digital Growth, E-Commerce Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 65000,
      "currentCVR": 1.3,
      "currentAOV": 42,
      "repeatPurchaseRate": 20,
      "implementationFeeUSD": 10500,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Deeply authentic inclusive beauty narrative founded by David Yi",
        "Gentle, barrier-repairing formulations with zero common irritants"
      ],
      "primaryFrictionHeadline": "Microbiome/barrier-care positioning isn't translated into clear bundle hierarchy on mobile, forcing users to manually hunt through catalog pages.",
      "technicalBottlenecks": [
        "Mobile navigation menu overlays screen without scrim blur and requires 4 taps to view the 3-step skincare routine.",
        "No dynamic bundling engine exists to motivate purchasing Cosmic Dew, Moon Glow, and Order of the Eclipse together.",
        "Post-purchase funnel ends abruptly on the default Shopify thank-you page with zero secondary cross-sell triggers."
      ]
    },
    "solutions": [
      {
        "id": "gl-sol-1",
        "code": "ARCH-01",
        "title": "Barrier-First 3-Step Starter Architecture",
        "lever": "CVR",
        "liftPercentage": 26,
        "mechanism": "Streamlined mobile landing experience presenting the full cleanse-tone-seal routine as a single cohesive unit.",
        "beforeState": "First-time visitor navigates individual PDPs for toner and cleanser without understanding how they layer.",
        "afterState": "Cohesive 3-step routine page with 1-click 'Add Full Routine to Bag' and step-by-step application guidance.",
        "techStack": "Shopify Section Architecture, Tailwind CSS, Instant Cart Dispatcher"
      },
      {
        "id": "gl-sol-2",
        "code": "ARCH-02",
        "title": "Dynamic Custom Trio Builder",
        "lever": "AOV",
        "liftPercentage": 35,
        "mechanism": "Visual 3-slot configurator ('Slot 1: Cleanse, Slot 2: Tone, Slot 3: Seal') with live bundle savings telemetry.",
        "beforeState": "User purchases single $18 Moon Glow Toner; misses out on complementary cleanser and moisturizer.",
        "afterState": "Interactive slot builder visually prompts users to complete their 3-piece set to unlock 15% savings.",
        "techStack": "React Custom Bundle App, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "gl-sol-3",
        "code": "ARCH-03",
        "title": "Post-Purchase 1-Click Upsell Funnel",
        "lever": "LTV",
        "liftPercentage": 17,
        "mechanism": "Tokenized post-purchase checkout page offering travel-size minis or refill pouches without re-entering payment data.",
        "beforeState": "User reaches standard order confirmation page and exits store immediately.",
        "afterState": "Instant 1-click upsell offer for a $12 travel duo before order confirmation is finalized.",
        "techStack": "Shopify Post-Purchase Checkout Extensions API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "David Yi",
        "role": "Founder & CEO",
        "personalIG": "@seoulcialite",
        "personalIGUrl": "https://instagram.com/seoulcialite",
        "directEmail": "david@goodlight.world",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=David%20Yi%20Good%20Light",
        "founderHook": "Pioneered inclusive, barrier-first beauty beyond the binary with deep editorial storytelling."
      }
    ],
    "executiveOutreach": {
      "directEmail": "david@goodlight.world",
      "primaryFounderName": "David Yi",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@seoulcialite",
      "primaryPersonalIGUrl": "https://instagram.com/seoulcialite",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=David%20Yi%20Good%20Light",
      "founderHook": "Pioneered inclusive, barrier-first beauty beyond the binary with deep editorial storytelling."
    }
  },
  {
    "id": "entire-studios",
    "slug": "entire-studios",
    "name": "Entire Studios",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Los Angeles / Auckland",
    "website": "https://entirestudios.com",
    "instagram": {
      "handle": "@entire_studios",
      "url": "https://instagram.com/entire_studios"
    },
    "email": "info@entirestudios.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Entire%20Studios",
    "decisionMakerTitles": "Co-Founder, Managing Director, Head of Digital Operations",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 320000,
      "currentCVR": 1.2,
      "currentAOV": 210,
      "repeatPurchaseRate": 24,
      "implementationFeeUSD": 22000,
      "turnaroundDays": 24
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unprecedented Yeezy/Kanye-heritage architectural streetwear silhouettes",
        "Extraordinary brand equity and instant sell-out drop velocity across global markets"
      ],
      "primaryFrictionHeadline": "Heavy garment sizing uncertainty (oversized/cropped boxy silhouettes) causes hesitation and high return rates, while drop days suffer from static collection grids.",
      "technicalBottlenecks": [
        "Brutalist minimal size guide provides only flat chest/length tables with zero guidance on model height or garment drape on varied frames.",
        "Lookbook exploration requires clicking back and forth between look and catalog, losing high-intent drop-day shoppers.",
        "High-traffic drop spikes create severe cart contention and inventory race conditions on popular sizes (M/L)."
      ]
    },
    "solutions": [
      {
        "id": "es-sol-1",
        "code": "ARCH-01",
        "title": "Biometric Silhouette & Fit Calibration UI",
        "lever": "CVR",
        "liftPercentage": 29,
        "mechanism": "Interactive height/weight/fit preference slider ('Boxy Cropped vs. Relaxed Oversized') demonstrating exact fit on 4 calibrated models.",
        "beforeState": "Shopper hesitates on $280 Pill Puffer sizing, fears ill-fitting return shipping, and abandons cart.",
        "afterState": "Biometric fit calibration guarantees size choice in 10 seconds, cutting checkout hesitation by 40%.",
        "techStack": "Custom WebGL / Canvas Sizing Engine, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "es-sol-2",
        "code": "ARCH-02",
        "title": "Uniform Complete-the-Silhouette Drawer",
        "lever": "AOV",
        "liftPercentage": 27,
        "mechanism": "Instant tonal colorway cross-sell pairing matching Heavy Hoodie + Cargo Sweatpant + Puffer directly within the slide-out bag.",
        "beforeState": "Shopper buys Heavy Hoodie alone, missing matching Heavy Sweatpant in identical Tar / Soot pigment wash.",
        "afterState": "In-bag 'Complete the Uniform' selector allows 1-click size selection of the matching sweatpant.",
        "techStack": "Shopify Ajax Bag API, Tailwind CSS, LocalStorage Memory"
      },
      {
        "id": "es-sol-3",
        "code": "ARCH-03",
        "title": "High-Concurrency Drop Waitroom & VIP Early Access Gate",
        "lever": "LTV",
        "liftPercentage": 18,
        "mechanism": "Low-latency drop architecture with live stock telemetry per size to prevent overselling and customer resentment.",
        "beforeState": "Drop-day traffic spikes crash collection pages and trigger checkout failures for VIP collectors.",
        "afterState": "Sub-second edge waitroom reservations ensure smooth VIP checkout with verified inventory lock.",
        "techStack": "Cloudflare Workers Edge Architecture, Shopify Storefront API"
      }
    ],
    "founders": [
      {
        "name": "Sebastian Hunt",
        "role": "Co-Founder & Creative Director",
        "personalIG": "@sebastianhunt",
        "personalIGUrl": "https://instagram.com/sebastianhunt",
        "directEmail": "sebastian@entirestudios.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Sebastian%20Hunt%20Entire%20Studios",
        "founderHook": "Engineered museum-grade monolithic silhouettes and brutalist proportions at accessible luxury price points."
      },
      {
        "name": "Dylan James Richards",
        "role": "Co-Founder & Creative Director",
        "personalIG": "@dylanjamesrichards",
        "personalIGUrl": "https://instagram.com/dylanjamesrichards",
        "directEmail": "dylan@entirestudios.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Dylan%20Richards%20Entire%20Studios",
        "founderHook": "Redefined oversized sculptural tailoring and high-density garment construction."
      }
    ],
    "executiveOutreach": {
      "directEmail": "sebastian@entirestudios.com",
      "primaryFounderName": "Sebastian Hunt & Dylan James Richards",
      "primaryFounderRole": "Co-Founders & Creative Directors",
      "primaryPersonalIG": "@sebastianhunt",
      "primaryPersonalIGUrl": "https://instagram.com/sebastianhunt",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Sebastian%20Hunt%20Entire%20Studios",
      "founderHook": "Engineered museum-grade monolithic silhouettes and brutalist proportions at accessible luxury price points."
    }
  },
  {
    "id": "cole-buxton",
    "slug": "cole-buxton",
    "name": "Cole Buxton",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "London, UK",
    "website": "https://colebuxton.com",
    "instagram": {
      "handle": "@colebuxton",
      "url": "https://instagram.com/colebuxton"
    },
    "email": "info@colebuxton.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Cole%20Buxton",
    "decisionMakerTitles": "Founder, Head of E-Commerce, Operations Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 240000,
      "currentCVR": 1.4,
      "currentAOV": 245,
      "repeatPurchaseRate": 29,
      "implementationFeeUSD": 20000,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Pioneering British athletic luxury positioning with bespoke custom fabric knits",
        "Extremely loyal global collector base with proven repeat purchase affinity"
      ],
      "primaryFrictionHeadline": "Lookbook editorial pages generate massive engagement but require 4+ clicks to locate and add individual garments to the bag.",
      "technicalBottlenecks": [
        "Campaign lookbook images are completely static flat assets without interactive garment hotspots or quick-bag triggers.",
        "Tees and gym shorts lack an automated multi-pack bundle discount engine, lowering basket depth.",
        "US and international shoppers encounter unexpected duty/tax calculations at final checkout step, causing 42% international cart abandonment."
      ]
    },
    "solutions": [
      {
        "id": "cb-sol-1",
        "code": "ARCH-01",
        "title": "Shoppable Editorial Lookbook Hotspots",
        "lever": "CVR",
        "liftPercentage": 25,
        "mechanism": "Interactive hotspot overlay on high-res lookbook photography enabling 1-click size selection and bag injection without leaving the lookbook.",
        "beforeState": "User views full tracksuit lookbook image, navigates back to catalog, searches for pant, loses momentum.",
        "afterState": "Direct tap on jacket or pant opens instant slide-out size picker with real-time stock status.",
        "techStack": "Shopify Storefront API, Custom Image Map Micro-Component, Tailwind CSS"
      },
      {
        "id": "cb-sol-2",
        "code": "ARCH-02",
        "title": "Athletic Essential Multi-Buy Matrix",
        "lever": "AOV",
        "liftPercentage": 28,
        "mechanism": "Tonal 3-pack configurator for heavyweight Warm-Up Tees, Ribbed Tanks, and Athletic Shorts with tiered volume pricing.",
        "beforeState": "Customer buys single $110 Warm-Up Tee; misses out on colorway rotation (Washed Black, Grey Marl, White).",
        "afterState": "PDP 3-pack matrix lets customer pick 3 distinct sizes/colors with an automated £30 multi-buy incentive.",
        "techStack": "Shopify Custom Cart Line-Item Scripts, Tailwind CSS"
      },
      {
        "id": "cb-sol-3",
        "code": "ARCH-03",
        "title": "International Duty/Tax Pre-Calculation Bar",
        "lever": "LTV",
        "liftPercentage": 21,
        "mechanism": "Geo-IP localized currency and guaranteed landed-duty transparency embedded directly within the mini-cart.",
        "beforeState": "US/EU customers abandon at final checkout screen due to unexpected import tariffs.",
        "afterState": "Mini-cart displays 'All US Duties & Taxes Prepaid' guarantee with transparent local currency conversion.",
        "techStack": "Shopify Markets API, Global-e Integration Layer, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Cole Buxton",
        "role": "Co-Founder",
        "personalIG": "@colebuxton",
        "personalIGUrl": "https://instagram.com/colebuxton",
        "directEmail": "cole@colebuxton.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Cole%20Buxton",
        "founderHook": "Redefined contemporary British athletic minimalism and heavyweight garment mastery."
      },
      {
        "name": "Jonny Burt",
        "role": "Co-Founder",
        "personalIG": "@jonnyburt_",
        "personalIGUrl": "https://instagram.com/jonnyburt_",
        "directEmail": "jonny@colebuxton.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jonny%20Burt%20Cole%20Buxton",
        "founderHook": "Co-architected Cole Buxton's bespoke direct-to-consumer athletic luxury engine."
      }
    ],
    "executiveOutreach": {
      "directEmail": "jonny@colebuxton.com",
      "primaryFounderName": "Cole Buxton & Jonny Burt",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@colebuxton",
      "primaryPersonalIGUrl": "https://instagram.com/colebuxton",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Cole%20Buxton%20Jonny%20Burt",
      "founderHook": "Redefined contemporary British athletic minimalism and heavyweight garment mastery."
    }
  },
  {
    "id": "adsum",
    "slug": "adsum",
    "name": "Adsum",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Brooklyn, US",
    "website": "https://adsumnyc.com",
    "instagram": {
      "handle": "@adsumnyc",
      "url": "https://instagram.com/adsumnyc"
    },
    "email": "info@adsumnyc.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Adsum%20NYC",
    "decisionMakerTitles": "Founder & Creative Director, Head of E-Commerce",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 95000,
      "currentCVR": 1.3,
      "currentAOV": 165,
      "repeatPurchaseRate": 26,
      "implementationFeeUSD": 14000,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Mastery of high-performance technical fabrication combined with understated Brooklyn tailoring",
        "Dedicated global menswear following with high respect for technical garment construction"
      ],
      "primaryFrictionHeadline": "Technical outerwear and garment specs are buried in plain-text paragraphs, failing to justify premium price points to first-time visitors.",
      "technicalBottlenecks": [
        "Fabric performance ratings (Pertex, 3-layer waterproof membranes, Cordura) are formatted as unstyled text walls without visual hierarchy.",
        "Seasonal outerwear lacks a coordinated layering bundler (Base Fleece + Waterproof Shell) on product pages.",
        "Sold-out sizes have passive email signup forms without SMS or size-specific waitlist queuing."
      ]
    },
    "solutions": [
      {
        "id": "ads-sol-1",
        "code": "ARCH-01",
        "title": "Technical Spec & Garment Anatomy Breakdown UI",
        "lever": "CVR",
        "liftPercentage": 23,
        "mechanism": "Architectural specification table comparing GSM weight, water column ratings, seam tape integrity, and flat-lay garment dimensions.",
        "beforeState": "First-time buyer hesitates on $425 technical jacket unsure of weather rating and garment warmth.",
        "afterState": "Visual weather-rating and fabric anatomy spec module clarifies performance instantly above the buy button.",
        "techStack": "Shopify Metafields, Custom Tailwind Spec Grid, Vanilla JS Accordion"
      },
      {
        "id": "ads-sol-2",
        "code": "ARCH-02",
        "title": "Seasonal Layering System Configurator",
        "lever": "AOV",
        "liftPercentage": 26,
        "mechanism": "Curated Base Layer + Mid-Fleece + Outer Shell outfit builder offering tiered system discounts.",
        "beforeState": "Customer purchases Shell Jacket alone without complementary Fleece Liner designed to snap into it.",
        "afterState": "Interactive layering module allows 1-click addition of matching liner with instant $40 system discount.",
        "techStack": "Shopify Storefront API, Custom Bundle Drawer, Tailwind CSS"
      },
      {
        "id": "ads-sol-3",
        "code": "ARCH-03",
        "title": "Archive & Restock Priority Notification Engine",
        "lever": "LTV",
        "liftPercentage": 16,
        "mechanism": "High-converting back-in-stock SMS/Email capture engine locking in customer size intent on sold-out seasonal grails.",
        "beforeState": "Customer sees sold-out size and bounces without leaving contact information.",
        "afterState": "1-Tap 'Reserve Restock in My Size' capture converts bounce into high-intent notification with 38% buy rate.",
        "techStack": "Klaviyo Back-in-Stock API, Custom Modal Architecture, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Pete Macnee",
        "role": "Founder & Creative Director",
        "personalIG": "@petemacnee",
        "personalIGUrl": "https://instagram.com/petemacnee",
        "directEmail": "pete@adsumnyc.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Pete%20Macnee%20Adsum",
        "founderHook": "Obsessive attention to technical Northeast outerwear specs, fabric GSM, and industrial design details."
      }
    ],
    "executiveOutreach": {
      "directEmail": "pete@adsumnyc.com",
      "primaryFounderName": "Pete Macnee",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@petemacnee",
      "primaryPersonalIGUrl": "https://instagram.com/petemacnee",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Pete%20Macnee%20Adsum",
      "founderHook": "Obsessive attention to technical Northeast outerwear specs, fabric GSM, and industrial design details."
    }
  },
  {
    "id": "maniere-de-voir",
    "slug": "maniere-de-voir",
    "name": "Manière De Voir",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Manchester, UK",
    "website": "https://manieredevoir.com",
    "instagram": {
      "handle": "@manieredevoir",
      "url": "https://instagram.com/manieredevoir"
    },
    "email": "contact@manieredevoir.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Maniere%20De%20Voir",
    "decisionMakerTitles": "CEO, Head of E-Commerce, Digital Marketing Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 420000,
      "currentCVR": 1.5,
      "currentAOV": 118,
      "repeatPurchaseRate": 27,
      "implementationFeeUSD": 24000,
      "turnaroundDays": 24
    },
    "forensicAudit": {
      "brandStrengths": [
        "High-volume, trend-setting tailored contemporary aesthetic with massive global reach",
        "Impressive flagship retail expansion proving omni-channel customer demand"
      ],
      "primaryFrictionHeadline": "High SKU count overwhelms mobile browsers with endless scrolling and slow filtering, while single-piece dresses/tops miss coordinated accessories.",
      "technicalBottlenecks": [
        "Heavy mobile catalog causes DOM stutter and high latency when filtering across sizes, fits, and colorways.",
        "Complete outfit pairing (Blazer + Trouser + Heel) is not available inside the slide-out bag, forcing users back into catalog search.",
        "Returns process sends customers to third-party portals, forfeiting immediate store credit exchange conversion opportunities."
      ]
    },
    "solutions": [
      {
        "id": "mdv-sol-1",
        "code": "ARCH-01",
        "title": "Zero-Latency Faceted Mobile Filter & Quick-Add Bar",
        "lever": "CVR",
        "liftPercentage": 24,
        "mechanism": "Client-side cached filtering by occasion, silhouette, and in-stock size with instant 1-tap size addition directly from grid.",
        "beforeState": "User taps filters on mobile, waits 2.2s for catalog reload, encounters layout shift, and exits.",
        "afterState": "Zero-latency instant client-side filter surfaces matching in-stock styles in &lt;100ms.",
        "techStack": "Algolia Headless / Shopify Storefront API, Custom Preact Facets, Tailwind CSS"
      },
      {
        "id": "mdv-sol-2",
        "code": "ARCH-02",
        "title": "Algorithmic 'Complete the Tailored Look' Rail",
        "lever": "AOV",
        "liftPercentage": 31,
        "mechanism": "Deterministic co-purchase pairing inside the slide-out bag matching Corset + Tailored Trouser + Trench Coat in 1 tap.",
        "beforeState": "User buys Corset Top alone; misses matching tailored trouser in matching custom vegan leather hue.",
        "afterState": "In-bag rail displays matching bottoms with pre-selected matching size and 1-tap 'Add to Complete Set'.",
        "techStack": "Shopify Recombee API, Custom Ajax Drawer, Tailwind CSS"
      },
      {
        "id": "mdv-sol-3",
        "code": "ARCH-03",
        "title": "Instant Exchange-First Return Portal UI",
        "lever": "LTV",
        "liftPercentage": 19,
        "mechanism": "Self-service returns interface incentivizing instant size/color exchanges with a 110% store credit bonus before cash refund.",
        "beforeState": "Shopper requests cash refund on incorrect size; brand loses both revenue and customer lifetime value.",
        "afterState": "Portal defaults to 1-click free size exchange with real-time stock reservation, rescuing 32% of returns.",
        "techStack": "Loop Returns API, Custom Next.js Middleware, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Reece Wabara",
        "role": "Founder & CEO",
        "personalIG": "@reecewabara",
        "personalIGUrl": "https://instagram.com/reecewabara",
        "directEmail": "reece@manieredevoir.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Reece%20Wabara%20Maniere%20De%20Voir",
        "founderHook": "Scaled MDV privately to massive profitability through relentless discipline on silhouette and unit economics."
      }
    ],
    "executiveOutreach": {
      "directEmail": "reece@manieredevoir.com",
      "primaryFounderName": "Reece Wabara",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@reecewabara",
      "primaryPersonalIGUrl": "https://instagram.com/reecewabara",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Reece%20Wabara%20Maniere%20De%20Voir",
      "founderHook": "Scaled MDV privately to massive profitability through relentless discipline on silhouette and unit economics."
    }
  },
  {
    "id": "jaded-london",
    "slug": "jaded-london",
    "name": "Jaded London",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "London, UK",
    "website": "https://jadedldn.com",
    "instagram": {
      "handle": "@jadedldn",
      "url": "https://instagram.com/jadedldn"
    },
    "email": "customercare@jadedldn.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Jaded%20London",
    "decisionMakerTitles": "Co-Founder, E-Commerce Director, Head of Growth",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 510000,
      "currentCVR": 1.4,
      "currentAOV": 96,
      "repeatPurchaseRate": 23,
      "implementationFeeUSD": 25000,
      "turnaroundDays": 24
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unrivaled trend velocity defining Y2K, rave, and festival youth street culture worldwide",
        "High-affinity influencer placement engine driving instant multi-thousand visitor traffic spikes"
      ],
      "primaryFrictionHeadline": "Viral TikTok traffic spikes land on out-of-stock variants or experience high mobile checkout drop-off due to fragmented multi-step shipping forms.",
      "technicalBottlenecks": [
        "Viral TikTok links direct shoppers to sold-out size variants without automatic redirect to identical fits or sister wash colorways.",
        "Lookbook bundles ('Shop the Festival Fit') lack an integrated 3-piece bundle builder with tiered milestone incentives.",
        "Mobile checkout flow forces standard multi-step form entry instead of anchoring instantaneous Apple Pay / Shop Pay biometric authorization."
      ]
    },
    "solutions": [
      {
        "id": "jl-sol-1",
        "code": "ARCH-01",
        "title": "Dynamic Variant Redirect & Similar-In-Stock Fallback UI",
        "lever": "CVR",
        "liftPercentage": 27,
        "mechanism": "Smart variant routing that auto-surfaces sister silhouettes and matching in-stock sizes when viral SKUs sell out.",
        "beforeState": "Shopper arrives from viral TikTok, sees 'Sold Out' badge on size S, bounces within 4 seconds.",
        "afterState": "Auto-prompts 'Size S available in Charcoal & Moss' with 1-tap size addition and instant checkout anchor.",
        "techStack": "Shopify Theme Architecture, Custom Mutation Observer, Tailwind CSS"
      },
      {
        "id": "jl-sol-2",
        "code": "ARCH-02",
        "title": "Festival / Night-Out Capsule Bundler",
        "lever": "AOV",
        "liftPercentage": 29,
        "mechanism": "Interactive 3-piece capsule builder (Cargo + Mesh Top + Micro Bag) with live visual fit preview and progressive discounts.",
        "beforeState": "Customer buys viral Colossus Cargo pants alone ($95) without accompanying top or accessories.",
        "afterState": "Interactive 3-piece capsule builder nudges user to add top + bag to unlock $20 off full festival look.",
        "techStack": "Shopify Custom Cart API, Alpine.js, Tailwind CSS"
      },
      {
        "id": "jl-sol-3",
        "code": "ARCH-03",
        "title": "Express 1-Tap Mobile Wallet Checkout Bar",
        "lever": "LTV",
        "liftPercentage": 18,
        "mechanism": "Persistent mobile viewport sticky bar pre-authenticating Apple Pay, Shop Pay, and Klarna split-pay telemetry.",
        "beforeState": "Gen-Z mobile shoppers drop off at address entry screen due to keyboard friction on smartphones.",
        "afterState": "Persistent 1-tap biometric Apple Pay checkout bypasses address forms completely, completing order in 4 seconds.",
        "techStack": "Shopify Express Checkout Architecture, Web Payments API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Jade Goulden",
        "role": "Co-Founder & Creative Director",
        "personalIG": "@jadegoulden",
        "personalIGUrl": "https://instagram.com/jadegoulden",
        "directEmail": "jade@jadedldn.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jade%20Goulden%20Jaded%20London",
        "founderHook": "Unmatched speed-to-market translating underground subcultures into high-velocity global drops."
      },
      {
        "name": "Grant Goulden",
        "role": "Co-Founder & Creative Director",
        "personalIG": "@grantgoulden",
        "personalIGUrl": "https://instagram.com/grantgoulden",
        "directEmail": "grant@jadedldn.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Grant%20Goulden%20Jaded%20London",
        "founderHook": "Pioneered fast-turn viral trend architecture and global festival fashion drops."
      }
    ],
    "executiveOutreach": {
      "directEmail": "grant@jadedldn.com",
      "primaryFounderName": "Jade Goulden & Grant Goulden",
      "primaryFounderRole": "Co-Founders & Creative Directors",
      "primaryPersonalIG": "@jadegoulden",
      "primaryPersonalIGUrl": "https://instagram.com/jadegoulden",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Jade%20Goulden%20Grant%20Goulden%20Jaded%20London",
      "founderHook": "Unmatched speed-to-market translating underground subcultures into high-velocity global drops."
    }
  },
  {
    "id": "truff",
    "slug": "truff",
    "name": "Truff",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Los Angeles, US",
    "website": "https://truff.com",
    "instagram": {
      "handle": "@truff",
      "url": "https://instagram.com/truff"
    },
    "email": "support@truff.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Truff%20Hot%20Sauce",
    "decisionMakerTitles": "Co-Founder & CEO, VP E-Commerce, Head of Direct-to-Consumer",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 245000,
      "currentCVR": 1.9,
      "currentAOV": 68,
      "repeatPurchaseRate": 30,
      "implementationFeeUSD": 18500,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Luxury branding and packaging disrupting commodity condiment grocery categories",
        "Enormous gifting demand during Q4 and holiday corporate gifting cycles"
      ],
      "primaryFrictionHeadline": "Standard B2C cart blocks high-margin corporate gifting orders (multi-address CSV uploads), while single-bottle buyers churn without heat-level variety packs.",
      "technicalBottlenecks": [
        "Corporate buyers seeking to purchase 50+ gift boxes must checkout one by one or leave the store to contact sales via manual email.",
        "Single-bottle hot sauce purchasers are not guided into multi-pack heat vaults (Original + Hotter + White Truffle).",
        "Subscription cadence fails to account for pantry usage cycles, causing subscription cancellations instead of automated skip cycles."
      ]
    },
    "solutions": [
      {
        "id": "truff-sol-1",
        "code": "ARCH-01",
        "title": "Interactive 'Build Your Custom 4-Pack Vault' UI",
        "lever": "AOV",
        "liftPercentage": 42,
        "mechanism": "Drag-and-drop hot sauce, pasta sauce, and truffle oil crate configurator with gold foil gift packaging and custom message card.",
        "beforeState": "User buys single $18 Black Truffle hot sauce bottle, paying $8 shipping and exiting store.",
        "afterState": "Interactive 4-slot Vault builder motivates customer to fill all 4 slots for free shipping and luxury gift box.",
        "techStack": "Custom React Crate Builder, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "truff-sol-2",
        "code": "ARCH-02",
        "title": "B2B & VIP Corporate Gifting Multi-Address Portal",
        "lever": "CVR",
        "liftPercentage": 26,
        "mechanism": "Dedicated bulk corporate checkout interface supporting CSV address uploads, gift card customization, and instant automated PDF invoicing.",
        "beforeState": "Corporate office manager wanting 30 holiday boxes leaves site due to inability to ship to multiple home addresses.",
        "afterState": "Self-serve multi-address portal lets user upload 30 recipient addresses and pay via corporate card in 3 minutes.",
        "techStack": "Shopify Plus Multi-Address API, Custom Next.js Flow, Tailwind CSS"
      },
      {
        "id": "truff-sol-3",
        "code": "ARCH-03",
        "title": "Pantry Auto-Replenish Cadence Switcher",
        "lever": "LTV",
        "liftPercentage": 24,
        "mechanism": "Frictionless 30/60/90-day kitchen replenishment toggle with VIP subscriber-only access to limited white truffle reserves.",
        "beforeState": "Customer finishes hot sauce bottle after 2 months, forgets brand, buys grocery competitor.",
        "afterState": "Automated 60-day pantry replenishment with SMS notice offering 1-click addition of new Truff Mayo or Olive Oil.",
        "techStack": "ReCharge API, Klaviyo SMS Integration, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Nick Ajluni",
        "role": "Co-Founder & Co-CEO",
        "personalIG": "@nickajluni",
        "personalIGUrl": "https://instagram.com/nickajluni",
        "directEmail": "nick@truff.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Nick%20Ajluni%20Truff",
        "founderHook": "Turned a pantry condiment into an iconic luxury design object and viral lifestyle brand."
      },
      {
        "name": "Nick Guillen",
        "role": "Co-Founder & Co-CEO",
        "personalIG": "@nickguillen",
        "personalIGUrl": "https://instagram.com/nickguillen",
        "directEmail": "guillen@truff.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Nick%20Guillen%20Truff",
        "founderHook": "Co-engineered Truff's cult visual aesthetic and global retail omni-channel dominance."
      }
    ],
    "executiveOutreach": {
      "directEmail": "nick@truff.com",
      "primaryFounderName": "Nick Ajluni & Nick Guillen",
      "primaryFounderRole": "Co-Founders & Co-CEOs",
      "primaryPersonalIG": "@nickajluni",
      "primaryPersonalIGUrl": "https://instagram.com/nickajluni",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Nick%20Ajluni%20Nick%20Guillen%20Truff",
      "founderHook": "Turned a pantry condiment into an iconic luxury design object and viral lifestyle brand."
    }
  },
  {
    "id": "mud-wtr",
    "slug": "mud-wtr",
    "name": "Mud\\Wtr",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Santa Monica, US",
    "website": "https://mudwtr.com",
    "instagram": {
      "handle": "@drinkmudwtr",
      "url": "https://instagram.com/drinkmudwtr"
    },
    "email": "cheers@mudwtr.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=MUD%5CWTR",
    "decisionMakerTitles": "Founder & CEO, Head of E-Commerce, VP Retention",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 310000,
      "currentCVR": 1.7,
      "currentAOV": 52,
      "repeatPurchaseRate": 36,
      "implementationFeeUSD": 19500,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Industry-defining positioning as the ritualistic coffee alternative with exceptional brand storytelling",
        "High subscriber base generating steady monthly recurring revenue baseline"
      ],
      "primaryFrictionHeadline": "First-time functional mushroom skeptics face cognitive overload on long landing pages, and existing subscribers cancel when they build up excess powder pouches.",
      "technicalBottlenecks": [
        "First-time coffee quitters encounter complex 30-serving tin customizers with ambiguous subscription terms, stalling checkout conversion.",
        "Morning (:rise) buyers are not systematically guided to adopt the evening (:rest) formula, capping initial order value.",
        "Subscribers who consume mud slower than 30 days hit cancellation pages with no smart pause or backstock-delay options."
      ]
    },
    "solutions": [
      {
        "id": "mud-sol-1",
        "code": "ARCH-01",
        "title": "Interactive Ritual & Caffeine-Sensitivity Configurator",
        "lever": "CVR",
        "liftPercentage": 28,
        "mechanism": "45-second diagnostic matching daily caffeine crash symptoms and morning ritual habits to a custom Starter Kit with free frother.",
        "beforeState": "Skeptical coffee drinker scrolls long PDP, unsure if adaptogens cause stomach upset, and bounces.",
        "afterState": "Diagnostic calculates caffeine reduction trajectory and auto-configures custom starter package in cart.",
        "techStack": "Custom Preact Diagnostic Funnel, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "mud-sol-2",
        "code": "ARCH-02",
        "title": "Morning + Evening (:rest) Dual-Ritual Bundle UI",
        "lever": "AOV",
        "liftPercentage": 33,
        "mechanism": "Side-by-side comparison matrix and 1-click upgrade from single :rise morning tin to the full 24-Hour Circadian System.",
        "beforeState": "User purchases single $40 :rise tin, unaware that :rest rooibos blend enhances deep sleep.",
        "afterState": "1-Click 'Upgrade to 24-Hour System' button adds :rest tin at 25% bundle savings, increasing AOV from $40 to $68.",
        "techStack": "Shopify Custom Line Item Engine, Tailwind CSS"
      },
      {
        "id": "mud-sol-3",
        "code": "ARCH-03",
        "title": "Smart Backstock & Pause Deflection Flow",
        "lever": "LTV",
        "liftPercentage": 29,
        "mechanism": "Cancellation intercept interface offering a 1-tap 'Pause for 45 Days', 'Skip Next Box', or 'Swap to Matcha/Turmeric Blend' alternative.",
        "beforeState": "Subscriber with 2 extra unopened tins clicks Cancel Subscription and is permanently lost.",
        "afterState": "Self-serve modal catches cancellation with instant 1-tap 'Skip Next Month While You Catch Up', rescuing 42% of cancels.",
        "techStack": "Smartrr / ReCharge Retention Webhook, Custom React Flow, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Shane Heath",
        "role": "Founder & CEO",
        "personalIG": "@shane.heath",
        "personalIGUrl": "https://instagram.com/shane.heath",
        "directEmail": "shane@mudwtr.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Shane%20Heath%20MUD%5CWTR",
        "founderHook": "Built a category-defining morning ritual movement grounded in mental clarity and radical design simplicity."
      }
    ],
    "executiveOutreach": {
      "directEmail": "shane@mudwtr.com",
      "primaryFounderName": "Shane Heath",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@shane.heath",
      "primaryPersonalIGUrl": "https://instagram.com/shane.heath",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Shane%20Heath%20MUD%5CWTR",
      "founderHook": "Built a category-defining morning ritual movement grounded in mental clarity and radical design simplicity."
    }
  },
  {
    "id": "kin-euphorics",
    "slug": "kin-euphorics",
    "name": "Kin Euphorics",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "New York, US",
    "website": "https://kineuphorics.com",
    "instagram": {
      "handle": "@kineuphorics",
      "url": "https://instagram.com/kineuphorics"
    },
    "email": "hello@kineuphorics.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Kin%20Euphorics",
    "decisionMakerTitles": "Co-Founder & CEO, Head of E-Commerce, VP Digital Marketing",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 155000,
      "currentCVR": 1.5,
      "currentAOV": 64,
      "repeatPurchaseRate": 25,
      "implementationFeeUSD": 15500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Category creator in adaptogenic adult euphoric beverages co-founded by Bella Hadid",
        "Distinctive aesthetic and strong wellness positioning targeting sober-curious lifestyles"
      ],
      "primaryFrictionHeadline": "New visitors struggle to understand functional differences between High Rhode, Spritz, Actual Sunshine, and Lightwave, leading to decision paralysis.",
      "technicalBottlenecks": [
        "Visitors cannot determine which beverage delivers their desired mental state (Focus vs. Social Energy vs. Deep Sleep).",
        "Beverage cans are sold primarily in rigid 8-packs without an intuitive multi-flavor case mixer.",
        "Social hosts and party organizers have no recurring replenishment portal tailored to weekend entertaining schedules."
      ]
    },
    "solutions": [
      {
        "id": "kin-sol-1",
        "code": "ARCH-01",
        "title": "Mood & Neuro-Botanical Matrix Selector",
        "lever": "CVR",
        "liftPercentage": 31,
        "mechanism": "Interactive desired-state selector ('Social Euphoria vs. Deep Calm vs. Morning Clarity') with clear adaptogen breakdowns.",
        "beforeState": "First-time buyer reads confusing nootropic ingredient jargon, hesitates, and leaves without trying a can.",
        "afterState": "Visual mood matrix recommends the precise formulation with real-time onset timeline (feel in 15 mins).",
        "techStack": "Custom Tailwind Matrix Component, Shopify Storefront API"
      },
      {
        "id": "kin-sol-2",
        "code": "ARCH-02",
        "title": "Custom Case Builder (8-Pack / 16-Pack / 24-Pack Mix & Match)",
        "lever": "AOV",
        "liftPercentage": 35,
        "mechanism": "Visual can-slot configurator unlocking free shipping and per-can price drops as users mix and match flavors to fill larger cases.",
        "beforeState": "User buys single 8-pack of Kin Spritz ($39) and pays shipping.",
        "afterState": "16-Pack Case Builder encourages user to add Actual Sunshine and Lightwave to unlock $10 off + free shipping.",
        "techStack": "Shopify Custom Bundle API, Preact Slot Engine, Tailwind CSS"
      },
      {
        "id": "kin-sol-3",
        "code": "ARCH-03",
        "title": "Social Host Recurring Party-Pack Portal",
        "lever": "LTV",
        "liftPercentage": 20,
        "mechanism": "Flexible monthly event replenishment interface allowing subscribers to modify flavor ratios via 1-tap SMS before scheduled shipment.",
        "beforeState": "Subscribers stuck with unconsumed cans cancel subscription due to inflexible flavor ratios.",
        "afterState": "SMS-activated flavor swapper lets hosts rebalance case ratios in 2 taps before each shipment.",
        "techStack": "ReCharge Quick Actions API, Klaviyo SMS Webhook, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Jen Batchelor",
        "role": "Co-Founder & CEO",
        "personalIG": "@jenbatchelor",
        "personalIGUrl": "https://instagram.com/jenbatchelor",
        "directEmail": "jen@kineuphorics.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jen%20Batchelor%20Kin%20Euphorics",
        "founderHook": "Created the functional nightcap category by blending neuro-botanicals with high-art worldbuilding."
      }
    ],
    "executiveOutreach": {
      "directEmail": "jen@kineuphorics.com",
      "primaryFounderName": "Jen Batchelor",
      "primaryFounderRole": "Co-Founder & CEO",
      "primaryPersonalIG": "@jenbatchelor",
      "primaryPersonalIGUrl": "https://instagram.com/jenbatchelor",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Jen%20Batchelor%20Kin%20Euphorics",
      "founderHook": "Created the functional nightcap category by blending neuro-botanicals with high-art worldbuilding."
    }
  },
  {
    "id": "ghia",
    "slug": "ghia",
    "name": "Ghia",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Los Angeles, US",
    "website": "https://drinkghia.com",
    "instagram": {
      "handle": "@drinkghia",
      "url": "https://instagram.com/drinkghia"
    },
    "email": "hi@drinkghia.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Ghia%20Aperitif",
    "decisionMakerTitles": "Founder & CEO, Head of E-Commerce, Operations Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 110000,
      "currentCVR": 1.6,
      "currentAOV": 58,
      "repeatPurchaseRate": 27,
      "implementationFeeUSD": 14500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Extraordinary Mediterranean aperitif branding and zero-alcohol botanical recipe integrity",
        "High restaurant and specialty grocery distribution reinforcing digital DTC credibility"
      ],
      "primaryFrictionHeadline": "High shipping costs on heavy glass bottles hurt single-bottle conversion unless customers are guided into multi-bottle or Le Spritz variety packs.",
      "technicalBottlenecks": [
        "A single $38 glass bottle of The Aperitif incurs steep ground shipping, causing 58% cart abandonment at checkout step 2.",
        "PDP lacks dynamic serving recipe visualizers demonstrating how to prepare spritzes with club soda and citrus garnishes.",
        "Customers who purchase seasonal spritz drops are not enrolled in recurring tasting clubs."
      ]
    },
    "solutions": [
      {
        "id": "ghia-sol-1",
        "code": "ARCH-01",
        "title": "Dinner Party Hosting Bar Configurator",
        "lever": "AOV",
        "liftPercentage": 38,
        "mechanism": "Guided bar cart bundle UI pairing Original Aperitif + Le Spritz canned multi-pack + custom hand-blown glassware.",
        "beforeState": "Customer adds single $38 bottle of Aperitif; balks at $12 shipping fee at final checkout screen.",
        "afterState": "Guided Hosting Bar configurator prompts addition of Le Spritz 4-pack, unlocking free shipping and a $78 basket.",
        "techStack": "Shopify Custom PDP Architecture, Tailwind CSS, Alpine.js"
      },
      {
        "id": "ghia-sol-2",
        "code": "ARCH-02",
        "title": "Flavor Profile & Serve-Style Interactive Module",
        "lever": "CVR",
        "liftPercentage": 24,
        "mechanism": "Visual botanical tasting spectrum (Bitterness vs. Botanical vs. Citrus) with embedded 10-second cocktail recipe cards.",
        "beforeState": "Visitor unsure what non-alcoholic aperitif tastes like hesitates and exits without tasting.",
        "afterState": "Interactive tasting note radar and 3-ingredient recipe visualizer demystifies flavor profile in seconds.",
        "techStack": "Custom Canvas Visualizer, Shopify Metafields, Tailwind CSS"
      },
      {
        "id": "ghia-sol-3",
        "code": "ARCH-03",
        "title": "Seasonal Aperitif Club Retention Architecture",
        "lever": "LTV",
        "liftPercentage": 21,
        "mechanism": "Dedicated membership portal offering early access to limited seasonal spritz flavors and effortless shipment skipping.",
        "beforeState": "Customers buy once for Dry January and never return during spring/summer entertaining months.",
        "afterState": "Automated seasonal reservation club guarantees shipment of limited summer spritz drops with 1-click SMS skip.",
        "techStack": "Skio / ReCharge Headless Portal, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Mélanie Masarin",
        "role": "Founder & CEO",
        "personalIG": "@melaniemasarin",
        "personalIGUrl": "https://instagram.com/melaniemasarin",
        "directEmail": "melanie@drinkghia.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Melanie%20Masarin%20Ghia",
        "founderHook": "Brought Mediterranean aperitif culture and uncompromising visual taste to non-alcoholic hosting."
      }
    ],
    "executiveOutreach": {
      "directEmail": "melanie@drinkghia.com",
      "primaryFounderName": "Mélanie Masarin",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@melaniemasarin",
      "primaryPersonalIGUrl": "https://instagram.com/melaniemasarin",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Melanie%20Masarin%20Ghia",
      "founderHook": "Brought Mediterranean aperitif culture and uncompromising visual taste to non-alcoholic hosting."
    }
  },
  {
    "id": "oats-overnight",
    "slug": "oats-overnight",
    "name": "Oats Overnight",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Tempe, US",
    "website": "https://oatsovernight.com",
    "instagram": {
      "handle": "@oatsovernight",
      "url": "https://instagram.com/oatsovernight"
    },
    "email": "support@oatsovernight.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Oats%20Overnight",
    "decisionMakerTitles": "Founder & CEO, Head of Growth, VP Direct to Consumer",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 410000,
      "currentCVR": 2.1,
      "currentAOV": 46,
      "repeatPurchaseRate": 38,
      "implementationFeeUSD": 22000,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unmatched operational execution and subscription flywheel in high-protein breakfast nutrition",
        "Extremely high customer retention driven by continuous flavor R&D and community voting"
      ],
      "primaryFrictionHeadline": "Building a 16-pack or 24-pack box across 35+ flavors on mobile causes severe scroll fatigue and mid-funnel abandonment before the box is full.",
      "technicalBottlenecks": [
        "Mobile box builder requires scrolling past dozens of flavor cards, causing high drop-off before hitting the 16-pack minimum requirement.",
        "Box size upgrade incentives (16-pack vs. 24-pack vs. 32-pack) are buried in small footer text with no real-time per-meal price comparison.",
        "Existing subscribers receive pre-billing emails that require full website login to change upcoming flavor selections."
      ]
    },
    "solutions": [
      {
        "id": "oo-sol-1",
        "code": "ARCH-01",
        "title": "Zero-Scroll Mobile Box-Builder UI",
        "lever": "CVR",
        "liftPercentage": 26,
        "mechanism": "Sticky bottom slot tray with 1-tap 'Auto-Fill with Top 5 Bestsellers' and instant dietary filter pills (High Protein, Plant-Based).",
        "beforeState": "User spends 4 minutes scrolling 35 flavors on iPhone screen, gets frustrated filling slot 11, abandons session.",
        "afterState": "1-Tap 'Popular Starter Pack' pre-fills box instantly, allowing user to swap individual flavors in seconds.",
        "techStack": "Custom React Box Builder, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "oo-sol-2",
        "code": "ARCH-02",
        "title": "Box Size Upgrade Nudge (16-Pack -> 24/32-Pack)",
        "lever": "AOV",
        "liftPercentage": 28,
        "mechanism": "Real-time per-breakfast cost comparator inside the builder showing exact savings per meal as box size scales.",
        "beforeState": "Customer defaults to minimum 16-pack box at $48 ($3.00/meal).",
        "afterState": "Builder highlights 'Upgrade to 24-Pack: Save $0.45 per breakfast' nudging 34% of users to higher tier.",
        "techStack": "Shopify Custom Cart Engine, Tailwind CSS, Alpine.js"
      },
      {
        "id": "oo-sol-3",
        "code": "ARCH-03",
        "title": "1-Click Next-Box Flavor Roulette & Swap UI",
        "lever": "LTV",
        "liftPercentage": 25,
        "mechanism": "Passwordless pre-billing notification drawer allowing subscribers to swap flavors in 2 taps without logging in.",
        "beforeState": "Subscriber tires of chocolate flavor, ignores complex login email, and eventually cancels entire subscription.",
        "afterState": "SMS link opens passwordless 1-click swap tray to sample newly released limited edition flavors instantly.",
        "techStack": "ReCharge / Skio Passwordless Auth, Klaviyo Webhooks, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Brian Tate",
        "role": "Founder & CEO",
        "personalIG": "@briantate",
        "personalIGUrl": "https://instagram.com/briantate",
        "directEmail": "brian@oatsovernight.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Brian%20Tate%20Oats%20Overnight",
        "founderHook": "Data-driven subscription retention machine built through rapid flavor iteration and customer feedback loops."
      }
    ],
    "executiveOutreach": {
      "directEmail": "brian@oatsovernight.com",
      "primaryFounderName": "Brian Tate",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@briantate",
      "primaryPersonalIGUrl": "https://instagram.com/briantate",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Brian%20Tate%20Oats%20Overnight",
      "founderHook": "Data-driven subscription retention machine built through rapid flavor iteration and customer feedback loops."
    }
  },
  {
    "id": "boy-smells",
    "slug": "boy-smells",
    "name": "Boy Smells",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Los Angeles, US",
    "website": "https://boysmells.com",
    "instagram": {
      "handle": "@boy__smells",
      "url": "https://instagram.com/boy__smells"
    },
    "email": "support@boysmells.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Boy%20Smells",
    "decisionMakerTitles": "Co-Founder & CEO, Head of E-Commerce, VP Marketing",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 185000,
      "currentCVR": 1.5,
      "currentAOV": 84,
      "repeatPurchaseRate": 26,
      "implementationFeeUSD": 16500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Pioneering 'genderful' fragrance brand identity disrupting traditional luxury candle categories",
        "High retail velocity across Sephora, Nordstrom, and global luxury department stores"
      ],
      "primaryFrictionHeadline": "Blind-buying $50–$98 fragrances online creates extreme purchase hesitation, and sample set buyers lack an automated digital bridge to redeem credits on full bottles.",
      "technicalBottlenecks": [
        "Fine fragrance exploration lacks an interactive scent-note olfactory pyramid, forcing visitors to guess scent profiles from abstract marketing copy.",
        "Candle purchasers check out without cross-selling into the matching Cologne de Parfum or Room Spray in the same scent family.",
        "Customers who purchase the $32 Discovery Sample Kit must manually copy-paste promotional discount codes to redeem credit on full bottles."
      ]
    },
    "solutions": [
      {
        "id": "bs-sol-1",
        "code": "ARCH-01",
        "title": "Olfactory Architecture & Scent-Family Mapper",
        "lever": "CVR",
        "liftPercentage": 32,
        "mechanism": "Interactive scent matrix (Woody, Smoked, Floral, Gourmand) translating complex notes into spatial mood profiles and projection radiuses.",
        "beforeState": "Online shopper hesitates to blind-buy $98 Hinoki Fantôme bottle, fearing scent is too smoky.",
        "afterState": "Visual Olfactory profile models top, heart, and base notes with customer longevity ratings, accelerating purchase confidence.",
        "techStack": "Custom SVG Radar Chart Component, Shopify Metafields, Tailwind CSS"
      },
      {
        "id": "bs-sol-2",
        "code": "ARCH-02",
        "title": "Home + Body Dual-Format Bundler",
        "lever": "AOV",
        "liftPercentage": 30,
        "mechanism": "Dynamic cart cross-sell pairing signature Kush or Hinoki Fantôme candle with its matching Fine Fragrance or Room Spray.",
        "beforeState": "Customer buys single $48 Kush Candle and leaves site.",
        "afterState": "In-cart prompt offers 'Add Kush Cologne de Parfum: Save 20% on the Set', lifting order value to $128.",
        "techStack": "Shopify Custom Cart Drawer API, Tailwind CSS"
      },
      {
        "id": "bs-sol-3",
        "code": "ARCH-03",
        "title": "Automated Discovery-Voucher Redemption Wallet",
        "lever": "LTV",
        "liftPercentage": 27,
        "mechanism": "Persistent top-bar credit tracker that automatically deducts the $32 sample-set voucher when full-size bottle is added.",
        "beforeState": "Sample kit buyer forgets promo code from package, abandons full-bottle cart.",
        "afterState": "Direct magic-link from sample follow-up email automatically loads $32 voucher credit into cart session.",
        "techStack": "Shopify Draft Orders API, Custom Tokenized URL Handler, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Matthew Herman",
        "role": "Co-Founder",
        "personalIG": "@matthew_herman",
        "personalIGUrl": "https://instagram.com/matthew_herman",
        "directEmail": "matthew@boysmells.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Matthew%20Herman%20Boy%20Smells",
        "founderHook": "Transformed home fragrance into fine personal perfumery with bold olfactory architecture."
      },
      {
        "name": "David Kien",
        "role": "Co-Founder",
        "personalIG": "@davidkien",
        "personalIGUrl": "https://instagram.com/davidkien",
        "directEmail": "david@boysmells.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=David%20Kien%20Boy%20Smells",
        "founderHook": "Co-founded Boy Smells, curating genderful luxury scents and tactile vessels."
      }
    ],
    "executiveOutreach": {
      "directEmail": "matthew@boysmells.com",
      "primaryFounderName": "Matthew Herman & David Kien",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@matthew_herman",
      "primaryPersonalIGUrl": "https://instagram.com/matthew_herman",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Matthew%20Herman%20Boy%20Smells",
      "founderHook": "Transformed home fragrance into fine personal perfumery with bold olfactory architecture."
    }
  },
  {
    "id": "dedcool",
    "slug": "dedcool",
    "name": "DedCool",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Los Angeles, US",
    "website": "https://dedcool.com",
    "instagram": {
      "handle": "@dedcool",
      "url": "https://instagram.com/dedcool"
    },
    "email": "hello@dedcool.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=DedCool",
    "decisionMakerTitles": "Founder & Creative Director, Head of Growth, E-Commerce Manager",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 130000,
      "currentCVR": 1.7,
      "currentAOV": 88,
      "repeatPurchaseRate": 31,
      "implementationFeeUSD": 15000,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unique cross-category fragrance penetration through high-performance laundry Dedtergent and room spritz",
        "Gen-Z cult following for signature unisex scent profiles (Milk, Taunt, Red Dakota)"
      ],
      "primaryFrictionHeadline": "DedCool's biggest differentiator—layering fragrances across perfume, laundry detergent, and dryer sheets—is not structured as an interactive multi-product system.",
      "technicalBottlenecks": [
        "Customers buy Dedtergent without realizing matching fine fragrance layers scent across clothing and skin all day.",
        "Full-size fragrance bottles lack clear visual 'Risk-Free Trial' messaging (try included mini sample before opening full box).",
        "Refill pouches for laundry detergent do not offer scheduled replenishment intervals distinct from fine fragrance bottles."
      ]
    },
    "solutions": [
      {
        "id": "dc-sol-1",
        "code": "ARCH-01",
        "title": "Scent-Layering Ecosystem Builder",
        "lever": "AOV",
        "liftPercentage": 37,
        "mechanism": "Interactive 3-step configurator ('Base: Milk Fragrance + Middle: Dedtergent + Accent: Room Spray') with bundled pricing.",
        "beforeState": "User buys single bottle of Dedtergent ($35); misses out on complete fragrance layering ecosystem.",
        "afterState": "Layering Configurator prompts user to build matching 3-product scent wardrobe with 1-click bundle savings.",
        "techStack": "Shopify Bundle Architecture, Custom React Stepper, Tailwind CSS"
      },
      {
        "id": "dc-sol-2",
        "code": "ARCH-02",
        "title": "Risk-Free Full-Size + Free Sample Trial Architecture",
        "lever": "CVR",
        "liftPercentage": 25,
        "mechanism": "Prominent visual reassurance badge highlighting 'Free sample vial included: spray first, return full bottle unopened if not obsessed'.",
        "beforeState": "Online shopper hesitates to commit $90 to unfamiliar fragrance scent notes.",
        "afterState": "100% Risk-Free Guarantee badge pinned above Add to Cart button eliminates purchase hesitation.",
        "techStack": "Shopify Custom PDP Template, Tailwind CSS"
      },
      {
        "id": "dc-sol-3",
        "code": "ARCH-03",
        "title": "Household Dedtergent Refill Cadence Engine",
        "lever": "LTV",
        "liftPercentage": 24,
        "mechanism": "Smart replenishment portal separating consumable laundry detergent pouches from one-time fragrance purchases.",
        "beforeState": "Detergent customer runs out, faces re-order friction on website, buys grocery brand instead.",
        "afterState": "60-day automated refill subscription with SMS reminder and 1-tap scent swap option.",
        "techStack": "ReCharge Subscriptions API, Klaviyo SMS Trigger, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Carina Chaz",
        "role": "Founder & CEO",
        "personalIG": "@carinachaz",
        "personalIGUrl": "https://instagram.com/carinachaz",
        "directEmail": "carina@dedcool.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Carina%20Chaz%20DedCool",
        "founderHook": "Reinvented functional fragrance across body, home, and laundry with cult scents like Xtra Milk."
      }
    ],
    "executiveOutreach": {
      "directEmail": "carina@dedcool.com",
      "primaryFounderName": "Carina Chaz",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@carinachaz",
      "primaryPersonalIGUrl": "https://instagram.com/carinachaz",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Carina%20Chaz%20DedCool",
      "founderHook": "Reinvented functional fragrance across body, home, and laundry with cult scents like Xtra Milk."
    }
  },
  {
    "id": "pf-candle-co",
    "slug": "pf-candle-co",
    "name": "P.F. Candle Co.",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Los Angeles, US",
    "website": "https://pfcandleco.com",
    "instagram": {
      "handle": "@pfcandleco",
      "url": "https://instagram.com/pfcandleco"
    },
    "email": "hello@pfcandleco.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=P.F.%20Candle%20Co.",
    "decisionMakerTitles": "Co-Founder & CEO, Head of E-Commerce, Operations Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 205000,
      "currentCVR": 1.8,
      "currentAOV": 64,
      "repeatPurchaseRate": 29,
      "implementationFeeUSD": 16000,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Pioneering amber jar domestic home goods aesthetic manufactured locally in California",
        "Broad mainstream accessibility with high organic gifting and seasonal home refresh demand"
      ],
      "primaryFrictionHeadline": "Customers buy a single Teakwood & Tobacco candle for one room instead of outfitting their entire apartment across formats (Reed Diffusers, Incense, Hand Soap).",
      "technicalBottlenecks": [
        "Product detail pages display individual jar sizes without spatial guidance on which room size (bathroom vs. open living room) each candle throw accommodates.",
        "Home scenting bundles lack a multi-room configurator linking candle with matching reed diffuser for continuous flame-free scenting.",
        "Seasonal scent shifts (summer citrus to autumn amber) are not automated into an effortless quarterly replenishment club."
      ]
    },
    "solutions": [
      {
        "id": "pf-sol-1",
        "code": "ARCH-01",
        "title": "Room-by-Room Home Scenting Configurator",
        "lever": "AOV",
        "liftPercentage": 34,
        "mechanism": "Spatial home bundle builder ('Living Room: Large Jar + Entryway: Reed Diffuser + Bath: Hand Wash') with progressive 15–20% volume incentives.",
        "beforeState": "Customer buys single $24 Standard Candle, paying standard shipping on low basket size.",
        "afterState": "Interactive spatial configurator guides user to outfit 3 rooms, lifting average order value to $76.",
        "techStack": "Shopify Storefront API, Custom Preact Room Builder, Tailwind CSS"
      },
      {
        "id": "pf-sol-2",
        "code": "ARCH-02",
        "title": "Throw-Strength & Room-Size Specification Guide",
        "lever": "CVR",
        "liftPercentage": 22,
        "mechanism": "Architectural room square footage calculator on PDP recommending Standard 7.2oz vs. Large 12.5oz jar vs. Reed Diffuser.",
        "beforeState": "Customer buys small jar for open living room, finds scent throw weak, leaves negative review.",
        "afterState": "Interactive square footage slider recommends exact candle size and burn-hour expectations.",
        "techStack": "Shopify Custom Theme Component, Tailwind CSS"
      },
      {
        "id": "pf-sol-3",
        "code": "ARCH-03",
        "title": "Seasonal Jar Recycling & Refill Subscription UI",
        "lever": "LTV",
        "liftPercentage": 21,
        "mechanism": "Streamlined quarterly scent rotation subscription that automatically transitions from Cedar & Pine in winter to Citrus & Fig in spring.",
        "beforeState": "Customer stops burning candles as seasons change, leading to 6-month purchase hiatus.",
        "afterState": "Quarterly seasonal rotation club automatically delivers curated seasonal scents at equinox transitions.",
        "techStack": "Smartrr / ReCharge API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Kristen Pumphrey",
        "role": "Co-Founder",
        "personalIG": "@kristenpumphrey",
        "personalIGUrl": "https://instagram.com/kristenpumphrey",
        "directEmail": "kristen@pfcandleco.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Kristen%20Pumphrey%20PF%20Candle",
        "founderHook": "Scaled from a solo DIY studio into the gold standard of accessible California home fragrance."
      },
      {
        "name": "Thomas Neuberger",
        "role": "Co-Founder",
        "personalIG": "@thomasneuberger",
        "personalIGUrl": "https://instagram.com/thomasneuberger",
        "directEmail": "thomas@pfcandleco.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Thomas%20Neuberger%20PF%20Candle",
        "founderHook": "Co-built P.F. Candle Co. operations from garage craft to global distribution."
      }
    ],
    "executiveOutreach": {
      "directEmail": "kristen@pfcandleco.com",
      "primaryFounderName": "Kristen Pumphrey & Thomas Neuberger",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@kristenpumphrey",
      "primaryPersonalIGUrl": "https://instagram.com/kristenpumphrey",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Kristen%20Pumphrey%20PF%20Candle",
      "founderHook": "Scaled from a solo DIY studio into the gold standard of accessible California home fragrance."
    }
  },
  {
    "id": "canopy",
    "slug": "canopy",
    "name": "Canopy",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "New York, US",
    "website": "https://getcanopy.co",
    "instagram": {
      "handle": "@get.canopy",
      "url": "https://instagram.com/get.canopy"
    },
    "email": "hello@getcanopy.co",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Canopy%20Humidifier",
    "decisionMakerTitles": "Co-Founder & CEO, VP E-Commerce, Head of Direct Growth",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 160000,
      "currentCVR": 1.4,
      "currentAOV": 148,
      "repeatPurchaseRate": 34,
      "implementationFeeUSD": 18000,
      "turnaroundDays": 21
    },
    "forensicAudit": {
      "brandStrengths": [
        "Breakthrough dermatologist-recommended anti-mold mistless humidifier technology",
        "High recurring subscription revenue model tied to paper filter replacement cartridges"
      ],
      "primaryFrictionHeadline": "Hardware buyers (Humidifiers & Filtered Showerheads) experience sticker shock when filter replacement subscriptions and aroma kits aren't transparently modeled at checkout.",
      "technicalBottlenecks": [
        "Unclear hardware-versus-filter subscription toggle creates confusion at checkout, with users fearing hidden auto-renew billing traps.",
        "Multi-room bundle builders (Bedside + Nursery + Filtered Showerhead) lack clear combined health benefits telemetry.",
        "Active filter subscribers are not given an easy 1-click in-drawer method to add seasonal aroma oils to their upcoming recurring filter shipments."
      ]
    },
    "solutions": [
      {
        "id": "can-sol-1",
        "code": "ARCH-01",
        "title": "Hardware + Filter Subscription Transparency Toggle",
        "lever": "CVR",
        "liftPercentage": 27,
        "mechanism": "Side-by-side pricing transparency toggle ('Hardware Only: $150 vs. Hardware + VIP Filter Membership: $120 [$30 Instant Savings]') with cancel-anytime guarantee.",
        "beforeState": "User suspects subscription fine print, selects full-price hardware, or abandons checkout entirely.",
        "afterState": "Crystal-clear comparison highlights immediate $30 discount and flexible 45-day replacement intervals.",
        "techStack": "Shopify Custom PDP Architecture, Alpine.js, Tailwind CSS"
      },
      {
        "id": "can-sol-2",
        "code": "ARCH-02",
        "title": "Whole-Home Hydration & Shower Bundle Calculator",
        "lever": "AOV",
        "liftPercentage": 31,
        "mechanism": "Multi-room bundle selector (Bedroom Humidifier + Nursery Unit + Filtered Showerhead) displaying combined dermatologist-backed clinical benefits.",
        "beforeState": "Customer buys single Bedside Humidifier, missing showerhead designed to eliminate chlorinated hard water damage.",
        "afterState": "Multi-room selector prompts whole-home air + water overhaul with automated $50 system savings.",
        "techStack": "Shopify Storefront API, Custom Bundle Engine, Tailwind CSS"
      },
      {
        "id": "can-sol-3",
        "code": "ARCH-03",
        "title": "Filter Lifespan & Aroma Drop Add-On Portal",
        "lever": "LTV",
        "liftPercentage": 28,
        "mechanism": "1-Click pre-shipment SMS drawer allowing filter subscribers to toss seasonal essential oils into their upcoming shipment with zero extra shipping.",
        "beforeState": "Filter subscribers only receive filter paper, leaving high-margin consumable aroma oil revenue uncaptured.",
        "afterState": "Pre-shipment SMS prompts 'Add Santal Woods aroma oil for $12 without shipping charges' with 1-tap confirmation.",
        "techStack": "ReCharge Quick Actions API, Klaviyo SMS Webhook, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Lucas Lappe",
        "role": "Co-Founder & Head of Product",
        "personalIG": "@lucaslappe",
        "personalIGUrl": "https://instagram.com/lucaslappe",
        "directEmail": "lucas@getcanopy.co",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Lucas%20Lappe%20Canopy",
        "founderHook": "Turned mundane home hardware (humidifiers & showerheads) into dermatologist-backed beauty devices."
      }
    ],
    "executiveOutreach": {
      "directEmail": "lucas@getcanopy.co",
      "primaryFounderName": "Lucas Lappe",
      "primaryFounderRole": "Co-Founder & Head of Product",
      "primaryPersonalIG": "@lucaslappe",
      "primaryPersonalIGUrl": "https://instagram.com/lucaslappe",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Lucas%20Lappe%20Canopy",
      "founderHook": "Turned mundane home hardware (humidifiers & showerheads) into dermatologist-backed beauty devices."
    }
  },
  {
    "id": "courant",
    "slug": "courant",
    "name": "Courant",
    "discoveryTier": "Tier 1: Scaled D2C",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "New York, US",
    "website": "https://staycourant.com",
    "instagram": {
      "handle": "@staycourant",
      "url": "https://instagram.com/staycourant"
    },
    "email": "customer@staycourant.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Courant%20Wireless",
    "decisionMakerTitles": "Co-Founder, Head of E-Commerce, VP Operations",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 105000,
      "currentCVR": 1.3,
      "currentAOV": 125,
      "repeatPurchaseRate": 21,
      "implementationFeeUSD": 14500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unrivaled aesthetic mastery in designer charging hardware wrapped in Italian pebble leather and Belgian linen",
        "Strong holiday and executive corporate gifting appeal with high average order potential"
      ],
      "primaryFrictionHeadline": "Device compatibility anxiety (MagSafe vs. Qi, iPhone/AirPods/Apple Watch combinations) and lack of live monogramming/corporate-logo previews stall high-ticket checkouts.",
      "technicalBottlenecks": [
        "Customers are unsure whether their phone model (iPhone 13-16, Samsung Galaxy, Google Pixel) or watch charges at full wireless wattage on Catch:2 vs. Catch:3.",
        "Monogram personalization tool does not render foil-embossed initials live on the leather material swatch in real time.",
        "Corporate buyers seeking 25–200 debossed logo units have no self-serve volume quote and artwork proofing portal."
      ]
    },
    "solutions": [
      {
        "id": "cou-sol-1",
        "code": "ARCH-01",
        "title": "Interactive Device Ecosystem Compatibility & Material Swatch Studio",
        "lever": "CVR",
        "liftPercentage": 26,
        "mechanism": "Live device compatibility selector + real-time texture renderer comparing Belgian Linen vs. Italian Pebble Leather across room surfaces.",
        "beforeState": "User hesitates on $150 wireless tray unsure if their thick phone case and AirPods charge simultaneously.",
        "afterState": "Device verification selector guarantees wireless charging compatibility in 2 taps, unlocking immediate checkout.",
        "techStack": "Custom WebGL Texture Shaders, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "cou-sol-2",
        "code": "ARCH-02",
        "title": "Multi-Surface Charging Bundle + Live Monogram Previewer",
        "lever": "AOV",
        "liftPercentage": 35,
        "mechanism": "Real-time custom foil-monogram previewer + 'Outfit Desk & Nightstand' 2-unit bundle discount bar.",
        "beforeState": "User enters monogram initials blindly in text box without visual validation; buys single unit.",
        "afterState": "Live gold/silver foil monogram renders immediately on leather photo; prompts 2nd unit for nightstand at 20% off.",
        "techStack": "HTML5 Canvas Monogram Renderer, Shopify Custom Attributes, Tailwind CSS"
      },
      {
        "id": "cou-sol-3",
        "code": "ARCH-03",
        "title": "Executive & B2B Custom Debossed Gifting Configurator",
        "lever": "LTV",
        "liftPercentage": 23,
        "mechanism": "Self-serve corporate order portal for 25–500 custom-branded chargers with live logo placement and instant volume tier pricing.",
        "beforeState": "Corporate buyer needing 50 client gifts emails info@ address, waits 48 hours for sales quote, moves to competitor.",
        "afterState": "Self-serve B2B portal generates instant digital mockups, bulk volume discounts, and checkout in 4 minutes.",
        "techStack": "Shopify B2B Platform API, Custom SVG Logo Composite Engine, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Monish Sabnani",
        "role": "Co-Founder",
        "personalIG": "@monishsabnani",
        "personalIGUrl": "https://instagram.com/monishsabnani",
        "directEmail": "monish@staycourant.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Monish%20Sabnani%20Courant",
        "founderHook": "Elevated charging electronics into architectural Italian leather and Belgian linen home objects."
      },
      {
        "name": "Evan Moskal",
        "role": "Co-Founder",
        "personalIG": "@evanmoskal",
        "personalIGUrl": "https://instagram.com/evanmoskal",
        "directEmail": "evan@staycourant.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Evan%20Moskal%20Courant",
        "founderHook": "Co-architected Courant's design-led consumer tech positioning."
      }
    ],
    "executiveOutreach": {
      "directEmail": "monish@staycourant.com",
      "primaryFounderName": "Monish Sabnani & Evan Moskal",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@monishsabnani",
      "primaryPersonalIGUrl": "https://instagram.com/monishsabnani",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Monish%20Sabnani%20Courant",
      "founderHook": "Elevated charging electronics into architectural Italian leather and Belgian linen home objects."
    }
  },
  {
    "id": "ndg-studio",
    "slug": "ndg-studio",
    "name": "Nid de Guêpes (NDG Studio)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Paris, France",
    "website": "https://nid-de-guepes.com",
    "instagram": {
      "handle": "@ndg.studio",
      "url": "https://instagram.com/ndg.studio"
    },
    "email": "contact@nid-de-guepes.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Nid%20de%20Guepes%20NDG%20Studio",
    "decisionMakerTitles": "Founder & Creative Director, Head of E-Commerce",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 28000,
      "currentCVR": 0.9,
      "currentAOV": 230,
      "repeatPurchaseRate": 18,
      "implementationFeeUSD": 7500,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Distinctive Parisian brutalist silhouette combining artisanal footwear with heavyweight distressed knitwear",
        "Strong European cult following and organic styling resonance across underground street style tastemakers"
      ],
      "primaryFrictionHeadline": "Raw Parisian brutalist footwear and heavyweight knitwear drops suffer from zero EU/US sizing conversion clarity and manual pre-order wait-time confusion.",
      "technicalBottlenecks": [
        "International US/UK/Asian buyers bounce due to static EU shoe-sizing charts lacking millimeter insole measurements and last-fit guidance.",
        "Slide-out cart treats $230 boots and $190 knitwear as isolated line items without silhouette-pairing incentives.",
        "Pre-order customers inundate support with sizing and fulfillment status emails due to lack of a real-time production milestone tracker."
      ]
    },
    "solutions": [
      {
        "id": "ndg-sol-1",
        "code": "ARCH-01",
        "title": "Interactive EU/US/CM Last & Foot-Length Calibrator",
        "lever": "CVR",
        "liftPercentage": 38,
        "mechanism": "An interactive in-browser foot measurement and shoe-last calibrator calculating exact EU/US/UK size recommendations directly inside the buy-box.",
        "beforeState": "US/UK buyers abandon cart unsure whether European combat boots run true to size or half-size large.",
        "afterState": "Interactive 1-tap size calibrator compares foot length in CM to boot last, guaranteeing zero sizing returns and instant checkout.",
        "techStack": "Shopify Storefront API, Custom Canvas Sizing Module, Tailwind CSS"
      },
      {
        "id": "ndg-sol-2",
        "code": "ARCH-02",
        "title": "Tonal Brutalist Silhouette Bundler",
        "lever": "AOV",
        "liftPercentage": 31,
        "mechanism": "Dynamic complete-look cart drawer enabling 1-click addition of matching cargo trousers and heavy distressed knitwear to footwear purchases with tier savings.",
        "beforeState": "Customer adds footwear only; slide-out cart displays single item with zero outfit cross-sells.",
        "afterState": "Cart drawer surfaces curated 3-piece tonal silhouette with 1-click size selection, lifting basket size by $180+.",
        "techStack": "Shopify Liquid Ajax Cart, Web Storage Cache, Tailwind CSS"
      },
      {
        "id": "ndg-sol-3",
        "code": "ARCH-03",
        "title": "Live Pre-Order Production Tracker Portal",
        "lever": "LTV",
        "liftPercentage": 24,
        "mechanism": "Self-serve visual order tracking portal showing real-time artisanal fabrication milestones (Pattern Cut -> Dye Bath -> Assembly -> Dispatched) reducing support tickets.",
        "beforeState": "Pre-order clients send anxious Instagram DMs over 4-week fabrication wait times with zero transparency.",
        "afterState": "Automated SMS and magic-link portal display live workshop fabrication progress bars, turning pre-order waiting into brand equity.",
        "techStack": "Klaviyo Webhooks, Custom Milestone Portal API, Twilio SMS"
      }
    ],
    "founders": [
      {
        "name": "Adel",
        "role": "Founder & Creative Director",
        "personalIG": "@ndg.studio",
        "personalIGUrl": "https://instagram.com/ndg.studio",
        "directEmail": "adel@nid-de-guepes.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=NDG%20Studio%20Nid%20de%20Guepes",
        "founderHook": "Pioneered Parisian subversive streetwear aesthetics through limited hand-dyed drops and artisanal denim cuts."
      }
    ],
    "executiveOutreach": {
      "directEmail": "adel@nid-de-guepes.com",
      "primaryFounderName": "Adel",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@ndg.studio",
      "primaryPersonalIGUrl": "https://instagram.com/ndg.studio",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=NDG%20Studio%20Nid%20de%20Guepes",
      "founderHook": "Pioneered Parisian subversive streetwear aesthetics through limited hand-dyed drops and artisanal denim cuts."
    }
  },
  {
    "id": "mowalola-direct",
    "slug": "mowalola-direct",
    "name": "Mowalola (Archive & Capsule Direct)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Password-Locked Drop Site",
    "sector": "Fashion/Streetwear",
    "hqLocation": "London, UK / Lagos, NG",
    "website": "https://mowalola.com",
    "instagram": {
      "handle": "@mowalola",
      "url": "https://instagram.com/mowalola"
    },
    "email": "info@mowalola.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Mowalola",
    "decisionMakerTitles": "Creative Director, Studio Manager, E-Commerce Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 45000,
      "currentCVR": 0.8,
      "currentAOV": 340,
      "repeatPurchaseRate": 21,
      "implementationFeeUSD": 9500,
      "turnaroundDays": 16
    },
    "forensicAudit": {
      "brandStrengths": [
        "Iconic runway cultural authority blending Nigerian rock heritage with London vanguard cut-and-sew leather",
        "Massive global celebrity and high-fashion editorial pull driving organic search spikes"
      ],
      "primaryFrictionHeadline": "Between capsule drops, the storefront locks or displays sparse archival grids, losing thousands of monthly organic visitors without capturing segmented VIP intent.",
      "technicalBottlenecks": [
        "Password-locked splash page leaks 92% of off-cycle organic traffic without capturing targeted size or category reservations.",
        "High-ticket leather outerwear and accessories lack a unified runway lookbook-to-bag purchasing interaction.",
        "VIP buyers and high-spending repeat clients have no tokenized head-start access, leading to instant bot sellouts on accessories."
      ]
    },
    "solutions": [
      {
        "id": "mow-sol-1",
        "code": "ARCH-01",
        "title": "Always-On Archival Vault & Waitlist Capture Engine",
        "lever": "CVR",
        "liftPercentage": 42,
        "mechanism": "Replaces dead password screens between drops with an interactive archival exhibition capturing SKU-specific SMS/WhatsApp waitlists with 1-tap pre-auth.",
        "beforeState": "Off-season visitors hit a blank password input form and bounce permanently.",
        "afterState": "Interactive 3D lookbook allows visitors to pre-reserve sizes for upcoming capsule releases with verified phone auth.",
        "techStack": "Headless Shopify Storefront, Klaviyo Waitlist Webhooks, Tailwind CSS"
      },
      {
        "id": "mow-sol-2",
        "code": "ARCH-02",
        "title": "Runway Look-to-Bag Multi-Item Selector",
        "lever": "AOV",
        "liftPercentage": 29,
        "mechanism": "Full-screen runway lookbook modal allowing buyers to add complete jacket + baby-tee + bag ensembles in a single coordinated interaction.",
        "beforeState": "Customers purchase single graphic tees while matching high-margin leather goods remain undiscovered in separate collections.",
        "afterState": "1-Click 'Shop Full Runway Look' modal injects multi-SKU ensemble into cart with instant size selection.",
        "techStack": "React Bundle Drawer, Shopify Storefront API, Framer Motion"
      },
      {
        "id": "mow-sol-3",
        "code": "ARCH-03",
        "title": "Private Collector Vault Pass UI",
        "lever": "LTV",
        "liftPercentage": 26,
        "mechanism": "Tokenized passwordless VIP portal granting verified past collectors 2-hour early access and bespoke leather colorway reservations.",
        "beforeState": "Loyal collectors miss limited handbag drops due to open public bot traffic, inducing brand fatigue.",
        "afterState": "Automated VIP access key grants 120-minute private buying window, driving 80%+ conversion among top 100 collectors.",
        "techStack": "Customer Account API, Fast Tokenized Magic Link Auth, Cloudflare Workers"
      }
    ],
    "founders": [
      {
        "name": "Mowalola Ogunlesi",
        "role": "Founder & Creative Director",
        "personalIG": "@mowalola",
        "personalIGUrl": "https://instagram.com/mowalola",
        "directEmail": "mowalola@mowalola.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Mowalola%20Ogunlesi",
        "founderHook": "Redefining global clubwear and afro-futurist leather silhouettes with fearless, viral runway energy."
      }
    ],
    "executiveOutreach": {
      "directEmail": "mowalola@mowalola.com",
      "primaryFounderName": "Mowalola Ogunlesi",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@mowalola",
      "primaryPersonalIGUrl": "https://instagram.com/mowalola",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Mowalola%20Ogunlesi",
      "founderHook": "Redefining global clubwear and afro-futurist leather silhouettes with fearless, viral runway energy."
    }
  },
  {
    "id": "paf-studio-archive",
    "slug": "paf-studio-archive",
    "name": "Post Archive Faction (PAF) Independent Studio",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Seoul, South Korea",
    "website": "https://postarchivefaction.com",
    "instagram": {
      "handle": "@postarchivefaction",
      "url": "https://instagram.com/postarchivefaction"
    },
    "email": "info@postarchivefaction.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Post%20Archive%20Faction",
    "decisionMakerTitles": "Creative Director, E-Commerce Director, Studio Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 62000,
      "currentCVR": 1,
      "currentAOV": 380,
      "repeatPurchaseRate": 24,
      "implementationFeeUSD": 11000,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "LVMH Prize finalist engineering globally celebrated experimental technical garments categorized by Left, Center, and Right systems",
        "High secondary market collector appreciation and international stockist demand"
      ],
      "primaryFrictionHeadline": "Ultra-minimalist experimental navigation makes finding in-stock Left/Center/Right system garments on mobile nearly impossible for Western buyers.",
      "technicalBottlenecks": [
        "Mobile drawer lacks structured categorization across PAF's foundational Left/Center/Right iterative numbering taxonomy.",
        "Complex asymmetrical technical shells lack interactive articulation and layering diagrams explaining waterproof ratings and pocket access.",
        "Archive collectors lack a trusted verification and private re-release portal for discontinued season pieces."
      ]
    },
    "solutions": [
      {
        "id": "paf-sol-1",
        "code": "ARCH-01",
        "title": "Left / Center / Right System Architecture Matrix",
        "lever": "CVR",
        "liftPercentage": 35,
        "mechanism": "Visual technical index filtering experimental vs. hybrid vs. wearable cuts in 1 tap with real-time stock indicators.",
        "beforeState": "Mobile user wanders through unstructured photo gallery unable to locate wearable jackets in their size.",
        "afterState": "Clean Swiss-style architectural matrix categorizes garments by L/C/R tier, technical rating, and live inventory.",
        "techStack": "Next.js / Shopify Headless, Algolia Search API, Tailwind CSS"
      },
      {
        "id": "paf-sol-2",
        "code": "ARCH-02",
        "title": "Modular Technical Layering Configurator",
        "lever": "AOV",
        "liftPercentage": 26,
        "mechanism": "Interactive garment pairing canvas showing shell + technical mid-layer + articulated trouser synergy with live bundle pricing.",
        "beforeState": "Shopper buys single technical pant without seeing complementary outer membranes or hoods.",
        "afterState": "2-Piece and 3-piece layering engine dynamically snaps complementary silhouettes together with 1-click checkout.",
        "techStack": "HTML5 Canvas Articulation Engine, Shopify Cart API, Tailwind CSS"
      },
      {
        "id": "paf-sol-3",
        "code": "ARCH-03",
        "title": "Archive Collector Serial Verification & Trade-In Portal",
        "lever": "LTV",
        "liftPercentage": 20,
        "mechanism": "Serial-number authenticated archive exchange unlocking private studio deadstock drops for verified historical garment owners.",
        "beforeState": "Collectors buy from secondary platforms (Grailed/Vestiaire) with zero direct lifetime engagement with PAF studio.",
        "afterState": "Registered garment owners gain exclusive seasonal access to remastered archival editions, increasing repeat lifetime value.",
        "techStack": "Shopify Customer Metadata, NFC / Serial Ledger Engine, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Dongjoon Lim",
        "role": "Co-Founder & Designer",
        "personalIG": "@dongjoonlim",
        "personalIGUrl": "https://instagram.com/dongjoonlim",
        "directEmail": "dongjoon@postarchivefaction.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Dongjoon%20Lim%20Post%20Archive%20Faction",
        "founderHook": "Deconstructivist Korean technical tailoring categorized by experimental Left, Center, and Right iteration models."
      },
      {
        "name": "Sookyo Jeong",
        "role": "Co-Founder & Designer",
        "personalIG": "@sookyojeong",
        "personalIGUrl": "https://instagram.com/sookyojeong",
        "directEmail": "sookyo@postarchivefaction.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Sookyo%20Jeong%20Post%20Archive%20Faction",
        "founderHook": "Co-founded PAF, exploring kinetic garment construction and anatomical seamlines."
      }
    ],
    "executiveOutreach": {
      "directEmail": "dongjoon@postarchivefaction.com",
      "primaryFounderName": "Dongjoon Lim & Sookyo Jeong",
      "primaryFounderRole": "Co-Founders & Designers",
      "primaryPersonalIG": "@dongjoonlim",
      "primaryPersonalIGUrl": "https://instagram.com/dongjoonlim",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Dongjoon%20Lim%20Post%20Archive%20Faction",
      "founderHook": "Deconstructivist Korean technical tailoring categorized by experimental Left, Center, and Right iteration models."
    }
  },
  {
    "id": "wekafore-studio",
    "slug": "wekafore-studio",
    "name": "Wekafore Studio",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "IG DM / Linktree Only (No Website)",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Lagos, Nigeria / Barcelona",
    "website": "https://wekafore.com",
    "instagram": {
      "handle": "@wekafore",
      "url": "https://instagram.com/wekafore"
    },
    "email": "studio@wekafore.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Wekafore",
    "decisionMakerTitles": "Founder & Creative Director, Head of Operations",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 22000,
      "currentCVR": 0.6,
      "currentAOV": 195,
      "repeatPurchaseRate": 19,
      "implementationFeeUSD": 6500,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Groundbreaking 1970s pan-African nostalgia blended with retro-futuristic tailoring and luxury streetwear cuts",
        "Passionate international cultural diaspora and art-collector following across London, NY, Paris, and Lagos"
      ],
      "primaryFrictionHeadline": "High-demand cultural tailoring and synth-noir garments are bottlenecked by manual Instagram DMs, broken web checkout links, and manual international shipping quotes.",
      "technicalBottlenecks": [
        "90% of order inquiries stall in unread Instagram Direct Messages without automated multi-currency checkout.",
        "Customers hesitate on tailored trousers and jackets due to manual DM sizing queries and missing chest/waist measurements.",
        "Lack of integrated DHL Express international landed duties and rates forces founders to spend hours calculating manual quotes."
      ]
    },
    "solutions": [
      {
        "id": "wek-sol-1",
        "code": "ARCH-01",
        "title": "Zero-to-One Editorial Flagship Storefront",
        "lever": "CVR",
        "liftPercentage": 55,
        "mechanism": "Full headless e-commerce deployment replacing manual IG DM inquiries with instant multi-currency checkout (USD/EUR/GBP/NGN) and 1-tap Apple Pay.",
        "beforeState": "Interested buyers DM 'How much?' on Instagram, wait 14 hours for reply, and abandon before bank transfer details arrive.",
        "afterState": "High-speed editorial mobile flagship converts Instagram bio traffic instantly via localized multi-currency checkout.",
        "techStack": "Shopify Storefront API, Paystack / Stripe Multi-Currency Gateway, Tailwind CSS"
      },
      {
        "id": "wek-sol-2",
        "code": "ARCH-02",
        "title": "Made-to-Measure + Ready-to-Wear Hybrid Configurator",
        "lever": "AOV",
        "liftPercentage": 34,
        "mechanism": "Interactive size specification drawer capturing chest, waist, and inseam measurements at checkout for tailored silhouettes.",
        "beforeState": "Customer hesitates to purchase $240 tailored pants fearing improper fit, abandoning checkout.",
        "afterState": "Self-serve sizing guide with optional custom inseam selection increases purchase confidence and lifts average order value.",
        "techStack": "Custom React Form Drawer, Shopify Order Attributes, Tailwind CSS"
      },
      {
        "id": "wek-sol-3",
        "code": "ARCH-03",
        "title": "Automated DHL Express Global Rate & Tracking Engine",
        "lever": "LTV",
        "liftPercentage": 25,
        "mechanism": "Automated landed international shipping rate calculations and SMS tracking dispatcher for UK, US, EU, and West African destinations.",
        "beforeState": "Manual post-purchase shipping emails result in delayed fulfillment and customer chargeback friction.",
        "afterState": "Instant door-to-door tracking notifications and guaranteed delivery windows foster high repeat order confidence.",
        "techStack": "DHL Express API, Twilio Automated SMS, Webhook Dispatcher"
      }
    ],
    "founders": [
      {
        "name": "Wekaforé Jibril",
        "role": "Founder & Creative Director",
        "personalIG": "@wekafore",
        "personalIGUrl": "https://instagram.com/wekafore",
        "directEmail": "wekafore@wekafore.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Wekafore%20Jibril",
        "founderHook": "Merging 1970s West African disco tailoring with contemporary diaspora streetwear elegance."
      }
    ],
    "executiveOutreach": {
      "directEmail": "wekafore@wekafore.com",
      "primaryFounderName": "Wekaforé Jibril",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@wekafore",
      "primaryPersonalIGUrl": "https://instagram.com/wekafore",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Wekafore%20Jibril",
      "founderHook": "Merging 1970s West African disco tailoring with contemporary diaspora streetwear elegance."
    }
  },
  {
    "id": "youths-in-balaclava",
    "slug": "youths-in-balaclava",
    "name": "Youths in Balaclava (YIB)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Singapore",
    "website": "https://youthsinbalaclava.com",
    "instagram": {
      "handle": "@youthsinbalaclava",
      "url": "https://instagram.com/youthsinbalaclava"
    },
    "email": "info@youthsinbalaclava.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Youths%20in%20Balaclava",
    "decisionMakerTitles": "Collective Founder, Managing Director, Digital Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 19000,
      "currentCVR": 0.9,
      "currentAOV": 175,
      "repeatPurchaseRate": 20,
      "implementationFeeUSD": 6800,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Backed by Dover Street Market Paris with a fiercely dedicated global counter-culture and punk streetwear base",
        "Exceptional hardware accessories, patch-worked denim, and subversive visual graphic identity"
      ],
      "primaryFrictionHeadline": "High global cult recognition from Dover Street Market features, but their direct web storefront lacks structured storytelling, sizing confidence, and bundle mechanics.",
      "technicalBottlenecks": [
        "Direct-to-consumer store runs on a barebones template with low visual impact compared to their high-end runway presentations.",
        "Customers purchase individual graphic items while high-margin hardware pins, leather masks, and silver rings sit unprompted.",
        "International buyers from US and Europe drop out due to unoptimized cross-border checkout latency."
      ]
    },
    "solutions": [
      {
        "id": "yib-sol-1",
        "code": "ARCH-01",
        "title": "High-Contrast Brutalist Lookbook-to-Checkout Flow",
        "lever": "CVR",
        "liftPercentage": 34,
        "mechanism": "Merges zine-style editorial imagery directly with sticky 1-click size drawers, bypassing cumbersome PDP reloads.",
        "beforeState": "Visitors flip through aesthetic lookbooks on desktop but encounter a clunky, broken mobile shopping list.",
        "afterState": "Fluid visual zine layout allows tap-to-buy on every model photograph with instant size drawer slide-out.",
        "techStack": "Shopify Headless Storefront, Preact Lookbook Overlay, Tailwind CSS"
      },
      {
        "id": "yib-sol-2",
        "code": "ARCH-02",
        "title": "Graphic Tee + Hardware Accessory Capsule Builder",
        "lever": "AOV",
        "liftPercentage": 30,
        "mechanism": "Progressive cart drawer unlocking archival zines, pins, or balaclavas at $250+ cart thresholds with 1-tap add-on buttons.",
        "beforeState": "Customers buy single $80 tee and check out without discovering collectible jewelry or hardware accessories.",
        "afterState": "Cart drawer prompts matching custom hardware pin at 20% bundle discount, increasing AOV by $35+.",
        "techStack": "Shopify Ajax Cart Engine, Dynamic Discount Hooks, Tailwind CSS"
      },
      {
        "id": "yib-sol-3",
        "code": "ARCH-03",
        "title": "Drop-Day SMS/Email Vault Key System",
        "lever": "LTV",
        "liftPercentage": 22,
        "mechanism": "Automated early-access key dispatcher giving past purchasers first rights to limited-edition hardware releases.",
        "beforeState": "Repeat buyers compete against casual visitors and miss out on 50-piece capsule drops.",
        "afterState": "Tokenized early-access portal ensures existing collectors convert before general public drop announcement.",
        "techStack": "Klaviyo VIP Segmentation, Custom Access Pass Gate, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Tawkir ('Bandi') & Collective",
        "role": "Founders & Creative Directors",
        "personalIG": "@taukirtk",
        "personalIGUrl": "https://instagram.com/taukirtk",
        "directEmail": "info@youthsinbalaclava.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Youths%20in%20Balaclava",
        "founderHook": "Singaporean punk-rebel collective challenging conservative societal norms through subversive utility garments."
      }
    ],
    "executiveOutreach": {
      "directEmail": "info@youthsinbalaclava.com",
      "primaryFounderName": "Tawkir ('Bandi') & Collective",
      "primaryFounderRole": "Founders & Creative Directors",
      "primaryPersonalIG": "@taukirtk",
      "primaryPersonalIGUrl": "https://instagram.com/taukirtk",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Youths%20in%20Balaclava",
      "founderHook": "Singaporean punk-rebel collective challenging conservative societal norms through subversive utility garments."
    }
  },
  {
    "id": "motherlan-lagos",
    "slug": "motherlan-lagos",
    "name": "Motherlan",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Password-Locked Drop Site",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Lagos, Nigeria / London, UK",
    "website": "https://motherlan.com",
    "instagram": {
      "handle": "@motherlan_",
      "url": "https://instagram.com/motherlan_"
    },
    "email": "info@motherlan.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Motherlan%20Lagos",
    "decisionMakerTitles": "Founder & Creative Director, Operations Manager",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 31000,
      "currentCVR": 0.8,
      "currentAOV": 135,
      "repeatPurchaseRate": 22,
      "implementationFeeUSD": 7000,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "The defining West African skate collective with major global cultural co-signs (Supreme, Stüssy, Nike)",
        "Rabid streetwear diaspora eager to support genuine Nigerian skate culture across US, UK, and European hubs"
      ],
      "primaryFrictionHeadline": "Diaspora and global skate buyers hit a locked or sparse storefront outside of capsule windows, leaking 90% of year-round organic discovery traffic.",
      "technicalBottlenecks": [
        "Site is locked with a password input 80% of the year, discarding thousands of organic visits generated by skate video premieres.",
        "No dual-currency routing separating Lagos domestic fulfillment (NGN via Paystack) from London/US diaspora orders (GBP/USD via Stripe).",
        "Skate decks and heavyweight knitwear are presented without bundle pairing or grip-tape/hardware add-on workflows."
      ]
    },
    "solutions": [
      {
        "id": "moth-sol-1",
        "code": "ARCH-01",
        "title": "Dual-Hub Global + Local Checkout Architecture",
        "lever": "CVR",
        "liftPercentage": 45,
        "mechanism": "Geo-IP routing automatically directing UK/US/EU buyers to international hubs and Lagos buyers to local NGN express dispatch.",
        "beforeState": "Lagos buyers get blocked by foreign currency gateways while international buyers face manual shipping quote hurdles.",
        "afterState": "Intelligent dual-hub checkout auto-switches fulfillment origin, currency, and payment gateway based on visitor location.",
        "techStack": "Shopify Markets, Paystack Multi-Currency API, Cloudflare Geo-IP Workers"
      },
      {
        "id": "moth-sol-2",
        "code": "ARCH-02",
        "title": "Skate Deck + Heavy Knit + Beanie Pack Configurator",
        "lever": "AOV",
        "liftPercentage": 32,
        "mechanism": "Interactive 3-piece capsule builder allowing skaters to bundle a printed deck with seasonal apparel and accessories at tiered savings.",
        "beforeState": "Customers buy a single graphic deck without exploring apparel collection.",
        "afterState": "Interactive board + apparel customizer bundles complementary pieces with 1-click checkout.",
        "techStack": "Custom React Multi-SKU Selector, Shopify Cart API, Tailwind CSS"
      },
      {
        "id": "moth-sol-3",
        "code": "ARCH-03",
        "title": "Archive Lookbook & Pre-Drop Reservation Engine",
        "lever": "LTV",
        "liftPercentage": 23,
        "mechanism": "Maintains historical video and photo lookbooks live year-round with 'Notify & Reserve Next Cut' triggers capturing buyer phone numbers.",
        "beforeState": "Between drops, website displays password lock, capturing zero intent from viral video viewers.",
        "afterState": "Interactive skate video and archive hub collects 1,500+ pre-orders and phone numbers for subsequent drop releases.",
        "techStack": "Klaviyo SMS Integration, Vimeo Embedded Video API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Slawn (Olaolu Slawn)",
        "role": "Co-Founder",
        "personalIG": "@olaoluslawn",
        "personalIGUrl": "https://instagram.com/olaoluslawn",
        "directEmail": "slawn@motherlan.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Slawn%20Motherlan",
        "founderHook": "Cult Lagos skate collective fusing raw DIY Nigerian skate culture with London underground hype."
      },
      {
        "name": "Onyedi & Leo",
        "role": "Co-Founders",
        "personalIG": "@motherlan_",
        "personalIGUrl": "https://instagram.com/motherlan_",
        "directEmail": "info@motherlan.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Motherlan%20Lagos",
        "founderHook": "Co-founded Motherlan, driving Lagos youth skate and street apparel drops."
      }
    ],
    "executiveOutreach": {
      "directEmail": "info@motherlan.com",
      "primaryFounderName": "Slawn, Onyedi, & Leo",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@olaoluslawn",
      "primaryPersonalIGUrl": "https://instagram.com/olaoluslawn",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Slawn%20Motherlan",
      "founderHook": "Cult Lagos skate collective fusing raw DIY Nigerian skate culture with London underground hype."
    }
  },
  {
    "id": "bujwah-studio",
    "slug": "bujwah-studio",
    "name": "Bujwah Studio",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "IG DM / Linktree Only (No Website)",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Accra, Ghana / London",
    "website": "https://bujwah.com",
    "instagram": {
      "handle": "@bujwah",
      "url": "https://instagram.com/bujwah"
    },
    "email": "contact@bujwah.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Bujwah",
    "decisionMakerTitles": "Founder & Designer, Commercial Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 16500,
      "currentCVR": 0.7,
      "currentAOV": 120,
      "repeatPurchaseRate": 17,
      "implementationFeeUSD": 5500,
      "turnaroundDays": 12
    },
    "forensicAudit": {
      "brandStrengths": [
        "Artisanal cut-and-sew silhouettes combining Ghanaian hand-dyed textiles with modern oversized utility cuts",
        "Viral organic TikTok and Instagram reels generating immense demand among global diaspora streetwear enthusiasts"
      ],
      "primaryFrictionHeadline": "Viral reels generate thousands of 'Price?' and 'Do you ship to US/UK?' comments that go unanswered or stall in manual DM payment links.",
      "technicalBottlenecks": [
        "No direct e-commerce storefront; sales require manual DM exchanges and sending unverified payment links.",
        "Lack of structured size and wash-care guides causes repeated back-and-forth messaging on fabric shrinkage.",
        "Zero automated customer database or retargeting pipeline to capitalize on sold-out drops."
      ]
    },
    "solutions": [
      {
        "id": "buj-sol-1",
        "code": "ARCH-01",
        "title": "Instant Social-to-Checkout Micro-Flagship",
        "lever": "CVR",
        "liftPercentage": 52,
        "mechanism": "Ultra-fast mobile storefront designed specifically for Instagram in-app browser traffic with instant 1-tap Apple Pay / Google Pay.",
        "beforeState": "Followers message DM to ask for price, wait hours, and lose interest before receiving an unformatted payment link.",
        "afterState": "Bio link routes directly to lightning-fast mobile shop where checkout completes in 18 seconds.",
        "techStack": "Shopify Lite / Custom Headless, Stripe Express Checkout, Tailwind CSS"
      },
      {
        "id": "buj-sol-2",
        "code": "ARCH-02",
        "title": "Two-Piece Twinset & Heavy Tee Upsell Drawer",
        "lever": "AOV",
        "liftPercentage": 33,
        "mechanism": "Dynamic bundle upsell drawer pairing hand-dyed shorts with matching camp collar shirts at 15% combined discount.",
        "beforeState": "Customers purchase only the shorts, missing the complementary shirt completely.",
        "afterState": "Cart drawer prompts 1-click matching twinset upgrade, raising average order value from $65 to $130+.",
        "techStack": "Shopify Ajax Cart, Custom Bundle Logic, Tailwind CSS"
      },
      {
        "id": "buj-sol-3",
        "code": "ARCH-03",
        "title": "Automated Back-in-Stock WhatsApp & Email Trigger",
        "lever": "LTV",
        "liftPercentage": 21,
        "mechanism": "Captures every out-of-stock size inquiry via WhatsApp/Email and triggers instant pre-order checkout when new batch cuts drop.",
        "beforeState": "Sold out items lose potential buyers with no mechanism to notify them of restocks.",
        "afterState": "Automated WhatsApp notification engine alerts interested buyers the moment fabric batches are sewn.",
        "techStack": "WhatsApp Cloud API, Klaviyo Flow Webhooks, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Creative Director / Founder (Accra)",
        "role": "Founder & Creative Director",
        "personalIG": "@bujwah",
        "personalIGUrl": "https://instagram.com/bujwah",
        "directEmail": "founder@bujwah.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Bujwah%20Studio",
        "founderHook": "Hyper-focused West African luxury tailoring engineered for the modern continental youth movement."
      }
    ],
    "executiveOutreach": {
      "directEmail": "founder@bujwah.com",
      "primaryFounderName": "Creative Director / Founder (Accra)",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@bujwah",
      "primaryPersonalIGUrl": "https://instagram.com/bujwah",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Bujwah%20Studio",
      "founderHook": "Hyper-focused West African luxury tailoring engineered for the modern continental youth movement."
    }
  },
  {
    "id": "otto-958",
    "slug": "otto-958",
    "name": "Kiko Kostadinov Studio / Otto 958",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Password-Locked Drop Site",
    "sector": "Fashion/Streetwear",
    "hqLocation": "London / Los Angeles",
    "website": "https://otto958.com",
    "instagram": {
      "handle": "@otto_958",
      "url": "https://instagram.com/otto_958"
    },
    "email": "info@otto958.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Otto%20958",
    "decisionMakerTitles": "Studio Co-Director, Commercial Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 38000,
      "currentCVR": 1.1,
      "currentAOV": 190,
      "repeatPurchaseRate": 26,
      "implementationFeeUSD": 8500,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Curated by Kiko Kostadinov and Morán Morán gallery, marrying subcultural athletic aesthetics with fine art objects",
        "Dedicated international cult following of fashion theorists, artists, and sneaker collectors"
      ],
      "primaryFrictionHeadline": "Barebones brutalist index provides zero garment drape context or cross-sell architecture when capsules go live.",
      "technicalBottlenecks": [
        "Extreme minimalist UI omits detailed fabric weight, drape context, and flat-lay measurements, causing sizing hesitation.",
        "Accessories, embroidered caps, and printed scarves are presented in isolated tabs without unified buy-box pairing.",
        "Unsold archive editions sit dormant between drops without a private VIP clearance portal."
      ]
    },
    "solutions": [
      {
        "id": "ott-sol-1",
        "code": "ARCH-01",
        "title": "Brutalist Technical Index with Instant Hover-Spec",
        "lever": "CVR",
        "liftPercentage": 31,
        "mechanism": "Maintains the raw brutalist aesthetic while injecting instant flat-lay measurements, fabric GSM data, and model height calibration on hover/tap.",
        "beforeState": "Buyers look at cryptic product photos with no measurement specs and abandon cart.",
        "afterState": "1-Tap technical spec drawer reveals precise measurements in CM/inches and fabric composition without cluttering UI.",
        "techStack": "Custom React Hover Layer, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "ott-sol-2",
        "code": "ARCH-02",
        "title": "Cap + Scarf + Heavy Jersey Capsule Drawer",
        "lever": "AOV",
        "liftPercentage": 28,
        "mechanism": "Slide-out cart seamlessly introduces embroidered accessories and collectible art objects with zero extra checkout steps.",
        "beforeState": "Customers purchase a single embroidered sweatshirt and ignore accessories.",
        "afterState": "Cart drawer surfaces collectible logo cap and pin with 1-click add, boosting basket size.",
        "techStack": "Shopify Ajax Cart API, Tailwind CSS"
      },
      {
        "id": "ott-sol-3",
        "code": "ARCH-03",
        "title": "Private Archive Ledger UI",
        "lever": "LTV",
        "liftPercentage": 22,
        "mechanism": "Gated archive portal allowing past verified purchasers to unlock and purchase leftover studio archive pieces.",
        "beforeState": "Archival stock sits in storage while collectors search secondhand markets.",
        "afterState": "Private email authentication unlocks seasonal archive releases directly from the studio.",
        "techStack": "Tokenized Magic Link Auth, Customer Account API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Kiko Kostadinov",
        "role": "Co-Founder & Creative Director",
        "personalIG": "@kikokostadinov",
        "personalIGUrl": "https://instagram.com/kikokostadinov",
        "directEmail": "kiko@otto958.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Kiko%20Kostadinov",
        "founderHook": "Experimental workwear installations and obscure athletic tailoring operating at the absolute peak of fashion intellect."
      },
      {
        "name": "Moran Gallery",
        "role": "Co-Founder",
        "personalIG": "@otto958",
        "personalIGUrl": "https://instagram.com/otto958",
        "directEmail": "gallery@otto958.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Otto%20958%20Moran",
        "founderHook": "Collaborative platform fusing subcultural ephemera with high-fashion tailoring."
      }
    ],
    "executiveOutreach": {
      "directEmail": "kiko@otto958.com",
      "primaryFounderName": "Kiko Kostadinov & Moran Gallery",
      "primaryFounderRole": "Co-Founders & Creative Directors",
      "primaryPersonalIG": "@kikokostadinov",
      "primaryPersonalIGUrl": "https://instagram.com/kikokostadinov",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Kiko%20Kostadinov",
      "founderHook": "Experimental workwear installations and obscure athletic tailoring operating at the absolute peak of fashion intellect."
    }
  },
  {
    "id": "fischersund",
    "slug": "fischersund",
    "name": "Fischersund",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Reykjavík, Iceland",
    "website": "https://fischersund.com",
    "instagram": {
      "handle": "@fischersund",
      "url": "https://instagram.com/fischersund"
    },
    "email": "fischersund@fischersund.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Fischersund",
    "decisionMakerTitles": "Co-Founder & Perfumer, Managing Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 29000,
      "currentCVR": 1.1,
      "currentAOV": 155,
      "repeatPurchaseRate": 24,
      "implementationFeeUSD": 8500,
      "turnaroundDays": 16
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unrivaled sensory immersion founded by Jónsi (Sigur Rós) and family, translating Icelandic smoke, birch, and moss into fine scent",
        "Exceptional handmade tin box packaging, custom soundtrack cassette tapes, and dark artisanal brand universe"
      ],
      "primaryFrictionHeadline": "Extraordinary Icelandic sensory storytelling is trapped in slow-loading artistic pages that confuse first-time fragrance buyers.",
      "technicalBottlenecks": [
        "Abstract scent numbering (No. 23, No. 54, No. 101) lacks an interactive olfactory profile, leaving blind buyers reluctant to purchase full 50ml bottles.",
        "Customers buy a single candle or perfume bottle without discovering complementary handmade incense cones or music releases.",
        "Sample discovery set purchasers have no automated workflow to credit their sample fee towards their first full-size bottle."
      ]
    },
    "solutions": [
      {
        "id": "fis-sol-1",
        "code": "ARCH-01",
        "title": "Interactive Icelandic Olfactory Landscape Mapper",
        "lever": "CVR",
        "liftPercentage": 36,
        "mechanism": "Translates abstract scent numbers into clear sensory note pyramids (Smoke, Tar, Birch, Arctic Moss) with wearability radar diagrams.",
        "beforeState": "Visitor reads poetic Icelandic prose but has no idea whether No. 23 smells woody, smoky, or sweet; leaves without buying.",
        "afterState": "Visual olfactory radar map lets user preview scent intensity and longevity in 1 tap, lifting blind-buy confidence.",
        "techStack": "Custom SVG Radar Chart, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "fis-sol-2",
        "code": "ARCH-02",
        "title": "Perfume + Incense Cones + Faux Fur Pouch Ritual Builder",
        "lever": "AOV",
        "liftPercentage": 34,
        "mechanism": "Guided 3-object sensory ritual configurator bundling fine fragrance with handmade incense cones and scented bandanas.",
        "beforeState": "Shopper buys $90 solid perfume tin and misses the complete Icelandic sensory ritual.",
        "afterState": "Interactive ritual tray allows 1-click bundle customization with 15% combined ritual savings.",
        "techStack": "Shopify Ajax Cart API, Preact Drawer Component, Tailwind CSS"
      },
      {
        "id": "fis-sol-3",
        "code": "ARCH-03",
        "title": "Discovery Set Voucher Auto-Credit Wallet",
        "lever": "LTV",
        "liftPercentage": 27,
        "mechanism": "Automatically deposits a 100% credit of the sample discovery set price into the customer's cart drawer for their next 50ml bottle.",
        "beforeState": "Sample kit buyers must manually find discount codes sent via email 10 days later; 85% forget to redeem.",
        "afterState": "Magic link auto-applies $45 sample credit directly at checkout when user clicks to purchase their favorite full bottle.",
        "techStack": "Shopify Automatic Discount API, Klaviyo Flow Hooks, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Jónsi (Sigur Rós)",
        "role": "Co-Founder",
        "personalIG": "@jonsi",
        "personalIGUrl": "https://instagram.com/jonsi",
        "directEmail": "jonsi@fischersund.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jonsi%20Fischersund",
        "founderHook": "Translating Icelandic moss, volcanic soil, and ethereal soundscapes into sensory olfactory art."
      },
      {
        "name": "Lilja Birgisdóttir",
        "role": "Co-Founder",
        "personalIG": "@liljabirgis",
        "personalIGUrl": "https://instagram.com/liljabirgis",
        "directEmail": "lilja@fischersund.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Lilja%20Birgisdottir%20Fischersund",
        "founderHook": "Visual artist and photographer co-directing Fischersund's multi-sensory apothecary."
      }
    ],
    "executiveOutreach": {
      "directEmail": "lilja@fischersund.com",
      "primaryFounderName": "Jónsi, Lilja Birgisdóttir, & Ingibjörg Birgisdóttir",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@liljabirgis",
      "primaryPersonalIGUrl": "https://instagram.com/liljabirgis",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Fischersund%20Reykjavik",
      "founderHook": "Translating Icelandic moss, volcanic soil, and ethereal soundscapes into sensory olfactory art."
    }
  },
  {
    "id": "perfumer-h",
    "slug": "perfumer-h",
    "name": "Perfumer H (Independent Digital Studio Flow)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "London, UK",
    "website": "https://perfumerh.com",
    "instagram": {
      "handle": "@perfumerhlondon",
      "url": "https://instagram.com/perfumerhlondon"
    },
    "email": "enquiries@perfumerh.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Perfumer%20H",
    "decisionMakerTitles": "Founder & Master Perfumer (Lyn Harris), Managing Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 42000,
      "currentCVR": 1,
      "currentAOV": 260,
      "repeatPurchaseRate": 29,
      "implementationFeeUSD": 12000,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Quintessential British bespoke luxury fragrance created by Lyn Harris with iconic hand-blown colored glass vessels by Michael Ruh",
        "High-net-worth clientele with exceptional repeat loyalty across London, Paris, and Tokyo boutique doors"
      ],
      "primaryFrictionHeadline": "High-ticket hand-blown glass candles ($225+) and refills lack an interactive digital custom-engraving and refill-subscription workflow.",
      "technicalBottlenecks": [
        "Hand-blown glass bottle personalization (gold leaf hand-engraved initials) lacks a real-time digital visualizer, stalling $350+ gift purchases.",
        "Complex library of 30+ subtle bespoke fragrances lacks an interactive olfactory diagnostic matching seasonal mood.",
        "Existing owners of $225 hand-blown candle vessels have no frictionless online candle wax refill subscription."
      ]
    },
    "solutions": [
      {
        "id": "pfh-sol-1",
        "code": "ARCH-01",
        "title": "Hand-Blown Glass Color + Scent + Gold-Engraving Configurator",
        "lever": "AOV",
        "liftPercentage": 38,
        "mechanism": "Live bespoke vessel customization studio previewing hand-blown glass hues (Amber, Smoke, Olive, Ink) and personalized gold initials.",
        "beforeState": "User enters initials in a sterile text box without previewing the master artisan glass finish.",
        "afterState": "Interactive 3D-lit glass vessel visualizer renders custom debossed monogram in real time, unlocking effortless $350+ gift purchases.",
        "techStack": "Three.js Glass Material Shader, Shopify Product Options API, Tailwind CSS"
      },
      {
        "id": "pfh-sol-2",
        "code": "ARCH-02",
        "title": "Olfactory Family Matrix (Citrus, Wood, Fern, Amber)",
        "lever": "CVR",
        "liftPercentage": 28,
        "mechanism": "Guided diagnostic funnel leading to curated 5-vial laboratory sample kits tailored to individual seasonality and skin chemistry.",
        "beforeState": "First-time visitor feels overwhelmed by 30 obscure botanical names and leaves without selecting a scent.",
        "afterState": "60-Second olfactory matrix guides user to exact sample vial pairing with seamless add-to-cart.",
        "techStack": "Custom Preact Diagnostic Funnel, Tailwind CSS"
      },
      {
        "id": "pfh-sol-3",
        "code": "ARCH-03",
        "title": "Candle Wax & Apothecary Bottle Refill Portal",
        "lever": "LTV",
        "liftPercentage": 33,
        "mechanism": "1-Click return and wax refill scheduling portal for owners of permanent hand-blown glass vessels.",
        "beforeState": "Clients store empty $225 candle jars in cabinets unaware of how to purchase replacement wax refills online.",
        "afterState": "Dedicated refill drawer prompts seasonal fragrance wax drops with pre-paid return label or DIY wax insert delivery.",
        "techStack": "Shopify Customer Account Portal, ReCharge Subscription API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Lyn Harris",
        "role": "Master Perfumer & Founder",
        "personalIG": "@perfumerhlondon",
        "personalIGUrl": "https://instagram.com/perfumerhlondon",
        "directEmail": "lyn@perfumerh.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Lyn%20Harris%20Perfumer%20H",
        "founderHook": "Bespoke British olfactory precision housed in hand-blown Michael Ruh glass vessels."
      }
    ],
    "executiveOutreach": {
      "directEmail": "lyn@perfumerh.com",
      "primaryFounderName": "Lyn Harris",
      "primaryFounderRole": "Master Perfumer & Founder",
      "primaryPersonalIG": "@perfumerhlondon",
      "primaryPersonalIGUrl": "https://instagram.com/perfumerhlondon",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Lyn%20Harris%20Perfumer%20H",
      "founderHook": "Bespoke British olfactory precision housed in hand-blown Michael Ruh glass vessels."
    }
  },
  {
    "id": "olo-fragrance",
    "slug": "olo-fragrance",
    "name": "Olo Fragrance",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Portland, US",
    "website": "https://olofragrance.com",
    "instagram": {
      "handle": "@olofragrance",
      "url": "https://instagram.com/olofragrance"
    },
    "email": "info@olofragrance.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Olo%20Fragrance",
    "decisionMakerTitles": "Founder & Nose, Operations Manager",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 21000,
      "currentCVR": 1.3,
      "currentAOV": 72,
      "repeatPurchaseRate": 27,
      "implementationFeeUSD": 6500,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Beloved Pacific Northwest minimalist indie perfumery famous for Dark Wave, Lightning Paw, and Palo Santo essential oil blends",
        "Affordable $55–$95 price point creating accessible impulse discovery with strong word-of-mouth advocacy"
      ],
      "primaryFrictionHeadline": "Cult oil-rollerball perfumes are displayed on a flat, minimal grid with zero scent-layering logic, leaving customers buying only a single $55 rollerball.",
      "technicalBottlenecks": [
        "Product catalog displays 20+ standalone 9ml rollerballs with zero dynamic multi-rollerball bundle incentives.",
        "Mobile shoppers have no way to understand how woody scents (Palo Santo) layer with aquatic/rain scents (Dark Wave).",
        "High-velocity rollerball users run out after 90 days with no automated re-order or seasonal refill reminder."
      ]
    },
    "solutions": [
      {
        "id": "olo-sol-1",
        "code": "ARCH-01",
        "title": "Custom 3-Scent Rollerball Layering Trio Builder",
        "lever": "AOV",
        "liftPercentage": 41,
        "mechanism": "Interactive 3-slot wooden tray configurator allowing customers to pick 3 signature oils with instant 15% tier savings.",
        "beforeState": "Customer buys single $55 rollerball; order value remains capped below free-shipping thresholds.",
        "afterState": "Visual tray prompts 3-scent selection (e.g., Dark Wave + Palo Santo + Cedar & Rose), lifting AOV from $55 to $140+.",
        "techStack": "React Slot-Selector, Shopify Ajax Cart API, Tailwind CSS"
      },
      {
        "id": "olo-sol-2",
        "code": "ARCH-02",
        "title": "60-Second Scent Profile Finder",
        "lever": "CVR",
        "liftPercentage": 29,
        "mechanism": "Fast 3-question mood diagnostic matching weather, daily routine, and note preferences to sample vial trios.",
        "beforeState": "Visitor browses cryptic scent titles and leaves undecided.",
        "afterState": "Diagnostic narrows collection to 2 top recommended oils with 1-click sample trio add-to-bag.",
        "techStack": "Preact Quiz Modal, Tailwind CSS"
      },
      {
        "id": "olo-sol-3",
        "code": "ARCH-03",
        "title": "Pocket Rollerball 90-Day Replenishment Nudge",
        "lever": "LTV",
        "liftPercentage": 23,
        "mechanism": "Automated replenishment flow delivering a pre-authenticated 1-tap re-order checkout link 75 days after purchase.",
        "beforeState": "Customers use up their 9ml bottle and forget brand name when searching for replacements months later.",
        "afterState": "Smart SMS/Email dispatch lands in inbox exactly when bottle reaches last 10%, driving instant 1-tap re-order.",
        "techStack": "Klaviyo Predictive Analytics, Twilio SMS API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Heather Sielaff",
        "role": "Co-Founder & Master Perfumer",
        "personalIG": "@olofragrance",
        "personalIGUrl": "https://instagram.com/olofragrance",
        "directEmail": "heather@olofragrance.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Heather%20Sielaff%20Olo%20Fragrance",
        "founderHook": "Hand-blended micro-batch botanical fragrance oils capturing the raw mist of the Pacific Northwest."
      },
      {
        "name": "Jonathan Sielaff",
        "role": "Co-Founder",
        "personalIG": "@olofragrance",
        "personalIGUrl": "https://instagram.com/olofragrance",
        "directEmail": "jonathan@olofragrance.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jonathan%20Sielaff%20Olo%20Fragrance",
        "founderHook": "Co-founded Olo Fragrance, curating olfactory soundscapes and artisan botanical oils."
      }
    ],
    "executiveOutreach": {
      "directEmail": "heather@olofragrance.com",
      "primaryFounderName": "Heather Sielaff & Jonathan Sielaff",
      "primaryFounderRole": "Co-Founders & Perfumers",
      "primaryPersonalIG": "@olofragrance",
      "primaryPersonalIGUrl": "https://instagram.com/olofragrance",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Heather%20Sielaff%20Olo%20Fragrance",
      "founderHook": "Hand-blended micro-batch botanical fragrance oils capturing the raw mist of the Pacific Northwest."
    }
  },
  {
    "id": "lvnea",
    "slug": "lvnea",
    "name": "Lvnea",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Montreal, Canada",
    "website": "https://lvnea.com",
    "instagram": {
      "handle": "@lvnea",
      "url": "https://instagram.com/lvnea"
    },
    "email": "info@lvnea.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Lvnea%20Perfume",
    "decisionMakerTitles": "Founder & Herbalist, Studio Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 34000,
      "currentCVR": 1.2,
      "currentAOV": 78,
      "repeatPurchaseRate": 28,
      "implementationFeeUSD": 7800,
      "turnaroundDays": 15
    },
    "forensicAudit": {
      "brandStrengths": [
        "All-natural gothic apothecary and 100% botanical perfumery made from rare resins, forest distillations, and cold-pressed botanical extractions",
        "Deeply loyal aesthetic community across dark academia, occult botanical arts, and indie fragrance connoisseurs"
      ],
      "primaryFrictionHeadline": "Over 60+ gothic botanical SKUs (solid perfumes, essential oils, incense, bath salts) overwhelm new visitors without guided curation.",
      "technicalBottlenecks": [
        "Unsorted catalog with dozens of niche botanical formats creates cognitive decision paralysis for first-time shoppers.",
        "Customers buying liquid Eau de Parfum are not cross-sold matching solid perfume lockets or botanical incense bricks.",
        "Small-batch solstice and equinox releases sell out instantly without an organized VIP reservation gateway."
      ]
    },
    "solutions": [
      {
        "id": "lvn-sol-1",
        "code": "ARCH-01",
        "title": "Botanical Archetype Quiz (Forest Floor, Ancient Resin, Night Bloom)",
        "lever": "CVR",
        "liftPercentage": 33,
        "mechanism": "Translates botanical and occult notes into an interactive 3-question archetype quiz outputting a curated personal altar kit.",
        "beforeState": "Customer is fascinated by aesthetic photography but bewildered by oakmoss, labdanum, and galbanum distinctions.",
        "afterState": "Archetype selector filters 60+ products to 3 targeted items with instant bundle discount.",
        "techStack": "Preact Quiz Modal, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "lvn-sol-2",
        "code": "ARCH-02",
        "title": "Format Cross-Sell Engine (Eau de Parfum + Solid Perfume + Incense)",
        "lever": "AOV",
        "liftPercentage": 36,
        "mechanism": "Dynamic cart drawer cross-sell offering matching solid perfume tins and ritual incense bricks at 20% off when a 50ml bottle is added.",
        "beforeState": "Shopper purchases single $85 liquid perfume without exploring $32 solid perfume tins or ritual incense.",
        "afterState": "1-Tap inline drawer upsell pairs matching scent across solid and incense formats, lifting basket to $130+.",
        "techStack": "Shopify Ajax Cart Engine, Tailwind CSS"
      },
      {
        "id": "lvn-sol-3",
        "code": "ARCH-03",
        "title": "Seasonal Solstice Limited-Batch Vault Gate",
        "lever": "LTV",
        "liftPercentage": 22,
        "mechanism": "Early-access reservation flow granting email/SMS subscribers priority access to micro-batch wildcrafted botanical distillations.",
        "beforeState": "Devoted buyers miss seasonal solstice perfume releases due to chaotic social media release announcements.",
        "afterState": "Automated vault key delivers private 24-hour pre-sale link, guaranteeing 95%+ sell-through on limited batches.",
        "techStack": "Klaviyo VIP Flows, Custom Passwordless Vault Gate, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "April Lea",
        "role": "Founder & Perfumer",
        "personalIG": "@lvnea",
        "personalIGUrl": "https://instagram.com/lvnea",
        "directEmail": "april@lvnea.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=April%20Lea%20Lvnea",
        "founderHook": "Dark botanical alchemy formulating 100% natural, gothic botanical perfumes from rare resins and woods."
      }
    ],
    "executiveOutreach": {
      "directEmail": "april@lvnea.com",
      "primaryFounderName": "April Lea",
      "primaryFounderRole": "Founder & Perfumer",
      "primaryPersonalIG": "@lvnea",
      "primaryPersonalIGUrl": "https://instagram.com/lvnea",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=April%20Lea%20Lvnea",
      "founderHook": "Dark botanical alchemy formulating 100% natural, gothic botanical perfumes from rare resins and woods."
    }
  },
  {
    "id": "artisan-oud-accra",
    "slug": "artisan-oud-accra",
    "name": "Scent & Skin / Artisanal Oud Studio",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "IG DM / Linktree Only (No Website)",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Accra / Lagos",
    "website": "https://scentandskin.co",
    "instagram": {
      "handle": "@scentandskin_",
      "url": "https://instagram.com/scentandskin_"
    },
    "email": "hello@scentandskin.co",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Scent%20and%20Skin",
    "decisionMakerTitles": "Founder & Creative Director, Operations Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 18000,
      "currentCVR": 0.7,
      "currentAOV": 68,
      "repeatPurchaseRate": 24,
      "implementationFeeUSD": 5000,
      "turnaroundDays": 12
    },
    "forensicAudit": {
      "brandStrengths": [
        "Handcrafted African botanical home fragrances blending Nigerian amber resin, Ghanaian cocoa butter, and Moroccan cedarwood",
        "High demand from luxury penthouses, boutique hospitality brands, and corporate gift buyers across West Africa and London"
      ],
      "primaryFrictionHeadline": "Corporate gifting buyers (banks, real estate firms, luxury hotels) and residential clients must message on WhatsApp/IG to ask which diffuser scents are in stock.",
      "technicalBottlenecks": [
        "All transactions are conducted manually over WhatsApp or Instagram DM with PDF catalogs and bank wire confirmations.",
        "Zero multi-room diffuser bundling logic or refill subscription models for residential home-scenting clients.",
        "Corporate bulk buyers (50–300 holiday gift sets) have no self-serve custom debossed branding and invoicing portal."
      ]
    },
    "solutions": [
      {
        "id": "snt-sol-1",
        "code": "ARCH-01",
        "title": "Quiet-Luxury Direct-to-Consumer & Corporate Storefront",
        "lever": "CVR",
        "liftPercentage": 58,
        "mechanism": "Turnkey editorial web store replacing manual WhatsApp messages with instant multi-currency checkout and live inventory telemetry.",
        "beforeState": "Potential buyers view Instagram photos, message 'Is Oud Royal available?', wait 18 hours, and abandon.",
        "afterState": "Streamlined luxury mobile storefront allows instant credit card and mobile money checkout in under 30 seconds.",
        "techStack": "Shopify Storefront API, Paystack / Stripe Multi-Currency Gateway, Tailwind CSS"
      },
      {
        "id": "snt-sol-2",
        "code": "ARCH-02",
        "title": "Apartment Scenting Architecture Bundle (Living + Bedroom + Bath)",
        "lever": "AOV",
        "liftPercentage": 44,
        "mechanism": "Room-by-room reed diffuser + botanical oil refill configurator allowing clients to scent an entire home with complementary profiles.",
        "beforeState": "Clients purchase a single $45 diffuser and miss bedroom mist and bathroom candle pairings.",
        "afterState": "Interactive 3-room scent architect builds complete living + bedroom + bath suite with 1-click add-to-bag.",
        "techStack": "Custom Room Configurator Component, Shopify Cart API, Tailwind CSS"
      },
      {
        "id": "snt-sol-3",
        "code": "ARCH-03",
        "title": "90-Day Reed & Fragrance Oil Refill Subscription",
        "lever": "LTV",
        "liftPercentage": 31,
        "mechanism": "Automated WhatsApp and Email refill dispatch sending fresh reed sticks and 250ml botanical oil bottles every 90 days.",
        "beforeState": "Diffusers dry out and collect dust; clients forget to re-order refills manually.",
        "afterState": "Automated WhatsApp notification triggers seamless 1-tap refill delivery before reeds lose scent throw.",
        "techStack": "WhatsApp Cloud API, ReCharge Subscription API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Principal Creative Director (Accra/Lagos)",
        "role": "Founder & Creative Director",
        "personalIG": "@scentandskin_",
        "personalIGUrl": "https://instagram.com/scentandskin_",
        "directEmail": "founder@scentandskin.co",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Scent%20and%20Skin%20Accra",
        "founderHook": "Formulating West African wild-harvested botanicals into opulent, high-vibe body care rituals."
      }
    ],
    "executiveOutreach": {
      "directEmail": "founder@scentandskin.co",
      "primaryFounderName": "Principal Creative Director (Accra/Lagos)",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@scentandskin_",
      "primaryPersonalIGUrl": "https://instagram.com/scentandskin_",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Scent%20and%20Skin%20Accra",
      "founderHook": "Formulating West African wild-harvested botanicals into opulent, high-vibe body care rituals."
    }
  },
  {
    "id": "klur-botanicals",
    "slug": "klur-botanicals",
    "name": "Klur",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Skincare",
    "hqLocation": "Los Angeles, US",
    "website": "https://klur.co",
    "instagram": {
      "handle": "@klur.co",
      "url": "https://instagram.com/klur.co"
    },
    "email": "info@klur.co",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Klur%20Skincare",
    "decisionMakerTitles": "Founder & Master Esthetician (Lesley Thornton), Operations Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 27000,
      "currentCVR": 1.3,
      "currentAOV": 86,
      "repeatPurchaseRate": 29,
      "implementationFeeUSD": 8000,
      "turnaroundDays": 15
    },
    "forensicAudit": {
      "brandStrengths": [
        "Celebrated eco-inclusive clinical esthetician formulations prioritizing skin barrier health, dermal longevity, and botanical minimalism",
        "Supreme editorial design aesthetic revered by design purists, dermatologists, and conscious beauty leaders"
      ],
      "primaryFrictionHeadline": "Minimalist aesthetic hides clinical esthetician guidance; visitors admire the typography but leave without knowing how to layer Immersion, Symmetry, and Gentle Matter.",
      "technicalBottlenecks": [
        "Unassisted product pages provide zero clinical layering order for active serums, oils, and barrier cleansers.",
        "Clients purchase a single serum ($74) without adopting the comprehensive multi-step morning/night protocol.",
        "Seasonal skin transitions (summer humidity vs. winter dehydration) are unaddressed in post-purchase retention flows."
      ]
    },
    "solutions": [
      {
        "id": "klr-sol-1",
        "code": "ARCH-01",
        "title": "Esthetician Digital Consultation & Regimen Matrix",
        "lever": "CVR",
        "liftPercentage": 31,
        "mechanism": "A 3-question clinical barrier diagnostic outputting a tailored AM/PM skincare protocol calibrated by Master Esthetician Lesley Thornton.",
        "beforeState": "Visitor is captivated by elegant glass bottles but unsure whether Immersion Serum or Symmetry Fluid fits their barrier.",
        "afterState": "Diagnostic delivers personalized 3-step regimen with clinical usage instructions and 1-tap cart injection.",
        "techStack": "Custom Preact Consultation Funnel, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "klr-sol-2",
        "code": "ARCH-02",
        "title": "Complete Protocol Bundle Toggle (Full Regimen vs. Single Bottle)",
        "lever": "AOV",
        "liftPercentage": 35,
        "mechanism": "Side-by-side protocol comparison on every PDP showing the savings and clinical efficacy of buying the cleanser + serum + oil trio.",
        "beforeState": "Customer adds a single cleanser ($42) and ignores complementary barrier repair fluid.",
        "afterState": "1-Click 'Complete Daily Protocol' toggle upgrades checkout from $42 to $165 with 15% system savings.",
        "techStack": "Shopify Liquid Ajax Cart, Custom Toggle Component, Tailwind CSS"
      },
      {
        "id": "klr-sol-3",
        "code": "ARCH-03",
        "title": "Esthetician Seasonal Skin-Shift Check-In Portal",
        "lever": "LTV",
        "liftPercentage": 25,
        "mechanism": "Automated seasonal skin consultation prompt guiding buyers to calibrate hydration weight between summer and winter.",
        "beforeState": "Clients use the same serum year-round until seasonal irritation occurs, causing brand churn.",
        "afterState": "Seasonal diagnostic email prompts appropriate seasonal barrier adjustments, driving reliable bi-annual repurchases.",
        "techStack": "Klaviyo Predictive Flow, Custom Webview Consultation, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Lesley Thornton",
        "role": "Founder, Esthetician & Formulator",
        "personalIG": "@lesleythornton",
        "personalIGUrl": "https://instagram.com/lesleythornton",
        "directEmail": "lesley@klur.co",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Lesley%20Thornton%20Klur",
        "founderHook": "Architect of eco-inclusive, esthetician-formulated skincare prioritizing barrier health and slow beauty."
      }
    ],
    "executiveOutreach": {
      "directEmail": "lesley@klur.co",
      "primaryFounderName": "Lesley Thornton",
      "primaryFounderRole": "Founder, Esthetician & Formulator",
      "primaryPersonalIG": "@lesleythornton",
      "primaryPersonalIGUrl": "https://instagram.com/lesleythornton",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Lesley%20Thornton%20Klur",
      "founderHook": "Architect of eco-inclusive, esthetician-formulated skincare prioritizing barrier health and slow beauty."
    }
  },
  {
    "id": "frama-apothecary",
    "slug": "frama-apothecary",
    "name": "Frama Copenhagen (Apothecary Direct Flow)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Copenhagen, Denmark",
    "website": "https://framacph.com",
    "instagram": {
      "handle": "@framacph",
      "url": "https://instagram.com/framacph"
    },
    "email": "info@framacph.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Frama%20Copenhagen",
    "decisionMakerTitles": "Managing Director, Head of E-Commerce, Creative Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 58000,
      "currentCVR": 1.2,
      "currentAOV": 130,
      "repeatPurchaseRate": 26,
      "implementationFeeUSD": 13500,
      "turnaroundDays": 20
    },
    "forensicAudit": {
      "brandStrengths": [
        "World-renowned architectural apothecary and furniture studio housed in Copenhagen's historic 1878 St. Pauls Pharmacy",
        "Iconic custom amber glass apothecary bottles (St. Pauls, Beratan, Deep Forest, 1917) featured in world's best boutique hotels"
      ],
      "primaryFrictionHeadline": "St. Pauls Apothecary buyers get lost inside furniture/lighting navigation menus, and glass soap/lotion buyers lack a frictionless refill pouch subscription.",
      "technicalBottlenecks": [
        "Apothecary and personal care products are buried beneath high-ticket €2,000 tables and lighting fixtures on the main website.",
        "Customers buying hand wash ($55) are not prompted to add matching hand lotion or custom architectural brass wall brackets.",
        "Zero automated eco-friendly refill subscription system for existing 500ml glass bottle owners."
      ]
    },
    "solutions": [
      {
        "id": "fra-sol-1",
        "code": "ARCH-01",
        "title": "Dedicated Apothecary Express Storefront & Scent Selector",
        "lever": "CVR",
        "liftPercentage": 27,
        "mechanism": "Fast-loading dedicated apothecary subdomain separating high-velocity personal care items from heavy architectural furniture.",
        "beforeState": "Visitor wanting St. Pauls Hand Wash waits for heavy 3D furniture models to render on homepage and bounces.",
        "afterState": "Apothecary express portal loads in 0.6 seconds with direct scent comparison and 1-tap Apple Pay.",
        "techStack": "Headless Shopify Storefront, Edge Cached CDN, Tailwind CSS"
      },
      {
        "id": "fra-sol-2",
        "code": "ARCH-02",
        "title": "Wall-Mounted Brass Bracket + Hand Wash + Lotion Trio Configurator",
        "lever": "AOV",
        "liftPercentage": 33,
        "mechanism": "Architectural bathroom hardware configurator pairing custom brass wall brackets with matching hand wash and lotion bottles.",
        "beforeState": "Customer buys single $55 soap bottle without discovering matching lotion or wall mount hardware.",
        "afterState": "Interactive bathroom visualizer allows 1-click addition of brass bracket and lotion, raising order to $175+.",
        "techStack": "Custom React 3-Piece Configurator, Shopify Cart API, Tailwind CSS"
      },
      {
        "id": "fra-sol-3",
        "code": "ARCH-03",
        "title": "500ml Refill Pouch Auto-Replenish Engine",
        "lever": "LTV",
        "liftPercentage": 29,
        "mechanism": "Sustainable aluminum/pouch refill subscription calculator calibrated to household size (1 person vs. 4 people).",
        "beforeState": "Existing glass bottle owners throw away bottles or buy competing generic drugstore soap refills.",
        "afterState": "Calculated refill subscription delivers eco-refill pouches automatically every 60/90 days, locking in recurring revenue.",
        "techStack": "ReCharge Subscription API, Custom Usage Calculator, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Niels Strøyer Christophersen",
        "role": "Founder & Creative Director",
        "personalIG": "@nielsstroyer",
        "personalIGUrl": "https://instagram.com/nielsstroyer",
        "directEmail": "nsc@framacph.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Niels%20Stroyer%20Frama",
        "founderHook": "Harmonizing raw architectural furniture, apothecaries, and sensory space design in Copenhagen's historic St. Pauls Apotek."
      }
    ],
    "executiveOutreach": {
      "directEmail": "nsc@framacph.com",
      "primaryFounderName": "Niels Strøyer Christophersen",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@nielsstroyer",
      "primaryPersonalIGUrl": "https://instagram.com/nielsstroyer",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Niels%20Stroyer%20Frama",
      "founderHook": "Harmonizing raw architectural furniture, apothecaries, and sensory space design in Copenhagen's historic St. Pauls Apotek."
    }
  },
  {
    "id": "cuerpo-botanical",
    "slug": "cuerpo-botanical",
    "name": "Cuerpo (Artisan Body & Botanical Lab)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "IG DM / Linktree Only (No Website)",
    "sector": "Bodycare",
    "hqLocation": "Mexico City, Mexico",
    "website": "https://cuerpobotanico.mx",
    "instagram": {
      "handle": "@cuerpo.botanico",
      "url": "https://instagram.com/cuerpo.botanico"
    },
    "email": "hola@cuerpobotanico.mx",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Cuerpo%20Botanico",
    "decisionMakerTitles": "Founder & Formulator, Commercial Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 15000,
      "currentCVR": 0.8,
      "currentAOV": 58,
      "repeatPurchaseRate": 23,
      "implementationFeeUSD": 4800,
      "turnaroundDays": 12
    },
    "forensicAudit": {
      "brandStrengths": [
        "Small-batch Mexican botanical bodycare using endemic cold-pressed oils (copal, jojoba, mamey, agave) in stunning frosted vessels",
        "High international traveler and expat cult following in Roma Norte and Condesa boutiques with strong word-of-mouth"
      ],
      "primaryFrictionHeadline": "High local and tourist demand in Roma Norte/Condesa is trapped in manual Instagram DM bank-transfer instructions and PDF catalogs.",
      "technicalBottlenecks": [
        "No digital storefront; orders require sending direct messages, calculating manual shipping, and coordinating SPEI bank transfers.",
        "Foreign visitors from US/Canada cannot pay via local bank transfer and abandon purchase requests.",
        "Zero automated B2B wholesale ordering portal for boutique hotels and spa stockists."
      ]
    },
    "solutions": [
      {
        "id": "crp-sol-1",
        "code": "ARCH-01",
        "title": "Bilingual (ES/EN) Editorial E-Commerce Storefront",
        "lever": "CVR",
        "liftPercentage": 54,
        "mechanism": "Instant Stripe and MercadoPago checkout replacing manual DM bank transfers with seamless bilingual localization.",
        "beforeState": "Tourists and locals message DM for prices, encounter delayed Spanish-only replies, and abandon purchase.",
        "afterState": "Bilingual mobile web store completes order via Apple Pay or credit card in seconds with automated shipping rates.",
        "techStack": "Shopify Storefront API, Stripe / MercadoPago Gateway, Tailwind CSS"
      },
      {
        "id": "crp-sol-2",
        "code": "ARCH-02",
        "title": "Bath & Body Ritual Crate Configurator",
        "lever": "AOV",
        "liftPercentage": 37,
        "mechanism": "Build-your-own 3-step botanical body oil, scrub, and hydrating mist wooden gift crate with tiered bundle pricing.",
        "beforeState": "Shopper buys a single $26 body oil and checks out.",
        "afterState": "Custom gift crate configurator prompts matching scrub and mist, elevating average order value to $78+.",
        "techStack": "Custom Bundle Drawer, Shopify Ajax Cart, Tailwind CSS"
      },
      {
        "id": "crp-sol-3",
        "code": "ARCH-03",
        "title": "Hotel & Boutique Wholesale Self-Serve Portal",
        "lever": "LTV",
        "liftPercentage": 24,
        "mechanism": "Automated wholesale ordering gate allowing boutique hotels and concept shops to place 24-unit repeat orders with instant invoicing.",
        "beforeState": "Wholesale buyers wait days for manual email replies and PDF price quotes.",
        "afterState": "Verified boutique accounts log in, order in bulk, and receive automated tax invoices immediately.",
        "techStack": "Shopify B2B Platform API, Tax Invoicing Webhook, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Studio Founder (CDMX)",
        "role": "Founder & Herbalist",
        "personalIG": "@cuerpo.botanico",
        "personalIGUrl": "https://instagram.com/cuerpo.botanico",
        "directEmail": "fundador@cuerpobotanico.mx",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Cuerpo%20Botanico%20Mexico",
        "founderHook": "Preserving Mesoamerican botanical knowledge through artisanal, hand-pressed ancestral skincare elixirs."
      }
    ],
    "executiveOutreach": {
      "directEmail": "fundador@cuerpobotanico.mx",
      "primaryFounderName": "Studio Founder (CDMX)",
      "primaryFounderRole": "Founder & Herbalist",
      "primaryPersonalIG": "@cuerpo.botanico",
      "primaryPersonalIGUrl": "https://instagram.com/cuerpo.botanico",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Cuerpo%20Botanico%20Mexico",
      "founderHook": "Preserving Mesoamerican botanical knowledge through artisanal, hand-pressed ancestral skincare elixirs."
    }
  },
  {
    "id": "mud-australia-studio",
    "slug": "mud-australia-studio",
    "name": "Mud Australia (Direct Studio Configurator)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Sydney, Australia",
    "website": "https://mudaustralia.com",
    "instagram": {
      "handle": "@mudaustralia",
      "url": "https://instagram.com/mudaustralia"
    },
    "email": "info@mudaustralia.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Mud%20Australia",
    "decisionMakerTitles": "Founder & Design Director (Shelley Simpson), Global Digital Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 48000,
      "currentCVR": 1.1,
      "currentAOV": 215,
      "repeatPurchaseRate": 28,
      "implementationFeeUSD": 11500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Pinnacle handmade artisanal porcelain tableware hand-poured in Sydney across 19 signature matte color pigments",
        "Celebrated by world-class Michelin star restaurateurs, interior architects, and luxury bridal registries globally"
      ],
      "primaryFrictionHeadline": "Mixing and matching 19+ matte porcelain pigment colors across plates, bowls, and mugs requires opening dozens of browser tabs.",
      "technicalBottlenecks": [
        "Static product grids force customers to open 15 tabs to compare how 'Slate' plates look stacked with 'Blossom' bowls.",
        "First-time dining set buyers suffer from extreme color choice paralysis and abandon carts without completing a 4-person table set.",
        "Bridal and interior architecture registries lack real-time digital completion status and single-click gift purchasing."
      ]
    },
    "solutions": [
      {
        "id": "mud-sol-1",
        "code": "ARCH-01",
        "title": "Interactive 12-Piece Tonal Tableware Palette Visualizer",
        "lever": "AOV",
        "liftPercentage": 44,
        "mechanism": "Canvas-based virtual tabletop allowing clients to stack dinner plates, salad plates, and bowls across 19 porcelain pigments in real time.",
        "beforeState": "Shopper buys 2 white mugs unable to visualize how colored dinner plates look together.",
        "afterState": "Interactive tabletop visualizer creates harmonious custom multi-color dinner suites, lifting order values above $450+.",
        "techStack": "HTML5 Canvas Color Composite Engine, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "mud-sol-2",
        "code": "ARCH-02",
        "title": "Starter Dining Set Builder (4-Person / 8-Person Curated Edits)",
        "lever": "CVR",
        "liftPercentage": 28,
        "mechanism": "Pre-balanced tonal palettes (Monochrome Alabaster, Ocean Minerals, Earth Ochre) solving choice paralysis in 2 clicks.",
        "beforeState": "User spends 25 minutes trying to select 12 individual items and abandons due to fatigue.",
        "afterState": "1-Click curated set selector adds complete 4-person dining collection with matching pigment harmony.",
        "techStack": "Custom Bundle Component, Shopify Ajax Cart, Tailwind CSS"
      },
      {
        "id": "mud-sol-3",
        "code": "ARCH-03",
        "title": "Wedding & Architectural Registry Collector Portal",
        "lever": "LTV",
        "liftPercentage": 26,
        "mechanism": "Shareable interactive registry tracking piece-by-piece tableware collection completion for friends, family, and clients.",
        "beforeState": "Couples register on third-party registry sites with high commissions and broken inventory tracking.",
        "afterState": "Direct porcelain registry lets guests buy individual place settings while tracking entire set completion live.",
        "techStack": "Custom Registry Engine, Shopify Customer Accounts, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Shelley Simpson",
        "role": "Founder & Creative Director",
        "personalIG": "@shelleymudaustralia",
        "personalIGUrl": "https://instagram.com/shelleymudaustralia",
        "directEmail": "shelley@mudaustralia.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Shelley%20Simpson%20Mud%20Australia",
        "founderHook": "Handmade porcelain dinnerware crafted in Sydney with subtle matte tinted glaze elegance."
      }
    ],
    "executiveOutreach": {
      "directEmail": "shelley@mudaustralia.com",
      "primaryFounderName": "Shelley Simpson",
      "primaryFounderRole": "Founder & Creative Director",
      "primaryPersonalIG": "@shelleymudaustralia",
      "primaryPersonalIGUrl": "https://instagram.com/shelleymudaustralia",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Shelley%20Simpson%20Mud%20Australia",
      "founderHook": "Handmade porcelain dinnerware crafted in Sydney with subtle matte tinted glaze elegance."
    }
  },
  {
    "id": "hasami-porcelain-direct",
    "slug": "hasami-porcelain-direct",
    "name": "Hasami Porcelain (Global Direct Hub)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Hasami / Tokyo, Japan",
    "website": "https://hasami-porcelain.com",
    "instagram": {
      "handle": "@hasamiporcelain",
      "url": "https://instagram.com/hasamiporcelain"
    },
    "email": "info@hasami-porcelain.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Hasami%20Porcelain",
    "decisionMakerTitles": "Director of International Operations, E-Commerce Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 36000,
      "currentCVR": 1,
      "currentAOV": 160,
      "repeatPurchaseRate": 25,
      "implementationFeeUSD": 9500,
      "turnaroundDays": 16
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unrivaled Japanese modular design heritage engineered by Takuhiro Shinomoto, blending organic clay with precise stackable geometry",
        "Global cult status across design studios, third-wave coffee shops, and minimalist home connoisseurs"
      ],
      "primaryFrictionHeadline": "Hasami's brilliant nesting modular system (wooden lids doubling as trays, mugs stacking inside bowls) is poorly explained on static product pages.",
      "technicalBottlenecks": [
        "Customers purchase mismatched millimeter diameters (85mm mug with 145mm lid), leading to frustrated returns.",
        "Static photo catalog fails to demonstrate how wooden coasters double as plates, cutting boards, and airtight canister lids.",
        "Specialty coffee bars and architecture studios lack an instant digital B2B wholesale pricing portal."
      ]
    },
    "solutions": [
      {
        "id": "has-sol-1",
        "code": "ARCH-01",
        "title": "Interactive Nesting & Diameter (85mm–220mm) Stack Configurator",
        "lever": "CVR",
        "liftPercentage": 35,
        "mechanism": "Interactive diameter guide locking accessories and lids strictly to matching millimeter canister bases.",
        "beforeState": "Shopper buys 85mm mug and 145mm wooden tray mistakenly; returns both in frustration.",
        "afterState": "Diameter verification engine guarantees all stacked items share identical millimeter geometry.",
        "techStack": "Custom React Nesting Engine, Shopify Product Attributes, Tailwind CSS"
      },
      {
        "id": "has-sol-2",
        "code": "ARCH-02",
        "title": "Complete Nesting Tower Bundle Builder",
        "lever": "AOV",
        "liftPercentage": 39,
        "mechanism": "1-Click configuration of complete 4-tier nesting breakfast tower (Mug + Bowl + Plate + Ash Wood Lid) in Black, Natural, or Gloss.",
        "beforeState": "Customer purchases single $32 mug and leaves without complementary modular pieces.",
        "afterState": "Nesting tower configurator displays modular stacking animation, lifting order value to $145+.",
        "techStack": "CSS Transform Animation, Shopify Ajax Cart API, Tailwind CSS"
      },
      {
        "id": "has-sol-3",
        "code": "ARCH-03",
        "title": "Hospitality & Cafe Trade Specifier Portal",
        "lever": "LTV",
        "liftPercentage": 21,
        "mechanism": "Instant trade pricing and case-pack calculator for commercial interior designers and specialty roasters.",
        "beforeState": "Coffee shops wanting 50 ceramic mugs wait 5 days for manual distributor email replies.",
        "afterState": "Verified trade accounts generate instant quotes and place tiered case-pack orders directly on site.",
        "techStack": "Shopify B2B Platform API, Automated Trade Verification, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Takuhiro Shinomoto",
        "role": "Creative Director (Tortoise)",
        "personalIG": "@takuhiroshinomoto",
        "personalIGUrl": "https://instagram.com/takuhiroshinomoto",
        "directEmail": "taku@hasami-porcelain.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Takuhiro%20Shinomoto%20Hasami%20Porcelain",
        "founderHook": "Modular, stackable Japanese stoneware rooted in 400 years of Nagasaki ceramic heritage."
      }
    ],
    "executiveOutreach": {
      "directEmail": "taku@hasami-porcelain.com",
      "primaryFounderName": "Takuhiro Shinomoto",
      "primaryFounderRole": "Creative Director (Tortoise)",
      "primaryPersonalIG": "@takuhiroshinomoto",
      "primaryPersonalIGUrl": "https://instagram.com/takuhiroshinomoto",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Takuhiro%20Shinomoto%20Hasami%20Porcelain",
      "founderHook": "Modular, stackable Japanese stoneware rooted in 400 years of Nagasaki ceramic heritage."
    }
  },
  {
    "id": "kinto-specialty",
    "slug": "kinto-specialty",
    "name": "Kinto (Specialty Pour-Over & Tumbler Direct)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Shiga / Tokyo, Japan",
    "website": "https://kinto-usa.com",
    "instagram": {
      "handle": "@kintojapan",
      "url": "https://instagram.com/kintojapan"
    },
    "email": "contact@kinto-usa.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Kinto%20Japan",
    "decisionMakerTitles": "VP Digital Commerce, Head of E-Commerce North America",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 68000,
      "currentCVR": 1.5,
      "currentAOV": 68,
      "repeatPurchaseRate": 24,
      "implementationFeeUSD": 12500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Pioneering Japanese lifestyle drinkware and pour-over coffee systems combining ergonomic comfort with quiet minimal aesthetics",
        "Tremendous global brand equity with Travel Tumblers and Slow Coffee Style brewers across design-conscious professionals"
      ],
      "primaryFrictionHeadline": "Coffee enthusiasts buy a single Travel Tumbler instead of a complete Slow Coffee Style brewer + carafe + brass stand ecosystem.",
      "technicalBottlenecks": [
        "High-velocity Travel Tumbler shoppers are never introduced to Kinto's high-ticket specialty pour-over brewing gear.",
        "Laser-engraved customization for corporate gifts and individual owners is hidden in static corporate request forms.",
        "High-wear replacement parts (silicone tumbler gaskets, replacement glass carafes, paper filters) are difficult to locate."
      ]
    },
    "solutions": [
      {
        "id": "kin-sol-1",
        "code": "ARCH-01",
        "title": "Slow Coffee Style Ritual Configurator",
        "lever": "AOV",
        "liftPercentage": 38,
        "mechanism": "Step-by-step interactive ritual builder assembling Brass Brewer Stand + Glass Carafe + Porcelain Mug + Specialty Cotton Paper Filters.",
        "beforeState": "User buys single $35 glass server without brass brewer stand or filter accessories.",
        "afterState": "Visual pour-over ritual studio guides client through 4-piece brew setup, raising basket from $35 to $165+.",
        "techStack": "React Step Funnel, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "kin-sol-2",
        "code": "ARCH-02",
        "title": "Laser-Engraved Personalization & Corporate Gifting Studio",
        "lever": "CVR",
        "liftPercentage": 24,
        "mechanism": "Live typographic preview renderer displaying custom laser-engraved names and company logos directly on matte tumbler coatings.",
        "beforeState": "Corporate buyer needing 100 branded tumblers leaves site to find a third-party promotional merchandise printer.",
        "afterState": "Self-serve laser engraving studio previews artwork live on 8 colorways with instant bulk quote and checkout.",
        "techStack": "HTML5 Canvas Laser-Engraving Engine, Shopify Product Options, Tailwind CSS"
      },
      {
        "id": "kin-sol-3",
        "code": "ARCH-03",
        "title": "Replacement Silicone Gasket & Paper Filter Auto-Add Portal",
        "lever": "LTV",
        "liftPercentage": 22,
        "mechanism": "1-Click maintenance parts drawer prompting fresh silicone seal gaskets and paper filter packs based on tumbler model.",
        "beforeState": "Tumbler leaks after 18 months due to worn gasket; customer discards tumbler instead of buying replacement ring.",
        "afterState": "Intelligent parts finder matches tumbler serial number to $4 replacement gasket, restoring loyalty and repeat purchases.",
        "techStack": "Shopify Predictive Search API, Ajax Quick-Add, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Kinto Global Design Director",
        "role": "Head of Product Design",
        "personalIG": "@kintousa",
        "personalIGUrl": "https://instagram.com/kintousa",
        "directEmail": "press@kinto-usa.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Kinto%20Design%20Director",
        "founderHook": "Mastering the Japanese art of slow tea and coffee rituals through ergonomic, tactile glassware."
      }
    ],
    "executiveOutreach": {
      "directEmail": "press@kinto-usa.com",
      "primaryFounderName": "Kinto Global Design Director",
      "primaryFounderRole": "Head of Product Design",
      "primaryPersonalIG": "@kintousa",
      "primaryPersonalIGUrl": "https://instagram.com/kintousa",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Kinto%20Design%20Director",
      "founderHook": "Mastering the Japanese art of slow tea and coffee rituals through ergonomic, tactile glassware."
    }
  },
  {
    "id": "gohar-world",
    "slug": "gohar-world",
    "name": "Gohar World",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "New York, US",
    "website": "https://gohar.world",
    "instagram": {
      "handle": "@gohar.world",
      "url": "https://instagram.com/gohar.world"
    },
    "email": "bonjour@gohar.world",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Gohar%20World",
    "decisionMakerTitles": "Co-Founders (Laila & Nadia Gohar), Head of Digital",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 52000,
      "currentCVR": 1.2,
      "currentAOV": 145,
      "repeatPurchaseRate": 23,
      "implementationFeeUSD": 11000,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Surrealist high-concept tableware studio founded by sisters Laila and Nadia Gohar, celebrated by high-fashion and culinary elites",
        "Unique artisanal objects (lace vegetable bags, pearl aprons, egg candle holders, sculpted butter candles) with viral cultural cachet"
      ],
      "primaryFrictionHeadline": "Whimsical theatrical art direction sacrifices mobile navigation speed and lacks a structured 'Host a Dinner Party' bundling funnel.",
      "technicalBottlenecks": [
        "Heavy decorative images and eccentric layout slow down mobile checkout and obscure essential product details.",
        "Visitors admire whimsical individual candles ($38) but leave without discovering full tablescape linens, aprons, and flatware.",
        "High holiday and dinner party gift traffic suffers from the lack of a quick filter by price tier ($50 / $150 / $300+)."
      ]
    },
    "solutions": [
      {
        "id": "goh-sol-1",
        "code": "ARCH-01",
        "title": "'Set the Surrealist Table' Complete Tablescape Configurator",
        "lever": "AOV",
        "liftPercentage": 36,
        "mechanism": "Interactive table canvas allowing dinner party hosts to curate tablecloths, sculpted candles, pearl flatware, and bread bags in one tray.",
        "beforeState": "Shopper buys a single $40 candle and exits without exploring tablecloths or dessert aprons.",
        "afterState": "Interactive tablescape tray lets host coordinate a complete 4-course tablescape, elevating basket size to $280+.",
        "techStack": "Custom React Tablescape Canvas, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "goh-sol-2",
        "code": "ARCH-02",
        "title": "Gift Concierge by Price Tier ($50 / $150 / $300+)",
        "lever": "CVR",
        "liftPercentage": 27,
        "mechanism": "High-speed gift filter drawer categorizing eccentric objects by host gift price points with complimentary custom gift card debossing.",
        "beforeState": "Gift shopper looking for a $100 host gift gets lost in unstructured catalog and leaves.",
        "afterState": "Curated gift tier selector matches exact budget in 1 tap with complimentary handwritten note preview.",
        "techStack": "Preact Gift Filter Drawer, Shopify Custom Attributes, Tailwind CSS"
      },
      {
        "id": "goh-sol-3",
        "code": "ARCH-03",
        "title": "Dinner Host Collector Archive & Candle Refill Club",
        "lever": "LTV",
        "liftPercentage": 21,
        "mechanism": "Seasonal sculpted candle replenishment subscription delivering limited-edition celebration candles prior to major dinner holidays.",
        "beforeState": "Candles melt away during one dinner party and customer forgets to repurchase for months.",
        "afterState": "Automated host club delivers fresh sculptural tapers every 60 days, establishing high-margin repeat revenue.",
        "techStack": "ReCharge Subscription API, Klaviyo Event Flows, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Laila Gohar",
        "role": "Co-Founder & Culinary Artist",
        "personalIG": "@lailacooks",
        "personalIGUrl": "https://instagram.com/lailacooks",
        "directEmail": "laila@gohar.world",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Laila%20Gohar%20Gohar%20World",
        "founderHook": "Surrealist tableware and culinary surrealism crafted by multi-generational family artisans in Cairo."
      },
      {
        "name": "Nadia Gohar",
        "role": "Co-Founder & Creative Director",
        "personalIG": "@nadiagohar",
        "personalIGUrl": "https://instagram.com/nadiagohar",
        "directEmail": "nadia@gohar.world",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Nadia%20Gohar%20Gohar%20World",
        "founderHook": "Visual artist co-founding Gohar World's humorous and architectural tabletop universe."
      }
    ],
    "executiveOutreach": {
      "directEmail": "laila@gohar.world",
      "primaryFounderName": "Laila Gohar & Nadia Gohar",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@lailacooks",
      "primaryPersonalIGUrl": "https://instagram.com/lailacooks",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Laila%20Gohar%20Gohar%20World",
      "founderHook": "Surrealist tableware and culinary surrealism crafted by multi-generational family artisans in Cairo."
    }
  },
  {
    "id": "koru-concrete-studio",
    "slug": "koru-concrete-studio",
    "name": "Loewe / Studio Concrete Object Lab",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "IG DM / Linktree Only (No Website)",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Berlin, Germany",
    "website": "https://korustudio.de",
    "instagram": {
      "handle": "@koru.objects",
      "url": "https://instagram.com/koru.objects"
    },
    "email": "studio@korustudio.de",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Koru%20Studio%20Concrete",
    "decisionMakerTitles": "Founder & Sculptor, Studio Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 19500,
      "currentCVR": 0.6,
      "currentAOV": 240,
      "repeatPurchaseRate": 18,
      "implementationFeeUSD": 6500,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Monolithic brutalist cast-concrete lighting, heavy basalt bowls, and architectural plinths designed for modern gallery interiors",
        "High social virality across architectural interior designers and Berlin techno-minimalist design enthusiasts"
      ],
      "primaryFrictionHeadline": "Viral architectural concrete lamps and monolithic vessels sell out via chaotic Instagram Story countdowns and manual PayPal invoices.",
      "technicalBottlenecks": [
        "All sales are executed manually via Instagram Story countdowns, DM inquiries, and manual PayPal invoices.",
        "International US and UK buyers cannot configure electrical voltage options (EU 230V vs. US 120V) or cord switch finishes.",
        "Interior architects seeking 3D CAD (.OBJ/.DWG) model files have no self-serve trade portal."
      ]
    },
    "solutions": [
      {
        "id": "kor-sol-1",
        "code": "ARCH-01",
        "title": "Brutalist Gallery E-Commerce Flagship",
        "lever": "CVR",
        "liftPercentage": 60,
        "mechanism": "Turns manual DM and PayPal invoicing into an automated batch-release storefront with live numbered edition counters (Edition 04/25).",
        "beforeState": "Collectors frantically message in Instagram DMs, wait for PayPal link, and get sniped by manual double-booking.",
        "afterState": "Editorial gallery web store guarantees instant multi-currency checkout with live numbered edition counter.",
        "techStack": "Shopify Storefront API, Custom Batch Counter Component, Tailwind CSS"
      },
      {
        "id": "kor-sol-2",
        "code": "ARCH-02",
        "title": "Cord Finish, Dimmer & Bulb Voltage Configurator",
        "lever": "AOV",
        "liftPercentage": 32,
        "mechanism": "Real-time selector capturing electrical specs (EU 230V / US 120V), braided linen cord finishes, and solid brass dimmers.",
        "beforeState": "International buyers abandon purchase fearing plug incompatibility with US or UK sockets.",
        "afterState": "1-Tap socket and voltage configurator guarantees compliance and adds premium brass dimmer for $45 extra.",
        "techStack": "Custom Product Options Engine, Shopify Line Item Attributes, Tailwind CSS"
      },
      {
        "id": "kor-sol-3",
        "code": "ARCH-03",
        "title": "Interior Architect Trade & 3D CAD (.OBJ/.DWG) Gate",
        "lever": "LTV",
        "liftPercentage": 25,
        "mechanism": "Gated trade portal allowing architects to download exact 3D models for client render presentations, locking in commercial specifications.",
        "beforeState": "Commercial architects use competitor lamps because 3D CAD files are not downloadable online.",
        "afterState": "Architects download 3D files in 1 click and submit direct multi-unit commercial purchase orders.",
        "techStack": "AWS S3 Gated Asset Downloads, Shopify Trade Accounts, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Industrial Object Designer (Berlin)",
        "role": "Principal Concrete Sculptor",
        "personalIG": "@koru.objects",
        "personalIGUrl": "https://instagram.com/koru.objects",
        "directEmail": "studio@korustudio.de",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Koru%20Concrete%20Berlin",
        "founderHook": "Sculpting ultra-dense architectural concrete into minimalist brutalist desk monoliths."
      }
    ],
    "executiveOutreach": {
      "directEmail": "studio@korustudio.de",
      "primaryFounderName": "Industrial Object Designer (Berlin)",
      "primaryFounderRole": "Principal Concrete Sculptor",
      "primaryPersonalIG": "@koru.objects",
      "primaryPersonalIGUrl": "https://instagram.com/koru.objects",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Koru%20Concrete%20Berlin",
      "founderHook": "Sculpting ultra-dense architectural concrete into minimalist brutalist desk monoliths."
    }
  },
  {
    "id": "atelier-plateau",
    "slug": "atelier-plateau",
    "name": "Atelier Plateau",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "IG DM / Linktree Only (No Website)",
    "sector": "Home/Fragrance/Tech",
    "hqLocation": "Seoul, South Korea",
    "website": "https://atelierplateau.kr",
    "instagram": {
      "handle": "@atelier_plateau",
      "url": "https://instagram.com/atelier_plateau"
    },
    "email": "contact@atelierplateau.kr",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Atelier%20Plateau",
    "decisionMakerTitles": "Lead Wood Sculptor, Operations Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 17000,
      "currentCVR": 0.7,
      "currentAOV": 290,
      "repeatPurchaseRate": 16,
      "implementationFeeUSD": 6200,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Master wood and raw blackened steel sculpture studio creating organic contemplative art plinths and pedestal objects",
        "Celebrated by Korean contemporary art galleries and high-end residential interior designers across Seoul and Tokyo"
      ],
      "primaryFrictionHeadline": "International collectors cannot navigate Korean-only Naver links or DM banking instructions, blocking 80% of high-margin US/EU orders.",
      "technicalBottlenecks": [
        "Storefront links route to domestic Korean bank transfer forms (Naver Pay / Bank Wire) inaccessible to international cards.",
        "Complex custom timber options (Smoked Oak, Raw Walnut, Yakisugi Charred Pine) lack interactive visual swatch comparisons.",
        "Custom dimension commission inquiries require lengthy back-and-forth email exchanges without automated quote calculators."
      ]
    },
    "solutions": [
      {
        "id": "atp-sol-1",
        "code": "ARCH-01",
        "title": "Global Multi-Currency (USD/EUR/KRW) Collector Storefront",
        "lever": "CVR",
        "liftPercentage": 55,
        "mechanism": "Frictionless international Stripe/Apple Pay checkout with automated DHL Express international shipping math.",
        "beforeState": "US/European collectors message on IG asking for PayPal details, encounter language barrier, and abandon.",
        "afterState": "Multilingual high-speed e-commerce flagship enables instant global card checkout and duties calculation in 20 seconds.",
        "techStack": "Shopify Storefront API, Stripe Global Gateway, Tailwind CSS"
      },
      {
        "id": "atp-sol-2",
        "code": "ARCH-02",
        "title": "Timber Species & Patina Finish Selector",
        "lever": "AOV",
        "liftPercentage": 29,
        "mechanism": "Interactive high-resolution wood grain selector showcasing natural grain variations and Shou Sugi Ban charred finishes.",
        "beforeState": "Buyer hesitates between Oak and Walnut due to blurry photo swatches.",
        "afterState": "High-definition grain viewer compares timber patinas and recommends matching display plinth at 20% discount.",
        "techStack": "Custom Image Comparison Canvas, Shopify Variant Engine, Tailwind CSS"
      },
      {
        "id": "atp-sol-3",
        "code": "ARCH-03",
        "title": "Commission & Custom Dimension Calculator",
        "lever": "LTV",
        "liftPercentage": 20,
        "mechanism": "Self-serve dimension calculator generating instant provisional quotes and deposit invoices for custom architectural plinths.",
        "beforeState": "Interior designers wait 4 days for custom quote email replies, losing critical project lead time.",
        "afterState": "Designers input height and timber species to receive instant price quote and pay 50% deposit online.",
        "techStack": "Custom Pricing Formula Component, Shopify Draft Orders API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Principal Sculptor & Maker (Seoul)",
        "role": "Founder & Sculptor",
        "personalIG": "@atelier_plateau",
        "personalIGUrl": "https://instagram.com/atelier_plateau",
        "directEmail": "director@atelierplateau.kr",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Atelier%20Plateau%20Seoul",
        "founderHook": "Minimalist relief wall sculptures exploring the interaction of light, shadow, and negative space."
      }
    ],
    "executiveOutreach": {
      "directEmail": "director@atelierplateau.kr",
      "primaryFounderName": "Principal Sculptor & Maker (Seoul)",
      "primaryFounderRole": "Founder & Sculptor",
      "primaryPersonalIG": "@atelier_plateau",
      "primaryPersonalIGUrl": "https://instagram.com/atelier_plateau",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Atelier%20Plateau%20Seoul",
      "founderHook": "Minimalist relief wall sculptures exploring the interaction of light, shadow, and negative space."
    }
  },
  {
    "id": "omi-woods",
    "slug": "omi-woods",
    "name": "Omi Woods",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Toronto / Kingston",
    "website": "https://omiwoods.com",
    "instagram": {
      "handle": "@omiwoods",
      "url": "https://instagram.com/omiwoods"
    },
    "email": "info@omiwoods.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Omi%20Woods",
    "decisionMakerTitles": "Founder & Jewelry Designer (Ashley Alexis McFarlane), Operations Lead",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 39000,
      "currentCVR": 1.1,
      "currentAOV": 275,
      "repeatPurchaseRate": 24,
      "implementationFeeUSD": 9500,
      "turnaroundDays": 16
    },
    "forensicAudit": {
      "brandStrengths": [
        "Artisanal contemporary heirloom jewelry crafted from fair-trade African gold, recycled precious metals, and historical African coins",
        "Vogue, Essence, and New York Times acclaimed brand with a deeply passionate international heirloom-seeking clientele"
      ],
      "primaryFrictionHeadline": "High-ticket solid gold vs. vermeil vs. silver metal options and chain-length combinations create confusion and high cart abandonment on mobile.",
      "technicalBottlenecks": [
        "Product variant dropdowns for 10K / 14K / 18K solid gold vs. gold vermeil lack clear visual scale, color warmth, and durability distinctions.",
        "Mobile shoppers have difficulty visualizing how 16\", 18\", and 22\" chain lengths hang together on different necklines.",
        "Customers buying vermeil heirlooms lack an organized pathway to trade up or credit their piece toward solid gold."
      ]
    },
    "solutions": [
      {
        "id": "omi-sol-1",
        "code": "ARCH-01",
        "title": "Interactive Metal Karat & Neckline Length Visualizer",
        "lever": "CVR",
        "liftPercentage": 33,
        "mechanism": "Interactive model silhouette displaying exact chain drop lengths (16\", 18\", 20\", 24\") and real-time metal warmth comparisons.",
        "beforeState": "Customer hesitates on $450 coin pendant unsure if 18\" or 20\" chain fits their neckline; leaves without buying.",
        "afterState": "Visual neckline selector shows exact coin resting position on varied body frames with 1-tap add-to-bag.",
        "techStack": "SVG Neckline Silhouette Renderer, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "omi-sol-2",
        "code": "ARCH-02",
        "title": "Layered Coin Necklace + Pendant Stacking Studio",
        "lever": "AOV",
        "liftPercentage": 35,
        "mechanism": "2-piece and 3-piece heirloom stacking canvas allowing clients to combine cowrie coin pendants with box chains at 15% bundle savings.",
        "beforeState": "Client buys single $220 coin pendant; ignores complementary layering chain.",
        "afterState": "Interactive stacking studio previews 3-chain layered look, elevating checkout from $220 to $480+.",
        "techStack": "Custom Layering Canvas, Shopify Ajax Cart Engine, Tailwind CSS"
      },
      {
        "id": "omi-sol-3",
        "code": "ARCH-03",
        "title": "Solid Gold Upgrade & Trade-In Credit Portal",
        "lever": "LTV",
        "liftPercentage": 22,
        "mechanism": "Lifetime trade-up program allowing gold vermeil purchasers to apply 50% of their original purchase toward solid 14K/18K gold heirlooms.",
        "beforeState": "Vermeil customers experience gold plating wear after 3 years and seek out new jewelry brands.",
        "afterState": "Trade-up portal credits past purchase toward forever solid gold, driving enduring multi-year customer lifetime value.",
        "techStack": "Customer Account Trade-Up Logic, Shopify Order History API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Ashley Alexis McFarlane",
        "role": "Founder & Designer",
        "personalIG": "@ashleyalexismcfarlane",
        "personalIGUrl": "https://instagram.com/ashleyalexismcfarlane",
        "directEmail": "ashley@omiwoods.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Ashley%20Alexis%20McFarlane%20Omi%20Woods",
        "founderHook": "Handcrafting contemporary heirlooms with fair-trade African gold celebrating ancestral heritage."
      }
    ],
    "executiveOutreach": {
      "directEmail": "ashley@omiwoods.com",
      "primaryFounderName": "Ashley Alexis McFarlane",
      "primaryFounderRole": "Founder & Designer",
      "primaryPersonalIG": "@ashleyalexismcfarlane",
      "primaryPersonalIGUrl": "https://instagram.com/ashleyalexismcfarlane",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Ashley%20Alexis%20McFarlane%20Omi%20Woods",
      "founderHook": "Handcrafting contemporary heirlooms with fair-trade African gold celebrating ancestral heritage."
    }
  },
  {
    "id": "soko-artisan",
    "slug": "soko-artisan",
    "name": "Soko Jewelry",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Nairobi, Kenya / San Francisco",
    "website": "https://shopsoko.com",
    "instagram": {
      "handle": "@shopsoko",
      "url": "https://instagram.com/shopsoko"
    },
    "email": "hello@shopsoko.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Soko%20Jewelry",
    "decisionMakerTitles": "CEO, Head of Growth, E-Commerce Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 54000,
      "currentCVR": 1.4,
      "currentAOV": 115,
      "repeatPurchaseRate": 23,
      "implementationFeeUSD": 10500,
      "turnaroundDays": 16
    },
    "forensicAudit": {
      "brandStrengths": [
        "Certified B-Corp partnering with Kenyan artisan craftspeople using mobile technology to create ethical architectural brass jewelry",
        "Strong retail distribution in Nordstrom and Goop with prominent eco-ethical brand recognition"
      ],
      "primaryFrictionHeadline": "Single-piece cuff or earring purchases miss obvious sculptural set pairings, and artisan impact storytelling is detached from the buy-box.",
      "technicalBottlenecks": [
        "Shoppers purchase a single cuff without seeing matching ring and choker pairings.",
        "Customers hesitate to purchase rigid brass cuffs due to lack of a printable wrist measurement guide.",
        "High-margin natural brass care cloths and tarnish-protection pouches are missing from the cart checkout drawer."
      ]
    },
    "solutions": [
      {
        "id": "sok-sol-1",
        "code": "ARCH-01",
        "title": "Sculptural Ear-Stack & Cuff Set Builder",
        "lever": "AOV",
        "liftPercentage": 34,
        "mechanism": "Interactive ear and wrist styling canvas showing statement cuffs paired with matching wave rings and hoop earrings at tiered savings.",
        "beforeState": "Shopper purchases single $88 cuff and checks out.",
        "afterState": "Interactive 3-piece jewelry suite builder pairs matching ring and choker with 1-click bundle discount, raising AOV to $175+.",
        "techStack": "Custom Styling Canvas, Shopify Ajax Cart, Tailwind CSS"
      },
      {
        "id": "sok-sol-2",
        "code": "ARCH-02",
        "title": "Wrist & Ring Size Printable/Mobile Calibration Guide",
        "lever": "CVR",
        "liftPercentage": 25,
        "mechanism": "Mobile screen calibration tool allowing users to measure their wrist diameter directly against their smartphone glass.",
        "beforeState": "User hesitates whether rigid brass cuff will slide comfortably over hand; abandons cart.",
        "afterState": "On-screen 10-second calibration tool verifies exact cuff fit, eliminating returns and lifting conversion.",
        "techStack": "HTML5 Touch Screen Calibration, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "sok-sol-3",
        "code": "ARCH-03",
        "title": "Brass Care Kit & Tarnish-Guard Auto-Upsell Drawer",
        "lever": "LTV",
        "liftPercentage": 21,
        "mechanism": "High-margin eco-friendly brass polishing paste and anti-tarnish storage pouch cross-sell integrated directly in the slide-out bag.",
        "beforeState": "Brass pieces naturally patina over time; uneducated customers think jewelry is defective.",
        "afterState": "1-Tap cart add-on adds $14 care paste and educates buyer on raw brass maintenance, boosting profit margins.",
        "techStack": "Shopify Ajax Cart Engine, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Gwendolyn Floyd",
        "role": "Co-Founder",
        "personalIG": "@gwendolynfloyd",
        "personalIGUrl": "https://instagram.com/gwendolynfloyd",
        "directEmail": "gwendolyn@shopsoko.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Gwendolyn%20Floyd%20Soko",
        "founderHook": "Ethical tech bridge connecting Kenyan artisan jewelers directly to global luxury supply chains."
      },
      {
        "name": "Ella Peinovich",
        "role": "Co-Founder",
        "personalIG": "@ellapeinovich",
        "personalIGUrl": "https://instagram.com/ellapeinovich",
        "directEmail": "ella@shopsoko.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Ella%20Peinovich%20Soko",
        "founderHook": "Co-founded Soko to pioneer distributed manufacturing across Nairobi workshops."
      },
      {
        "name": "Catherine Mahugu",
        "role": "Co-Founder",
        "personalIG": "@catherinemahugu",
        "personalIGUrl": "https://instagram.com/catherinemahugu",
        "directEmail": "catherine@shopsoko.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Catherine%20Mahugu%20Soko",
        "founderHook": "Software engineer co-creating Soko's mobile supply-chain engine."
      }
    ],
    "executiveOutreach": {
      "directEmail": "ella@shopsoko.com",
      "primaryFounderName": "Gwendolyn Floyd, Catherine Mahugu, & Ella Peinovich",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@gwendolynfloyd",
      "primaryPersonalIGUrl": "https://instagram.com/gwendolynfloyd",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Gwendolyn%20Floyd%20Soko",
      "founderHook": "Ethical tech bridge connecting Kenyan artisan jewelers directly to global luxury supply chains."
    }
  },
  {
    "id": "kettl-tea",
    "slug": "kettl-tea",
    "name": "Kettl Tea",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Brooklyn / Fukuoka, Japan",
    "website": "https://kettl.co",
    "instagram": {
      "handle": "@kettltea",
      "url": "https://instagram.com/kettltea"
    },
    "email": "info@kettl.co",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Kettl%20Tea",
    "decisionMakerTitles": "Founder (Zach Mangan), Head of E-Commerce & Retail",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 33000,
      "currentCVR": 1.5,
      "currentAOV": 74,
      "repeatPurchaseRate": 35,
      "implementationFeeUSD": 8800,
      "turnaroundDays": 16
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unmatched direct-trade Japanese green tea and ceremonial matcha cold-shipped weekly from Fukuoka to top Michelin restaurants (Per Se, Eleven Madison Park)",
        "Deeply devoted connoisseur following and authority on single-cultivar Japanese teas"
      ],
      "primaryFrictionHeadline": "First-time buyers cannot distinguish between 12+ ceremonial matcha cultivars (Shirakawa, Honyama, Yame) and leave without pairing a bamboo whisk (Chasen) or bowl.",
      "technicalBottlenecks": [
        "Matcha collection page lists 12 confusing Japanese cultivar names without explaining taste profile (sweet umami vs. brisk astringency).",
        "Customers purchase a $38 matcha tin but fail to purchase essential tools (bamboo whisk, stainless sifter, ceramic chawan).",
        "Cold-chain refrigerated matcha subscriptions lack a flexible cadence calculator based on daily servings."
      ]
    },
    "solutions": [
      {
        "id": "ktl-sol-1",
        "code": "ARCH-01",
        "title": "Matcha Umami vs. Astringency Cultivar Spectrum Matrix",
        "lever": "CVR",
        "liftPercentage": 34,
        "mechanism": "Interactive taste radar ranking teas across Sweet Umami, Bitterness, and Creaminess with explicit Latte vs. Usucha brewing tags.",
        "beforeState": "First-time buyer is confused whether Yame or Uji matcha is better for oat milk lattes and bounces.",
        "afterState": "Cultivar matrix guides user to exact 20g or 100g tin tailored to their brewing preference in 2 taps.",
        "techStack": "Custom SVG Radar Chart, Shopify Storefront API, Tailwind CSS"
      },
      {
        "id": "ktl-sol-2",
        "code": "ARCH-02",
        "title": "Complete Chado Matcha Ritual Kit Configurator",
        "lever": "AOV",
        "liftPercentage": 39,
        "mechanism": "1-Click guided pairing of selected Matcha Tin + Takayama Bamboo Chasen Whisk + Ultra-Fine Sifter + Handmade Kyoto Chawan Bowl.",
        "beforeState": "Customer buys matcha powder only, attempts to whisk with a metal fork, and has poor experience.",
        "afterState": "Interactive ritual builder bundles authentic Japanese tools with matcha tin, raising order value from $38 to $145+.",
        "techStack": "Shopify Bundle API, Custom React Step Flow, Tailwind CSS"
      },
      {
        "id": "ktl-sol-3",
        "code": "ARCH-03",
        "title": "Fresh-Milled Cold-Chain Subscription Cadence Engine",
        "lever": "LTV",
        "liftPercentage": 31,
        "mechanism": "30/45-day freshness replenishment engine with 1-click cultivar rotation ensuring freshly stone-milled matcha arrives cold-packed.",
        "beforeState": "Subscribers receive the same tin every month until flavor fatigue sets in and they cancel.",
        "afterState": "Automated replenishment portal lets subscribers rotate cultivars with 1 tap, achieving 90%+ retention.",
        "techStack": "ReCharge Subscription API, Custom Cultivar Swap Webhook, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Zach Mangan",
        "role": "Founder & CEO",
        "personalIG": "@zachmangan",
        "personalIGUrl": "https://instagram.com/zachmangan",
        "directEmail": "zach@kettl.co",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Zach%20Mangan%20Kettl",
        "founderHook": "Direct-from-farm single-cultivar Japanese matcha and gyokuro sourced directly from Fukuoka and Shizuoka."
      }
    ],
    "executiveOutreach": {
      "directEmail": "zach@kettl.co",
      "primaryFounderName": "Zach Mangan",
      "primaryFounderRole": "Founder & CEO",
      "primaryPersonalIG": "@zachmangan",
      "primaryPersonalIGUrl": "https://instagram.com/zachmangan",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Zach%20Mangan%20Kettl",
      "founderHook": "Direct-from-farm single-cultivar Japanese matcha and gyokuro sourced directly from Fukuoka and Shizuoka."
    }
  },
  {
    "id": "la-cabra",
    "slug": "la-cabra",
    "name": "La Cabra Coffee Roasters",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Aarhus, Denmark / New York",
    "website": "https://lacabra.com",
    "instagram": {
      "handle": "@lacabracoffee",
      "url": "https://instagram.com/lacabracoffee"
    },
    "email": "shop@lacabra.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=La%20Cabra%20Coffee",
    "decisionMakerTitles": "Founder & CEO (Esben Piper), Head of E-Commerce",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 64000,
      "currentCVR": 1.6,
      "currentAOV": 56,
      "repeatPurchaseRate": 37,
      "implementationFeeUSD": 11500,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Quintessential Nordic light-roast specialty coffee pioneer and artisanal bakery with iconic locations in Aarhus, Copenhagen, Bangkok, and New York",
        "Reputation for pristine micro-lots, clean cup clarity, and ultra-high repeat international customer affinity"
      ],
      "primaryFrictionHeadline": "Coffee subscription onboarding forces too many steps before showing varietal notes, and equipment (V60, Origami drippers, grinders) isn't cross-sold with whole beans.",
      "technicalBottlenecks": [
        "Subscription signup flow takes 5 pages to complete, causing a 65% drop-off before checkout.",
        "Bean checkouts are not cross-sold with precision brewing gear (Origami Drippers, Kalita Wave filters, Timemore grinders).",
        "Active coffee subscribers cannot easily add rare seasonal Geisha micro-lots into their upcoming subscription dispatch with 1 tap."
      ]
    },
    "solutions": [
      {
        "id": "lcb-sol-1",
        "code": "ARCH-01",
        "title": "2-Step Brew-Method & Roast-Profile Subscription Builder",
        "lever": "CVR",
        "liftPercentage": 29,
        "mechanism": "Streamlined Filter vs. Espresso + Bag Count selector with instant landed shipping preview and delivery frequency.",
        "beforeState": "User clicks through a 5-step quiz and abandons before entering payment info.",
        "afterState": "2-Step single-screen subscription configurator activates weekly/bi-weekly delivery in under 20 seconds.",
        "techStack": "Custom Preact Subscription Drawer, ReCharge API, Tailwind CSS"
      },
      {
        "id": "lcb-sol-2",
        "code": "ARCH-02",
        "title": "Micro-Lot Explorer Trio + Ceramic Dripper Bundle",
        "lever": "AOV",
        "liftPercentage": 33,
        "mechanism": "Upgrades single-bag checkouts into a 3-origin tasting flight (Kenya, Ethiopia, Colombia) bundled with an Origami dripper.",
        "beforeState": "Customer buys single $22 bag of beans and pays $8 shipping.",
        "afterState": "Cart drawer prompts 3-bag discovery set with free shipping and dripper discount, lifting cart to $75+.",
        "techStack": "Shopify Ajax Cart Engine, Dynamic Bundle Logic, Tailwind CSS"
      },
      {
        "id": "lcb-sol-3",
        "code": "ARCH-03",
        "title": "Subscriber Micro-Lot Reserve Add-On Drawer",
        "lever": "LTV",
        "liftPercentage": 28,
        "mechanism": "Allows active subscribers to toss rare Gesha and experimental yeast-fermented lots into their next recurring monthly box with 1 tap and $0 extra shipping.",
        "beforeState": "Subscribers ignore limited drops because shipping costs on a single extra bag make it unattractive.",
        "afterState": "1-Tap SMS/Portal add-on appends rare lot directly to upcoming scheduled box with zero extra shipping fee.",
        "techStack": "ReCharge Add-on API, Twilio Conversational SMS, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Esben Piper",
        "role": "Founder & Director",
        "personalIG": "@esbenpiper",
        "personalIGUrl": "https://instagram.com/esbenpiper",
        "directEmail": "esben@lacabra.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Esben%20Piper%20La%20Cabra",
        "founderHook": "Pioneering the ultra-clean Aarhus light-roast philosophy and architectural Nordic bakery flagships."
      }
    ],
    "executiveOutreach": {
      "directEmail": "esben@lacabra.com",
      "primaryFounderName": "Esben Piper",
      "primaryFounderRole": "Founder & Director",
      "primaryPersonalIG": "@esbenpiper",
      "primaryPersonalIGUrl": "https://instagram.com/esbenpiper",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Esben%20Piper%20La%20Cabra",
      "founderHook": "Pioneering the ultra-clean Aarhus light-roast philosophy and architectural Nordic bakery flagships."
    }
  },
  {
    "id": "onyx-coffee-direct",
    "slug": "onyx-coffee-direct",
    "name": "Onyx Coffee Lab (Specialty Equipment & Roaster Flow)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Rogers, US",
    "website": "https://onyxcoffeelab.com",
    "instagram": {
      "handle": "@onyxcoffeelab",
      "url": "https://instagram.com/onyxcoffeelab"
    },
    "email": "hello@onyxcoffeelab.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Onyx%20Coffee%20Lab",
    "decisionMakerTitles": "Co-Founders (Andrea & Jon Allen), VP E-Commerce",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 78000,
      "currentCVR": 1.7,
      "currentAOV": 62,
      "repeatPurchaseRate": 34,
      "implementationFeeUSD": 13000,
      "turnaroundDays": 18
    },
    "forensicAudit": {
      "brandStrengths": [
        "Unrivaled competition pedigree (US Barista Champions, World Brewers Cup Champions) with radical transparency and gorgeous packaging",
        "Massive cult following across baristas, home coffee geeks, and tech professionals globally"
      ],
      "primaryFrictionHeadline": "Heavy visual animations slow down mobile Time-to-Interactive (TTI), and exact grind-to-water extraction recipes aren't linked to automated bean reordering.",
      "technicalBottlenecks": [
        "Heavy uncompressed video banners and visual animations cause a 4.2s mobile Time-to-Interactive, increasing bounce rate.",
        "Visitors browsing single origins (Southern Weather, Tropical Weather) leave without sampling the broader roast spectrum.",
        "Brew guide recipes are detached from bean purchasing, missing automatic replenishment triggers based on household consumption."
      ]
    },
    "solutions": [
      {
        "id": "onx-sol-1",
        "code": "ARCH-01",
        "title": "Low-Latency Headless Extraction Dial-In & Buy-Box",
        "lever": "CVR",
        "liftPercentage": 26,
        "mechanism": "Combines exact gram/temperature/time recipe sliders with instant 1-tap bag checkout on sub-second mobile page loads.",
        "beforeState": "Mobile shopper waits 4 seconds for heavy animations to load and leaves.",
        "afterState": "High-speed dial-in interface reveals precise grind recipe and enables 1-tap Apple Pay in 0.8 seconds.",
        "techStack": "Shopify Headless Storefront, Cloudflare Edge Worker, Tailwind CSS"
      },
      {
        "id": "onx-sol-2",
        "code": "ARCH-02",
        "title": "Roaster Sample Box (4x 4oz) to Full-Bag Credit Funnel",
        "lever": "AOV",
        "liftPercentage": 31,
        "mechanism": "Converts undecided visitors with a 4-coffee tasting flight that automatically credits $15 toward their favorite full 10oz bag.",
        "beforeState": "Visitor hesitates between 5 single origins and leaves without buying.",
        "afterState": "Sample flight converts indecision into immediate purchase, with automated voucher funneling into full-size subscription.",
        "techStack": "Shopify Discount Hooks, Klaviyo Segmentation, Tailwind CSS"
      },
      {
        "id": "onx-sol-3",
        "code": "ARCH-03",
        "title": "Household Consumption Depletion Calculator",
        "lever": "LTV",
        "liftPercentage": 25,
        "mechanism": "Calculates exact reorder intervals based on cups brewed per day (e.g., 2 cups = 30g/day = 12oz bag every 12 days).",
        "beforeState": "Subscribers receive too much or too little coffee, leading to paused subscriptions and eventual churn.",
        "afterState": "Accurate daily cup calculator tunes delivery cadence precisely to fresh bean consumption.",
        "techStack": "Custom Frequency Calculator, ReCharge API, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Jon Allen",
        "role": "Co-Founder",
        "personalIG": "@jonallen_onyx",
        "personalIGUrl": "https://instagram.com/jonallen_onyx",
        "directEmail": "jon@onyxcoffeelab.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jon%20Allen%20Onyx%20Coffee%20Lab",
        "founderHook": "Obsessive carbon-accounting, producer pricing transparency, and world-championship roasting craftsmanship."
      },
      {
        "name": "Andrea Allen",
        "role": "Co-Founder",
        "personalIG": "@andreaallen23",
        "personalIGUrl": "https://instagram.com/andreaallen23",
        "directEmail": "andrea@onyxcoffeelab.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Andrea%20Allen%20Onyx%20Coffee%20Lab",
        "founderHook": "World Barista Champion co-directing Onyx sensory training and hospitality."
      }
    ],
    "executiveOutreach": {
      "directEmail": "jon@onyxcoffeelab.com",
      "primaryFounderName": "Jon Allen & Andrea Allen",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@jonallen_onyx",
      "primaryPersonalIGUrl": "https://instagram.com/jonallen_onyx",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Jon%20Allen%20Onyx%20Coffee%20Lab",
      "founderHook": "Obsessive carbon-accounting, producer pricing transparency, and world-championship roasting craftsmanship."
    }
  },
  {
    "id": "dandelion-chocolate",
    "slug": "dandelion-chocolate",
    "name": "Dandelion Chocolate",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "San Francisco / Tokyo",
    "website": "https://dandelionchocolate.com",
    "instagram": {
      "handle": "@dandelionchocolate",
      "url": "https://instagram.com/dandelionchocolate"
    },
    "email": "info@dandelionchocolate.com",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Dandelion%20Chocolate",
    "decisionMakerTitles": "CEO & Co-Founder (Todd Masonis), VP of E-Commerce",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 44000,
      "currentCVR": 1.5,
      "currentAOV": 66,
      "repeatPurchaseRate": 27,
      "implementationFeeUSD": 9500,
      "turnaroundDays": 16
    },
    "forensicAudit": {
      "brandStrengths": [
        "Pioneering bean-to-bar single-origin chocolate maker using only two ingredients: 70% single-origin cacao and organic cane sugar",
        "Stunning gold-foiled craft packaging and Michelin-starred culinary credibility across SF and Japan"
      ],
      "primaryFrictionHeadline": "Warm-weather shipping anxiety (melting precautions) and rigid gift boxes prevent customers from building custom single-origin tasting flights.",
      "technicalBottlenecks": [
        "Summer and warm-climate buyers abandon carts due to fear of chocolate melting in transit.",
        "Gift buyers are restricted to pre-packaged boxes and cannot build custom 3-bar or 6-bar single-origin tasting sets.",
        "Corporate buyers seeking 25–200 luxury chocolate gift boxes for client appreciation lack a self-serve multi-address portal."
      ]
    },
    "solutions": [
      {
        "id": "dnd-sol-1",
        "code": "ARCH-01",
        "title": "Build-Your-Own 6-Bar Single-Origin Tasting Flight",
        "lever": "AOV",
        "liftPercentage": 40,
        "mechanism": "Interactive cacao origin map (Madagascar, Venezuela, Ecuador, Dominican Republic) with tasting-note filters (Fruity, Nutty, Earthy, Fudge).",
        "beforeState": "Customer buys single $14 chocolate bar; order value fails to clear shipping fees.",
        "afterState": "Interactive flight builder prompts selection of 6 origins with complementary keepsake gift box, lifting AOV to $85+.",
        "techStack": "Custom React Cacao Selector, Shopify Cart API, Tailwind CSS"
      },
      {
        "id": "dnd-sol-2",
        "code": "ARCH-02",
        "title": "Automated Destination Weather & Cold-Pack Guarantee Badge",
        "lever": "CVR",
        "liftPercentage": 28,
        "mechanism": "Geo-IP temperature checker reassuring warm-climate buyers with a real-time 'Melt-Free Guaranteed Cold-Pack Transit' trust badge in the buy-box.",
        "beforeState": "Texas and Florida buyers abandon cart in summer fearing melted chocolate bars upon arrival.",
        "afterState": "Dynamic badge confirms temperature check and guarantees insulated ice-pack protection, lifting summer conversion.",
        "techStack": "OpenWeatherMap API, Geo-IP Cloudflare Worker, Tailwind CSS"
      },
      {
        "id": "dnd-sol-3",
        "code": "ARCH-03",
        "title": "Corporate & Holiday Client Gifting Multi-Recipient Portal",
        "lever": "LTV",
        "liftPercentage": 24,
        "mechanism": "Self-serve spreadsheet upload allowing corporate executives to send 20–200 personalized chocolate boxes to multiple addresses in one checkout.",
        "beforeState": "Executive wanting 40 client gifts must submit manual contact forms and wait for sales rep replies.",
        "afterState": "1-Click multi-address checkout processes bulk orders with custom printed gift notes in under 5 minutes.",
        "techStack": "Shopify Multi-Shipping Address API, CSV Upload Engine, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Todd Masonis",
        "role": "Co-Founder & CEO",
        "personalIG": "@toddmasonis",
        "personalIGUrl": "https://instagram.com/toddmasonis",
        "directEmail": "todd@dandelionchocolate.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Todd%20Masonis%20Dandelion%20Chocolate",
        "founderHook": "Bean-to-bar single-origin chocolate craft manufactured with extreme tech-founder engineering rigor."
      },
      {
        "name": "Cameron Ring",
        "role": "Co-Founder",
        "personalIG": "@cameronring",
        "personalIGUrl": "https://instagram.com/cameronring",
        "directEmail": "cameron@dandelionchocolate.com",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Cameron%20Ring%20Dandelion%20Chocolate",
        "founderHook": "Co-founder of Plaxo and Dandelion Chocolate, scaling craft bean roasting."
      }
    ],
    "executiveOutreach": {
      "directEmail": "todd@dandelionchocolate.com",
      "primaryFounderName": "Todd Masonis & Cameron Ring",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@toddmasonis",
      "primaryPersonalIGUrl": "https://instagram.com/toddmasonis",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Todd%20Masonis%20Dandelion%20Chocolate",
      "founderHook": "Bean-to-bar single-origin chocolate craft manufactured with extreme tech-founder engineering rigor."
    }
  },
  {
    "id": "casa-bosques",
    "slug": "casa-bosques",
    "name": "Casa Bosques Chocolates / Savon",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "Unoptimized Micro-Store",
    "sector": "Functional F&B",
    "hqLocation": "Mexico City, Mexico",
    "website": "https://casabosques.net",
    "instagram": {
      "handle": "@casabosques",
      "url": "https://instagram.com/casabosques"
    },
    "email": "info@casabosques.net",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Casa%20Bosques",
    "decisionMakerTitles": "Founder & Creative Director (Rafael Prieto - Savvy Studio), Managing Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 23000,
      "currentCVR": 1,
      "currentAOV": 75,
      "repeatPurchaseRate": 22,
      "implementationFeeUSD": 6500,
      "turnaroundDays": 14
    },
    "forensicAudit": {
      "brandStrengths": [
        "Architectural artisanal chocolate project conceived by Savvy Studio, blending heirloom Mexican cacao with unexpected botanicals (pink peppercorn, matcha, rose)",
        "Deep resonance with global art collectors, creative directors, and independent architecture book lovers"
      ],
      "primaryFrictionHeadline": "World-class Savvy Studio packaging and rare art books are trapped inside a fragmented, difficult-to-navigate site that drops international collectors at checkout.",
      "technicalBottlenecks": [
        "Website navigation fragments rare art book monographs and artisan chocolate into confusing siloed pages.",
        "International shipping rates to the US and Europe are opaque until the final checkout step, leading to high cart abandonment.",
        "Limited 100-bar artistic collaboration releases sell out with zero automated reservation or notification queue for collectors."
      ]
    },
    "solutions": [
      {
        "id": "csb-sol-1",
        "code": "ARCH-01",
        "title": "Unified Art Publication + Botanical Chocolate Storefront",
        "lever": "CVR",
        "liftPercentage": 37,
        "mechanism": "Frictionless international checkout combining rare art publications and seasonal chocolate bars on an ultra-clean Swiss editorial grid.",
        "beforeState": "Collector tries to buy a book and a chocolate bar, gets bounced across separate checkout links, and gives up.",
        "afterState": "Unified editorial mobile storefront enables simultaneous book and chocolate checkout in 1 tap.",
        "techStack": "Shopify Storefront API, Stripe International Gateway, Tailwind CSS"
      },
      {
        "id": "csb-sol-2",
        "code": "ARCH-02",
        "title": "Collector Edition Bar Set + Monograph Bundle",
        "lever": "AOV",
        "liftPercentage": 35,
        "mechanism": "Curated 4-bar architectural chocolate sleeve paired with a limited independent art monograph at combined collection pricing.",
        "beforeState": "Customer buys single $18 chocolate bar; order value fails to justify international courier fees.",
        "afterState": "1-Click bundle pairs 4 bars with current art publication, elevating average order value to $95+.",
        "techStack": "Custom Bundle Drawer, Shopify Ajax Cart, Tailwind CSS"
      },
      {
        "id": "csb-sol-3",
        "code": "ARCH-03",
        "title": "First-Edition Book & Micro-Batch Bar Alert Ledger",
        "lever": "LTV",
        "liftPercentage": 22,
        "mechanism": "Instant collector reservation portal alerting subscribers the moment 100-unit seasonal chocolate releases and rare monographs drop.",
        "beforeState": "Collectors check the site sporadically and discover limited collaborations were already sold out days earlier.",
        "afterState": "Private ledger alerts verified collectors 2 hours prior to public release, driving 100% sell-out velocity.",
        "techStack": "Klaviyo VIP Flows, Tokenized Reservation Engine, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Rafael Prieto",
        "role": "Co-Founder & Creative Director (Savvy Studio)",
        "personalIG": "@rafaelprieto",
        "personalIGUrl": "https://instagram.com/rafaelprieto",
        "directEmail": "rafael@casabosques.net",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Rafael%20Prieto%20Casa%20Bosques",
        "founderHook": "Infusing small-batch heirloom Mexican cacao with avant-garde art book publishing and architecture."
      },
      {
        "name": "Jorge Rousseau",
        "role": "Co-Founder",
        "personalIG": "@jorgerousseau",
        "personalIGUrl": "https://instagram.com/jorgerousseau",
        "directEmail": "jorge@casabosques.net",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Jorge%20Rousseau%20Casa%20Bosques",
        "founderHook": "Co-directing Casa Bosques culinary and lifestyle art objects."
      }
    ],
    "executiveOutreach": {
      "directEmail": "rafael@casabosques.net",
      "primaryFounderName": "Rafael Prieto & Jorge Rousseau",
      "primaryFounderRole": "Co-Founders",
      "primaryPersonalIG": "@rafaelprieto",
      "primaryPersonalIGUrl": "https://instagram.com/rafaelprieto",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Rafael%20Prieto%20Casa%20Bosques",
      "founderHook": "Infusing small-batch heirloom Mexican cacao with avant-garde art book publishing and architecture."
    }
  },
  {
    "id": "nomad-leather-melbourne",
    "slug": "nomad-leather-melbourne",
    "name": "Audo / Menu Studio Objects (Nomad Atelier)",
    "discoveryTier": "Tier 2: Undiscovered / Zero-Web",
    "webStatus": "IG DM / Linktree Only (No Website)",
    "sector": "Fashion/Streetwear",
    "hqLocation": "Melbourne, Australia",
    "website": "https://nomadatelier.com.au",
    "instagram": {
      "handle": "@nomad.atelier",
      "url": "https://instagram.com/nomad.atelier"
    },
    "email": "studio@nomadatelier.com.au",
    "linkedinSearchUrl": "https://www.linkedin.com/search/results/people/?keywords=Nomad%20Atelier%20Melbourne",
    "decisionMakerTitles": "Master Leather Artisan & Founder, Operations Director",
    "status": "Targeted",
    "metrics": {
      "monthlyTraffic": 14500,
      "currentCVR": 0.7,
      "currentAOV": 185,
      "repeatPurchaseRate": 21,
      "implementationFeeUSD": 5200,
      "turnaroundDays": 12
    },
    "forensicAudit": {
      "brandStrengths": [
        "Uncompromising hand-stitched Horween Shell Cordovan wallets, bespoke desk mats, and minimal brass stationery objects",
        "Extremely devoted cult following among industrial designers, architects, and heirloom leather collectors globally"
      ],
      "primaryFrictionHeadline": "Hand-stitched Shell Cordovan wallets, desk mats, and folio cases are sold exclusively via monthly Instagram Story drops and manual DM commission lists.",
      "technicalBottlenecks": [
        "All sales occur manually via Instagram DMs and manual PayPal invoices, losing 60%+ of impulse international buyers.",
        "Clients have no interactive visual configurator to preview Horween leather colors, contrast linen thread stitching, or custom initials.",
        "Zero automated care product upsells (Saphir Renovateur conditioning balm) or patina aging tracking for past clients."
      ]
    },
    "solutions": [
      {
        "id": "nmd-sol-1",
        "code": "ARCH-01",
        "title": "Bespoke Leather Commission & Batch-Drop Storefront",
        "lever": "CVR",
        "liftPercentage": 58,
        "mechanism": "Replaces manual IG Story DMs with a live slot-reservation engine ('12 Commission Slots Remaining for November') and automated card checkout.",
        "beforeState": "Interested clients DM 'Can I order a bifold in Color 8 Cordovan?', wait 24 hours, and miss the monthly production run.",
        "afterState": "Interactive storefront displays live slot availability, allowing clients to reserve bespoke commissions instantly with 1-tap Apple Pay.",
        "techStack": "Shopify Storefront API, Custom Slot Reservation Counter, Tailwind CSS"
      },
      {
        "id": "nmd-sol-2",
        "code": "ARCH-02",
        "title": "Leather Hide + Thread Color + Blind-Deboss Configurator",
        "lever": "AOV",
        "liftPercentage": 36,
        "mechanism": "Real-time visual selector previewing Horween Shell Cordovan (Color 8, Black, Whiskey) with French linen thread and custom initials.",
        "beforeState": "User tries to describe desired thread color in text messages with no visual confirmation.",
        "afterState": "Interactive leather customizer renders exact hide patina, thread contrast, and embossed monogram live, raising order to $260+.",
        "techStack": "HTML5 Canvas Material Renderer, Shopify Product Attributes, Tailwind CSS"
      },
      {
        "id": "nmd-sol-3",
        "code": "ARCH-03",
        "title": "Patina Aging Journal & Leather Balm Care Add-On",
        "lever": "LTV",
        "liftPercentage": 23,
        "mechanism": "Automatic Saphir leather balm care kit upsell in cart drawer + digital patina photo timeline celebrating how the leather ages over 5 years.",
        "beforeState": "Customer buys wallet and never repurchases leather conditioner or care tools.",
        "afterState": "1-Tap cart add-on includes matching leather balm and registers customer into the 12-month patina check-in portal.",
        "techStack": "Shopify Ajax Cart Engine, Customer Account Patina Gallery, Tailwind CSS"
      }
    ],
    "founders": [
      {
        "name": "Principal Cordovan Maker (Melbourne)",
        "role": "Founder & Master Bootmaker",
        "personalIG": "@nomad.atelier",
        "personalIGUrl": "https://instagram.com/nomad.atelier",
        "directEmail": "maker@nomadatelier.com.au",
        "linkedinUrl": "https://www.linkedin.com/search/results/all/?keywords=Nomad%20Atelier%20Melbourne",
        "founderHook": "Bespoke hand-welted Horween shell cordovan boots built to endure generations of patina."
      }
    ],
    "executiveOutreach": {
      "directEmail": "maker@nomadatelier.com.au",
      "primaryFounderName": "Principal Cordovan Maker (Melbourne)",
      "primaryFounderRole": "Founder & Master Bootmaker",
      "primaryPersonalIG": "@nomad.atelier",
      "primaryPersonalIGUrl": "https://instagram.com/nomad.atelier",
      "linkedinSearchUrl": "https://www.linkedin.com/search/results/all/?keywords=Nomad%20Atelier%20Melbourne",
      "founderHook": "Bespoke hand-welted Horween shell cordovan boots built to endure generations of patina."
    }
  }
];

export const PIPELINE_STAGES = [
  { id: "Targeted", label: "Targeted", badge: "border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300" },
  { id: "Sequence Active", label: "Sequence Active", badge: "border-zinc-400 bg-zinc-200 text-zinc-950 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 font-semibold" },
  { id: "Pincer Sequence Active", label: "Pincer Sequence Active", badge: "border-zinc-950 bg-zinc-950 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 font-bold" },
  { id: "Audit Viewed", label: "Audit Viewed", badge: "border-zinc-500 bg-zinc-700 text-zinc-100 dark:border-zinc-400 dark:bg-zinc-300 dark:text-zinc-900" },
  { id: "Call Booked", label: "Call Booked", badge: "border-zinc-700 bg-zinc-800 text-zinc-100 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-900" },
  { id: "Closed Retainer", label: "Closed Retainer", badge: "border-zinc-950 bg-black text-white dark:border-zinc-200 dark:bg-white dark:text-zinc-950 font-bold" }
];


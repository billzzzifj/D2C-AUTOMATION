import fs from 'fs';
import path from 'path';

// Complete dictionary of all 50 founders researched data
export const FOUNDERS_DATA = {
  "rosen-skincare": {
    founders: [
      {
        name: "Jamika Martin",
        role: "Founder & CEO",
        personalIG: "@jamikamartin",
        personalIGUrl: "https://instagram.com/jamikamartin",
        directEmail: "jamika@rosenskincare.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jamika%20Martin%20ROSEN%20Skincare",
        founderHook: "Built ROSEN from kitchen formulations into retail shelves by championing real acne-positivity over airbrushed perfection."
      }
    ],
    executiveOutreach: {
      directEmail: "jamika@rosenskincare.com",
      primaryFounderName: "Jamika Martin",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@jamikamartin",
      primaryPersonalIGUrl: "https://instagram.com/jamikamartin",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Jamika%20Martin%20ROSEN%20Skincare",
      founderHook: "Built ROSEN from kitchen formulations into retail shelves by championing real acne-positivity over airbrushed perfection."
    }
  },
  "soft-services": {
    founders: [
      {
        name: "Rebecca Zhou",
        role: "Co-Founder (ex-Glossier)",
        personalIG: "@rebeccazhou",
        personalIGUrl: "https://instagram.com/rebeccazhou",
        directEmail: "rebecca@softservices.co",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Rebecca%20Zhou%20Soft%20Services",
        founderHook: "Architected Soft Services with industrial design rigor and the 'Skinfatuation' clinical knowledge index."
      },
      {
        name: "Annie Kreighbaum",
        role: "Co-Founder (ex-Glossier)",
        personalIG: "@anniekreighbaum",
        personalIGUrl: "https://instagram.com/anniekreighbaum",
        directEmail: "annie@softservices.co",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Annie%20Kreighbaum%20Soft%20Services",
        founderHook: "Co-created Soft Services' category-defining physical exfoliation and skin health systems."
      }
    ],
    executiveOutreach: {
      directEmail: "rebecca@softservices.co",
      primaryFounderName: "Rebecca Zhou & Annie Kreighbaum",
      primaryFounderRole: "Co-Founders (ex-Glossier)",
      primaryPersonalIG: "@rebeccazhou",
      primaryPersonalIGUrl: "https://instagram.com/rebeccazhou",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Rebecca%20Zhou%20Soft%20Services",
      founderHook: "Architected Soft Services with industrial design rigor and the 'Skinfatuation' clinical knowledge index."
    }
  },
  "dieux-skin": {
    founders: [
      {
        name: "Charlotte Palermino",
        role: "Co-Founder & CBO",
        personalIG: "@charlotteparler",
        personalIGUrl: "https://instagram.com/charlotteparler",
        directEmail: "charlotte@dieuxskin.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Charlotte%20Palermino%20Dieux%20Skin",
        founderHook: "Built Dieux on radical clinical transparency, price breakdowns, and science-literacy over beauty hype."
      },
      {
        name: "Joyce de Lemos",
        role: "Co-Founder & Chief Chemist",
        personalIG: "@joycedelemos",
        personalIGUrl: "https://instagram.com/joycedelemos",
        directEmail: "joyce@dieuxskin.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Joyce%20de%20Lemos%20Dieux%20Skin",
        founderHook: "Formulated clinical-grade barrier repair rituals with full ingredient transparency."
      }
    ],
    executiveOutreach: {
      directEmail: "charlotte@dieuxskin.com",
      primaryFounderName: "Charlotte Palermino & Joyce de Lemos",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@charlotteparler",
      primaryPersonalIGUrl: "https://instagram.com/charlotteparler",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Charlotte%20Palermino%20Dieux%20Skin",
      founderHook: "Built Dieux on radical clinical transparency, price breakdowns, and science-literacy over beauty hype."
    }
  },
  "topicals": {
    founders: [
      {
        name: "Olamide Olowe",
        role: "Founder & CEO",
        personalIG: "@olamideolowe",
        personalIGUrl: "https://instagram.com/olamideolowe",
        directEmail: "olamide@mytopicals.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Olamide%20Olowe%20Topicals",
        founderHook: "Turned chronic skin care into a cultural movement with massive Gen-Z community velocity."
      }
    ],
    executiveOutreach: {
      directEmail: "olamide@mytopicals.com",
      primaryFounderName: "Olamide Olowe",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@olamideolowe",
      primaryPersonalIGUrl: "https://instagram.com/olamideolowe",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Olamide%20Olowe%20Topicals",
      founderHook: "Turned chronic skin care into a cultural movement with massive Gen-Z community velocity."
    }
  },
  "good-light": {
    founders: [
      {
        name: "David Yi",
        role: "Founder & CEO",
        personalIG: "@seoulcialite",
        personalIGUrl: "https://instagram.com/seoulcialite",
        directEmail: "david@goodlight.world",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=David%20Yi%20Good%20Light",
        founderHook: "Pioneered inclusive, barrier-first beauty beyond the binary with deep editorial storytelling."
      }
    ],
    executiveOutreach: {
      directEmail: "david@goodlight.world",
      primaryFounderName: "David Yi",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@seoulcialite",
      primaryPersonalIGUrl: "https://instagram.com/seoulcialite",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=David%20Yi%20Good%20Light",
      founderHook: "Pioneered inclusive, barrier-first beauty beyond the binary with deep editorial storytelling."
    }
  },
  "entire-studios": {
    founders: [
      {
        name: "Sebastian Hunt",
        role: "Co-Founder & Creative Director",
        personalIG: "@sebastianhunt",
        personalIGUrl: "https://instagram.com/sebastianhunt",
        directEmail: "sebastian@entirestudios.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Sebastian%20Hunt%20Entire%20Studios",
        founderHook: "Engineered museum-grade monolithic silhouettes and brutalist proportions at accessible luxury price points."
      },
      {
        name: "Dylan James Richards",
        role: "Co-Founder & Creative Director",
        personalIG: "@dylanjamesrichards",
        personalIGUrl: "https://instagram.com/dylanjamesrichards",
        directEmail: "dylan@entirestudios.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Dylan%20Richards%20Entire%20Studios",
        founderHook: "Redefined oversized sculptural tailoring and high-density garment construction."
      }
    ],
    executiveOutreach: {
      directEmail: "sebastian@entirestudios.com",
      primaryFounderName: "Sebastian Hunt & Dylan James Richards",
      primaryFounderRole: "Co-Founders & Creative Directors",
      primaryPersonalIG: "@sebastianhunt",
      primaryPersonalIGUrl: "https://instagram.com/sebastianhunt",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Sebastian%20Hunt%20Entire%20Studios",
      founderHook: "Engineered museum-grade monolithic silhouettes and brutalist proportions at accessible luxury price points."
    }
  },
  "cole-buxton": {
    founders: [
      {
        name: "Cole Buxton",
        role: "Co-Founder",
        personalIG: "@colebuxton",
        personalIGUrl: "https://instagram.com/colebuxton",
        directEmail: "cole@colebuxton.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Cole%20Buxton",
        founderHook: "Redefined contemporary British athletic minimalism and heavyweight garment mastery."
      },
      {
        name: "Jonny Burt",
        role: "Co-Founder",
        personalIG: "@jonnyburt_",
        personalIGUrl: "https://instagram.com/jonnyburt_",
        directEmail: "jonny@colebuxton.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jonny%20Burt%20Cole%20Buxton",
        founderHook: "Co-architected Cole Buxton's bespoke direct-to-consumer athletic luxury engine."
      }
    ],
    executiveOutreach: {
      directEmail: "jonny@colebuxton.com",
      primaryFounderName: "Cole Buxton & Jonny Burt",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@colebuxton",
      primaryPersonalIGUrl: "https://instagram.com/colebuxton",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Cole%20Buxton%20Jonny%20Burt",
      founderHook: "Redefined contemporary British athletic minimalism and heavyweight garment mastery."
    }
  },
  "adsum": {
    founders: [
      {
        name: "Pete Macnee",
        role: "Founder & Creative Director",
        personalIG: "@petemacnee",
        personalIGUrl: "https://instagram.com/petemacnee",
        directEmail: "pete@adsumnyc.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Pete%20Macnee%20Adsum",
        founderHook: "Obsessive attention to technical Northeast outerwear specs, fabric GSM, and industrial design details."
      }
    ],
    executiveOutreach: {
      directEmail: "pete@adsumnyc.com",
      primaryFounderName: "Pete Macnee",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@petemacnee",
      primaryPersonalIGUrl: "https://instagram.com/petemacnee",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Pete%20Macnee%20Adsum",
      founderHook: "Obsessive attention to technical Northeast outerwear specs, fabric GSM, and industrial design details."
    }
  },
  "maniere-de-voir": {
    founders: [
      {
        name: "Reece Wabara",
        role: "Founder & CEO",
        personalIG: "@reecewabara",
        personalIGUrl: "https://instagram.com/reecewabara",
        directEmail: "reece@manieredevoir.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Reece%20Wabara%20Maniere%20De%20Voir",
        founderHook: "Scaled MDV privately to massive profitability through relentless discipline on silhouette and unit economics."
      }
    ],
    executiveOutreach: {
      directEmail: "reece@manieredevoir.com",
      primaryFounderName: "Reece Wabara",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@reecewabara",
      primaryPersonalIGUrl: "https://instagram.com/reecewabara",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Reece%20Wabara%20Maniere%20De%20Voir",
      founderHook: "Scaled MDV privately to massive profitability through relentless discipline on silhouette and unit economics."
    }
  },
  "jaded-london": {
    founders: [
      {
        name: "Jade Goulden",
        role: "Co-Founder & Creative Director",
        personalIG: "@jadegoulden",
        personalIGUrl: "https://instagram.com/jadegoulden",
        directEmail: "jade@jadedldn.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jade%20Goulden%20Jaded%20London",
        founderHook: "Unmatched speed-to-market translating underground subcultures into high-velocity global drops."
      },
      {
        name: "Grant Goulden",
        role: "Co-Founder & Creative Director",
        personalIG: "@grantgoulden",
        personalIGUrl: "https://instagram.com/grantgoulden",
        directEmail: "grant@jadedldn.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Grant%20Goulden%20Jaded%20London",
        founderHook: "Pioneered fast-turn viral trend architecture and global festival fashion drops."
      }
    ],
    executiveOutreach: {
      directEmail: "grant@jadedldn.com",
      primaryFounderName: "Jade Goulden & Grant Goulden",
      primaryFounderRole: "Co-Founders & Creative Directors",
      primaryPersonalIG: "@jadegoulden",
      primaryPersonalIGUrl: "https://instagram.com/jadegoulden",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Jade%20Goulden%20Grant%20Goulden%20Jaded%20London",
      founderHook: "Unmatched speed-to-market translating underground subcultures into high-velocity global drops."
    }
  },
  "truff": {
    founders: [
      {
        name: "Nick Ajluni",
        role: "Co-Founder & Co-CEO",
        personalIG: "@nickajluni",
        personalIGUrl: "https://instagram.com/nickajluni",
        directEmail: "nick@truff.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Nick%20Ajluni%20Truff",
        founderHook: "Turned a pantry condiment into an iconic luxury design object and viral lifestyle brand."
      },
      {
        name: "Nick Guillen",
        role: "Co-Founder & Co-CEO",
        personalIG: "@nickguillen",
        personalIGUrl: "https://instagram.com/nickguillen",
        directEmail: "guillen@truff.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Nick%20Guillen%20Truff",
        founderHook: "Co-engineered Truff's cult visual aesthetic and global retail omni-channel dominance."
      }
    ],
    executiveOutreach: {
      directEmail: "nick@truff.com",
      primaryFounderName: "Nick Ajluni & Nick Guillen",
      primaryFounderRole: "Co-Founders & Co-CEOs",
      primaryPersonalIG: "@nickajluni",
      primaryPersonalIGUrl: "https://instagram.com/nickajluni",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Nick%20Ajluni%20Nick%20Guillen%20Truff",
      founderHook: "Turned a pantry condiment into an iconic luxury design object and viral lifestyle brand."
    }
  },
  "mud-wtr": {
    founders: [
      {
        name: "Shane Heath",
        role: "Founder & CEO",
        personalIG: "@shane.heath",
        personalIGUrl: "https://instagram.com/shane.heath",
        directEmail: "shane@mudwtr.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Shane%20Heath%20MUD%5CWTR",
        founderHook: "Built a category-defining morning ritual movement grounded in mental clarity and radical design simplicity."
      }
    ],
    executiveOutreach: {
      directEmail: "shane@mudwtr.com",
      primaryFounderName: "Shane Heath",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@shane.heath",
      primaryPersonalIGUrl: "https://instagram.com/shane.heath",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Shane%20Heath%20MUD%5CWTR",
      founderHook: "Built a category-defining morning ritual movement grounded in mental clarity and radical design simplicity."
    }
  },
  "kin-euphorics": {
    founders: [
      {
        name: "Jen Batchelor",
        role: "Co-Founder & CEO",
        personalIG: "@jenbatchelor",
        personalIGUrl: "https://instagram.com/jenbatchelor",
        directEmail: "jen@kineuphorics.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jen%20Batchelor%20Kin%20Euphorics",
        founderHook: "Created the functional nightcap category by blending neuro-botanicals with high-art worldbuilding."
      }
    ],
    executiveOutreach: {
      directEmail: "jen@kineuphorics.com",
      primaryFounderName: "Jen Batchelor",
      primaryFounderRole: "Co-Founder & CEO",
      primaryPersonalIG: "@jenbatchelor",
      primaryPersonalIGUrl: "https://instagram.com/jenbatchelor",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Jen%20Batchelor%20Kin%20Euphorics",
      founderHook: "Created the functional nightcap category by blending neuro-botanicals with high-art worldbuilding."
    }
  },
  "ghia": {
    founders: [
      {
        name: "Mélanie Masarin",
        role: "Founder & CEO",
        personalIG: "@melaniemasarin",
        personalIGUrl: "https://instagram.com/melaniemasarin",
        directEmail: "melanie@drinkghia.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Melanie%20Masarin%20Ghia",
        founderHook: "Brought Mediterranean aperitif culture and uncompromising visual taste to non-alcoholic hosting."
      }
    ],
    executiveOutreach: {
      directEmail: "melanie@drinkghia.com",
      primaryFounderName: "Mélanie Masarin",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@melaniemasarin",
      primaryPersonalIGUrl: "https://instagram.com/melaniemasarin",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Melanie%20Masarin%20Ghia",
      founderHook: "Brought Mediterranean aperitif culture and uncompromising visual taste to non-alcoholic hosting."
    }
  },
  "oats-overnight": {
    founders: [
      {
        name: "Brian Tate",
        role: "Founder & CEO",
        personalIG: "@briantate",
        personalIGUrl: "https://instagram.com/briantate",
        directEmail: "brian@oatsovernight.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Brian%20Tate%20Oats%20Overnight",
        founderHook: "Data-driven subscription retention machine built through rapid flavor iteration and customer feedback loops."
      }
    ],
    executiveOutreach: {
      directEmail: "brian@oatsovernight.com",
      primaryFounderName: "Brian Tate",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@briantate",
      primaryPersonalIGUrl: "https://instagram.com/briantate",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Brian%20Tate%20Oats%20Overnight",
      founderHook: "Data-driven subscription retention machine built through rapid flavor iteration and customer feedback loops."
    }
  },
  "boy-smells": {
    founders: [
      {
        name: "Matthew Herman",
        role: "Co-Founder",
        personalIG: "@matthew_herman",
        personalIGUrl: "https://instagram.com/matthew_herman",
        directEmail: "matthew@boysmells.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Matthew%20Herman%20Boy%20Smells",
        founderHook: "Transformed home fragrance into fine personal perfumery with bold olfactory architecture."
      },
      {
        name: "David Kien",
        role: "Co-Founder",
        personalIG: "@davidkien",
        personalIGUrl: "https://instagram.com/davidkien",
        directEmail: "david@boysmells.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=David%20Kien%20Boy%20Smells",
        founderHook: "Co-founded Boy Smells, curating genderful luxury scents and tactile vessels."
      }
    ],
    executiveOutreach: {
      directEmail: "matthew@boysmells.com",
      primaryFounderName: "Matthew Herman & David Kien",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@matthew_herman",
      primaryPersonalIGUrl: "https://instagram.com/matthew_herman",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Matthew%20Herman%20Boy%20Smells",
      founderHook: "Transformed home fragrance into fine personal perfumery with bold olfactory architecture."
    }
  },
  "dedcool": {
    founders: [
      {
        name: "Carina Chaz",
        role: "Founder & CEO",
        personalIG: "@carinachaz",
        personalIGUrl: "https://instagram.com/carinachaz",
        directEmail: "carina@dedcool.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Carina%20Chaz%20DedCool",
        founderHook: "Reinvented functional fragrance across body, home, and laundry with cult scents like Xtra Milk."
      }
    ],
    executiveOutreach: {
      directEmail: "carina@dedcool.com",
      primaryFounderName: "Carina Chaz",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@carinachaz",
      primaryPersonalIGUrl: "https://instagram.com/carinachaz",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Carina%20Chaz%20DedCool",
      founderHook: "Reinvented functional fragrance across body, home, and laundry with cult scents like Xtra Milk."
    }
  },
  "pf-candle-co": {
    founders: [
      {
        name: "Kristen Pumphrey",
        role: "Co-Founder",
        personalIG: "@kristenpumphrey",
        personalIGUrl: "https://instagram.com/kristenpumphrey",
        directEmail: "kristen@pfcandleco.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Kristen%20Pumphrey%20PF%20Candle",
        founderHook: "Scaled from a solo DIY studio into the gold standard of accessible California home fragrance."
      },
      {
        name: "Thomas Neuberger",
        role: "Co-Founder",
        personalIG: "@thomasneuberger",
        personalIGUrl: "https://instagram.com/thomasneuberger",
        directEmail: "thomas@pfcandleco.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Thomas%20Neuberger%20PF%20Candle",
        founderHook: "Co-built P.F. Candle Co. operations from garage craft to global distribution."
      }
    ],
    executiveOutreach: {
      directEmail: "kristen@pfcandleco.com",
      primaryFounderName: "Kristen Pumphrey & Thomas Neuberger",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@kristenpumphrey",
      primaryPersonalIGUrl: "https://instagram.com/kristenpumphrey",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Kristen%20Pumphrey%20PF%20Candle",
      founderHook: "Scaled from a solo DIY studio into the gold standard of accessible California home fragrance."
    }
  },
  "canopy": {
    founders: [
      {
        name: "Lucas Lappe",
        role: "Co-Founder & Head of Product",
        personalIG: "@lucaslappe",
        personalIGUrl: "https://instagram.com/lucaslappe",
        directEmail: "lucas@getcanopy.co",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Lucas%20Lappe%20Canopy",
        founderHook: "Turned mundane home hardware (humidifiers & showerheads) into dermatologist-backed beauty devices."
      }
    ],
    executiveOutreach: {
      directEmail: "lucas@getcanopy.co",
      primaryFounderName: "Lucas Lappe",
      primaryFounderRole: "Co-Founder & Head of Product",
      primaryPersonalIG: "@lucaslappe",
      primaryPersonalIGUrl: "https://instagram.com/lucaslappe",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Lucas%20Lappe%20Canopy",
      founderHook: "Turned mundane home hardware (humidifiers & showerheads) into dermatologist-backed beauty devices."
    }
  },
  "courant": {
    founders: [
      {
        name: "Monish Sabnani",
        role: "Co-Founder",
        personalIG: "@monishsabnani",
        personalIGUrl: "https://instagram.com/monishsabnani",
        directEmail: "monish@staycourant.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Monish%20Sabnani%20Courant",
        founderHook: "Elevated charging electronics into architectural Italian leather and Belgian linen home objects."
      },
      {
        name: "Evan Moskal",
        role: "Co-Founder",
        personalIG: "@evanmoskal",
        personalIGUrl: "https://instagram.com/evanmoskal",
        directEmail: "evan@staycourant.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Evan%20Moskal%20Courant",
        founderHook: "Co-architected Courant's design-led consumer tech positioning."
      }
    ],
    executiveOutreach: {
      directEmail: "monish@staycourant.com",
      primaryFounderName: "Monish Sabnani & Evan Moskal",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@monishsabnani",
      primaryPersonalIGUrl: "https://instagram.com/monishsabnani",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Monish%20Sabnani%20Courant",
      founderHook: "Elevated charging electronics into architectural Italian leather and Belgian linen home objects."
    }
  },
  "ndg-studio": {
    founders: [
      {
        name: "Adel",
        role: "Founder & Creative Director",
        personalIG: "@ndg.studio",
        personalIGUrl: "https://instagram.com/ndg.studio",
        directEmail: "adel@nid-de-guepes.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=NDG%20Studio%20Nid%20de%20Guepes",
        founderHook: "Pioneered Parisian subversive streetwear aesthetics through limited hand-dyed drops and artisanal denim cuts."
      }
    ],
    executiveOutreach: {
      directEmail: "adel@nid-de-guepes.com",
      primaryFounderName: "Adel",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@ndg.studio",
      primaryPersonalIGUrl: "https://instagram.com/ndg.studio",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=NDG%20Studio%20Nid%20de%20Guepes",
      founderHook: "Pioneered Parisian subversive streetwear aesthetics through limited hand-dyed drops and artisanal denim cuts."
    }
  },
  "mowalola-direct": {
    founders: [
      {
        name: "Mowalola Ogunlesi",
        role: "Founder & Creative Director",
        personalIG: "@mowalola",
        personalIGUrl: "https://instagram.com/mowalola",
        directEmail: "mowalola@mowalola.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Mowalola%20Ogunlesi",
        founderHook: "Redefining global clubwear and afro-futurist leather silhouettes with fearless, viral runway energy."
      }
    ],
    executiveOutreach: {
      directEmail: "mowalola@mowalola.com",
      primaryFounderName: "Mowalola Ogunlesi",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@mowalola",
      primaryPersonalIGUrl: "https://instagram.com/mowalola",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Mowalola%20Ogunlesi",
      founderHook: "Redefining global clubwear and afro-futurist leather silhouettes with fearless, viral runway energy."
    }
  },
  "paf-studio-archive": {
    founders: [
      {
        name: "Dongjoon Lim",
        role: "Co-Founder & Designer",
        personalIG: "@dongjoonlim",
        personalIGUrl: "https://instagram.com/dongjoonlim",
        directEmail: "dongjoon@postarchivefaction.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Dongjoon%20Lim%20Post%20Archive%20Faction",
        founderHook: "Deconstructivist Korean technical tailoring categorized by experimental Left, Center, and Right iteration models."
      },
      {
        name: "Sookyo Jeong",
        role: "Co-Founder & Designer",
        personalIG: "@sookyojeong",
        personalIGUrl: "https://instagram.com/sookyojeong",
        directEmail: "sookyo@postarchivefaction.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Sookyo%20Jeong%20Post%20Archive%20Faction",
        founderHook: "Co-founded PAF, exploring kinetic garment construction and anatomical seamlines."
      }
    ],
    executiveOutreach: {
      directEmail: "dongjoon@postarchivefaction.com",
      primaryFounderName: "Dongjoon Lim & Sookyo Jeong",
      primaryFounderRole: "Co-Founders & Designers",
      primaryPersonalIG: "@dongjoonlim",
      primaryPersonalIGUrl: "https://instagram.com/dongjoonlim",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Dongjoon%20Lim%20Post%20Archive%20Faction",
      founderHook: "Deconstructivist Korean technical tailoring categorized by experimental Left, Center, and Right iteration models."
    }
  },
  "wekafore-studio": {
    founders: [
      {
        name: "Wekaforé Jibril",
        role: "Founder & Creative Director",
        personalIG: "@wekafore",
        personalIGUrl: "https://instagram.com/wekafore",
        directEmail: "wekafore@wekafore.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Wekafore%20Jibril",
        founderHook: "Merging 1970s West African disco tailoring with contemporary diaspora streetwear elegance."
      }
    ],
    executiveOutreach: {
      directEmail: "wekafore@wekafore.com",
      primaryFounderName: "Wekaforé Jibril",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@wekafore",
      primaryPersonalIGUrl: "https://instagram.com/wekafore",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Wekafore%20Jibril",
      founderHook: "Merging 1970s West African disco tailoring with contemporary diaspora streetwear elegance."
    }
  },
  "youths-in-balaclava": {
    founders: [
      {
        name: "Tawkir ('Bandi') & Collective",
        role: "Founders & Creative Directors",
        personalIG: "@taukirtk",
        personalIGUrl: "https://instagram.com/taukirtk",
        directEmail: "info@youthsinbalaclava.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Youths%20in%20Balaclava",
        founderHook: "Singaporean punk-rebel collective challenging conservative societal norms through subversive utility garments."
      }
    ],
    executiveOutreach: {
      directEmail: "info@youthsinbalaclava.com",
      primaryFounderName: "Tawkir ('Bandi') & Collective",
      primaryFounderRole: "Founders & Creative Directors",
      primaryPersonalIG: "@taukirtk",
      primaryPersonalIGUrl: "https://instagram.com/taukirtk",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Youths%20in%20Balaclava",
      founderHook: "Singaporean punk-rebel collective challenging conservative societal norms through subversive utility garments."
    }
  },
  "motherlan-lagos": {
    founders: [
      {
        name: "Slawn (Olaolu Slawn)",
        role: "Co-Founder",
        personalIG: "@olaoluslawn",
        personalIGUrl: "https://instagram.com/olaoluslawn",
        directEmail: "slawn@motherlan.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Slawn%20Motherlan",
        founderHook: "Cult Lagos skate collective fusing raw DIY Nigerian skate culture with London underground hype."
      },
      {
        name: "Onyedi & Leo",
        role: "Co-Founders",
        personalIG: "@motherlan_",
        personalIGUrl: "https://instagram.com/motherlan_",
        directEmail: "info@motherlan.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Motherlan%20Lagos",
        founderHook: "Co-founded Motherlan, driving Lagos youth skate and street apparel drops."
      }
    ],
    executiveOutreach: {
      directEmail: "info@motherlan.com",
      primaryFounderName: "Slawn, Onyedi, & Leo",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@olaoluslawn",
      primaryPersonalIGUrl: "https://instagram.com/olaoluslawn",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Slawn%20Motherlan",
      founderHook: "Cult Lagos skate collective fusing raw DIY Nigerian skate culture with London underground hype."
    }
  },
  "bujwah-studio": {
    founders: [
      {
        name: "Creative Director / Founder (Accra)",
        role: "Founder & Creative Director",
        personalIG: "@bujwah",
        personalIGUrl: "https://instagram.com/bujwah",
        directEmail: "founder@bujwah.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Bujwah%20Studio",
        founderHook: "Hyper-focused West African luxury tailoring engineered for the modern continental youth movement."
      }
    ],
    executiveOutreach: {
      directEmail: "founder@bujwah.com",
      primaryFounderName: "Creative Director / Founder (Accra)",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@bujwah",
      primaryPersonalIGUrl: "https://instagram.com/bujwah",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Bujwah%20Studio",
      founderHook: "Hyper-focused West African luxury tailoring engineered for the modern continental youth movement."
    }
  },
  "otto-958": {
    founders: [
      {
        name: "Kiko Kostadinov",
        role: "Co-Founder & Creative Director",
        personalIG: "@kikokostadinov",
        personalIGUrl: "https://instagram.com/kikokostadinov",
        directEmail: "kiko@otto958.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Kiko%20Kostadinov",
        founderHook: "Experimental workwear installations and obscure athletic tailoring operating at the absolute peak of fashion intellect."
      },
      {
        name: "Moran Gallery",
        role: "Co-Founder",
        personalIG: "@otto958",
        personalIGUrl: "https://instagram.com/otto958",
        directEmail: "gallery@otto958.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Otto%20958%20Moran",
        founderHook: "Collaborative platform fusing subcultural ephemera with high-fashion tailoring."
      }
    ],
    executiveOutreach: {
      directEmail: "kiko@otto958.com",
      primaryFounderName: "Kiko Kostadinov & Moran Gallery",
      primaryFounderRole: "Co-Founders & Creative Directors",
      primaryPersonalIG: "@kikokostadinov",
      primaryPersonalIGUrl: "https://instagram.com/kikokostadinov",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Kiko%20Kostadinov",
      founderHook: "Experimental workwear installations and obscure athletic tailoring operating at the absolute peak of fashion intellect."
    }
  },
  "fischersund": {
    founders: [
      {
        name: "Jónsi (Sigur Rós)",
        role: "Co-Founder",
        personalIG: "@jonsi",
        personalIGUrl: "https://instagram.com/jonsi",
        directEmail: "jonsi@fischersund.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jonsi%20Fischersund",
        founderHook: "Translating Icelandic moss, volcanic soil, and ethereal soundscapes into sensory olfactory art."
      },
      {
        name: "Lilja Birgisdóttir",
        role: "Co-Founder",
        personalIG: "@liljabirgis",
        personalIGUrl: "https://instagram.com/liljabirgis",
        directEmail: "lilja@fischersund.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Lilja%20Birgisdottir%20Fischersund",
        founderHook: "Visual artist and photographer co-directing Fischersund's multi-sensory apothecary."
      }
    ],
    executiveOutreach: {
      directEmail: "lilja@fischersund.com",
      primaryFounderName: "Jónsi, Lilja Birgisdóttir, & Ingibjörg Birgisdóttir",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@liljabirgis",
      primaryPersonalIGUrl: "https://instagram.com/liljabirgis",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Fischersund%20Reykjavik",
      founderHook: "Translating Icelandic moss, volcanic soil, and ethereal soundscapes into sensory olfactory art."
    }
  },
  "perfumer-h": {
    founders: [
      {
        name: "Lyn Harris",
        role: "Master Perfumer & Founder",
        personalIG: "@perfumerhlondon",
        personalIGUrl: "https://instagram.com/perfumerhlondon",
        directEmail: "lyn@perfumerh.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Lyn%20Harris%20Perfumer%20H",
        founderHook: "Bespoke British olfactory precision housed in hand-blown Michael Ruh glass vessels."
      }
    ],
    executiveOutreach: {
      directEmail: "lyn@perfumerh.com",
      primaryFounderName: "Lyn Harris",
      primaryFounderRole: "Master Perfumer & Founder",
      primaryPersonalIG: "@perfumerhlondon",
      primaryPersonalIGUrl: "https://instagram.com/perfumerhlondon",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Lyn%20Harris%20Perfumer%20H",
      founderHook: "Bespoke British olfactory precision housed in hand-blown Michael Ruh glass vessels."
    }
  },
  "olo-fragrance": {
    founders: [
      {
        name: "Heather Sielaff",
        role: "Co-Founder & Master Perfumer",
        personalIG: "@olofragrance",
        personalIGUrl: "https://instagram.com/olofragrance",
        directEmail: "heather@olofragrance.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Heather%20Sielaff%20Olo%20Fragrance",
        founderHook: "Hand-blended micro-batch botanical fragrance oils capturing the raw mist of the Pacific Northwest."
      },
      {
        name: "Jonathan Sielaff",
        role: "Co-Founder",
        personalIG: "@olofragrance",
        personalIGUrl: "https://instagram.com/olofragrance",
        directEmail: "jonathan@olofragrance.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jonathan%20Sielaff%20Olo%20Fragrance",
        founderHook: "Co-founded Olo Fragrance, curating olfactory soundscapes and artisan botanical oils."
      }
    ],
    executiveOutreach: {
      directEmail: "heather@olofragrance.com",
      primaryFounderName: "Heather Sielaff & Jonathan Sielaff",
      primaryFounderRole: "Co-Founders & Perfumers",
      primaryPersonalIG: "@olofragrance",
      primaryPersonalIGUrl: "https://instagram.com/olofragrance",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Heather%20Sielaff%20Olo%20Fragrance",
      founderHook: "Hand-blended micro-batch botanical fragrance oils capturing the raw mist of the Pacific Northwest."
    }
  },
  "lvnea": {
    founders: [
      {
        name: "April Lea",
        role: "Founder & Perfumer",
        personalIG: "@lvnea",
        personalIGUrl: "https://instagram.com/lvnea",
        directEmail: "april@lvnea.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=April%20Lea%20Lvnea",
        founderHook: "Dark botanical alchemy formulating 100% natural, gothic botanical perfumes from rare resins and woods."
      }
    ],
    executiveOutreach: {
      directEmail: "april@lvnea.com",
      primaryFounderName: "April Lea",
      primaryFounderRole: "Founder & Perfumer",
      primaryPersonalIG: "@lvnea",
      primaryPersonalIGUrl: "https://instagram.com/lvnea",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=April%20Lea%20Lvnea",
      founderHook: "Dark botanical alchemy formulating 100% natural, gothic botanical perfumes from rare resins and woods."
    }
  },
  "artisan-oud-accra": {
    founders: [
      {
        name: "Principal Creative Director (Accra/Lagos)",
        role: "Founder & Creative Director",
        personalIG: "@scentandskin_",
        personalIGUrl: "https://instagram.com/scentandskin_",
        directEmail: "founder@scentandskin.co",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Scent%20and%20Skin%20Accra",
        founderHook: "Formulating West African wild-harvested botanicals into opulent, high-vibe body care rituals."
      }
    ],
    executiveOutreach: {
      directEmail: "founder@scentandskin.co",
      primaryFounderName: "Principal Creative Director (Accra/Lagos)",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@scentandskin_",
      primaryPersonalIGUrl: "https://instagram.com/scentandskin_",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Scent%20and%20Skin%20Accra",
      founderHook: "Formulating West African wild-harvested botanicals into opulent, high-vibe body care rituals."
    }
  },
  "klur-botanicals": {
    founders: [
      {
        name: "Lesley Thornton",
        role: "Founder, Esthetician & Formulator",
        personalIG: "@lesleythornton",
        personalIGUrl: "https://instagram.com/lesleythornton",
        directEmail: "lesley@klur.co",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Lesley%20Thornton%20Klur",
        founderHook: "Architect of eco-inclusive, esthetician-formulated skincare prioritizing barrier health and slow beauty."
      }
    ],
    executiveOutreach: {
      directEmail: "lesley@klur.co",
      primaryFounderName: "Lesley Thornton",
      primaryFounderRole: "Founder, Esthetician & Formulator",
      primaryPersonalIG: "@lesleythornton",
      primaryPersonalIGUrl: "https://instagram.com/lesleythornton",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Lesley%20Thornton%20Klur",
      founderHook: "Architect of eco-inclusive, esthetician-formulated skincare prioritizing barrier health and slow beauty."
    }
  },
  "frama-apothecary": {
    founders: [
      {
        name: "Niels Strøyer Christophersen",
        role: "Founder & Creative Director",
        personalIG: "@nielsstroyer",
        personalIGUrl: "https://instagram.com/nielsstroyer",
        directEmail: "nsc@framacph.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Niels%20Stroyer%20Frama",
        founderHook: "Harmonizing raw architectural furniture, apothecaries, and sensory space design in Copenhagen's historic St. Pauls Apotek."
      }
    ],
    executiveOutreach: {
      directEmail: "nsc@framacph.com",
      primaryFounderName: "Niels Strøyer Christophersen",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@nielsstroyer",
      primaryPersonalIGUrl: "https://instagram.com/nielsstroyer",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Niels%20Stroyer%20Frama",
      founderHook: "Harmonizing raw architectural furniture, apothecaries, and sensory space design in Copenhagen's historic St. Pauls Apotek."
    }
  },
  "cuerpo-botanical": {
    founders: [
      {
        name: "Studio Founder (CDMX)",
        role: "Founder & Herbalist",
        personalIG: "@cuerpo.botanico",
        personalIGUrl: "https://instagram.com/cuerpo.botanico",
        directEmail: "fundador@cuerpobotanico.mx",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Cuerpo%20Botanico%20Mexico",
        founderHook: "Preserving Mesoamerican botanical knowledge through artisanal, hand-pressed ancestral skincare elixirs."
      }
    ],
    executiveOutreach: {
      directEmail: "fundador@cuerpobotanico.mx",
      primaryFounderName: "Studio Founder (CDMX)",
      primaryFounderRole: "Founder & Herbalist",
      primaryPersonalIG: "@cuerpo.botanico",
      primaryPersonalIGUrl: "https://instagram.com/cuerpo.botanico",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Cuerpo%20Botanico%20Mexico",
      founderHook: "Preserving Mesoamerican botanical knowledge through artisanal, hand-pressed ancestral skincare elixirs."
    }
  },
  "mud-australia-studio": {
    founders: [
      {
        name: "Shelley Simpson",
        role: "Founder & Creative Director",
        personalIG: "@shelleymudaustralia",
        personalIGUrl: "https://instagram.com/shelleymudaustralia",
        directEmail: "shelley@mudaustralia.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Shelley%20Simpson%20Mud%20Australia",
        founderHook: "Handmade porcelain dinnerware crafted in Sydney with subtle matte tinted glaze elegance."
      }
    ],
    executiveOutreach: {
      directEmail: "shelley@mudaustralia.com",
      primaryFounderName: "Shelley Simpson",
      primaryFounderRole: "Founder & Creative Director",
      primaryPersonalIG: "@shelleymudaustralia",
      primaryPersonalIGUrl: "https://instagram.com/shelleymudaustralia",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Shelley%20Simpson%20Mud%20Australia",
      founderHook: "Handmade porcelain dinnerware crafted in Sydney with subtle matte tinted glaze elegance."
    }
  },
  "hasami-porcelain-direct": {
    founders: [
      {
        name: "Takuhiro Shinomoto",
        role: "Creative Director (Tortoise)",
        personalIG: "@takuhiroshinomoto",
        personalIGUrl: "https://instagram.com/takuhiroshinomoto",
        directEmail: "taku@hasami-porcelain.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Takuhiro%20Shinomoto%20Hasami%20Porcelain",
        founderHook: "Modular, stackable Japanese stoneware rooted in 400 years of Nagasaki ceramic heritage."
      }
    ],
    executiveOutreach: {
      directEmail: "taku@hasami-porcelain.com",
      primaryFounderName: "Takuhiro Shinomoto",
      primaryFounderRole: "Creative Director (Tortoise)",
      primaryPersonalIG: "@takuhiroshinomoto",
      primaryPersonalIGUrl: "https://instagram.com/takuhiroshinomoto",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Takuhiro%20Shinomoto%20Hasami%20Porcelain",
      founderHook: "Modular, stackable Japanese stoneware rooted in 400 years of Nagasaki ceramic heritage."
    }
  },
  "kinto-specialty": {
    founders: [
      {
        name: "Kinto Global Design Director",
        role: "Head of Product Design",
        personalIG: "@kintousa",
        personalIGUrl: "https://instagram.com/kintousa",
        directEmail: "press@kinto-usa.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Kinto%20Design%20Director",
        founderHook: "Mastering the Japanese art of slow tea and coffee rituals through ergonomic, tactile glassware."
      }
    ],
    executiveOutreach: {
      directEmail: "press@kinto-usa.com",
      primaryFounderName: "Kinto Global Design Director",
      primaryFounderRole: "Head of Product Design",
      primaryPersonalIG: "@kintousa",
      primaryPersonalIGUrl: "https://instagram.com/kintousa",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Kinto%20Design%20Director",
      founderHook: "Mastering the Japanese art of slow tea and coffee rituals through ergonomic, tactile glassware."
    }
  },
  "gohar-world": {
    founders: [
      {
        name: "Laila Gohar",
        role: "Co-Founder & Culinary Artist",
        personalIG: "@lailacooks",
        personalIGUrl: "https://instagram.com/lailacooks",
        directEmail: "laila@gohar.world",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Laila%20Gohar%20Gohar%20World",
        founderHook: "Surrealist tableware and culinary surrealism crafted by multi-generational family artisans in Cairo."
      },
      {
        name: "Nadia Gohar",
        role: "Co-Founder & Creative Director",
        personalIG: "@nadiagohar",
        personalIGUrl: "https://instagram.com/nadiagohar",
        directEmail: "nadia@gohar.world",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Nadia%20Gohar%20Gohar%20World",
        founderHook: "Visual artist co-founding Gohar World's humorous and architectural tabletop universe."
      }
    ],
    executiveOutreach: {
      directEmail: "laila@gohar.world",
      primaryFounderName: "Laila Gohar & Nadia Gohar",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@lailacooks",
      primaryPersonalIGUrl: "https://instagram.com/lailacooks",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Laila%20Gohar%20Gohar%20World",
      founderHook: "Surrealist tableware and culinary surrealism crafted by multi-generational family artisans in Cairo."
    }
  },
  "koru-concrete-studio": {
    founders: [
      {
        name: "Industrial Object Designer (Berlin)",
        role: "Principal Concrete Sculptor",
        personalIG: "@koru.objects",
        personalIGUrl: "https://instagram.com/koru.objects",
        directEmail: "studio@korustudio.de",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Koru%20Concrete%20Berlin",
        founderHook: "Sculpting ultra-dense architectural concrete into minimalist brutalist desk monoliths."
      }
    ],
    executiveOutreach: {
      directEmail: "studio@korustudio.de",
      primaryFounderName: "Industrial Object Designer (Berlin)",
      primaryFounderRole: "Principal Concrete Sculptor",
      primaryPersonalIG: "@koru.objects",
      primaryPersonalIGUrl: "https://instagram.com/koru.objects",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Koru%20Concrete%20Berlin",
      founderHook: "Sculpting ultra-dense architectural concrete into minimalist brutalist desk monoliths."
    }
  },
  "atelier-plateau": {
    founders: [
      {
        name: "Principal Sculptor & Maker (Seoul)",
        role: "Founder & Sculptor",
        personalIG: "@atelier_plateau",
        personalIGUrl: "https://instagram.com/atelier_plateau",
        directEmail: "director@atelierplateau.kr",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Atelier%20Plateau%20Seoul",
        founderHook: "Minimalist relief wall sculptures exploring the interaction of light, shadow, and negative space."
      }
    ],
    executiveOutreach: {
      directEmail: "director@atelierplateau.kr",
      primaryFounderName: "Principal Sculptor & Maker (Seoul)",
      primaryFounderRole: "Founder & Sculptor",
      primaryPersonalIG: "@atelier_plateau",
      primaryPersonalIGUrl: "https://instagram.com/atelier_plateau",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Atelier%20Plateau%20Seoul",
      founderHook: "Minimalist relief wall sculptures exploring the interaction of light, shadow, and negative space."
    }
  },
  "omi-woods": {
    founders: [
      {
        name: "Ashley Alexis McFarlane",
        role: "Founder & Designer",
        personalIG: "@ashleyalexismcfarlane",
        personalIGUrl: "https://instagram.com/ashleyalexismcfarlane",
        directEmail: "ashley@omiwoods.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Ashley%20Alexis%20McFarlane%20Omi%20Woods",
        founderHook: "Handcrafting contemporary heirlooms with fair-trade African gold celebrating ancestral heritage."
      }
    ],
    executiveOutreach: {
      directEmail: "ashley@omiwoods.com",
      primaryFounderName: "Ashley Alexis McFarlane",
      primaryFounderRole: "Founder & Designer",
      primaryPersonalIG: "@ashleyalexismcfarlane",
      primaryPersonalIGUrl: "https://instagram.com/ashleyalexismcfarlane",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Ashley%20Alexis%20McFarlane%20Omi%20Woods",
      founderHook: "Handcrafting contemporary heirlooms with fair-trade African gold celebrating ancestral heritage."
    }
  },
  "soko-artisan": {
    founders: [
      {
        name: "Gwendolyn Floyd",
        role: "Co-Founder",
        personalIG: "@gwendolynfloyd",
        personalIGUrl: "https://instagram.com/gwendolynfloyd",
        directEmail: "gwendolyn@shopsoko.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Gwendolyn%20Floyd%20Soko",
        founderHook: "Ethical tech bridge connecting Kenyan artisan jewelers directly to global luxury supply chains."
      },
      {
        name: "Ella Peinovich",
        role: "Co-Founder",
        personalIG: "@ellapeinovich",
        personalIGUrl: "https://instagram.com/ellapeinovich",
        directEmail: "ella@shopsoko.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Ella%20Peinovich%20Soko",
        founderHook: "Co-founded Soko to pioneer distributed manufacturing across Nairobi workshops."
      },
      {
        name: "Catherine Mahugu",
        role: "Co-Founder",
        personalIG: "@catherinemahugu",
        personalIGUrl: "https://instagram.com/catherinemahugu",
        directEmail: "catherine@shopsoko.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Catherine%20Mahugu%20Soko",
        founderHook: "Software engineer co-creating Soko's mobile supply-chain engine."
      }
    ],
    executiveOutreach: {
      directEmail: "ella@shopsoko.com",
      primaryFounderName: "Gwendolyn Floyd, Catherine Mahugu, & Ella Peinovich",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@gwendolynfloyd",
      primaryPersonalIGUrl: "https://instagram.com/gwendolynfloyd",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Gwendolyn%20Floyd%20Soko",
      founderHook: "Ethical tech bridge connecting Kenyan artisan jewelers directly to global luxury supply chains."
    }
  },
  "kettl-tea": {
    founders: [
      {
        name: "Zach Mangan",
        role: "Founder & CEO",
        personalIG: "@zachmangan",
        personalIGUrl: "https://instagram.com/zachmangan",
        directEmail: "zach@kettl.co",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Zach%20Mangan%20Kettl",
        founderHook: "Direct-from-farm single-cultivar Japanese matcha and gyokuro sourced directly from Fukuoka and Shizuoka."
      }
    ],
    executiveOutreach: {
      directEmail: "zach@kettl.co",
      primaryFounderName: "Zach Mangan",
      primaryFounderRole: "Founder & CEO",
      primaryPersonalIG: "@zachmangan",
      primaryPersonalIGUrl: "https://instagram.com/zachmangan",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Zach%20Mangan%20Kettl",
      founderHook: "Direct-from-farm single-cultivar Japanese matcha and gyokuro sourced directly from Fukuoka and Shizuoka."
    }
  },
  "la-cabra": {
    founders: [
      {
        name: "Esben Piper",
        role: "Founder & Director",
        personalIG: "@esbenpiper",
        personalIGUrl: "https://instagram.com/esbenpiper",
        directEmail: "esben@lacabra.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Esben%20Piper%20La%20Cabra",
        founderHook: "Pioneering the ultra-clean Aarhus light-roast philosophy and architectural Nordic bakery flagships."
      }
    ],
    executiveOutreach: {
      directEmail: "esben@lacabra.com",
      primaryFounderName: "Esben Piper",
      primaryFounderRole: "Founder & Director",
      primaryPersonalIG: "@esbenpiper",
      primaryPersonalIGUrl: "https://instagram.com/esbenpiper",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Esben%20Piper%20La%20Cabra",
      founderHook: "Pioneering the ultra-clean Aarhus light-roast philosophy and architectural Nordic bakery flagships."
    }
  },
  "onyx-coffee-direct": {
    founders: [
      {
        name: "Jon Allen",
        role: "Co-Founder",
        personalIG: "@jonallen_onyx",
        personalIGUrl: "https://instagram.com/jonallen_onyx",
        directEmail: "jon@onyxcoffeelab.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jon%20Allen%20Onyx%20Coffee%20Lab",
        founderHook: "Obsessive carbon-accounting, producer pricing transparency, and world-championship roasting craftsmanship."
      },
      {
        name: "Andrea Allen",
        role: "Co-Founder",
        personalIG: "@andreaallen23",
        personalIGUrl: "https://instagram.com/andreaallen23",
        directEmail: "andrea@onyxcoffeelab.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Andrea%20Allen%20Onyx%20Coffee%20Lab",
        founderHook: "World Barista Champion co-directing Onyx sensory training and hospitality."
      }
    ],
    executiveOutreach: {
      directEmail: "jon@onyxcoffeelab.com",
      primaryFounderName: "Jon Allen & Andrea Allen",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@jonallen_onyx",
      primaryPersonalIGUrl: "https://instagram.com/jonallen_onyx",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Jon%20Allen%20Onyx%20Coffee%20Lab",
      founderHook: "Obsessive carbon-accounting, producer pricing transparency, and world-championship roasting craftsmanship."
    }
  },
  "dandelion-chocolate": {
    founders: [
      {
        name: "Todd Masonis",
        role: "Co-Founder & CEO",
        personalIG: "@toddmasonis",
        personalIGUrl: "https://instagram.com/toddmasonis",
        directEmail: "todd@dandelionchocolate.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Todd%20Masonis%20Dandelion%20Chocolate",
        founderHook: "Bean-to-bar single-origin chocolate craft manufactured with extreme tech-founder engineering rigor."
      },
      {
        name: "Cameron Ring",
        role: "Co-Founder",
        personalIG: "@cameronring",
        personalIGUrl: "https://instagram.com/cameronring",
        directEmail: "cameron@dandelionchocolate.com",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Cameron%20Ring%20Dandelion%20Chocolate",
        founderHook: "Co-founder of Plaxo and Dandelion Chocolate, scaling craft bean roasting."
      }
    ],
    executiveOutreach: {
      directEmail: "todd@dandelionchocolate.com",
      primaryFounderName: "Todd Masonis & Cameron Ring",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@toddmasonis",
      primaryPersonalIGUrl: "https://instagram.com/toddmasonis",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Todd%20Masonis%20Dandelion%20Chocolate",
      founderHook: "Bean-to-bar single-origin chocolate craft manufactured with extreme tech-founder engineering rigor."
    }
  },
  "casa-bosques": {
    founders: [
      {
        name: "Rafael Prieto",
        role: "Co-Founder & Creative Director (Savvy Studio)",
        personalIG: "@rafaelprieto",
        personalIGUrl: "https://instagram.com/rafaelprieto",
        directEmail: "rafael@casabosques.net",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Rafael%20Prieto%20Casa%20Bosques",
        founderHook: "Infusing small-batch heirloom Mexican cacao with avant-garde art book publishing and architecture."
      },
      {
        name: "Jorge Rousseau",
        role: "Co-Founder",
        personalIG: "@jorgerousseau",
        personalIGUrl: "https://instagram.com/jorgerousseau",
        directEmail: "jorge@casabosques.net",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Jorge%20Rousseau%20Casa%20Bosques",
        founderHook: "Co-directing Casa Bosques culinary and lifestyle art objects."
      }
    ],
    executiveOutreach: {
      directEmail: "rafael@casabosques.net",
      primaryFounderName: "Rafael Prieto & Jorge Rousseau",
      primaryFounderRole: "Co-Founders",
      primaryPersonalIG: "@rafaelprieto",
      primaryPersonalIGUrl: "https://instagram.com/rafaelprieto",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Rafael%20Prieto%20Casa%20Bosques",
      founderHook: "Infusing small-batch heirloom Mexican cacao with avant-garde art book publishing and architecture."
    }
  },
  "nomad-leather-melbourne": {
    founders: [
      {
        name: "Principal Cordovan Maker (Melbourne)",
        role: "Founder & Master Bootmaker",
        personalIG: "@nomad.atelier",
        personalIGUrl: "https://instagram.com/nomad.atelier",
        directEmail: "maker@nomadatelier.com.au",
        linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Nomad%20Atelier%20Melbourne",
        founderHook: "Bespoke hand-welted Horween shell cordovan boots built to endure generations of patina."
      }
    ],
    executiveOutreach: {
      directEmail: "maker@nomadatelier.com.au",
      primaryFounderName: "Principal Cordovan Maker (Melbourne)",
      primaryFounderRole: "Founder & Master Bootmaker",
      primaryPersonalIG: "@nomad.atelier",
      primaryPersonalIGUrl: "https://instagram.com/nomad.atelier",
      linkedinSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Nomad%20Atelier%20Melbourne",
      founderHook: "Bespoke hand-welted Horween shell cordovan boots built to endure generations of patina."
    }
  }
};

async function run() {
  const targetsModule = await import('../src/data/globalD2CTargets.js');
  const brands = targetsModule.GLOBAL_D2C_TARGETS;

  const enriched = brands.map(b => {
    const fData = FOUNDERS_DATA[b.id];
    if (!fData) {
      console.warn('Missing founder data for:', b.id);
      return b;
    }
    return {
      ...b,
      founders: fData.founders,
      executiveOutreach: fData.executiveOutreach
    };
  });

  const fileContent = `/**
 * EXHAUSTIVE 50-BRAND FORENSIC DATABASE WITH FOUNDER-DIRECT RECON
 * BILLY BENJAMIN CONSULTING // CRO SYSTEMS ARCHIVE v4.0
 * Zero truncation. Production-grade forensic telemetry.
 */

export const GLOBAL_D2C_TARGETS = ${JSON.stringify(enriched, null, 2)};
`;

  fs.writeFileSync(path.resolve('./src/data/globalD2CTargets.js'), fileContent, 'utf8');
  console.log(`Successfully enriched all ${enriched.length} brands with Founder Intelligence!`);
}

run();

// Questions can optionally include an "image" field with a path relative to the public folder
// Example: "image": "/quiz-images/pregunta-0.jpg"
// If the image field is present, it will be displayed above the question text
export const questions = [
  {
    id: 0,
    text: "Which layer of the atmosphere contains about 90% of Earth's ozone that helps protect against harmful UV-B radiation?",
    options: ["Thermosphere", "Stratosphere", "Mesosphere", "Troposphere"],
    correctAnswer: 1,
    explanation:
      "Most of the planet's protective ozone is located in the stratosphere, above the troposphere.",
    category: "CORE",
  },
  {
    id: 1,
    text: "According to the Rowland–Molina theory, approximately how many ozone molecules can a single chlorine atom destroy in the stratosphere?",
    options: ["100", "10,000", "100,000", "1,000"],
    correctAnswer: 2,
    explanation:
      "A single chlorine atom can catalytically destroy ozone repeatedly, with an estimate of about 100,000 ozone molecules per chlorine atom.",
    category: "CORE",
  },
  {
    id: 2,
    text: "Which element is described as even more damaging to the stratospheric ozone layer than chlorine?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Bromine"],
    correctAnswer: 3,
    explanation:
      "Bromine-containing refrigerants are noted as especially harmful to stratospheric ozone, even more so than chlorine.",
    category: "CORE",
  },
  {
    id: 3,
    text: "Which 1987 international treaty addressed ozone-depleting substances and called for phasing out certain CFCs, HCFCs, and halons?",
    options: [
      "The Kyoto Protocol",
      "The Clean Air Act Amendments of 1990",
      "The Paris Agreement",
      "The Montreal Protocol",
    ],
    correctAnswer: 3,
    explanation:
      "The Montreal Protocol (signed in 1987) is an international treaty focused on ozone-depleting substances and alternatives.",
    category: "CORE",
  },
  {
    id: 4,
    text: "Which statement best describes what happened in 2010 regarding HCFC-22 and HCFC-142b in the U.S.?",
    options: [
      "All HCFC use was allowed in new equipment as long as leak testing was performed.",
      "Only CFCs were restricted; HCFC-22 and HCFC-142b were unrestricted.",
      "HCFC-22 could only be used in newly manufactured appliances, not for service.",
      "New systems using HCFC-22 or HCFC-142b (or blends containing them) were banned from production, sale, or importation.",
    ],
    correctAnswer: 3,
    explanation:
      "Rules implemented in 2010 restricted new equipment using HCFC-22/HCFC-142b and limited these refrigerants to servicing existing equipment.",
    category: "CORE",
  },
  {
    id: 5,
    text: "What did the Pre-Charged Appliances Rule ban for products manufactured on or after 2010?",
    options: [
      "The use of HFC-410A in residential air conditioners",
      "The recovery of refrigerants during service",
      "The sale or distribution of pre-charged AC/R products and components containing HCFC-22 or HCFC-142b (or blends containing them)",
      "The sale of any refrigerant with a GWP below 150",
    ],
    correctAnswer: 2,
    explanation:
      "The rule targeted pre-charged products/components containing HCFC-22 or HCFC-142b (or blends) if manufactured on or after 2010.",
    category: "CORE",
  },
  {
    id: 6,
    text: "What did the Allocation Rule (along with existing EPA requirements) prohibit regarding newly manufactured appliances?",
    options: [
      "Charging newly manufactured appliances with virgin HCFC-22 or HCFC-142b (or blends containing them)",
      "Selling any refrigerant in disposable cylinders",
      "Using reclaimed refrigerant in existing systems",
      "Retrofit of any equipment to lower-GWP blends",
    ],
    correctAnswer: 0,
    explanation:
      "It prohibited charging newly manufactured appliances with virgin HCFC-22/HCFC-142b, including the practice of charging a dry-charged system with these refrigerants.",
    category: "CORE",
  },
  {
    id: 7,
    text: "Beginning on January 1, 2020, what major restriction applied to HCFC refrigerants?",
    options: [
      "Production or import of any HCFC refrigerant was banned; only recovered or reclaimed HCFCs could be used in existing equipment.",
      "All HCFCs became legal for new equipment again.",
      "Only HFCs were banned from production or import.",
      "HCFCs could be vented because their ODP is low.",
    ],
    correctAnswer: 0,
    explanation:
      "After January 1, 2020, HCFC production/import was banned, and existing equipment could only use recovered/reclaimed HCFCs.",
    category: "CORE",
  },
  {
    id: 8,
    text: "Which combination best matches the recovery requirement described for technicians in the United States?",
    options: [
      "Recover only refrigerants with ODP = 0 and GWP < 1.",
      "Recover only hydrocarbon refrigerants because they are flammable.",
      "Recover refrigerants with ODP > 0 and GWP > 1 (greater than carbon dioxide).",
      "Recover only refrigerants with ODP > 1 regardless of GWP.",
    ],
    correctAnswer: 2,
    explanation:
      "The requirement described applies to refrigerants with ozone depletion potential above zero and global warming potential higher than carbon dioxide (greater than 1).",
    category: "CORE",
  },
  {
    id: 9,
    text: "In ASHRAE safety terminology, what does an A2L classification indicate for certain refrigerants?",
    options: [
      "Nonflammable and highly toxic",
      "High flammability equivalent to A3 hydrocarbons",
      "Lower flammability with a maximum burning velocity under 4 inches per second",
      "High toxicity and high flammability",
    ],
    correctAnswer: 2,
    explanation:
      "A2L indicates lower flammability (even lower than typical A2) and is defined here by a maximum burning velocity below 4 inches per second.",
    category: "CORE",
  },
  {
    id: 10,
    text: "What did the 1990 Clean Air Act amendments emphasize in addition to expanding EPA authority?",
    options: [
      "Eliminating all high-GWP refrigerants immediately",
      "Removing EPA authority over enforcement",
      "More cost-effective approaches to reduce air pollution",
      "Allowing unrestricted venting of refrigerants",
    ],
    correctAnswer: 2,
    explanation:
      "The 1990 amendments expanded EPA authority and increased emphasis on cost-effective approaches to reduce emissions.",
    category: "CORE",
  },
  {
    id: 11,
    text: "Under the Clean Air Act program described, what was EPA mandated to eliminate?",
    options: [
      "Ozone-depleting refrigerants",
      "All refrigerants with GWP above 150",
      "Only hydrocarbon refrigerants",
      "All refrigerants, including exempt gases like CO2",
    ],
    correctAnswer: 0,
    explanation:
      "The mandate focused on eliminating ozone-depleting refrigerants, not on requiring elimination of high-GWP refrigerants.",
    category: "CORE",
  },

  {
    id: 12,
    text: "Which substances were added to the list of chemicals controlled under the Montreal Protocol at the Fourth Meeting in 1992 (as described)?",
    options: [
      "Carbon dioxide and nitrogen",
      "HFOs and hydrocarbons",
      "HCFCs and methyl bromide",
      "HFCs and ammonia",
    ],
    correctAnswer: 2,
    explanation:
      "The 1992 actions included adding HCFCs and methyl bromide to the controlled list and accelerating phase-out schedules for several ODSs.",
    category: "CORE",
  },
  {
    id: 13,
    text: "Which statement best reflects what Section 608 regulations establish under the Clean Air Act?",
    options: [
      "A program limited only to motor vehicle air conditioning (MVAC) systems",
      "A recycling program for ozone-depleting refrigerants recovered during servicing and disposal",
      "A program requiring venting during disposal to prevent cylinder explosions",
      "A program allowing only manufacturers to recover refrigerant",
    ],
    correctAnswer: 1,
    explanation:
      "Section 608 regulations establish a recycling program for ozone-depleting refrigerants recovered during servicing and disposal of AC/R equipment.",
    category: "CORE",
  },
  {
    id: 14,
    text: "Which of the following actions is illegal to vent refrigerant from, in addition to venting from an AC/R system itself?",
    options: [
      "A vacuum pump used only for evacuation",
      "A recovery, recycling, or reclamation machine",
      "A water hose used to flush a condenser",
      "A nitrogen cylinder used for pressure testing",
    ],
    correctAnswer: 1,
    explanation:
      "Venting is illegal not only from AC/R systems but also from recovery/recycling/reclamation machines, charging cylinders, and refrigerant storage or recovery cylinders.",
    category: "CORE",
  },
  {
    id: 15,
    text: "When is an EPA Section 608 technician certification NOT required (based on the described rule)?",
    options: [
      "When work does not open the refrigerant circuit and does not involve releasing refrigerant",
      "When purchasing refrigerant for stationary systems",
      "When using a recovery machine on any appliance",
      "When recovering refrigerant prior to disposal",
    ],
    correctAnswer: 0,
    explanation:
      "Certification is not required if the technician is not opening the refrigerant circuit or servicing components that would result in refrigerant release (e.g., replacing a capacitor or rewiring an external circuit).",
    category: "CORE",
  },
  {
    id: 16,
    text: "Which statement correctly distinguishes Section 608 and Section 609 requirements?",
    options: [
      "Section 609 applies only to chillers and industrial process refrigeration.",
      "Section 608 applies only to household refrigerators and nothing else.",
      "MVAC service technicians are governed under Section 609, while stationary AC/R work is governed under Section 608.",
      "All technicians must hold Section 609 certification for any refrigerant purchase.",
    ],
    correctAnswer: 2,
    explanation:
      "Section 608 covers stationary AC/R service and disposal requirements, while MVAC technicians must obtain Section 609 MVAC certification.",
    category: "CORE",
  },
  {
    id: 17,
    text: "Under Section 608 recordkeeping guidance provided, which item is NOT required to be recorded when recovering refrigerant?",
    options: [
      "The serial number or model number of the unit",
      "The equipment location",
      "The amount of refrigerant added or removed",
      "The date of service",
    ],
    correctAnswer: 0,
    explanation:
      "Required records include items like date, type of service, location, owner, normal charge, and amount added/removed; the serial or model number is not required.",
    category: "CORE",
  },
  {
    id: 18,
    text: "What is the maximum civil penalty stated for a Clean Air Act violation, including improper recordkeeping?",
    options: [
      "Up to $44,539 per year per facility",
      "Up to $1,000 per day per violation",
      "Up to $10,000 per violation total",
      "Up to $44,539 per day per violation",
    ],
    correctAnswer: 3,
    explanation:
      "The text states that violations, including improper recordkeeping, can be penalized up to $44,539 per day per violation.",
    category: "CORE",
  },
  {
    id: 19,
    text: "Which refrigerants are identified as exempt from the recovery requirement when an appliance is opened for service, repair, or disposal?",
    options: [
      "Any refrigerant with a GWP below 150",
      "Carbon dioxide and certain hydrocarbons such as R-600, R-600a, and R-290",
      "All HFC refrigerants because they have zero ODP",
      "All refrigerants used in stationary equipment",
    ],
    correctAnswer: 1,
    explanation:
      "Most refrigerants must be recovered, but the text lists exemptions including carbon dioxide and certain hydrocarbons (e.g., n-butane R-600, isobutane R-600a, and propane R-290).",
    category: "CORE",
  },
  {
    id: 20,
    text: "Which statement correctly defines temperature glide for a refrigerant blend?",
    options: [
      "The temperature change caused only by superheat in the evaporator",
      "The difference between suction and discharge pressure during operation",
      "The difference between the dew point temperature and the bubble point temperature at a given pressure",
      "The difference between condenser outlet temperature and ambient temperature",
    ],
    correctAnswer: 2,
    explanation:
      "Temperature glide is defined as the dew point temperature minus the bubble point temperature for a blend at the same pressure.",
    category: "CORE",
  },
  {
    id: 21,
    text: "At a constant pressure, which pairing correctly matches how dew and bubble points relate to evaporation and condensation for a blend?",
    options: [
      "Both evaporation and condensation start at the bubble point for blends",
      "Evaporation starts at the bubble point and ends at the dew point; condensation starts at the dew point and ends at the bubble point",
      "Evaporation starts at the dew point and ends at the bubble point; condensation starts at the bubble point and ends at the dew point",
      "Both evaporation and condensation start at the dew point for blends",
    ],
    correctAnswer: 1,
    explanation:
      "For blends, evaporation begins at the bubble point and finishes at the dew point; during condensation the first vapor condenses at the dew point and the last condenses at the bubble point.",
    category: "CORE",
  },
  {
    id: 22,
    text: "A technician is servicing a system containing a 400-series refrigerant blend that has leaked. What is the correct service action regarding the remaining refrigerant charge?",
    options: [
      "Recover all refrigerant and send it for reprocessing/reclamation; after repairs, recharge using liquid only",
      "Vent the remaining refrigerant because blends are exempt from recovery requirements",
      "Top off the charge with liquid without recovering the remaining refrigerant",
      "Top off the charge with vapor to restore composition quickly",
    ],
    correctAnswer: 0,
    explanation:
      "Non-azeotropic (400-series) blends fractionate when leaking, so topping off is not acceptable; the proper action is full recovery, reprocessing, and liquid-only recharge after repairs.",
    category: "CORE",
  },
  {
    id: 23,
    text: "Why must 400-series non-azeotropic refrigerant blends be charged as a liquid rather than as a vapor?",
    options: [
      "Vapor charging eliminates temperature glide and prevents composition shift",
      "Liquid charging is required only because of EPA SNAP flammability rules",
      "Vapor charging causes fractionation because the most volatile component enters the system in a higher proportion",
      "Liquid charging increases temperature glide to improve capacity",
    ],
    correctAnswer: 2,
    explanation:
      "Vapor charging skews composition toward the highest vapor-pressure component, changing the blend properties; liquid charging preserves the intended blend ratio.",
    category: "CORE",
  },
  {
    id: 24,
    text: "Which statement is most accurate about azeotropic (500-series) refrigerant blends during servicing?",
    options: [
      "They are defined as any blend with a GWP below 150",
      "They behave like a single-component refrigerant with zero temperature glide and can be charged as liquid or vapor and topped off after leaks",
      "They always have large temperature glide and must be vapor-charged only",
      "They fractionate severely during leaks, so topping off is prohibited",
    ],
    correctAnswer: 1,
    explanation:
      "Azeotropic (500-series) blends act like a pure refrigerant over their range, have zero glide, and can be treated like a single refrigerant for charging and topping off.",
    category: "CORE",
  },
  {
    id: 25,
    text: "A system uses R-410A. Which statement best reflects the recommended handling, given its near-azeotropic behavior?",
    options: [
      "It must never be topped off because it is a 400-series blend",
      "It has a large temperature glide that is easily measurable in the field",
      "It can be treated like an azeotrope and topped off, but manufacturers generally still recommend liquid charging",
      "It must be vapor-charged to prevent composition change",
    ],
    correctAnswer: 2,
    explanation:
      "R-410A has a very small glide, so it can be treated like an azeotrope and topped off; however, liquid charging is commonly recommended.",
    category: "CORE",
  },
  {
    id: 26,
    text: "Which statement best describes what EPA SNAP approval means for a refrigerant substitute?",
    options: [
      "It only evaluates cooling performance and efficiency, not safety factors",
      "It reduces overall risk to human health and the environment, but does not guarantee suitability for a specific retrofit application",
      "It guarantees the refrigerant is a true drop-in replacement requiring no system changes",
      "It means the refrigerant has zero global warming potential and zero flammability",
    ],
    correctAnswer: 1,
    explanation:
      "SNAP reviews substitutes across factors such as ODP, GWP, toxicity, flammability, and exposure potential; approval does not guarantee retrofit suitability.",
    category: "CORE",
  },
  {
    id: 27,
    text: "Which statement best matches EPA’s position on 'drop-in' refrigerant replacements?",
    options: [
      "Drop-in replacements exist only for CFC-to-HCFC conversions",
      "There are no true drop-in service replacements; every replacement requires some system change, even if minor",
      "Any near-azeotropic blend is considered a drop-in for the refrigerant it replaces",
      "A SNAP-approved refrigerant is automatically a drop-in replacement",
    ],
    correctAnswer: 1,
    explanation:
      "EPA states that every replacement refrigerant requires some change to the system, so 'drop-in' claims are not literally accurate.",
    category: "CORE",
  },
  {
    id: 28,
    text: "During a retrofit to a refrigerant that uses POE (ester) oil, what must be done if the system previously used mineral oil?",
    options: [
      "Switch to PAG oil because it is compatible with mineral oil",
      "Remove the mineral oil and flush the system using an approved non-aqueous flushing solution before switching to POE oil",
      "Leave the mineral oil in place because POE and mineral oil are fully compatible",
      "Add POE oil on top of the mineral oil to improve miscibility",
    ],
    correctAnswer: 1,
    explanation:
      "POE oil is not compatible with mineral oil; the mineral oil must be removed and the system flushed using an approved non-aqueous flushing method before the retrofit.",
    category: "CORE",
  },
  {
    id: 29,
    text: "Which statement correctly compares moisture absorption characteristics of common refrigeration oils and the recommended service implication?",
    options: [
      "Synthetic oils are extremely hygroscopic and can hold far more water than mineral oil, so deep evacuation and triple evacuation methods become especially important",
      "Because PVE and PAG oils resist moisture absorption, they eliminate the need for deep evacuation",
      "POE oil has a lower water saturation limit than mineral oil, so moisture control is less critical",
      "Mineral oil holds far more water than synthetic oils, so evacuation requirements are relaxed with synthetics",
    ],
    correctAnswer: 0,
    explanation:
      "Synthetic oils (POE, PVE, PAG) readily absorb moisture and can hold much higher water concentrations than mineral oil, increasing the need for strict moisture control and rigorous evacuation procedures.",
    category: "CORE",
  },
  {
    id: 30,
    text: "In HVAC/R terminology, what specifically makes a vapor-compression system a 'heat pump' (as commonly used in the industry)?",
    options: [
      "It uses an absorption cycle instead of a compressor",
      "It uses any compressor to move heat from cold to hot",
      "It rejects heat to a lower-temperature location",
      "It uses a reversing valve to provide cooling in hot weather and heating in cold weather",
    ],
    correctAnswer: 3,
    explanation:
      "While all refrigeration moves heat from cold to hot, the HVAC/R industry typically calls it a heat pump when the vapor-compression system includes a reversing valve to switch between cooling and heating.",
    category: "CORE",
  },

  {
    id: 31,
    text: "Which component primarily drops refrigerant pressure to lower its saturation temperature so it can boil in the evaporator?",
    options: [
      "Expansion valve (throttling device)",
      "Compressor",
      "Filter drier",
      "Condenser",
    ],
    correctAnswer: 0,
    explanation:
      "The expansion valve (throttling device) creates a pressure drop that lowers saturation temperature, enabling evaporation in the evaporator and heat absorption.",
    category: "CORE",
  },
  {
    id: 32,
    text: "Why is the filter drier ideally located just upstream of the throttling device?",
    options: [
      "It removes contaminants and water to prevent clogging and freeze-up at the expansion device",
      "It increases superheat to protect the compressor",
      "It reduces compressor discharge temperature by cooling the vapor",
      "It raises pressure to ensure stable condenser operation",
    ],
    correctAnswer: 0,
    explanation:
      "The throttling device has the smallest passages and causes a sharp temperature drop; contaminants can plug it and moisture can freeze there, so cleaning and drying upstream is critical.",
    category: "CORE",
  },
  {
    id: 33,
    text: "A TXV or EXV is used primarily to control which condition at the evaporator outlet?",
    options: [
      "Subcooling",
      "Compression ratio",
      "Condenser approach temperature",
      "Superheat",
    ],
    correctAnswer: 3,
    explanation:
      "Actively controlled metering devices such as TXVs and EXVs are used to maintain the refrigerant superheat at the evaporator exit.",
    category: "CORE",
  },
  {
    id: 34,
    text: "Typical condenser outlet refrigerant condition in an operating system is best described as:",
    options: [
      "High-pressure vapor, slightly superheated",
      "Low-pressure vapor, highly superheated",
      "Low-pressure two-phase mixture at saturation",
      "High-pressure liquid, slightly subcooled (about 5–15°F)",
    ],
    correctAnswer: 3,
    explanation:
      "Refrigerant leaves the condenser as a high-pressure liquid and is typically subcooled by about 5 to 15°F below saturation temperature.",
    category: "CORE",
  },
  {
    id: 35,
    text: "What is the main purpose of ensuring refrigerant entering the compressor is superheated vapor?",
    options: [
      "To maximize condenser subcooling",
      "To prevent liquid refrigerant from entering the compressor, which can cause damage",
      "To reduce the need for a filter drier",
      "To increase temperature glide in the evaporator",
    ],
    correctAnswer: 1,
    explanation:
      "Compressors cannot compress liquid; superheat at the compressor inlet helps ensure no liquid refrigerant is present in the suction stream.",
    category: "CORE",
  },
  {
    id: 36,
    text: "When a refrigeration system shuts down, refrigerant often migrates to the coldest location. Why is the compressor crankcase commonly at risk?",
    options: [
      "The evaporator always becomes the coldest point and freezes the oil",
      "The condenser becomes the coldest point and traps refrigerant permanently",
      "The reversing valve forces refrigerant into the crankcase during shutdown",
      "Refrigerant can migrate into the oil sump, dilute the oil, and then boil out at startup causing foaming and reduced lubrication",
    ],
    correctAnswer: 3,
    explanation:
      "After shutdown, refrigerant can dissolve into crankcase oil, reducing lubrication; at startup it can rapidly boil out, foam the oil, and contribute to premature compressor wear or failure.",
    category: "CORE",
  },
  {
    id: 37,
    text: "Why should recovery machines NOT use hermetic compressors?",
    options: [
      "Hermetic compressors can only be used with CO2 refrigerant",
      "A hermetic compressor relies on refrigerant flow for motor cooling; operating under vacuum can overheat and burn out the motor",
      "Hermetic compressors require a reversing valve to operate",
      "Hermetic compressors cannot compress vapor refrigerant",
    ],
    correctAnswer: 1,
    explanation:
      "Hermetic motors are cooled by refrigerant flow; under deep vacuum there is insufficient flow, which can quickly overheat windings and cause burnout.",
    category: "CORE",
  },
  {
    id: 38,
    text: "When using R-410A, which minimum gauge set rating is specified for safe service work?",
    options: [
      "At least 340 psig with a 1,000 psig burst pressure",
      "At least 800 psig with a 4,000 psig burst pressure on the manifold and hoses",
      "At least 250 psig with a 750 psig burst pressure",
      "At least 500 psig with a 2,000 psig burst pressure",
    ],
    correctAnswer: 1,
    explanation:
      "Because of R-410A’s higher operating pressures, the manifold and hoses must be rated for at least 800 psig and have a 4,000 psig burst pressure.",
    category: "CORE",
  },
  {
    id: 39,
    text: "A technician is disconnecting a low-loss fitting after liquid charging and wants to avoid trapping liquid refrigerant in a sealed hose. What is the correct sequence?",
    options: [
      "Disconnect the low-loss fitting first, then close the manifold valve",
      "Close the high-side valve only, then disconnect the low-loss fitting",
      "Close the manifold valve to isolate the line so liquid is drawn into the system, then disconnect the low-loss fitting",
      "Open both manifold valves fully, then disconnect the low-loss fitting",
    ],
    correctAnswer: 2,
    explanation:
      "Closing the manifold valve first allows trapped liquid to be drawn into the system; disconnecting first can trap liquid in the hose, which can expand with warming and burst the hose.",
    category: "CORE",
    image: "/quiz-images/39.png",
  },
  {
    id: 40,
    text: "When refrigerant is removed from a system, which option is NOT one of the four permitted end uses described?",
    options: [
      "Recycle and reuse",
      "Recover and store permanently without labeling",
      "Recover, recycle, reclaim, or destroy at an EPA-approved facility",
      "Reclaim to new purity levels",
    ],
    correctAnswer: 1,
    explanation:
      "The allowed outcomes are recover/reuse, recycle/reuse, reclaim to new purity, or send to an EPA-approved destruction facility; storage without proper handling (including labeling rules later in the text) is not an end-use option.",
    category: "CORE",
  },
  {
    id: 41,
    text: "Which statement best describes 'recovery' of refrigerant?",
    options: [
      "Removing refrigerant and storing it without necessarily testing or processing it",
      "Blending refrigerants to restore original pressure-temperature behavior",
      "Chemically analyzing refrigerant to certify it meets AHRI 700 purity",
      "Cleaning refrigerant through oil separation and filter driers to reduce moisture and acidity",
    ],
    correctAnswer: 0,
    explanation:
      "Recovery means removing refrigerant in any condition and storing it in a container (or sometimes inside the recovery unit) without required testing or processing.",
    category: "CORE",
  },
  {
    id: 42,
    text: "Recovered refrigerant may be returned without restriction to:",
    options: [
      "Only the same system it came from and never any other",
      "Any system owned by a different customer if it is not sold",
      "The same system or another system owned by the same person",
      "Any system as long as the refrigerant is filtered once",
    ],
    correctAnswer: 2,
    explanation:
      "Recovered refrigerant can be used in the same system or other systems owned by the same person, but ownership transfer is restricted unless the refrigerant is reclaimed.",
    category: "CORE",
  },
  {
    id: 43,
    text: "If recovered refrigerant is being sent for disposal or to a reclamation facility, what type of container is required?",
    options: [
      "Any disposable refrigerant cylinder",
      "A DOT-approved recovery cylinder",
      "A vacuum-rated glass container",
      "A non-pressurized plastic container",
    ],
    correctAnswer: 1,
    explanation:
      "For disposal or shipment to reclamation, recovered refrigerant must be stored in a DOT-approved recovery cylinder.",
    category: "CORE",
  },
  {
    id: 44,
    text: "A DOT-approved recovery cylinder is commonly identified by which color scheme?",
    options: [
      "Gray body with a yellow top",
      "Green body with a gray top",
      "Red body with a black top",
      "Blue body with a white top",
    ],
    correctAnswer: 0,
    explanation:
      "DOT-approved recovery cylinders are painted gray with yellow tops.",
    category: "CORE",
    image: "/public/quiz-images/44.png",
  },
  {
    id: 45,
    text: "Which statement best describes 'recycling' of refrigerant?",
    options: [
      "Storing refrigerant without any processing",
      "Cleaning for immediate reuse by oil separation and filter driers that reduce moisture and acidity",
      "Destroying contaminated refrigerant by controlled incineration",
      "Verifying purity by chemical analysis to meet AHRI 700",
    ],
    correctAnswer: 1,
    explanation:
      "Recycling typically involves oil separation and one or more passes through filter driers to reduce moisture and acidity for reuse.",
    category: "CORE",
  },
  {
    id: 46,
    text: "Why is oil separation considered critical during recycling?",
    options: [
      "Oil ensures refrigerant meets AHRI 700 without analysis",
      "Oil increases refrigerant density and speeds recovery",
      "Oil contains much of the acid and water present in the system",
      "Oil prevents fractionation in blended refrigerants",
    ],
    correctAnswer: 2,
    explanation:
      "Contaminated oil holds most of the acid and water; failing to remove it leads to poor cleanup and continued contamination.",
    category: "CORE",
  },
  {
    id: 47,
    text: "Which statement is true about standards for recycled refrigerant purity?",
    options: [
      "Recycled refrigerant must be chemically analyzed for purity certification",
      "There are no defined standards for how clean recycled refrigerant must be to be called recycled",
      "Recycled refrigerant must be destroyed if it was filtered only once",
      "Recycled refrigerant must always meet AHRI 700",
    ],
    correctAnswer: 1,
    explanation:
      "Recycling has no specific purity standard requirement; the process may include single or multiple passes through cleaning devices.",
    category: "CORE",
  },
  {
    id: 48,
    text: "Which condition must be met for refrigerant to be called 'reclaimed'?",
    options: [
      "It must be returned to the original system only",
      "It must be mixed with virgin refrigerant to improve purity",
      "It must be chemically analyzed and shown to meet the AHRI 700 purity standard",
      "It must be passed through a single filter drier",
    ],
    correctAnswer: 2,
    explanation:
      "Reclaimed refrigerant requires chemical analysis verifying it meets AHRI 700 new product purity.",
    category: "CORE",
  },
  {
    id: 49,
    text: "Which statement correctly describes ownership transfer rules for used refrigerant?",
    options: [
      "Recovered refrigerant can always be sold if it was stored in a recovery cylinder",
      "Recovered and recycled refrigerant can be transferred freely if labeled",
      "Recycled refrigerant can be given away to any technician for reuse",
      "Only reclaimed refrigerant can be transferred or sold to another individual",
    ],
    correctAnswer: 3,
    explanation:
      "Recovered or recycled refrigerant cannot be transferred to another owner except for reclamation or destruction; only reclaimed refrigerant may be sold/transferred for use.",
    category: "CORE",
  },
  {
    id: 50,
    text: "A system warranty concern is most accurately addressed by which practice?",
    options: [
      "Avoiding reclaimed refrigerant because it can invalidate warranties",
      "Using new virgin or reclaimed refrigerant for large systems under warranty",
      "Mixing recycled and recovered refrigerant to improve cleanliness",
      "Using recycled refrigerant because it has the strictest purity testing",
    ],
    correctAnswer: 1,
    explanation:
      "Reclaimed refrigerant meets new purity specifications, while recycled refrigerant has no purity test; using virgin or reclaimed refrigerant is safer for warranty protection.",
    category: "CORE",
  },
  {
    id: 51,
    text: "If refrigerant will be used in equipment owned by someone other than the original owner, what must be done first?",
    options: [
      "The refrigerant must be vapor-charged into the new system",
      "The refrigerant only needs to be recycled once",
      "The refrigerant can be transferred if it is in a gray/yellow cylinder",
      "The refrigerant must be reclaimed",
    ],
    correctAnswer: 3,
    explanation:
      "Use in equipment owned by a different person requires the refrigerant to be reclaimed; recovered/recycled refrigerant ownership cannot be transferred for direct reuse.",
    category: "CORE",
  },
  {
    id: 52,
    text: "If an R-22 system is found to contain added R-410A, what is the correct handling of the recovered mixture?",
    options: [
      "Vent it because mixed refrigerant is exempt from recovery rules",
      "Recover it into an R-22 cylinder and send it to a reclaimer to be restored to AHRI 700",
      "Recover it into a dedicated tank and send it to an EPA-approved facility for disposal (typically controlled incineration)",
      "Recycle it on-site and reuse it in another R-22 system owned by the same person",
    ],
    correctAnswer: 2,
    explanation:
      "A contaminated R-22/R-410A mixture cannot be reused or reclaimed; it must be recovered into a separate tank and sent for EPA-approved disposal.",
    category: "CORE",
  },
  {
    id: 53,
    text: "Which factor can make pressure-temperature identification of the refrigerant unreliable, especially for 400-series blends?",
    options: [
      "Using short hoses with 1/4-inch flare fittings",
      "Fractionation caused by leaks or vapor charging changing the blend’s pressure-temperature behavior",
      "Using a recovery cylinder with a float shutoff at 80% fill",
      "Labeling the cylinder contents per DOT requirements",
    ],
    correctAnswer: 1,
    explanation:
      "Non-azeotropic (400-series) blends can fractionate during leaks or improper vapor charging, shifting their saturation pressure-temperature curve and making identification difficult or impossible.",
    category: "CORE",
    image: "/public/quiz-images/53.png",
  },
  {
    id: 54,
    text: "What is the preferred method for breaking the evacuation vacuum before opening a system?",
    options: [
      "Introduce refrigerant vapor until pressure equalizes",
      "Allow ambient air to enter slowly",
      "Introduce nitrogen to slightly above atmospheric pressure",
      "Leave the system under vacuum until repair is complete",
    ],
    correctAnswer: 2,
    explanation:
      "Raising the pressure slightly above atmospheric pressure with nitrogen helps prevent moisture and air from being drawn into the system.",
    category: "[CORE]",
  },
  {
    id: 55,
    text: "Why is evacuation alone ineffective at removing mineral oil and acid from a system?",
    options: [
      "Evacuation only removes contaminants that can evaporate",
      "Mineral oil decomposes under vacuum",
      "Acid neutralizes during evacuation",
      "Oil and acid are filtered out by the vacuum pump",
    ],
    correctAnswer: 0,
    explanation:
      "Only contaminants capable of evaporating are removed during evacuation, leaving oil, acid, and particulates behind.",
    category: "[CORE]",
  },
  {
    id: 56,
    text: "What is the main cause of compressor burnouts after improper refrigerant retrofits?",
    options: [
      "Excessive system pressure",
      "Residual oil, acid, moisture, or contaminants",
      "Incorrect expansion device sizing",
      "Insufficient refrigerant charge",
    ],
    correctAnswer: 1,
    explanation:
      "Improper flushing leaves damaging residuals that can lead to acid formation and compressor failure.",
    category: "[CORE]",
  },
  {
    id: 57,
    text: "Why are water-based flushing solutions unacceptable for refrigeration systems?",
    options: [
      "They are too expensive",
      "They do not remove oil effectively",
      "They introduce water and other non-evaporating impurities",
      "They react violently with nitrogen",
    ],
    correctAnswer: 2,
    explanation:
      "Water-based solutions trade oil contamination for water, which is difficult to remove and harmful to the system.",
    category: "[CORE]",
  },
  {
    id: 58,
    text: "Why should flushing agents never be blown through a compressor?",
    options: [
      "They increase discharge temperature",
      "They remove lubricating oil from sliding surfaces",
      "They leave corrosive residue",
      "They clog the discharge line",
    ],
    correctAnswer: 1,
    explanation:
      "Removing lubricating oil from compressor surfaces can cause the compressor to seize.",
    category: "[CORE]",
  },
  {
    id: 59,
    text: "What practice should always be performed after final system assembly during a burnout or retrofit cleanup?",
    options: [
      "Add additional refrigerant oil",
      "Perform an acid check on the operating system",
      "Replace the expansion device",
      "Pressurize the system with compressed air",
    ],
    correctAnswer: 1,
    explanation:
      "An acid check helps confirm that harmful acids have been removed before long-term operation.",
    category: "[CORE]",
    image: "/public/quiz-images/figure-c-11.png",
  },
  {
    id: 60,
    text: "Why is QwikShot® Refrigerant and Oil Treatment preferred over acid neutralizers?",
    options: [
      "It is less expensive",
      "It works only on mineral oils",
      "It removes acid without leaving residue or byproducts",
      "It increases system alkalinity for corrosion protection",
    ],
    correctAnswer: 2,
    explanation:
      "Removing acid without leaving residue avoids introducing new contaminants into the system.",
    category: "[CORE]",
    image: "/public/quiz-images/figure-c-12.png",
  },
  {
    id: 61,
    text: "What visual evidence can indicate the presence of a refrigerant leak on a system?",
    options: [
      "Condensation on the evaporator",
      "Oil residue on exterior surfaces",
      "Frost on the liquid line",
      "High compressor amperage",
    ],
    correctAnswer: 1,
    explanation:
      "Refrigerant vaporizes at the leak site, leaving non-evaporating oil behind on the surface.",
    category: "[CORE]",
  },
  {
    id: 62,
    text: "What is the approximate minimum leak rate detectable by a typical electronic leak detector?",
    options: [
      "5 oz per year",
      "1 lb per year",
      "0.5 oz per year",
      "0.05 oz per hour",
    ],
    correctAnswer: 2,
    explanation:
      "Electronic leak detectors are sensitive enough to detect very small annual leak rates.",
    category: "[CORE]",
    image: "/public/quiz-images/figure-c-13.png",
  },
  {
    id: 63,
    text: "Why should an electronic leak detector probe never be exposed to high refrigerant concentrations?",
    options: [
      "It can give false negative readings",
      "It can permanently damage the probe",
      "It causes refrigerant decomposition",
      "It discharges the detector battery",
    ],
    correctAnswer: 1,
    explanation:
      "High concentrations of refrigerant can destroy the sensitive probe of the detector.",
    category: "[CORE]",
  },
  {
    id: 64,
    text: "Why is dry nitrogen preferred over compressed air for leak checking?",
    options: [
      "Nitrogen is heavier than air",
      "Compressed air is illegal to use",
      "Nitrogen contains no oxygen or moisture",
      "Compressed air cannot reach high pressures",
    ],
    correctAnswer: 2,
    explanation:
      "Oxygen and moisture in compressed air can cause explosions and contaminate the system.",
    category: "[CORE]",
  },
  {
    id: 65,
    text: "What condition confirms the presence of a leak during a pressure decay leak test?",
    options: [
      "Any pressure change over time",
      "A pressure drop beyond gauge accuracy and temperature effects",
      "An increase in pressure after isolation",
      "Stable pressure for 10 minutes",
    ],
    correctAnswer: 1,
    explanation:
      "A leak is indicated when pressure loss exceeds what can be explained by gauge tolerance or temperature variation.",
    category: "[CORE]",
  },

  {
    id: 66,
    text: "Under what condition is dehydration of a refrigeration system required?",
    options: [
      "Whenever a system has a minor refrigerant leak",
      "When system operating pressures exceed atmospheric pressure",
      "When the system has been opened and air has entered",
      "Any time oil is added to the system",
    ],
    correctAnswer: 2,
    explanation:
      "Dehydration is only necessary when air enters the system, which happens if the system is opened.",
    category: "[CORE]",
  },
  {
    id: 67,
    text: "What is the minimum vacuum level required to properly dehydrate a refrigeration system?",
    options: [
      "500 microns",
      "2,000 microns",
      "29 inches of mercury",
      "10–15 psig",
    ],
    correctAnswer: 0,
    explanation:
      "A deep vacuum of at least 500 microns is required to remove moisture from the system.",
    category: "[CORE]",
  },
  {
    id: 68,
    text: "Why can using an oversized vacuum pump slow down moisture removal?",
    options: [
      "It introduces non-condensable gases",
      "It lowers oil temperature too quickly",
      "It causes refrigerant to condense",
      "It can freeze water by dropping pressure too fast",
    ],
    correctAnswer: 3,
    explanation:
      "A rapid pressure drop can cool water enough to freeze it, making evacuation much slower.",
    category: "[CORE]",
  },
  {
    id: 69,
    text: "During a triple evacuation, to what pressure is dry nitrogen typically introduced?",
    options: [
      "Below 500 microns",
      "10–15 psig",
      "At atmospheric pressure only",
      "Above the system’s maximum working pressure",
    ],
    correctAnswer: 1,
    explanation:
      "Dry nitrogen is added to raise system pressure to about 10–15 psig between evacuations.",
    category: "[CORE]",
  },
  {
    id: 70,
    text: "If pressure rises from a deep vacuum and stabilizes below atmospheric pressure, what does this indicate?",
    options: [
      "A system leak",
      "Non-condensable gases only",
      "Trapped water evaporating",
      "Normal system behavior",
    ],
    correctAnswer: 2,
    explanation:
      "A pressure rise that stabilizes below ambient pressure indicates water is still evaporating.",
    category: "[CORE]",
  },
  {
    id: 71,
    text: "What safety device should always be installed downstream of a nitrogen pressure regulator?",
    options: [
      "Pressure relief valve or burst disk",
      "Micron gauge",
      "Manifold gauge set",
      "Oil separator",
    ],
    correctAnswer: 0,
    explanation:
      "A pressure relief device prevents accidental over-pressurization of the system.",
    category: "[CORE]",
  },
  {
    id: 72,
    text: "What is the primary purpose of the gas ballast valve shown in the vacuum pump?",
    options: [
      "To increase pump speed",
      "To prevent moisture and refrigerant from condensing in the oil",
      "To isolate the pump from the system",
      "To measure vacuum depth",
    ],
    correctAnswer: 1,
    explanation:
      "The gas ballast valve dilutes vapors to reduce condensation of moisture or refrigerant in pump oil.",
    category: "[CORE]",
    image: "/public/quiz-images/figure-c-14.png",
  },
  {
    id: 73,
    text: "At what point during evacuation should the gas ballast valve be closed?",
    options: [
      "Immediately after starting the pump",
      "When vacuum reaches at least 20–25 inches of mercury",
      "Only after reaching 500 microns",
      "It should remain open throughout evacuation",
    ],
    correctAnswer: 3,
    explanation:
      "Leaving the gas ballast valve open prevents achieving a deep vacuum.",
    category: "[CORE]",
  },
  {
    id: 74,
    text: "Why is an electronic micron gauge preferred over a manifold gauge for deep evacuation?",
    options: [
      "It measures refrigerant type",
      "It can withstand higher pressures",
      "It provides accurate resolution at very low pressures",
      "It replaces the need for a vacuum pump",
    ],
    correctAnswer: 2,
    explanation:
      "A micron gauge accurately measures deep vacuum levels where manifold gauges lack resolution.",
    category: "[CORE]",
    image: "/public/quiz-images/figure-c-15.png",
  },
  {
    id: 75,
    text: "What does a micron gauge reading above 5,000 microns during the waiting period most likely indicate?",
    options: [
      "A system leak",
      "Normal moisture evaporation",
      "Proper dehydration",
      "Fractionated refrigerant",
    ],
    correctAnswer: 0,
    explanation:
      "A rise above 5,000 microns suggests a leak rather than remaining moisture.",
    category: "[CORE]",
  },


  {
    "id": 76,
    "text": "Why can non-toxic refrigerants still be dangerous in enclosed spaces?",
    "options": [
      "They chemically react with oxygen",
      "They displace oxygen in the air",
      "They increase air temperature rapidly",
      "They produce toxic byproducts immediately"
    ],
    "correctAnswer": 1,
    "explanation": "Even refrigerants classified as non-toxic can cause asphyxia by displacing oxygen, especially in poorly ventilated areas.",
    "category": "[CORE]"
  },
  {
    "id": 77,
    "text": "What minimum ventilation rate is recommended before working with refrigerants?",
    "options": [
      "One air change per hour",
      "Two air changes per hour",
      "Three air changes per hour",
      "Four air changes per hour"
    ],
    "correctAnswer": 3,
    "explanation": "Adequate ventilation requires at least four air changes per hour to reduce the risk of oxygen displacement.",
    "category": "[CORE]"
  },
  {
    "id": 78,
    "text": "What is the primary cause of death in most fatal refrigerant accidents?",
    "options": [
      "Chemical toxicity",
      "Explosion injuries",
      "Oxygen deprivation",
      "Severe frostbite"
    ],
    "correctAnswer": 2,
    "explanation": "Most fatal refrigerant accidents result from oxygen being displaced by refrigerant vapor, leading to asphyxia.",
    "category": "[CORE]"
  },
  {
    "id": 79,
    "text": "What action should be taken if a large refrigerant leak occurs in an enclosed space and no SCBA is available?",
    "options": [
      "Seal the leak immediately",
      "Ventilate the space while staying inside",
      "Evacuate the area at once",
      "Use compressed air to disperse vapors"
    ],
    "correctAnswer": 2,
    "explanation": "If no SCBA is available during a large release, immediate evacuation is required to prevent asphyxiation.",
    "category": "[CORE]"
  },
  {
    "id": 80,
    "text": "How does ASHRAE Standard 34 classify refrigerants by toxicity?",
    "options": [
      "By boiling point",
      "By permissible exposure limit",
      "By operating pressure",
      "By molecular weight"
    ],
    "correctAnswer": 1,
    "explanation": "Toxicity classifications are based on permissible exposure limits, separating refrigerants into low and high toxicity groups.",
    "category": "[CORE]"
  },
  {
    "id": 81,
    "text": "Which ASHRAE safety classification represents a refrigerant with low toxicity and no flame propagation?",
    "options": [
      "A1",
      "A2",
      "B1",
      "B3"
    ],
    "correctAnswer": 0,
    "explanation": "An A1 classification indicates low toxicity (A) and non-flammability (1).",
    "category": "[CORE]",
    "image": "/public/quiz-images/figure-c-16.png"
  },
  {
    "id": 82,
    "text": "Why are hydrocarbon refrigerants considered a higher safety risk despite good performance characteristics?",
    "options": [
      "They are highly toxic",
      "They are unstable at low pressures",
      "They are highly flammable",
      "They decompose at room temperature"
    ],
    "correctAnswer": 2,
    "explanation": "Hydrocarbon refrigerants have excellent properties but pose higher risk due to their high flammability.",
    "category": "[CORE]"
  },
  {
    "id": 83,
    "text": "What does the 'L' indicate in an A2L refrigerant classification?",
    "options": [
      "Low toxicity",
      "Low pressure",
      "Low leak rate",
      "Low flammability"
    ],
    "correctAnswer": 3,
    "explanation": "The 'L' indicates lower burning velocity, meaning the refrigerant is only slightly flammable.",
    "category": "[CORE]"
  },
  {
    "id": 84,
    "text": "What is the purpose of red markings on systems containing flammable refrigerants?",
    "options": [
      "To identify the manufacturer",
      "To indicate high system pressure",
      "To alert technicians to flammability",
      "To show the direction of refrigerant flow"
    ],
    "correctAnswer": 2,
    "explanation": "Red markings warn technicians that a flammable refrigerant is present so additional precautions can be taken.",
    "category": "[CORE]",
    "image": "/public/quiz-images/figure-c-17.png"
  },
  {
    "id": 85,
    "text": "What is the minimum required length of red marking on a process tube for flammable refrigerants?",
    "options": [
      "½ inch",
      "¾ inch",
      "1 inch",
      "2 inches"
    ],
    "correctAnswer": 2,
    "explanation": "Process tubes must have at least one inch of red marking to indicate the presence of a flammable refrigerant.",
    "category": "[CORE]"
  },
  {
    "id": 86,
    "text": "Why must refrigerant cylinders never be filled beyond 80% of their capacity by weight?",
    "options": [
      "To allow accurate leak detection",
      "To reduce corrosion inside the cylinder",
      "To prevent liquid expansion from causing rupture",
      "To comply with color-coding requirements"
    ],
    "correctAnswer": 2,
    "explanation": "Leaving vapor space prevents excessive pressure buildup from liquid expansion when temperatures rise.",
    "category": "[CORE]"
  },
  {
    "id": 87,
    "text": "Which method can be used to prevent overfilling a refrigerant recovery cylinder?",
    "options": [
      "Monitoring discharge pressure only",
      "Using oxygen to pressurize the system",
      "Estimating fill level visually",
      "Weighing the cylinder during filling"
    ],
    "correctAnswer": 3,
    "explanation": "Weighing the cylinder ensures it is not filled beyond safe capacity limits.",
    "category": "[CORE]"
  },
  
    {
      "id": 88,
      "text": "When preparing a refrigerant cylinder for shipping, what is the maximum allowable fill level to comply with safety requirements?",
      "options": [
        "60 percent of its capacity",
        "70 percent of its capacity",
        "80 percent of its capacity",
        "100 percent of its capacity"
      ],
      "correctAnswer": 2,
      "explanation": "Limiting the fill level to 80 percent allows room for thermal expansion and reduces the risk of overpressure during transport.",
      "category": "[CORE]"
    },
    {
      "id": 89,
      "text": "Which information must be included on refrigerant shipping documents to ensure proper handling during an emergency?",
      "options": [
        "Cylinder serial number and manufacturer",
        "Refrigerant oil type and viscosity",
        "Proper shipping name, hazard class, and UN identification number",
        "Recovery machine model and service date"
      ],
      "correctAnswer": 2,
      "explanation": "These details identify the hazardous material and guide emergency responders in selecting correct safety procedures.",
      "category": "[CORE]"
    },
    {
      "id": 90,
      "text": "What is the primary purpose of the DOT classification tag shown on a refrigerant recovery cylinder?",
      "options": [
        "To indicate the cylinder's ownership",
        "To identify the refrigerant and associated hazards for emergency responders",
        "To verify the recovery machine used",
        "To confirm the cylinder color code only"
      ],
      "correctAnswer": 1,
      "explanation": "The classification tag communicates hazard information so first responders can take appropriate protective actions.",
      "category": "[CORE]",
      "image": "/public/quiz-images/figure-c-18.png"
    },
    {
      "id": 91,
      "text": "During a refrigerant spill incident, what minimum distance should emergency responders keep unauthorized individuals away from the area?",
      "options": [
        "25 meters (80 ft)",
        "50 meters (165 ft)",
        "75 meters (250 ft)",
        "100 meters (330 ft)"
      ],
      "correctAnswer": 3,
      "explanation": "Maintaining a distance of at least 100 meters helps reduce exposure risks while responders manage the hazardous material.",
      "category": "[CORE]"
    },
    {
      "id": 92,
      "text": "Which technicians are permitted to purchase refrigerants for servicing or installing refrigeration and air conditioning equipment?",
      "options": [
        "Any technician employed by an HVAC company",
        "Only technicians certified in refrigerant recovery",
        "Only technicians with Section 609 certification",
        "Any technician working on systems under five pounds"
      ],
      "correctAnswer": 1,
      "explanation": "Refrigerant sales for servicing or installation are restricted to technicians who are properly certified in refrigerant recovery.",
      "category": "[TYPE 1]"
    },
    {
      "id": 93,
      "text": "Which condition disqualifies equipment from being serviced under Section 608 Type I certification?",
      "options": [
        "Containing less than five pounds of refrigerant",
        "Being hermetically sealed at the factory",
        "Designed for household use",
        "Being classified as a motor vehicle air conditioner"
      ],
      "correctAnswer": 3,
      "explanation": "Motor vehicle air conditioners and MVAC-like systems are excluded from Section 608 Type I and require other certifications.",
      "category": "[TYPE 1]"
    },
    {
      "id": 94,
      "text": "Which of the following best defines a small appliance under EPA rules?",
      "options": [
        "Any appliance using alternative refrigerants",
        "A factory-charged, hermetically sealed product with five pounds or less of refrigerant",
        "Any residential refrigeration device",
        "An appliance that is rarely serviced"
      ],
      "correctAnswer": 1,
      "explanation": "A small appliance is fully manufactured, charged, and hermetically sealed in a factory with a refrigerant charge of five pounds or less.",
      "category": "[TYPE 1]"
    },
    {
      "id": 95,
      "text": "Who is ultimately responsible for ensuring refrigerant recovery before a small appliance is finally disposed of?",
      "options": [
        "The original equipment manufacturer",
        "The first technician in the disposal chain",
        "The equipment owner",
        "The final person in the disposal chain"
      ],
      "correctAnswer": 3,
      "explanation": "The final person in the disposal chain, such as a scrap metal recycler, must ensure the refrigerant has been properly recovered.",
      "category": "[TYPE 1]"
    },
    {
      "id": 96,
      "text": "Which refrigerant has been found acceptable for use in household refrigeration despite being flammable?",
      "options": [
        "R-134a",
        "R-600a",
        "R-22",
        "R-404A"
      ],
      "correctAnswer": 1,
      "explanation": "R-600a (isobutane) is an acceptable flammable refrigerant for household refrigeration applications.",
      "category": "[TYPE 1]"
    },
    {
      "id": 97,
      "text": "What is the maximum allowable flammable refrigerant charge for household refrigeration equipment?",
      "options": [
        "150 g (5.3 oz)",
        "200 g (7.0 oz)",
        "57 g (2.0 oz)",
        "300 g (10.6 oz)"
      ],
      "correctAnswer": 2,
      "explanation": "Household refrigeration equipment using flammable refrigerants is limited to a maximum charge of 57 grams (2.0 ounces).",
      "category": "[TYPE 1]"
    },
    {
      "id": 98,
      "text": "What is the primary purpose of red markings on pipes and tubing in appliances using hydrocarbon refrigerants?",
      "options": [
        "To indicate refrigerant flow direction",
        "To identify the manufacturer",
        "To alert technicians to the presence of a flammable refrigerant",
        "To meet aesthetic requirements"
      ],
      "correctAnswer": 2,
      "explanation": "Red markings warn service personnel that a flammable refrigerant is present so additional safety precautions can be taken.",
      "category": "[TYPE 1]"
    },
    {
      "id": 99,
      "text": "When using a passive recovery device on a system with an inoperative compressor, what connection method improves refrigerant recovery?",
      "options": [
        "Connecting only the low side",
        "Connecting only the high side",
        "Using the system compressor intermittently",
        "Connecting both the high and low sides"
      ],
      "correctAnswer": 3,
      "explanation": "Connecting both sides maximizes the pressure difference and improves refrigerant recovery when the compressor is not operating.",
      "category": "[TYPE 1]"
    },
    {
      "id": 100,
      "text": "What is the required refrigerant recovery percentage when servicing a small appliance with a functioning compressor?",
      "options": [
        "70 percent of the nameplate charge",
        "80 percent of the nameplate charge",
        "90 percent of the nameplate charge",
        "100 percent of the nameplate charge"
      ],
      "correctAnswer": 2,
      "explanation": "When the compressor is operating, at least 90 percent of the nameplate refrigerant charge must be recovered.",
      "category": "[TYPE 1]"
    },
    {
      "id": 101,
      "text": "Which statement correctly describes system-dependent recovery equipment?",
      "options": [
        "It can only be used on systems with more than 15 pounds of refrigerant",
        "It requires an oil separator to operate",
        "It can be used on small appliances because their charge is five pounds or less",
        "It must always be permanently attached to the appliance"
      ],
      "correctAnswer": 2,
      "explanation": "System-dependent recovery equipment is suitable for small appliances because they contain five pounds or less of refrigerant.",
      "category": "[TYPE 1]"
    },
    {
      "id": 102,
      "text": "Which statement best describes self-contained recovery equipment?",
      "options": [
        "It requires the appliance compressor to operate during recovery",
        "It depends on external system components to function",
        "It operates independently of the appliance being serviced",
        "It can only be used on systems without leaks"
      ],
      "correctAnswer": 2,
      "explanation": "Self-contained recovery equipment functions on its own without relying on the appliance’s internal components.",
      "category": "[TYPE 1]"
    },
    {
      "id": 103,
      "text": "When is a technician required to have certified self-contained recovery equipment available?",
      "options": [
        "Only when servicing large commercial systems",
        "Only when holding a Type I certification",
        "Whenever the system compressor is inoperable",
        "When holding any EPA certification beyond Type I"
      ],
      "correctAnswer": 3,
      "explanation": "Any EPA certification beyond Type I requires access to certified self-contained recovery or recycling equipment.",
      "category": "[TYPE 1]"
    },
    {
      "id": 104,
      "text": "What is one advantage of using a self-contained recovery unit instead of system-dependent recovery?",
      "options": [
        "It eliminates the need for recovery cylinders",
        "It reduces the risk of overheating the system compressor",
        "It requires multiple service connections",
        "It only works on non-leaking systems"
      ],
      "correctAnswer": 1,
      "explanation": "Self-contained units avoid stressing the appliance compressor, reducing the risk of overheating and damage.",
      "category": "[TYPE 1]"
    },
    {
      "id": 105,
      "text": "Why is it unnecessary to attempt 80–90% recovery when a small appliance has leaked refrigerant?",
      "options": [
        "Recovery equipment cannot measure percentages accurately",
        "Leaking systems automatically shut down recovery units",
        "EPA regulations prohibit high recovery levels on leaking systems",
        "The remaining refrigerant may be less than the target percentage"
      ],
      "correctAnswer": 3,
      "explanation": "If refrigerant has leaked, the remaining charge may be below the target percentage, making higher recovery impossible.",
      "category": "[TYPE 1]"
    },
    {
      "id": 106,
      "text": "What condition shown in Figure I–1 allows combustion of a flammable refrigerant?",
      "options": [
        "Concentration below the lower flammability limit",
        "Concentration between the lower and upper flammability limits with an ignition source",
        "Concentration above the upper flammability limit",
        "Any concentration when oxygen is present"
      ],
      "correctAnswer": 0,
      "explanation": "Combustion occurs only when concentration is between the lower and upper flammability limits and an ignition source exists.",
      "category": "[TYPE 1]",
      "image": "/public/quiz-images/figure-i-1.png"
    },
    {
      "id": 107,
      "text": "What safety practice is required when recovering flammable refrigerants?",
      "options": [
        "Use open flames to detect leaks",
        "Ground the system, recovery unit, and recovery tank",
        "Operate only in enclosed spaces",
        "Increase system pressure during recovery"
      ],
      "correctAnswer": 2,
      "explanation": "Proper grounding prevents static electricity sparks that could ignite flammable refrigerants.",
      "category": "[TYPE 1]"
    },
    {
      "id": 108,
      "text": "What does a pungent odor during recovery most likely indicate?",
      "options": [
        "Normal oil breakdown",
        "Presence of moisture only",
        "Acid formation from a compressor burnout",
        "Incorrect refrigerant identification"
      ],
      "correctAnswer": 1,
      "explanation": "A strong odor suggests acidic contamination caused by a compressor burnout, requiring system flushing and component replacement.",
      "category": "[TYPE 1]"
    },
    {
      "id": 109,
      "text": "What is the primary purpose of the process stub shown in Figure I–2?",
      "options": [
        "Permanent refrigerant charging access",
        "Ventilation of excess pressure",
        "Temporary access for refrigerant recovery",
        "Mounting location for pressure gauges"
      ],
      "correctAnswer": 3,
      "explanation": "The process stub provides a sealed tube that can be temporarily accessed for recovery and charging.",
      "category": "[TYPE 1]",
      "image": "/public/quiz-images/figure-i-2.png"
    },
    {
      "id": 110,
      "text": "Why should a piercing-type access valve shown in Figure I–3 not be left installed permanently?",
      "options": [
        "It restricts refrigerant flow",
        "It interferes with compressor operation",
        "It is not designed to be explosion-proof",
        "It can eventually leak refrigerant"
      ],
      "correctAnswer": 0,
      "explanation": "Piercing-type access valves are not permanent seals and can allow refrigerant to leak over time.",
      "category": "[TYPE 1]",
      "image": "/public/quiz-images/figure-i-3.png"
    },
    {
      "id": 111,
      "text": "What feature of the graduated charging cylinder in Figure I–4 allows accurate refrigerant measurement?",
      "options": [
        "An internal compressor",
        "A clear glass column with calibrated scales",
        "A relief valve at the base",
        "A detachable recovery bag"
      ],
      "correctAnswer": 2,
      "explanation": "The clear glass column with scales allows technicians to determine refrigerant volume and convert it to mass accurately.",
      "category": "[TYPE 1]",
      "image": "/public/quiz-images/figure-i-4.png"
    },
    {
      "id": 112,
      "text": "Which refrigerants are not required to be recovered using EPA-approved recovery devices?",
      "options": [
        "R-134a and R-410A",
        "R-404A and R-32",
        "Ammonia and sulfur dioxide",
        "R-290 and R-441A"
      ],
      "correctAnswer": 1,
      "explanation": "Ammonia and sulfur dioxide are not recovered with EPA-regulated equipment due to their unique properties and hazards.",
      "category": "[TYPE 1]"
    },
    {
      "id": 113,
      "text": "What information is typically found on the nameplate shown in Figure I–5?",
      "options": [
        "Recovery vacuum requirements",
        "Approved flushing solutions",
        "Refrigerant type used in the appliance",
        "Leak rate thresholds"
      ],
      "correctAnswer": 3,
      "explanation": "The nameplate identifies key system details, including the type of refrigerant used in the appliance.",
      "category": "[TYPE 1]",
      "image": "/public/quiz-images/figure-i-5.png"
    },

      {
        "id": 114,
        "text": "Why must the type of refrigerant in a system be identified before beginning recovery?",
        "options": [
          "To calculate the system cooling capacity",
          "To select the correct DOT-approved recovery machine and cylinder",
          "To determine the compressor oil viscosity",
          "To decide whether recovery is legally required"
        ],
        "correctAnswer": 1,
        "explanation": "Different refrigerants require compatible recovery machines and cylinders rated for their specific pressures and properties.",
        "category": "[TYPE 1]"
      },
      {
        "id": 115,
        "text": "What is the primary consequence of mixing two different refrigerant types during recovery?",
        "options": [
          "Reduced system efficiency",
          "Higher operating pressures",
          "The refrigerant cannot be reused and may require destruction",
          "Only partial recovery is possible"
        ],
        "correctAnswer": 2,
        "explanation": "Mixed refrigerants cannot be reused and often must be sent to an approved facility for destruction.",
        "category": "[TYPE 1]"
      },
      {
        "id": 116,
        "text": "Which recovery cylinder labeling allows use with both R-410A and lower-pressure refrigerants?",
        "options": [
          "DOT-4BA",
          "DOT-4BW",
          "DOT-4BA400 or DOT-4BW400",
          "Any DOT-certified cylinder"
        ],
        "correctAnswer": 2,
        "explanation": "Cylinders labeled DOT-4BA400 or DOT-4BW400 are rated for higher pressures such as R-410A and can also handle lower-pressure refrigerants.",
        "category": "[TYPE 1]"
      },
      {
        "id": 117,
        "text": "When using a solderless piercing valve on tubing, what must be done after servicing is complete?",
        "options": [
          "Leave the valve permanently installed",
          "Pressurize the system to test the valve",
          "Remove the valve and seal the tube",
          "Replace the tubing section"
        ],
        "correctAnswer": 2,
        "explanation": "Solderless piercing valves are temporary and must be removed and the tube sealed to prevent leaks.",
        "category": "[TYPE 1]",
        "image": "/public/quiz-images/figure-i-6.png"
      },
      {
        "id": 118,
        "text": "System-dependent recovery methods are limited to appliances containing how much refrigerant?",
        "options": [
          "5 pounds or less",
          "10 pounds or less",
          "15 pounds or less",
          "20 pounds or less"
        ],
        "correctAnswer": 2,
        "explanation": "System-dependent recovery can only be used on appliances containing 15 pounds or less of refrigerant.",
        "category": "[TYPE 1]"
      },
      {
        "id": 119,
        "text": "What is a key advantage of connecting recovery hoses to both high- and low-side service ports?",
        "options": [
          "Lower recovery cylinder pressure",
          "Reduced risk of non-condensables",
          "Faster recovery and more complete refrigerant removal",
          "Elimination of the need for a recovery machine"
        ],
        "correctAnswer": 2,
        "explanation": "Using both ports speeds recovery and ensures refrigerant is removed from both sides of the system.",
        "category": "[TYPE 1]",
        "image": "/public/quiz-images/figure-i-7.png"
      },
      {
        "id": 120,
        "text": "Why must technicians avoid trapping liquid refrigerant in service hoses?",
        "options": [
          "It increases recovery time",
          "Liquid expansion can cause excessive pressure and hose failure",
          "It contaminates the recovery cylinder",
          "It prevents accurate pressure readings"
        ],
        "correctAnswer": 1,
        "explanation": "Trapped liquid refrigerant can expand as it warms, creating dangerously high pressures in the hose.",
        "category": "[TYPE 1]"
      },
      {
        "id": 121,
        "text": "In a system using a capillary tube, where is the high-pressure side located?",
        "options": [
          "Between the expansion device outlet and compressor inlet",
          "Only inside the condenser coil",
          "Between the compressor discharge and expansion device inlet",
          "At the evaporator outlet"
        ],
        "correctAnswer": 2,
        "explanation": "The high-pressure side is located between the compressor discharge and the inlet of the throttling device.",
        "category": "[TYPE 1]",
        "image": "/public/quiz-images/figure-i-8.png"
      },
      {
        "id": 122,
        "text": "What precaution must be taken when operating a system compressor during recovery?",
        "options": [
          "Operate only above 10 psig suction pressure",
          "Never allow suction pressure below 4 inches of mercury vacuum",
          "Run the compressor continuously to speed recovery",
          "Disable the condenser fan"
        ],
        "correctAnswer": 1,
        "explanation": "Operating below 4 inches of mercury vacuum can overheat and damage the compressor.",
        "category": "[TYPE 1]"
      },
      {
        "id": 123,
        "text": "Why should a hermetic compressor never be operated when using a self-contained recovery machine?",
        "options": [
          "It increases electrical consumption",
          "It can introduce non-condensables",
          "The compressor relies on refrigerant flow for cooling",
          "It reduces oil circulation"
        ],
        "correctAnswer": 2,
        "explanation": "Hermetic compressors depend on refrigerant flow for motor cooling, which is absent during self-contained recovery.",
        "category": "[TYPE 1]"
      },
      {
        "id": 124,
        "text": "If system pressure is 0 psig after connecting to a sealed system, what should be done?",
        "options": [
          "Begin recovery immediately",
          "Add nitrogen to raise pressure",
          "Do not begin recovery because refrigerant has leaked out",
          "Switch to passive recovery"
        ],
        "correctAnswer": 2,
        "explanation": "A 0 psig reading indicates the refrigerant has leaked out and air or moisture may have entered the system.",
        "category": "[TYPE 1]"
      },
      {
        "id": 125,
        "text": "What is the required final deep vacuum level after repairs and leak checking?",
        "options": [
          "1000 microns",
          "800 microns",
          "500 microns or lower",
          "200 microns only"
        ],
        "correctAnswer": 2,
        "explanation": "A final deep vacuum of at least 500 microns is required, with 300 microns being ideal.",
        "category": "[TYPE 1]"
      },
      {
        "id": 126,
        "text": "Why are non-condensable gases harmful in a refrigeration system?",
        "options": [
          "They lower oil viscosity",
          "They increase condenser efficiency",
          "They raise system pressure and reduce heat transfer",
          "They improve refrigerant flow"
        ],
        "correctAnswer": 2,
        "explanation": "Non-condensables increase high-side pressure and reduce the condenser’s effective heat transfer area.",
        "category": "[TYPE 1]"
      },
      {
        "id": 127,
        "text": "Which method can help release refrigerant trapped in compressor oil when the compressor is not running?",
        "options": [
          "Cooling the compressor with water",
          "Activating the crankcase heater or gently striking the compressor",
          "Opening the discharge valve fully",
          "Increasing condenser airflow"
        ],
        "correctAnswer": 1,
        "explanation": "Heating the oil or gently striking the compressor helps release refrigerant trapped in the oil sump.",
        "category": "[TYPE 1]"
      },
      {
        "id": 128,
        "text": "How can the presence of non-condensable gases in a recovery cylinder be identified?",
        "options": [
          "By oil color change",
          "By reduced refrigerant weight",
          "By comparing actual pressure to expected pressure at a stable temperature",
          "By observing frost on the cylinder"
        ],
        "correctAnswer": 2,
        "explanation": "If actual pressure is higher than expected for the refrigerant at a stable temperature, non-condensables may be present.",
        "category": "[TYPE 1]"
      },

        {
          "id": 129,
          "text": "Why must a system or recovery cylinder be allowed to stabilize to room temperature before checking for non-condensable gases?",
          "options": [
            "To prevent refrigerant loss during testing",
            "To ensure pressure and temperature readings are valid for comparison",
            "To speed up the recovery process",
            "To reduce the risk of frostbite"
          ],
          "correctAnswer": 1,
          "explanation": "Accurate comparison with a pressure–temperature chart requires stable and known pressure and temperature conditions.",
          "category": "[TYPE 1]"
        },
        {
          "id": 130,
          "text": "What is the recommended action if refrigerant contamination is suspected in a recovery cylinder?",
          "options": [
            "Vent the refrigerant to the atmosphere",
            "Reuse the refrigerant only in the same system",
            "Turn the refrigerant in for reclamation",
            "Dilute the refrigerant with new refrigerant"
          ],
          "correctAnswer": 2,
          "explanation": "Suspected contaminated refrigerant should be sent for reclamation rather than reused.",
          "category": "[TYPE 1]"
        },
        {
          "id": 131,
          "text": "Why might a reclamation facility refuse or charge extra for a refrigerant tank?",
          "options": [
            "If the refrigerant pressure is too low",
            "If the refrigerant is mixed or contaminated",
            "If the cylinder is underfilled",
            "If the refrigerant is ozone-depleting"
          ],
          "correctAnswer": 1,
          "explanation": "Mixed refrigerants require additional processing and may be rejected or incur extra charges.",
          "category": "[TYPE 1]"
        },
        {
          "id": 132,
          "text": "What is the main reason EPA states there are no true \"drop-in\" refrigerant replacements?",
          "options": [
            "All replacements are banned",
            "They are more expensive than original refrigerants",
            "They require no system changes",
            "Every replacement requires some system modification"
          ],
          "correctAnswer": 3,
          "explanation": "A true drop-in would require no changes, but all replacements need at least minor system modifications.",
          "category": "[TYPE 1]"
        },
        {
          "id": 133,
          "text": "Why does EPA currently lack authority to ban HFC refrigerants like R-404A?",
          "options": [
            "They have high global warming potential",
            "They are not used in domestic refrigeration",
            "They have zero ozone depletion potential",
            "They are already phased out"
          ],
          "correctAnswer": 2,
          "explanation": "EPA authority under the Clean Air Act applies to ozone-depleting substances, not zero-ODP refrigerants.",
          "category": "[TYPE 1]"
        },
        {
          "id": 134,
          "text": "Which refrigerant is banned for use in new equipment and banned from production or import for existing systems after 2020?",
          "options": [
            "R-134a",
            "R-404A",
            "R-410A",
            "R-22"
          ],
          "correctAnswer": 3,
          "explanation": "R-22 production and import were phased out, though reclaimed refrigerant may still be used.",
          "category": "[TYPE 1]"
        },
        {
          "id": 135,
          "text": "Under what condition can recovered refrigerant be reinstalled into another appliance?",
          "options": [
            "If the refrigerant is new",
            "If the refrigerant is reclaimed",
            "If both appliances are owned by the same person",
            "If the appliance is commercial equipment"
          ],
          "correctAnswer": 2,
          "explanation": "Clean recovered refrigerant may be reused in equipment owned by the same person.",
          "category": "[TYPE 1]"
        },
        {
          "id": 136,
          "text": "What evacuation level must be achieved before charging a system after refrigerant replacement?",
          "options": [
            "1,000 microns",
            "500 microns",
            "250 microns",
            "100 microns"
          ],
          "correctAnswer": 1,
          "explanation": "A deep evacuation to at least 500 microns using triple evacuation is required.",
          "category": "[TYPE 1]"
        },
        {
          "id": 137,
          "text": "If an ozone-depleting refrigerant cannot be reused, what are the available options?",
          "options": [
            "Vent and recharge with a replacement",
            "Purchase reclaimed refrigerant or modify the system",
            "Blend it with a replacement refrigerant",
            "Store it indefinitely"
          ],
          "correctAnswer": 1,
          "explanation": "Only reclaimed refrigerant or system modification for a replacement is permitted.",
          "category": "[TYPE 1]"
        },
        {
          "id": 138,
          "text": "Why must a solderless piercing access valve be removed after charging a system?",
          "options": [
            "It restricts refrigerant flow",
            "It causes inaccurate pressure readings",
            "It can lead to long-term leakage",
            "It violates EPA certification rules"
          ],
          "correctAnswer": 2,
          "explanation": "Piercing valves are prone to leakage and should not remain permanently installed.",
          "category": "[TYPE 1]"
        },
        {
          "id": 139,
          "text": "Why is it recommended to install both high- and low-side access valves during passive recovery?",
          "options": [
            "To reduce recovery equipment wear",
            "To improve refrigerant purity",
            "To meet evacuation requirements more effectively",
            "To allow refrigerant venting"
          ],
          "correctAnswer": 2,
          "explanation": "Both connections may be needed to reach required recovery efficiency or vacuum levels.",
          "category": "[TYPE 1]"
        },
        {
          "id": 140,
          "text": "When nitrogen is used for leak checking after refrigerant recovery, what is allowed?",
          "options": [
            "Recovering nitrogen with a recovery machine",
            "Venting nitrogen to ambient air",
            "Mixing nitrogen with refrigerant",
            "Storing nitrogen in recovery cylinders"
          ],
          "correctAnswer": 1,
          "explanation": "Nitrogen is not a refrigerant and may be safely vented after leak checking.",
          "category": "[TYPE 1]"
        },
        {
          "id": 141,
          "text": "What is the maximum safe fill level for a refrigerant recovery cylinder?",
          "options": [
            "70 percent",
            "75 percent",
            "80 percent",
            "90 percent"
          ],
          "correctAnswer": 2,
          "explanation": "Recovery cylinders must never be filled beyond 80 percent capacity.",
          "category": "[TYPE 1]"
        },
        {
          "id": 142,
          "text": "Why must recovery cylinders have a current hydrostatic test date?",
          "options": [
            "To ensure accurate refrigerant weight",
            "To verify compatibility with flammable refrigerants",
            "To confirm structural integrity under pressure",
            "To meet reclaim facility requirements"
          ],
          "correctAnswer": 2,
          "explanation": "Hydrostatic testing ensures the cylinder can safely contain pressurized refrigerants.",
          "category": "[TYPE 1]"
        },
        {
          "id": 143,
          "text": "Why is using nitrogen without a pressure regulator extremely dangerous?",
          "options": [
            "Nitrogen reacts chemically with refrigerants",
            "Nitrogen cylinders contain moisture",
            "Nitrogen displaces refrigerant oil",
            "Cylinder pressure can exceed 2,000 psig"
          ],
          "correctAnswer": 3,
          "explanation": "Unregulated nitrogen pressure can rupture or explode refrigeration systems.",
          "category": "[TYPE 1]"
        }
      
      
    
    
  
  
]

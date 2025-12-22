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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
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
    category: "CORE",
  },

  {
    id: 76,
    text: "Why can non-toxic refrigerants still be dangerous in enclosed spaces?",
    options: [
      "They chemically react with oxygen",
      "They displace oxygen in the air",
      "They increase air temperature rapidly",
      "They produce toxic byproducts immediately",
    ],
    correctAnswer: 1,
    explanation:
      "Even refrigerants classified as non-toxic can cause asphyxia by displacing oxygen, especially in poorly ventilated areas.",
    category: "CORE",
  },
  {
    id: 77,
    text: "What minimum ventilation rate is recommended before working with refrigerants?",
    options: [
      "One air change per hour",
      "Two air changes per hour",
      "Three air changes per hour",
      "Four air changes per hour",
    ],
    correctAnswer: 3,
    explanation:
      "Adequate ventilation requires at least four air changes per hour to reduce the risk of oxygen displacement.",
    category: "CORE",
  },
  {
    id: 78,
    text: "What is the primary cause of death in most fatal refrigerant accidents?",
    options: [
      "Chemical toxicity",
      "Explosion injuries",
      "Oxygen deprivation",
      "Severe frostbite",
    ],
    correctAnswer: 2,
    explanation:
      "Most fatal refrigerant accidents result from oxygen being displaced by refrigerant vapor, leading to asphyxia.",
    category: "CORE",
  },
  {
    id: 79,
    text: "What action should be taken if a large refrigerant leak occurs in an enclosed space and no SCBA is available?",
    options: [
      "Seal the leak immediately",
      "Ventilate the space while staying inside",
      "Evacuate the area at once",
      "Use compressed air to disperse vapors",
    ],
    correctAnswer: 2,
    explanation:
      "If no SCBA is available during a large release, immediate evacuation is required to prevent asphyxiation.",
    category: "CORE",
  },
  {
    id: 80,
    text: "How does ASHRAE Standard 34 classify refrigerants by toxicity?",
    options: [
      "By boiling point",
      "By permissible exposure limit",
      "By operating pressure",
      "By molecular weight",
    ],
    correctAnswer: 1,
    explanation:
      "Toxicity classifications are based on permissible exposure limits, separating refrigerants into low and high toxicity groups.",
    category: "CORE",
  },
  {
    id: 81,
    text: "Which ASHRAE safety classification represents a refrigerant with low toxicity and no flame propagation?",
    options: ["A1", "A2", "B1", "B3"],
    correctAnswer: 0,
    explanation:
      "An A1 classification indicates low toxicity (A) and non-flammability (1).",
    category: "CORE",
    image: "/public/quiz-images/figure-c-16.png",
  },
  {
    id: 82,
    text: "Why are hydrocarbon refrigerants considered a higher safety risk despite good performance characteristics?",
    options: [
      "They are highly toxic",
      "They are unstable at low pressures",
      "They are highly flammable",
      "They decompose at room temperature",
    ],
    correctAnswer: 2,
    explanation:
      "Hydrocarbon refrigerants have excellent properties but pose higher risk due to their high flammability.",
    category: "CORE",
  },
  {
    id: 83,
    text: "What does the 'L' indicate in an A2L refrigerant classification?",
    options: [
      "Low toxicity",
      "Low pressure",
      "Low leak rate",
      "Low flammability",
    ],
    correctAnswer: 3,
    explanation:
      "The 'L' indicates lower burning velocity, meaning the refrigerant is only slightly flammable.",
    category: "CORE",
  },
  {
    id: 84,
    text: "What is the purpose of red markings on systems containing flammable refrigerants?",
    options: [
      "To identify the manufacturer",
      "To indicate high system pressure",
      "To alert technicians to flammability",
      "To show the direction of refrigerant flow",
    ],
    correctAnswer: 2,
    explanation:
      "Red markings warn technicians that a flammable refrigerant is present so additional precautions can be taken.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-17.png",
  },
  {
    id: 85,
    text: "What is the minimum required length of red marking on a process tube for flammable refrigerants?",
    options: ["½ inch", "¾ inch", "1 inch", "2 inches"],
    correctAnswer: 2,
    explanation:
      "Process tubes must have at least one inch of red marking to indicate the presence of a flammable refrigerant.",
    category: "CORE",
  },
  {
    id: 86,
    text: "Why must refrigerant cylinders never be filled beyond 80% of their capacity by weight?",
    options: [
      "To allow accurate leak detection",
      "To reduce corrosion inside the cylinder",
      "To prevent liquid expansion from causing rupture",
      "To comply with color-coding requirements",
    ],
    correctAnswer: 2,
    explanation:
      "Leaving vapor space prevents excessive pressure buildup from liquid expansion when temperatures rise.",
    category: "CORE",
  },
  {
    id: 87,
    text: "Which method can be used to prevent overfilling a refrigerant recovery cylinder?",
    options: [
      "Monitoring discharge pressure only",
      "Using oxygen to pressurize the system",
      "Estimating fill level visually",
      "Weighing the cylinder during filling",
    ],
    correctAnswer: 3,
    explanation:
      "Weighing the cylinder ensures it is not filled beyond safe capacity limits.",
    category: "CORE",
  },

  {
    id: 88,
    text: "When preparing a refrigerant cylinder for shipping, what is the maximum allowable fill level to comply with safety requirements?",
    options: [
      "60 percent of its capacity",
      "70 percent of its capacity",
      "80 percent of its capacity",
      "100 percent of its capacity",
    ],
    correctAnswer: 2,
    explanation:
      "Limiting the fill level to 80 percent allows room for thermal expansion and reduces the risk of overpressure during transport.",
    category: "CORE",
  },
  {
    id: 89,
    text: "Which information must be included on refrigerant shipping documents to ensure proper handling during an emergency?",
    options: [
      "Cylinder serial number and manufacturer",
      "Refrigerant oil type and viscosity",
      "Proper shipping name, hazard class, and UN identification number",
      "Recovery machine model and service date",
    ],
    correctAnswer: 2,
    explanation:
      "These details identify the hazardous material and guide emergency responders in selecting correct safety procedures.",
    category: "CORE",
  },
  {
    id: 90,
    text: "What is the primary purpose of the DOT classification tag shown on a refrigerant recovery cylinder?",
    options: [
      "To indicate the cylinder's ownership",
      "To identify the refrigerant and associated hazards for emergency responders",
      "To verify the recovery machine used",
      "To confirm the cylinder color code only",
    ],
    correctAnswer: 1,
    explanation:
      "The classification tag communicates hazard information so first responders can take appropriate protective actions.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-18.png",
  },
  {
    id: 91,
    text: "During a refrigerant spill incident, what minimum distance should emergency responders keep unauthorized individuals away from the area?",
    options: [
      "25 meters (80 ft)",
      "50 meters (165 ft)",
      "75 meters (250 ft)",
      "100 meters (330 ft)",
    ],
    correctAnswer: 3,
    explanation:
      "Maintaining a distance of at least 100 meters helps reduce exposure risks while responders manage the hazardous material.",
    category: "CORE",
  },
  {
    id: 92,
    text: "Which technicians are permitted to purchase refrigerants for servicing or installing refrigeration and air conditioning equipment?",
    options: [
      "Any technician employed by an HVAC company",
      "Only technicians certified in refrigerant recovery",
      "Only technicians with Section 609 certification",
      "Any technician working on systems under five pounds",
    ],
    correctAnswer: 1,
    explanation:
      "Refrigerant sales for servicing or installation are restricted to technicians who are properly certified in refrigerant recovery.",
    category: "TYPE 1",
  },
  {
    id: 93,
    text: "Which condition disqualifies equipment from being serviced under Section 608 Type I certification?",
    options: [
      "Containing less than five pounds of refrigerant",
      "Being hermetically sealed at the factory",
      "Designed for household use",
      "Being classified as a motor vehicle air conditioner",
    ],
    correctAnswer: 3,
    explanation:
      "Motor vehicle air conditioners and MVAC-like systems are excluded from Section 608 Type I and require other certifications.",
    category: "TYPE 1",
  },
  {
    id: 94,
    text: "Which of the following best defines a small appliance under EPA rules?",
    options: [
      "Any appliance using alternative refrigerants",
      "A factory-charged, hermetically sealed product with five pounds or less of refrigerant",
      "Any residential refrigeration device",
      "An appliance that is rarely serviced",
    ],
    correctAnswer: 1,
    explanation:
      "A small appliance is fully manufactured, charged, and hermetically sealed in a factory with a refrigerant charge of five pounds or less.",
    category: "TYPE 1",
  },
  {
    id: 95,
    text: "Who is ultimately responsible for ensuring refrigerant recovery before a small appliance is finally disposed of?",
    options: [
      "The original equipment manufacturer",
      "The first technician in the disposal chain",
      "The equipment owner",
      "The final person in the disposal chain",
    ],
    correctAnswer: 3,
    explanation:
      "The final person in the disposal chain, such as a scrap metal recycler, must ensure the refrigerant has been properly recovered.",
    category: "TYPE 1",
  },
  {
    id: 96,
    text: "Which refrigerant has been found acceptable for use in household refrigeration despite being flammable?",
    options: ["R-134a", "R-600a", "R-22", "R-404A"],
    correctAnswer: 1,
    explanation:
      "R-600a (isobutane) is an acceptable flammable refrigerant for household refrigeration applications.",
    category: "TYPE 1",
  },
  {
    id: 97,
    text: "What is the maximum allowable flammable refrigerant charge for household refrigeration equipment?",
    options: [
      "150 g (5.3 oz)",
      "200 g (7.0 oz)",
      "57 g (2.0 oz)",
      "300 g (10.6 oz)",
    ],
    correctAnswer: 2,
    explanation:
      "Household refrigeration equipment using flammable refrigerants is limited to a maximum charge of 57 grams (2.0 ounces).",
    category: "TYPE 1",
  },
  {
    id: 98,
    text: "What is the primary purpose of red markings on pipes and tubing in appliances using hydrocarbon refrigerants?",
    options: [
      "To indicate refrigerant flow direction",
      "To identify the manufacturer",
      "To alert technicians to the presence of a flammable refrigerant",
      "To meet aesthetic requirements",
    ],
    correctAnswer: 2,
    explanation:
      "Red markings warn service personnel that a flammable refrigerant is present so additional safety precautions can be taken.",
    category: "TYPE 1",
  },
  {
    id: 99,
    text: "When using a passive recovery device on a system with an inoperative compressor, what connection method improves refrigerant recovery?",
    options: [
      "Connecting only the low side",
      "Connecting only the high side",
      "Using the system compressor intermittently",
      "Connecting both the high and low sides",
    ],
    correctAnswer: 3,
    explanation:
      "Connecting both sides maximizes the pressure difference and improves refrigerant recovery when the compressor is not operating.",
    category: "TYPE 1",
  },
  {
    id: 100,
    text: "What is the required refrigerant recovery percentage when servicing a small appliance with a functioning compressor?",
    options: [
      "70 percent of the nameplate charge",
      "80 percent of the nameplate charge",
      "90 percent of the nameplate charge",
      "100 percent of the nameplate charge",
    ],
    correctAnswer: 2,
    explanation:
      "When the compressor is operating, at least 90 percent of the nameplate refrigerant charge must be recovered.",
    category: "TYPE 1",
  },
  {
    id: 101,
    text: "Which statement correctly describes system-dependent recovery equipment?",
    options: [
      "It can only be used on systems with more than 15 pounds of refrigerant",
      "It requires an oil separator to operate",
      "It can be used on small appliances because their charge is five pounds or less",
      "It must always be permanently attached to the appliance",
    ],
    correctAnswer: 2,
    explanation:
      "System-dependent recovery equipment is suitable for small appliances because they contain five pounds or less of refrigerant.",
    category: "TYPE 1",
  },
  {
    id: 102,
    text: "Which statement best describes self-contained recovery equipment?",
    options: [
      "It requires the appliance compressor to operate during recovery",
      "It depends on external system components to function",
      "It operates independently of the appliance being serviced",
      "It can only be used on systems without leaks",
    ],
    correctAnswer: 2,
    explanation:
      "Self-contained recovery equipment functions on its own without relying on the appliance’s internal components.",
    category: "TYPE 1",
  },
  {
    id: 103,
    text: "When is a technician required to have certified self-contained recovery equipment available?",
    options: [
      "Only when servicing large commercial systems",
      "Only when holding a Type I certification",
      "Whenever the system compressor is inoperable",
      "When holding any EPA certification beyond Type I",
    ],
    correctAnswer: 3,
    explanation:
      "Any EPA certification beyond Type I requires access to certified self-contained recovery or recycling equipment.",
    category: "TYPE 1",
  },
  {
    id: 104,
    text: "What is one advantage of using a self-contained recovery unit instead of system-dependent recovery?",
    options: [
      "It eliminates the need for recovery cylinders",
      "It reduces the risk of overheating the system compressor",
      "It requires multiple service connections",
      "It only works on non-leaking systems",
    ],
    correctAnswer: 1,
    explanation:
      "Self-contained units avoid stressing the appliance compressor, reducing the risk of overheating and damage.",
    category: "TYPE 1",
  },
  {
    id: 105,
    text: "Why is it unnecessary to attempt 80–90% recovery when a small appliance has leaked refrigerant?",
    options: [
      "Recovery equipment cannot measure percentages accurately",
      "Leaking systems automatically shut down recovery units",
      "EPA regulations prohibit high recovery levels on leaking systems",
      "The remaining refrigerant may be less than the target percentage",
    ],
    correctAnswer: 3,
    explanation:
      "If refrigerant has leaked, the remaining charge may be below the target percentage, making higher recovery impossible.",
    category: "TYPE 1",
  },
  {
    id: 106,
    text: "What condition shown in Figure I–1 allows combustion of a flammable refrigerant?",
    options: [
      "Concentration below the lower flammability limit",
      "Concentration between the lower and upper flammability limits with an ignition source",
      "Concentration above the upper flammability limit",
      "Any concentration when oxygen is present",
    ],
    correctAnswer: 0,
    explanation:
      "Combustion occurs only when concentration is between the lower and upper flammability limits and an ignition source exists.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-1.png",
  },
  {
    id: 107,
    text: "What safety practice is required when recovering flammable refrigerants?",
    options: [
      "Use open flames to detect leaks",
      "Ground the system, recovery unit, and recovery tank",
      "Operate only in enclosed spaces",
      "Increase system pressure during recovery",
    ],
    correctAnswer: 2,
    explanation:
      "Proper grounding prevents static electricity sparks that could ignite flammable refrigerants.",
    category: "TYPE 1",
  },
  {
    id: 108,
    text: "What does a pungent odor during recovery most likely indicate?",
    options: [
      "Normal oil breakdown",
      "Presence of moisture only",
      "Acid formation from a compressor burnout",
      "Incorrect refrigerant identification",
    ],
    correctAnswer: 1,
    explanation:
      "A strong odor suggests acidic contamination caused by a compressor burnout, requiring system flushing and component replacement.",
    category: "TYPE 1",
  },
  {
    id: 109,
    text: "What is the primary purpose of the process stub shown in Figure I–2?",
    options: [
      "Permanent refrigerant charging access",
      "Ventilation of excess pressure",
      "Temporary access for refrigerant recovery",
      "Mounting location for pressure gauges",
    ],
    correctAnswer: 3,
    explanation:
      "The process stub provides a sealed tube that can be temporarily accessed for recovery and charging.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-2.png",
  },
  {
    id: 110,
    text: "Why should a piercing-type access valve shown in Figure I–3 not be left installed permanently?",
    options: [
      "It restricts refrigerant flow",
      "It interferes with compressor operation",
      "It is not designed to be explosion-proof",
      "It can eventually leak refrigerant",
    ],
    correctAnswer: 0,
    explanation:
      "Piercing-type access valves are not permanent seals and can allow refrigerant to leak over time.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-3.png",
  },
  {
    id: 111,
    text: "What feature of the graduated charging cylinder in Figure I–4 allows accurate refrigerant measurement?",
    options: [
      "An internal compressor",
      "A clear glass column with calibrated scales",
      "A relief valve at the base",
      "A detachable recovery bag",
    ],
    correctAnswer: 2,
    explanation:
      "The clear glass column with scales allows technicians to determine refrigerant volume and convert it to mass accurately.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-4.png",
  },
  {
    id: 112,
    text: "Which refrigerants are not required to be recovered using EPA-approved recovery devices?",
    options: [
      "R-134a and R-410A",
      "R-404A and R-32",
      "Ammonia and sulfur dioxide",
      "R-290 and R-441A",
    ],
    correctAnswer: 1,
    explanation:
      "Ammonia and sulfur dioxide are not recovered with EPA-regulated equipment due to their unique properties and hazards.",
    category: "TYPE 1",
  },
  {
    id: 113,
    text: "What information is typically found on the nameplate shown in Figure I–5?",
    options: [
      "Recovery vacuum requirements",
      "Approved flushing solutions",
      "Refrigerant type used in the appliance",
      "Leak rate thresholds",
    ],
    correctAnswer: 3,
    explanation:
      "The nameplate identifies key system details, including the type of refrigerant used in the appliance.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-5.png",
  },

  {
    id: 114,
    text: "Why must the type of refrigerant in a system be identified before beginning recovery?",
    options: [
      "To calculate the system cooling capacity",
      "To select the correct DOT-approved recovery machine and cylinder",
      "To determine the compressor oil viscosity",
      "To decide whether recovery is legally required",
    ],
    correctAnswer: 1,
    explanation:
      "Different refrigerants require compatible recovery machines and cylinders rated for their specific pressures and properties.",
    category: "TYPE 1",
  },
  {
    id: 115,
    text: "What is the primary consequence of mixing two different refrigerant types during recovery?",
    options: [
      "Reduced system efficiency",
      "Higher operating pressures",
      "The refrigerant cannot be reused and may require destruction",
      "Only partial recovery is possible",
    ],
    correctAnswer: 2,
    explanation:
      "Mixed refrigerants cannot be reused and often must be sent to an approved facility for destruction.",
    category: "TYPE 1",
  },
  {
    id: 116,
    text: "Which recovery cylinder labeling allows use with both R-410A and lower-pressure refrigerants?",
    options: [
      "DOT-4BA",
      "DOT-4BW",
      "DOT-4BA400 or DOT-4BW400",
      "Any DOT-certified cylinder",
    ],
    correctAnswer: 2,
    explanation:
      "Cylinders labeled DOT-4BA400 or DOT-4BW400 are rated for higher pressures such as R-410A and can also handle lower-pressure refrigerants.",
    category: "TYPE 1",
  },
  {
    id: 117,
    text: "When using a solderless piercing valve on tubing, what must be done after servicing is complete?",
    options: [
      "Leave the valve permanently installed",
      "Pressurize the system to test the valve",
      "Remove the valve and seal the tube",
      "Replace the tubing section",
    ],
    correctAnswer: 2,
    explanation:
      "Solderless piercing valves are temporary and must be removed and the tube sealed to prevent leaks.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-6.png",
  },
  {
    id: 118,
    text: "System-dependent recovery methods are limited to appliances containing how much refrigerant?",
    options: [
      "5 pounds or less",
      "10 pounds or less",
      "15 pounds or less",
      "20 pounds or less",
    ],
    correctAnswer: 2,
    explanation:
      "System-dependent recovery can only be used on appliances containing 15 pounds or less of refrigerant.",
    category: "TYPE 1",
  },
  {
    id: 119,
    text: "What is a key advantage of connecting recovery hoses to both high- and low-side service ports?",
    options: [
      "Lower recovery cylinder pressure",
      "Reduced risk of non-condensables",
      "Faster recovery and more complete refrigerant removal",
      "Elimination of the need for a recovery machine",
    ],
    correctAnswer: 2,
    explanation:
      "Using both ports speeds recovery and ensures refrigerant is removed from both sides of the system.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-7.png",
  },
  {
    id: 120,
    text: "Why must technicians avoid trapping liquid refrigerant in service hoses?",
    options: [
      "It increases recovery time",
      "Liquid expansion can cause excessive pressure and hose failure",
      "It contaminates the recovery cylinder",
      "It prevents accurate pressure readings",
    ],
    correctAnswer: 1,
    explanation:
      "Trapped liquid refrigerant can expand as it warms, creating dangerously high pressures in the hose.",
    category: "TYPE 1",
  },
  {
    id: 121,
    text: "In a system using a capillary tube, where is the high-pressure side located?",
    options: [
      "Between the expansion device outlet and compressor inlet",
      "Only inside the condenser coil",
      "Between the compressor discharge and expansion device inlet",
      "At the evaporator outlet",
    ],
    correctAnswer: 2,
    explanation:
      "The high-pressure side is located between the compressor discharge and the inlet of the throttling device.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-8.png",
  },
  {
    id: 122,
    text: "What precaution must be taken when operating a system compressor during recovery?",
    options: [
      "Operate only above 10 psig suction pressure",
      "Never allow suction pressure below 4 inches of mercury vacuum",
      "Run the compressor continuously to speed recovery",
      "Disable the condenser fan",
    ],
    correctAnswer: 1,
    explanation:
      "Operating below 4 inches of mercury vacuum can overheat and damage the compressor.",
    category: "TYPE 1",
  },
  {
    id: 123,
    text: "Why should a hermetic compressor never be operated when using a self-contained recovery machine?",
    options: [
      "It increases electrical consumption",
      "It can introduce non-condensables",
      "The compressor relies on refrigerant flow for cooling",
      "It reduces oil circulation",
    ],
    correctAnswer: 2,
    explanation:
      "Hermetic compressors depend on refrigerant flow for motor cooling, which is absent during self-contained recovery.",
    category: "TYPE 1",
  },
  {
    id: 124,
    text: "If system pressure is 0 psig after connecting to a sealed system, what should be done?",
    options: [
      "Begin recovery immediately",
      "Add nitrogen to raise pressure",
      "Do not begin recovery because refrigerant has leaked out",
      "Switch to passive recovery",
    ],
    correctAnswer: 2,
    explanation:
      "A 0 psig reading indicates the refrigerant has leaked out and air or moisture may have entered the system.",
    category: "TYPE 1",
  },
  {
    id: 125,
    text: "What is the required final deep vacuum level after repairs and leak checking?",
    options: [
      "1000 microns",
      "800 microns",
      "500 microns or lower",
      "200 microns only",
    ],
    correctAnswer: 2,
    explanation:
      "A final deep vacuum of at least 500 microns is required, with 300 microns being ideal.",
    category: "TYPE 1",
  },
  {
    id: 126,
    text: "Why are non-condensable gases harmful in a refrigeration system?",
    options: [
      "They lower oil viscosity",
      "They increase condenser efficiency",
      "They raise system pressure and reduce heat transfer",
      "They improve refrigerant flow",
    ],
    correctAnswer: 2,
    explanation:
      "Non-condensables increase high-side pressure and reduce the condenser’s effective heat transfer area.",
    category: "TYPE 1",
  },
  {
    id: 127,
    text: "Which method can help release refrigerant trapped in compressor oil when the compressor is not running?",
    options: [
      "Cooling the compressor with water",
      "Activating the crankcase heater or gently striking the compressor",
      "Opening the discharge valve fully",
      "Increasing condenser airflow",
    ],
    correctAnswer: 1,
    explanation:
      "Heating the oil or gently striking the compressor helps release refrigerant trapped in the oil sump.",
    category: "TYPE 1",
  },
  {
    id: 128,
    text: "How can the presence of non-condensable gases in a recovery cylinder be identified?",
    options: [
      "By oil color change",
      "By reduced refrigerant weight",
      "By comparing actual pressure to expected pressure at a stable temperature",
      "By observing frost on the cylinder",
    ],
    correctAnswer: 2,
    explanation:
      "If actual pressure is higher than expected for the refrigerant at a stable temperature, non-condensables may be present.",
    category: "TYPE 1",
  },

  {
    id: 129,
    text: "Why must a system or recovery cylinder be allowed to stabilize to room temperature before checking for non-condensable gases?",
    options: [
      "To prevent refrigerant loss during testing",
      "To ensure pressure and temperature readings are valid for comparison",
      "To speed up the recovery process",
      "To reduce the risk of frostbite",
    ],
    correctAnswer: 1,
    explanation:
      "Accurate comparison with a pressure–temperature chart requires stable and known pressure and temperature conditions.",
    category: "TYPE 1",
  },
  {
    id: 130,
    text: "What is the recommended action if refrigerant contamination is suspected in a recovery cylinder?",
    options: [
      "Vent the refrigerant to the atmosphere",
      "Reuse the refrigerant only in the same system",
      "Turn the refrigerant in for reclamation",
      "Dilute the refrigerant with new refrigerant",
    ],
    correctAnswer: 2,
    explanation:
      "Suspected contaminated refrigerant should be sent for reclamation rather than reused.",
    category: "TYPE 1",
  },

  {
    id: 131,
    text: "In very high pressure appliances, what type of refrigerant is used?",
    options: ["R-50", "R-410A", "R-503", "R-500"],
    correctAnswer: 2,
    explanation:
      "R-503 is the only refrigerant on the list that is used in VERY high pressure appliances. R-410A and R-22 are used in high pressure appliances. R-500 is used in medium pressure appliances.",
    category: "CORE",
  },
  {
    id: 132,
    text: "Which of the following devices is at the liquid line's end?",
    options: ["Compressor", "Expansion Device", "Evaporator", "Condenser"],
    correctAnswer: 1,
    explanation:
      "The liquid line serves to connect the condenser to the expansion device - which is located at the end.",
    category: "CORE",
  },
  {
    id: 133,
    text: "How much money does the EPA give to those who report other individuals who release refrigerants into the atmosphere?",
    options: ["$10,000", "$25,000", "$5,000", "7000"],
    correctAnswer: 0,
    explanation:
      "Individuals can report their findings to the EPA via the official EPA website.",
    category: "CORE",
  },
  {
    id: 134,
    text: "Which of the following refrigerant groups does R-22 belong to?",
    options: ["HFC", "CFC", "HCFC", "All of the above"],
    correctAnswer: 2,
    explanation: "R-22 is a part of the HCFC (hydrochloroflurocarbons) class.",
    category: "CORE",
  },
  {
    id: 135,
    text: "When inspecting for leaks in various systems, which gas should be used?",
    options: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen"],
    correctAnswer: 1,
    explanation:
      "Nitrogen is relatively stable and has a low temperature under pressurization. These features make it useful when checking for leaks.",
    category: "CORE",
  },
  {
    id: 136,
    text: "Which of the following terms best describes the process of changing a refrigerant from a liquid to a gas through the use of heat?",
    options: ["Sub Heat", "Latent Heat", "Condensation", "Total Heat"],
    correctAnswer: 1,
    explanation:
      "In the latent heating process, the temperature does not change, but the state changes from a liquid to a gas.",
    category: "CORE",
  },
  {
    id: 137,
    text: "In a medium-pressure appliance, which of the following refrigerants is used?",
    options: ["R-11", "R-503", "R-500", "R-410A"],
    correctAnswer: 2,
    explanation:
      "R-11 is used in low pressure appliances, R-500 in medium pressure appliances, R-503 in very high pressure appliances, and R-410A in high pressure appliances.",
    category: "CORE",
  },
  {
    id: 138,
    text: "Which of the following has the least amount of ozone depletion potential?",
    options: ["HCFC", "CFC", "HFC", "All will have same depletion potential"],
    correctAnswer: 2,
    explanation:
      "HFC refrigerants do not contain chlorine ions, which are responsible for ozone depletion, giving them the lowest ozone depletion potential.",
    category: "CORE",
  },
  {
    id: 139,
    text: "The ozone layer in the stratosphere extends how many miles above the Earth's surface?",
    options: ["41", "21", "45", "31"],
    correctAnswer: 3,
    explanation:
      "The stratosphere extends 31 miles high and is located just above the troposphere.",
    category: "CORE",
  },
  {
    id: 140,
    text: "Which of the following items is (are) a violation of the Clean Air Act?",
    options: [
      "Falsifying or failing to keep records",
      "Failing to reach required evacuation levels before opening or disposing of appliances",
      "Knowingly releasing CFC or HCFC refrigerants or their substitutes while repairing appliances",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "All of the listed actions are violations of the Clean Air Act.",
    category: "CORE",
  },
  {
    id: 141,
    text: "In what year did the Montreal Protocol take place?",
    options: ["2009", "1989", "1995", "2001"],
    correctAnswer: 1,
    explanation:
      "The Montreal Protocol went into effect in 1989 to protect the ozone layer by phasing out harmful chemicals.",
    category: "CORE",
  },
  {
    id: 142,
    text: "Which of the following is obtained when ozone reacts with chlorine ion?",
    options: ["Fluorine", "Oxygen", "HCl", "All of the option are correct"],
    correctAnswer: 1,
    explanation:
      "When chlorine ion reacts with ozone, oxygen and chlorine monoxide are formed.",
    category: "CORE",
  },
  {
    id: 143,
    text: "Despite the fact that R-22 is considered as non-toxic, it:",
    options: [
      "can cause asphyxia",
      "is a Class I refrigerant",
      "is lighter than air",
      "can be detected by its color",
    ],
    correctAnswer: 0,
    explanation:
      "Even though R-22 is non-toxic, it can displace oxygen and cause asphyxiation in confined spaces.",
    category: "CORE",
  },
  {
    id: 144,
    text: "When using a system-dependent recovery system on a compressor-operated appliance, the technician should:",
    options: [
      "Never allow the refrigerant to go to the high side of the system",
      "Install access fitting on both high and low-pressure sides of the system",
      "Run the compressor and recover from the high side of the system only",
      "Run the compressor and recover from the low side of the system only",
    ],
    correctAnswer: 2,
    explanation:
      "With an operating compressor and restricted metering device, recovery is performed from the high side only.",
    category: "CORE",
  },
  {
    id: 145,
    text: "What standard must reclaimed refrigerant meet before it may be resold, according to EPA regulations?",
    options: ["ARI 740", "EPA 700", "ARI 740", "ARI 700"],
    correctAnswer: 3,
    explanation:
      "EPA regulations require reclaimed refrigerant to meet ARI 700 standards before resale.",
    category: "CORE",
  },

  {
    id: 146,
    text: "On a daily basis, which of the following should be verified in refrigerant recovery equipment?",
    options: [
      "Temperature Levels",
      "Both Oil Levels and for Refrigerant Leaks",
      "Refrigerant Leaks",
      "Oil Levels",
    ],
    correctAnswer: 1,
    explanation:
      "Recovery equipment must be checked daily for proper oil levels and refrigerant leaks to ensure safe and effective operation.",
    category: "TYPE 1",
  },
  {
    id: 147,
    text: "Technicians who work on small appliances with sealed systems must have:",
    options: [
      "Universal 609 certification",
      "TYPE 2 certification",
      "Type I, II, or III certification",
      "Type I or Universal certification",
    ],
    correctAnswer: 3,
    explanation:
      "Technicians handling refrigerant in small appliances must hold either Type I or Universal certification.",
    category: "TYPE 1",
  },
  {
    id: 148,
    text: "Is it true or false that recovery devices should not be used on hydrogen-containing equipment?",
    options: ["FALSE", "TRUE"],
    correctAnswer: 1,
    explanation:
      "Hydrogen-containing systems can be hazardous, and recovery devices should not be used on them.",
    category: "TYPE 1",
  },
  {
    id: 149,
    text: "To determine the type of refrigerant, which purity test is used?",
    options: ["ARI 700", "ARI 900", "ARI 200", "ARI 500"],
    correctAnswer: 0,
    explanation:
      "ARI 700 is the recognized standard used to determine refrigerant purity.",
    category: "TYPE 1",
  },
  {
    id: 150,
    text: "Equipment for recovery must be:",
    options: [
      "Used on all equipment manufactured after November 15, 1995",
      "Used on all equipment manufactured after July 1, 1995",
      "CSA approved",
      "Certified by an EPA-approved testing laboratory",
    ],
    correctAnswer: 3,
    explanation:
      "Recovery equipment must be certified by an approved testing laboratory to ensure compliance and safety.",
    category: "TYPE 1",
  },
  {
    id: 151,
    text: "Only one service connection is required for which of the following?",
    options: [
      "Both",
      "System-Dependent Recovery Units",
      "Self-Contained Recovery Units",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "Self-contained recovery units are designed to operate with only one service connection.",
    category: "TYPE 1",
  },
  {
    id: 152,
    text: "The EPA defines a small appliance as:",
    options: [
      "Appliances manufactured, charged, and hermetically sealed in a factory that contain 5 lbs. or less of refrigerant",
      "Appliances charged, and hermetically sealed in a factory that contain 8 lbs or less of refrigerant",
      "Appliances charged, and hermetically sealed in a factory that contain 10 lbs or less of refrigerant",
      "Appliances with internal volumes no greater than 3 cubic feet",
    ],
    correctAnswer: 0,
    explanation:
      "A small appliance contains 5 pounds or less of refrigerant and is factory sealed.",
    category: "TYPE 1",
  },
  {
    id: 153,
    text: "In a refrigeration system, air causes _____ discharge pressure.",
    options: ["No Changes In", "Lower or Higher", "Lower", "Higher"],
    correctAnswer: 3,
    explanation:
      "Air in a system increases discharge pressure and indicates the presence of noncondensables.",
    category: "TYPE 1",
  },
  {
    id: 154,
    text: "You should never do this when a system is in a deep vacuum:",
    options: [
      "add refrigerant to the system",
      "energize the compressor",
      "energize system fans and blowers",
      "use a micron gauge",
    ],
    correctAnswer: 1,
    explanation:
      "Energizing the compressor under deep vacuum can damage internal motor windings.",
    category: "TYPE 1",
  },
  {
    id: 155,
    text: "During the recovery process, there is a strong odor. Which of the following is most likely to be the source of the problem?",
    options: [
      "Condenser Burnout",
      "Compressor Burnout",
      "Accumulator Burnout",
      "All of the Above",
    ],
    correctAnswer: 1,
    explanation:
      "A strong odor during recovery typically indicates compressor burnout.",
    category: "TYPE 1",
  },
  {
    id: 156,
    text: "When using a system-dependent recovery system on a compressor-operated appliance, the technician should:",
    options: [
      "Run the compressor and recover from the high side of the system only",
      "Run the compressor and recover from the low side of the system only",
      "allow the refrigerant to go to the high side of the system",
      "Install access fittings on both the high and low-pressure sides of the system",
    ],
    correctAnswer: 0,
    explanation:
      "In systems with restricted metering devices, recovery is performed from the high side only.",
    category: "TYPE 1",
  },
  {
    id: 157,
    text: "Which method is the most effective for transporting refrigeration cylinders?",
    options: ["Downright", "Upright", "Does Not Matter", "On its Side"],
    correctAnswer: 1,
    explanation:
      "Cylinders must be transported upright to prevent damage and leaks.",
    category: "TYPE 1",
  },
  {
    id: 158,
    text: "Which of the following should you use to flush the system after the refrigerant has been recovered?",
    options: ["Nitrogen", "R-22", "Water", "Compressed air"],
    correctAnswer: 0,
    explanation:
      "Nitrogen is used to safely flush debris from the system after recovery.",
    category: "TYPE 1",
  },
  {
    id: 159,
    text: "Only a stable _________ allows you to accurately read refrigerant pressure.",
    options: ["Temperature", "Volume", "Density", "All of the Above"],
    correctAnswer: 0,
    explanation: "Accurate pressure readings require a stable temperature.",
    category: "TYPE 1",
  },
  {
    id: 160,
    text: "The EPA's requirement for repairing small appliance leaks is:",
    options: [
      "All leaks must be repaired within 30 days",
      "Leaks should not be repaired",
      "All leaks must be repaired immediately",
      "Leaks should be repaired whenever possible",
    ],
    correctAnswer: 3,
    explanation:
      "Leak repair is not mandatory, but it is recommended whenever possible.",
    category: "TYPE 1",
  },
  {
    id: 161,
    text: "When which of the following is vented in a closed environment, it can cause an explosion?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    correctAnswer: 2,
    explanation:
      "Hydrogen is highly flammable and can explode when released in enclosed spaces.",
    category: "TYPE 1",
  },

  {
    id: 162,
    text: "Which condition qualifies an appliance as a small appliance under EPA regulations?",
    options: [
      "It contains less than 10 pounds of refrigerant",
      "It is field-charged during installation",
      "It is factory-manufactured, hermetically sealed, and contains 5 pounds or less of refrigerant",
      "It operates only on low-pressure refrigerants",
    ],
    correctAnswer: 2,
    explanation:
      "A small appliance is defined as being factory-manufactured, hermetically sealed, and containing no more than five pounds of refrigerant.",
    category: "TYPE 1",
  },
  {
    id: 163,
    text: "Which system does NOT fall under the definition of a small appliance?",
    options: [
      "Pressurized terminal air conditioner (PTAC)",
      "Hermetically sealed dehumidifier",
      "Domestic refrigerator",
      "Motorized vehicle air conditioning system (MVAC)",
    ],
    correctAnswer: 3,
    explanation:
      "Motorized vehicle air conditioning systems require a separate certification and are not classified as small appliances.",
    category: "TYPE 1",
  },
  {
    id: 164,
    text: "What certification is required for a technician who handles refrigerant when servicing small appliances?",
    options: [
      "Type II certification only",
      "Type I or Universal certification",
      "MVAC certification",
      "No certification is required",
    ],
    correctAnswer: 1,
    explanation:
      "Technicians working with refrigerant in small appliances must hold either a Type I or Universal certification.",
    category: "TYPE 1",
  },
  {
    id: 165,
    text: "What is the minimum recovery requirement for equipment manufactured BEFORE November 15, 1993?",
    options: [
      "90% recovery with the compressor operating",
      "80% recovery or achieving a 4-inch vacuum",
      "100% refrigerant removal",
      "EPA laboratory approval",
    ],
    correctAnswer: 1,
    explanation:
      "Older recovery equipment must recover at least 80% of refrigerant or achieve a 4-inch vacuum under ARI 740 conditions.",
    category: "TYPE 1",
  },
  {
    id: 166,
    text: "Which requirement applies to recovery equipment manufactured AFTER November 15, 1993?",
    options: [
      "No approval is necessary if it reaches a vacuum",
      "It must recover 80% regardless of compressor operation only",
      "It must be approved by an EPA-approved third-party laboratory",
      "Low-loss fittings are optional",
    ],
    correctAnswer: 2,
    explanation:
      "Recovery equipment manufactured after this date must be approved by an EPA-approved third-party laboratory.",
    category: "TYPE 1",
  },
  {
    id: 167,
    text: "Why must recovery equipment fittings be equipped with low-loss fittings?",
    options: [
      "To increase recovery speed",
      "To reduce oil contamination",
      "To prevent refrigerant loss when disconnecting hoses",
      "To allow operation without a compressor",
    ],
    correctAnswer: 2,
    explanation:
      "Low-loss fittings are designed to minimize refrigerant emissions during hose disconnection.",
    category: "TYPE 1",
  },
  {
    id: 168,
    text: "Which action should be taken BEFORE operating a self-contained recovery device?",
    options: [
      "Start the compressor immediately",
      "Ensure the recovery tank inlet valve is open",
      "Evacuate the system to 0 psig",
      "Heat the compressor oil",
    ],
    correctAnswer: 1,
    explanation:
      "The recovery tank inlet valve must be open to prevent high discharge pressures during recovery.",
    category: "TYPE 1",
  },
  {
    id: 169,
    text: "Why must the temperature of a recovery cylinder be stabilized before checking for non-condensables?",
    options: [
      "To reduce refrigerant pressure",
      "To prevent refrigerant mixing",
      "To ensure pressure/temperature chart accuracy",
      "To speed up recovery time",
    ],
    correctAnswer: 2,
    explanation:
      "Pressure readings are only meaningful when the cylinder temperature is known and stable.",
    category: "TYPE 1",
  },
  {
    id: 170,
    text: "When using a system-dependent recovery process with an operating compressor, where should refrigerant be recovered from?",
    options: [
      "The low side only",
      "Both high and low sides",
      "The receiver outlet",
      "The high side of the system",
    ],
    correctAnswer: 3,
    explanation:
      "With an operating compressor, recovery is performed from the high side because the compressor moves refrigerant there.",
    category: "TYPE 1",
  },
  {
    id: 171,
    text: "Which situation requires special recovery equipment and training rather than standard EPA-approved devices?",
    options: [
      "Small appliances with CFC refrigerants",
      "Domestic refrigerators with defrost heaters",
      "Systems built before 1950 using uncommon refrigerants",
      "Hermetically sealed PTAC units",
    ],
    correctAnswer: 2,
    explanation:
      "Older systems may contain refrigerants such as sulfur dioxide or methyl chloride, which require specialized handling.",
    category: "TYPE 1",
  },
  {
    id: 172,
    text: "Which certification is required for technicians servicing high-pressure appliances such as residential split systems?",
    options: [
      "Type I Technician",
      "No certification required",
      "Type II Technician or Universal Technician",
      "MVAC Technician only",
    ],
    correctAnswer: 2,
    explanation:
      "High-pressure and very high-pressure appliances require a Type II or Universal certification.",
    category: "TYPE 2",
  },
  {
    id: 173,
    text: "What gas is recommended to pressurize a newly installed system before leak checking?",
    options: ["Nitrogen", "Oxygen", "Refrigerant vapor", "Compressed air"],
    correctAnswer: 0,
    explanation:
      "Nitrogen is inert and safe for pressurizing systems during leak checks.",
    category: "TYPE 2",
  },
  {
    id: 174,
    text: "Which method is best for pinpointing the exact location of a refrigerant leak after the general area is found?",
    options: [
      "Electronic detector",
      "Soap bubbles",
      "Pressure gauge",
      "Thermometer",
    ],
    correctAnswer: 1,
    explanation:
      "Soap bubbles allow precise identification of the leak location.",
    category: "TYPE 2",
  },
  {
    id: 175,
    text: "Which component is most likely to leak on an open compressor that has been idle for several months?",
    options: [
      "Condenser coil",
      "Evaporator coil",
      "Suction line",
      "Rotating shaft seal",
    ],
    correctAnswer: 3,
    explanation:
      "The rotating shaft seal can dry out and leak after long periods of inactivity.",
    category: "TYPE 2",
  },
  {
    id: 176,
    text: "What visible sign during inspection commonly indicates a refrigerant leak?",
    options: ["Oil residue", "Rust formation", "Frost buildup", "Loose wiring"],
    correctAnswer: 0,
    explanation:
      "Oil traces often escape with refrigerant and indicate a leak.",
    category: "TYPE 2",
  },
  {
    id: 177,
    text: "Excessive superheat in a high-pressure system usually indicates which condition?",
    options: [
      "Overcharged system",
      "Restricted condenser airflow",
      "Low refrigerant charge",
      "Faulty thermostat",
    ],
    correctAnswer: 2,
    explanation: "Low refrigerant charge leads to excessive superheat.",
    category: "TYPE 2",
  },
  {
    id: 178,
    text: "At what annual leak rate must comfort cooling appliances with more than 50 lbs of refrigerant be repaired?",
    options: ["10%", "15%", "25%", "35%"],
    correctAnswer: 1,
    explanation:
      "Comfort cooling appliances require repair when leaks exceed 15% annually.",
    category: "TYPE 2",
  },
  {
    id: 179,
    text: "What is the required annual leak rate threshold for commercial or industrial process refrigeration systems over 50 lbs?",
    options: ["10%", "15%", "25%", "35%"],
    correctAnswer: 3,
    explanation:
      "Process refrigeration systems must be repaired when leak rates exceed 35%.",
    category: "TYPE 2",
  },
  {
    id: 180,
    text: "Why should oil and filters on a recycling machine be checked and changed regularly?",
    options: [
      "Recovered refrigerant may contain contaminants",
      "To reduce operating noise",
      "To meet shipping requirements",
      "To increase compressor speed",
    ],
    correctAnswer: 0,
    explanation:
      "Recovered refrigerant can contain acids, moisture, and oil that contaminate the system.",
    category: "TYPE 2",
  },
  {
    id: 181,
    text: "What risk exists when recovery equipment with a hermetic compressor pulls a deep vacuum?",
    options: [
      "Loss of refrigerant accuracy",
      "Cylinder overfilling",
      "Compressor overheating",
      "Oil dilution",
    ],
    correctAnswer: 2,
    explanation:
      "Hermetic compressors rely on refrigerant flow for cooling and may overheat under deep vacuum.",
    category: "TYPE 2",
  },
  {
    id: 182,
    text: "What must technicians do before switching recovery equipment to a different refrigerant?",
    options: [
      "Increase condenser pressure",
      "Purge equipment, change filter, and evacuate",
      "Add fresh oil only",
      "Replace all hoses with new ones",
    ],
    correctAnswer: 1,
    explanation:
      "Purging, filter replacement, and evacuation prevent cross-contamination.",
    category: "TYPE 2",
  },
  {
    id: 183,
    text: "Which refrigerant requires a dedicated set of hoses, gauges, and recovery equipment?",
    options: ["R-22", "R-410A", "R-404A", "R-134a"],
    correctAnswer: 3,
    explanation:
      "R-134a systems require dedicated tools to prevent contamination.",
    category: "TYPE 2",
  },
  {
    id: 184,
    text: "Why might a technician recover refrigerant in the liquid phase?",
    options: [
      "To reduce recovery time",
      "To avoid moisture entry",
      "To prevent oil loss completely",
      "To increase system pressure",
    ],
    correctAnswer: 0,
    explanation: "Liquid recovery speeds up the overall recovery process.",
    category: "TYPE 2",
  },
  {
    id: 185,
    text: "When servicing a system with a receiver/storage tank, where should refrigerant normally be placed?",
    options: [
      "Evaporator inlet",
      "Condenser outlet",
      "Receiver",
      "Suction line",
    ],
    correctAnswer: 2,
    explanation:
      "The receiver is designed to store refrigerant during service.",
    category: "TYPE 2",
  },
  {
    id: 186,
    text: "What is the preferred unit for accurately measuring a deep vacuum during evacuation?",
    options: ["Inches of mercury", "PSIG", "Microns", "Bar"],
    correctAnswer: 2,
    explanation:
      "Microns provide the most accurate measurement of deep vacuum levels.",
    category: "TYPE 2",
  },

  {
    id: 187,
    text: "When which of the following is vented in a closed environment, it can cause an explosion?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    correctAnswer: 2,
    explanation:
      "Small amounts of liquid hydrogen can be explosive when combined with air and small amounts of energy.",
    category: "TYPE 2",
  },
  {
    id: 188,
    text: "The state of a refrigerant leaving a refrigeration system's liquid receiver is:",
    options: [
      "Low-Pressure Liquid",
      "Low-Pressure Gas",
      "High-Pressure Liquid",
      "High-Pressure Gas",
    ],
    correctAnswer: 2,
    explanation:
      "The refrigerant leaves the receiver as a high-pressure liquid and is subcooled below the liquid interface.",
    category: "TYPE 2",
  },
  {
    id: 189,
    text: "When the annualized leak rate reaches _____ or more, leaks in industrial process and refrigeration units must be repaired with a 50-pound charge or larger.",
    options: ["40%", "30%", "10%", "20%"],
    correctAnswer: 1,
    explanation:
      "Industrial and commercial refrigeration systems must be repaired when the annual leak rate exceeds 30%.",
    category: "TYPE 2",
  },
  {
    id: 190,
    text: "When evacuating a system, what is the minimum number of microns a vacuum pump must pull?",
    options: ["500000 Microns", "50000 Microns", "500 Microns", "5000 Microns"],
    correctAnswer: 2,
    explanation:
      "A finishing vacuum of 500 microns is acceptable for proper evacuation.",
    category: "TYPE 2",
  },
  {
    id: 191,
    text: "A high-pressure appliance with a capacity of less than 200 pounds. The level of an HCFC or HFC refrigerant must be evacuated (recovered) to:",
    options: [
      "4 inches of vacuum",
      "0 inches of vacuum",
      "10 inches of vacuum",
      "15 inches of vacuum",
    ],
    correctAnswer: 1,
    explanation:
      "High-pressure appliances with less than 200 pounds must be evacuated to 0 inches of vacuum.",
    category: "TYPE 2",
  },
  {
    id: 192,
    text: "Which of the following is commonly contained in refrigerants made before 1950?",
    options: ["SO2", "HNO6", "NO2", "None of the above"],
    correctAnswer: 0,
    explanation:
      "Older refrigeration systems commonly used sulfur dioxide as a refrigerant.",
    category: "TYPE 2",
  },
  {
    id: 193,
    text: 'According to EPA standards, removing which component is considered a "major repair"?',
    options: [
      "Evaporator fan motor",
      "Liquid line drier",
      "Compressor",
      "Switch",
    ],
    correctAnswer: 2,
    explanation: "Removing a compressor is classified as a major repair.",
    category: "TYPE 2",
  },
  {
    id: 194,
    text: "Which of the following is used to prevent transient liquid slugs from getting into the compressor?",
    options: ["Recovery Equipment", "Crank Driver", "Accumulator", "Radiator"],
    correctAnswer: 2,
    explanation:
      "An accumulator prevents liquid refrigerant from entering the compressor.",
    category: "TYPE 2",
  },
  {
    id: 195,
    text: "The disposable cylinders must be:",
    options: [
      "Recovered and used again.",
      "Used for air.",
      "Discarded.",
      "Stored away.",
    ],
    correctAnswer: 2,
    explanation:
      "Disposable cylinders must be properly discarded after recovery.",
    category: "TYPE 2",
  },
  {
    id: 196,
    text: "Which of the following do the filter driers remove?",
    options: [
      "Mold Only",
      "Moisture Only",
      "Moisture and Particulates",
      "Particulates Only",
    ],
    correctAnswer: 2,
    explanation:
      "Filter driers remove moisture and solid contaminants from the system.",
    category: "TYPE 2",
  },
  {
    id: 197,
    text: "The usage of certified recovery equipment is the first step in using proper recovery practices that is certified by:",
    options: [
      "EPA field supervisors",
      "EPA approved laboratory",
      "EPA only",
      "Manufacturers approved by UL",
    ],
    correctAnswer: 1,
    explanation:
      "Recovery equipment must be certified by an EPA approved laboratory.",
    category: "TYPE 2",
  },
  {
    id: 198,
    text: "Which of the following cannot be compressed by a compressor?",
    options: ["Both options", "None of the options", "Vapor", "Liquid"],
    correctAnswer: 3,
    explanation: "Liquids cannot be compressed by a compressor.",
    category: "TYPE 2",
  },
  {
    id: 199,
    text: "A high-pressure appliance with 210 pounds of R-407C refrigerant must be evacuated (recovered) to a level of;",
    options: [
      "0 inches of vacuum",
      "4 inches of vacuum",
      "15 inches of vacuum",
      "10 inches of vacuum",
    ],
    correctAnswer: 3,
    explanation:
      "High-pressure appliances with more than 200 pounds must be evacuated to 10 inches of vacuum.",
    category: "TYPE 2",
  },
  {
    id: 200,
    text: "For a pressure decay test, using dry ______ is the best leak-checking method.",
    options: ["Carbon", "Water", "Nitrogen", "Air"],
    correctAnswer: 2,
    explanation:
      "Nitrogen is an inert gas used to safely test systems for leaks.",
    category: "TYPE 2",
  },
  {
    id: 201,
    text: "The unit should first be ______ after the installation of any type of system.",
    options: [
      "Charged according to manufacturer's guidelines.",
      "Pressurized with air and checked for leaks.",
      "Left 24 hours to allow the system to stabilize.",
      "Pressurized with an inert gas and leak checked.",
    ],
    correctAnswer: 3,
    explanation:
      "Newly installed systems should first be pressurized with an inert gas and leak checked.",
    category: "TYPE 2",
  },
  {
    id: 202,
    text: "All comfort cooling systems containing more than 50 pounds of refrigerant must be repaired when the annual leak rate exceeds _____ .",
    options: ["15%", "20%", "10%", "5%"],
    correctAnswer: 0,
    explanation:
      "Comfort cooling systems must be repaired when leak rates exceed 15%.",
    category: "TYPE 2",
  },
  {
    id: 203,
    text: "If a leaking appliance with a regulated refrigerant can't be fixed, it must be:",
    options: [
      "retrofitted or retired within 12 months.",
      "replaced within 12 months.",
      "retrofitted or retired within 3 months.",
      "replaced within 3 months.",
    ],
    correctAnswer: 0,
    explanation:
      "Leaking appliances that cannot be repaired must be retrofitted or retired within 12 months.",
    category: "TYPE 2",
  },
  {
    id: 204,
    text: "Before charging a new system with refrigerant, what should be done?",
    options: [
      "Pressurize with compressed air and leak check.",
      "Pressurize with nitrogen (classified as an inert gas) and leak checked.",
      "Pressurize with oxygen and leak check.",
      "None of the above.",
    ],
    correctAnswer: 1,
    explanation:
      "Nitrogen is an inert gas and is safe to use for pressurizing a refrigeration system to perform leak checks before charging refrigerant.",
    category: "TYPE 2",
  },
  {
    id: 205,
    text: "Which refrigerant can be used for leak detection as a trace gas and pressurized with nitrogen?",
    options: ["R-12", "R-11", "R-22", "R-115"],
    correctAnswer: 2,
    explanation:
      "R-22 is commonly used as a trace gas mixed with nitrogen to help locate leaks during pressure testing.",
    category: "TYPE 2",
  },
  {
    id: 206,
    text: "What tools can you use to find general area of leaks and pinpoint leaks?",
    options: [
      "Soap bubbles.",
      "Look for oil residue.",
      "Electronic or ultrasonic leak detector will provide the general area of the leak.",
      "Refrigerant dye.",
    ],
    correctAnswer: 2,
    explanation:
      "Electronic or ultrasonic leak detectors are effective for identifying the general area where refrigerant leaks are present.",
    category: "TYPE 2",
  },
  {
    id: 207,
    text: "Traces of oil around a sight glass inlet fitting of a refrigeration system might be the indication of:",
    options: [
      "A leak",
      "Excessive oil in the system",
      "An overcharge",
      "A restriction at the TXV",
    ],
    correctAnswer: 0,
    explanation:
      "Oil residue around fittings usually indicates a refrigerant leak, since oil travels with refrigerant through the system.",
    category: "TYPE 2",
  },
  {
    id: 208,
    text: "Describe ways you can visually look for leaks.",
    options: [
      "Using soap bubbles",
      "Looking for traces of oil",
      "Excessive superheat, caused by low refrigerant charge",
      "All the above",
    ],
    correctAnswer: 3,
    explanation:
      "Visual leak detection can include soap bubbles, oil residue, and system performance symptoms such as excessive superheat.",
    category: "TYPE 2",
  },
  {
    id: 209,
    text: "Type II classification, as identified by EPA, applies to what equipment?",
    options: [
      "Small appliances with five (5) pounds of refrigerant or less",
      "Refrigerators, freezers, and vending machine appliances",
      "Low pressure appliances",
      "Split air conditioning equipment with five (5) pounds of refrigerant or more",
    ],
    correctAnswer: 3,
    explanation:
      "EPA Type II certification applies to high- and very high-pressure appliances, such as split air conditioning systems with five pounds or more of refrigerant.",
    category: "TYPE 2",
  },
  {
    id: 210,
    text: "What are the leak repair requirements for comfort cooling appliances and commercial appliances containing 50 lbs. or more of refrigerant?",
    options: [
      "Must be repaired if leak rate exceeds 15% in comfort cooling appliances.",
      "Must be repaired if leak rate exceeds 35% in all commercial and industrial process refrigeration.",
      "a and b",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "EPA regulations require leak repairs when comfort cooling appliances exceed a 15% leak rate and when commercial or industrial refrigeration exceeds a 35% leak rate.",
    category: "TYPE 2",
  },
  {
    id: 211,
    text: "What type of refrigerant was the most common before outlawing CFCs and HCFCs?",
    options: ["R-12", "R-22", "R-500", "R-134A"],
    correctAnswer: 1,
    explanation:
      "R-22 was widely used in air conditioning and refrigeration systems before HCFCs were phased out due to environmental regulations.",
    category: "TYPE 2",
  },
  {
    id: 212,
    text: "The required level of evacuation for recovery equipment manufactured after November 15, 1993, on a system containing less than 200 pounds of R-12 refrigerant is:",
    options: ["0 inches Hg", "4 inches Hg", "10 inches Hg", "15 inches Hg"],
    correctAnswer: 2,
    explanation:
      "Recovery equipment manufactured after November 15, 1993 must be capable of evacuating systems with less than 200 pounds of refrigerant to 10 inches of mercury.",
    category: "TYPE 2",
  },
  {
    id: 213,
    text: "What is the purpose of the filter drier and when should it be changed?",
    options: [
      "To filter the oil. Change every year",
      "To remove moisture from the refrigerant, replace on a routine basis or anytime a system is opened",
      "Cleans the air. Replace monthly",
      "Dries air filters. Replace yearly",
    ],
    correctAnswer: 1,
    explanation:
      "The filter drier removes moisture and contaminants from the refrigerant and should be replaced whenever the system is opened or as part of routine maintenance.",
    category: "TYPE 2",
  },

  {
    id: 214,
    text: "Industrial process and commercial refrigeration equipment with over 50 pounds of refrigerant with an annual leak rate of ___ % requires repair under EPA regulations.",
    options: ["0", "15", "35", "50"],
    correctAnswer: 2,
    explanation:
      "EPA regulations require repairs when industrial process or commercial refrigeration equipment exceeds a 35% annual leak rate.",
    category: "TYPE 2",
  },
  {
    id: 215,
    text: "How can you tell through a sight glass if there is excess moisture in the system?",
    options: [
      "You can see moisture bubbles",
      "Look for color changes of the refrigerant",
      "You can see gas bubbles",
      "Sight glass is clear",
    ],
    correctAnswer: 1,
    explanation:
      "Many sight glasses contain moisture indicators that change color when excess moisture is present in the refrigerant.",
    category: "TYPE 2",
  },
  {
    id: 216,
    text: "Comfort cooling chillers and all other equipment with over 50 pounds of refrigerant with an annual leak rate of ___ % requires repair under EPA regulations:",
    options: ["0", "15", "35", "50"],
    correctAnswer: 1,
    explanation:
      "Comfort cooling appliances are required to be repaired when the annual leak rate exceeds 15% under EPA rules.",
    category: "TYPE 2",
  },
  {
    id: 217,
    text: "Using large vacuum pumps can lead to freezing of water in the system. What are ways the technician can help prevent the freezing?",
    options: [
      "Increase pressure by introducing nitrogen to counteract freezing",
      "Begin charging with vapor until pressure is above freezing",
      "a and b",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "Raising system pressure by nitrogen or introducing refrigerant vapor prevents moisture from freezing during deep evacuation.",
    category: "TYPE 2",
  },
  {
    id: 218,
    text: "The majority of the liquid to be recovered from a system will be found in the:",
    options: [
      "Condenser",
      "Receiver (when applied)",
      "Low side of the system",
      "Evaporator",
    ],
    correctAnswer: 1,
    explanation:
      "When installed, the receiver stores most of the system’s liquid refrigerant charge.",
    category: "TYPE 2",
  },
  {
    id: 219,
    text: "Foaming at start-up may be found in what component? What does this mean?",
    options: [
      "Refrigerant in an accumulator foams on a low pressure",
      "Refrigerant in the compressor oil will cause oil foaming. Prevent refrigerant migration with a crankcase heater",
      "Refrigerant in the receiver foams with high pressure",
      "Refrigerant in the condenser foams on hot days",
    ],
    correctAnswer: 1,
    explanation:
      "Foaming occurs when refrigerant migrates into compressor oil and boils off at start-up, which is prevented with crankcase heaters.",
    category: "TYPE 2",
  },
  {
    id: 220,
    text: "What are preferred ways to measure a deep vacuum?",
    options: [
      "Use an analog vacuum gauge",
      "Measure to 500 microns is preferred or inches of Mercury (inches Hg)",
      "Use a compound vacuum gauge on your manifold",
      "Measurement is not necessary",
    ],
    correctAnswer: 1,
    explanation:
      "Micron gauges provide accurate measurement of deep vacuum levels, with 500 microns being the preferred benchmark.",
    category: "TYPE 2",
  },
  {
    id: 221,
    text: "If it becomes the owner’s responsibility to maintain records of all refrigerant added to units that contain more than ___ pounds of refrigerant charge.",
    options: ["15 pounds", "20 pounds", "35 pounds", "50 pounds"],
    correctAnswer: 3,
    explanation:
      "EPA regulations require owners to keep refrigerant service records for systems containing more than 50 pounds of refrigerant.",
    category: "TYPE 2",
  },
  {
    id: 222,
    text: "What do inches HG stand for?",
    options: [
      "Inches on high gauge",
      "Inches on hygrometer",
      "Inches of mercury",
      "Inches water",
    ],
    correctAnswer: 2,
    explanation:
      "Inches of mercury is a standard unit of measurement used to indicate vacuum pressure.",
    category: "TYPE 2",
  },
  {
    id: 223,
    text: "Exceptions to the required evacuation levels for recovery equipment that require an appliance be evacuated to only 0 psig apply to appliances that:",
    options: [
      "Are being salvaged",
      "Are filled with water or substances that would damage the recovery equipment",
      "Have defective evaporator fan motors",
      "Have air cooled condensers",
    ],
    correctAnswer: 1,
    explanation:
      "Systems contaminated with water or damaging substances are only required to be evacuated to 0 psig to protect recovery equipment.",
    category: "TYPE 2",
  },
  {
    id: 224,
    text: "When evacuating a vapor compression system how many microns does the vacuum need to achieve?",
    options: ["50", "100", "250", "500"],
    correctAnswer: 3,
    explanation:
      "A vacuum of 500 microns ensures that moisture and non-condensables have been effectively removed from the system.",
    category: "TYPE 2",
  },
  {
    id: 225,
    text: "Why should you never start a hermetic compressor when under deep vacuum?",
    options: [
      "Motor winding could be damaged",
      "Compressor valves could be damaged",
      "Shaft could break",
      "Moisture in refrigerant could freeze",
    ],
    correctAnswer: 0,
    explanation:
      "Without refrigerant cooling, the motor windings can overheat and be damaged when operating under deep vacuum.",
    category: "TYPE 2",
  },
  {
    id: 226,
    text: "The condition and state of refrigerant entering the receiver is:",
    options: [
      "Superheated high pressure vapor",
      "Superheated low pressure vapor",
      "Subcooled high pressure liquid",
      "Subcooled low pressure liquid",
    ],
    correctAnswer: 2,
    explanation:
      "Refrigerant enters the receiver as a subcooled high-pressure liquid after leaving the condenser.",
    category: "TYPE 2",
  },
  {
    id: 227,
    text: "What is a receiver, where is it located and what is the state of the refrigerant after leaving the receiver?",
    options: [
      "After the condenser, high pressure / high temperature liquid",
      "After the compressor, high pressure / high temperature liquid",
      "After the evaporator, high pressure / high temperature liquid",
      "After the TXV, high pressure / high temperature liquid",
    ],
    correctAnswer: 0,
    explanation:
      "A receiver is installed after the condenser and stores liquid refrigerant, which remains a high-pressure liquid as it leaves the receiver.",
    category: "TYPE 2",
  },
  {
    id: 228,
    text: "What is the liquid line?",
    options: [
      "Line between the compressor and the metering device",
      "Line between the evaporator and the metering device",
      "Line between the condenser and the metering device",
      "Line between the accumulator and the metering device",
    ],
    correctAnswer: 2,
    explanation:
      "The liquid line carries high-pressure liquid refrigerant from the condenser to the metering device.",
    category: "TYPE 2",
  },
  {
    id: 229,
    text: "What criteria must recovery equipment meet if manufactured after November 15, 1993?",
    options: [
      "Certified by an EPA laboratory",
      "Equipped with low-loss fittings",
      "Must meet the stringent vacuum standards",
      "All the above",
    ],
    correctAnswer: 3,
    explanation:
      "Recovery equipment manufactured after this date must meet EPA certification, include low-loss fittings, and achieve required vacuum levels.",
    category: "TYPE 2",
  },
  {
    id: 230,
    text: "How many inches of Mercury vacuum is required for HCFC-22, for appliances containing more than 200 lbs refrigerant, using equipment manufactured after 11/15/1993?",
    options: ["4", "6", "10", "None of the above"],
    correctAnswer: 2,
    explanation:
      "EPA standards require recovery to 10 inches of mercury for large HCFC-22 systems using post-1993 recovery equipment.",
    category: "TYPE 2",
  },
  {
    id: 231,
    text: "How many inches of Mercury vacuum is required for HCFC-22, for appliances containing more than 200 lbs refrigerant, using equipment before 11/15/1993?",
    options: ["4", "6", "10", "None of the above"],
    correctAnswer: 0,
    explanation:
      "Older recovery equipment manufactured before November 15, 1993 is only required to achieve 4 inches of mercury vacuum.",
    category: "TYPE 2",
  },

  {
    id: 232,
    text: "Technicians who maintain or service low-pressure appliances must hold ______ certification.",
    options: [
      "Type I only",
      "Type II only",
      "Type III or Universal",
      "Any EPA certification",
    ],
    correctAnswer: 2,
    explanation:
      "Low-pressure appliances require technicians certified at the Type III or Universal level.",
    category: "TYPE 3",
  },
  {
    id: 233,
    text: "True or False: The sale of CFC and HCFC refrigerants is restricted to certified technicians.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "Only certified technicians are allowed to purchase CFC and HCFC refrigerants.",
    category: "TYPE 3",
  },
  {
    id: 234,
    text: "Because low-pressure systems operate below atmospheric pressure, leaks cause ______ to enter the system.",
    options: ["Refrigerant", "Oil", "Air and moisture", "Liquid water only"],
    correctAnswer: 2,
    explanation:
      "Leaks draw air and moisture into systems operating under vacuum.",
    category: "TYPE 3",
  },
  {
    id: 235,
    text: "True or False: Controlled hot water is an efficient method for leak checking a charged low-pressure system.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "Controlled hot water safely raises system pressure for effective leak detection.",
    category: "TYPE 3",
  },
  {
    id: 236,
    text: "When pressurizing a low-pressure system for leak testing, pressure must not exceed ______.",
    options: ["5 psig", "8 psig", "10 psig", "15 psig"],
    correctAnswer: 2,
    explanation: "Pressures above 10 psig may cause the rupture disc to fail.",
    category: "TYPE 3",
  },
  {
    id: 237,
    text: "True or False: Systems with open drive compressors are prone to leaks at the shaft seal.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Open drive compressors commonly leak at the shaft seal.",
    category: "TYPE 3",
  },
  {
    id: 238,
    text: "A repair is classified as a major repair when it involves removal of the ______.",
    options: [
      "Sight glass",
      "Compressor",
      "Pressure relief valve",
      "Thermostat",
    ],
    correctAnswer: 1,
    explanation:
      "Removing the compressor qualifies the work as a major repair.",
    category: "TYPE 3",
  },
  {
    id: 239,
    text: "Comfort cooling appliances containing more than 50 lbs of refrigerant must be repaired when the annual leak rate exceeds ______.",
    options: ["10%", "15%", "25%", "35%"],
    correctAnswer: 1,
    explanation:
      "The allowable annual leak rate for comfort cooling systems is 15%.",
    category: "TYPE 3",
  },
  {
    id: 240,
    text: "True or False: Commercial and industrial process refrigeration systems have a higher allowable leak rate than comfort cooling systems.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "Process refrigeration systems are allowed a higher annual leak rate.",
    category: "TYPE 3",
  },
  {
    id: 241,
    text: "Refrigerant recovery from R-11 or R-123 systems begins with ______ removal.",
    options: ["Vapor", "Oil", "Liquid", "Nitrogen"],
    correctAnswer: 2,
    explanation: "Liquid refrigerant must be removed before vapor recovery.",
    category: "TYPE 3",
  },
  {
    id: 242,
    text: "True or False: Water must be circulated through tubes during recovery to prevent freezing.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Circulating water prevents ice formation inside the tubes.",
    category: "TYPE 3",
  },
  {
    id: 243,
    text: "During oil removal, the oil temperature should be raised to ______ to reduce refrigerant content.",
    options: ["100°F", "120°F", "130°F", "150°F"],
    correctAnswer: 2,
    explanation: "At 130°F, less refrigerant remains dissolved in the oil.",
    category: "TYPE 3",
  },
  {
    id: 244,
    text: "True or False: Initial charging of a low-pressure system should be done in the vapor phase.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "Vapor charging prevents water in the tubes from freezing under deep vacuum.",
    category: "TYPE 3",
  },
  {
    id: 245,
    text: "Recovery equipment manufactured after November 15, 1993 must be ______.",
    options: [
      "Manually operated",
      "Air cooled only",
      "Certified by an EPA-approved organization",
      "Designed only for HCFCs",
    ],
    correctAnswer: 2,
    explanation:
      "EPA certification ensures the equipment meets required standards.",
    category: "TYPE 3",
  },
  {
    id: 246,
    text: "True or False: Frequent purging can indicate that air is leaking into a low-pressure system.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Frequent purging suggests air infiltration caused by leaks.",
    category: "TYPE 3",
  },
  {
    id: 247,
    text: "Where do leaks commonly occur in low pressure systems?",
    options: ["Evaporator", "Condenser", "Purge unit", "Gaskets or fittings"],
    correctAnswer: 3,
    explanation:
      "In low pressure systems, leaks most commonly occur at gaskets or fittings because the system operates under a vacuum, allowing air to be drawn in through weak sealing points.",
    category: "TYPE 3",
  },
  {
    id: 248,
    text: "Where do leaks commonly occur in open-drive type compressor systems?",
    options: ["Evaporator", "Condenser", "Shaft seal", "Cooling tower"],
    correctAnswer: 2,
    explanation:
      "Open-drive compressor systems commonly leak at the shaft seal because it is a moving component that must maintain a seal around the rotating shaft.",
    category: "TYPE 3",
  },
  {
    id: 249,
    text: "Does refrigerant go out of the system in low pressure systems or does air and moisture go in?",
    options: [
      "Refrigerant escapes through low pressure leaks.",
      "Air and moisture enter the refrigeration system because it operates in a vacuum.",
      "Refrigerant leaks out through shaft seals and gaskets.",
      "Air and moisture enters through the purge unit.",
    ],
    correctAnswer: 1,
    explanation:
      "Low pressure refrigeration systems operate under a vacuum, so leaks cause air and moisture to be drawn into the system rather than refrigerant leaking out.",
    category: "TYPE 3",
  },

  {
    id: 250,
    text: "When should a low pressure system be leak checked according to ASHRAE guideline 3-1996?",
    options: [
      "There are specific recommendations.",
      "During pressure checks",
      "When the system rises from 1 mm Hg to a level above 2.5 mm Hg during vacuum testing",
      "Leak check every year",
    ],
    correctAnswer: 2,
    explanation:
      "ASHRAE Guideline 3-1996 specifies that a low pressure system should be leak checked if the vacuum level rises above acceptable limits during testing, indicating possible air infiltration.",
    category: "TYPE 3",
  },
  {
    id: 251,
    text: "What does a purge unit do and what is a high efficiency purge unit?",
    options: [
      "Removes the refrigerant from the system. High efficiency purge system will expel large quantities of refrigerant",
      "Removes the refrigerant from the system. High efficiency purge system will expel very little refrigerant",
      "Removes the oil from the system. High efficiency purge system will expel very little refrigerant",
      "Removes the air from the system. High efficiency purge system will expel very little refrigerant",
    ],
    correctAnswer: 3,
    explanation:
      "A purge unit removes non-condensable gases such as air from low pressure systems, and a high efficiency purge minimizes refrigerant loss while doing so.",
    category: "TYPE 3",
  },
  {
    id: 252,
    text: "How does a centrifugal compressor purge unit work?",
    options: [
      "Takes its suction from the top of the evaporator, removes the air from the system, and returns the refrigerant to the evaporator",
      "Takes its suction from the top of the chiller barrel, removes the air from the system, and returns the refrigerant to the evaporator",
      "Takes its suction from the top of the compressor suction, removes the air from the system, and returns the refrigerant to the evaporator",
      "Takes its suction from the top of the condenser, removes the air from the system, and returns the refrigerant to the evaporator",
    ],
    correctAnswer: 3,
    explanation:
      "The purge unit removes air from the condenser where non-condensables collect and routes recovered refrigerant back to the evaporator.",
    category: "TYPE 3",
  },
  {
    id: 253,
    text: "What are visible ways to check for leaks in a low pressure system?",
    options: [
      "Excessive running of a purge system",
      "Continuous excessive moisture in the purge unit could indicate a leak in the condenser or the chiller barrel",
      "High header pressure",
      "All the above",
    ],
    correctAnswer: 3,
    explanation:
      "All listed conditions are visual or operational indicators that suggest air or moisture may be entering the system due to leaks.",
    category: "TYPE 3",
  },
  {
    id: 254,
    text: "What needs to be done to leak check a low pressure system?",
    options: [
      "Increase the pressure in the system by the use of nitrogen",
      "Increase the pressure in the system by the use of oxygen",
      "Increase the pressure in the system by the use of controlled hot water or heater blankets",
      "Increase the pressure in the system by the use of boiler hot water",
    ],
    correctAnswer: 2,
    explanation:
      "Low pressure systems are safely pressurized for leak testing using controlled heat sources such as hot water or heater blankets, not gases.",
    category: "TYPE 3",
  },
  {
    id: 255,
    text: "What are ways you can increase the pressure in the system?",
    options: [
      "Controlled hot water",
      "Heater blankets",
      "A and B",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "Both controlled hot water and heater blankets safely raise system pressure by increasing refrigerant temperature.",
    category: "TYPE 3",
  },
  {
    id: 256,
    text: "What can happen if you exceed 10 psig while pressurizing the system?",
    options: [
      "Shaft seals will fail",
      "The rupture disc will fail",
      "Oxygen combined with oil in the system will explode",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "Exceeding 10 psig can cause the rupture disc to burst, which is designed to protect the system from overpressure.",
    category: "TYPE 3",
  },
  {
    id: 257,
    text: "How should a water box be leak tested?",
    options: [
      "Remove water, then place the leak detector probe in through the drain valve",
      "Remove water, pressurize and check with a gas detector",
      "Look for bubble in the water",
      "Test the water for traces of refrigerant",
    ],
    correctAnswer: 0,
    explanation:
      "Removing the water and inserting a leak detector probe allows accurate detection of refrigerant leaks inside the water box.",
    category: "TYPE 3",
  },
  {
    id: 258,
    text: "What equipment should be used to test a tube?",
    options: [
      "Remove tubes and place in a tube tester",
      "Inspect with a bore scope",
      "Hydrostatic tube test kit",
      "Use a flashlight to expose pinholes",
    ],
    correctAnswer: 2,
    explanation:
      "A hydrostatic tube test kit is designed to safely pressurize tubes with water to identify leaks without risking damage.",
    category: "TYPE 3",
  },
  {
    id: 259,
    text: "What are the leak repair requirements for comfort cooling appliances and commercial appliances containing 50 lbs. or more of refrigerant?",
    options: [
      "Repair if leak rate exceeds 15% in comfort cooling appliances",
      "Repair if leak rate exceeds 35% in all commercial and industrial process refrigeration",
      "A and B",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "EPA regulations require repairs when leak rates exceed 15% for comfort cooling systems and 35% for commercial and industrial refrigeration systems.",
    category: "TYPE 3",
  },
  {
    id: 260,
    text: "What are the typical pressure settings for rupture discs on low pressure systems and recovery equipment?",
    options: ["5 psig", "10 psia", "15 psig", "15 psia"],
    correctAnswer: 2,
    explanation:
      "Rupture discs on low pressure systems are typically rated at 15 psig to protect the system from over-pressurization.",
    category: "TYPE 3",
  },
  {
    id: 261,
    text: "How should a technician recover refrigerant from a system using R-11 or R-123?",
    options: [
      "Remove the liquid first",
      "Recover remaining vapor second",
      "A and B",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "Proper recovery procedure for low pressure refrigerants requires removing the liquid first, followed by recovery of the remaining vapor.",
    category: "TYPE 3",
  },
  {
    id: 262,
    text: "After removal of liquid, about how much vapor will remain in the system on a 350 ton R-11 chiller?",
    options: [
      "10 lbs of vapor after all the liquid has been removed",
      "20 lbs of vapor after all the liquid has been removed",
      "50 lbs of vapor after all the liquid has been removed",
      "100 lbs of vapor after all the liquid has been removed",
    ],
    correctAnswer: 3,
    explanation:
      "Even after liquid recovery, a significant amount of vapor refrigerant remains in large low pressure chillers, typically around 100 pounds for a 350 ton system.",
    category: "TYPE 3",
  },
  {
    id: 263,
    text: "How can you speed up the vapor recovery process?",
    options: [
      "Use two recovery machines",
      "A heater on the recovery vessel side will help to evacuate the vapor faster",
      "Heat the recovery tank",
      "Recover on a hot day",
    ],
    correctAnswer: 1,
    explanation:
      "Applying heat to the recovery vessel increases vaporization of refrigerant, allowing the recovery machine to remove vapor more efficiently.",
    category: "TYPE 3",
  },
  {
    id: 264,
    text: "In a system using a water cooled condenser, what components should be kept on?",
    options: [
      "The system water pumps",
      "The recovery compressor",
      "The recovery condenser water",
      "All the above",
    ],
    correctAnswer: 3,
    explanation:
      "All listed components must remain operational to ensure proper heat removal and efficient refrigerant recovery.",
    category: "TYPE 3",
  },
  {
    id: 265,
    text: "Where does the water typically come from in a water cooled condensing system?",
    options: ["Evaporator", "Chiller", "Deep well", "Municipal water supply"],
    correctAnswer: 3,
    explanation:
      "Most water cooled condenser systems use municipal water supplies or cooling tower water sourced from municipal systems.",
    category: "TYPE 3",
  },
  {
    id: 266,
    text: "What parts of the system should be drained of water before recovering refrigerant?",
    options: ["Evaporator", "Condenser", "Cooling tower", "A and B"],
    correctAnswer: 3,
    explanation:
      "Both the evaporator and condenser must be drained to prevent freezing or damage during refrigerant recovery.",
    category: "TYPE 3",
  },
  {
    id: 267,
    text: "How should a technician treat the oil before removal and why?",
    options: [
      "Test the oil with a refrigerant detection kit",
      "An oil temperature of 130°F should be attained when removing oil to boil off the refrigerant",
      "Remove the oil first",
      "Inject oxygen into the oil to drive out the refrigerant",
    ],
    correctAnswer: 1,
    explanation:
      "Heating the oil to approximately 130°F allows dissolved refrigerant to boil off safely before oil removal.",
    category: "TYPE 3",
  },
  {
    id: 268,
    text: "Why should you never charge liquid refrigerant into a deep vacuum?",
    options: [
      "The refrigerant will flash creating danger of explosion",
      "It's OK to inject liquid refrigerant",
      "Introducing liquid refrigerant into a deep vacuum will cause the refrigerant to boil and may lower the temperature enough to freeze the water in the tubes",
      "The liquid refrigerant will break the vacuum",
    ],
    correctAnswer: 2,
    explanation:
      "Charging liquid refrigerant into a deep vacuum causes rapid boiling, which can freeze water inside tubes and damage the system.",
    category: "TYPE 3",
  },
  {
    id: 269,
    text: "A rupture disk in a low-pressure system will open at which of the following psig?",
    options: ["20 psig", "25 psig", "10 psig", "15 psig"],
    correctAnswer: 3,
    explanation:
      "If pressure rises above safe limits, the rupture disk opens to release pressure and protect the system.",
    category: "TYPE 3",
  },
  {
    id: 270,
    text: "With Type III certification, what kind of equipment can be worked on?",
    options: [
      "Vacuum pressure",
      "Low-pressure",
      "High-pressure",
      "Medium-pressure",
    ],
    correctAnswer: 1,
    explanation:
      "Type III certification applies to technicians working on low-pressure appliances.",
    category: "TYPE 3",
  },
  {
    id: 271,
    text: "What is the machine room safety standard?",
    options: ["AHRI-740", "ASHRAE-15", "EPA-740", "ASHRAE-34"],
    correctAnswer: 1,
    explanation:
      "This standard governs safety requirements for refrigeration machinery rooms.",
    category: "TYPE 3",
  },
  {
    id: 272,
    text: "All refrigerated recovery cylinders are approved by this agency:",
    options: ["ARI", "EPA", "DOT", "OSHA"],
    correctAnswer: 2,
    explanation:
      "Recovery cylinders must meet transportation safety requirements.",
    category: "TYPE 3",
  },
  {
    id: 273,
    text: "When evacuating refrigerant, water must be circulated through the tubes to prevent:",
    options: [
      "Water leaks.",
      "Oil problems.",
      "Refrigerant Leaks.",
      "Water from freezing.",
    ],
    correctAnswer: 3,
    explanation:
      "Circulating water prevents freezing caused by low temperatures during evacuation.",
    category: "TYPE 3",
  },
  {
    id: 274,
    text: "Which of the following types of compressors are open-drive compressors?",
    options: ["Reciprocating", "Scroll", "Screw", "Centrifugal"],
    correctAnswer: 0,
    explanation:
      "Open-drive compressors typically have the motor located outside the compressor housing.",
    category: "TYPE 3",
  },
  {
    id: 275,
    text: "To repair an R-22 chiller, the technician must:",
    options: [
      "must have a Type III certification.",
      "must have a Type II certification.",
      "must have a Type I certification.",
      "does not need a certification.",
    ],
    correctAnswer: 1,
    explanation:
      "R-22 systems operate under high pressure and require the appropriate certification.",
    category: "TYPE 2",
  },
  {
    id: 276,
    text: "Convert 5 tons of energy into BTUs every hour.",
    options: ["70,000", "80,000", "60,000", "50,000"],
    correctAnswer: 2,
    explanation: "Each ton of refrigeration equals 12,000 BTUs per hour.",
    category: "CORE",
  },
  {
    id: 277,
    text: "What temperature must be attained while removing oil from a low-pressure system?",
    options: [
      "130 degrees F.",
      "50 degrees F.",
      "75 degrees F.",
      "100 degrees F.",
    ],
    correctAnswer: 0,
    explanation:
      "Higher temperatures reduce the amount of refrigerant trapped in the oil.",
    category: "TYPE 3",
  },
  {
    id: 278,
    text: "An electronic leak detector can detect leaks at what rate per year?",
    options: [".5 oz", "1 oz", ".20 oz", ".25 oz"],
    correctAnswer: 3,
    explanation:
      "Electronic leak detectors are capable of detecting very small annual leak rates.",
    category: "CORE",
  },
  {
    id: 279,
    text: "For recovery or recycling equipment used on low-pressure systems, the EPA required evacuation level is:",
    options: [
      "25 mm of Hg absolute.",
      "30 inches Hg absolute.",
      "20 inches Hg.",
      "15 inches Hg.",
    ],
    correctAnswer: 0,
    explanation:
      "Low-pressure systems require evacuation to a deep vacuum level.",
    category: "TYPE 3",
  },
  {
    id: 280,
    text: "What is the time period for repairing substantial leaks?",
    options: ["20 Days", "45 Days", "10 Days", "30 Days"],
    correctAnswer: 3,
    explanation:
      "Substantial leaks must be repaired within the allowed compliance timeframe.",
    category: "CORE",
  },
  {
    id: 281,
    text: "When charging a low-pressure system, introduce refrigerant as a vapor to raise the system's saturation temperature to a minimum of;",
    options: ["36 degrees", "70 degrees", "0 degrees", "40 degrees"],
    correctAnswer: 0,
    explanation:
      "A minimum saturation temperature is required before adding liquid refrigerant.",
    category: "TYPE 3",
  },
  {
    id: 282,
    text: "What percentage or more of the normal charge for industrial and commercial refrigeration systems is a substantial leak?",
    options: ["30%", "35%", "20%", "25%"],
    correctAnswer: 1,
    explanation:
      "Leaks at or above this percentage are classified as substantial.",
    category: "CORE",
  },
  {
    id: 283,
    text: "Which of the following best defines the R-123 system's refrigerant recovery process?",
    options: [
      "Run the compressor and only recover refrigerant in the vapor state.",
      "Start with vapor removal and then switch over to liquid recovery.",
      "Start with liquid removal and then switch over to vapor recovery.",
      "Run the compressor and only recover refrigerant in the liquid state.",
    ],
    correctAnswer: 2,
    explanation:
      "Recovery begins with liquid removal to speed the process, followed by vapor recovery.",
    category: "TYPE 3",
  },
  {
    id: 284,
    text: "Which safety classification applies to many next-generation replacement refrigerants for R-410A used in new high-pressure comfort cooling systems?",
    options: ["A3", "B1", "A2L", "A1"],
    correctAnswer: 2,
    explanation:
      "Many new R-410A replacements are classified as A2L, meaning low toxicity and mildly flammable.",
    category: "TYPE 2",
  },
  {
    id: 285,
    text: "True or False: After the 2020 EPA rule change, high-pressure systems using HFC refrigerants are still federally required to repair leaks above the annual threshold.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "Leak repair requirements were removed for HFC-only systems under Section 608 in 2020.",
    category: "TYPE 2",
  },
  {
    id: 286,
    text: "Which refrigerant characteristic is the PRIMARY reason for the industry transition away from R-410A in high-pressure systems?",
    options: [
      "High operating pressure",
      "High ozone depletion potential",
      "High global warming potential",
      "Low cooling capacity",
    ],
    correctAnswer: 2,
    explanation:
      "R-410A has zero ODP but a high GWP, which is being phased down under federal law.",
    category: "TYPE 2",
  },
  {
    id: 287,
    text: "Complete the sentence: When servicing a high-pressure system containing an A2L refrigerant, technicians must ensure adequate ______ to reduce ignition risk.",
    options: ["Lubrication", "Ventilation", "Subcooling", "Compression"],
    correctAnswer: 1,
    explanation:
      "Proper ventilation reduces the risk of flammable refrigerant accumulation.",
    category: "TYPE 2",
  },
  {
    id: 288,
    text: "Which of the following refrigerants is an A2L commonly used in new high-pressure air conditioning equipment?",
    options: ["R-22", "R-410A", "R-454B", "R-134a"],
    correctAnswer: 2,
    explanation:
      "R-454B is an A2L refrigerant developed as a lower-GWP replacement for R-410A.",
    category: "TYPE 2",
  },
  {
    id: 289,
    text: "True or False: EPA Section 608 requires a separate federal certification to service A2L refrigerants in high-pressure systems.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "No additional federal certification is required beyond EPA 608.",
    category: "TYPE 2",
  },
  {
    id: 290,
    text: "Which practice is recommended when recovering an A2L refrigerant from a high-pressure system?",
    options: [
      "Recover without ventilation",
      "Use spark-producing tools",
      "Ensure ignition sources are eliminated",
      "Increase system temperature",
    ],
    correctAnswer: 2,
    explanation:
      "A2L refrigerants are mildly flammable and require ignition control.",
    category: "TYPE 2",
  },
  {
    id: 291,
    text: "Which oil type is typically used with HFO-based high-pressure refrigerants?",
    options: [
      "Mineral oil",
      "Alkylbenzene",
      "Polyolester (POE)",
      "Silicone oil",
    ],
    correctAnswer: 2,
    explanation:
      "HFO and HFC refrigerants are generally compatible with POE oil.",
    category: "TYPE 2",
  },
  { 
    id: 292,
    text: "True or False: Venting A2L refrigerants from high-pressure systems is allowed because they have low GWP.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "Venting is prohibited unless the refrigerant is specifically exempt.",
    category: "TYPE 2",
  },
  {
    id: 293,
    text: "Which factor MOST affects recovery procedures for high-pressure A2L refrigerants compared to A1 refrigerants?",
    options: [
      "System size",
      "Oil viscosity",
      "Flammability",
      "Operating temperature",
    ],
    correctAnswer: 2,
    explanation:
      "Mild flammability requires additional safety precautions during recovery.",
    category: "TYPE 2",
  },
  {
    id: 294,
    text: "Which refrigerant is commonly used in low-pressure centrifugal chillers as a replacement with low GWP?",
    options: ["R-410A", "R-404A", "R-1233zd(E)", "R-32"],
    correctAnswer: 2,
    explanation:
      "R-1233zd(E) is a low-pressure, low-GWP refrigerant used in chillers.",
    category: "TYPE 3",
  },
  {
    id: 295,
    text: "True or False: Low-pressure chillers using HFO refrigerants still require refrigerant recovery before opening the system.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "Recovery is required before opening any non-exempt refrigerant system.",
    category: "TYPE 3",
  },
  {
    id: 296,
    text: "Which property of low-pressure refrigerants increases the risk of air infiltration?",
    options: [
      "High discharge temperature",
      "Operating below atmospheric pressure",
      "High flammability",
      "High compression ratio",
    ],
    correctAnswer: 1,
    explanation:
      "Low-pressure systems often operate below atmospheric pressure.",
    category: "TYPE 3",
  },
  {
    id: 297,
    text: "Complete the sentence: In low-pressure chillers, moisture contamination primarily leads to the formation of ______.",
    options: ["Carbon dioxide", "Acids", "Oil foam", "Non-condensables"],
    correctAnswer: 1,
    explanation: "Moisture reacts with refrigerants to form acids.",
    category: "TYPE 3",
  },
  {
    id: 298,
    text: "Which refrigerant safety classification is common for many low-pressure chiller refrigerants?",
    options: ["A3", "A2L", "A1", "B2"],
    correctAnswer: 2,
    explanation:
      "Many low-pressure refrigerants are non-flammable and classified as A1.",
    category: "TYPE 3",
  },
  {
    id: 299,
    text: "True or False: The AIM Act has increased the use of low-GWP refrigerants in new low-pressure chillers.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "The AIM Act drives adoption of lower-GWP alternatives.",
    category: "TYPE 3",
  },
  {
    id: 300,
    text: "Which device is commonly used to remove air and moisture from low-pressure chillers during operation?",
    options: [
      "Thermostatic expansion valve",
      "Evacuation pump",
      "Purge unit",
      "Receiver",
    ],
    correctAnswer: 2,
    explanation: "Purge units remove non-condensables and moisture.",
    category: "TYPE 3",
  },
  {
    id: 301,
    text: "Which condition MOST indicates a leak in a low-pressure chiller system?",
    options: [
      "High condenser pressure",
      "Low oil level",
      "Presence of air or moisture",
      "Reduced superheat",
    ],
    correctAnswer: 2,
    explanation: "Leaks allow air and moisture to enter low-pressure systems.",
    category: "TYPE 3",
  },
  {
    id: 302,
    text: "True or False: Venting refrigerants from low-pressure chillers is allowed if the refrigerant has zero ODP.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "Zero ODP does not mean venting is permitted.",
    category: "TYPE 3",
  },
  {
    id: 303,
    text: "Which environmental factor is MOST improved by replacing R-11 or R-123 with modern HFO refrigerants in chillers?",
    options: [
      "Energy efficiency",
      "System pressure",
      "Ozone depletion potential",
      "Global warming potential",
    ],
    correctAnswer: 3,
    explanation: "Modern HFO refrigerants significantly reduce GWP.",
    category: "TYPE 3",
  },
];

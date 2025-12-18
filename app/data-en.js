// Questions can optionally include an "image" field with a path relative to the public folder
// Example: "image": "/quiz-images/pregunta-0.jpg"
// If the image field is present, it will be displayed above the question text
export const questions = [
  
    {
      "id": 0,
      "text": "Which layer of the atmosphere contains about 90% of Earth's ozone that helps protect against harmful UV-B radiation?",
      "options": [
        "Thermosphere",
        "Stratosphere",
        "Mesosphere",
        "Troposphere"
      ],
      "correctAnswer": 1,
      "explanation": "Most of the planet's protective ozone is located in the stratosphere, above the troposphere.",
      "category": "CORE"
    },
    {
      "id": 1,
      "text": "According to the Rowland–Molina theory, approximately how many ozone molecules can a single chlorine atom destroy in the stratosphere?",
      "options": [
        "100",
        "10,000",
        "100,000",
        "1,000"
      ],
      "correctAnswer": 2,
      "explanation": "A single chlorine atom can catalytically destroy ozone repeatedly, with an estimate of about 100,000 ozone molecules per chlorine atom.",
      "category": "CORE"
    },
    {
      "id": 2,
      "text": "Which element is described as even more damaging to the stratospheric ozone layer than chlorine?",
      "options": [
        "Oxygen",
        "Nitrogen",
        "Hydrogen",
        "Bromine"
      ],
      "correctAnswer": 3,
      "explanation": "Bromine-containing refrigerants are noted as especially harmful to stratospheric ozone, even more so than chlorine.",
      "category": "CORE"
    },
    {
      "id": 3,
      "text": "Which 1987 international treaty addressed ozone-depleting substances and called for phasing out certain CFCs, HCFCs, and halons?",
      "options": [
        "The Kyoto Protocol",
        "The Clean Air Act Amendments of 1990",
        "The Paris Agreement",
        "The Montreal Protocol"
      ],
      "correctAnswer": 3,
      "explanation": "The Montreal Protocol (signed in 1987) is an international treaty focused on ozone-depleting substances and alternatives.",
      "category": "CORE"
    },
    {
      "id": 4,
      "text": "Which statement best describes what happened in 2010 regarding HCFC-22 and HCFC-142b in the U.S.?",
      "options": [
        "All HCFC use was allowed in new equipment as long as leak testing was performed.",
        "Only CFCs were restricted; HCFC-22 and HCFC-142b were unrestricted.",
        "HCFC-22 could only be used in newly manufactured appliances, not for service.",
        "New systems using HCFC-22 or HCFC-142b (or blends containing them) were banned from production, sale, or importation."
      ],
      "correctAnswer": 3,
      "explanation": "Rules implemented in 2010 restricted new equipment using HCFC-22/HCFC-142b and limited these refrigerants to servicing existing equipment.",
      "category": "CORE"
    },
    {
      "id": 5,
      "text": "What did the Pre-Charged Appliances Rule ban for products manufactured on or after 2010?",
      "options": [
        "The use of HFC-410A in residential air conditioners",
        "The recovery of refrigerants during service",
        "The sale or distribution of pre-charged AC/R products and components containing HCFC-22 or HCFC-142b (or blends containing them)",
        "The sale of any refrigerant with a GWP below 150"
      ],
      "correctAnswer": 2,
      "explanation": "The rule targeted pre-charged products/components containing HCFC-22 or HCFC-142b (or blends) if manufactured on or after 2010.",
      "category": "CORE"
    },
    {
      "id": 6,
      "text": "What did the Allocation Rule (along with existing EPA requirements) prohibit regarding newly manufactured appliances?",
      "options": [
        "Charging newly manufactured appliances with virgin HCFC-22 or HCFC-142b (or blends containing them)",
        "Selling any refrigerant in disposable cylinders",
        "Using reclaimed refrigerant in existing systems",
        "Retrofit of any equipment to lower-GWP blends"
      ],
      "correctAnswer": 0,
      "explanation": "It prohibited charging newly manufactured appliances with virgin HCFC-22/HCFC-142b, including the practice of charging a dry-charged system with these refrigerants.",
      "category": "CORE"
    },
    {
      "id": 7,
      "text": "Beginning on January 1, 2020, what major restriction applied to HCFC refrigerants?",
      "options": [
        "Production or import of any HCFC refrigerant was banned; only recovered or reclaimed HCFCs could be used in existing equipment.",
        "All HCFCs became legal for new equipment again.",
        "Only HFCs were banned from production or import.",
        "HCFCs could be vented because their ODP is low."
      ],
      "correctAnswer": 0,
      "explanation": "After January 1, 2020, HCFC production/import was banned, and existing equipment could only use recovered/reclaimed HCFCs.",
      "category": "CORE"
    },
    {
      "id": 8,
      "text": "Which combination best matches the recovery requirement described for technicians in the United States?",
      "options": [
        "Recover only refrigerants with ODP = 0 and GWP < 1.",
        "Recover only hydrocarbon refrigerants because they are flammable.",
        "Recover refrigerants with ODP > 0 and GWP > 1 (greater than carbon dioxide).",
        "Recover only refrigerants with ODP > 1 regardless of GWP."
      ],
      "correctAnswer": 2,
      "explanation": "The requirement described applies to refrigerants with ozone depletion potential above zero and global warming potential higher than carbon dioxide (greater than 1).",
      "category": "CORE"
    },
    {
      "id": 9,
      "text": "In ASHRAE safety terminology, what does an A2L classification indicate for certain refrigerants?",
      "options": [
        "Nonflammable and highly toxic",
        "High flammability equivalent to A3 hydrocarbons",
        "Lower flammability with a maximum burning velocity under 4 inches per second",
        "High toxicity and high flammability"
      ],
      "correctAnswer": 2,
      "explanation": "A2L indicates lower flammability (even lower than typical A2) and is defined here by a maximum burning velocity below 4 inches per second.",
      "category": "CORE"
    },
    {
      "id": 10,
      "text": "What did the 1990 Clean Air Act amendments emphasize in addition to expanding EPA authority?",
      "options": [
        "Eliminating all high-GWP refrigerants immediately",
        "Removing EPA authority over enforcement",
        "More cost-effective approaches to reduce air pollution",
        "Allowing unrestricted venting of refrigerants"
      ],
      "correctAnswer": 2,
      "explanation": "The 1990 amendments expanded EPA authority and increased emphasis on cost-effective approaches to reduce emissions.",
      "category": "CORE"
    },
    {
      "id": 11,
      "text": "Under the Clean Air Act program described, what was EPA mandated to eliminate?",
      "options": [
        "Ozone-depleting refrigerants",
        "All refrigerants with GWP above 150",
        "Only hydrocarbon refrigerants",
        "All refrigerants, including exempt gases like CO2"
      ],
      "correctAnswer": 0,
      "explanation": "The mandate focused on eliminating ozone-depleting refrigerants, not on requiring elimination of high-GWP refrigerants.",
      "category": "CORE"
    },
  
    {
      "id": 12,
      "text": "Which substances were added to the list of chemicals controlled under the Montreal Protocol at the Fourth Meeting in 1992 (as described)?",
      "options": [
        "Carbon dioxide and nitrogen",
        "HFOs and hydrocarbons",
        "HCFCs and methyl bromide",
        "HFCs and ammonia"
      ],
      "correctAnswer": 2,
      "explanation": "The 1992 actions included adding HCFCs and methyl bromide to the controlled list and accelerating phase-out schedules for several ODSs.",
      "category": "CORE"
    },
    {
      "id": 13,
      "text": "Which statement best reflects what Section 608 regulations establish under the Clean Air Act?",
      "options": [
        "A program limited only to motor vehicle air conditioning (MVAC) systems",
        "A recycling program for ozone-depleting refrigerants recovered during servicing and disposal",
        "A program requiring venting during disposal to prevent cylinder explosions",
        "A program allowing only manufacturers to recover refrigerant"
      ],
      "correctAnswer": 1,
      "explanation": "Section 608 regulations establish a recycling program for ozone-depleting refrigerants recovered during servicing and disposal of AC/R equipment.",
      "category": "CORE"
    },
    {
      "id": 14,
      "text": "Which of the following actions is illegal to vent refrigerant from, in addition to venting from an AC/R system itself?",
      "options": [
        "A vacuum pump used only for evacuation",
        "A recovery, recycling, or reclamation machine",
        "A water hose used to flush a condenser",
        "A nitrogen cylinder used for pressure testing"
      ],
      "correctAnswer": 1,
      "explanation": "Venting is illegal not only from AC/R systems but also from recovery/recycling/reclamation machines, charging cylinders, and refrigerant storage or recovery cylinders.",
      "category": "CORE"
    },
    {
      "id": 15,
      "text": "When is an EPA Section 608 technician certification NOT required (based on the described rule)?",
      "options": [
        "When work does not open the refrigerant circuit and does not involve releasing refrigerant",
        "When purchasing refrigerant for stationary systems",
        "When using a recovery machine on any appliance",
        "When recovering refrigerant prior to disposal"
      ],
      "correctAnswer": 0,
      "explanation": "Certification is not required if the technician is not opening the refrigerant circuit or servicing components that would result in refrigerant release (e.g., replacing a capacitor or rewiring an external circuit).",
      "category": "CORE"
    },
    {
      "id": 16,
      "text": "Which statement correctly distinguishes Section 608 and Section 609 requirements?",
      "options": [
        "Section 609 applies only to chillers and industrial process refrigeration.",
        "Section 608 applies only to household refrigerators and nothing else.",
        "MVAC service technicians are governed under Section 609, while stationary AC/R work is governed under Section 608.",
        "All technicians must hold Section 609 certification for any refrigerant purchase."
      ],
      "correctAnswer": 2,
      "explanation": "Section 608 covers stationary AC/R service and disposal requirements, while MVAC technicians must obtain Section 609 MVAC certification.",
      "category": "CORE"
    },
    {
      "id": 17,
      "text": "Under Section 608 recordkeeping guidance provided, which item is NOT required to be recorded when recovering refrigerant?",
      "options": [
        "The serial number or model number of the unit",
        "The equipment location",
        "The amount of refrigerant added or removed",
        "The date of service"
      ],
      "correctAnswer": 0,
      "explanation": "Required records include items like date, type of service, location, owner, normal charge, and amount added/removed; the serial or model number is not required.",
      "category": "CORE"
    },
    {
      "id": 18,
      "text": "What is the maximum civil penalty stated for a Clean Air Act violation, including improper recordkeeping?",
      "options": [
        "Up to $44,539 per year per facility",
        "Up to $1,000 per day per violation",
        "Up to $10,000 per violation total",
        "Up to $44,539 per day per violation"
      ],
      "correctAnswer": 3,
      "explanation": "The text states that violations, including improper recordkeeping, can be penalized up to $44,539 per day per violation.",
      "category": "CORE"
    },
    {
      "id": 19,
      "text": "Which refrigerants are identified as exempt from the recovery requirement when an appliance is opened for service, repair, or disposal?",
      "options": [
        "Any refrigerant with a GWP below 150",
        "Carbon dioxide and certain hydrocarbons such as R-600, R-600a, and R-290",
        "All HFC refrigerants because they have zero ODP",
        "All refrigerants used in stationary equipment"
      ],
      "correctAnswer": 1,
      "explanation": "Most refrigerants must be recovered, but the text lists exemptions including carbon dioxide and certain hydrocarbons (e.g., n-butane R-600, isobutane R-600a, and propane R-290).",
      "category": "CORE"
    },
    {
      "id": 20,
      "text": "Which statement correctly defines temperature glide for a refrigerant blend?",
      "options": [
        "The temperature change caused only by superheat in the evaporator",
        "The difference between suction and discharge pressure during operation",
        "The difference between the dew point temperature and the bubble point temperature at a given pressure",
        "The difference between condenser outlet temperature and ambient temperature"
      ],
      "correctAnswer": 2,
      "explanation": "Temperature glide is defined as the dew point temperature minus the bubble point temperature for a blend at the same pressure.",
      "category": "CORE"
    },
    {
      "id": 21,
      "text": "At a constant pressure, which pairing correctly matches how dew and bubble points relate to evaporation and condensation for a blend?",
      "options": [
        "Both evaporation and condensation start at the bubble point for blends",
        "Evaporation starts at the bubble point and ends at the dew point; condensation starts at the dew point and ends at the bubble point",
        "Evaporation starts at the dew point and ends at the bubble point; condensation starts at the bubble point and ends at the dew point",
        "Both evaporation and condensation start at the dew point for blends"
      ],
      "correctAnswer": 1,
      "explanation": "For blends, evaporation begins at the bubble point and finishes at the dew point; during condensation the first vapor condenses at the dew point and the last condenses at the bubble point.",
      "category": "CORE"
    },
    {
      "id": 22,
      "text": "A technician is servicing a system containing a 400-series refrigerant blend that has leaked. What is the correct service action regarding the remaining refrigerant charge?",
      "options": [
        "Recover all refrigerant and send it for reprocessing/reclamation; after repairs, recharge using liquid only",
        "Vent the remaining refrigerant because blends are exempt from recovery requirements",
        "Top off the charge with liquid without recovering the remaining refrigerant",
        "Top off the charge with vapor to restore composition quickly"
      ],
      "correctAnswer": 0,
      "explanation": "Non-azeotropic (400-series) blends fractionate when leaking, so topping off is not acceptable; the proper action is full recovery, reprocessing, and liquid-only recharge after repairs.",
      "category": "CORE"
    },
    {
      "id": 23,
      "text": "Why must 400-series non-azeotropic refrigerant blends be charged as a liquid rather than as a vapor?",
      "options": [
        "Vapor charging eliminates temperature glide and prevents composition shift",
        "Liquid charging is required only because of EPA SNAP flammability rules",
        "Vapor charging causes fractionation because the most volatile component enters the system in a higher proportion",
        "Liquid charging increases temperature glide to improve capacity"
      ],
      "correctAnswer": 2,
      "explanation": "Vapor charging skews composition toward the highest vapor-pressure component, changing the blend properties; liquid charging preserves the intended blend ratio.",
      "category": "CORE"
    },
    {
      "id": 24,
      "text": "Which statement is most accurate about azeotropic (500-series) refrigerant blends during servicing?",
      "options": [
        "They are defined as any blend with a GWP below 150",
        "They behave like a single-component refrigerant with zero temperature glide and can be charged as liquid or vapor and topped off after leaks",
        "They always have large temperature glide and must be vapor-charged only",
        "They fractionate severely during leaks, so topping off is prohibited"
      ],
      "correctAnswer": 1,
      "explanation": "Azeotropic (500-series) blends act like a pure refrigerant over their range, have zero glide, and can be treated like a single refrigerant for charging and topping off.",
      "category": "CORE"
    },
    {
      "id": 25,
      "text": "A system uses R-410A. Which statement best reflects the recommended handling, given its near-azeotropic behavior?",
      "options": [
        "It must never be topped off because it is a 400-series blend",
        "It has a large temperature glide that is easily measurable in the field",
        "It can be treated like an azeotrope and topped off, but manufacturers generally still recommend liquid charging",
        "It must be vapor-charged to prevent composition change"
      ],
      "correctAnswer": 2,
      "explanation": "R-410A has a very small glide, so it can be treated like an azeotrope and topped off; however, liquid charging is commonly recommended.",
      "category": "CORE"
    },
    {
      "id": 26,
      "text": "Which statement best describes what EPA SNAP approval means for a refrigerant substitute?",
      "options": [
        "It only evaluates cooling performance and efficiency, not safety factors",
        "It reduces overall risk to human health and the environment, but does not guarantee suitability for a specific retrofit application",
        "It guarantees the refrigerant is a true drop-in replacement requiring no system changes",
        "It means the refrigerant has zero global warming potential and zero flammability"
      ],
      "correctAnswer": 1,
      "explanation": "SNAP reviews substitutes across factors such as ODP, GWP, toxicity, flammability, and exposure potential; approval does not guarantee retrofit suitability.",
      "category": "CORE"
    },
    {
      "id": 27,
      "text": "Which statement best matches EPA’s position on 'drop-in' refrigerant replacements?",
      "options": [
        "Drop-in replacements exist only for CFC-to-HCFC conversions",
        "There are no true drop-in service replacements; every replacement requires some system change, even if minor",
        "Any near-azeotropic blend is considered a drop-in for the refrigerant it replaces",
        "A SNAP-approved refrigerant is automatically a drop-in replacement"
      ],
      "correctAnswer": 1,
      "explanation": "EPA states that every replacement refrigerant requires some change to the system, so 'drop-in' claims are not literally accurate.",
      "category": "CORE"
    },
    {
      "id": 28,
      "text": "During a retrofit to a refrigerant that uses POE (ester) oil, what must be done if the system previously used mineral oil?",
      "options": [
        "Switch to PAG oil because it is compatible with mineral oil",
        "Remove the mineral oil and flush the system using an approved non-aqueous flushing solution before switching to POE oil",
        "Leave the mineral oil in place because POE and mineral oil are fully compatible",
        "Add POE oil on top of the mineral oil to improve miscibility"
      ],
      "correctAnswer": 1,
      "explanation": "POE oil is not compatible with mineral oil; the mineral oil must be removed and the system flushed using an approved non-aqueous flushing method before the retrofit.",
      "category": "CORE"
    },
    {
      "id": 29,
      "text": "Which statement correctly compares moisture absorption characteristics of common refrigeration oils and the recommended service implication?",
      "options": [
        "Synthetic oils are extremely hygroscopic and can hold far more water than mineral oil, so deep evacuation and triple evacuation methods become especially important",
        "Because PVE and PAG oils resist moisture absorption, they eliminate the need for deep evacuation",
        "POE oil has a lower water saturation limit than mineral oil, so moisture control is less critical",
        "Mineral oil holds far more water than synthetic oils, so evacuation requirements are relaxed with synthetics"
      ],
      "correctAnswer": 0,
      "explanation": "Synthetic oils (POE, PVE, PAG) readily absorb moisture and can hold much higher water concentrations than mineral oil, increasing the need for strict moisture control and rigorous evacuation procedures.",
      "category": "CORE"
    },
    {
      "id": 30,
      "text": "In HVAC/R terminology, what specifically makes a vapor-compression system a 'heat pump' (as commonly used in the industry)?",
      "options": [
        "It uses an absorption cycle instead of a compressor",
        "It uses any compressor to move heat from cold to hot",
        "It rejects heat to a lower-temperature location",
        "It uses a reversing valve to provide cooling in hot weather and heating in cold weather"
      ],
      "correctAnswer": 3,
      "explanation": "While all refrigeration moves heat from cold to hot, the HVAC/R industry typically calls it a heat pump when the vapor-compression system includes a reversing valve to switch between cooling and heating.",
      "category": "CORE"
    },
  
    {
      "id": 31,
      "text": "Which component primarily drops refrigerant pressure to lower its saturation temperature so it can boil in the evaporator?",
      "options": [
        "Expansion valve (throttling device)",
        "Compressor",
        "Filter drier",
        "Condenser"
      ],
      "correctAnswer": 0,
      "explanation": "The expansion valve (throttling device) creates a pressure drop that lowers saturation temperature, enabling evaporation in the evaporator and heat absorption.",
      "category": "CORE"
    },
    {
      "id": 32,
      "text": "Why is the filter drier ideally located just upstream of the throttling device?",
      "options": [
        "It removes contaminants and water to prevent clogging and freeze-up at the expansion device",
        "It increases superheat to protect the compressor",
        "It reduces compressor discharge temperature by cooling the vapor",
        "It raises pressure to ensure stable condenser operation"
      ],
      "correctAnswer": 0,
      "explanation": "The throttling device has the smallest passages and causes a sharp temperature drop; contaminants can plug it and moisture can freeze there, so cleaning and drying upstream is critical.",
      "category": "CORE"
    },
    {
      "id": 33,
      "text": "A TXV or EXV is used primarily to control which condition at the evaporator outlet?",
      "options": [
        "Subcooling",
        "Compression ratio",
        "Condenser approach temperature",
        "Superheat"
      ],
      "correctAnswer": 3,
      "explanation": "Actively controlled metering devices such as TXVs and EXVs are used to maintain the refrigerant superheat at the evaporator exit.",
      "category": "CORE"
    },
    {
      "id": 34,
      "text": "Typical condenser outlet refrigerant condition in an operating system is best described as:",
      "options": [
        "High-pressure vapor, slightly superheated",
        "Low-pressure vapor, highly superheated",
        "Low-pressure two-phase mixture at saturation",
        "High-pressure liquid, slightly subcooled (about 5–15°F)"
      ],
      "correctAnswer": 3,
      "explanation": "Refrigerant leaves the condenser as a high-pressure liquid and is typically subcooled by about 5 to 15°F below saturation temperature.",
      "category": "CORE"
    },
    {
      "id": 35,
      "text": "What is the main purpose of ensuring refrigerant entering the compressor is superheated vapor?",
      "options": [
        "To maximize condenser subcooling",
        "To prevent liquid refrigerant from entering the compressor, which can cause damage",
        "To reduce the need for a filter drier",
        "To increase temperature glide in the evaporator"
      ],
      "correctAnswer": 1,
      "explanation": "Compressors cannot compress liquid; superheat at the compressor inlet helps ensure no liquid refrigerant is present in the suction stream.",
      "category": "CORE"
    },
    {
      "id": 36,
      "text": "When a refrigeration system shuts down, refrigerant often migrates to the coldest location. Why is the compressor crankcase commonly at risk?",
      "options": [
        "The evaporator always becomes the coldest point and freezes the oil",
        "The condenser becomes the coldest point and traps refrigerant permanently",
        "The reversing valve forces refrigerant into the crankcase during shutdown",
        "Refrigerant can migrate into the oil sump, dilute the oil, and then boil out at startup causing foaming and reduced lubrication"
      ],
      "correctAnswer": 3,
      "explanation": "After shutdown, refrigerant can dissolve into crankcase oil, reducing lubrication; at startup it can rapidly boil out, foam the oil, and contribute to premature compressor wear or failure.",
      "category": "CORE"
    },
    {
      "id": 37,
      "text": "Why should recovery machines NOT use hermetic compressors?",
      "options": [
        "Hermetic compressors can only be used with CO2 refrigerant",
        "A hermetic compressor relies on refrigerant flow for motor cooling; operating under vacuum can overheat and burn out the motor",
        "Hermetic compressors require a reversing valve to operate",
        "Hermetic compressors cannot compress vapor refrigerant"
      ],
      "correctAnswer": 1,
      "explanation": "Hermetic motors are cooled by refrigerant flow; under deep vacuum there is insufficient flow, which can quickly overheat windings and cause burnout.",
      "category": "CORE"
    },
    {
      "id": 38,
      "text": "When using R-410A, which minimum gauge set rating is specified for safe service work?",
      "options": [
        "At least 340 psig with a 1,000 psig burst pressure",
        "At least 800 psig with a 4,000 psig burst pressure on the manifold and hoses",
        "At least 250 psig with a 750 psig burst pressure",
        "At least 500 psig with a 2,000 psig burst pressure"
      ],
      "correctAnswer": 1,
      "explanation": "Because of R-410A’s higher operating pressures, the manifold and hoses must be rated for at least 800 psig and have a 4,000 psig burst pressure.",
      "category": "CORE"
    },
    {
      "id": 39,
      "text": "A technician is disconnecting a low-loss fitting after liquid charging and wants to avoid trapping liquid refrigerant in a sealed hose. What is the correct sequence?",
      "options": [
        "Disconnect the low-loss fitting first, then close the manifold valve",
        "Close the high-side valve only, then disconnect the low-loss fitting",
        "Close the manifold valve to isolate the line so liquid is drawn into the system, then disconnect the low-loss fitting",
        "Open both manifold valves fully, then disconnect the low-loss fitting"
      ],
      "correctAnswer": 2,
      "explanation": "Closing the manifold valve first allows trapped liquid to be drawn into the system; disconnecting first can trap liquid in the hose, which can expand with warming and burst the hose.",
      "category": "CORE",
      "image": "/quiz-images/39.png"
    },
    {
      "id": 40,
      "text": "When refrigerant is removed from a system, which option is NOT one of the four permitted end uses described?",
      "options": [
        "Recycle and reuse",
        "Recover and store permanently without labeling",
        "Recover, recycle, reclaim, or destroy at an EPA-approved facility",
        "Reclaim to new purity levels"
      ],
      "correctAnswer": 1,
      "explanation": "The allowed outcomes are recover/reuse, recycle/reuse, reclaim to new purity, or send to an EPA-approved destruction facility; storage without proper handling (including labeling rules later in the text) is not an end-use option.",
      "category": "CORE"
    },
    {
      "id": 41,
      "text": "Which statement best describes 'recovery' of refrigerant?",
      "options": [
        "Removing refrigerant and storing it without necessarily testing or processing it",
        "Blending refrigerants to restore original pressure-temperature behavior",
        "Chemically analyzing refrigerant to certify it meets AHRI 700 purity",
        "Cleaning refrigerant through oil separation and filter driers to reduce moisture and acidity"
      ],
      "correctAnswer": 0,
      "explanation": "Recovery means removing refrigerant in any condition and storing it in a container (or sometimes inside the recovery unit) without required testing or processing.",
      "category": "CORE"
    },
    {
      "id": 42,
      "text": "Recovered refrigerant may be returned without restriction to:",
      "options": [
        "Only the same system it came from and never any other",
        "Any system owned by a different customer if it is not sold",
        "The same system or another system owned by the same person",
        "Any system as long as the refrigerant is filtered once"
      ],
      "correctAnswer": 2,
      "explanation": "Recovered refrigerant can be used in the same system or other systems owned by the same person, but ownership transfer is restricted unless the refrigerant is reclaimed.",
      "category": "CORE"
    },
    {
      "id": 43,
      "text": "If recovered refrigerant is being sent for disposal or to a reclamation facility, what type of container is required?",
      "options": [
        "Any disposable refrigerant cylinder",
        "A DOT-approved recovery cylinder",
        "A vacuum-rated glass container",
        "A non-pressurized plastic container"
      ],
      "correctAnswer": 1,
      "explanation": "For disposal or shipment to reclamation, recovered refrigerant must be stored in a DOT-approved recovery cylinder.",
      "category": "CORE"
    },
    {
      "id": 44,
      "text": "A DOT-approved recovery cylinder is commonly identified by which color scheme?",
      "options": [
        "Gray body with a yellow top",
        "Green body with a gray top",
        "Red body with a black top",
        "Blue body with a white top"
      ],
      "correctAnswer": 0,
      "explanation": "DOT-approved recovery cylinders are painted gray with yellow tops.",
      "category": "CORE",
      "image": "/public/quiz-images/44.png"
    },
    {
      "id": 45,
      "text": "Which statement best describes 'recycling' of refrigerant?",
      "options": [
        "Storing refrigerant without any processing",
        "Cleaning for immediate reuse by oil separation and filter driers that reduce moisture and acidity",
        "Destroying contaminated refrigerant by controlled incineration",
        "Verifying purity by chemical analysis to meet AHRI 700"
      ],
      "correctAnswer": 1,
      "explanation": "Recycling typically involves oil separation and one or more passes through filter driers to reduce moisture and acidity for reuse.",
      "category": "CORE"
    },
    {
      "id": 46,
      "text": "Why is oil separation considered critical during recycling?",
      "options": [
        "Oil ensures refrigerant meets AHRI 700 without analysis",
        "Oil increases refrigerant density and speeds recovery",
        "Oil contains much of the acid and water present in the system",
        "Oil prevents fractionation in blended refrigerants"
      ],
      "correctAnswer": 2,
      "explanation": "Contaminated oil holds most of the acid and water; failing to remove it leads to poor cleanup and continued contamination.",
      "category": "CORE"
    },
    {
      "id": 47,
      "text": "Which statement is true about standards for recycled refrigerant purity?",
      "options": [
        "Recycled refrigerant must be chemically analyzed for purity certification",
        "There are no defined standards for how clean recycled refrigerant must be to be called recycled",
        "Recycled refrigerant must be destroyed if it was filtered only once",
        "Recycled refrigerant must always meet AHRI 700"
      ],
      "correctAnswer": 1,
      "explanation": "Recycling has no specific purity standard requirement; the process may include single or multiple passes through cleaning devices.",
      "category": "CORE"
    },
    {
      "id": 48,
      "text": "Which condition must be met for refrigerant to be called 'reclaimed'?",
      "options": [
        "It must be returned to the original system only",
        "It must be mixed with virgin refrigerant to improve purity",
        "It must be chemically analyzed and shown to meet the AHRI 700 purity standard",
        "It must be passed through a single filter drier"
      ],
      "correctAnswer": 2,
      "explanation": "Reclaimed refrigerant requires chemical analysis verifying it meets AHRI 700 new product purity.",
      "category": "CORE"
    },
    {
      "id": 49,
      "text": "Which statement correctly describes ownership transfer rules for used refrigerant?",
      "options": [
        "Recovered refrigerant can always be sold if it was stored in a recovery cylinder",
        "Recovered and recycled refrigerant can be transferred freely if labeled",
        "Recycled refrigerant can be given away to any technician for reuse",
        "Only reclaimed refrigerant can be transferred or sold to another individual"
      ],
      "correctAnswer": 3,
      "explanation": "Recovered or recycled refrigerant cannot be transferred to another owner except for reclamation or destruction; only reclaimed refrigerant may be sold/transferred for use.",
      "category": "CORE"
    },
    {
      "id": 50,
      "text": "A system warranty concern is most accurately addressed by which practice?",
      "options": [
        "Avoiding reclaimed refrigerant because it can invalidate warranties",
        "Using new virgin or reclaimed refrigerant for large systems under warranty",
        "Mixing recycled and recovered refrigerant to improve cleanliness",
        "Using recycled refrigerant because it has the strictest purity testing"
      ],
      "correctAnswer": 1,
      "explanation": "Reclaimed refrigerant meets new purity specifications, while recycled refrigerant has no purity test; using virgin or reclaimed refrigerant is safer for warranty protection.",
      "category": "CORE"
    },
    {
      "id": 51,
      "text": "If refrigerant will be used in equipment owned by someone other than the original owner, what must be done first?",
      "options": [
        "The refrigerant must be vapor-charged into the new system",
        "The refrigerant only needs to be recycled once",
        "The refrigerant can be transferred if it is in a gray/yellow cylinder",
        "The refrigerant must be reclaimed"
      ],
      "correctAnswer": 3,
      "explanation": "Use in equipment owned by a different person requires the refrigerant to be reclaimed; recovered/recycled refrigerant ownership cannot be transferred for direct reuse.",
      "category": "CORE"
    },
    {
      "id": 52,
      "text": "If an R-22 system is found to contain added R-410A, what is the correct handling of the recovered mixture?",
      "options": [
        "Vent it because mixed refrigerant is exempt from recovery rules",
        "Recover it into an R-22 cylinder and send it to a reclaimer to be restored to AHRI 700",
        "Recover it into a dedicated tank and send it to an EPA-approved facility for disposal (typically controlled incineration)",
        "Recycle it on-site and reuse it in another R-22 system owned by the same person"
      ],
      "correctAnswer": 2,
      "explanation": "A contaminated R-22/R-410A mixture cannot be reused or reclaimed; it must be recovered into a separate tank and sent for EPA-approved disposal.",
      "category": "CORE"
    },
    {
      "id": 53,
      "text": "Which factor can make pressure-temperature identification of the refrigerant unreliable, especially for 400-series blends?",
      "options": [
        "Using short hoses with 1/4-inch flare fittings",
        "Fractionation caused by leaks or vapor charging changing the blend’s pressure-temperature behavior",
        "Using a recovery cylinder with a float shutoff at 80% fill",
        "Labeling the cylinder contents per DOT requirements"
      ],
      "correctAnswer": 1,
      "explanation": "Non-azeotropic (400-series) blends can fractionate during leaks or improper vapor charging, shifting their saturation pressure-temperature curve and making identification difficult or impossible.",
      "category": "CORE",
      "image": "/public/quiz-images/53.png"
    }
  

]


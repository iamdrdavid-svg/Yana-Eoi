// Single source for outputs/concept_slides.md and outputs/concept_slides.pptx.
// Tags: FACT (with source), DESIGN = DESIGN PROPOSITION, FUTURE = MATTER FOR FUTURE ASSESSMENT.
// Every number must match state/metrics_register.md.

const META = {
  title: "YANA — 77-79 Cecil Avenue, Castle Hill",
  subtitle: "HDA expression of interest · concept scheme · SSD with concurrent rezoning",
  status: "Indicative only — not for determination. Draft for owner review, loop 2, 5 October 2026.",
  footer: "YANA · 77-79 Cecil Ave, Castle Hill · HDA EOI concept scheme · Indicative only, not for determination · DRAFT 5 Oct 2026",
};

// Drawing briefs. Placeholders on slides cite these IDs.
const BRIEFS = {
  "B-0": {
    to: "Furtado Sullivan",
    title: "Re-issue the concept pack PDF with corrections",
    brief: "Correct p5, p27, p28 from '40-storey/40-level' to 38 storeys. Replace the p2 '12:1' headline with the figure agreed under OD-3 (schedule currently gives 28,865 m² GFA = 14.09:1). Replace '15% affordable' (p2, p27) with '3% of residential GFA in perpetuity'. Delete the investor wording on p20 and the 'TOD targets' and 'LEP/LMR + 30%' claims on p19-20 unless Urbis supplies a primary source. Check the p24 unit table row alignment (2 units sit on the L38 plant row). Correct the p26 '275-day' label (dates span 372 days). Confirm the p16 status of 325-329 Old Northern Rd (now reported as live SSD-135694240). Re-label p23 once OD-1 is settled.",
  },
  "B-1": {
    to: "Registered surveyor / Furtado Sullivan",
    title: "Site map for webform upload",
    brief: "A3, north point, scale bar. Red line on the title boundary of Lots 1-3 DP 713156 with each lot labelled by Lot/DP and street address, total area (2,048 m² to be confirmed by survey), street names, and adjoining lots labelled by address. Settle OD-1 (25 Hume Ave) before drawing.",
  },
  "B-2": {
    to: "Urbis / Arcadia",
    title: "Measured walking-route plan to Castle Hill Metro",
    brief: "1:5,000 at A3. Shortest public pedestrian route from the site's nearest pedestrian entry point to the nearest Castle Hill Metro station entrance, measured along footpaths and crossings, with the distance annotated (pack states about 623 m). State both end points and the date measured. Show the 400 m and 800 m walking catchments and the bus stop on Old Northern Road (routes 600, 603, 610X).",
  },
  "B-3": {
    to: "Furtado Sullivan",
    title: "Existing-control line vs proposal elevation",
    brief: "Two street elevations (Cecil Ave and Hume Ave) at 1:1,000, same scale, side by side. Draw: the 16 m LEP height plane; the in-fill affordable housing bonus plane at about 20.8 m (Urbis to confirm); the proposal to top of plant (RL 248.90, 127.9 m) and to the 6 m design-tolerance envelope (RL 254.90, 133.9 m). Label RLs, storeys and ground RL 121.00. No rendering; line drawing with a single tone for the proposal.",
  },
  "B-4": {
    to: "Furtado Sullivan",
    title: "Tower and podium form",
    brief: "Ground floor plan (retail, lobby, vehicle entry, deep soil, through-site movement if any), Level 1 amenity plan, typical tower plan (L4-L37: 945 m² GBA / 735 m² GFA, apartments per floor per the p24 floor types), and one section through podium and tower with floor-to-floor heights (GF 5.0 m, L1 4.5 m, typical 3.2 m) and basements (B1 4.5 m, B2 3.0 m). Show setbacks to Cecil and Hume Avenues and side boundaries, and the ADG separation achieved.",
  },
  "B-5": {
    to: "Furtado Sullivan / Arcadia",
    title: "Comparator board — centre massing",
    brief: "One axonometric of the Castle Hill centre from the south-east, showing YANA and only schemes whose height is confirmed from a primary source at drafting: 16-20 Old Castle Hill Rd (40 storeys), 325-329 Old Northern Rd (25 storeys / 83.6 m), 2-4 & 22-28 Garthowen Cres (up to 36 storeys), 93-107 Cecil Ave (height per DPHI portal), Castle Hill Metro. Label each with storeys, status (declared / SSD lodged / proposed) and source. Do not show 'potential uplift' or TOD envelopes.",
  },
  "B-6": {
    to: "Furtado Sullivan / Arcadia",
    title: "Adjoining-site developability study",
    brief: "Plan and 3D massing showing a plausible residential envelope on each adjoining holding (81-87 Cecil Ave, 8,416 m²; the 2,600 m² lot to the south-west, address to be confirmed under OD-1), each meeting ADG building separation to YANA and achieving 2 hours mid-winter solar to 70% of its own apartments. State the assumed height and FSR for each and whether each meets cl 4.1A on its own. Include a mid-winter shadow overlay from YANA on both.",
  },
  "B-7": {
    to: "Furtado Sullivan",
    title: "Mid-winter shadow diagrams",
    brief: "21 June, hourly 9am-3pm, plan view, showing shadow from the 133.9 m envelope across adjoining residential land, Sherwin Avenue Reserve and the heritage items on pack p10 (Former Castle Hill Public School, St Paul's Cemetery, Wansbrough House). Note any public open space affected and for how long.",
  },
  "B-8": {
    to: "Furtado Sullivan",
    title: "Affordable housing schedule and distribution",
    brief: "Schedule of affordable dwellings equal to 3% of residential GFA (about 866 m²; confirm count), by level and type, shown on a stacking diagram. Distribute across at least three levels; same finishes and amenity access as market apartments. Basis (GFA vs dwellings) per OD-4.",
  },
};

const SLIDES = [
  {
    kind: "cover",
  },
  {
    kind: "stats",
    section: "Proposition",
    title: "243 homes, 623\u00A0m from Castle Hill Metro, with 3% affordable housing in perpetuity",
    stats: [
      { n: "243", l: "homes" },
      { n: "38", l: "storeys" },
      { n: "623 m", l: "walk to Metro" },
      { n: "3%", l: "affordable, in perpetuity" },
    ],
    items: [
      { t: "FACT", s: "2,048 m² corner site at Cecil and Hume Avenues, zoned R4 High Density Residential.", src: "Pack p2, p14" },
      { t: "DESIGN", s: "A single tower on a podium with 28,865 m² gross floor area, retail at ground level and resident amenity on Level 1.", src: "Pack p24" },
      { t: "FUTURE", s: "Final height, floor space, affordable dwelling count and impacts are put forward for testing through SEARs, design review and exhibition.", src: "" },
    ],
  },
  {
    kind: "standard",
    section: "Site and access",
    title: "A consolidated corner site within a 10-minute walk of Metro, buses and centre services",
    items: [
      { t: "FACT", s: "About 623 m walk to Castle Hill Metro: Chatswood about 20 minutes, Sydney CBD about 35 minutes.", src: "Pack p2, p7, p8" },
      { t: "FACT", s: "Bus routes 600, 603 and 610X stop on Old Northern Road, about 7 minutes' walk.", src: "Pack p8" },
      { t: "FACT", s: "Castle Towers, Castle Mall, the library, schools and the police station are within walking distance.", src: "Pack p12" },
      { t: "FACT", s: "Held in consolidated ownership — no further amalgamation required. Title evidence to follow.", src: "Pack p3; OD-1" },
    ],
    drawing: "B-2",
  },
  {
    kind: "standard",
    section: "Strategic framework",
    title: "Current State policy asks for housing capacity that will actually be built, in serviced centres",
    items: [
      { t: "FACT", s: "The Sydney Plan (V1.0) commenced on 13 August 2026 with the State Land Use Plan as the current framework.", src: "R-e1 (to verify)" },
      { t: "FACT", s: "The SLUP Feasible Housing Capacity Policy (Appendix C) separates zoned capacity from capacity that is feasible and realisable.", src: "R-e2 (to verify)" },
      { t: "FACT", s: "The Hills Shire's target is 23,300 completed homes by 2029.", src: "R-g1 (to verify)" },
      { t: "DESIGN", s: "YANA turns a 16 m control on a 2,048 m² lot into a defined, serviced, programmed scheme of 243 homes. The framework does not set its height or FSR.", src: "" },
    ],
    drawing: null,
    note: "Hard rule 2: no reliance on the Appendix D map, no radius claim, s9.1 direction not presented as binding on the EOI.",
  },
  {
    kind: "table",
    section: "Comparator board",
    title: "Castle Hill already has towers of 25 to 40 storeys in the State pipeline",
    table: [
      ["Site", "Storeys", "Homes", "Affordable offer", "Status", "Source"],
      ["16-20 Old Castle Hill Rd", "40", "371", "42 homes, 15 years", "Declared; EIS exhibited Oct 2026", "R-c1"],
      ["2-4 & 22-28 Garthowen Cres", "up to 36", "355", "15% of GFA", "HDA briefing", "Pack p17"],
      ["36 Carrington Rd", "up to 40", "394", "15%", "Preparing EIS", "Pack p16"],
      ["325-329 Old Northern Rd", "25", "148", "5%, in perpetuity", "SSD proposed", "R-c5"],
      ["YANA, 77-79 Cecil Ave", "38", "243", "3%, in perpetuity", "EOI", "Pack p24"],
    ],
    items: [
      { t: "FACT", s: "All comparator figures are from search-located records, to be verified against DPHI sources before lodgement.", src: "CA-0" },
    ],
    drawing: "B-5",
  },
  {
    kind: "standard",
    section: "Existing control vs proposal",
    title: "Current controls allow about 16\u00A0m; the proposal seeks 133.9\u00A0m through a concurrent rezoning",
    items: [
      { t: "FACT", s: "LEP height of buildings 16 m. No mapped FSR. Clause 4.1A minimum site area for a residential flat building is 4,000 m².", src: "Pack p14; locked position" },
      { t: "FACT", s: "The in-fill affordable housing bonus adds up to 30% height, to about 20.8 m.", src: "R-f2 (Urbis to verify)" },
      { t: "DESIGN", s: "Proposal: 127.9 m to top of plant, 133.9 m including a 6 m design tolerance. Ground RL 121.00, top RL 254.90.", src: "Pack p24" },
      { t: "FUTURE", s: "Whether this height is appropriate is a matter for full merit assessment.", src: "" },
    ],
    drawing: "B-3",
  },
  {
    kind: "standard",
    section: "Tower and podium form",
    title: "One slender tower on a two-level podium keeps the street active and the plate efficient",
    items: [
      { t: "DESIGN", s: "Ground floor: retail and residential lobby, 5.0 m floor-to-floor. Level 1: resident amenity, 4.5 m.", src: "Pack p24" },
      { t: "DESIGN", s: "Typical tower floor (L4-L37): 945 m² gross building area, 735 m² GFA, 3.2 m floor-to-floor.", src: "Pack p24" },
      { t: "DESIGN", s: "Outdoor communal open space about 30% of site area, with landscape and deep soil at ground level.", src: "Pack p27" },
      { t: "FUTURE", s: "Wind, overshadowing, ADG compliance and design quality are to be tested with the State Design Review Panel.", src: "" },
    ],
    drawing: "B-4",
  },
  {
    kind: "standard",
    section: "Adjoining-site developability",
    title: "The neighbouring holdings keep developable footprints, subject to testing",
    items: [
      { t: "FACT", s: "Draft site study shows indicative footprints on 81-87 Cecil Ave (8,416 m²) and a 2,600 m² lot to the south-west.", src: "Pack p23 (marked DRAFT)" },
      { t: "FACT", s: "Existing built form is set back about 25 m (Cecil Ave) and 22 m (Hume Ave) from the site boundary.", src: "Pack p23" },
      { t: "FUTURE", s: "Separation, solar access and the south-west lot's own clause 4.1A position are to be demonstrated.", src: "Brief B-6; OD-1" },
    ],
    drawing: "B-6",
  },
  {
    kind: "standard",
    section: "Impacts summary",
    title: "No fundamental servicing constraint has been found; built-form impacts are for the EIS",
    items: [
      { t: "FACT", s: "Power, water, sewer and telecoms connections identified; one 150 mm sewer main at the north-east corner to divert or avoid.", src: "Pack p13" },
      { t: "FACT", s: "Heritage items nearby: Former Castle Hill Public School, St Paul's Cemetery and Wansbrough House.", src: "Pack p10" },
      { t: "FACT", s: "Flood, bushfire and contamination status not yet confirmed.", src: "s10.7 certificate outstanding (CA-3)" },
      { t: "FUTURE", s: "Overshadowing, wind, traffic, parking, heritage setting and views are to be assessed in the EIS.", src: "Brief B-7" },
    ],
    drawing: "B-7",
  },
  {
    kind: "stats",
    section: "Housing and affordable housing",
    title: "243 homes across six apartment types, with 3% of floor space held as affordable housing in perpetuity",
    stats: [
      { n: "17%", l: "one-bed (42)" },
      { n: "47%", l: "two-bed (114)" },
      { n: "26%", l: "three-bed (63)" },
      { n: "10%", l: "four-bed (24)" },
    ],
    items: [
      { t: "FACT", s: "Mix: 42 one-bed, 60 two-bed, 54 two-bed + study, 36 three-bed, 27 three-bed + study, 24 four-bed + study.", src: "Pack p24" },
      { t: "DESIGN", s: "3% of residential GFA (about 866 m², about 7 homes) as affordable rental in perpetuity, secured in the LEP amendment.", src: "Locked position; count to confirm (B-8)" },
      { t: "FUTURE", s: "Community housing provider, dwelling schedule and distribution are to be confirmed.", src: "OD-4, OD-5" },
    ],
    drawing: "B-8",
  },
  {
    kind: "timeline",
    section: "Deliverability and programme",
    title: "SSD lodgement by October 2027, within 9 months of SEARs; construction by October 2029",
    steps: [
      { d: "Oct 2026", l: "EOI" },
      { d: "22 Jan 2027", l: "SEARs" },
      { d: "1 Oct 2027", l: "SSDA lodged" },
      { d: "10 Oct 2028", l: "Approval (programme)" },
      { d: "by 10 Oct 2029", l: "Construction start" },
    ],
    items: [
      { t: "FACT", s: "Scoping and EIS preparation are programmed from 2 November 2026.", src: "Pack p26" },
      { t: "FACT", s: "Consolidated site; demolition is the only enabling work; no off-site infrastructure is needed first.", src: "Pack p3, p13" },
      { t: "FUTURE", s: "Target start date, builder and funding statement to be confirmed.", src: "OD-7" },
    ],
  },
  {
    kind: "standard",
    section: "Why this pathway",
    title: "Only a concurrent rezoning can test this envelope; the in-fill bonus reaches about six storeys",
    items: [
      { t: "FACT", s: "In-fill bonus: up to +30% height for 15% affordable for 15 years. On this site, about 20.8 m.", src: "R-f2 (Urbis to verify)" },
      { t: "FACT", s: "Clause 4.1A requires 4,000 m² for a residential flat building; the site is 2,048 m².", src: "Locked position" },
      { t: "DESIGN", s: "The HDA pathway lets DPHI, council, agencies and the community assess the controls, design and public benefit together.", src: "Pack p6" },
      { t: "FUTURE", s: "Status of council's draft Castle Hill Precinct Plan to be confirmed at lodgement.", src: "R-f3; CA-4" },
    ],
    drawing: null,
    chart: { name: "Height", title: "Maximum height by pathway (m)", labels: ["LEP control", "In-fill bonus", "Proposal"], values: [16, 20.8, 133.9] },
  },
  {
    kind: "ask",
    section: "The ask",
    title: "Declare YANA State significant development and issue SEARs so the envelope can be tested in full",
    items: [
      { t: "DESIGN", s: "Amend The Hills LEP 2019 for the site: height of buildings, a site-specific clause 4.1A provision, and a provision securing 3% affordable housing in perpetuity.", src: "" },
      { t: "FUTURE", s: "Height, floor space, affordable housing and impacts to be tested through SEARs, design review, agency and council consultation and exhibition.", src: "" },
    ],
  },
];

module.exports = { META, BRIEFS, SLIDES };

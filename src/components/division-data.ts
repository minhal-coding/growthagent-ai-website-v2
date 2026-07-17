export type ConstructionDivision = {
  number: string;
  name: string;
  shortName: string;
  status: "Planned division coverage" | "Under validation";
  scopes: readonly string[];
};

export const constructionDivisions: readonly ConstructionDivision[] = [
  { number: "03", name: "Concrete", shortName: "Concrete", status: "Planned division coverage", scopes: ["Concrete forming", "Reinforcing", "Cast-in-place concrete", "Concrete restoration", "Concrete finishing"] },
  { number: "04", name: "Masonry", shortName: "Masonry", status: "Planned division coverage", scopes: ["Unit masonry", "Stone", "Masonry restoration", "Masonry accessories"] },
  { number: "05", name: "Metals", shortName: "Metals", status: "Planned division coverage", scopes: ["Structural metal", "Metal fabrication", "Ornamental metal", "Metal stairs and railings"] },
  { number: "06", name: "Wood, Plastics & Composites", shortName: "Wood & composites", status: "Planned division coverage", scopes: ["Rough carpentry", "Finish carpentry", "Architectural woodwork", "Composite fabrication"] },
  { number: "07", name: "Thermal & Moisture Protection", shortName: "Thermal & moisture", status: "Under validation", scopes: ["Waterproofing", "Insulation", "Roofing", "Siding", "Fireproofing", "Joint protection"] },
  { number: "08", name: "Openings", shortName: "Openings", status: "Planned division coverage", scopes: ["Doors", "Frames", "Windows", "Glazing", "Hardware", "Access openings"] },
  { number: "09", name: "Finishes", shortName: "Finishes", status: "Under validation", scopes: ["Drywall and gypsum", "Plaster", "Tile", "Ceilings", "Flooring", "Painting and coatings", "Wall finishes"] },
  { number: "21", name: "Fire Suppression", shortName: "Fire suppression", status: "Under validation", scopes: ["Fire-suppression systems", "Sprinklers", "Fire pumps", "Suppression piping"] },
  { number: "22", name: "Plumbing", shortName: "Plumbing", status: "Planned division coverage", scopes: ["Plumbing systems", "Piping", "Fixtures", "Water distribution", "Sanitary and storm drainage"] },
  { number: "23", name: "Heating, Ventilating & Air Conditioning", shortName: "HVAC", status: "Planned division coverage", scopes: ["HVAC systems", "Mechanical equipment", "Ductwork", "Controls", "Testing and balancing"] },
  { number: "26", name: "Electrical", shortName: "Electrical", status: "Planned division coverage", scopes: ["Electrical distribution", "Lighting", "Wiring", "Grounding", "Controls and electrical equipment"] },
  { number: "31", name: "Earthwork", shortName: "Earthwork", status: "Planned division coverage", scopes: ["Clearing", "Excavation", "Grading", "Soil treatment", "Erosion control"] },
  { number: "32", name: "Exterior Improvements", shortName: "Exterior improvements", status: "Under validation", scopes: ["Paving", "Landscaping", "Irrigation", "Fencing", "Site furnishings"] },
  { number: "33", name: "Utilities", shortName: "Utilities", status: "Under validation", scopes: ["Water utilities", "Sanitary utilities", "Storm drainage", "Communications utilities", "Fuel and site utility systems"] },
] as const;

export const divisionNames = constructionDivisions.map((division) => `Division ${division.number} — ${division.name}`);

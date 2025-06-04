import { AnimatedDiv } from "../Animation";

const sections = [
  {
    title: "Locations & Companies",
    keywords:
      "Malaysia, Johor, Kuala Lumpur, Singapore, United Panel System, United Cold System, United Refrigeration, UR",
  },
  {
    title: "Coldroom & Refrigeration",
    keywords:
      "coldroom, cold room, refrigeration system, HVACR, freezer room, chiller room, processing room, packaging room, loading bay, clean room, multi system",
  },
  {
    title: "Compressors & Cooling Equipment",
    keywords:
      "compressor, bitzer, invotech, germany compressor, china compressor, reciprocating, scroll, screw compressor, unit cooler, evaporator, guentner, guntner, airtech, air tech, liquid receiver, condenser, water cooled condenser, condensing unit",
  },
  {
    title: "Panels & Insulation",
    keywords:
      'PIR panel, PU sandwich panel, polyisocyanurate, polyurethane, 50mm PIR panel, 75mm PIR panel, 100mm PIR panel, 125mm PIR panel, 150mm PIR panel, 200mm PIR panel, 2", 3", 4", 5", 6", 8"',
  },
  {
    title: "Valves & Controls",
    keywords:
      "solenoid valve, expansion valve, accumulator, pressure regulator, ball valve, danfoss, henry, castel, pressure relief port, capacity regulator, check valve, safety valve, thermostat, temperature control, dixell controller, NTC sensor",
  },
  {
    title: "Accessories & Components",
    keywords:
      "compressor oil, oil strainer, oil separator, gasket, accessories, doluyo, copper jacketing pipe, liquid line, suction line, tube, fan motor, vibration pipe hose, nylon hanger suspension, strip curtain, ice machine, insulation, sight glass, alco",
  },
  {
    title: "Certifications & Standards",
    keywords:
      "PPGI, FM approved, SIRIM, BOMBA, Fire rated, thermal resistance, ECO SIRIM, eco label, green mark",
  },
  {
    title: "Refrigerants & Chemicals",
    keywords: "freon, refrigerant, CO2, ammonia, chemical",
  },
  {
    title: "Doors & Motors",
    keywords: "coldroom door, sliding door, swing door, automatic motor",
  },
  {
    title: "Project Services",
    keywords:
      "turnkey project, design, assembly, installation, supply, testing, commissioning, handover",
  },
  {
    title: "Sizes & Measurements",
    keywords: '1/8", 1/4", 3/8", 1/2", 5/8", 3/4", 1", 2"',
  },
  {
    title: "Refrigeration Temperatures",
    keywords: "low temperature, low temp, mid temp",
  },
  {
    title: "Materials",
    keywords: "aluminium, stainless steel",
  },
  {
    title: "Brands & Manufacturers",
    keywords:
      "bitzer, invotech, guentner, guntner, airtech, air tech, danfoss, henry, castel, doluyo, alco, fermod, intertechnica, AIRMENDER",
  },
  {
    title: "Heating & Controls",
    keywords: "heater, defrost system, AC&R, HEAT EXCHANGER, pump",
  },
  {
    title: "Miscellaneous",
    keywords: "double belt, continuous line PIR production",
  },
];

const KeywordSection = () => {
  return (
    <section id="keyword-section" className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <AnimatedDiv variant="slideUp">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-6 dark:border-gray-700"
            >
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <p className="dark:text-body-color-dark text-sm leading-relaxed text-gray-700">
                {section.keywords}
              </p>
            </div>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default KeywordSection;

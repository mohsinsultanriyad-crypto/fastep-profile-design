import industrialPlant from "@/assets/industrial-plant.jpg";
import fiberOptic from "@/assets/fiber-optic.jpg";
import accessControl from "@/assets/access-control.jpg";
import logo from "@/assets/fastep-logo.png";

const industries = [
  { name: "Oil & Gas", desc: "Upstream, midstream, and downstream facility security systems" },
  { name: "Petrochemical", desc: "High-security surveillance for processing plants and refineries" },
  { name: "Construction", desc: "Temporary and permanent security for mega-project sites" },
  { name: "Industrial Plants", desc: "Integrated security for manufacturing and production facilities" },
  { name: "Logistics & Warehousing", desc: "Perimeter protection and inventory monitoring systems" },
  { name: "Commercial Facilities", desc: "Access control and surveillance for commercial complexes" },
  { name: "Government Sector", desc: "Secure communication and surveillance for government infrastructure" },
];

const IndustriesPage = () => {
  return (
    <div className="a4-page flex flex-col">
      {/* Light header section */}
      <div className="bg-secondary px-16 py-12">
        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt="FASTEP ARABIA" className="h-16" />
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Industries Served</span>
        </div>

        <div className="section-divider mb-3" />
        <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Industries Served</h2>
        <p className="font-body text-sm text-foreground/70 max-w-lg">
          Delivering specialized security solutions across Saudi Arabia's most demanding industrial sectors.
        </p>
      </div>

      {/* Images strip */}
      <div className="grid grid-cols-3 h-40">
        <img src={industrialPlant} alt="Industrial plant" className="w-full h-full object-cover" />
        <img src={fiberOptic} alt="Fiber optic infrastructure" className="w-full h-full object-cover" />
        <img src={accessControl} alt="Access control system" className="w-full h-full object-cover" />
      </div>

      {/* Industries list */}
      <div className="px-16 py-8 flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {industries.map((ind, i) => (
            <div key={ind.name} className="flex gap-3 items-start border-b border-border pb-4">
              <span className="font-heading text-xs text-primary font-bold mt-1">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">{ind.name}</h4>
                <p className="font-body text-xs text-muted-foreground mt-1">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex justify-end pt-6">
          <span className="font-body text-xs text-muted-foreground">06</span>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;

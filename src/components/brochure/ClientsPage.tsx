import logo from "@/assets/fastep-logo.png";

const clients = [
  "Saudi Aramco",
  "SABIC",
  "Saudi Electricity Company (SEC)",
  "STC (Saudi Telecom Company)",
  "Nesma & Partners",
  "Alfanar",
  "Larsen & Toubro (L&T)",
  "Samsung Engineering",
  "Hyundai Engineering",
  "Petrofac",
  "Ma'aden",
  "SATORP",
  "Petro Rabigh",
];

const whyChoose = [
  "Certified & experienced engineers",
  "Industrial mega-project capability",
  "Latest surveillance technology",
  "24/7 technical support",
  "Reliable and cost-effective execution",
  "Customized security solutions",
];

const ClientsPage = () => {
  return (
    <div className="a4-page flex flex-col px-16 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <img src={logo} alt="FASTEP ARABIA" className="h-10" />
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Projects & Clients</span>
      </div>

      <div className="section-divider mb-3" />
      <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
        Projects Supporting Leading Industrial Clients
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-8 max-w-xl">
        Trusted by Industry Leaders
      </p>

      {/* Client grid */}
      <div className="grid grid-cols-3 gap-0 mb-6">
        {clients.map((c) => (
          <div key={c} className="client-grid-item">{c}</div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="font-body text-xs text-muted-foreground italic mb-8 leading-relaxed">
        Experience gained through supporting major industrial projects executed by leading EPC contractors and organizations across the Kingdom.
      </p>

      {/* Why Choose section */}
      <div className="bg-primary p-8 mt-auto">
        <h3 className="font-heading text-xl font-bold text-primary-foreground mb-5">Why Choose FASTEP ARABIA</h3>
        <div className="grid grid-cols-2 gap-3">
          {whyChoose.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-primary-foreground font-bold text-sm">✔</span>
              <span className="font-body text-sm text-primary-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <span className="font-body text-xs text-muted-foreground">07</span>
      </div>
    </div>
  );
};

export default ClientsPage;

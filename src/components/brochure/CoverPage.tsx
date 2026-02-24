import coverImg from "@/assets/cover-industrial.jpg";
import logo from "@/assets/fastep-logo.png";

const CoverPage = () => {
  return (
    <div className="a4-page relative flex flex-col">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img src={coverImg} alt="Industrial facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(210,40%,20%)]/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full min-h-[297mm] px-16 py-12">
        {/* Logo */}
        <div className="mb-auto">
          <img src={logo} alt="FASTEP ARABIA" className="h-28" />
        </div>

        {/* Main Title */}
        <div className="mb-24">
          <div className="section-divider-accent w-20 h-1 bg-accent mb-8" />
          <h1 className="font-heading text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Advanced Security<br />
            & Surveillance<br />
            Solutions
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-md leading-relaxed">
            Design · Supply · Installation · Testing · Commissioning · Maintenance
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-primary-foreground/20 pt-6">
          <p className="font-body text-sm text-primary-foreground/60 tracking-wider uppercase">
            Company Profile 2025
          </p>
          <p className="font-body text-sm text-primary-foreground/60 tracking-wider uppercase">
            Jubail Industrial Area, Saudi Arabia
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;

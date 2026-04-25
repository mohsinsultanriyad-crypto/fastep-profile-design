import industrialPlant from "@/assets/industrial-plant.jpg";
import smartLock from "@/assets/smart-lock.jpeg";
import logo from "@/assets/fastep-logo.png";

const VisionMissionPage = () => {
  return (
    <div className="a4-page flex flex-col">
      {/* Top image band */}
      <div className="h-64 overflow-hidden relative grid grid-cols-2">
        <div className="relative h-full">
          <img src={industrialPlant} alt="Industrial plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/15" />
        </div>
        <div className="relative h-full">
          <img src={smartLock} alt="Smart security lock" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </div>

      <div className="px-16 py-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt="FASTEP ARABIA" className="h-16" />
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Vision & Mission</span>
        </div>

        {/* Vision */}
        <div className="mb-10">
          <div className="section-divider mb-3" />
          <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Our Vision</h2>
          <p className="font-body text-base text-foreground/80 leading-relaxed max-w-xl">
            To be the leading provider of integrated security and surveillance solutions in Saudi Arabia's industrial sector, recognized for technical excellence, reliability, and innovation.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10">
          <div className="section-divider section-divider-accent mb-3" />
          <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="font-body text-base text-foreground/80 leading-relaxed max-w-xl">
            To deliver world-class security infrastructure solutions that protect critical industrial assets, ensure operational continuity, and meet the evolving security demands of the Kingdom's Vision 2030 transformation.
          </p>
        </div>

        {/* Core Values */}
        <div className="mt-auto bg-secondary border-l-4 border-primary p-8">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Core Values</h3>
          <div className="grid grid-cols-4 gap-6">
            {[
            { title: "Excellence", desc: "Highest engineering standards in every project" },
            { title: "Integrity", desc: "Transparent and ethical business practices" },
            { title: "Innovation", desc: "Adopting latest security technologies" },
            { title: "Reliability", desc: "Consistent and dependable project delivery" }].
            map((v) =>
            <div key={v.title}>
                <p className="font-heading text-sm font-bold text-primary mb-2">{v.title}</p>
                <p className="font-body text-xs text-foreground/70 leading-relaxed">{v.desc}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <span className="font-body text-xs text-muted-foreground">03</span>
        </div>
      </div>
    </div>);

};

export default VisionMissionPage;
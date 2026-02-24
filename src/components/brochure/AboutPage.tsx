import controlRoom from "@/assets/control-room.jpg";
import engineersImg from "@/assets/engineers-installing.jpg";
import engineerPointing from "@/assets/engineer-pointing.png";
import logo from "@/assets/fastep-logo.png";

const AboutPage = () => {
  return (
    <div className="a4-page flex flex-col px-16 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <img src={logo} alt="FASTEP ARABIA" className="h-16" />
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">About Us</span>
      </div>

      <div className="section-divider mb-3" />
      <h2 className="font-heading text-4xl font-bold text-foreground mb-8">About FASTEP ARABIA</h2>

      <div className="flex gap-8 mb-10">
        <div className="flex-1">
          <p className="font-body text-base text-foreground/80 leading-relaxed mb-6">
            FASTEP ARABIA is a specialized system integrator delivering high-end security, surveillance, and low-current solutions for Saudi Arabia's industrial backbone. We provide design, supply, installation, testing, commissioning, and maintenance of integrated security and communication systems.
          </p>
          <p className="font-body text-base text-foreground/80 leading-relaxed">
            With a proven track record in supporting mega-scale industrial projects, FASTEP ARABIA combines technical expertise with a deep understanding of the Kingdom's critical infrastructure requirements. Our team of certified engineers ensures every project meets the highest international standards.
          </p>
        </div>
        <div className="w-52 shrink-0 flex items-end justify-center">
          
        </div>
      </div>

      {/* Two images side by side */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="overflow-hidden">
          <img src={controlRoom} alt="Surveillance control room" className="w-full h-48 object-cover" />
        </div>
        <div className="overflow-hidden">
          <img src={engineersImg} alt="Engineers at work" className="w-full h-48 object-cover" />
        </div>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-3 gap-6 mt-auto">
        {[
        { value: "Industrial", label: "Mega-Project Capability" },
        { value: "24/7", label: "Technical Support" },
        { value: "Certified", label: "Engineering Team" }].
        map((stat) =>
        <div key={stat.label} className="border-t-2 border-primary pt-4">
            <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
            <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        )}
      </div>

      {/* Page number */}
      <div className="mt-8 flex justify-end">
        <span className="font-body text-xs text-muted-foreground">02</span>
      </div>
    </div>);

};

export default AboutPage;
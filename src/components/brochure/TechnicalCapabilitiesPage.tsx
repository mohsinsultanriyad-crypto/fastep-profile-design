import dashboardImg from "@/assets/cctv-monitoring.jpeg";
import commTower from "@/assets/biometric-security.jpeg";
import logo from "@/assets/fastep-logo.png";

const capabilities = [
  { title: "Long-Range PTZ Cameras", desc: "High-resolution pan-tilt-zoom surveillance for wide-area perimeter coverage" },
  { title: "AI Intrusion Detection", desc: "Intelligent video analytics for real-time automated threat identification" },
  { title: "Facial Recognition Systems", desc: "Advanced biometric identification integrated with access control platforms" },
  { title: "License Plate Recognition (LPR)", desc: "Automated vehicle identification and tracking for industrial facility access" },
  { title: "Cyber-Secure Network Architecture", desc: "Hardened network design with multi-layer encryption and intrusion prevention" },
  { title: "Centralized Command & Control", desc: "Unified monitoring platform integrating all security subsystems" },
  { title: "High-Availability Data Systems", desc: "Redundant infrastructure ensuring zero-downtime mission-critical operations" },
];

const TechnicalCapabilitiesPage = () => {
  return (
    <div className="a4-page flex flex-col px-16 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <img src={logo} alt="FASTEP ARABIA" className="h-16" />
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Technical Capabilities</span>
      </div>

      <div className="section-divider mb-3" />
      <h2 className="font-heading text-4xl font-bold text-foreground mb-8">Technical Capabilities</h2>

      {/* Two images */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <img src={dashboardImg} alt="Monitoring dashboard" className="w-full h-44 object-cover" />
        <img src={commTower} alt="Communication tower" className="w-full h-44 object-cover" />
      </div>

      {/* Capabilities list */}
      <div className="space-y-4 flex-1">
        {capabilities.map((cap, i) => (
          <div key={cap.title} className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-primary flex items-center justify-center shrink-0">
              <span className="font-heading text-sm font-bold text-primary-foreground">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground">{cap.title}</h4>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <span className="font-body text-xs text-muted-foreground">05</span>
      </div>
    </div>
  );
};

export default TechnicalCapabilitiesPage;

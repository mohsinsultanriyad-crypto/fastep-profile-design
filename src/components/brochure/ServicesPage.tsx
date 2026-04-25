import smartLock from "@/assets/smart-lock.jpeg";
import biometricSecurity from "@/assets/biometric-security.jpeg";
import technicianInstall from "@/assets/technician-installation.jpeg";
import cctvMonitoring from "@/assets/cctv-monitoring.jpeg";
import controlRoom from "@/assets/control-room.jpg";
import cyberImg from "@/assets/cyber-security.jpg";
import logo from "@/assets/fastep-logo.png";

const services = [
  { title: "CCTV System Design & Installation", desc: "IP, Analog & Thermal Cameras with full system integration", img: cctvMonitoring },
  { title: "Smart Locks & Access Control", desc: "Keypad, biometric and smart lock solutions for facility access", img: smartLock },
  { title: "Biometric & Identity Systems", desc: "Fingerprint, facial recognition and multi-factor authentication", img: biometricSecurity },
  { title: "Professional Installation Services", desc: "Certified technicians installing low-current security systems", img: technicianInstall },
  { title: "Control Room & Video Wall Solutions", desc: "Command center design with multi-screen video wall integration", img: controlRoom },
  { title: "Cyber Security & Network Protection", desc: "Industrial-grade network security and threat monitoring", img: cyberImg },
];

const additionalServices = [
  "Video Analytics & AI Surveillance",
  "Remote Monitoring Systems",
  "Annual Maintenance Contracts (AMC)",
  "Industrial & Construction Site Security",
];

const ServicesPage = () => {
  return (
    <div className="a4-page flex flex-col px-16 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <img src={logo} alt="FASTEP ARABIA" className="h-16" />
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Core Services</span>
      </div>

      <div className="section-divider mb-3" />
      <h2 className="font-heading text-4xl font-bold text-foreground mb-8">Core Services</h2>

      {/* Services grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {services.map((s) => (
          <div key={s.title} className="group">
            <div className="overflow-hidden mb-3 h-32">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-1">{s.title}</h4>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Additional services */}
      <div className="bg-secondary p-6 mt-auto">
        <h3 className="font-heading text-lg font-bold text-foreground mb-4">Additional Services</h3>
        <div className="grid grid-cols-2 gap-3">
          {additionalServices.map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary shrink-0" />
              <span className="font-body text-sm text-foreground/80">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <span className="font-body text-xs text-muted-foreground">04</span>
      </div>
    </div>
  );
};

export default ServicesPage;

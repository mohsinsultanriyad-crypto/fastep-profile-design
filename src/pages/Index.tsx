import CoverPage from "@/components/brochure/CoverPage";
import AboutPage from "@/components/brochure/AboutPage";
import VisionMissionPage from "@/components/brochure/VisionMissionPage";
import ServicesPage from "@/components/brochure/ServicesPage";
import TechnicalCapabilitiesPage from "@/components/brochure/TechnicalCapabilitiesPage";
import IndustriesPage from "@/components/brochure/IndustriesPage";
import ClientsPage from "@/components/brochure/ClientsPage";
import ContactPage from "@/components/brochure/ContactPage";

const Index = () => {
  return (
    <div className="bg-muted min-h-screen py-8">
      <div className="max-w-[210mm] mx-auto space-y-8">
        <CoverPage />
        <AboutPage />
        <VisionMissionPage />
        <ServicesPage />
        <TechnicalCapabilitiesPage />
        <IndustriesPage />
        <ClientsPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default Index;

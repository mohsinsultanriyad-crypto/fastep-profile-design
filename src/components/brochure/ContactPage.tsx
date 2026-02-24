import { QRCodeSVG } from "qrcode.react";
import logo from "@/assets/fastep-logo.png";
import coverImg from "@/assets/cover-industrial.jpg";

const ContactPage = () => {
  return (
    <div className="a4-page flex flex-col">
      {/* Top dark section */}
      <div className="bg-charcoal px-16 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={coverImg} alt="" className="w-full h-full object-cover border-black/0" />
        </div>
        <div className="relative z-10 border-black/0">
          <img src={logo} alt="FASTEP ARABIA" className="h-20 mb-8" />
          <div className="section-divider section-divider-white mb-3" />
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Contact Us</h2>
          <p className="font-body text-sm text-primary-foreground/70 max-w-lg">
            Partner with FASTEP ARABIA for your next industrial security project. Our team is ready to deliver tailored solutions for your specific requirements.
          </p>
        </div>
      </div>

      {/* Contact details */}
      <div className="px-16 py-10 flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-10 mb-10">
          <div className="space-y-6">
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-2">Phone</h4>
              <p className="font-body text-base text-foreground/80">0504426715</p>
              <p className="font-body text-base text-foreground/80">0538881426</p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-2">Email</h4>
              <p className="font-body text-base text-primary">marketing@fasteparabia.com</p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-2">Website</h4>
              <p className="font-body text-base text-primary">fasteparabia.com</p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-2">Location</h4>
              <p className="font-body text-base text-foreground/80">Jubail Industrial Area<br />Saudi Arabia</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div className="border border-border p-6">
              <QRCodeSVG
                value="https://fasteparabia.com/company_profile.pdf"
                size={180}
                bgColor="white"
                fgColor="#2F343A"
                level="H" />

            </div>
            <p className="font-body text-xs text-muted-foreground mt-4 text-center">
              Scan to download<br />Company Profile
            </p>
          </div>
        </div>

        {/* Company logo centered */}
        <div className="mt-auto border-t border-border pt-8 flex items-center justify-between">
          <img src={logo} alt="FASTEP ARABIA" className="h-16" />
          <div className="text-right">
            <p className="font-heading text-sm font-bold text-foreground">FASTEP ARABIA</p>
            <p className="font-body text-xs text-muted-foreground">Advanced Security & Surveillance Solutions</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <span className="font-body text-xs text-muted-foreground">08</span>
        </div>
      </div>
    </div>);

};

export default ContactPage;
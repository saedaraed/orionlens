export const metadata = {
  title: "Google business",
  description:
    "Google Business View is a virtual tour feature that uses 360° imagery to showcase the inside of a business on Google Search and Maps, helping attract more customers online.",
};
import ServicePage from "@/app/components/ServiceTemplate";

const GoogleBusiness = () => {
  return (
    <ServicePage
      title="Virtuelle Rundgänge mit Google Business View"
      description="
 Google Business View ist eine interaktive 360°-Tour durch Ihr
              Geschäft, Ihre Praxis oder Ihren Showroom – direkt in der
              Google-Suche und auf Google Maps sichtbar."
      benefits={[
        "Increased visibility in search results",
        "Builds trust through transparency",
        "Helps customers decide faster",
      ]}
      steps={[
        {
          title: "Beratung & Planung",
          description:
            "Wir analysieren Ihr Geschäft und planen den besten Ablauf für die Tour.",
        },
        {
          title: "Professionelle 360°-Aufnahmen",
          description:
            "Unsere zertifizierten Fotografen erfassen hochwertige Panorama-Bilder Ihrer Räume.",
        },
        {
          title: "Bearbeitung & Integration",
          description:
            "Wir setzen die Lösungen effizient um und integrieren sie nahtlos in Ihre Infrastruktur.",
        },
        {
          title: "Wartung & Support",
          description:
            "Langfristige Betreuung, regelmäßige Wartung und schneller Support im Problemfall.",
        },
      ]}
    />
  );
};

export default GoogleBusiness;

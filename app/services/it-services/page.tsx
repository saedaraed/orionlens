export const metadata = {
  title: "It services",
  description: "IT services refer to the support and solutions provided for managing and using technology, including software, hardware, networks, and data systems to help businesses operate efficiently.",
};
import FAQ from "@/app/components/FAQ";
// import CustomSlider from "@/app/components/FeaturedWorks";
import ServicePage from "@/app/components/ServiceTemplate";

export default function ITServicesPage() {
  return (
    <>
    <ServicePage
      title="IT Dienstleistungen"
      description="Maßgeschneiderte IT-Lösungen für Ihr Unternehmen – zuverlässig, sicher und skalierbar."
      benefits={[
        "Individuelle IT-Beratung und Planung",
        "Sichere Netzwerkinfrastruktur und Wartung",
        "Cloud-Lösungen und Datensicherung",
      ]}
      steps={[
        {
          title: "Bedarfsanalyse",
          description: "Wir analysieren Ihre bestehenden IT-Systeme und identifizieren Optimierungspotenziale.",
        },
        {
          title: "Individuelle Lösungskonzepte",
          description: "Basierend auf Ihren Anforderungen entwickeln wir maßgeschneiderte IT-Konzepte.",
        },
        {
          title: "Implementierung & Integration",
          description: "Wir setzen die Lösungen effizient um und integrieren sie nahtlos in Ihre Infrastruktur.",
        },
        {
          title: "Wartung & Support",
          description: "Langfristige Betreuung, regelmäßige Wartung und schneller Support im Problemfall.",
        },
      ]}
  
    />
    {/* <CustomSlider/>  */}
          <FAQ/>

    </>
  );
}

export const metadata = {
  title: "Drone shot",
  description: "A drone shot is a photo or video captured from above using a flying drone, offering unique aerial views and wide perspectives.",
};
import FAQ from "@/app/components/FAQ";
// import CustomSlider from "@/app/components/FeaturedWorks";
import ServicePage from "@/app/components/ServiceTemplate";

export default function DroneShot() {
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

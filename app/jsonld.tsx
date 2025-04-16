export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Hawkeye Core",
          url: "https://hawkeye-core.com",
          logo: "https://hawkeye-core.com/hawkeye-core-logo.png",
          description: "IT consulting company committed to delivering cutting-edge technology solutions",
          address: {
            "@type": "PostalAddress",
            streetAddress: "10780 Westview Dr Ste F PMB 10006",
            addressLocality: "Houston",
            addressRegion: "TX",
            postalCode: "77043",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-281-760-7332",
            email: "info@hawkeye-core.com",
            contactType: "customer service",
          },
          sameAs: [
            "https://www.facebook.com/profile.php?id=61573424889325&locale=ar_AR",
            "https://x.com/Hawkeye_core?s=09",
            "https://www.linkedin.com/company/hawkeye-core/",
            "https://www.instagram.com/hawkeye_core?igsh=c3U3c3NycDFoMDBk",
          ],
        }),
      }}
    />
  )
}

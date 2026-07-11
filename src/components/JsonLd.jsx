export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Laksh JNV Academy",
    url: "https://lakshjnv.in/",
    description: "Online learning platform for Jawahar Navodaya Vidyalaya entrance exam preparation.",
    sameAs: ["https://youtube.com", "https://instagram.com", "https://telegram.org"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

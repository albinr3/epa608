export default function sitemap() {
  // Obtener baseUrl y eliminar trailing slash si existe
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  baseUrl = baseUrl.replace(/\/$/, '');

  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/es/pricing`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/es/terms`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/es/privacy`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/es/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/epa-608-practice-test`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/es/epa-608-practice-test-en-espanol`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/epa-608-universal-practice-test`,
      lastModified: now,
    },
  ];
}

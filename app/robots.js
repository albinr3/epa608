export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/sso-callback',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


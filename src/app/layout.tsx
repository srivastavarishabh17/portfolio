import type { Metadata } from 'next';
import './globals.css';
import { CanvasBackground } from '@/components/CanvasBackground';

export const metadata: Metadata = {
  title: 'Rishabh Srivastava | Senior Full Stack Developer & GenAI Architect',
  description:
    'Rishabh Srivastava is a Senior Full Stack & GenAI Architect based in Greater Noida / Delhi NCR. Creator of 16+ production architectures across distributed SaaS, high-concurrency message relays, and modern AI systems.',
  keywords: [
    'Rishabh Srivastava',
    'Full Stack Architect',
    'Senior Developer',
    'Generative AI Engineer',
    'Next.js 14',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'BullMQ',
    'Aozo Technologies',
    'Messegy',
    'Ecomify.io'
  ],
  authors: [{ name: 'Rishabh Srivastava', url: 'https://rishabhsrivastava.in' }],
  creator: 'Rishabh Srivastava',
  metadataBase: new URL('https://rishabhsrivastava.in'),
  openGraph: {
    title: 'Rishabh Srivastava | Senior Full Stack Developer & GenAI Architect',
    description:
      'High-concurrency systems, distributed cloud platforms, and GenAI workflows engineered for scale. Explore 16+ verified production systems.',
    url: 'https://rishabhsrivastava.in',
    siteName: 'Rishabh Srivastava Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/images/rishabh-executive-navy-headshot.jpg',
        width: 800,
        height: 800,
        alt: 'Rishabh Srivastava Portrait'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishabh Srivastava | Senior Full Stack Developer & GenAI Architect',
    description:
      'High-concurrency systems, distributed cloud platforms, and GenAI workflows engineered for scale.',
    images: ['/assets/images/rishabh-executive-navy-headshot.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rishabh Srivastava',
    url: 'https://rishabhsrivastava.in',
    image: 'https://rishabhsrivastava.in/assets/images/rishabh-executive-navy-headshot.jpg',
    jobTitle: 'Senior Full Stack Developer & GenAI Architect',
    telephone: '+91-7037564392',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Product Engineering & Cloud Architecture'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)'
    },
    sameAs: [
      'https://www.linkedin.com/in/srivastavarishabh17',
      'https://github.com/srivastavarishabh17'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CanvasBackground />
        <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </body>
    </html>
  );
}

import Script from 'next/script';

/**
 * Google Analytics Component
 * Implements Google Tag Manager using Next.js Script component
 * with optimal loading strategy for performance
 */
export const GoogleAnalitics = () => {
  const GA_TRACKING_ID = 'AW-17043141737';

  return (
    <>
      {/* Google Tag Manager Script - loads after page is interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      
      {/* Google Analytics Configuration */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

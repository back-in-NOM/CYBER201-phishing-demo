import { useEffect, useRef } from 'react';

/**
 * AdUnit component for Google AdSense integration
 *
 * SETUP INSTRUCTIONS:
 * 1. Replace 'ca-pub-XXXXXXXXXXXXXXXX' with your AdSense publisher ID
 * 2. Replace 'XXXXXXXXXX' slot values with your actual ad slot IDs
 * 3. AdSense must be approved for your domain before ads will display
 *
 * NOTE: Ads won't display on localhost - deploy to see actual ads
 */
const AdUnit = ({
  slot,
  format = 'auto',
  responsive = true,
  style = {},
  className = ''
}) => {
  const adRef = useRef(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Only push once per mount to avoid duplicate ads
    if (isLoaded.current) return;

    try {
      // Check if adsbygoogle is available
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
        isLoaded.current = true;
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5346330673646871"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdUnit;

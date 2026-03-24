// AdSense Configuration - Easy to manage all your ads in one place
// Replace placeholder ad slot IDs with your actual AdSense ad slot IDs

export const AD_CONFIG = {
  // Your AdSense Publisher ID
  PUBLISHER_ID: 'ca-pub-2320541206058096',
  
  // Ad Slots by Page Type
  AD_SLOTS: {
    // Spelling pages (e.g., /spelling/adapt-vs-addapt)
    spelling: {
      top_banner: '9700413896',      // Replace with real slot ID
      in_content_1: '4752173699',    // Replace with real slot ID
      in_content_2: '7515187964',    // Replace with real slot ID
      bottom_banner: '7653152285'    // Replace with real slot ID
    },
    
    // Grammar pages (e.g., /grammar/nouns)
    grammar: {
      top_banner: '9700413896',      // Replace with real slot ID
      in_content_1: '4752173699',    // Replace with real slot ID
      in_content_2: '7515187964',    // Replace with real slot ID
      bottom_banner: '7653152285'    // Replace with real slot ID
    },
    
    // Blog pages
    blog: {
      top_banner: '9700413896',      // Replace with real slot ID
      in_content_1: '4752173699',    // Replace with real slot ID
      in_content_2: '7515187964',    // Replace with real slot ID
      bottom_banner: '7653152285'    // Replace with real slot ID
    },
    
    // Confusing words pages
    'confusing-words': {
      top_banner: '9700413896',      // Replace with real slot ID
      in_content_1: '4752173699',    // Replace with real slot ID
      in_content_2: '7515187964',    // Replace with real slot ID
      bottom_banner: '7653152285'    // Replace with real slot ID
    },
    
    // Tool pages (word finder, scrabble, etc.)
    tool: {
      top_banner: '9700413896',      // Replace with real slot ID
      in_content_1: '4752173699',    // Replace with real slot ID
      in_content_2: '7515187964',    // Replace with real slot ID
      bottom_banner: '7653152285'    // Replace with real slot ID
    },
    
    // Static pages (about, contact, etc.)
    static: {
      top_banner: '9700413896',      // Replace with real slot ID
      bottom_banner: '7653152285'    // Replace with real slot ID
    },
    
    // General/fallback
    general: {
      top_banner: '9700413896',      // Replace with real slot ID
      in_content_1: '4752173699',    // Replace with real slot ID
      bottom_banner: '7653152285'    // Replace with real slot ID
    }
  },
  
  // Ad Placement Settings
  PLACEMENT: {
    // Maximum ads per page
    max_ads_per_page: 4,
    
    // Minimum content length before showing ads
    min_content_length: 50,
    
    // Delay before inserting ads (milliseconds)
    insertion_delay: 500,
    
    // Ad spacing (minimum paragraphs between ads)
    min_paragraphs_between_ads: 5,
    
    // Enable/disable specific ad types
    enable_top_banner: true,
    enable_in_content: true,
    enable_bottom_banner: true,
    enable_sidebar: false
  },
  
  // Responsive Settings
  RESPONSIVE: {
    // Mobile ad adjustments
    mobile_max_width: '100%',
    mobile_margin: '1rem',
    
    // Desktop ad adjustments
    desktop_max_width: '100%',
    desktop_margin: '2rem'
  }
};

// Helper functions
export function getAdSlots(pageType: string) {
  return AD_CONFIG.AD_SLOTS[pageType as keyof typeof AD_CONFIG.AD_SLOTS] || AD_CONFIG.AD_SLOTS.general;
}

export function getAdSlot(pageType: string, adType: string) {
  const slots = getAdSlots(pageType);
  return slots[adType as keyof typeof slots] || slots.top_banner;
}

export function isAdEnabled(adType: string): boolean {
  const value = AD_CONFIG.PLACEMENT[`enable_${adType}` as keyof typeof AD_CONFIG.PLACEMENT];
  return typeof value === 'boolean' ? value : false;
}

export function getPlacementSettings() {
  return AD_CONFIG.PLACEMENT;
}

export function getResponsiveSettings() {
  return AD_CONFIG.RESPONSIVE;
}

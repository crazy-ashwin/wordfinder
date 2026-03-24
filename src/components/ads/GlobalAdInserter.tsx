'use client';

import { useEffect } from 'react';
import { AD_CONFIG, getAdSlots, isAdEnabled } from '@/lib/adConfig';

// Global Ad Inserter - Works like WordPress Ad Inserter Plugin
// This component automatically inserts ads on ALL pages without manual configuration

export function GlobalAdInserter() {
  const insertAdsGlobally = () => {
    // Get all pages automatically
    const pages = document.querySelectorAll('main, article, .content, [role="main"]');
    
    pages.forEach((page) => {
      if (page && !page.hasAttribute('data-ads-inserted')) {
        insertAdsOnPage(page as HTMLElement);
        page.setAttribute('data-ads-inserted', 'true');
      }
    });
  };

  useEffect(() => {
    // Wait for page to load completely
    const timer = setTimeout(() => {
      insertAdsGlobally();
    }, AD_CONFIG.PLACEMENT.insertion_delay);

    return () => clearTimeout(timer);
  }, [insertAdsGlobally]);

  const insertAdsOnPage = (pageElement: HTMLElement) => {
    // Get page type from URL
    const pageType = detectPageType();
    const adSlots = getAdSlotsForPage(pageType);
    
    // Insert top banner ad if enabled
    if (isAdEnabled('top_banner')) {
      insertBannerAd(pageElement, adSlots[0], 'top');
    }
    
    // Find content sections and insert ads
    const contentSections = findContentSections(pageElement);
    if (isAdEnabled('in_content')) {
      insertInContentAds(contentSections, adSlots);
    }
    
    // Insert bottom banner ad if enabled
    if (isAdEnabled('bottom_banner')) {
      insertBannerAd(pageElement, adSlots[adSlots.length - 1], 'bottom');
    }
  };

  const detectPageType = (): string => {
    const path = window.location.pathname;
    
    if (path.includes('/spelling/')) return 'spelling';
    if (path.includes('/grammar/')) return 'grammar';
    if (path.includes('/blog/')) return 'blog';
    if (path.includes('/confusing-words/')) return 'confusing-words';
    if (path.includes('/word-') || path.includes('/scrabble') || path.includes('/anagram')) return 'tool';
    if (path.includes('/about') || path.includes('/contact')) return 'static';
    
    return 'general';
  };

  const getAdSlotsForPage = (pageType: string): string[] => {
    const slots = getAdSlots(pageType);
    return Object.values(slots);
  };

  const findContentSections = (pageElement: HTMLElement): Element[] => {
    // Find all content sections (paragraphs, headings, content boxes)
    const selectors = [
      'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      '.bg-green-50', '.bg-yellow-50', '.bg-blue-50',
      '.content-box', '.text-box', '.info-box',
      'div[class*="bg-"]', 'section', 'article'
    ];
    
    const contentElements: Element[] = [];
    selectors.forEach(selector => {
      const elements = pageElement.querySelectorAll(selector);
      elements.forEach(el => {
        if (el.textContent && el.textContent.trim().length > AD_CONFIG.PLACEMENT.min_content_length) {
          contentElements.push(el);
        }
      });
    });
    
    return contentElements;
  };

  const insertInContentAds = (contentElements: Element[], adSlots: string[]) => {
    if (contentElements.length === 0) return;
    
    // Calculate optimal ad placement
    const totalElements = contentElements.length;
    const adCount = Math.min(Math.floor(totalElements / AD_CONFIG.PLACEMENT.min_paragraphs_between_ads), AD_CONFIG.PLACEMENT.max_ads_per_page);
    
    for (let i = 0; i < adCount; i++) {
      const insertIndex = Math.floor((i + 1) * (totalElements / (adCount + 1)));
      if (contentElements[insertIndex]) {
        const adSlot = adSlots[(i + 1) % adSlots.length];
        insertInContentAd(contentElements[insertIndex], adSlot);
      }
    }
  };

  const insertBannerAd = (container: HTMLElement, adSlot: string, position: 'top' | 'bottom') => {
    const adDiv = document.createElement('div');
    adDiv.className = `ad-container ${position === 'top' ? 'mb-8' : 'mt-8'}`;
    adDiv.innerHTML = `
      <ins class="adsbygoogle" 
           style="display:block" 
           data-ad-client="${AD_CONFIG.PUBLISHER_ID}" 
           data-ad-slot="${adSlot}" 
           data-ad-format="auto" 
           data-full-width-responsive="true"></ins>
    `;
    
    if (position === 'top') {
      container.insertBefore(adDiv, container.firstChild);
    } else {
      container.appendChild(adDiv);
    }
    
    // Trigger AdSense
    setTimeout(() => {
      try {
        // @ts-expect-error - AdSense global variable
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }, 200);
  };

  const insertInContentAd = (element: Element, adSlot: string) => {
    const adDiv = document.createElement('div');
    adDiv.className = 'ad-in-content my-8';
    adDiv.innerHTML = `
      <ins class="adsbygoogle" 
           style="display:block;text-align:center;" 
           data-ad-client="${AD_CONFIG.PUBLISHER_ID}" 
           data-ad-slot="${adSlot}" 
           data-ad-format="auto" 
           data-full-width-responsive="true"></ins>
    `;
    
    element.after(adDiv);
    
    // Trigger AdSense
    setTimeout(() => {
      try {
        // @ts-expect-error - AdSense global variable
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }, 200);
  };

  // This component doesn't render anything visible
  return null;
}

'use client';

import { useState } from 'react';
import { AD_CONFIG } from '@/lib/adConfig';

export default function AdAdminPage() {
  const [config, setConfig] = useState(AD_CONFIG);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // In a real app, you'd save this to a database or config file
    localStorage.setItem('adConfig', JSON.stringify(config));
    setIsEditing(false);
    alert('Ad configuration saved! (Note: This saves to localStorage for demo purposes)');
  };

  const handleReset = () => {
    setConfig(AD_CONFIG);
    setIsEditing(false);
  };

  const updateAdSlot = (pageType: string, adType: string, value: string) => {
    setConfig(prev => ({
      ...prev,
      AD_SLOTS: {
        ...prev.AD_SLOTS,
        [pageType]: {
          ...prev.AD_SLOTS[pageType as keyof typeof prev.AD_SLOTS],
          [adType]: value
        }
      }
    }));
  };

  const updatePlacement = (key: string, value: boolean | number) => {
    setConfig(prev => ({
      ...prev,
      PLACEMENT: {
        ...prev.PLACEMENT,
        [key]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">AdSense Management Panel</h1>
            <div className="space-x-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Edit Configuration
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Publisher ID */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Publisher ID</h2>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-mono text-blue-800">{config.PUBLISHER_ID}</span>
              <span className="text-sm text-blue-600">(Configured in code)</span>
            </div>
          </div>

          {/* Ad Slots Configuration */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ad Slot Configuration</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(config.AD_SLOTS).map(([pageType, slots]) => (
                <div key={pageType} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                    {pageType.replace('-', ' ')} Pages
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(slots).map(([adType, slotId]) => (
                      <div key={adType} className="flex items-center space-x-3">
                        <label className="text-sm font-medium text-gray-700 min-w-[120px] capitalize">
                          {adType.replace('_', ' ')}:
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={slotId}
                            onChange={(e) => updateAdSlot(pageType, adType, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter ad slot ID"
                          />
                        ) : (
                          <span className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-md font-mono text-sm">
                            {slotId}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ad Placement Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Max ads per page:</label>
                    {isEditing ? (
                      <input
                        type="number"
                        value={config.PLACEMENT.max_ads_per_page}
                        onChange={(e) => updatePlacement('max_ads_per_page', parseInt(e.target.value))}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        min="1"
                        max="6"
                      />
                    ) : (
                      <span className="text-lg font-semibold">{config.PLACEMENT.max_ads_per_page}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Min content length:</label>
                    {isEditing ? (
                      <input
                        type="number"
                        value={config.PLACEMENT.min_content_length}
                        onChange={(e) => updatePlacement('min_content_length', parseInt(e.target.value))}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        min="10"
                        max="200"
                      />
                    ) : (
                      <span className="text-lg font-semibold">{config.PLACEMENT.min_content_length}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Insertion delay (ms):</label>
                    {isEditing ? (
                      <input
                        type="number"
                        value={config.PLACEMENT.insertion_delay}
                        onChange={(e) => updatePlacement('insertion_delay', parseInt(e.target.value))}
                        className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        min="500"
                        max="3000"
                        step="100"
                      />
                    ) : (
                      <span className="text-lg font-semibold">{config.PLACEMENT.insertion_delay}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Types</h3>
                <div className="space-y-4">
                  {Object.entries(config.PLACEMENT).filter(([key]) => key.startsWith('enable_')).map(([key, enabled]) => (
                    <div key={key} className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700 capitalize">
                        {key.replace('enable_', '')} ads:
                      </label>
                      {isEditing ? (
                        <input
                          type="checkbox"
                          checked={enabled as boolean}
                          onChange={(e) => updatePlacement(key, e.target.checked)}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      ) : (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {enabled ? 'Enabled' : 'Disabled'}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Important Notes:</h3>
            <ul className="text-yellow-800 space-y-2">
              <li>• Replace all placeholder ad slot IDs with your actual AdSense ad slot IDs</li>
              <li>• Ad slot IDs should be in format: ca-pub-XXXXX:YYYYYYYY</li>
              <li>• Test your ads on production environment</li>
              <li>• Monitor AdSense dashboard for performance</li>
              <li>• Ensure compliance with AdSense policies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

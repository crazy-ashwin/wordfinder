'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Copy, RotateCcw, Code, Lock, Globe, Sparkles, Zap, Shield } from 'lucide-react';

export default function EncodeDecodePage() {
  // Get initial tab from URL or default to 'escape'
  const [activeTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('tab') || 'escape';
    }
    return 'escape';
  });
  
  const [escapeInput, setEscapeInput] = useState('');
  const [escapeOutput, setEscapeOutput] = useState('');
  const [encodeInput, setEncodeInput] = useState('');
  const [encodeOutput, setEncodeOutput] = useState('');
  const [codeKey, setCodeKey] = useState('1');
  const [htmlInput, setHtmlInput] = useState('');
  const [htmlOutput, setHtmlOutput] = useState('');

  // Escape/Unescape functions
  const escapeText = (text: string) => {
    return text.split('').map(char => {
      const code = char.charCodeAt(0);
      return `%${code.toString(16).padStart(2, '0')}`;
    }).join('');
  };

  const unescapeText = (text: string) => {
    try {
      return decodeURIComponent(text);
    } catch {
      return 'Invalid escaped text';
    }
  };

  // Auto-decode when pasting in escaped box
  const handleEscapeOutputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEscapeOutput(value);
    // Removed automatic decoding - only convert when button is clicked
  };

  // Auto-encode when pasting in normal box
  const handleEscapeInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEscapeInput(value);
    // Removed automatic encoding - only convert when button is clicked
  };

  // Encode/Decode functions
  const encodeText = (text: string, key: number) => {
    return text.split('').map(char => {
      const code = char.charCodeAt(0);
      const encoded = code + key;
      return `%${encoded.toString(16).padStart(2, '0')}`;
    }).join('');
  };

  const decodeText = (text: string, key: number) => {
    try {
      const hexCodes = text.match(/%[0-9a-fA-F]{2}/g) || [];
      return hexCodes.map(hex => {
        const code = parseInt(hex.slice(1), 16);
        const decoded = code - key;
        return String.fromCharCode(decoded);
      }).join('');
    } catch {
      return 'Invalid encoded text';
    }
  };

  // Auto-decode when pasting in encoded box
  const handleEncodeOutputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEncodeOutput(value);
    // Removed automatic decoding - only convert when button is clicked
  };

  // Auto-encode when pasting in normal box
  const handleEncodeInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setEncodeInput(value);
    // Removed automatic encoding - only convert when button is clicked
  };

  // HTML Page Encoder
  const encodeHtmlPage = (html: string, key: number) => {
    const encoded = encodeText(html, key);
    const decoderFunction = `
function dF(s){
  var s1=unescape(s.substr(0,s.length-1)); var t='';
  for(i=0;i<s1.length;i++)t+=String.fromCharCode(s1.charCodeAt(i)-s.substr(s.length-1,1));
  document.write(unescape(t));
}`;
    
    const escapedDecoder = escapeText(decoderFunction);
    return `<script language="javascript">
document.write(unescape('${escapedDecoder}'));
dF('${encoded}');
</script>`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const clearInputs = () => {
    setEscapeInput('');
    setEscapeOutput('');
    setEncodeInput('');
    setEncodeOutput('');
    setHtmlInput('');
    setHtmlOutput('');
    // Reload the page with current tab to ensure fresh state
    window.location.href = `?tab=${activeTab}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Encode/Decode Tools
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced HTML, text, and JavaScript encoding/decoding utilities for protecting your source code with military-grade obfuscation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16 max-w-7xl overflow-x-hidden">
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <button
            onClick={() => {
              window.location.href = '?tab=escape';
            }}
            className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'escape'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Globe className="w-5 h-5" />
            Escape/Unescape
          </button>
          <button
            onClick={() => {
              window.location.href = '?tab=encode';
            }}
            className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'encode'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Lock className="w-5 h-5" />
            Encode/Decode
          </button>
          <button
            onClick={() => {
              window.location.href = '?tab=html';
            }}
            className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'html'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Shield className="w-5 h-5" />
            HTML Page Encoder
          </button>
        </div>

        {/* Escape/Unescape Tab */}
        {activeTab === 'escape' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">Text/HTML/JavaScript Escaping</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Escape any text, HTML, or JavaScript to make it unreadable to common users. 
                  Uses URL escape codes (two-character hexadecimal values preceded by %).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      Normal Text/HTML/JavaScript
                    </label>
                    <Textarea
                      value={escapeInput}
                      onChange={handleEscapeInputChange}
                      placeholder="Enter text, HTML, or JavaScript to escape..."
                      className="min-h-[250px] bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-400" />
                      Escaped Text/HTML/JavaScript
                    </label>
                    <Textarea
                      value={escapeOutput}
                      onChange={handleEscapeOutputChange}
                      placeholder="Enter escaped text or paste here to unescape..."
                      className="min-h-[250px] bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    onClick={() => setEscapeOutput(escapeText(escapeInput))}
                    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Escape
                  </Button>
                  <Button 
                    onClick={() => setEscapeInput(unescapeText(escapeOutput))}
                    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Unescape
                  </Button>
                  <Button 
                    onClick={() => copyToClipboard(escapeOutput)}
                    variant="secondary"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Right
                  </Button>
                  <Button 
                    onClick={() => copyToClipboard(escapeInput)}
                    variant="secondary"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Left
                  </Button>
                </div>
                
                {/* Reset button below the action buttons */}
                <div className="flex justify-center mt-4">
                  <Button 
                    onClick={clearInputs}
                    variant="outline"
                    className="flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Encode/Decode Tab */}
        {activeTab === 'encode' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-4 shadow-lg">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">Text/HTML/JavaScript Encoding/Decoding</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Encode text by shifting Unicode values to make it look like gibberish. 
                  This method shifts characters by adding a code key value to each Unicode value.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <label className="text-lg font-semibold text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-400" />
                    Code Key:
                  </label>
                  <Select value={codeKey} onValueChange={setCodeKey}>
                    <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/20">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <SelectItem key={num} value={num.toString()} className="text-white hover:bg-white/10">
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-gray-300 text-sm">
                    Higher values create more complex encoding
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-400" />
                      Normal Text/HTML/JavaScript
                    </label>
                    <Textarea
                      value={encodeInput}
                      onChange={handleEncodeInputChange}
                      placeholder="Enter text, HTML, or JavaScript to encode..."
                      className="min-h-[250px] bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20 resize-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-red-400" />
                      Encoded Text/HTML/JavaScript
                    </label>
                    <Textarea
                      value={encodeOutput}
                      onChange={handleEncodeOutputChange}
                      placeholder="Enter encoded text or paste here to decode..."
                      className="min-h-[250px] bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 resize-none"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    onClick={() => setEncodeOutput(encodeText(encodeInput, parseInt(codeKey)))}
                    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Encode
                  </Button>
                  <Button 
                    onClick={() => setEncodeInput(decodeText(encodeOutput, parseInt(codeKey)))}
                    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Decode
                  </Button>
                  <Button 
                    onClick={() => copyToClipboard(encodeOutput)}
                    variant="secondary"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Right
                  </Button>
                  <Button 
                    onClick={() => copyToClipboard(encodeInput)}
                    variant="secondary"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Left
                  </Button>
                </div>
                
                {/* Reset button below the action buttons */}
                <div className="flex justify-center mt-4">
                  <Button 
                    onClick={clearInputs}
                    variant="outline"
                    className="flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* HTML Page Encoder Tab */}
        {activeTab === 'html' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">HTML Page Encoder</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Encode your entire HTML page with a decoder function. 
                  This creates a complete encoded page that can be saved as an HTML file.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <label className="text-lg font-semibold text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-indigo-400" />
                    Code Key:
                  </label>
                  <Select value={codeKey} onValueChange={setCodeKey}>
                    <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/20">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <SelectItem key={num} value={num.toString()} className="text-white hover:bg-white/10">
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-white flex items-center gap-2">
                      <Code className="w-5 h-5 text-indigo-400" />
                      HTML Source Code
                    </label>
                    <Textarea
                      value={htmlInput}
                      onChange={(e) => setHtmlInput(e.target.value)}
                      placeholder="Paste your HTML source code here..."
                      className="min-h-[300px] bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-lg font-semibold text-white flex items-center gap-2">
                      <Lock className="w-5 h-5 text-purple-400" />
                      Encoded HTML Page
                    </label>
                    <Textarea
                      value={htmlOutput}
                      onChange={(e) => setHtmlOutput(e.target.value)}
                      placeholder="Encoded HTML page will appear here..."
                      className="min-h-[300px] bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                      readOnly
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    onClick={() => setHtmlOutput(encodeHtmlPage(htmlInput, parseInt(codeKey)))}
                    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Encode Page
                  </Button>
                  <Button 
                    onClick={() => copyToClipboard(htmlOutput)}
                    variant="secondary"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </Button>
                </div>
                
                {/* Reset button below the action buttons */}
                <div className="flex justify-center mt-4">
                  <Button 
                    onClick={clearInputs}
                    variant="outline"
                    className="flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Instructions */}
        <Card className="mt-12 bg-white/5 backdrop-blur-sm border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              How to Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20">
                <h3 className="font-semibold text-lg text-white mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Escape/Unescape
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Use this to hide email addresses or simple text from web crawlers. The escaped text can be used directly with the browser&apos;s built-in unescape() function.
                </p>
                <code className="text-xs bg-black/30 p-3 block rounded-lg text-blue-300 border border-blue-500/20 break-all">
                  document.write(unescape(&apos;%65%78%61%6D%70%6C%65%40%65%6D%61%69%6C%2E%63%6F%6D&apos;));
                </code>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-xl border border-orange-500/20">
                <h3 className="font-semibold text-lg text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-orange-400" />
                  Encode/Decode
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  This method shifts Unicode values by adding a code key, making text much harder to read. Use different code keys for different levels of obfuscation.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-xl border border-indigo-500/20">
                <h3 className="font-semibold text-lg text-white mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-400" />
                  HTML Page Encoder
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Creates a complete encoded HTML page with a built-in decoder function. Copy the output and save it as an HTML file - it will display your original content when opened in a browser.
                </p>
              </div>
            </div>
            

          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Disclaimer</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>General Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                The information provided by Find Word Finder (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on this website is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Accuracy of Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                While we strive to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>External Links Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                This website may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>No Professional Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                The information provided on this website is not intended as, and shall not be understood or construed as, professional advice. You should consult with an appropriate professional before taking any actions based upon such information.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Changes to This Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                We may update this disclaimer from time to time. We will notify you of any changes by posting the new disclaimer on this page and updating the &quot;Last Updated&quot; date below.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                If you have any questions about this disclaimer, please contact us at disclaimer@findwordfinder.com or through our contact form.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Last Updated: June 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

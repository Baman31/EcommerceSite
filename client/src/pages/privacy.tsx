export default function Privacy() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-8" data-testid="privacy-title">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none" data-testid="privacy-content">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Last updated: September 22, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase, 
                or contact us for support. This may include your name, email address, phone number, shipping address, 
                and payment information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your account or transactions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Detect and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information Sharing</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except as 
                described in this policy. We may share information with trusted service providers who assist us in 
                operating our website, conducting our business, or serving our users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to access, update, or delete your personal information. You may also opt out of 
                receiving marketing communications from us at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at privacy@elitecommerce.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
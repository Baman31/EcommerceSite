export default function Terms() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-8" data-testid="terms-title">
            Terms of Service
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none" data-testid="terms-content">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Last updated: September 22, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By accessing and using EliteCommerce, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use License</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of the materials on EliteCommerce's website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Product Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We strive to ensure that product information is accurate. However, we do not warrant that product 
                descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Pricing and Payment</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                All prices are subject to change without notice. We reserve the right to refuse or cancel orders 
                for any reason. Payment must be received prior to order fulfillment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In no event shall EliteCommerce or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                the use or inability to use the materials on EliteCommerce's website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws and you 
                irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms of Service, please contact us at legal@elitecommerce.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
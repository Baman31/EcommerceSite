export default function Cookies() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-8" data-testid="cookies-title">
            Cookie Policy
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none" data-testid="cookies-content">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Last updated: September 22, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They allow the website to remember your actions and preferences over a period of time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Session Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  These cookies are temporary and are deleted when you close your browser. They help maintain your 
                  session while browsing our website.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Persistent Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  These cookies remain on your device for a set period or until you delete them. They help us 
                  remember your preferences for future visits.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Third-Party Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may use third-party services that place cookies on your device. These include analytics 
                  and advertising services.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You can control and manage cookies in your browser settings. You can choose to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Delete all cookies from your browser</li>
                <li>Block cookies from being set</li>
                <li>Allow cookies only from specific websites</li>
                <li>Be notified when a cookie is set</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about our use of cookies, please contact us at cookies@elitecommerce.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function SupportPage() {
  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">When to Contact Support</h2>
        <p className="text-gray-700 whitespace-pre-line">
          Please contact support if you encounter technical issues, have questions about using the application, experience problems with your account, or need assistance with features. We are here to help ensure you have the best experience possible.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to Reach Us</h2>
        <p className="text-gray-700 whitespace-pre-line">
          For support, please email us at:
          <br />
          <a href="mailto:family-manager.work@gmail.com" className="text-blue-600 underline">family-manager.work@gmail.com</a>
        </p>
      </section>
    </main>
  );
}

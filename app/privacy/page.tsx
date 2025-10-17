import { useMemo } from "react";

export default function PrivacyPage() {
  const sections = useMemo(
    () => [
      {
        key: "intro",
        title: "Privacy Policy",
        body:
          "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the application. Please read this policy carefully.",
      },
      {
        key: "collection",
        title: "1. Data Collection",
        body:
          "We may collect personal information that you voluntarily provide when registering or using certain features. This may include name, email, usage data and device information.",
      },
      {
        key: "usage",
        title: "2. How We Use Data",
        body:
          "Collected data is used to operate core features, improve user experience, personalize content, provide support, enhance security and comply with legal obligations.",
      },
      {
        key: "sharing",
        title: "3. Data Sharing",
        body:
          "We do not sell your personal information. We may share limited data with service providers strictly for app functionality (e.g. analytics, crash reporting) under confidentiality obligations.",
      },
      {
        key: "security",
        title: "4. Security",
        body:
          "We implement reasonable technical and organizational measures to protect data; however, no method of transmission or storage is 100% secure. Users are encouraged to use strong credentials and keep them confidential.",
      },
      {
        key: "rights",
        title: "5. Your Rights",
        body:
          "Depending on jurisdiction, you may have rights to access, correct, delete or restrict certain processing of your personal data. Contact support for requests.",
      },
      {
        key: "changes",
        title: "6. Changes to This Policy",
        body:
          "We may update this policy periodically. Material changes will be communicated through in-app notifications or version notes. Continued use after changes constitutes acceptance.",
      },
      {
        key: "contact",
        title: "7. Contact",
        body:
          "If you have questions or concerns about this policy, please contact us via the support section inside the application.",
      },
    ],
    []
  );

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{sections[0].title}</h1>
      {sections.map((section) => (
        <section key={section.key} className="mb-6">
          {section.key !== "intro" && (
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          )}
          <p className="text-gray-700 whitespace-pre-line">{section.body}</p>
        </section>
      ))}
    </main>
  );
}

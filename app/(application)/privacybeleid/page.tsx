import { Metadata } from "next";
import { PageHero } from "@/components/app/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          Livora Property Management Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects
          your privacy and is committed to protecting your personal data. This
          privacy policy will inform you how we collect, use, and protect your
          personal information when you visit our website, engage our services,
          or interact with us in any way.
        </p>
        <p>
          By using our services, you agree to the terms of this privacy policy.
          We encourage you to read this document carefully to understand our
          practices regarding your personal data.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>We collect several categories of information for various purposes:</p>
        <ul>
          <li>
            <strong>Personal Identification Data:</strong> Name, email address,
            phone number, postal address, and other contact details you provide
            when you contact us, submit an inquiry, or become a client.
          </li>
          <li>
            <strong>Property Information:</strong> Details about properties you
            own, manage, or are interested in, including photographs,
            valuations, and transaction history.
          </li>
          <li>
            <strong>Financial Data:</strong> Payment and billing information
            necessary for the provision of our services.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, operating
            system, and other technical information collected automatically
            through cookies and similar technologies.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use our
            website, including pages visited, time spent, and navigation paths.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            To provide, maintain, and improve our property management services.
          </li>
          <li>
            To communicate with you, respond to your inquiries, and provide
            customer support.
          </li>
          <li>
            To send you marketing communications, where permitted by law, and to
            keep you informed about our services and industry developments.
          </li>
          <li>
            To process payments and manage billing for services rendered.
          </li>
          <li>
            To comply with our legal obligations and regulatory requirements.
          </li>
          <li>
            To protect the security and integrity of our services and website.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Legal Basis for Processing",
    content: (
      <>
        <p>
          We process your personal data based on the following legal grounds:
        </p>
        <ul>
          <li>
            <strong>Contract Performance:</strong> Processing is necessary to
            perform our contractual obligations to you as our client.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Processing is necessary for
            our legitimate interests in providing and improving our services,
            and in communicating with our clients.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Processing is necessary to
            comply with applicable laws and regulations, including tax and
            accounting requirements.
          </li>
          <li>
            <strong>Consent:</strong> Where required, we obtain your explicit
            consent before processing your personal data for marketing
            purposes.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this privacy policy, unless a longer
          retention period is required or permitted by law. This typically
          includes:
        </p>
        <ul>
          <li>
            Client relationship data: As long as you remain our client, plus a
            minimum of 7 years thereafter for legal and tax compliance.
          </li>
          <li>
            Website usage data: Up to 24 months from collection.
          </li>
          <li>
            Marketing preferences: Until you unsubscribe or request removal.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <>
        <p>
          Under applicable data protection laws, you have the right to:
        </p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to or restrict processing of your personal data.</li>
          <li>Request data portability in a structured, machine-readable format.</li>
          <li>Withdraw consent at any time.</li>
          <li>Lodge a complaint with a supervisory authority.</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the details in
          Section 9 below.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Sharing and Disclosure",
    content: (
      <>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties, except as described below:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Trusted third parties who assist
            us in operating our business, conducting our operations, or servicing
            you, provided they agree to keep your information confidential.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law, court
            order, or government authority, or to protect our rights, property,
            or safety, or that of others.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger,
            acquisition, or sale of assets, provided that the receiving party
            agrees to respect the confidentiality of your personal data.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Our website uses cookies and similar tracking technologies to enhance
          your browsing experience and to understand how our website is used.
          You may refuse to accept cookies by adjusting your browser settings,
          though this may affect your ability to use certain features of our
          website.
        </p>
      </>
    ),
  },
  {
    title: "9. Contact Us",
    content: (
      <>
        <p>
          If you have any questions about this privacy policy or wish to
          exercise your rights, please contact us at:
        </p>
        <p className="mt-2">
          Email: privacy@livora.nl
          <br />
          Phone: +31 30 123 4567
          <br />
          Address: Herenstraat 14, 3512 KB Utrecht, Netherlands
        </p>
        <p className="mt-4">
          This privacy policy was last updated on September 5, 2026.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <PageHero
        badge="Privacy Policy"
        title="Your privacy is our priority."
        description="We are committed to protecting your personal information and being transparent about how we use it."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="divide-y divide-border">
            {sections.map((section) => (
              <div key={section.title} className="py-10">
                <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            This document was last updated on September 5, 2026.
          </p>
        </div>
      </section>
    </main>
  );
}

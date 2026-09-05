import { Metadata } from "next";
import { PageHero } from "@/components/app/page-hero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the
          livora.nl website and all services provided by Livora Property
          Management Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing our website,
          engaging our services, or otherwise interacting with us, you agree to
          be bound by these Terms. If you do not agree to all of the terms and
          conditions, you may not use our services.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. Any changes
          will be posted on our website with an updated effective date. Your
          continued use of our services after any changes constitutes acceptance
          of the revised Terms.
        </p>
      </>
    ),
  },
  {
    title: "2. Services",
    content: (
      <>
        <p>
          Livora Property Management Limited provides property management,
          brokerage, valuation, and advisory services for residential and
          commercial properties. We act as an agent for our clients unless
          otherwise agreed in writing.
        </p>
        <p>
          Our services include but are not limited to: property listings,
          tenant placement and management, maintenance coordination, property
          valuations, sales and acquisition advisory, and related
          administrative services.
        </p>
        <p>
          We make no warranties, express or implied, regarding the suitability
          of any property for a particular purpose or the accuracy of any
          information provided, except as expressly set forth in our written
          agreements.
        </p>
      </>
    ),
  },
  {
    title: "3. Client Obligations",
    content: (
      <>
        <p>
          Clients are responsible for providing accurate and complete information
          in all communications with us. You agree to:
        </p>
        <ul>
          <li>Provide true, accurate, and complete information about yourself and your property.</li>
          <li>Maintain the confidentiality of any account credentials.</li>
          <li>Comply with all applicable laws and regulations.</li>
          <li>Not use our services for any unlawful purpose or in a manner that could damage, disable, or impair our services.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Fees and Payment",
    content: (
      <>
        <p>
          Our fees are set forth in the engagement agreement signed by both
          parties. Unless otherwise agreed in writing, fees are due upon receipt
          of invoice and are non-refundable. All payments are to be made in
          euros (EUR) unless otherwise specified.
        </p>
        <p>
          Additional costs, including but not limited to taxes, government fees,
          inspection costs, and third-party service fees, are the responsibility
          of the client unless otherwise stated.
        </p>
        <p>
          We reserve the right to suspend services for non-payment. In the event
          of a dispute regarding fees, both parties will attempt to resolve the
          matter in good faith before pursuing formal dispute resolution.
        </p>
      </>
    ),
  },
  {
    title: "5. Property Listings and Marketing",
    content: (
      <>
        <p>
          We make no warranties regarding the accuracy of property listings,
          descriptions, pricing, or availability provided by third parties. All
          information is subject to change without notice.
        </p>
        <p>
          Photographs and other media in our listings are provided for
          illustrative purposes only. Property dimensions, room sizes, and
          other specifications are approximate and should be verified by the
          client.
        </p>
        <p>
          We are not responsible for the accuracy of information provided by
          sellers, landlords, or other third parties, and we expressly
          disclaim liability for any errors or omissions in such information.
        </p>
      </>
    ),
  },
  {
    title: "6. Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by law, Livora Property Management
          Limited shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of data, profits,
          revenue, or business opportunities, whether direct or indirect, arising
          out of or in connection with your use of our services, even if we have
          been advised of the possibility of such damages.
        </p>
        <p>
          Our total liability for any claim arising under these Terms shall not
          exceed the amount paid by you for the specific service giving rise to
          the claim, or if no payment was made, €100.
        </p>
        <p>
          Nothing in these Terms excludes or limits our liability for death or
          personal injury resulting from our negligence, fraud, or fraudulent
          misrepresentation.
        </p>
      </>
    ),
  },
  {
    title: "7. Intellectual Property",
    content: (
      <>
        <p>
          All content on our website, including but not limited to text,
          graphics, logos, images, audio clips, data compilations, and software,
          is the property of Livora Property Management Limited or its licensors
          and is protected by international copyright, trademark, and other
          intellectual property laws.
        </p>
        <p>
          You may access our website content for personal, non-commercial use
          only. Any other use, including reproduction, modification,
          distribution, transmission, republication, display, or performance,
          is strictly prohibited.
        </p>
      </>
    ),
  },
  {
    title: "8. Governing Law and Dispute Resolution",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the Netherlands, without regard to its conflict of law principles.
        </p>
        <p>
          Any dispute arising out of or in connection with these Terms or the
          use of our services shall be resolved through good faith negotiations.
          If the dispute cannot be resolved through negotiation, both parties
          agree to submit to the exclusive jurisdiction of the competent courts
          in Utrecht, the Netherlands.
        </p>
      </>
    ),
  },
  {
    title: "9. Termination",
    content: (
      <>
        <p>
          Either party may terminate the client relationship at any time by
          providing written notice in accordance with the terms of the
          engagement agreement. Upon termination, all outstanding fees and
          charges become immediately due and payable.
        </p>
        <p>
          We reserve the right, without liability, to immediately terminate or
          suspend your access to our services if we determine, in our sole
          discretion, that you have breached these Terms or engaged in conduct
          that we believe is harmful to our interests or the interests of our
          clients.
        </p>
      </>
    ),
  },
  {
    title: "10. Contact Information",
    content: (
      <>
        <p>
          For questions regarding these Terms, please contact us at:
        </p>
        <p className="mt-2">
          Email: legal@livora.nl
          <br />
          Phone: +31 30 123 4567
          <br />
          Address: Herenstraat 14, 3512 KB Utrecht, Netherlands
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="bg-background">
      <PageHero
        badge="Terms & Conditions"
        title="The terms governing our relationship."
        description="Please read these terms carefully before engaging our services."
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
            These Terms and Conditions were last updated on September 5, 2026.
          </p>
        </div>
      </section>
    </main>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-8 bg-[#111111]">
        <div className="w-full max-w-4xl text-white">
          <br />
          <br />
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-300 mb-8">Effective Date: June 18, 2025</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              THESE TERMS OF SERVICE (the &quot;Agreement&quot;) GOVERN CUSTOMER&apos;S ACCESS TO
              AND USE OF THE SERVICE (AS DEFINED BELOW) PROVIDED BY PALACE, INC. (&quot;Lucid
              Spring&quot;). BY (A) PURCHASING ACCESS TO THE SERVICE THROUGH AN ONLINE ORDERING
              PROCESS THAT REFERENCES THIS AGREEMENT, (B) SIGNING UP FOR A FREE ACCESS PLAN THAT
              REFERENCES THIS AGREEMENT, OR (C) CLICKING A BOX INDICATING ACCEPTANCE, CUSTOMER
              AGREES TO BE BOUND BY THESE TERMS.
            </p>

            <p className="text-gray-300 mb-8">
              THE INDIVIDUAL ACCEPTING THIS AGREEMENT DOES SO ON BEHALF OF A COMPANY OR OTHER LEGAL
              ENTITY (&quot;Customer&quot;) AND REPRESENTS THAT THEY HAVE THE AUTHORITY TO BIND SUCH
              ENTITY. IF NOT, THEY MUST NOT ACCEPT THIS AGREEMENT OR USE THE SERVICE. CAPITALIZED
              TERMS HAVE THE DEFINITIONS SET FORTH HEREIN. THE PARTIES AGREE AS FOLLOWS:
            </p>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. The Service</h2>

              <h3 className="text-xl font-medium mb-3">1.1 Service Description</h3>
              <p className="text-gray-300 mb-4">
                Palace is a software platform that connects professionals to expert insights and
                structured knowledge, enabling faster and higher-quality research across industries
                (the &quot;Service&quot;). All content posted, uploaded, or stored by Users is
                considered a &quot;User Submission.&quot; Palace may also offer templates, support
                documents, or reference content (&quot;Palace Content&quot;). The underlying
                software code is proprietary and not provided to Customer.
              </p>

              <h3 className="text-xl font-medium mb-3">1.2 Customer&apos;s Subscription</h3>
              <p className="text-gray-300 mb-4">
                Customer may access the Service under a subscription, as outlined in one or more
                ordering screens (&quot;Order(s)&quot;). Use of the Service is for internal business
                purposes only by Customer-authorized users (&quot;Users&quot;).
              </p>

              <h3 className="text-xl font-medium mb-3">1.3 Ownership</h3>
              <p className="text-gray-300 mb-4">
                Palace retains all right, title, and interest in the Service, Software, Palace
                Content, documentation, and all related intellectual property (&quot;Palace
                Materials&quot;).
              </p>

              <h3 className="text-xl font-medium mb-3">1.4 Permissions</h3>
              <p className="text-gray-300 mb-4">
                User roles and permissions are configurable by Customer. Palace is not responsible
                for any misconfigured permissions.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Restrictions</h2>

              <h3 className="text-xl font-medium mb-3">2.1 Customer Responsibilities</h3>
              <p className="text-gray-300 mb-4">
                Customer is responsible for User behavior and access security unless compromised by
                vulnerabilities in the Service.
              </p>

              <h3 className="text-xl font-medium mb-3">2.2 Use Restrictions</h3>
              <p className="text-gray-300 mb-4">
                The Service may not be copied, reverse-engineered, sublicensed, modified, or used in
                violation of law or to build competing products.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Third-Party Applications</h2>
              <p className="text-gray-300 mb-4">
                The Service may integrate with third-party tools (e.g., GitHub, Slack). Palace
                disclaims responsibility for those tools. Customer is solely responsible for any
                data shared with such third-party applications.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment Obligations</h2>

              <h3 className="text-xl font-medium mb-3">4.1 Fees</h3>
              <p className="text-gray-300 mb-4">
                Customer agrees to pay fees as outlined in Orders. Fees are non-refundable.
              </p>

              <h3 className="text-xl font-medium mb-3">4.2 Payment</h3>
              <p className="text-gray-300 mb-4">
                Fees are charged via credit card or ACH by Palace or its third-party processor.
              </p>

              <h3 className="text-xl font-medium mb-3">4.3 Taxes</h3>
              <p className="text-gray-300 mb-4">
                Fees exclude taxes, which Customer must pay unless exempt.
              </p>

              <h3 className="text-xl font-medium mb-3">4.4 Failure to Pay</h3>
              <p className="text-gray-300 mb-4">
                Access may be suspended for nonpayment. Disputes must be submitted within 60 days of
                the billing statement.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Term and Termination</h2>

              <h3 className="text-xl font-medium mb-3">5.1 Term</h3>
              <p className="text-gray-300 mb-4">
                Subscriptions begin on the Subscription Start Date and continue for the duration
                outlined.
              </p>

              <h3 className="text-xl font-medium mb-3">5.2 Termination</h3>
              <p className="text-gray-300 mb-4">
                Either party may terminate for uncured material breach with 30 days&apos; notice.
              </p>

              <h3 className="text-xl font-medium mb-3">5.3 Post-Termination</h3>
              <p className="text-gray-300 mb-4">
                Palace may delete all Customer data after 30 days unless otherwise requested.
              </p>

              <h3 className="text-xl font-medium mb-3">5.4 Survival</h3>
              <p className="text-gray-300 mb-4">
                Sections relating to ownership, confidentiality, limitations of liability, and data
                survive termination.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-medium mb-3">6.1 Warranties</h3>
              <p className="text-gray-300 mb-4">
                Customer warrants that its submissions comply with applicable laws.
              </p>

              <h3 className="text-xl font-medium mb-3">6.2 Disclaimer</h3>
              <p className="text-gray-300 mb-4">
                THE SERVICE IS PROVIDED &quot;AS IS.&quot; PALACE DISCLAIMS ALL IMPLIED WARRANTIES,
                INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                PALACE WILL NOT BE LIABLE FOR INDIRECT OR CONSEQUENTIAL DAMAGES, LOST PROFITS, OR
                DAMAGES EXCEEDING THE FEES PAID IN THE PRECEDING TWELVE (12) MONTHS.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Confidentiality</h2>

              <h3 className="text-xl font-medium mb-3">8.1 Definition</h3>
              <p className="text-gray-300 mb-4">
                Confidential Information includes non-public business or technical information,
                including all Customer Submissions and Service features.
              </p>

              <h3 className="text-xl font-medium mb-3">8.2 Obligations</h3>
              <p className="text-gray-300 mb-4">
                Each party must protect the other&apos;s Confidential Information using reasonable
                care and may only use it to fulfill obligations under this Agreement.
              </p>

              <h3 className="text-xl font-medium mb-3">8.3 Legal Disclosure</h3>
              <p className="text-gray-300 mb-4">
                Required disclosures must be preceded by notice (unless legally prohibited).
              </p>

              <h3 className="text-xl font-medium mb-3">8.4 Feedback</h3>
              <p className="text-gray-300 mb-4">
                Palace may use Feedback provided by Customer to improve the Service, without
                restriction.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Data</h2>

              <h3 className="text-xl font-medium mb-3">9.1 User Information</h3>
              <p className="text-gray-300 mb-4">
                Customer grants Palace the right to store and process User Information (e.g.,
                emails, IPs) as necessary to operate the Service.
              </p>

              <h3 className="text-xl font-medium mb-3">9.2 User Submissions</h3>
              <p className="text-gray-300 mb-4">
                Customer retains ownership of submissions but grants Palace the right to use them
                solely to provide the Service.
              </p>

              <h3 className="text-xl font-medium mb-3">9.3 Service Data</h3>
              <p className="text-gray-300 mb-4">
                Palace may use anonymized and aggregated usage data for improvement and analytics.
              </p>

              <h3 className="text-xl font-medium mb-3">9.4 Security</h3>
              <p className="text-gray-300 mb-4">
                Palace employs reasonable security practices. Notwithstanding the foregoing,
                Customer is responsible for maintaining appropriate security, protection, and backup
                of its own hardware, software, systems, and Customer Data.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. General Terms</h2>

              <h3 className="text-xl font-medium mb-3">10.1 Publicity</h3>
              <p className="text-gray-300 mb-4">
                Palace may identify Customer and use Customer&apos;s name, logo, trademarks, or
                service marks on its website and marketing materials unless Customer opts out by
                written request.
              </p>

              <h3 className="text-xl font-medium mb-3">10.2 Force Majeure</h3>
              <p className="text-gray-300 mb-4">
                Neither party is liable for delays due to uncontrollable events.
              </p>

              <h3 className="text-xl font-medium mb-3">10.3 Service Changes</h3>
              <p className="text-gray-300 mb-4">
                Palace may update the Service but not materially reduce core features. Updates to
                these Terms require 30 days&apos; notice.
              </p>

              <h3 className="text-xl font-medium mb-3">10.4 Relationship</h3>
              <p className="text-gray-300 mb-4">The parties are independent contractors.</p>

              <h3 className="text-xl font-medium mb-3">10.5 No Third-Party Rights</h3>
              <p className="text-gray-300 mb-4">No third-party beneficiaries are intended.</p>

              <h3 className="text-xl font-medium mb-3">10.6 Notices</h3>
              <p className="text-gray-300 mb-4">
                Notices should be sent via email to{" "}
                <a
                  href="mailto:leeds@lucidspring.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  leeds@lucidspring.com
                </a>{" "}
                or provided through the Service.
              </p>

              <h3 className="text-xl font-medium mb-3">10.7 Amendment</h3>
              <p className="text-gray-300 mb-4">
                Changes must be in writing and accepted by both parties.
              </p>

              <h3 className="text-xl font-medium mb-3">10.8 Severability</h3>
              <p className="text-gray-300 mb-4">
                If any part of this Agreement is invalid, the rest remains in effect.
              </p>

              <h3 className="text-xl font-medium mb-3">10.9 Assignment</h3>
              <p className="text-gray-300 mb-4">
                Neither party may assign this Agreement without the other&apos;s written consent,
                except in a merger or sale.
              </p>

              <h3 className="text-xl font-medium mb-3">10.10 Governing Law</h3>
              <p className="text-gray-300 mb-4">
                Delaware law governs this Agreement. Disputes will be handled in New Castle County,
                Delaware courts. Jury trials are waived.
              </p>

              <h3 className="text-xl font-medium mb-3">10.11 Entire Agreement</h3>
              <p className="text-gray-300 mb-4">
                This Agreement, including Orders and referenced policies, is the full agreement
                between the parties.
              </p>
            </section>

            <hr className="border-gray-700 my-8" />

            <section className="mb-8">
              <p className="text-gray-300">
                To view this agreement online, visit:{" "}
                <a href="https://www.palace.so/terms" className="text-blue-400 hover:text-blue-300">
                  https://www.palace.so/terms
                </a>
              </p>
              <p className="text-gray-300">
                To view our privacy practices, visit:{" "}
                <a
                  href="https://www.palace.so/privacy"
                  className="text-blue-400 hover:text-blue-300"
                >
                  https://www.palace.so/privacy
                </a>
              </p>
              <p className="text-gray-300">
                For all inquiries, contact:{" "}
                <a href="mailto:support@palace.so" className="text-blue-400 hover:text-blue-300">
                  support@palace.so
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;

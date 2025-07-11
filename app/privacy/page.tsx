/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "@/components/Navbar";
import React from "react";
const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar navbarTheme="dark" />
      <div className="flex flex-col items-center min-h-screen p-8 bg-[#111111]">
        <div className="w-full max-w-4xl text-white">
          <br />
          <br />
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-300 mb-8">Effective date: 18th of February, 2025</p>

          <section className="mb-8">
            <p className="text-gray-300 mb-6">
              At Palace (&quot;Palace&quot;), we take your privacy seriously. Please read this
              Privacy Policy to learn how we treat your personal data. By using or accessing our
              Services in any manner, you acknowledge that you accept the practices and policies
              outlined below, and you hereby consent that we will collect, use and share your
              information as described in this Privacy Policy.
            </p>
            <p className="text-gray-300 mb-6">
              Remember that your use of Palace&apos;s Services is at all times subject to our Terms
              of Service. Any terms we use in this Policy without defining them have the definitions
              given to them in the Terms of Service.
            </p>
            <p className="text-gray-300 mb-6">
              If you have a disability, you may access this Privacy Policy in an alternative format
              by contacting{" "}
              <a href="mailto:leeds@lucidspring.com" className="text-blue-400 hover:text-blue-300">
                leeds@lucidspring.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy Table of Contents</h2>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>What this Privacy Policy Covers</li>
              <li>Personal Data</li>
              <li>Categories of Personal Data We Collect</li>
              <li>Categories of Sources of Personal Data</li>
              <li>Our Commercial or Business Purposes for Collecting Personal Data</li>
              <li>How We Share Your Personal Data</li>
              <li>Tracking Tools and Opt-Out</li>
              <li>Data Security and Retention</li>
              <li>Personal Data of Children</li>
              <li>Other State Law Privacy Rights</li>
              <li>European Union Data Subject Rights</li>
              <li>Changes to this Privacy Policy</li>
              <li>Contact Information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What this Privacy Policy Covers</h2>
            <p className="text-gray-300 mb-4">
              This Privacy Policy covers how we treat Personal Data that we gather when you access
              or use our Services. "Personal Data" means any information that identifies or relates
              to a particular individual and also includes information referred to as "personally
              identifiable information" or "personal information" under applicable data privacy
              laws, rules or regulations. This Privacy Policy does not cover the practices of
              companies we don't own or control or people we don't manage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Personal Data</h2>
            <h3 className="text-xl font-medium mb-3">Categories of Personal Data We Collect</h3>
            <p className="text-gray-300 mb-4">
              This list details the categories of Personal Data that we collect and have collected
              over the past 12 months:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Profile or Contact Data</h4>
                <p className="text-gray-300 mb-2">Examples of Personal Data We Collect:</p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                  <li>First and last name</li>
                  <li>Email</li>
                  <li>Date of birth</li>
                  <li>Physical address</li>
                  <li>Unique identifiers such as passwords</li>
                </ul>
                <p className="text-gray-300 mt-2">
                  Categories of Third Parties With Whom We Share this Personal Data:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                  <li>Service Providers</li>
                  <li>Parties You Authorize, Access or Authenticate</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Device/IP Data</h4>
                <p className="text-gray-300 mb-2">Examples of Personal Data We Collect:</p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                  <li>IP address</li>
                  <li>Device ID</li>
                  <li>Domain server</li>
                  <li>Type of device/operating system/browser used to access the Services</li>
                </ul>
                <p className="text-gray-300 mt-2">
                  Categories of Third Parties With Whom We Share this Personal Data:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                  <li>Service Providers</li>
                  <li>Parties You Authorize, Access or Authenticate</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Web Analytics</h4>
                <p className="text-gray-300 mb-2">Examples of Personal Data We Collect:</p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                  <li>Web page interactions</li>
                  <li>Referring webpage/source through which you accessed the Services</li>
                  <li>Non-identifiable request IDs</li>
                  <li>
                    Statistics associated with the interaction between device or browser and the
                    Services
                  </li>
                </ul>
                <p className="text-gray-300 mt-2">
                  Categories of Third Parties With Whom We Share this Personal Data:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                  <li>Service Providers</li>
                  <li>Parties You Authorize, Access or Authenticate</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Categories of Sources of Personal Data</h2>
            <p className="text-gray-300 mb-4">
              We collect Personal Data about you from the following categories of sources:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">You</h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>When you provide such information directly to us.</li>
                  <li>When you create an account or use our interactive tools and Services.</li>
                  <li>
                    When you voluntarily provide information in free-form text boxes through the
                    Services or through responses to surveys or questionnaires.
                  </li>
                  <li>When you send us an email or otherwise contact us.</li>
                  <li>
                    When you use the Services and such information is collected automatically.
                  </li>
                  <li>Through Cookies (as defined and described further below).</li>
                  <li>
                    If you download our mobile application or use a location-enabled browser, we may
                    receive information about your location and mobile device, as applicable.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Third Parties</h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Vendors</li>
                  <li>
                    We may use analytics providers to analyze how you interact and engage with the
                    Services, or third parties may help us provide you with customer support.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Our Commercial or Business Purposes for Collecting Personal Data
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Providing, Customizing and Improving the Services
                </h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Creating and managing your account or other user profiles.</li>
                  <li>Processing orders or other transactions; billing.</li>
                  <li>Providing you with the products, services or information you request.</li>
                  <li>Meeting or fulfilling the reason you provided the information to us.</li>
                  <li>Providing support and assistance for the Services.</li>
                  <li>
                    Improving the Services, including testing, research, internal analytics and
                    product development.
                  </li>
                  <li>
                    Personalizing the Services, website content and communications based on your
                    preferences.
                  </li>
                  <li>Doing fraud protection, security and debugging.</li>
                  <li>
                    Carrying out other business purposes stated when collecting your Personal Data
                    or as otherwise set forth in applicable data privacy laws.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Improving Our AI Models</h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>
                    We may use anonymized or aggregated user interactions, including user-provided
                    content and metadata, to train and improve our machine learning models. This may
                    include text inputs, usage patterns, and feedback submitted through the
                    platform. We do not use your data for model training without your explicit
                    consent, and we implement technical and organizational measures to protect your
                    data during this process.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Marketing the Services</h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Marketing and selling the Services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Corresponding with You</h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>
                    Responding to correspondence that we receive from you, contacting you when
                    necessary or requested, and sending you information about Palace or the
                    Services.
                  </li>
                  <li>
                    Sending emails and other communications according to your preferences or that
                    display content that we think will interest you.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  Meeting Legal Requirements and Enforcing Legal Terms
                </h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>
                    Fulfilling our legal obligations under applicable law, regulation, court order
                    or other legal process, such as preventing, detecting and investigating security
                    incidents and potentially illegal or prohibited activities.
                  </li>
                  <li>
                    Protecting the rights, property or safety of you, Palace or another party.
                  </li>
                  <li>Enforcing any agreements with you.</li>
                  <li>
                    Responding to claims that any posting or other content violates third-party
                    rights.
                  </li>
                  <li>Resolving disputes.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Share Your Personal Data</h2>
            <p className="text-gray-300 mb-4">
              We disclose your Personal Data to the categories of service providers and other
              parties listed in this section. Depending on state laws that may be applicable to you,
              some of these disclosures may constitute a "sale" of your Personal Data. For more
              information, please refer to the state-specific sections below.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Service Providers</h3>
                <p className="text-gray-300 mb-2">
                  These parties help us provide the Services or perform business functions on our
                  behalf. They include:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Hosting, technology and communication providers.</li>
                  <li>Security and fraud prevention consultants.</li>
                  <li>Analytics providers.</li>
                  <li>Support and customer service vendors.</li>
                  <li>Product fulfillment and delivery providers.</li>
                  <li>Payment processors.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Business Partners</h3>
                <p className="text-gray-300 mb-2">
                  These parties partner with us in offering various services. They include:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Businesses that you have a relationship with.</li>
                  <li>
                    Companies that we partner with to offer joint promotional offers or
                    opportunities.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  Parties You Authorize, Access or Authenticate
                </h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>Third parties you access through the services.</li>
                  <li>Social media services.</li>
                  <li>Other users.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tracking Tools and Opt-Out</h2>
            <p className="text-gray-300 mb-4">
              The Services use cookies and similar technologies such as pixel tags, web beacons,
              clear GIFs and JavaScript (collectively, &quot;Cookies&quot;) to enable our servers to
              recognize your web browser, tell us how and when you visit and use our Services,
              analyze trends, learn about our user base and operate and improve our Services.
              Cookies are small pieces of data– usually text files – placed on your computer,
              tablet, phone or similar device when you use that device to access our Services. We
              may also supplement the information we collect from you with information received from
              third parties, including third parties that have placed their own Cookies on your
              device(s). Please note that because of our use of Cookies, the Services do not support
              "Do Not Track" requests sent from a browser at this time.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">We use the following types of Cookies:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                  <li>
                    <strong>Essential Cookies.</strong> Essential Cookies are required for providing
                    you with features or services that you have requested. For example, certain
                    Cookies enable you to log into secure areas of our Services. Disabling these
                    Cookies may make certain features and services unavailable.
                  </li>
                  <li>
                    <strong>Functional Cookies.</strong> Functional Cookies are used to record your
                    choices and settings regarding our Services, maintain your preferences over time
                    and recognize you when you return to our Services. These Cookies help us to
                    personalize our content for you, greet you by name and remember your preferences
                    (for example, your choice of language or region).
                  </li>
                  <li>
                    <strong>Performance/Analytical Cookies.</strong> Performance/Analytical Cookies
                    allow us to understand how visitors use our Services. They do this by collecting
                    information about the number of visitors to the Services, what pages visitors
                    view on our Services and how long visitors are viewing pages on the Services.
                    Performance/Analytical Cookies also help us measure the performance of our
                    advertising campaigns in order to help us improve our campaigns and the
                    Services' content for those who engage with our advertising.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security and Retention</h2>
            <p className="text-gray-300 mb-4">
              We seek to protect your Personal Data from unauthorized access, use and disclosure
              using appropriate physical, technical, organizational and administrative security
              measures based on the type of Personal Data and how we are processing that data. You
              should also help protect your data by appropriately selecting and protecting your
              password and/or other sign-on mechanism; limiting access to your computer or device
              and browser; and signing off after you have finished accessing your account. Although
              we work to protect the security of your account and other data that we hold in our
              records, please be aware that no method of transmitting data over the internet or
              storing data is completely secure.
            </p>
            <p className="text-gray-300 mb-4">
              We retain Personal Data about you for as long as you have an open account with us or
              as otherwise necessary to provide you with our Services. In some cases we retain
              Personal Data for longer, if doing so is necessary to comply with our legal
              obligations, resolve disputes or collect fees owed, or is otherwise permitted or
              required by applicable law, rule or regulation. We may further retain information in
              an anonymous or aggregated form where that information would not identify you
              personally.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Personal Data of Children</h2>
            <p className="text-gray-300 mb-4">
              As noted in the Terms of Use, we do not knowingly collect or solicit Personal
              Information from anyone under the age of 13. If you are under 13, please do not
              attempt to register for the Services or send any Personal Information about yourself
              to us. If we learn that we have collected Personal Information from a child under age
              13, we will delete that information as quickly as possible. If you believe that a
              child under 13 may have provided us Personal Information, please contact us at{" "}
              <a href="mailto:leeds@lucidspring.com" className="text-blue-400 hover:text-blue-300">
                leeds@lucidspring.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We&apos;re constantly trying to improve our Services, so we may need to change this
              Privacy Policy from time to time, but we will alert you to any such changes by placing
              a notice on the Palace website, by sending you an email and/or by some other means.
              Please note that if you&apos;ve opted not to receive legal notice emails from us (or
              you haven&apos;t provided us with your email address), those legal notices will still
              govern your use of the Services, and you are still responsible for reading and
              understanding them. If you use the Services after any changes to the Privacy Policy
              have been posted, that means you agree to all of the changes. Use of information we
              collect is subject to the Privacy Policy in effect at the time such information is
              collected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or comments about this Privacy Policy, the ways in which we
              collect and use your Personal Data or your choices and rights regarding such
              collection and use, please do not hesitate to contact us at:
            </p>
            <p className="text-gray-300">
              Email:{" "}
              <a href="mailto:leeds@lucidspring.com" className="text-blue-400 hover:text-blue-300">
                leeds@lucidspring.com
              </a>
            </p>
          </section>

          <div className="mt-12 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">Last updated: March 18th, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

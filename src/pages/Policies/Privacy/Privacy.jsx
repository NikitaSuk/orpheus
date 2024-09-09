import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="terms-container p-6 font-sans leading-relaxed text-white-700 max-w-4xl mx-auto my-10">
      <h1 className="text-white-800 text-4xl font-bold mb-5 text-center">Privacy Policy - Updated 08/20/2024</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-3">Introduction</h2>
        <p className="mb-4">
          Welcome to CampusCollect, an online marketplace designed specifically for students. At CampusCollect, we value your privacy and 
          are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your 
          information when you visit our website and use our services. By accessing or using CampusCollect, you agree to the terms of this 
          Privacy Policy. If you do not agree with these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">1.1 Personal Information</h3>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us when you register on the site, make a purchase, subscribe to our newsletter, or engage in other activities, services, features, or resources we make available on our site. Personal information may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Mailing address</li>
          <li>Phone number</li>
          <li>Payment information (such as credit card details)</li>
          <li>Student identification information</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">1.2 Non-Personal Information</h3>
        <p className="mb-4">
          We may collect non-personal information about you whenever you interact with our site. Non-personal information may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Browser name</li>
          <li>Type of device and computer</li>
          <li>Technical information about your means of connection to our site, such as the operating system and Internet service providers</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">1.3 Usage Data</h3>
        <p className="mb-4">
          We may collect information on how you access and use our site, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Pages you visit</li>
          <li>Time and date of your visit</li>
          <li>Time spent on those pages</li>
          <li>Unique device identifiers</li>
          <li>Other diagnostic data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect in the following ways:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide, operate, and maintain our services</li>
          <li>To improve, personalize, and expand our services</li>
          <li>To understand and analyze how you use our services</li>
          <li>To develop new products, services, and features</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Sharing Your Information</h2>
        <p className="mb-4">
          We do not share personal information with companies, organizations, or individuals outside of CampusCollect except in the following cases:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>With your consent.</li>
          <li>For external processing by trusted partners who work on our behalf under confidentiality agreements.</li>
          <li>For legal reasons, including to meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h3>
        <p className="mb-4">
          We are committed to protecting the data of our users. We implement a variety of security measures to maintain the safety of your personal information.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Privacy Policy</h3>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h3>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </section>

    </div>
  );
};

export default PrivacyPage;
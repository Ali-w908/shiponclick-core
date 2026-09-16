import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ShipOnClick",
  description: "Privacy policy for ShipOnClick.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 bg-zinc-950 text-zinc-300 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-zinc-100 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-zinc-500">Last updated: September 2026</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">1. Information We Collect</h2>
          <p>
            When you purchase or use ShipOnClick, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Data:</strong> Your name, email address, and authentication provider (e.g., GitHub, Google) when you sign up.</li>
            <li><strong>Payment Data:</strong> We use secure third-party processors (LemonSqueezy) to handle payments. We do not store your credit card numbers on our servers.</li>
            <li><strong>GitHub Data:</strong> Your GitHub username, strictly for the purpose of granting you access to our private repositories.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">2. How We Use Your Information</h2>
          <p>
            We use the collected information solely for the purpose of providing and improving the ShipOnClick product. This includes processing payments, granting repository access, providing customer support, and sending important account updates.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">3. Data Sharing and Security</h2>
          <p>
            We do not sell, rent, or share your personal information with third parties for marketing purposes. Your data is stored securely using industry-standard encryption. Authentication is handled safely via NextAuth.js.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">4. Your Rights</h2>
          <p>
            You have the right to access, modify, or delete your personal data. If you wish to permanently delete your account and associated data from our servers, you can do so from your dashboard settings or by contacting our support team.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">5. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us through the Feedback widget or at support@shiponclick.tech.
          </p>
        </section>

      </div>
    </div>
  );
}

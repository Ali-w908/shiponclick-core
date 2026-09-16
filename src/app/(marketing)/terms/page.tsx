import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ShipOnClick",
  description: "Terms of service and conditions for using ShipOnClick.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 bg-zinc-950 text-zinc-300 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-zinc-100 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-zinc-500">Last updated: September 2026</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">1. Acceptance of Terms</h2>
          <p>
            By purchasing, downloading, or using the ShipOnClick Starter Kit ("Product"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use or purchase the Product.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">2. License Grant & Restrictions</h2>
          <p>
            Upon purchase of the Builder Plan, you are granted a non-exclusive, non-transferable license to use the ShipOnClick source code to build and deploy unlimited personal and commercial web applications.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may <strong>not</strong> resell, redistribute, or sub-license the raw source code of ShipOnClick.</li>
            <li>You may <strong>not</strong> use the source code to create a competing starter kit or boilerplate product.</li>
            <li>The Open-Core version is provided under the MIT License as stated in its respective repository.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">3. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          <p>
            The Product is provided &quot;AS IS&quot;, without warranty of any kind, express or implied. In no event shall ShipOnClick or its creators be held liable for any damages, lost profits, or business interruption arising from the use or inability to use the Product. You assume full responsibility for the security and functionality of the applications you build with our code.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-200">4. Updates and Support</h2>
          <p>
            We strive to keep the codebase up-to-date with the latest technologies. Access to repository updates is included with your purchase. Support is provided on a best-effort basis for bugs and critical issues related to the starter kit infrastructure.
          </p>
        </section>

      </div>
    </div>
  );
}

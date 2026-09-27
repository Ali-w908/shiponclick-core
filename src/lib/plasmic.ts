import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID!,
            token: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN!,
        },
    ],
    // This tells Plasmic to use your local development server as the visual canvas
    preview: true,
});

import { CliInstructions } from "@/components/dashboard/cli-instructions";
import { DeleteAccountButton } from "@/components/dashboard/delete-account-button";
import { GithubConnectionCard } from "@/components/dashboard/github-connection-card";
import { InviteForm } from "@/components/dashboard/invite-form";
import { MembersTable } from "@/components/dashboard/members-table";
import { Overview } from "@/components/dashboard/overview";
import { ProfileForm } from "@/components/dashboard/profile-form";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { MobileSidebar } from "@/components/dashboard/sidebar";
import { StackExplorer } from "@/components/dashboard/stack-explorer";
import { AgentsShowcase } from "@/components/marketing/agents-showcase";
import { CodebaseExplorer } from "@/components/marketing/codebase-explorer";
import { DemoVideo } from "@/components/marketing/demo-video";
import { FAQ } from "@/components/marketing/faq";
import { Features } from "@/components/marketing/features";
import { FinalCTA } from "@/components/marketing/final-cta";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { InteractiveSkills } from "@/components/marketing/interactive-skills";
import { Navbar } from "@/components/marketing/navbar";
import { PricingCard } from "@/components/marketing/pricing-card";
import { TechStack } from "@/components/marketing/tech-stack";
import { TestingSuite } from "@/components/marketing/testing-suite";
import { Differentiator } from "@/components/marketing/value-proposition";
import { Providers } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { FeedbackWidget } from "@/components/ui/feedback-widget";
import LoginForm from "@/components/ui/login-form";
import { Logo } from "@/components/ui/logo";
import RegisterForm from "@/components/ui/register-form";


PLASMIC.registerComponent(CliInstructions, {
  name: "CliInstructions",
  props: {}
});

PLASMIC.registerComponent(DeleteAccountButton, {
  name: "DeleteAccountButton",
  props: {}
});

PLASMIC.registerComponent(GithubConnectionCard, {
  name: "GithubConnectionCard",
  props: {}
});

PLASMIC.registerComponent(InviteForm, {
  name: "InviteForm",
  props: {}
});

PLASMIC.registerComponent(MembersTable, {
  name: "MembersTable",
  props: {}
});

PLASMIC.registerComponent(Overview, {
  name: "Overview",
  props: {}
});

PLASMIC.registerComponent(ProfileForm, {
  name: "ProfileForm",
  props: {}
});

PLASMIC.registerComponent(DashboardSidebar, {
  name: "DashboardSidebar",
  props: {}
});

PLASMIC.registerComponent(MobileSidebar, {
  name: "MobileSidebar",
  props: {}
});

PLASMIC.registerComponent(StackExplorer, {
  name: "StackExplorer",
  props: {}
});

PLASMIC.registerComponent(AgentsShowcase, {
  name: "AgentsShowcase",
  props: {}
});

PLASMIC.registerComponent(CodebaseExplorer, {
  name: "CodebaseExplorer",
  props: {}
});

PLASMIC.registerComponent(DemoVideo, {
  name: "DemoVideo",
  props: {}
});

PLASMIC.registerComponent(FAQ, {
  name: "FAQ",
  props: {}
});

PLASMIC.registerComponent(Features, {
  name: "Features",
  props: {}
});

PLASMIC.registerComponent(FinalCTA, {
  name: "FinalCTA",
  props: {}
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: {}
});

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {}
});

PLASMIC.registerComponent(HowItWorks, {
  name: "HowItWorks",
  props: {}
});

PLASMIC.registerComponent(InteractiveSkills, {
  name: "InteractiveSkills",
  props: {}
});

PLASMIC.registerComponent(Navbar, {
  name: "Navbar",
  props: {}
});

PLASMIC.registerComponent(PricingCard, {
  name: "PricingCard",
  props: {}
});

PLASMIC.registerComponent(TechStack, {
  name: "TechStack",
  props: {}
});

PLASMIC.registerComponent(TestingSuite, {
  name: "TestingSuite",
  props: {}
});

PLASMIC.registerComponent(Differentiator, {
  name: "Differentiator",
  props: {}
});

PLASMIC.registerComponent(Providers, {
  name: "Providers",
  props: {}
});

PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {}
});

PLASMIC.registerComponent(Card, {
  name: "Card",
  props: {}
});

PLASMIC.registerComponent(CardHeader, {
  name: "CardHeader",
  props: {}
});

PLASMIC.registerComponent(CardFooter, {
  name: "CardFooter",
  props: {}
});

PLASMIC.registerComponent(CardTitle, {
  name: "CardTitle",
  props: {}
});

PLASMIC.registerComponent(CardDescription, {
  name: "CardDescription",
  props: {}
});

PLASMIC.registerComponent(CardContent, {
  name: "CardContent",
  props: {}
});

PLASMIC.registerComponent(FeedbackWidget, {
  name: "FeedbackWidget",
  props: {}
});

PLASMIC.registerComponent(LoginForm, {
  name: "LoginForm",
  props: {}
});

PLASMIC.registerComponent(Logo, {
  name: "Logo",
  props: {}
});

PLASMIC.registerComponent(RegisterForm, {
  name: "RegisterForm",
  props: {}
});

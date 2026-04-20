// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatedIcons from "@/components/FloatedIcons";
import { GallerySection } from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import OutsideFooter from "@/components/OutsideFooter";
import { OutsideHeader } from "@/components/OutSideHeader";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import PreventCopy from "@/components/PreventCopy";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import { ProjectContentResponse } from "@/lib/responseType";

export default async function OutsideSaudi() {
  let data;

  try {
    const res = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/main-data`,
    );
    data = (await res.json()) as ProjectContentResponse;
  } catch (error) {
    console.error("Failed to fetch project content:", error);

    data = {
      header: { brandName: "قهوجيين الرياض" },
      hero: { headline: "", subheadline: "", whatsApp: "" },
      about: { label: "", title: "", description1: "", image: "" },
      services: { label: "", title: "", description: "", items: [] },
      whyUs: { label: "", title: "", description: "", features: [] },
      gallery: [],
      footer: {
        brandName: "قهوجيين الرياض",
        phone: "",
        email: "",
        address: "",
      },
    };
  }

  return (
    <>
      <OutsideHeader
        brandName={data.header.brandName}
        telephone={data.footer.phone}
      />
      <HeroSection
        {...data.hero}
        image={data.about.image}
        features={data.whyUs.features}
      />
      <GallerySection gallery={data.gallery} />
      <AboutSection {...data.about} whatsApp={data.hero.whatsApp} />
      <ServicesSection
        {...data.services}
        whatsApp={data.hero.whatsApp}
        phone={data.footer.phone}
      />
      <StatsSection />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <FloatedIcons
        whatsapp={data.hero?.whatsApp ?? ""}
        telephone={data.footer.phone ?? ""}
      />
      <PreventCopy />

      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
      <OutsideFooter {...data.footer} description={data.hero?.subheadline} />
    </>
  );
}

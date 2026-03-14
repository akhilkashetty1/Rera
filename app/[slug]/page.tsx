import { SERVICES_DATA } from "@/lib/services-data";
import ServiceTemplate from "@/components/ServiceTemplate";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = SERVICES_DATA[slug];

    if (!data) return {};

    return {
        title: `${data.title} | RERA Certification Bangalore`,
        description: data.subtitle || `Expert ${data.title} services for real estate developers and agents in Bangalore. Ensure compliance with Pooja Gowda M & Associates.`,
        openGraph: {
            title: `${data.title} - RERA Consultants Bangalore`,
            description: data.subtitle,
            type: "article",
            images: [data.heroImage],
        }
    };
}

export function generateStaticParams() {
    return Object.keys(SERVICES_DATA).map((slug) => {
        return { slug: slug };
    });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = SERVICES_DATA[slug as keyof typeof SERVICES_DATA];

    if (!data) {
        notFound();
    }

    return <ServiceTemplate data={data} />;
}

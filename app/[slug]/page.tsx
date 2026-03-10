import { SERVICES_DATA } from "@/lib/services-data";
import ServiceTemplate from "@/components/ServiceTemplate";
import { notFound } from "next/navigation";

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

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | RERA Consultants Bangalore | Pooja Gowda M",
    description: "Learn about RERA Consultants and Pooja Gowda M & Associates. Over 8 years of expertise in Bangalore's real estate regulatory landscape.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

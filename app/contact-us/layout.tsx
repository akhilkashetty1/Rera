import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact RERA Experts in Bangalore | Pooja Gowda M & Associates",
    description: "Connect with Bangalore's leading RERA consultants for expert project registration, agent licensing, and compliance audits. Located in Jayanagar, Bangalore.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

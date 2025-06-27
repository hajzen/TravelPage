import { metadata } from "./layout";
import BookingSection from "@/components/BookingSection";

export async function generateMetadata() {
    return {
        title: `${"Strona główna" + " | " + metadata.title}`,
    };
}

export default function Home() {
    return (
        <main>
            <BookingSection />
        </main>
    );
}

import { Button } from "@components/ui/button";
import { Popcorn } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
	description: "To be done",
};

export default function Home() {
	return (
		<main className="max-w-xl mx-auto my-8">
			<Button icon={<Popcorn />}>Click here idiot</Button>
		</main>
	);
}

import { HeroSection, ListSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Stunning React Components Collections | Compobits",
      description: "",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ListSection />
    </main>
  );
}

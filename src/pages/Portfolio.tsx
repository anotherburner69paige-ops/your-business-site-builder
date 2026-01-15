import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, X, ZoomIn } from "lucide-react";

const categories = ["All", "Website Design", "E-Commerce", "Branding"];

const projects = [
  {
    id: 1,
    title: "Example 1",
    category: "Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Example 2",
    category: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Example 3",
    category: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Example 4",
    category: "Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Example 5",
    category: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Example 6",
    category: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    image: "/placeholder.svg",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Our Portfolio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-border bg-background py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-white text-white hover:bg-white hover:text-black"
                          onClick={() => setSelectedImage(project.image)}
                        >
                          <ZoomIn className="h-5 w-5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl border-none bg-transparent p-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-auto w-full rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Video Showcase
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              {/* Video Embed Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Play className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Video Embed Placeholder - Add your video embed code here
                </p>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

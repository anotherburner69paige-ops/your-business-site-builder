import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const categories = ["All", "Website Design"];

const projects = [
  {
    id: 1,
    title: "Urbina Construction",
    category: "Website Design",
    description:
      "A clean, modern website built to showcase Urbina Construction's services, highlight past projects, and provide customers with a clear, trustworthy online experience.",
    image: "/uc.png",
  },
  {
    id: 2,
    title: "Southern Stripes Lawn Care",
    category: "Website Design",
    description:
      "A professional, eye-catching website designed for Southern Stripes Lawn & Landscapes — showcasing their residential and commercial landscaping services across Upstate South Carolina with a focus on excellence and reliability.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Blue Ridge Mobile Detailing",
    category: "Website Design",
    description:
      "A sleek, conversion-focused website crafted for Blue Ridge Mobile Detailing — highlighting their premium auto detailing, ceramic coating, and paint correction services in the DMV area with easy online booking.",
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
            Explore a selection of custom websites and digital projects crafted
            with precision, creativity, and a commitment to fast, reliable
            delivery.
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
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Code,
  Palette,
  Smartphone,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Design tailored to your needs.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Ask our expert web developers with 3+ years of experience.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Helping build brand idenity since our inception.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Expert mobile-first design from our digital natives.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Using 10x development tools, you get your webpage faster than any others.",
  },
];

const whyChooseUs = [
    { text: "Minority Owned", value: "100%" },
    { text: "Projects Completed", value: "100+" },
    { text: "Client Satisfaction", value: "100%" },
    { text: "Support Available", value: "24/7" },
];

const testimonials = [
  {
    "name": "Elise Bauer",
    "role": "Business Owner",
    "content":
      "The level of service I received was outstanding. They took the time to understand my business needs and customized everything around my goals. The turnaround was incredibly fast without sacrificing quality, and the final result fit my operations perfectly. Truly a partner who puts the customer first.",
    "rating": 5
  },
  {
    "name": "John Stevens",
    "role": "Entrepreneur",
    "content":
      "I was impressed by how quickly they delivered such polished work. Every step of the process felt collaborative — they listened, adapted, and refined until everything matched my vision. Their commitment to quality and customer‑led customization made the entire experience seamless.",
    "rating": 5
  },
  {
    "name": "Patches O'Houlihan",
    "role": "Small Business Owner",
    "content":
      "Finding a service that balances speed and craftsmanship is rare, but they nailed it. They tailored the project to my exact needs and kept communication clear throughout. The quick turnaround helped me stay on schedule, and the quality exceeded what I expected. Highly reliable and customer‑focused.",
    "rating": 5
  }
]
;

const featuredProjects = [
  {
    title: "Example 1",
    category: "E-Commerce",
    image: "/placeholder.svg",
  },
  {
    title: "Example 2",
    category: "Business Website",
    image: "/placeholder.svg",
  },
  {
    title: "Example 3",
    category: "Portfolio",
    image: "/placeholder.svg",
  },
];

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Site Forge Technologies
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Building Tomorrow’s Solutions Today
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -bottom-1/2 -right-1/4 h-96 w-96 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -left-1/4 -top-1/2 h-96 w-96 rounded-full bg-white/5" />
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Services
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-border transition-all hover:border-primary hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
          We combine high‑quality craftsmanship, customer‑driven customization, and fast, reliable turnaround to deliver results that fit your needs perfectly.
          </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.text} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {item.value}
                </div>
                <div className="text-muted-foreground">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Quality First Approach",
              "Affordable Pricing",
              "Modern Technologies",
              "SEO Optimized",
              "Mobile Responsive",
              "Ongoing Support",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
            </h2>
            <p className="text-muted-foreground">
            A look at some of the custom projects we've delivered with precision, creativity, and fast turnaround.
            </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden border-border transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <CardContent className="p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          What Our Clients Say
          </h2>
           <p className="mx-auto max-w-2xl text-muted-foreground">
          Our clients trust us for our commitment to quality, customer‑led customization, and fast, reliable turnaround on every project.
           </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm font-semibold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Build Your Dream Website?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Let's work together to create a stunning online presence that drives
            results for your business. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

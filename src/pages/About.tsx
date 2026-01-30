import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Lightbulb, Award, Zap } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Passion",
        description:
        "We pour genuine care into every project, treating your vision as our own and delivering work that reflects true dedication.",
    },
    {
        icon: Target,
        title: "Precision",
        description:
        "Every detail matters. We focus on accuracy, consistency, and craftsmanship to ensure your project is executed flawlessly.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "We bring fresh ideas and creative problem‑solving to the table, helping you stand out with modern, forward‑thinking solutions.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
        "Your input guides every step. We work closely with you to shape results that match your goals and exceed expectations.",
    },
];

const team = [
  {
    name: "Ryan Urbina",
    role: "Founder & Lead Developer",
    image: "/ryan.jpg",
    bio: "Our CEO, founder, and lead developer. A young entrepreneur based in North Carolina with 5+ years of experience in business.",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/jane.jpg",
    bio: "Our UI/UX designed based in California with 3+ years of experience.",
  },
  {
    name: "Mike Johnson",
    role: "Full Stack Developer",
    image: "/mike.jpg",
    bio: "Our full-stack developer, handling all web and database related problems, based in Texas with 5+ years of experience.",
  },
];

const milestones = [
  {
    year: "January 2025",
    title: "Company Founded",
    description:
      "Our humble beginnings with only two employess working remotely.",
  },
  {
    year: "February 2025",
    title: "First Client Project",
    description:
      "Our first (foray) into development, kickstarting our commitment to quality products.",
  },
  {
    year: "Present",
    title: "Growing Strong",
    description:
      "At this time our company has learned and grown, still commited to providing quality services.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          About Us
      </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
          We’re dedicated to delivering high‑quality, custom‑crafted solutions with a fast, reliable turnaround. Every project is shaped through collaboration, creativity, and a commitment to getting the details right.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our Story
      </h2>
          <div className="space-y-6 text-muted-foreground">
          <p>
          Site Forge Technologies was founded by Ryan Urbina in January 2025 with a
      simple mission: to deliver quality websites at a price that business owners
      can afford.
          </p>
          <p>
          What began as a small, one‑person operation quickly grew into a dedicated
      service built around transparency, craftsmanship, and customer‑first
      collaboration. Ryan saw how many businesses struggled with overpriced,
      overcomplicated web solutions, and set out to create an alternative that
      was both accessible and genuinely helpful.
          </p>
          <p>
          Today, Site Forge Technologies continues to focus on fast turnaround,
      tailored design, and a commitment to getting every detail right. Every
      project is shaped through open communication and a clear understanding of
      each client’s goals, ensuring that the final product not only looks great
      but supports real business growth.
          </p>
          </div>
            </div>
          </div>
      </section>

      {/* Mission Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target className="h-6 w-6" />
              </div>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
          Our Mission
      </h2>
          <p className="text-muted-foreground">
          Our mission is to make high‑quality, custom‑built websites accessible to every business. We focus on clarity, craftsmanship, and fast turnaround, ensuring every project supports real growth and reflects the unique goals of the people we serve.
          </p>

            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Zap className="h-6 w-6" />
              </div>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
          Our Vision
      </h2>
          <p className="text-muted-foreground">
          We envision a future where every business—no matter its size—has access to modern, high‑quality digital tools that help it grow. By combining innovation, thoughtful design, and a commitment to fast, reliable delivery, we aim to make professional web solutions accessible, intuitive, and empowering for everyone
      </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Our Values
      </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
          We’re guided by a commitment to quality, transparency, and customer‑focused collaboration—ensuring every project is built with care, clarity, and purpose.
          </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Meet Our Team
      </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
          We’re a small, dedicated group of creators, developers, and problem‑solvers committed to building high‑quality digital experiences with care, clarity, and collaboration at the core.
          </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden border-border">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Our Journey
      </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
          From a single idea to a growing digital studio, our journey has been shaped by a commitment to craftsmanship, collaboration, and creating accessible solutions that help businesses move forward with confidence.
          </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative mb-8 md:mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div
                    className={`relative md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-0 hidden h-4 w-4 rounded-full bg-primary md:block ${
                        index % 2 === 0
                          ? "-right-2 translate-x-1/2"
                          : "-left-2 -translate-x-1/2"
                      }`}
                    />
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <span className="text-sm font-semibold text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="mb-2 mt-1 text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

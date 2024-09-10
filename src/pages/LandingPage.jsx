import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gredient-title text-4xl font-extrabold sm:text-6xl  tracking-tighter py-4">
          Find Your Dream Job on
          <span className="flex items-center gap-6 sm:gap-10 lg:gap-12 text-6xl sm:text-7xl lg:text-9xl font-extrabold text-gray-900 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-105 hover:translate-y-1">
            <span className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent shadow-lg hover:shadow-xl transition-shadow duration-300 hover:opacity-90">
              NEXGEN
            </span>
            <span className="relative text-gray-800 hover:text-gray-200 transition-colors duration-300">
              <span className="absolute  transform -translate-x-1 -translate-y-1 transition-transform duration-300"></span>
              <span className="relative z-10 hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
                HIRED
              </span>
            </span>
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-sx sm:text-xl">
          Explore thousands of jobs listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="blue" size="xl" >
            Post a Job
          </Button>
        </Link>
      </div>
      {/* crousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}

      <div className="relative flex justify-center my-12">
        {/* Image with advanced hover effects */}
        <img
          src="/banner.jpeg"
          alt="Banner"
          className="w-4/5 max-w-4xl rounded-2xl border-8 border-white shadow-xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:brightness-125 hover:rotate-2 hover:-translate-y-2"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* card */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post Jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
      {/* accordience */}
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
};

export default LandingPage;

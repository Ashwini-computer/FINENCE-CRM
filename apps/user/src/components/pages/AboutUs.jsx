import {
  Headline,
  TypographyMuted,
  TypographyH3,
  TypographySmall,
} from "@/custom/Typography";
import CardStall from "../CardStall";
import PageLayout from "../layout/PageLayout";
import { GrMoney, GrNext } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const aboutDataCards = [
  {
    icon: <GrMoney size={36} className="text-accent" />,
    label: "India's largest consumer credit marketplace",
    description:
      "Financesbazar is India’s largest digital consumer credit marketplace, offering wide choice and ease of comparison.",
  },
  {
    icon: <RiCustomerService2Fill size={36} className="text-accent" />,
    label: "40 Million+ Happy Customers",
    description:
      "More than 40 million Consumers from 823 cities across India have accessed their free credit score from Financesbazar.",
  },
  {
    icon: <PiMicrosoftTeamsLogoLight size={36} className="text-accent" />,
    label: "65+ Partnerships",
    description:
      "We work with top banks, NBFCs, fintech lenders and credit bureaus to offer a wide choice to consumers across segments.",
  },
];

const milestones = [
  {
    year: 2023,
    events: [
      {
        title:
          "Launches 3rd edition of insight report ‘Making India Credit Fit’",
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        title: "Wins Best Fintech Consumer Lender at India Fintech Awards",
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2021,
    events: [
      {
        title:
          "Wins ‘Outstanding Crisis Finance Innovation 2021 (Asia Pacific) Award’ by Global Finance Magazine",
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2020,
    events: [
      {
        title:
          "Launches Financesbazar Stack to enable end-to-end disbursal process",
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2019,
    events: [
      {
        title:
          "Becomes the only independent digital platform to disburse USD 1 billion loans (annualized)",
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2018,
    events: [
      {
        title: "Gets products applications from 1000 cities in a single month",
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2017,
    events: [
      {
        title: "Wins Best Customer Experience Innovation at Moneytech Awards",
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2016,
    events: [
      {
        title: 'Wins ET "Best Financial Services Brand"',
        action: "See more from this year",
      },
    ],
  },
  {
    year: 2014,
    events: [
      {
        title: "Financesbazar.com founded under the Policybazaar Group",
        action: "See more from this year",
      },
    ],
  },
];

export default function AboutUs() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-12 grid gap-8">
        <Headline className="max-w-lg capitalize">
          We make personal finance easy, convenient & transparent
        </Headline>

        <TypographyMuted className="sm:text-md text-sm leading-normal sm:leading-8 max-w-3xl">
          Using data and technology innovations, we help you choose the most
          suited offers across loans and cards. Our algorithm-based technology
          platform provides you with access to multiple personal credit offers,
          ease of comparison of multiple offers available and unbiased advice.
          From application to disbursal, Financesbazar will accompany you at
          each step, till the disbursal of loan or issuance of credit card.
        </TypographyMuted>

        <div className="flex justify-around sm:justify-start items-center gap-8">
          <Link to="/about-us" className="sm:w-fit w-full">
            <Button className="bg-accent w-full sm:text-sm text-xs rounded-full cursor-pointer">
              ABOUT
            </Button>
          </Link>
          <Link to="/careers" className="sm:w-fit w-full">
            <Button className="bg-accent w-full sm:text-sm text-xs rounded-full cursor-pointer">
              CAREERS
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutDataCards.map((option, index) => (
            <CardStall
              key={index}
              icon={option?.icon}
              label={option?.label}
              description={option?.description}
            />
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col gap-4">
            <div className="w-22 h-0.5 bg-accent"></div>
            <TypographyH3 className="text-blue-900 font-bold">
              It all starts with why.
            </TypographyH3>
            <TypographyMuted className="sm:text-md text-sm leading-normal">
              Financesbazar aims to make personal finance decisions easy,
              transparent and convenient for India. Through technology and data
              innovations, along with a lot of hard work, we intend to make
              complex decisions simple for you. Today, we are proud to be a
              strong and popular consumer finance brand.
            </TypographyMuted>
          </div>

          {/* Timeline */}
          <div className="sm:mt-6">
            <div className="grid gap-4">
              <SlBookOpen size={36} className="text-accent" />
              <TypographyH3 className="text-blue-900 font-bold">
                Our Story
              </TypographyH3>
            </div>

            <div className="relative border-l-2 border-accent mt-8 ml-4">
              {milestones?.map((option, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, {
                  once: true,
                  margin: "0px 0px -50px 0px",
                });

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-10 ml-4 relative"
                  >
                    <div className="absolute -left-4 top-1 w-3 h-3 bg-accent rounded-full border-2 border-white shadow-md"></div>
                    <TypographyH3 className="text-blue-950 font-bold i">
                      {option?.year}
                    </TypographyH3>

                    {option?.events.map((event, idx) => (
                      <div key={idx} className="mt-2 grid gap-2">
                        <TypographyMuted className="leading-7 text-sm sm:text-md">
                          {event?.title}
                        </TypographyMuted>
                        <TypographySmall className="text-blue-900 uppercase text-xs hover:text-blue-700 tracking-normal font-semibold flex gap-2 items-center cursor-pointer mt-1 underline underline-offset-4">
                          {event?.action} <GrNext size={12} />
                        </TypographySmall>
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#f5f9ff] to-[#f0fdfa] py-4">
        <div className="max-w-6xl mx-auto p p-6">
          <ContactImageGrid />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 max-w-6xl mx-auto p-6 sm:mt-16">
        <div className="sm:col-span-5 space-y-2">
          <div className="w-14 h-0.5 bg-accent"></div>
          <TypographyH3 className="text-blue-900 font-bold">
            Work with Us
          </TypographyH3>
          <TypographyMuted className="text-sm md:text-base leading-normal">
            Join our dynamic FinancesBazar team if you are interested in
            Technology, Product, Analytics or Marketing roles.
          </TypographyMuted>
          <Button
            variant="secondary"
            className="border hover:bg-primary text-primary text-xs mt-4 hover:text-white"
          >
            JOIN US
          </Button>
        </div>
        <div className="sm:col-span-7">
          <div className="w-full h-full border-2 rounded-md"></div>
        </div>
      </div>
    </PageLayout>
  );
}

const ContactImageGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 sm:gap-4">
      {/* LEFT COLUMN */}
      <div className="col-span-2 md:col-span-6 grid gap-4">
        {/* Header */}
        <div className="sm:col-span-2 col-span-12 space-y-2">
          <div className="w-14 h-0.5 bg-accent"></div>
          <TypographyH3 className="text-blue-900 font-bold">
            Life at FinancesBazar…Together, we are stronger!
          </TypographyH3>
          <TypographyMuted className="text-sm md:text-base leading-normal">
            We at FinancesBazar.com, are as proud of our culture and values as
            we are of our growth. We believe in an open and friendly environment
            for the FinancesBazar family that encourages free-flowing ideas,
            teamwork, and relentless execution.
          </TypographyMuted>
        </div>

        {/* Full-width Image */}
        <div className="col-span-12">
          <img
            loading="lazy"
            className="w-full h-auto"
            src="/contact/2.png"
            alt="contact-2"
          />
        </div>

        {/* Two side-by-side images */}
        <div className="grid grid-cols-2 col-span-12 gap-4">
          <img
            loading="lazy"
            className="w-full h-auto"
            src="/contact/3.png"
            alt="contact-3"
          />
          <img
            loading="lazy"
            className="w-full h-auto"
            src="/contact/4.png"
            alt="contact-4"
          />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="col-span-2 md:col-span-6 grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-4">
            <img
              loading="lazy"
              className="w-full h-auto"
              src="/contact/1.png"
              alt="contact-1"
            />
            <img
              loading="lazy"
              className="w-full h-auto"
              src="/contact/5.png"
              alt="contact-5"
            />
          </div>
          <div className="grid gap-4">
            <div className="h-full" /> {/* spacer for alignment */}
            <img
              loading="lazy"
              className="w-full h-auto"
              src="/contact/6.png"
              alt="contact-6"
            />
          </div>
        </div>

        {/* Full-width bottom image */}
        <img
          loading="lazy"
          className="w-full h-auto"
          src="/contact/7.png"
          alt="contact-7"
        />
      </div>
    </div>
  );
};

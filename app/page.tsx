"use client";
import Image from "next/image";
import Link from "next/link";
import { GenericButton } from "./ui/generic_button";
import { BadgeCheck, HardHat, Hammer, Star } from "lucide-react";
import { services } from "./lib/services";
import Form from "./ui/form";
import UnderlineLink from "./ui/underline_link";
import ThumbnailSlider from "./ui/thumbnail_slider";
import Review from "./ui/review";
import { inter } from "./ui/fonts";

export default function Home() {
  return (
    // <div className="bg-inherit relative w-full">
    <>
      <section className="w-full lg:h-screen md:h-[70vh] h-[50vh] flex items-center justify-center">
        <div
          className="h-full w-full bg-cover flex items-center justify-center bg-center"
          style={{
            backgroundImage: "url(/images/beautiful-brown-metal-roof.webp)",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-10 w-full">
            <div className="relative w-fit h-fit lg:px-0 p-5">
              <Image
                className="object-contain"
                src={"/images/CM_Roofings_Solution.svg"}
                width={800}
                height={800}
                // sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
                // fill
                alt=""
                draggable={false}
              ></Image>
            </div>
            <div className="flex lg:gap-10 gap-5 lg:flex-row flex-col lg:w-fit w-3/4">
              <GenericButton>
                <Link href={"/services"}>Our Services</Link>
              </GenericButton>
              <GenericButton>
                <Link href={"/contact"}>Contact Us</Link>
              </GenericButton>
            </div>
          </div>
        </div>
      </section>
      <QuoteForm />
      <Benefits />
      <WhyUs />
      <Qualities />
      <QuoteBanner />
      <ReviewsSection />

      <Footer />
    </>
    // </div>
  );
}

function QuoteForm() {
  return (
    <section className=" w-full flex lg:flex-row flex-col font-sans">
      <div className="lg:w-1/2  flex flex-col lg:p-20 p-5 gap-10 lg:items-start items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1
            className={`${inter.className} lg:text-7xl text-4xl w-fit font-semibold`}
          >
            Roofing done the{" "}
            <span className="font-bold text-[#E04C26]">Right</span> way
          </h1>
          <p className="text-lg lg:w-3/4">
            At CM Roofing Solutions, we&apos;re experts in roofing for homes,
            businesses, and industrial properties in Orangeville, Muskoka,
            Dufferin & Simcoe County, and the surrounding regions. Our top
            priority is delivering exceptional quality and service that exceeds
            your expectations. We take pride in upholding the highest standards
            in the industry and ensuring your complete satisfaction.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:my-5 w-full">
          <h2 className="flex flex-row gap-2">
            <BadgeCheck color="blue" />
            Owner operated
          </h2>
          <h2 className="flex flex-row gap-2">
            <BadgeCheck color="blue" />
            Licensed
          </h2>
          <h2 className="flex flex-row gap-2">
            <BadgeCheck color="blue" />
            Insured
          </h2>
          <h2 className="flex flex-row gap-2">
            <BadgeCheck color="blue" />
            Trustworthy & Reliable
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col lg:items-end lg:justify-end items-center gap-5 lg:p-20 p-5">
        <h1 className={`${inter.className} lg:text-3xl text-xl`}>
          Request a free <span className="font-bold text-[#E04C26]">Quote</span>
        </h1>
        <Form />
      </div>
    </section>
  );
}

function Qualities() {
  return (
    <section className="w-full flex justify-center font-sans flex-col items-center p-5 gap-5">
      <h1 className={`${inter.className} lg:text-3xl text-xl font-semibold`}>
        Our qualities
      </h1>
      <div className="w-full flex justify-center">
        <div className="lg:w-3/4 flex lg:flex-row md:flex-row flex-col justify-center border-black border-2">
          <div className="h-full lg:w-1/3 w-full flex gap-5 flex-col p-10 border-black lg:border-r-2 md:border-r-2 sm:border-b-0 border-b-2">
            <HardHat color="blue" size={50} />
            <h1 className="text-2xl font-semibold">Owner Operated</h1>
            <p>
              From start to finish, we are involved with every step of the
              process. We maintain contact until every last detail is finished.
            </p>
          </div>
          <div className="h-full lg:w-1/3 w-full flex gap-5 flex-col p-10 border-black lg:border-r-2 md:border-r-2 sm:border-b-0 border-b-2">
            <Hammer color="blue" size={50} />
            <h1 className="text-2xl font-semibold">30 Years of Experience</h1>
            <p>
              Our team has combined experience of over 30 years, leading us to
              take great pride in delivering high-quality services while
              maintaining efficient project timelines and proven industry
              experience.
            </p>
          </div>
          <div className="h-full lg:w-1/3 w-full flex gap-5 flex-col p-10 ">
            <Star color="blue" size={50} />
            <h1 className="text-2xl font-semibold">Satisfaction Guaranteed</h1>
            <p>
              With our commitment to excellence, we&apos;re confident that we
              can make a noticeable and affordable difference on your next
              roofing project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="w-full flex justify-center font-sans lg:p-20 flex-col gap-10 p-5">
      <h1 className={`${inter.className} lg:text-7xl text-4xl font-semibold`}>
        <span className="text-[#E04C26] font-bold">Benefits</span> of Roof
        Maintenance
      </h1>
      <div className="lg:w-3/4 flex flex-col lg:gap-5 gap-10">
        <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-start md:flex-row md:items-start">
          <div className="lg:w-1/2 md:w-1/2 w-full relative h-96">
            <Image
              className="object-cover"
              src={"/images/benefits/prolonged_lifespan.webp"}
              fill
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-1/2 gap-2">
            <h1 className="text-2xl font-semibold">Prolonged Lifespan</h1>
            <p>
              Regular maintenance can help identify and fix minor issues before
              they turn into major problems, such as leaks or structural damage.
              This can extend the lifespan of the roof and prevent the need for
              premature replacement, which can save you a significant amount of
              money in the long run.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-row-reverse lg:items-start md:flex-row md:items-start">
          <div className="lg:w-1/2 md:w-1/2 w-full relative h-96">
            <Image
              className="object-cover"
              src={"/images/benefits/construction.webp"}
              fill
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-1/2 gap-2">
            <h1 className="text-2xl font-semibold">
              Improved Energy Efficiency
            </h1>
            <p>
              A well-maintained roof can help regulate the temperature inside
              your home or building, which can lead to lower energy costs. For
              example, if your roof is properly insulated and sealed, it can
              prevent heat loss during the winter and keep your building cooler
              in the summer, reducing the need for heating and cooling.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-start md:flex-row md:items-start">
          <div className="lg:w-1/2 md:w-1/2 w-full relative h-96">
            <Image
              className="object-cover"
              src={"/images/benefits/enhanced_curb_appeal.webp"}
              fill
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-1/2 gap-2">
            <h1 className="text-2xl font-semibold">Enhanced Curb Appeal</h1>
            <p>
              A roof that is well-maintained and visually appealing can increase
              the value and attractiveness of your property. It can also give a
              positive first impression to visitors or potential buyers, which
              can be particularly important if you&apos;re looking to sell your
              home or building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="w-full font-sans py-24 flex flex-col justify-center lg:items-center items-start gap-10 lg:p-20">
      <h1
        className={`${inter.className} lg:text-7xl text-4xl font-semibold lg:px-0 px-5`}
      >
        <span className="text-[#E04C26] font-bold">Why Choose Us</span>
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-10 lg:px-0 px-5">
        <div className="lg:w-2/5 flex flex-col gap-5">
          <p>
            With 30 years of combined experience in the industry, we have the
            skills and expertise to tackle any roofing project, from minor
            repairs to full replacements. We take our responsibilities
            seriously, which is why we are fully licensed and insured, giving
            you the peace of mind that you&apos;re working with a reputable and
            safe company.
          </p>
          <p>
            Our commitment to quality workmanship is second to none, and we use
            only the best materials to ensure that each project meets our high
            standards of excellence. We do not subcontract work and provide a
            seamless and stress-free experience with your new roof.
          </p>
          <p>
            We believe that great customer service is just as important as great
            roofing, which is why we strive to provide excellent service and
            communication throughout every project.
          </p>
          <p>
            We understand that roofing projects can be expensive, which is why
            we offer competitive pricing without sacrificing quality. When you
            choose us for your roofing needs, you can expect a team that is
            dedicated to your satisfaction, providing exceptional service and
            quality workmanship.
          </p>
          <p>
            If you&apos;re looking for a roofing company that is licensed and
            insured,{" "}
            <span className="font-semibold">we&apos;re the team for you.</span>
          </p>
        </div>
        <div className="lg:w-3/5 flex flex-col items-center">
          <ThumbnailSlider />
          <h2 className="text-2xl">
            Some of our{" "}
            <span className="text-[#E04C26] font-semibold">past projects</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="w-full h-fit my-32 flex flex-col text-black justify-center items-center rounded-sm px-10">
      <div className="text-5xl font-semibold flex flex-row items-center lg:gap-2 text-blue-500 ">
        <UnderlineLink
          url="/contact"
          text="Get a Free Quote Today"
        ></UnderlineLink>
        {/* <ArrowRight color="#E04C26" size={35} /> */}
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      reviewAuthor: "Ethan Hayes",
      reviewText:
        '"I recently had my roof replaced by CM Roofing Solutions and I couldn\'t be happier with the results. Chris and his crew were professional, prompt, and efficient throughout the entire process. They worked tirelessly to ensure that my roof was completed on time and within budget. I was impressed with their attention to detail and the quality of their work. I highly recommend this company to anyone in need of roofing services."',
    },
    {
      reviewAuthor: "Caleb Ross",
      reviewText:
        "“I had a leaky roof that needed to be repaired and I'm so glad I chose this company to do the job. Chris and his team were knowledgeable, friendly, and provided excellent service. They quickly identified the problem and were able to fix it in a timely manner. The pricing was fair and they even provided a warranty on their work. I have since recommended them to my friends and family.”",
    },
    {
      reviewAuthor: "Isabella Foster",
      reviewText:
        "”After a severe storm damaged my roof, I was worried about finding a reputable roofing company to make the necessary repairs. Fortunately, I came across this company and I'm so glad I did. They were responsive, reliable, and did an outstanding job repairing my roof. The team was professional and took the time to explain the process and answer all of my questions. I would definitely use this company again and recommend them to others in need of roofing services.”",
    },
    {
      reviewAuthor: "Julie Booth",
      reviewText:
        "”Chris and his team did a fabulous job with my roof. They got the job done quickly and cleanly, at a fair price! Chris recommended the colour and I love it! Thanks so much!”",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center font-sans py-24 gap-10 lg:px-0 px-5">
      <h1 className={`${inter.className} text-3xl font-semibold`}>
        What our clients think
      </h1>
      <div className="lg:flex-row flex w-full justify-center gap-5 overscroll-x-auto flex-col">
        {reviews.map((review) => (
          <Review
            key={review.reviewAuthor}
            reviewText={review.reviewText}
            reviewAuthor={review.reviewAuthor}
          />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const email = "info@cmroofingsolutions.ca";

  return (
    <section className="w-full lg:h-[40vh] h-[50vh] bg-black flex flex-col text-white justify-end overflow-hidden p-5">
      <div className="flex flex-row h-full w-full lg:justify-center justify-between">
        {/* <div className="w-1/6"></div> */}
        <div className="lg:w-3/6 flex flex-col text-nowrap">
          {services.map((card) => {
            return (
              <Link
                className={`opacity-80 hover:opacity-100 hover:underline transition-opacity lg:text-xl leading-tight w-fit`}
                href={card.url}
                key={card.id}
              >
                {card.title}
              </Link>
            );
          })}
        </div>
        <div id="contacts" className="lg:w-2/6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl">Contact Us</h1>
            <div className="flex flex-col opacity-50 text-xs">
              <a className="hover:underline" href="tel:+19057577663">
                (905) 757 - 7663
              </a>
              <a className="hover:underline" href={`mailto:${email}`}>
                info@cmroofingsolutions.ca
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Serving Areas:</p>
            <div className="opacity-50 text-xs">
              <p>Muskoka,</p>
              <p>Dufferin,</p>
              <p>Simcoe County,</p>
              <p>and the surrounding areas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-end w-full overflow-hidden flex justify-center text-nowrap gap-6 lg:mb-4 text-sm">
        <div className="opacity-15">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-15">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-30">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-15">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-15">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}

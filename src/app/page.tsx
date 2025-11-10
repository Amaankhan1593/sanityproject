import { createClient } from "next-sanity";
import Head from "next/head";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { Menu } from "lucide-react";
// import Image from "next/image";
// import PortableText from "react-portable-text";

// interface Blog {
//   _id: string;
//   title: string;
//   image?: string;
//   content?: any;
// }

export default async function Home() {
  const skills = [
    { label: "HTML & CSS", value: 85 },
    { label: "Python", value: 70 },
    { label: "Javascript", value: 98 },
    { label: "Figma", value: 91 },
  ];

  const client = createClient({
    projectId: "84pc1jel",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-01-01",
  });

  const query = `*[_type == "blog"]{
    _id,
    title,
    "image": image.asset->url,
    content
  }`;

  // const blogs: Blog[] = await client.fetch(query);
  // console.log(blogs);

  return (
    <>
      <>
        <Script src="/assets/js/main.js"></Script>
        <Head>
          <meta charSet="utf-8" />

          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          <title>Homepage | Atom Template</title>

          <meta property="og:title" content="Homepage | Atom Template" />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//" />

          <meta property="og:url" content="//" />

          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

          <meta name="theme-color" content="#5540af" />

          <meta property="og:site_name" content="Atom Template" />

          <meta property="og:image" content="//assets/img/social.jpg" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:site" content="@tailwindmade" />

          <link
            crossOrigin="anonymous"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />

          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="preload"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />

          <link
            crossOrigin="anonymous"
            href="/assets/styles/main.min.css"
            media="screen"
            rel="stylesheet"
          />

          <script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>
        </Head>

        <header className="w-full fixed top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="transition hover:opacity-80">
              <img
                src="/assets/img/logo.svg"
                className="w-28 lg:w-48"
                alt="logo image"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {[
                  "About",
                  "Services",
                  "Portfolio",
                  "Clients",
                  "Work",
                  "Statistics",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <li
                    key={item}
                    className="group relative cursor-pointer select-none"
                  >
                    <span className="font-semibold uppercase tracking-wide text-white/90 group-hover:text-yellow-300 transition-all">
                      {item}
                    </span>
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Button */}
            <button className="lg:hidden text-white">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </header>
        {/* ; // Mobile Menu Overlay */}
        <div className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-sm transition-all duration-300 opacity-100 pointer-events-auto">
          <div className="absolute right-0 min-h-screen w-2/3 md:w-1/3 bg-neutral-900 px-8 py-6 shadow-2xl animate-slide-left">
            <button className="absolute top-4 right-4 text-white hover:rotate-90 transition-transform">
              <img
                src="/assets/img/icon-close.svg"
                className="h-8 w-auto"
                alt="close menu"
              />
            </button>

            <ul className="mt-12 flex flex-col space-y-6">
              {[
                "About",
                "Services",
                "Portfolio",
                "Clients",
                "Work",
                "Statistics",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item} className="group cursor-pointer">
                  <span className="uppercase font-semibold tracking-wide text-white text-lg group-hover:text-yellow-300 transition-all">
                    {item}
                  </span>
                  <span className="block h-0.5 w-0 bg-yellow-300 transition-all group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            className="relative bg-cover bg-center bg-no-repeat py-8"
            style={{
              backgroundImage: "url('/assets/img/bg-hero.jpg')",
            }}
          >
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <div className="rounded-full border-8 border-primary shadow-xl">
                  <img
                    src="/assets/img/blog-author.jpg"
                    className="h-48 rounded-full sm:h-56"
                    alt="author"
                  />
                </div>
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                    Hello I m Christy Smith!
                  </h1>
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p className="font-body text-lg uppercase text-white">
                        Let s connect
                      </p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                      <Link
                        href="/"
                        className="text-white hover:text-yellow text-2xl"
                      >
                        <MdArrowForwardIos />
                      </Link>
                      <Link
                        href="/"
                        className="text-white ml-2 hover:text-yellow text-2xl"
                      >
                        <FaFacebookSquare />
                      </Link>
                      <Link
                        href="/"
                        className="pl-4 text-white hover:text-yellow text-2xl"
                      >
                        <FaTwitter />
                      </Link>
                      <Link
                        href="/"
                        className="pl-4 text-white hover:text-yellow text-2xl"
                      >
                        <FaDribbble />
                      </Link>
                      <Link
                        href="/"
                        className="pl-4 text-white hover:text-yellow text-2xl"
                      >
                        <FaLinkedinIn />
                      </Link>
                      <Link
                        href="/"
                        className="pl-4 text-white hover:text-yellow text-2xl"
                      >
                        <FaInstagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row lg:items-start gap-12">
            {/* Text section */}
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Who am I?
              </h2>
              <h3 className="pt-6 font-header text-xl font-semibold text-black sm:text-2xl lg:text-3xl">
                I m Amaan Khan —{" "}
                <span className="text-yellow-400">Front-End Developer</span>
                {/* Creative Web Designer & Photographer */}
              </h3>
              <p className="pt-6 font-body leading-relaxed text-gray-600">
                I craft responsive, modern, and accessible websites. Combining
                creativity with technical skills, I deliver projects that are
                visually appealing, functional, and user-friendly. Photography
                is my lens to capture meaningful moments and inspire designs.
              </p>

              {/* Social links */}
              <div className="flex flex-col justify-center pt-8 sm:flex-row lg:justify-start items-center sm:items-start gap-4">
                <p className="font-body text-lg font-semibold uppercase text-gray-700">
                  Connect with me
                </p>
                <div className="flex items-center gap-4 pt-3 sm:pt-0">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="text-2xl text-primary hover:text-yellow"
                  >
                    <i className="bx bxl-facebook-square"></i>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-2xl text-primary hover:text-yellow"
                  >
                    <i className="bx bxl-twitter"></i>
                  </Link>
                  <Link
                    href="https://dribbble.com"
                    target="_blank"
                    className="text-2xl text-primary hover:text-yellow"
                  >
                    <i className="bx bxl-dribbble"></i>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-2xl text-primary hover:text-yellow"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="text-2xl text-primary hover:text-yellow"
                  >
                    <i className="bx bxl-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Skills section */}
            <div className="w-full sm:w-3/4 lg:w-2/5 lg:pl-12 flex flex-col gap-6">
              {[
                { name: "HTML & CSS", value: 85 },
                { name: "Python", value: 70 },
                { name: "JavaScript", value: 98 },
                { name: "Figma", value: 91 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      {skill.name}
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-primary">
                      {skill.value}%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila overflow-hidden">
                    {/* <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.value}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-3 rounded-full bg-primary"
          /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container py-16 md:py-20" id="services">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here s what I m good at
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              These are the services Ioffer
            </h3>

            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-development-white.svg"
                      alt="development icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-development-black.svg"
                      alt="development icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    WEB DEVELOPMENT
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-content-white.svg"
                      alt="content marketing icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-content-black.svg"
                      alt="content marketing icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Technical Writing
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-mobile-white.svg"
                      alt="Mobile Application icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-mobile-black.svg"
                      alt="Mobile Application icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Mobile Development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-email-white.svg"
                      alt="Email Marketing icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-email-black.svg"
                      alt="Email Marketing icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Email Development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-design-white.svg"
                      alt="Theme Design icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-design-black.svg"
                      alt="Theme Design icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Graphic Design
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-graphics-white.svg"
                      alt="Graphic Design icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-graphics-black.svg"
                      alt="Graphic Design icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Web Design
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here s what I have done in the past
            </h3>

            <div className="mx-auto grid max-w-4xl w-full grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-2">
              <Link
                href="/"
                className="mx-auto w-11/12 transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/portfolio-apple.jpeg"
                  className="w-full shadow rounded"
                  alt="portfolio image"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto w-11/12 transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/portfolio-stripe.jpeg"
                  className="w-full shadow rounded"
                  alt="portfolio image"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto w-11/12 transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/portfolio-fedex.jpeg"
                  className="w-full shadow rounded"
                  alt="portfolio image"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto w-11/12 transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/portfolio-microsoft.jpeg"
                  className="w-full shadow rounded"
                  alt="portfolio image"
                />
              </Link>
            </div>
          </div>

          <div className="bg-grey-50" id="clients">
            <div className="container py-16 md:py-20">
              <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  My latest clients
                </h2>
                <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                  <span className="m-8 block">
                    <img
                      src="/assets/img/logo-coca-cola.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>
                  <span className="m-8 block">
                    <img
                      src="/assets/img/logo-apple.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>

                  <span className="m-8 block">
                    <img
                      src="/assets/img/logo-netflix.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>

                  <span className="m-8 block">
                    <img
                      src="/assets/img/logo-amazon.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>

                  <span className="m-8 block">
                    <img
                      src="/assets/img/logo-stripe.svg"
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="work">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My work experience
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here s what I did before freelancing
            </h3>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
              <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <img
                        src="/assets/img/logo-spotify.svg"
                        className="h-auto w-32"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          Apr 2015 - Mar 2018
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          Frontend Developer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <img
                        src="/assets/img/logo-microsoft.svg"
                        className="h-auto w-32"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          Mar 2018 - September 2019
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          Software Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <img
                        src="/assets/img/logo-fedex.svg"
                        className="h-auto w-32"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div className="mt-1 flex">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          October 2019 - Feb 2021
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          DevOps Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
            style={{
              backgroundImage: "url(/assets/img/experience-figure.png)",
            }}
            id="statistics"
          >
            <div className="container">
              <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <img
                        src="/assets/img/icon-project.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon project"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        12
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Finished Projects
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <img
                        src="/assets/img/icon-award.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon award"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        3
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Awards Won
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <img
                        src="/assets/img/icon-happy.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon happy clients"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        8
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Happy Clients
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <img
                        src="/assets/img/icon-puzzle.svg"
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon puzzle"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        99
                      </h1>
                      <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                        Bugs Fixed
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                {/* {blogs.map((blog) => (
      <Link key={blog._id} href="/post" className="shadow">
        <div
          style={{ backgroundImage: `url(${blog.image || "/assets/img/post-02.png"})` }}
          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
        >
          <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
          <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
            Read More
          </span>
        </div>

        <div className="bg-white py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-black">
            {blog.title}
          </span>
          <span className="block pt-2 font-body text-grey-20">
            {blog.content?.[0]?.children?.[0]?.text ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </span>
        </div>
      </Link>
    ))} */}
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here s Link contact form
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Have Any Questions?
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
              <p className="font-body text-grey-10">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                condimentum turpis nisl sem, viverra habitasse urna ante
                lobortis fermentum accumsan. Viverra habitasse urna ante
                lobortis fermentum accumsan.
              </p>
            </div>
            <form className="mx-auto w-full pt-10 sm:w-3/4">
              <div className="flex flex-col md:flex-row">
                <input
                  className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <input
                  className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  placeholder="Email"
                  type="text"
                  id="email"
                />
              </div>
              <textarea
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                id="message"
                // cols="30"
                // rows="10"
              ></textarea>
              <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form>
            <div className="flex flex-col items-center pt-16 lg:flex-row lg:justify-center lg:space-x-6">
              <div className="w-11/12 max-w-sm border-2 border-grey-60 pl-6 pr-0 py-6 sm:py-8">
                <div className="flex items-center">
                  <i className="bx bx-phone text-2xl text-grey-40"></i>
                  <p className="font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  (+881) 111 222 333
                </p>
              </div>

              <div className="w-11/12 max-w-sm border-2 border-grey-60 pl-6 pr-0 py-6 sm:py-8 mt-6 lg:mt-0">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className=" font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  name@mydomain.com
                </p>
              </div>

              <div className="w-11/12 max-w-sm border-2 border-grey-60 pl-6 pr-0 py-6 sm:py-8 mt-6 lg:mt-0">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className=" font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  123 New York D Block 1100, 2011 USA
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
            style={{ backgroundImage: "url(/assets/img/map.png)" }}
          ></div>

          <div
            className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
            style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
          >
            <div className="container relative z-30">
              <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                Keep <span className="font-bold">up-to-date</span> <br />
                with what I m up to
              </h3>
              <form className="mt-6 flex flex-col justify-center sm:flex-row">
                <input
                  className="w-full rounded px-4 py-3 font-body text-black bg-white sm:w-2/5 sm:py-4 lg:w-1/3"
                  type="text"
                  id="email"
                  placeholder="Give me your Email"
                />
                <button className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
                  Join the club
                </button>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-blue-300">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, ATOM.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <Link href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>

    // <div className="home mx-4">
    //   <h1>{blogs[0].title}</h1>
    //   {/* Navbar */}
    //   <div>
    //     <div className="nav p-4">
    //       {/* <h1 className="text-xl font-bold">{blogs[0].content}</h1> */}
    //       <PortableText
    //         // Pass in block content straight from Sanity.io
    //         content={blogs[0].content}
    //         projectId="84pc1jel"
    //         dataset="production"
    //         // Optionally override marks, decorators, blocks, etc. in Link flat
    //         // structure without doing any gymnastics
    //         serializers={{
    //           h1: (props: any) => <h1 style={{ color: "red" }} {...props} />,
    //           // li: ({ children }) => <li className="special-list-item">{children}</li>,
    //         }}
    //       />
    //     </div>
    //   </div>

    //   {/* Homepage */}
    //   <div className="p-6">
    //     <h2 className="text-lg font-semibold">I am Homepage</h2>

    //     {/* Blogs Section */}
    //     <div className="mt-6 space-y-4">
    //       {blogs && blogs.length > 0 ? (
    //         blogs.map((blog) => (
    //           <div
    //             key={blog._id}
    //             className="border p-4 rounded-lg shadow-sm bg-white"
    //           >
    //             <h3 className="text-xl font-bold">{blog.title}</h3>
    //             {blog.image && (
    //               <Image
    //                 src={blog.image}
    //                 alt={blog.title}
    //                 width={400}
    //                 height={250}
    //                 className="rounded-md mt-2"
    //               />
    //             )}
    //             <p className="text-gray-600 mt-2">
    //               {blog.content?.[0]?.children?.[0]?.text || "No content"}
    //             </p>
    //           </div>
    //         ))
    //       ) : (
    //         <p>No blogs found</p>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}

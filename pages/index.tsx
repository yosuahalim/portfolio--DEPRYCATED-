import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = (props: Props) => {
  const { pageInfo, experiences, skills, projects, socials } = props;
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-auto overflow-y-scroll bg-[rgb(36,36,36)] text-white overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section className="snap-start" id="skills">
        <Skills skills={skills} />
      </section>

      <section className="snap-start" id="projects">
        <Projects projects={projects} />
      </section>

      <section className="snap-start" id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 rounded-full w-10 filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://scontent.fbdo10-1.fna.fbcdn.net/v/t39.30808-1/307318606_10219895159718695_2202514320197335716_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Z77cngaqpzQAX99G_N-&_nc_ht=scontent.fbdo10-1.fna&oh=00_AT8FzQJrxsltz13FFfIrBqHhjOwbNMP8TyZHwgDtPyy-dw&oe=6330EDCE"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};

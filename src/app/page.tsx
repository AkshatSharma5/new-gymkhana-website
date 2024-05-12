import { Fullscreen } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Image
        className="absolute top-3 left-3 z-10 invisible lg:visible"
        src="/main_logo.png"
        width={200}
        height={200}
        objectFit="contain"
        alt="Gymkhana main Logo"
      />
      <Image
        className="absolute top-20 left-20 z-10 invisible xl:visible"
        src="/red_plus.svg"
        width={230}
        height={230}
        objectFit="contain"
        alt="Random plus"
      />
      <div className="hero_section w-full absolute top-0 h-[90vh] bg-[url('/hero_background.png')] -z-10 bg-cover bg-center"></div>
      <div className="flex flex-col bg-opacity-0 h-2/3 xl:px-48 xl:py-40 px-12 py-24">
        <span>
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-amber-400">
            Student's
          </p>
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl lg:ml-6 font-extrabold text-white">
            Gymkhana
          </p>
        </span>
        <br></br>
        <p className="text-6xl font-bold text-white">IIT Indore</p>
        <Button
          className="w-36 bg-amber-400 h-12 mt-16 text-md bg-opacity-90"
          radius="full"
        >
          Know more
        </Button>
      </div>
      <section className="bg-zinc-900 text-white px-12 md:px-48 py-4 md:py-4">
        <div>
          <p className="text-6xl font-sans font-bold my-4">About Us</p>
          <p className="max-w-3xl text-lg mb-12">
            A major attraction of IITI is its eminent faculty members and
            flexible education system. The faculty of IM is one of the best
            among Indian professional institutes. The faculty members are
            excellent teachers and mentors and have many achievements in their
            fields. Most of our professors are researchers themselves and are
            deeply connected to their subjects of interest, says a student. It
            is this attitude of our professors that really makes them special
            and attractive to our students. Student Gymkhana is the student
            organization of IIT Indore. The Senate consists of two branches
            namely the Executive and the Councillors. The elected
            representatives of the students strive to promote growth and
            leadership among the students by helping them maximize their talents
            by coordinating various programs. To promote co-curricular
            activities and interests. Gymkhana has a number of clubs and groups
            dedicated to the interests of the students.
          </p>
        </div>
      </section>
      <Image
        className="absolute right-0 top-[70vh] z-10 invisible xl:visible"
        src="/blue_dots.svg"
        width={400}
        height={400}
        objectFit="contain"
        alt="Random plus"
      />
      <section className="relative w-full">
      <div
        className="aspect-w-16 aspect-h-9"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/SdH1PKV7pr4?si=I8wU133J3A5rHtUK&amp;autoplay=1&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    </>
  );
}

// import Hero from "@/components/Hero";
// import Newest from "@/components/Newest";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Newest from "../components/Newest";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />

      <section className="max-w-3xl mt-4 mx-auto">
        <div className="grid grid-cols-3 items-center text-center gap-3">
          <div>
            <div className="md:w-44 md:h-44 h-24 w-24 object-cover object-center m-auto rounded-full overflow-hidden">
              <Link href={"/Women"}>
                <Image
                  src={"/img1.webp"}
                  alt="feature img"
                  height={1000}
                  width={1000}
                  className="w-full h-full rounded-full block transform duration-300 hover:scale-110"
                />
              </Link>
            </div>
            <h4 className="text-sm font-semibold mt-4 cursor-pointer text-gray-900">
              Womens
            </h4>
          </div>

          <div>
            <div className="md:w-44 md:h-44 h-24 w-24 object-cover object-center m-auto rounded-full overflow-hidden">
              <Link href={"/Teen"}>
                <Image
                  src={"/img4.webp"}
                  alt="feature img"
                  height={1000}
                  width={1000}
                  className="w-full h-full rounded-full block transform duration-300 hover:scale-110"
                />
              </Link>
            </div>
            <h4 className="text-sm font-semibold mt-4 text-gray-900">Teens</h4>
          </div>

          <div>
            <div className="md:w-44 md:h-44 h-24 w-24 object-cover object-center m-auto rounded-full overflow-hidden">
              <Link href={"/Men"}>
                <Image
                  src={"/img3.webp"}
                  alt="feature img"
                  height={1000}
                  width={1000}
                  className="w-full h-full rounded-full block transform duration-300 hover:scale-110"
                />
              </Link>
            </div>
            <h4 className="text-sm font-semibold mt-4 text-gray-900">Mens</h4>
          </div>
        </div>
      </section>

      <Newest />

      <div className="max-w-7xl mx-auto">
        <Image
          src={"/sale.webp"}
          alt="hero image"
          height={2000}
          width={2000}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

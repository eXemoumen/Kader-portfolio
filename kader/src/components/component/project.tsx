
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function Project() {
  return (
    <div className="bg-[#4c3575] min-h-screen p-6 text-white flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-10">My Projects</h1>
      <div className=" flex flex-wrap justify-center items-center  gap-10 max-sm:flex-col">
        <div className="group bg-black rounded-3xl  shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[300px] h-[630px] basis-[28%] hover:translate-y-5 max-sm:w-[200px] ">
          <Image
            alt="Project 1"
            className="w-full h-full object-cover rounded-3xl"
            height="530"
            src="/image1.png"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="300"
          />
          <div>
            <h1>Mountain</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
          </div>
        </div>
        <div className="group bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[350px] h-[630px] basis-[28%] max-sm:w-[200px]">
          <Image
            alt="Project 1"
            className="w-full h-full object-cover rounded-3xl"
            height="630"
            src="/image2.png"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="group bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[350px] h-[630px] basis-[28%] max-sm:w-[200px]">
          <Image
            alt="Project 1"
            className="w-full h-full object-cover rounded-3xl"
            height="530"
            src="/image3.png"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="350"
          />
        </div>
        <div className="group bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[350px] h-[630px] basis-[28%] max-sm:w-[200px]">
          <Image
            alt="Project 1"
            className="w-full h-full object-cover rounded-3xl"
            height="400"
            src="/image4.png"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
        <div className="group bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[350px] h-[630px] basis-[28%] max-sm:w-[200px]">
          <Image
            alt="Project 1"
            className="w-full h-full object-cover rounded-3xl"
            height="530"
            src="/image5.png"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="350"
          />
        </div>
        <div className="group bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[350px] h-[630px] basis-[28%] max-sm:w-[200px] ">
          <Image
            alt="Project 1"
            className="w-full h-full object-cover rounded-3xl"
            height="430"
            src="/image6.png"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="350"
          />
        </div>
      </div>

    </div>
  );
}

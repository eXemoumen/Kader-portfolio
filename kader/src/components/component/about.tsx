


export function About() {
  return (
    <section className="bg-[#41394B] text-white p-6 h-3/4" id="about">
      <div className="flex items-center justify-between">
        <div className="w-1/2 max-sm:hidden">
          <img
            alt="Graphic Designer"
            className="rounded-full"
            height="500"
            src="/hero.png"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
        <div className="w-1/2 pl-10 max-sm:w-screen">
          <h1 className="text-6xl font-bold max-sm:text-4xl">
            About <span className="text-[#9747FF]">Me</span>
          </h1>
          <h2 className="text-4xl font-semibold mt-2 max-sm:text-2xl">
            Graphic Designer
          </h2>
          <p className="mt-24 w-3/4 text-lg max-sm:mt-6 max-sm:w-full">
            Si Bachir Abd El Kader, a 19-year-old graphic designer. I design
            engaging posts, carousels, and advertisements with creativity and
            dedication. I also design clothes, including hoodies. My designs
            effectively communicate messages and drive engagement, reflecting my
            commitment to quality and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

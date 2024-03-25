/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/jcoHiLE0wLV
 */
import { Button } from "@/components/ui/button";

export function Service() {
  return (
    <div className="bg-[#1E1E1E] p-6 h-2/3 text-xl">
      <h2 className="text-center text-4xl font-bold text-white mb-32">
        My <span className="text-[#9747FF] ">Services</span>{" "}
      </h2>
      <div className="flex justify-center gap-4">
        <div className="bg-[#41394B] rounded-lg p-6 text-center text-white w-96 h-96 flex flex-col items-center justify-center ">
          <InstagramIcon className="text-[#C13584] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-8">Posts</h3>
          <p className="mb-6">
            Elevate your social media presence with professionally designed
            content.
          </p>
          <Button className="bg-[#7D4E99] text-white py-2 px-4 rounded">
            See More
          </Button>
        </div>
        <div className="bg-[#41394B] rounded-lg p-6 text-center text-white  w-96 h-96 flex flex-col items-center justify-center">
          <DollarSignIcon className="text-[#4CAF50] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-8">Carousels</h3>
          <p className="mb-6">
            Design carousels to captivate your audience and effectively convey
            your message.
          </p>
          <Button className="bg-[#7D4E99] text-white py-2 px-4 rounded">
            See More
          </Button>
        </div>
        <div className="bg-[#41394B] rounded-lg p-6 text-center text-white  w-96 h-96 flex flex-col items-center justify-center">
          <ShirtIcon className="text-[#9C27B0] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-8">Clothes</h3>
          <p className="mb-6">
            Custom designs for your apparel needs, with logos and artwork on
            hoodies, t-shirts, and more.
          </p>
          <Button className="bg-[#7D4E99] text-white py-2 px-4 rounded">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function ShirtIcon(props: any) {
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
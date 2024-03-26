/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/jc5kzQb6KTo
 */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div className="bg-[#1e1e2d] h-full flex flex-col items-center justify-center text-white ">
      <h1 className="text-4xl font-bold mb-8 mt-10">Contact Me!</h1>
      <form className="w-full max-w-2xl space-y-6 max-sm:w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            className="bg-[#2d2d3d] text-white border-none"
            placeholder="First Name"
          />
          <Input
            className="bg-[#2d2d3d] text-white border-none"
            placeholder="Last Name"
          />
          <Input
            className="bg-[#2d2d3d] text-white border-none"
            placeholder="Email Address"
            type="email"
          />
          <Input
            className="bg-[#2d2d3d] text-white border-none"
            placeholder="Number"
            type="tel"
          />
        </div>
        <Textarea
          className="bg-[#2d2d3d] text-white border-none h-36"
          placeholder="Your Message..."
        />
        <div className="flex justify-center">
          <Button className="mt-4 max-sm:mt-1" variant="secondary">
            Send
          </Button>
        </div>
      </form>
    </div>
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

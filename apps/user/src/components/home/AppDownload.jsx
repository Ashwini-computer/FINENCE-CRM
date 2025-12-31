import {
  TypographyMuted,
  TypographyH3,
  TypographyH4,
} from "@/custom/Typography";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const appCards = [
  "Track your credit score all the time and stay financially healthy",
  "Get exclusive Loans and Credit Card offers",
  "Enjoy a seamless experience",
];

export default function AppDownload() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12 px-6">
      <div className="flex flex-col gap-6">
        <TypographyH3 className="text-blue-950 font-bold sm:tracking-normal mb-2">
          Download the Financesbazar Mobile App
        </TypographyH3>
        <div className="grid gap-3">
          {appCards?.map((option, index) => (
            <TypographyMuted
              key={index}
              className="font-semibold flex items-center gap-2"
            >
              <IoCheckmarkCircleOutline size={22} className="text-accent" />
              {option}
            </TypographyMuted>
          ))}
        </div>
        <div className="gap-4 sm:grid hidden mt-6">
          <TypographyH4 className="opacity-85 text-blue-950">
            Scan or click to Download App on your mobile
          </TypographyH4>
          <div className="flex items-center gap-6">
            <div className="w-[100px] cursor-pointer">
              <img loading="lazy" src="/assets/scanner.jpg" alt="QR code" />
            </div>
            <TypographyMuted className="font-semibold text-xs">
              OR
            </TypographyMuted>
            <div className="w-[150px] cursor-pointer">
              <img
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzw7azF-c90zMgulLF9i0dWzuTHh_9Ru_XIw&s"
                alt="play-tore"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          loading="lazy"
          src="/assets/mobile.png"
          alt="mobile"
          className="h-96"
        />
        <Button className="block sm:hidden w-full mb-4 font-semibold">
          Download the App now
        </Button>
      </div>
    </div>
  );
}

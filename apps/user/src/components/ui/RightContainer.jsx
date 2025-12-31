import {
  TypographyH3,
  TypographyP,
  TypographySmall,
} from "@/custom/Typography";

export const RightContainer = ({ paragraph, title, items }) => {
  return (
    <div className="bg-[#CAD7FE] sm:p-8 p-6 relative sm:h-screen">
      <img loading="lazy" src="/logo.png" alt="logo" className="w-42" />
      <div className="max-w-lg mx-auto sm:mt-10 mt-4 relative">
        <div className="grid gap-2 sm:gap-4">
          <TypographyH3 className="text-[#1b1dc7]">{title}</TypographyH3>
          <TypographyP className="opacity-85 text-sm sm:leading-7">
            {paragraph}
          </TypographyP>
          <div className="grid gap-2 sm:gap-6 mt-4 opacity-75">
            {items?.map((item, index) => (
              <TypographySmall key={index}>- {item}</TypographySmall>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

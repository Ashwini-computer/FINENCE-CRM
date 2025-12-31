import {
  TypographyH2BlueColor,
  TypographyPBlueColor,
  TypographyH4BlueColor,
  TypographySmall,
  TypographyList,
  TypographyMuted,
} from "@/custom/Typography";
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const MobileHeader = ({
  mobileHeroheadline,
  mobileHeroheadlineList,
  features,
  mobileHeroImeges,
  showRightPanel2,
  onLogout,
}) => {
  const Navigate = useNavigate();
  return (
    <div className="sm:hidden flex flex-col w-full">
      <div className="h-14 px-6 bg-white flex justify-between items-center w-full border-b shadow">
        <img
          loading="lazy"
          src="/logo.png"
          alt=""
          onClick={() => Navigate("/")}
          className="w-32"
        />
        {!showRightPanel2 ? (
          <Link to="/sign-in">
            <Button
              variant="outline"
              size="sm"
              className="flex sm:shadow bg-muted sm:bg-transparent shadow-none sm:border-primary text-primary hover:bg-primary hover:text-white"
            >
              <FiUser className="h-4 w-4" />
              Sign In
            </Button>
          </Link>
        ) : (
          <Button
            onClick={onLogout}
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:"
          >
            Logout
          </Button>
        )}
      </div>
      <div className="bg-[#E7F2E4] w-full flex justify-between py-6">
        <div className="pl-4 basis-sm space-y-3">
          <TypographyH4BlueColor className="mt-0">
            {mobileHeroheadline}
          </TypographyH4BlueColor>
          {mobileHeroheadlineList && (
            <TypographyList
              items={mobileHeroheadlineList}
              className="text-muted-foreground mt-2 text-xs"
            />
          )}
          {features && (
            <div className="space-y-2">
              {features?.map((feature, index) => (
                <TypographyMuted key={index} className="flex gap-2 text-xs">
                  <IoCheckmarkCircleOutline className="text-accent" size={14} />
                  {feature}
                </TypographyMuted>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-end items-end">
          <img
            loading="lazy"
            src={mobileHeroImeges}
            alt="credit-score"
            className="w-62"
          />
        </div>
      </div>
    </div>
  );
};

export const LeftGradiantPannel = ({ content, data, image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-[#E7F2E4] w-full h-screen sm:flex flex-col hidden overflow-hidden">
      <div className="max-w-md p-8">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/logo.png"
            alt="logo"
            loading="lazy"
            className="w-38 h-fit"
          />
        </Link>
        <div className="mt-[25%] ml-[20%] w-full">
          <TypographyH2BlueColor className="tracking-normal">
            {content?.heading}
          </TypographyH2BlueColor>
          <TypographyPBlueColor className="leading-7">
            {content?.description}
          </TypographyPBlueColor>
          <TypographySmall className="tracking-normal">
            {content?.applyNavigateAbout}
            <Link to={content?.navigateLink}>
              <span className="text-blue-700">{content?.navigateName}</span>
            </Link>
          </TypographySmall>

          {image && (
            <img src={image} alt="photo" loading="lazy" className="w-96" />
          )}

          {/* Animation Carousel */}
          {data && (
            <div className="mt-16 overflow-hidden">
              <motion.div
                key={data?.[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-dashed border-black p-3 rounded-full">
                  <span className=" font-semibold">
                    {data?.[currentIndex].id}
                  </span>
                </div>
                <div>
                  <TypographySmall className="">
                    {data?.[currentIndex].title}
                  </TypographySmall>
                  <TypographyPBlueColor className="mt-2 ">
                    {data?.[currentIndex].description}
                  </TypographyPBlueColor>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import {
  HighLighter,
  TypographyH2BlueColor,
  TypographyH4BlueColor,
  TypographyMuted,
  TypographyPBlueColor,
} from "@/custom/Typography";
import { LiaDownloadSolid } from "react-icons/lia";
import { TbReportMoney } from "react-icons/tb";
import { GrScorecard, GrFormNextLink } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { useContextFile } from "@/context/contextFile";
import { formatDateDDMMYYYY, formatDateMMYY } from "@/lib/utils";
import { Link } from "react-router-dom";
import { GetKycDetailsForm } from "../../pages/GetKycDetailsForm";
import { checkCibilScore, getCibilReportData } from "@/machine/Cibil";
import { getUserData } from "@/machine/userData";
import { PaymentBill } from "@/machine/PaymentsBill";
import CreditSummary from "./CreditSummary";
import { downloadCreditReport } from "../../../machine/Cibil";

const offers = [
  {
    badgeText: "Exclusive Offer",
    badgeColor: "#3b82f6", // blue-600
    borderColor: "border-blue-400",
    bgColor: "bg-white",
    logo: "https://cdn-icons-png.flaticon.com/512/869/869636.png", // 🎁 gift icon replacement
    title: "Hey, Abhijit! We have an offer handpicked just for you!",
    features: [
      "Exclusive credit card deals tailored for your needs.",
      "Personalized as per your profile",
      "Limited-time offer just for you",
    ],
    buttonText: "View Offers",
    navigateon: "/myaccount/offers",
  },
  {
    badgeText: "Credit Report",
    badgeColor: "#22c55e", // green-500
    borderColor: "border-green-400",
    bgColor: "bg-white",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // 📄 doc icon replacement
    title: "Credit Report – Check your score and history",
    features: [
      "Instant access to your credit score",
      "Track your financial health",
      "No impact on your credit profile",
    ],
    buttonText: "Know More",
    navigateon: "/myaccount/offers",
  },
];

const CreditScoreCard = () => {
  const { user, setUser } = useContextFile();
  const [loading, setLoading] = useState(true);
  const [cibilReport, setCibilReport] = useState(null);

  console.log(cibilReport);

  useEffect(() => {
    const fetchData = async () => {
      await getUserData(setUser);
      setLoading(false);
    };
    fetchData();
  }, []);

  const fetchCibilReport = async () => {
    if (!user?._id) return;
    const report = await getCibilReportData(user._id);
    setCibilReport(report);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user?.iskyc === true) {
      fetchCibilReport();
    }
  }, [user]);

  const handlereportdownload = async () => {
    // user?.paymentStatus?.status === "successful"
    //   ? checkCibilScore(user?._id)
    //   : PaymentBill(user);
    downloadCreditReport(user?._id);
  };

  const score = cibilReport?.cibilScore ?? cibilReport ?? 0;
  let status = "";
  if (score >= 750) status = "Good";
  else if (score >= 650) status = "Average";
  else if (score >= 550) status = "Poor";
  else status = "Very Poor";

  if (loading) {
    return (
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <div className="h-4 w-40 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-48 bg-gray-300 rounded animate-pulse" />
        </div>

        <div className="flex flex-col md:flex-row items-center w-full gap-8">
          <div className="flex flex-col gap-4 items-center w-full md:w-1/2">
            <div className="w-[250px] h-[160px] bg-gray-300 animate-pulse rounded-full" />
            <div className="h-10 w-40 bg-gray-300 rounded animate-pulse" />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="h-6 w-60 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg space-y-4 animate-pulse"
            >
              <div className="h-6 w-24 bg-gray-300 rounded" />
              <div className="h-8 w-32 bg-gray-300 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-3/4 bg-gray-300 rounded" />
                <div className="h-4 w-2/3 bg-gray-300 rounded" />
                <div className="h-4 w-1/2 bg-gray-300 rounded" />
              </div>
              <div className="h-10 w-32 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      {user?.iskyc ? (
        /* Actual Content after loading */
        <div>
          <div className="p-4 md:p-6 bg-white sm:shadow-lg sm:rounded-xl w-full max-w-4xl mx-auto">
            <div className="sm:flex hidden flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-6">
              <TypographyPBlueColor>
                Hey{" "}
                <span className="font-bold tracking-normal capitalize">
                  {user?.name?.split(" ")[0] || ""}!{" "}
                </span>{" "}
                Here's your Credit Score for{" "}
                {formatDateDDMMYYYY(cibilReport?.generatedAt)}
              </TypographyPBlueColor>
              <TypographyPBlueColor>
                Next report on:{" "}
                <span className="font-bold tracking-normal">
                  {formatDateDDMMYYYY(cibilReport?.expiresAt)}
                </span>
              </TypographyPBlueColor>
            </div>

            <div className="sm:hidden flex justify-between items-center">
              <div className="flex flex-col gap-0">
                <TypographyPBlueColor className="text-xs">
                  <span className="mt-0 font-medium text-base capitalize tracking-normal">
                    Hey {user?.name?.split(" ")[0] || ""}!
                  </span>
                  <br />
                  Here's your Credit Score for {formatDateMMYY(user?.date)}
                </TypographyPBlueColor>
              </div>
              <div>
                <TypographyPBlueColor className="text-xs">
                  Next report on:
                  <br />
                  <span className="mt-0 font-medium text-sm tracking-normal">
                    {formatDateDDMMYYYY(user?.date)}
                  </span>
                </TypographyPBlueColor>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center w-full gap-8">
              <div className="flex flex-col gap-4 sm:mt-0 mt-8 items-center w-full md:w-1/2">
                <ReactSpeedometer
                  value={score}
                  minValue={300}
                  maxValue={900}
                  segments={5}
                  segmentColors={[
                    "#ff4d4f",
                    "#faad14",
                    "#52c41a",
                    "#1890ff",
                    "#722ed1",
                  ]}
                  currentValueText={`${score}`}
                  ringWidth={30}
                  needleColor="black"
                  textColor="black"
                  width={250}
                  height={160}
                />
                <button
                  onClick={handlereportdownload}
                  className="flex items-center gap-2 text-blue-800 py-2 px-4 border border-blue-800 hover:bg-blue-800 transition-all hover:text-white cursor-pointer rounded-md text-sm"
                >
                  <LiaDownloadSolid />
                  Download Report
                </button>
              </div>

              <div className="flex flex-col gap-4 justify-center w-full md:w-1/2 text-center md:text-left">
                <TypographyH4BlueColor className="font-medium mt-0 tracking-normal">
                  You are doing {status}!
                </TypographyH4BlueColor>
                <TypographyMuted>
                  A Credit Score is a 3 digit number which ranges between{" "}
                  <strong>300-900</strong>. Maintaining a{" "}
                  <strong>{status}</strong> or better score helps you get best
                  offers on Loans or Credit Cards.
                </TypographyMuted>
                <div className="flex gap-4 sm:border-none border-t-2 sm:p-0 p-4 sm:mt-6 justify-between">
                  <button className="flex items-center gap-1 text-blue-800 font-medium text-sm cursor-pointer">
                    <GrScorecard size={16} className="text-accent" />
                    Score Predictor
                  </button>
                  <button className="flex items-center gap-1 text-blue-800 font-medium text-sm cursor-pointer">
                    <TbReportMoney size={16} className="text-accent" />
                    View Report
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 mx-6">
            <TypographyH2BlueColor>Personalized Offers</TypographyH2BlueColor>
            <TypographyMuted>Handpicked for your Credit Needs</TypographyMuted>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {offers.map((offer, index) => (
                <LoanCard key={index} {...offer} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <GetKycDetailsForm
          checkCibilScore={checkCibilScore(user?._id)}
          fetchCibilReport={fetchCibilReport}
        />
      )}
      {user?.paymentStatus?.status === "successful" && (
        <CreditSummary cibilReport={cibilReport} />
      )}
      <div className="sm:rounded-md bg-white mt-8 p-6 shadow-md grid grid-cols-12 gap-8">
        <div className="lg:col-span-5 col-span-8 grid gap-3">
          <TypographyPBlueColor className="text-blue-950 p-2 rounded bg-blue-100 text-xs text-center">
            Your <span className="font-semibold">Credit Report</span> is more
            than just a Score
          </TypographyPBlueColor>
          <HighLighter
            rightText="Get your"
            leftText="Credit Health Report"
            highLighter="to find out more!"
          />
          <Button className="w-full">Know More</Button>
        </div>
      </div>

      {/* <div className="sm:rounded-md bg-white mt-8 p-6 shadow-md">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
    
    <div className="grid gap-3">
      <TypographyPBlueColor className="text-blue-950 p-2 rounded bg-blue-100 text-xs text-center">
        Your <span className="font-semibold">Credit Report</span> is more
        than just a Score
      </TypographyPBlueColor>

      <HighLighter
        rightText="Get your"
        leftText="Credit Health Report"
        highLighter="to find out more!"
      />

      <Button className="w-full">Know More</Button>
    </div>

    <div className="w-full flex justify-center">
      <div className="bg-white rounded-lg shadow p-4 max-w-sm w-full">
        <AutoMovingBankOffers />
      </div>
    </div>

  </div>
</div> */}
    </>
  );
};

export default CreditScoreCard;

const LoanCard = ({
  badgeText,
  badgeColor,
  borderColor,
  bgColor,
  logo,
  title,
  features,
  buttonText,
  navigateon,
}) => {
  return (
    <div
      className={`rounded-lg grid gap-3 shadow-md sm:p-8 p-6 ${borderColor} border-l-4 ${bgColor}`}
    >
      {/* Badge */}
      <div
        className="w-fit px-3 py-1 text-xs font-medium rounded mb-4"
        style={{ backgroundColor: badgeColor, color: "#fff" }}
      >
        {badgeText}
      </div>

      {/* Logo */}
      {logo && (
        <img loading="lazy" src={logo} alt="logo" className="h-8 mb-4" />
      )}

      {/* Title */}
      <TypographyH4BlueColor className="mt-0">{title}</TypographyH4BlueColor>

      {/* Features */}
      <ul className="space-y-2 mb-6 mt-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <span className="text-pink-600 mr-2">✔</span> {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <Link to={navigateon}>
        <Button>
          {buttonText}
          <GrFormNextLink />
        </Button>
      </Link>
    </div>
  );
};

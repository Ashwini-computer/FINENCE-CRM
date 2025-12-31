import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { BsCheckCircle } from "react-icons/bs";
import { TypographyMuted, HighLighter, TypographySmall, TypographyH3 } from '@/custom/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import OtpDialog from '@/custom/OtpDialog';
import { SendOtpToMobile } from '@/machine/OTP';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const MobileInputField = ({ navigateLink, buttonName, loginSubHedline, highlighterHedline }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCheckOffers = async () => {
        if (mobileNumber.length !== 10) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        setError('');
        setOpenDialog(true);

        await SendOtpToMobile({ mobile: "+91" + mobileNumber, setError });
    };

    const handleOtpVerified = () => {
        setOpenDialog(false);
        navigate(navigateLink);
    };
    return (
        <>
            <div className="rounded-lg bg-white shadow-sm sm:col-span-5">
                <div className="h-1.5 bg-accent rounded-t-lg" />
                <div className="p-6 space-y-2">
                    <HighLighter
                        rightText={highlighterHedline?.rightText}
                        highLighter={highlighterHedline?.highLighter}
                        leftText={highlighterHedline?.leftText}
                    />
                    <div className="flex items-center gap-2 border-2 border-gray-300 focus-within:border-blue-500 p-3 rounded-md">
                        <TypographySmall className="font-semibold text-sm">+91</TypographySmall>
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="text-sm focus:outline-none font-semibold w-full"
                            value={mobileNumber}
                            maxLength={10}
                            onChange={(e) => {
                                setMobileNumber(e.target.value.replace(/\D/g, ''));
                                setError('');
                            }}
                            onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        />
                    </div>
                    {error && <div className="text-red-500 text-xs">{error}</div>}
                    <TypographyMuted className="text-xs">{loginSubHedline}</TypographyMuted>
                    <Button type="submit" className="w-full cursor-pointer" onClick={handleCheckOffers}>
                        {buttonName || "Check Offers"} <FiArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
            <OtpDialog
                open={openDialog}
                setOpen={setOpenDialog}
                mobile={"+91" + mobileNumber}
                onVerified={handleOtpVerified}
            />
        </>
    );
};


export default function HeroLoginCard({
    headline,
    description,
    cards,
    navigateLink,
    highlighterHedline,
    loginSubHedline,
    ratingInfo,
    buttonName,
    list,
    listHeadline
}) {
    return (
        <>
            <div className="overflow-hidden py-8 sm:py-12" style={{ background: "linear-gradient(to bottom, #ffffff, #f5f9ff, #f0fdfa)" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-12">
                        <div className="sm:col-span-7">
                            <TypographyH3 className="text-blue-950">{headline}</TypographyH3>
                            <TypographyMuted className="sm:mb-8 mt-2 mb-4">{description}</TypographyMuted>

                            {list && listHeadline && (
                                <div className="sm:w-fit p-4 rounded-lg bg-white shadow">
                                    <HighLighter
                                        rightText={listHeadline?.rightText}
                                        highLighter={listHeadline?.highLighter}
                                        leftText={listHeadline?.leftText}
                                    />
                                    <div className='space-y-2'>
                                        {list?.map((item, index) => (
                                            <TypographyMuted key={index} className="flex items-center gap-2">
                                                <BsCheckCircle className='text-accent' />  {item}
                                            </TypographyMuted>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Desktop view */}
                            <div className="lg:grid lg:grid-cols-4 lg:gap-3 pb-4 hidden">
                                {cards?.map((feature, i) => (
                                    <div key={i} className="bg-transparent border cursor-pointer shadow hover:translate-y-1/6 transition-all border-primary rounded-md p-3 flex flex-col gap-2">
                                        <div className="flex items-center gap-1">
                                            <span className="text-accent">{feature?.icon}</span>
                                            <TypographySmall className="font-semibold mr-2 text-xs">{feature?.title}</TypographySmall>
                                        </div>
                                        <TypographyMuted className="text-xs line-clamp-3">{feature?.description}</TypographyMuted>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile view */}
                            <div className="flex lg:hidden overflow-x-auto gap-3 pb-4">
                                {cards?.map((feature, i) => (
                                    <div key={i} className="min-w-[150px] bg-transparent border cursor-pointer shadow hover:translate-y-1/6 transition-all border-primary rounded-md p-4 flex flex-col gap-2">
                                        <div className="flex items-center gap-1">
                                            <span className="text-accent">{feature?.icon}</span>
                                            <TypographySmall className="font-semibold mr-2 text-xs">{feature?.title}</TypographySmall>
                                        </div>
                                        <TypographyMuted className="text-xs">{feature?.description}</TypographyMuted>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Login Card */}
                        <MobileInputField
                            navigateLink={navigateLink}
                            buttonName={buttonName}
                            loginSubHedline={loginSubHedline}
                            highlighterHedline={highlighterHedline}
                        />
                    </div>
                </div>
            </div>

            {ratingInfo && (
                <div className="py-6 px-4">
                    <div className="max-w-6xl mx-auto bg-primary/10 rounded-lg p-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {ratingInfo.map((stat, index) => (
                                <div key={index} className="grid gap-2 text-center">
                                    <TypographyH3 className="font-bold tracking-wider">{stat.title}</TypographyH3>
                                    {stat.icon === "stars" ? (
                                        <div className="ml-2 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <FiStar
                                                    key={i}
                                                    className={`inline-block h-4 w-4 ${i < 4 ? "fill-current" : "stroke-current"}`}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <TypographyMuted className="font-medium italic">{stat.subtitle}</TypographyMuted>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export const HeroLoginCard2 = ({
    headline,
    description,
    navigateLink,
    highlighterHedline,
    loginSubHedline,
    buttonName,
    list,
    listHeadline
}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const formatPathSegment = (path) => {
        const segments = path.split('/');
        const last = segments[segments.length - 1];
        return last.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    return (
        <div className="max-w-6xl mx-auto px-5 sm:px-6 mt-6 sm:mt-10">
            {/* Headline Section */}
            <div className='sm:bg-primary/10 relative rounded-md sm:p-4'>
                <div className='max-w-3xl space-y-2'>
                    <TypographyH3 className="text-primary font-medium tracking-normal">{headline}</TypographyH3>
                    <TypographyMuted className="sm:mb-8 mb-4">{description}</TypographyMuted>
                </div>
                <div className="sm:flex absolute right-3 -top-6 hidden justify-end overflow-x-auto whitespace-nowrap">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/cibil">What Is Cibil</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/cibil-credit-report">Cibil Score</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="cursor-pointer">
                                    {formatPathSegment(currentPath)}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Main Card Section */}
            <div className='bg-gray-50 sm:p-10 p-4 mt-4 border sm:border-none rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-12 sm:gap-0 gap-8'>
                <div className='md:col-span-7 space-y-6'>
                    {list && listHeadline && (
                        <>
                            {
                                listHeadline && (
                                    <HighLighter
                                        rightText={listHeadline?.rightText}
                                        highLighter={listHeadline?.highLighter}
                                        leftText={listHeadline?.leftText}
                                    />
                                )
                            }
                            <div className='space-y-4'>
                                {list?.map((item, index) => (
                                    <TypographySmall key={index} className="flex items-center text-muted-foreground gap-2">
                                        <BsCheckCircle className='text-accent' /> {item}
                                    </TypographySmall>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className='md:col-span-5'>
                    <MobileInputField
                        navigateLink={navigateLink}
                        buttonName={buttonName}
                        loginSubHedline={loginSubHedline}
                        highlighterHedline={highlighterHedline}
                    />
                </div>
            </div>
        </div>

    );
};

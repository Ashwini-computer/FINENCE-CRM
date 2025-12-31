import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import {
    CalendarCheck,
    CreditCard,
    Hourglass,
    MailCheck,
    Landmark
} from "lucide-react"
import { Link } from "react-router-dom"

// --- MOCK DATA ---
const mockCibilReport = {
    accounts: [
        {
            type: "Credit Card",
            bank: "HDFC Bank",
            number: "XXXX-1234",
            status: "Active",
            opened: "2019-06-15",
            limit: 200000,
            balance: 35000,
            onTimePayments: 36,
            latePayments: 1,
        },
        {
            type: "Loan",
            bank: "Bajaj Finserv",
            number: "XXXX-5678",
            status: "Closed",
            opened: "2021-01-10",
            closed: "2023-03-01",
            amount: 500000,
            onTimePayments: 24,
            latePayments: 0,
        },
        {
            type: "Loan",
            bank: "HDB",
            number: "XXXX-6316",
            status: "Active",
            opened: "2022-09-01",
            amount: 300000,
            onTimePayments: 18,
            latePayments: 2,
        }
    ],
    enquiries: [
        { bank: "HDFC Bank", date: "2024-05-10", purpose: "Credit Card" },
        { bank: "Bajaj Finserv", date: "2024-04-22", purpose: "Personal Loan" },
        { bank: "Axis Bank", date: "2024-03-15", purpose: "Credit Card" },
        { bank: "HDB", date: "2023-12-01", purpose: "Consumer Loan" },
        { bank: "ICICI Bank", date: "2023-11-10", purpose: "Credit Card" },
    ],
    reportData: {
        reportDetails: {
            utilisationSummary: {
                utilisationPercent: 17,
                totalLimit: 200000,
                totalUsed: 35000,
            },
            accountAge: {
                averageAge: "3Y 2M",
                oldest: "5Y 1M",
            },
            paymentHistory: {
                onTimePercent: 95,
                totalPayments: 78,
                latePayments: 3,
            }
        }
    }
}

export default function CreditSummary({ cibilReport }) {
    const report = mockCibilReport || cibilReport

    const summaryCards = [
        {
            key: "payments",
            title: "Payments",
            value: `${report?.reportData?.reportDetails?.paymentHistory?.onTimePercent || 0}%`,
            impact: "High Impact",
            description: "Timely payments of past dues",
            icon: <CalendarCheck size={24} className="text-blue-600" />,
            bgColor: "bg-blue-50",
            textColor: "text-green-600",
        },
        {
            key: "accounts",
            title: "Accounts",
            value: report?.accounts?.length?.toString() || "0",
            impact: "Low Impact",
            description: "Active credit accounts",
            icon: <Landmark size={24} className="text-purple-600" />,
            bgColor: "bg-purple-50",
            textColor: "text-green-600",
        },
        {
            key: "utilisation",
            title: "Utilisation",
            value: `${report?.reportData?.reportDetails?.utilisationSummary?.utilisationPercent || 0}%`,
            impact: "High Impact",
            description: `Current credit usage: ₹${report?.reportData?.reportDetails?.utilisationSummary?.totalUsed?.toLocaleString() || 0} / ₹${report?.reportData?.reportDetails?.utilisationSummary?.totalLimit?.toLocaleString() || 0}`,
            icon: <CreditCard size={24} className="text-yellow-600" />,
            bgColor: "bg-yellow-50",
            textColor: "text-green-600",
        },
        {
            key: "age",
            title: "Age",
            value: report?.reportData?.reportDetails?.accountAge?.averageAge || "0Y 0M",
            impact: "Medium Impact",
            description: `Oldest account: ${report?.reportData?.reportDetails?.accountAge?.oldest || "0Y 0M"}`,
            icon: <Hourglass size={24} className=" text-cyan-600" />,
            bgColor: "bg-cyan-50",
            textColor: "text-green-600",
        },
        {
            key: "enquiries",
            title: "Enquiries",
            value: report?.enquiries?.length?.toString() || "0",
            impact: "Medium Impact",
            description: "Recent credit report pulls",
            icon: <MailCheck size={24} className="text-red-600" />,
            bgColor: "bg-red-50",
            textColor: "text-red-600",
        },
    ].map((card) => ({
        ...card,
        buttonName: `Check ${card.title}`,
    }))

    return (
        <>
            {/* Summary Cards */}
            <div className=" mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {summaryCards.map((card) => (
                    <div
                        key={card.key}
                        className={cn(
                            "flex justify-between items-center p-4 rounded-lg shadow-sm border transition hover:shadow-md bg-white"
                        )}
                    >
                        <div className="flex items-start gap-4">
                            <div className="min-w-[40px] flex items-center justify-center bg-gray-200 rounded-full p-3">
                                {card.icon}
                            </div>
                            <div>
                                <div className="text-sm sm:text-base font-semibold text-blue-950">
                                    {card?.title}{" "}
                                    <span className={cn("ml-2 font-bold text-sm sm:text-base", card.textColor)}>
                                        {card.value}
                                    </span>
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500">{card?.description}</div>
                                <div className="text-xs font-medium text-gray-400">{card.impact}</div>
                            </div>
                        </div>
                        <Link to="/myaccount/dashboard/credit-report/reportdetails" state={{ cibilReport: report, cardKey: card.key }}>
                            <Button size='sm'>
                                {card?.buttonName}
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

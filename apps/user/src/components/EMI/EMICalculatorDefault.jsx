import { Button } from '@/components/ui/button';
import { useState } from "react";
import {
    TypographyMuted,
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyH3,
} from '@/custom/Typography';

export default function EMICalculatorDefault({
    headline,
    paragraph,
    inputHeading,
    outputHeading
}) {
    const [amount, setAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(7);
    const [tenure, setTenure] = useState(3);
    const [emiDetails, setEmiDetails] = useState(null);

    const calculateEMI = () => {
        const P = parseFloat(amount);
        const R = parseFloat(interestRate) / 12 / 100;
        const N = parseInt(tenure) * 12;

        if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
            setEmiDetails(null);
            return;
        }

        const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        const totalAmount = EMI * N;
        const totalInterest = totalAmount - P;

        setEmiDetails({
            emi: EMI.toFixed(2),
            totalAmount: totalAmount.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            principal: P.toFixed(2),
        });
    };

    return (
        <>
            <TypographyH2BlueColor>{headline}</TypographyH2BlueColor>
            <TypographyPBlueColor>
                {paragraph}
            </TypographyPBlueColor>

            <div className="border rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Input Section */}
                <div className="p-2 sm:p-4 w-full">
                    <div className="flex flex-col gap-1 font-semibold text-blue-800">
                        {inputHeading}
                        <span className="w-10 h-px bg-accent" />
                    </div>
                    <div className="mt-6">
                        <TypographyMuted className="text-xs mb-2 font-semibold">Amount</TypographyMuted>
                        <div className="flex gap-2 border-b pb-2 w-full">
                            <span className="text-muted-foreground border-r-2 pr-2">₹</span>
                            <input
                                type="text"
                                placeholder="Enter amount"
                                className="w-full focus:border-none focus:outline-none text-sm font-semibold text-blue-950"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-3">
                            <div className="w-full">
                                <TypographyMuted className="text-xs mb-2 font-semibold">Interest Rate</TypographyMuted>
                                <div className="flex gap-2 border-b pb-2 w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter rate"
                                        className="w-full focus:border-none focus:outline-none text-sm font-semibold text-blue-950"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value.replace(/[^\d.]/g, ""))}
                                    />
                                    <span className="text-muted-foreground text-sm border-l-2 pl-2">%</span>
                                </div>
                            </div>
                            <div className="w-full">
                                <TypographyMuted className="text-xs mb-2 font-semibold">Tenure</TypographyMuted>
                                <div className="flex gap-2 border-b pb-2 w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter tenure"
                                        className="w-full focus:border-none focus:outline-none text-sm font-semibold text-blue-950"
                                        value={tenure}
                                        onChange={(e) => setTenure(e.target.value.replace(/\D/g, ""))}
                                    />
                                    <span className="text-muted-foreground text-sm border-l-2 pl-2">Year(s)</span>
                                </div>
                            </div>
                        </div>

                        <Button className="mt-4 w-full" onClick={calculateEMI}>Calculate</Button>
                    </div>
                </div>

                {/* Output Section */}
                <div className="bg-primary/10 p-4 w-full">
                    <div className="flex flex-col gap-1 font-semibold text-blue-800">
                        {outputHeading}
                        <span className="w-10 h-px bg-accent" />
                    </div>
                    {
                        <div className="grid grid-cols-2 gap-6 mt-4">
                            <div className="grid gap-2">
                                <TypographyMuted className="font-semibold tracking-normal">Monthly EMI</TypographyMuted>
                                <TypographyH3 className="text-blue-800 font-bold break-words">₹ {emiDetails?.emi || 0}</TypographyH3>
                            </div>
                            <div className="grid gap-2">
                                <TypographyMuted className="font-semibold tracking-normal">Total Amount Payable</TypographyMuted>
                                <div>
                                    <TypographyH3 className="text-blue-800 font-bold break-words">₹ {emiDetails?.totalAmount || 0}</TypographyH3>
                                    <TypographyMuted className="font-semibold text-xs">(Principal + Interest)</TypographyMuted>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <TypographyMuted className="font-semibold tracking-normal">Principal Amount</TypographyMuted>
                                <TypographyH3 className="text-blue-950 font-bold break-words">₹ {emiDetails?.principal || 0}</TypographyH3>
                            </div>
                            <div className="grid gap-2">
                                <TypographyMuted className="font-semibold tracking-normal">Total Interest Payable</TypographyMuted>
                                <TypographyH3 className="text-blue-950 font-bold break-words">₹ {emiDetails?.totalInterest || 0}</TypographyH3>
                            </div>
                        </div>

                        // <TypographyMuted className="text-sm mt-4">Enter valid inputs to calculate EMI.</TypographyMuted>
                    }
                </div>
            </div>

        </>
    );
};
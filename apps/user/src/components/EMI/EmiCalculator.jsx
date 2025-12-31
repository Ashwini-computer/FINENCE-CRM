// components/EmiCalculator.tsx
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { TypographyMuted, TypographySmall, TypographyH2, TypographyH3 } from '@/custom/Typography';
import { calculateEMI, generateEmiTable } from '@/lib/utils';
import { useContextFile } from '@/context/contextFile';

export default function EmiCalculator({ headline }) {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(3);
  const [interestRate, setInterestRate] = useState(12);

  const { setEMITableData } = useContextFile()

  const emiValue = calculateEMI(loanAmount, interestRate, tenure);
  const totalAmount = (emiValue * tenure * 12).toFixed(2);
  const interestAmount = (totalAmount - loanAmount).toFixed(2);
  const emiTableData = generateEmiTable(loanAmount, interestRate, tenure, emiValue);

  useEffect(() => {
    if (emiTableData) {
      setEMITableData(emiTableData);
    }
  }, [loanAmount, tenure, interestRate])

  return (
    <>
      <div className="max-w-6xl mt-12 border border-gray-300 p-4 sm:p-6 rounded-md sm:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Panel */}
        <div>
          <TypographyH3 className="font-semibold mb-4">{headline}</TypographyH3>
          <div className="space-y-4">
            {/* Loan Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-muted-foreground">Loan Amount (₹)</label>
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(+e.target.value)}
                  className="mt-2 w-[120px]"
                />
              </div>
              <Slider defaultValue={[loanAmount]} max={5000000} step={10000} onValueChange={([val]) => setLoanAmount(val)} />
            </div>

            {/* Interest & Tenure */}
            <div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-muted-foreground">Rate of Interest (Per Annum)</label>
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(+e.target.value)}
                    className="mt-2 w-[120px]"
                  />
                </div>
                <Slider defaultValue={[interestRate]} max={30} step={0.5} onValueChange={([val]) => setInterestRate(val)} />
              </div>

              {/* Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-muted-foreground">Tenure (Years)</label>
                  <Input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(+e.target.value)}
                    className="mt-2 w-[120px]"
                  />
                </div>
                <Slider defaultValue={[tenure]} max={10} step={1} onValueChange={([val]) => setTenure(val)} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div>
          <div className="bg-primary/10 p-4 grid gap-2 rounded-lg text-center">
            <TypographyMuted className="text-md font-semibold">Your Monthly EMI Payment</TypographyMuted>
            <TypographyH2 className="text-green-600">₹{emiValue}</TypographyH2>
          </div>

          <div className="grid gap-3 ml-3 mt-4">
            <div className="flex justify-between items-center">
              <TypographyMuted className="font-semibold tracking-normal">Principal Amount</TypographyMuted>
              <TypographySmall className="font-semibold">₹{loanAmount.toLocaleString()}</TypographySmall>
            </div>
            <div className="flex justify-between items-center">
              <TypographyMuted className="font-semibold tracking-normal">Interest Amount</TypographyMuted>
              <TypographySmall className="font-semibold">₹{(+interestAmount).toLocaleString()}</TypographySmall>
            </div>
            <div className="flex justify-between items-center border-t pt-3">
              <TypographySmall className="font-semibold">Total Amount</TypographySmall>
              <TypographySmall className="font-semibold">₹{(+totalAmount).toLocaleString()}</TypographySmall>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

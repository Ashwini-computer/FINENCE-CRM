import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Dot,
} from "recharts";
import { Text } from "lucide-react";
import { TbReport } from "react-icons/tb";

const creditScoreData = [
  { month: "Apr '25", score: 760 },
  { month: "May '25", score: 755 },
  { month: "Jun '25", score: 750 },
  { month: "Jul '25", score: 800, predict: true },
];

const CustomDot = (props) => {
  const { cx, cy, index, data } = props;
  if (data[index]?.predict) {
    return (
      <>
        <Dot {...props} r={6} fill="#3b82f6" />
        <foreignObject x={cx + 10} y={cy - 40} width={120} height={40}>
          <div className="bg-white rounded shadow px-2 py-1 text-xs font-semibold text-blue-700 border border-blue-200">
            Predict Next
            <br />
            Score
          </div>
        </foreignObject>
      </>
    );
  }
  return <Dot {...props} r={6} fill="#3b82f6" />;
};

export default function ScoreHistory() {
  return (
    <Card className="sm:mx-0 mx-4">
      <CardHeader className="bg-[#f1f5f9] rounded-t-2xl gap-4 pb-4">
        <div className="flex items-center gap-6">
          <img
            loading="lazy"
            src="/banks/logo/crif.png"
            alt="CIBIL"
            className="h-5 sm:h-7"
          />
          <img
            loading="lazy"
            src="/banks/logo/exprerrian.png"
            alt="Experian"
            className="h-5 sm:h-7"
          />
          <img
            loading="lazy"
            src="/banks/logo/equifax.png"
            alt="Equifax"
            className="h-3 sm:h-5"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-lg font-semibold mb-2">Credit Score Trend</div>
        <div className="w-full h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={creditScoreData}
              margin={{ top: 30, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[200, 900]}
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{ fontSize: 13, borderRadius: 8 }}
                formatter={(value) => [`Score: ${value}`]}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#6366f1"
                strokeWidth={2}
                dot={<CustomDot data={creditScoreData} />}
                activeDot={{ r: 8, fill: "#1d4ed8" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
          <Button className="border bg-transparent text-blue-800 border-blue-800 hover:text-white">
            <Text /> Credit Report
          </Button>
          <Button className="border bg-transparent text-blue-800 border-blue-800 hover:text-white">
            <TbReport />
            Report Summary
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-6">
          <div>
            <div className="text-xs text-muted-foreground">Current Score</div>
            <div className="text-2xl font-bold text-blue-700">
              {creditScoreData[creditScoreData.length - 2].score}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">
              Predicted Next Score
            </div>
            <div className="text-2xl font-bold text-green-700">
              {creditScoreData[creditScoreData.length - 1].score}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Last Updated</div>
            <div className="font-medium">16 Jun 2025</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Info, PlusCircle } from "lucide-react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const minScore = 300;
const maxScore = 900;
const currentScore = 758;
const scoreLabel = "Good";

function getScoreColor(score) {
  if (score < 650) return "#ef4444";
  if (score < 750) return "#f59e42";
  return "#22c55e";
}

export default function CreditScorePredictor() {
  return (
    <Card>
      {/* HEADER */}
      <CardHeader className="border-b rounded-t-2xl flex flex-wrap gap-4">
        <div className="flex items-center gap-6">
          <img
            loading="lazy"
            src="/banks/logo/crif.png"
            alt="CIBIL"
            className="h-7"
          />
          <img
            loading="lazy"
            src="/banks/logo/exprerrian.png"
            alt="Experian"
            className="h-7"
          />
          <img
            loading="lazy"
            src="/banks/logo/equifax.png"
            alt="Equifax"
            className="h-5"
          />
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-2 px-0 text-blue-900 flex items-center gap-1"
        >
          <ChevronLeft size={18} /> Back
        </Button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Credit Score Predictor
        </h2>

        {/* Score Gauges */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-10">
          {/* Current Score */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              Current Score
            </p>
            <div className="relative w-40 h-40">
              <CircularProgressbarWithChildren
                value={currentScore - minScore}
                minValue={0}
                maxValue={maxScore - minScore}
                strokeWidth={12}
                circleRatio={0.75}
                styles={buildStyles({
                  pathColor: getScoreColor(currentScore),
                  trailColor: "#e5e7eb",
                  strokeLinecap: "butt",
                })}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-blue-900">
                    {currentScore}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
                    {scoreLabel}
                    <Info size={14} className="text-gray-400" />
                  </span>
                </div>
              </CircularProgressbarWithChildren>
              <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-gray-400 font-semibold px-2">
                <span>{minScore}</span>
                <span>{maxScore}</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center h-40">
            <span className="text-4xl text-gray-400">→</span>
          </div>

          {/* Predicted Score */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              Predicted Score
            </p>
            <div className="relative w-40 h-40 opacity-60">
              <CircularProgressbarWithChildren
                value={0}
                minValue={0}
                maxValue={maxScore - minScore}
                strokeWidth={12}
                circleRatio={0.75}
                styles={buildStyles({
                  pathColor: "#cbd5e1",
                  trailColor: "#e5e7eb",
                  strokeLinecap: "butt",
                })}
              >
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#a3a3a3"
                      strokeWidth="1.5"
                      d="M12 2v20m10-10H2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#a3a3a3"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </CircularProgressbarWithChildren>
              <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-gray-300 font-semibold px-2">
                <span>{minScore}</span>
                <span>{maxScore}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive CTA */}
        <div className="text-base font-medium text-blue-900 mb-3">
          See how your Credit Score changes when you ...
        </div>

        <div className="w-full max-w-md">
          <Button
            variant="outline"
            className="w-full flex items-center justify-start gap-3 bg-white shadow-md rounded-xl py-6 px-4 text-blue-900 text-base font-semibold hover:bg-blue-50"
          >
            <span className="bg-green-100 text-green-600 rounded-full p-2">
              <PlusCircle size={28} />
            </span>
            <span>Add a new loan or credit card</span>
            <span className="ml-auto text-blue-700">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

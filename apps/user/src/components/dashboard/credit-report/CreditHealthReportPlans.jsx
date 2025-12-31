import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyMuted,
} from "@/custom/Typography";

const features = [
  {
    icon: (
      <span className="bg-yellow-100 text-yellow-500 rounded-full p-2">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#fbbf24" strokeWidth="2" />
          <rect x="8" y="11" width="8" height="2" rx="1" fill="#fbbf24" />
        </svg>
      </span>
    ),
    title: "Credit Report PDF",
    desc: "Detailed view of your Credit Profile in 3 bureaus",
  },
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 rounded-full p-2">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="#3b82f6" />
        </svg>
      </span>
    ),
    title: "Personalised Video Report",
    desc: "Watch video on what’s helping or hurting your score",
  },
  {
    icon: (
      <span className="bg-purple-100 text-purple-500 rounded-full p-2">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2" />
          <path
            d="M8 16v-4a4 4 0 118 0v4"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    ),
    title: "24/7 Chat Support",
    desc: "Ask anything, anytime. we’ve got your back",
  },
  {
    icon: (
      <span className="bg-green-100 text-green-500 rounded-full p-2">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" />
          <path
            d="M8 12l2 2 4-4"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    title: "Predict your Score",
    desc: "See how your score moves when you take action",
  },
];

const plans = [
  {
    name: "Monthly Plan",
    price: 34,
    oldPrice: 99,
    desc: ["₹34 for 1st month, then ₹99/month thereafter", "Cancel anytime"],
    highlight: true,
  },
  {
    name: "One Day Plan",
    price: 117,
    oldPrice: 199,
    desc: ["Valid for 24 hours"],
  },
  {
    name: "Yearly Plan",
    price: 399,
    oldPrice: 1199,
    desc: ["Just ₹1.09/day to protect your Credit Health"],
    badge: "66% OFF",
  },
];

export default function CreditHealthReportPlans() {
  return (
    <div className="sm:mx-0 mx-4">
      {/* Left: Features */}
      <Card className="flex flex-col justify-between p-6">
        <CardContent className="grid gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <TypographyH3 className="font-bold">Download your</TypographyH3>
                <TypographyH2 className="font-bold text-pink-600 mt-1">
                  Credit Health Report
                </TypographyH2>
              </div>
              <img
                loading="lazy"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Credit Health"
                className="w-20 h-20 hidden sm:block"
              />
            </div>
            <div className="text-gray-500 font-medium mb-6 text-base">
              Here's what you will get <span className="ml-2">←</span>
            </div>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  {f.icon}
                  <div>
                    <div className="font-semibold text-gray-900">{f.title}</div>
                    <div className="text-gray-500 text-sm">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Plans */}
          <div>
            <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
              Choose the plan that works best for you
            </div>
            <div className="flex flex-col gap-4 mb-6">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`rounded-xl border transition cursor-pointer p-4 relative
                    ${
                      plan.highlight
                        ? "border-blue-500 bg-blue-50 shadow"
                        : "border-gray-200 bg-white"
                    }
                    hover:border-blue-500`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-gray-900 text-base">
                      {plan.name}
                    </div>
                    <div className="flex items-center gap-2">
                      {plan.oldPrice && (
                        <span className="text-gray-400 text-sm line-through">
                          ₹{plan.oldPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-blue-700">
                        ₹{plan.price}
                      </span>
                      {plan.badge && (
                        <span className="ml-2 bg-yellow-400 text-xs font-bold text-white px-2 py-1 rounded">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="mt-2 text-gray-600 text-sm list-disc list-inside space-y-1">
                    {plan.desc.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img
                loading="lazy"
                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                alt="users"
                className="w-8 h-8"
              />
              <TypographyH4 className="text-pink-600 font-bold">
                Over 5L+
              </TypographyH4>
              <TypographyMuted className="text-xs font-medium">
                Users in India Trust Credit Health Report
              </TypographyMuted>
            </div>
            <Button className="w-full">Continue</Button>
            <div className="text-xs text-center text-gray-400 mt-2">
              By clicking on continue you agree to{" "}
              <span className="text-blue-600 underline cursor-pointer">
                CHR terms of service
              </span>
              .
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

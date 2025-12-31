import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    styled,
} from "@mui/material";
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import BeforeLoanInformationForm from "./BeforeLoanInformationForm";
import LoanDocumentForm from "./LoanDocumentForm";
import { ShieldCheck } from "lucide-react";

// Steps config
const steps = [
    "Personal Information",
    "Document Upload",
    "Status",
];

const Status = () => (
    <Card className="p-6 text-center max-w-md mx-auto">
        <div className="flex flex-col items-center gap-2">
            <div className="bg-blue-100 p-3 rounded-full">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700">Under Verification</h3>
            <p className="text-sm text-gray-600">
                Your loan application is currently being reviewed. You will be notified once it is verified.
            </p>
            <Link to='/myaccount/loans/applied-Loan-History'>
                <Button>
                    Check Application
                </Button>
            </Link>
        </div>
    </Card>
);

const TimelineProgress = () => {
    const { loanType } = useParams();
    const [activeStep, setActiveStep] = useState(0);

    const renderStepComponent = () => {
        if (activeStep === 0) return <BeforeLoanInformationForm />;
        if (activeStep === 1) return <LoanDocumentForm loanType={loanType} />;
        return <Status />;
    };

    return (
        <div className="max-w-4xl">
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                connector={<StepConnector />}
            >
                {steps.map((label, idx) => (
                    <Step key={idx} onClick={() => setActiveStep(idx)} style={{ cursor: "pointer" }}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div className="mt-8">{renderStepComponent()}</div>
        </div>
    );
};

export default TimelineProgress;

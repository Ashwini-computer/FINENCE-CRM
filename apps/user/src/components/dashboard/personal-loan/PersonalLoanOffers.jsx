import { OffersCards } from "../../OffersCards";

const LoanOffers = [
    {
        id: 'hdfc-bank',
        img: "/banks/symbol/hdfc.png",
        name: 'HDFC Bank',
        highlights: ['10 Second Disbursal*', '100% Digital Process*', 'Quick Disbursal'],
        max_loan: 'Upto ₹40L',
        interest_rate: '10.9% - 24%',
        tenure: 'Upto 6 Years',
        processing_fee: '6500',
    },
    {
        id: 'axis-bank',
        name: 'Axis Bank',
        highlights: ['Low Processing fee'],
        max_loan: 'Upto ₹10L',
        interest_rate: '11.25% - 22%',
        tenure: 'Upto 5 Years',
        processing_fee: 'Upto 2%',
    },
    {
        id: 'kotak-mahindra-bank',
        img: "/banks/symbol/kotak.png",
        name: 'Kotak Mahindra Bank',
        highlights: ['Lowest Income requirement', '100% Digital Process*'],
        max_loan: 'Upto ₹35L',
        interest_rate: '10.99% - 16.9%',
        tenure: 'Upto 6 Years',
        processing_fee: 'Upto 5%',
    },
    {
        id: 'idfc-first-bank',
        name: 'IDFC FIRST Bank',
        img: "/banks/symbol/idfc.png",
        highlights: ['Max Loan Amount', '100% Digital Process*'],
        max_loan: 'Upto ₹10L',
        interest_rate: '10.99% - 23.99%',
        tenure: 'Upto 5 Years',
        processing_fee: 'Upto 2%',
    },
    {
        id: 'icici-bank',
        name: 'ICICI Bank',
        img: "/banks/symbol/icici.png",
        highlights: ['100% Digital Process*', 'Quick Disbursal'],
        max_loan: 'Upto ₹50L',
        interest_rate: '10.85% - 16.65%',
        tenure: '1-6 Years',
        processing_fee: 'Upto 2%',
    },
    {
        id: 'yes-bank',
        name: 'Yes Bank',
        img: "/banks/symbol/yes.png",
        highlights: ['100% Digital Process*', 'Quick Disbursal'],
        max_loan: 'Upto ₹40L',
        interest_rate: '11.25% - 21%',
        tenure: 'Upto 5 Years',
        processing_fee: '0% - 2.5%',
    },
    {
        id: 'tata-capital',
        name: 'Tata Capital Limited',
        img: "/banks/symbol/tataFederal.png",
        highlights: ['100% Digital Process*'],
        max_loan: 'Upto ₹50L',
        interest_rate: '11.99% - 35%',
        tenure: 'Upto 7 Years',
        processing_fee: 'Upto 4%',
    },
    {
        id: 'indusind-bank',
        name: 'IndusInd Bank',
        img: "/banks/symbol/indusind.png",
        highlights: ['Lowest Income requirement', 'Quick Disbursal'],
        max_loan: 'Upto ₹50L',
        interest_rate: '10.49% - 26%',
        tenure: '1-7 Years',
        processing_fee: 'Upto 4%',
    },
    {
        id: 'federal-bank',
        name: 'Federal Bank',
        img: "/banks/symbol/federal.png",
        highlights: ['Lowest Income requirement', '100% Digital Process*'],
        max_loan: 'Upto ₹5L',
        interest_rate: '12% - 22.5%',
        tenure: '1-4 Years',
        processing_fee: '1.5% - 2.5%',
    },
    {
        id: 'rbl-bank',
        name: 'RBL Bank',
        img: "/banks/symbol/rbl.png",
        highlights: ['100% Digital Process*', 'Quick Disbursal'],
        max_loan: 'Upto ₹5L',
        interest_rate: '18% - 26%',
        tenure: 'Upto 3 Years',
        processing_fee: 'Upto 2%',
    }
];

export default function PersonalLoanOffers() {
    return (
        <div className="max-w-2xl sm:my-6 sm:px-0 px-4">
            <OffersCards
                offers={LoanOffers}
                loanType="personal"
                headline="Find Best Personal Loan Offers"
                buttontext="Apply"
                className="bg-white"
            />
        </div>
    )
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const applications = [
  {
    id: "APP12345",
    product: "Personal Loan",
    status: "Disbursed",
    amount: 250000,
    appliedOn: "2025-05-10",
    approvedOn: "2025-05-12",
    disbursedOn: "2025-05-15",
    loanDetails: {
      tenure: "36 months",
      interest: "11.5%",
      emi: "₹8,200",
    },
    workDetails: {
      employer: "ABC Pvt Ltd",
      income: "₹60,000/month",
      designation: "Software Engineer",
    },
    bankDetails: {
      bank: "HDFC Bank",
      account: "XXXX1234",
      ifsc: "HDFC0001234",
    },
    otherDetails: {
      pan: "ABCDE1234F",
      aadhaar: "XXXX-XXXX-1234",
      address: "Mumbai, Maharashtra",
    },
  },
  {
    id: "APP12346",
    product: "Credit Card",
    status: "Approved",
    amount: 100000,
    appliedOn: "2025-06-01",
    approvedOn: "2025-06-03",
    disbursedOn: null,
    loanDetails: {
      tenure: "-",
      interest: "3.5% per month",
      emi: "-",
    },
    workDetails: {
      employer: "XYZ Ltd",
      income: "₹45,000/month",
      designation: "Analyst",
    },
    bankDetails: {
      bank: "ICICI Bank",
      account: "XXXX5678",
      ifsc: "ICIC0005678",
    },
    otherDetails: {
      pan: "FGHIJ5678K",
      aadhaar: "XXXX-XXXX-5678",
      address: "Pune, Maharashtra",
    },
  },
  {
    id: "APP12347",
    product: "Home Loan",
    status: "Applied",
    amount: 1500000,
    appliedOn: "2025-06-10",
    approvedOn: null,
    disbursedOn: null,
    loanDetails: {
      tenure: "240 months",
      interest: "8.2%",
      emi: "₹14,500",
    },
    workDetails: {
      employer: "DEF Corp",
      income: "₹1,10,000/month",
      designation: "Manager",
    },
    bankDetails: {
      bank: "SBI",
      account: "XXXX9012",
      ifsc: "SBIN0009012",
    },
    otherDetails: {
      pan: "KLMNO9012P",
      aadhaar: "XXXX-XXXX-9012",
      address: "Delhi, India",
    },
  },
]

const statusColor = {
  Applied: "bg-blue-100 text-blue-800",
  Approved: "bg-yellow-100 text-yellow-800",
  Disbursed: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
}

export default function ApplyLoanApplicationHistory() {
  return (
    <div className="max-w-4xl w-full sm:px-0 px-4 mx-auto mb-8 space-y-8">
      <h1 className="sm:text-3xl text-xl font-bold mb-4">My Applications Summary</h1>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>All Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-3 text-left">Product</th>
                  <th className="py-2 px-3 text-left">Amount</th>
                  <th className="py-2 px-3 text-left">Status</th>
                  <th className="py-2 px-3 text-left">Applied On</th>
                  <th className="py-2 px-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, idx) => (
                  <tr key={app.id} className="border-b hover:bg-muted">
                    <td className="py-2 px-3">{app.product}</td>
                    <td className="py-2 px-3">₹{app.amount.toLocaleString()}</td>
                    <td className="py-2 px-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[app.status]}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="py-2 px-3">{app.appliedOn}</td>
                    <td className="py-2 px-3">
                      <a href={`#app-${idx}`}>
                        <Button size="sm" variant="outline">View Details</Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Details for each application */}
      {applications.map((app, idx) => (
        <Card key={app.id} id={`app-${idx}`} className="mt-8">
          <CardHeader>
            <CardTitle>
              {app.product} <span className="text-base text-muted-foreground ml-2">({app.id})</span>
              <span className={`ml-4 px-2 py-1 rounded text-xs font-medium ${statusColor[app.status]}`}>
                {app.status}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="loan">
              <TabsList>
                <TabsTrigger value="loan">Loan Details</TabsTrigger>
                <TabsTrigger value="work">Work Details</TabsTrigger>
                <TabsTrigger value="bank">Bank Details</TabsTrigger>
                <TabsTrigger value="other">Other Details</TabsTrigger>
                <TabsTrigger value="status">Status</TabsTrigger>
              </TabsList>
              <TabsContent value="loan">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-muted-foreground text-xs">Loan Amount</div>
                    <div className="font-medium">₹{app.amount.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Tenure</div>
                    <div className="font-medium">{app.loanDetails.tenure}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Interest Rate</div>
                    <div className="font-medium">{app.loanDetails.interest}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">EMI</div>
                    <div className="font-medium">{app.loanDetails.emi}</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="work">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-muted-foreground text-xs">Employer</div>
                    <div className="font-medium">{app.workDetails.employer}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Income</div>
                    <div className="font-medium">{app.workDetails.income}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Designation</div>
                    <div className="font-medium">{app.workDetails.designation}</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="bank">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-muted-foreground text-xs">Bank</div>
                    <div className="font-medium">{app.bankDetails.bank}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Account</div>
                    <div className="font-medium">{app.bankDetails.account}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">IFSC</div>
                    <div className="font-medium">{app.bankDetails.ifsc}</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="other">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-muted-foreground text-xs">PAN</div>
                    <div className="font-medium">{app.otherDetails.pan}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Aadhaar</div>
                    <div className="font-medium">{app.otherDetails.aadhaar}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Address</div>
                    <div className="font-medium">{app.otherDetails.address}</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="status">
                <div className="mt-4 space-y-2">
                  <div>
                    <span className="font-medium">Applied On:</span> {app.appliedOn}
                  </div>
                  <div>
                    <span className="font-medium">Approved On:</span> {app.approvedOn || "-"}
                  </div>
                  <div>
                    <span className="font-medium">Disbursed On:</span> {app.disbursedOn || "-"}
                  </div>
                  <div className="mt-2">
                    <Progress value={
                      app.status === "Disbursed" ? 100 :
                        app.status === "Approved" ? 66 :
                          app.status === "Applied" ? 33 : 0
                    } />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
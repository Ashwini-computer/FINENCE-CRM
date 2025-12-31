import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

const partnerCategories = [
  { id: "payments", name: "Payments" },
  { id: "accounts", name: "Accounts" },
  { id: "utilisation", name: "Utilisation" },
  { id: "age", name: "Age" },
  { id: "enquiries", name: "Enquiries" },
]

const accounts = [
  {
    type: "Loan",
    bank: "HDB",
    product: "Personal Loan",
    accountNumber: "XXXX-6316",
    status: "Closed",
    onTimePayments: 16,
    latestUpdate: "30 Sep, 2024",
    payStart: "1 Sep, 2024",
    payEnd: "1 Jun, 2023",
    paymentHistory: {
      2024: { JAN: "on-time", FEB: "on-time", MAR: "on-time", APR: "on-time", MAY: "on-time", JUN: "on-time", JUL: "on-time", AUG: "on-time", SEP: "on-time" },
      2023: { JUN: "late", JUL: "late", AUG: "late", SEP: "late", OCT: "late", NOV: "late", DEC: "late" }
    }
  },
  {
    type: "Credit Card",
    bank: "HDFC BANK",
    product: "Credit Card",
    accountNumber: "XXXX-9876",
    status: "Active",
    onTimePayments: 12,
    latestUpdate: "30 Sep, 2024",
    payStart: "1 Jan, 2024",
    payEnd: "1 Sep, 2024",
    paymentHistory: {
      2024: { JAN: "on-time", FEB: "on-time", MAR: "on-time", APR: "on-time", MAY: "on-time", JUN: "on-time", JUL: "on-time", AUG: "on-time", SEP: "on-time" }
    }
  },
  {
    type: "Loan",
    bank: "BAJAJ FIN LTD",
    product: "Consumer Loan",
    accountNumber: "XXXX-1122",
    status: "Active",
    onTimePayments: 8,
    latestUpdate: "30 Sep, 2024",
    payStart: "1 Feb, 2024",
    payEnd: "1 Sep, 2024",
    paymentHistory: {
      2024: { FEB: "on-time", MAR: "on-time", APR: "late", MAY: "late", JUN: "on-time", JUL: "on-time", AUG: "on-time", SEP: "on-time" }
    }
  }
]

const creditEnquiries = [
  { bank: "AXIS BANK", date: "16-05-2024", purpose: "Credit Card" },
  { bank: "BAJAJ FIN LTD", date: "13-11-2023", purpose: "Consumer Loan" },
  { bank: "BAJAJ FIN LTD", date: "01-07-2023", purpose: "Consumer Loan" },
  { bank: "HDB", date: "16-06-2023", purpose: "Personal Loan" },
  { bank: "AXIS BANK", date: "13-06-2023", purpose: "Credit Card" },
  { bank: "HDB", date: "12-06-2023", purpose: "Personal Loan" },
  { bank: "HDFC BANK", date: "20-11-2022", purpose: "Credit Card" },
  { bank: "HDFC BANK", date: "20-11-2022", purpose: "Credit Card" },
  { bank: "HDB", date: "24-10-2022", purpose: "Consumer Loan" },
  { bank: "BAJAJ FIN LTD", date: "20-09-2022", purpose: "Personal Loan" },
  { bank: "BAJAJ FIN LTD", date: "18-09-2022", purpose: "Personal Loan" },
  { bank: "BAJAJ FIN LTD", date: "18-09-2022", purpose: "Personal Loan" },
  { bank: "IDFC FIRST BANK", date: "13-09-2022", purpose: "Consumer Loan" },
]

const paymentStatusColor = {
  "on-time": "bg-green-100 text-green-800",
  "late": "bg-yellow-100 text-yellow-800",
  "very-late": "bg-red-100 text-red-800",
  "not-reported": "bg-gray-100 text-gray-800"
}

const monthsOrder = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

function PaymentHistoryTable({ paymentHistory }) {
  const years = Object.keys(paymentHistory).sort((a, b) => b - a)
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-xs border">
        <thead>
          <tr>
            <th className="p-2 border">Year</th>
            {monthsOrder.map(m => (
              <th key={m} className="p-2 border">{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {years.map(year => (
            <tr key={year}>
              <td className="p-2 border">{year}</td>
              {monthsOrder.map(m => {
                const status = paymentHistory[year][m] || "not-reported"
                return (
                  <td key={m} className={`p-2 border text-center ${paymentStatusColor[status]}`}>
                    {status === "on-time" && "●"}
                    {status === "late" && "●"}
                    {status === "very-late" && "●"}
                    {status === "not-reported" && "-"}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CreditSummaryPage() {
  return (
    <div className="max-w-5xl mx-auto pb-8 space-y-8">
      <h1 className="text-3xl font-bold mb-2">Credit Report Summary</h1>
      <div className="flex flex-wrap gap-2 my-4">
        {partnerCategories.map(cat => (
          <Badge key={cat.id}>{cat.name}</Badge>
        ))}
      </div>

      {/* Payments & Accounts Section */}
      <Card>
        <CardHeader>
          <CardTitle>All Accounts & Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Accounts</TabsTrigger>
              <TabsTrigger value="loan">Loan Accounts</TabsTrigger>
              <TabsTrigger value="credit">Credit Card Accounts</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              {accounts.map((acc, idx) => (
                <Card key={idx} className="mt-6">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="font-semibold">{acc.bank}</div>
                        <div className="text-sm text-muted-foreground">{acc.product}</div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 md:mt-0">
                        Latest Bank Update: {acc.latestUpdate}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Account Number</div>
                        <div className="font-medium">{acc.accountNumber}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">On-time payments</div>
                        <div className="font-medium">{acc.onTimePayments}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <Badge variant={acc.status === "Active" ? "default" : "secondary"}>{acc.status}</Badge>
                      </div>
                      <div className="flex items-end">
                        <Button variant="outline" size="sm">Hide Details</Button>
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <div className="text-xs text-muted-foreground mb-2">
                      Payment history of this account
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Pay Start Date</div>
                        <div className="font-medium">{acc.payStart}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Pay End Date</div>
                        <div className="font-medium">{acc.payEnd}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 my-2">
                      <Badge className="bg-green-100 text-green-800">Paid on time</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">1-89 days late</Badge>
                      <Badge className="bg-red-100 text-red-800">90+ days late</Badge>
                      <Badge variant="outline">Not Reported</Badge>
                    </div>
                    <PaymentHistoryTable paymentHistory={acc.paymentHistory} />
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="loan">
              {accounts.filter(a => a.type === "Loan").length === 0 && (
                <div className="text-sm text-muted-foreground mt-4">No open loan accounts.</div>
              )}
              {accounts.filter(a => a.type === "Loan").map((acc, idx) => (
                <Card key={idx} className="mt-6">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="font-semibold">{acc.bank}</div>
                        <div className="text-sm text-muted-foreground">{acc.product}</div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 md:mt-0">
                        Latest Bank Update: {acc.latestUpdate}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Account Number</div>
                        <div className="font-medium">{acc.accountNumber}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">On-time payments</div>
                        <div className="font-medium">{acc.onTimePayments}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <Badge variant={acc.status === "Active" ? "default" : "secondary"}>{acc.status}</Badge>
                      </div>
                      <div className="flex items-end">
                        <Button variant="outline" size="sm">Hide Details</Button>
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <div className="text-xs text-muted-foreground mb-2">
                      Payment history of this account
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Pay Start Date</div>
                        <div className="font-medium">{acc.payStart}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Pay End Date</div>
                        <div className="font-medium">{acc.payEnd}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 my-2">
                      <Badge className="bg-green-100 text-green-800">Paid on time</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">1-89 days late</Badge>
                      <Badge className="bg-red-100 text-red-800">90+ days late</Badge>
                      <Badge variant="outline">Not Reported</Badge>
                    </div>
                    <PaymentHistoryTable paymentHistory={acc.paymentHistory} />
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="credit">
              {accounts.filter(a => a.type === "Credit Card").length === 0 && (
                <div className="text-sm text-muted-foreground mt-4">No open credit card accounts.</div>
              )}
              {accounts.filter(a => a.type === "Credit Card").map((acc, idx) => (
                <Card key={idx} className="mt-6">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="font-semibold">{acc.bank}</div>
                        <div className="text-sm text-muted-foreground">{acc.product}</div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 md:mt-0">
                        Latest Bank Update: {acc.latestUpdate}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Account Number</div>
                        <div className="font-medium">{acc.accountNumber}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">On-time payments</div>
                        <div className="font-medium">{acc.onTimePayments}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <Badge variant={acc.status === "Active" ? "default" : "secondary"}>{acc.status}</Badge>
                      </div>
                      <div className="flex items-end">
                        <Button variant="outline" size="sm">Hide Details</Button>
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <div className="text-xs text-muted-foreground mb-2">
                      Payment history of this account
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Pay Start Date</div>
                        <div className="font-medium">{acc.payStart}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Pay End Date</div>
                        <div className="font-medium">{acc.payEnd}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 my-2">
                      <Badge className="bg-green-100 text-green-800">Paid on time</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">1-89 days late</Badge>
                      <Badge className="bg-red-100 text-red-800">90+ days late</Badge>
                      <Badge variant="outline">Not Reported</Badge>
                    </div>
                    <PaymentHistoryTable paymentHistory={acc.paymentHistory} />
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Report Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Report Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <div className="text-xs text-muted-foreground">Last updated on <span className="font-medium">14 Jun' 25</span></div>
            <Button variant="default" size="sm">Download Full Report</Button>
          </div>
          <div className="text-xs text-muted-foreground mb-2">Report Number (ECN): <span className="font-medium">9205402521</span></div>
          <Tabs defaultValue="utilisation">
            <TabsList>
              <TabsTrigger value="utilisation">Credit Card Utilisation</TabsTrigger>
              <TabsTrigger value="enquiries">Credit Enquiries</TabsTrigger>
              <TabsTrigger value="history">Payment History</TabsTrigger>
              <TabsTrigger value="age">Credit Age</TabsTrigger>
            </TabsList>
            <TabsContent value="utilisation">
              <div className="mt-4">
                <Badge variant="destructive">High Impact</Badge>
                <div className="mt-2 text-sm">
                  Credit card utilisation is not available for you as you don't have a credit card.
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <div className="text-xs text-muted-foreground">Total Spends</div>
                    <div className="font-medium">₹0</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Total Credit Limit</div>
                    <div className="font-medium">₹0</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  If you have multiple credit cards from the same bank or financial institution, we assume they share a combined credit limit when calculating your credit card utilisation.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="enquiries">
              <div className="mt-4">
                <Badge variant="destructive">High Impact</Badge>
                <div className="mt-2 text-sm">
                  You have <span className="font-bold">{creditEnquiries.length}</span> credit enquiries
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <div className="text-xs text-muted-foreground">Enquiries for loan</div>
                    <div className="font-medium">9</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Enquiries for credit card</div>
                    <div className="font-medium">4</div>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full text-xs border">
                    <thead>
                      <tr>
                        <th className="p-2 border">Bank</th>
                        <th className="p-2 border">Enquired on</th>
                        <th className="p-2 border">Enquiry Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {creditEnquiries.map((enq, i) => (
                        <tr key={i}>
                          <td className="p-2 border">{enq.bank}</td>
                          <td className="p-2 border">{enq.date}</td>
                          <td className="p-2 border">{enq.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="history">
              <div className="mt-4">
                <Badge variant="destructive">High Impact</Badge>
                <div className="mt-2 text-sm">You have made <span className="font-bold">0%</span> of your payments on time.</div>
                <Progress value={0} className="mt-2" />
                <div className="mt-2 text-xs text-muted-foreground">A good payment history improves your credit score.</div>
              </div>
            </TabsContent>
            <TabsContent value="age">
              <div className="mt-4">
                <Badge variant="secondary">Medium Impact</Badge>
                <div className="mt-2 text-sm">
                  Your total credit history is <span className="font-bold">2 years 7 months</span> old
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <div className="text-xs text-muted-foreground">Total Active Accounts</div>
                    <div className="font-medium">0</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Age of oldest Active Account</div>
                    <div className="font-medium">0 month</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  A longer credit history is good for your credit score.
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
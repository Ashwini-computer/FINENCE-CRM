import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export const CreditCardTable = ({ cards, headers }) => {
    return (
        <Table className="border border-black mt-2">
            <TableHeader>
                <TableRow className="bg-blue-800 hover:bg-blue-800 text-white">
                    {headers.map((header, i) => (
                        <TableHead
                            key={i}
                            className={`font-semibold text-white text-center ${i < headers.length - 1 ? 'border-r border-black' : ''}`}
                        >
                            {header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {cards.map((card, index) => (
                    <TableRow key={index} className="border border-black">
                        <TableCell className="text-blue-800 border-r whitespace-normal break-words border-black">
                            {card?.cardName}
                        </TableCell>
                        <TableCell className="border-r border-black">{card?.annualFee}</TableCell>
                        <TableCell>{card?.suitedFor}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export const FeeTable = ({ data = [] }) => {
    return (
        <Table className="border mt-6 border-black">
            <TableHeader>
                <TableRow className="bg-blue-800 hover:bg-blue-800">
                    <TableHead className="border-r text-center text-white border-black font-semibold">
                        Fee Type
                    </TableHead>
                    <TableHead className="font-semibold text-white text-center">
                        Amount
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((fee, index) => (
                    <TableRow key={index} className="border border-black">
                        <TableCell className="border-r text-blue-950 font-semibold border-black whitespace-pre-wrap">
                            {fee.feeType}
                        </TableCell>
                        <TableCell className="whitespace-pre-wrap text-gray-700">
                            {fee.amount}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

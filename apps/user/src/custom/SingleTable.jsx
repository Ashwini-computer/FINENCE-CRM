// components/ThreeColumnTable.jsx
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHeader,
} from "@/components/ui/table";

export default function SingleTable({ items = [], columns = 3 }) {
    const rows = Array.from({ length: Math.ceil(items.length / columns) }, (_, rowIndex) => {
        return items.slice(rowIndex * columns, rowIndex * columns + columns);
    });

    return (
        <Table className="border border-black mt-2">
            <TableHeader></TableHeader>
            <TableBody>
                {rows.map((rowItems, rowIndex) => (
                    <TableRow key={rowIndex} className="border border-black">
                        {rowItems.map((item, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                className="text-blue-800 border border-black whitespace-normal break-words"
                            >
                                {item}
                            </TableCell>
                        ))}
                        {rowItems.length < columns &&
                            Array.from({ length: columns - rowItems.length }).map((_, i) => (
                                <TableCell key={`empty-${i}`} className="border border-black" />
                            ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

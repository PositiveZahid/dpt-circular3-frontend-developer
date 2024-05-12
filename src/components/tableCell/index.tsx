import React from "react";

interface TableCellProps {
  children: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td className="py-1 text-sm">{children}</td>;
};


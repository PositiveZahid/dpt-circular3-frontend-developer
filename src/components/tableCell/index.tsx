import React, { FC } from "react";

interface TableCellProps {
  children: React.ReactNode;
}

export const TableCell: FC<TableCellProps> = ({ children }) => {
  return <td className="py-1 text-sm">{children}</td>;
};


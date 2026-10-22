import React from 'react';
import KanbanColumn from './KanbanColumn';
import { useBrands } from '../../context/BrandContext';

export default function KanbanBoard() {
  const { columns, brands } = useBrands();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
      {columns.map(column => {
        const columnBrands = brands.filter(b => b.status === column.id);
        return (
          <KanbanColumn
            key={column.id}
            column={column}
            brands={columnBrands}
          />
        );
      })}
    </div>
  );
}

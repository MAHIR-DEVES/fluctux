import React from 'react';
import { useRefinementList, UseRefinementListProps } from 'react-instantsearch';

export default function DocCustomRefinementList(props: UseRefinementListProps) {
  const {
    items,
    refine,
  } = useRefinementList(props);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <label>
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span>{item.label}</span>
              <span> ({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
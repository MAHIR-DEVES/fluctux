import React, { useEffect, useRef } from 'react';
import { useInfiniteHits } from 'react-instantsearch';

export function InfiniteHits({ hitComponent: HitComponent, ...props }: {hitComponent: React.ElementType}) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <div className="ais-InfiniteHits">
      <div className="ais-InfiniteHits-list">
        {hits.map((hit) => (
          <div key={hit.objectID} className="ais-InfiniteHits-item">
            <HitComponent hit={hit} />
          </div>
        ))}
        <div
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

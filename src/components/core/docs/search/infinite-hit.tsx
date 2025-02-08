import React, { useEffect, useRef } from 'react';
import { useInfiniteHits } from 'react-instantsearch';

export function InfiniteHits({ hitComponent: HitComponent, ...props }: { hitComponent: React.ElementType }) {
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

  const groupedHits = hits.reduce((acc, hit) => {
    const { slug } = hit;
    const title = slug.split("/")[1]
    if (!acc[title]) {
      acc[title] = [];
    }
    acc[title].push(hit);
    return acc;
  }, {} as { [key: string]: typeof hits });

  return (
    <div className="ais-InfiniteHits">
      <div className="ais-InfiniteHits-list">
        {
          Object.keys(groupedHits).map((title, i) => (
            <React.Fragment key={i}>
              <div className={`pl-3 text-[16px] font-medium ${i === 0 ? "mt-2": "mt-7"}`}>
                {title.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
              </div>
              {
                groupedHits[title].map((hit) => (
                  <div key={hit.objectID} className="ais-InfiniteHits-item">
                    <HitComponent hit={hit} />
                  </div>
                ))
              }
            </React.Fragment>
          ))
        }
        <div
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

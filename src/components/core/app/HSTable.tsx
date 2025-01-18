"use client";
import React, { useEffect, useRef, useState } from "react";
import Handsontable from "handsontable";
import { registerAllModules } from "handsontable/registry";
import { HotTable, HotTableRef } from '@handsontable/react-wrapper';

// Register all Handsontable modules

export default function HSTable() {
    registerAllModules();
    const [isContainerExpanded, setIsContainerExpanded] = useState(false);
    const hotRef = useRef<HotTableRef>(null);
  
    const triggerBtnClickCallback = () => {
      setIsContainerExpanded(!isContainerExpanded);
    };
  
    useEffect(() => {
      document.getElementById('tableParent').style.height = isContainerExpanded
        ? '410px'
        : '157px';
      hotRef.current?.hotInstance?.refreshDimensions();
    });
    return (
        
        <div className="ht-theme-main-dark-auto w-full">
               <button
          id="triggerBtn"
          className="button button--primary"
          onClick={() => triggerBtnClickCallback()}
        >
          {isContainerExpanded ? 'Collapse container' : 'Expand container'}
        </button>
            <div id="tableParent">
                <HotTable
                
                    data={[
                        ["", "Tesla", "Volvo", "Toyota", "Ford"],
                        ["2019", 10, 11, 12, 13],
                        ["2020", 20, 11, 14, 13],
                        ["2021", 30, 15, 12, 13],
                    ]}
                    
                    rowHeaders={true}
                    colHeaders={true}
                    search={true}
                    manualColumnMove={true}
                    manualRowMove={true}
                    columnSorting={true}
                    contextMenu={true}
                    mergeCells={true}
                    dropdownMenu={true}
                    comments={true}
                    height="auto"
                    width="100%"
                    autoWrapRow={true}
                    autoWrapCol={true}
                    licenseKey="non-commercial-and-evaluation" // For non-commercial use only
                    ref={hotRef}
                />
            </div>
        </div>
    );
}

"use client"
import React from 'react'

interface FxSuggestionInputPropsType {
    showSuggestions?: boolean;
    filteredSuggestions?: string[];
    onSelect?: (value: string) => void
}

export default function FxSuggestionInput(
    {
        showSuggestions = false,
        filteredSuggestions = [],
        onSelect
    }: FxSuggestionInputPropsType
) {

    const handleSelectSuggestion = (value: string) => {
        onSelect?.(value);
    };

    return (
        <div>
            {showSuggestions && filteredSuggestions && filteredSuggestions.length > 0 && (
                <div className='pb-10 absolute w-[250px]'>

                    <ul className="  border fx-border-color fx-secondary-bg shadow-lg mt-1 rounded-md z-10 max-h-[300px] overflow-y-auto">
                        {filteredSuggestions?.map((Suggestion: string) => (
                            <li
                                key={Suggestion}
                                className="px-4 py-2 hover:fx-third-bg cursor-pointer fx-label-color hover:text-[var(--foreground)]"
                                onClick={() => handleSelectSuggestion(Suggestion)}
                            >
                                {Suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}



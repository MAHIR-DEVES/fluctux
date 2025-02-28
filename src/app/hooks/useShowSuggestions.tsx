import { useEffect, useState } from "react";
import { useToggleOpen } from "./useToggleOpen";

interface UseShowSuggestionsPropsType {
    data: string[] | []
}

export const useShowSuggestions = ({
    data
}: UseShowSuggestionsPropsType) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[] | []>([]);
    const { isOpen: showSuggestions, setOpen: setShowSuggestions } = useToggleOpen({ id: "category-suggestions" })
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!filteredSuggestions) return

        if (e.key === "ArrowDown") {
            // Navigate down
            setActiveIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : 0));
        } else if (e.key === "ArrowUp") {
            // Navigate up
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredSuggestions.length - 1));
        } else if (e.key === "Enter" && activeIndex >= 0) {
            // Select active item on Enter
            handleSelectSuggestion(filteredSuggestions[activeIndex]);
        } else if (e.key === "Escape") {
            // Close dropdown on Escape
            setShowSuggestions(false);
        }
    };

    const handleSuggestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        // Filter categories based on input
        if (value) {
            const filtered = data.filter((category: string) =>
                category.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
            setActiveIndex(-1)
        }

    };

    const handleSelectSuggestion = (category: string) => {
        setInputValue(category);
        setShowSuggestions(false); // Hide dropdown
    };

    const handleShowAllSuggestions = () => {
        setShowSuggestions(!showSuggestions)
        setFilteredSuggestions(data)
        setActiveIndex(-1)
    }

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = () => setShowSuggestions(false);
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [setShowSuggestions]);

    return {
        handleShowAllSuggestions,
        inputValue,
        handleKeyDown,
        handleSuggestionChange,
        activeIndex,
        filteredSuggestions,
        showSuggestions,
        handleSelectSuggestion
    }
}



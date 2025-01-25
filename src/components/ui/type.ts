export type SizeType = "sm" | "md" | "lg" | "xl";
export type RadiusType = "primary" | "tablet" | "circle" | "tiny"

export interface DialogProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    modal?: boolean;
    className?: string;
}

export type ThemeType = 'dark' | 'light'

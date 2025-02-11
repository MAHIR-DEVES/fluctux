import React from "react";

interface FxBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
  variant?: keyof typeof badgeVariants;
}

type BadgeVariantTypes =
  | "primary"
  | "secondary"
  | "purple"
  | "lolipop"
  | "lolipopPurple"
  | "lolipopPink"
  | "kitkat"
  | "kitkatPurple"
  | "kitkatPink";

const badgeVariants: { [key in BadgeVariantTypes]: string } = {
  primary:
    "pl-2 pr-2 rounded-[20px] border text-[12px] border-none bg-[var(--primary-color)] text-white font-medium",
  secondary:
    "pl-2 pr-2 rounded-[20px] border text-[12px] fx-border-color fx-label-color",
  purple:
    "pl-2 pr-2 rounded-[20px] border text-[12px] border-[var(--badge-primary-purple-border)] bg-[var(--badge-primary-purple-bg)] text-[var(--badge-primary-purple-fg)] font-medium",
  lolipop:
    "pl-2 pr-2 rounded-[20px] border text-[12px] border-[var(--badge-green-border)] bg-[var(--badge-green-bg)] text-[var(--badge-green-fg)]",
  lolipopPurple:
    "pl-2 pr-2 rounded-[20px] border text-[12px] border-[var(--badge-purple-border)] bg-[var(--badge-purple-bg)] text-[var(--badge-purple-fg)]",
  lolipopPink:
    "pl-2 pr-2 rounded-[20px] border text-[12px] border-[var(--badge-pink-border)] bg-[var(--badge-pink-bg)] text-[var(--badge-pink-fg)]",
  kitkat:
    "pl-2 pr-2 rounded-[20px] border text-[12px] fx-border-color fx-secondary-bg text-[var(--badge-green-fg)]",
  kitkatPurple:
    "pl-2 pr-2 rounded-[20px] border text-[12px] fx-border-color fx-secondary-bg text-[var(--badge-purple-fg)]",
  kitkatPink:
    "pl-2 pr-2 rounded-[20px] border text-[12px] fx-border-color fx-secondary-bg text-[var(--badge-pink-fg)]",
};

export function FxBadge({
  className,
  variant,
  children,
  ...props
}: FxBadgeProps) {
  const badgeVariant = variant
    ? badgeVariants[variant]
    : badgeVariants.secondary;
  return (
    <span className={`${badgeVariant} ${className}`} {...props}>
      {children}
    </span>
  );
}

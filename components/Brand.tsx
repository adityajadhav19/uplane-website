import type { ReactNode } from "react";
export function BrandMark({ small = false }: { small?: boolean }) { return <span className={small ? "brand-symbol brand-symbol-small" : "brand-symbol"} aria-hidden="true"><i /></span>; }

export function Logo() { return <a className="logo" href="#top"><BrandMark/><span>uplane</span></a>; }

export function Arrow() { return <span aria-hidden="true" className="arrow">›</span>; }

export function Button({ children, secondary = false }: { children: ReactNode; secondary?: boolean }) { return <a className={secondary ? "button button-secondary" : "button"} href="#contact">{children}{!secondary && <Arrow/>}</a>; }

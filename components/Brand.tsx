import type { ReactNode } from "react";
export function BrandMark({ small = false }

export function Logo() { return <a className="logo" href="#top"><BrandMark/><span>uplane</span></a>; }

export function Arrow() { return <span aria-hidden="true" className="arrow">›</span>; }

export function Button({ children, secondary = false }

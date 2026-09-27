import type { ReactNode, SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function IconFrame({ children, size = 18, ...props }: IconProps & { children: ReactNode }) {
  return <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size} {...props}>{children}</svg>;
}

export function ArrowRightIcon(props: IconProps) {
  return <IconFrame {...props}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" /></IconFrame>;
}

export function CheckIcon(props: IconProps) {
  return <IconFrame {...props}><path d="m5 12 4.2 4.2L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" /></IconFrame>;
}

export function SparkIcon(props: IconProps) {
  return <IconFrame {...props}><path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8-1.8 5.9-1.8-5.9-5.7-1.8L10.2 9 12 3.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" /></IconFrame>;
}

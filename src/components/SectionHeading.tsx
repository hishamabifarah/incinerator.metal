import { ReactNode } from "react";

// Standardized section heading: small uppercase label, title, and optional action.
type Props = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, children, action }: Props) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children ? <p className="section-description">{children}</p> : null}
      </div>
      {action ? <div className="section-action">{action}</div> : null}
    </div>
  );
}

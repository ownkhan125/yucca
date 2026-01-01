import Link from "next/link";

export default function Button({
  href = "/",
  text = "See Products",
  variant = "btn-primary",
  className,
}) {
  return (
    <Link href={href} className={`btn ${variant} ${className}`}>
      <span className="btn-fill" />

      <span className="btn-text-wrapper">
        <span className="btn-text">{text}</span>
        <span className="btn-text-hover">{text}</span>
      </span>
    </Link>
  );
}

import Link from "next/link";

export default function ButtonPrimary({
  href = "#",
  text = "About us",
  className,
}) {
  return (
    <Link href={href} className={`btn btn-primary ${className}`}>
      <span className="btn-fill" />

      <span className="btn-text-wrapper">
        <span className="btn-text">{text}</span>
        <span className="btn-text-hover">{text}</span>
      </span>
    </Link>
  );
}

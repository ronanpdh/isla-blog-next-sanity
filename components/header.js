import Link from "next/link";

export default function Header(props) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/blog" className="hover:underline">
        {props.title}
      </Link>
      .
    </h2>
  );
}

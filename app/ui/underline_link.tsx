import Link from "next/link";

export default function UnderlineLink({
  text,
  url,
}: {
  text: string;
  url: string;
}) {
  return (
    <Link href={url} className="children-wrap">
      <span className="underline-effect">{text}</span>
      <style jsx>{`
        .underline-effect {
          width: calc(100%);
          background-size: 0% 2px;
          background-position: bottom left;
          background-repeat: no-repeat;
          background-image: linear-gradient(
            transparent calc(100% - 10px),
            black 10px
          );
          transition: background-size 0.3s ease;
        }
        .underline-effect:hover {
          background-size: 100% 2px;
        }
      `}</style>
    </Link>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-6xl text-center">
        <br />
        <Link href="/archive">/archive</Link>
        <br /><br /><br />
        <Link href="/about/a99">about/a99</Link>
      </div>
    </main>
  );
}

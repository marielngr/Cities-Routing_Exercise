import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Cities of the world</h1>
      <Link href="/cities">Link to the cities</Link>
    </div>
  );
}

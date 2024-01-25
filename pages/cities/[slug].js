import { useRouter } from "next/router";
import { cities } from "@/lib/data.js";
import Link from "next/link";

export default function City() {
  const router = useRouter();

  //defensive Programmierung, um Error vorzubeugen
  if (!router.query) {
    return null;
  }

  // Objekt-Dekonstruktion vom router.query-Objekt - router.query enthaelt einen key "slug" mit der aktuellen Stadt aus der URL
  const { slug } = router.query;

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return <h1>Stadt {slug} nicht gefunden</h1>;
  }

  return (
    <>
      <h1>{city.name}</h1>
      <p>{city.description}</p>
      <Link href={`/cities/`}>back to all cities</Link>
    </>
  );
}

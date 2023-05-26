import Link from "next/link";

export default function about() {
  const isClientRender = () => ![typeof window, typeof document].includes('undefined');

  console.log("ha", isClientRender());

  return (
    <>
      <h1>About Page</h1>
      <Link href="/">
        <a>Kembali</a>
      </Link>
    </>
  );
}

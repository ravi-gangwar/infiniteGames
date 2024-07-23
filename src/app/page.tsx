import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-screen flex justify-center items-center">
        <Link href={"/tictactoe"}>
          <h1>Go tic tac toe</h1>
        </Link>
      </section>
    </main>
  );
}

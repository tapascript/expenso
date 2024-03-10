import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4">
      <h2>This is Home Page</h2>
      <Link href="/dashboard">Go To Dashboard</Link>
    </div>
  );
}

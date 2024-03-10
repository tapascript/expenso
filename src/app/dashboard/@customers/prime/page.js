import Link from "next/link";
import MetricList from "@/components/MetricList";

const PrimeCustomerPage = () => {
  const primeCustomerData = [
    { id: "123", name: "Acme Corporation", value: 234576 },
    { id: "756", name: "Dellp Corporation", value: 45678 },
  ];

  return (
    <div className="flex flex-col p-2 border rounded-md border-gray-300 m-3">
      <h2 className="text-xl my-2 font-semibold">Prime Customers</h2>
      <Link className="underline" href="/dashboard">
        All Customers
      </Link>
      <MetricList data={primeCustomerData} />
    </div>
  );
};

export default PrimeCustomerPage;

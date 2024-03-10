import MetricList from "@/components/MetricList";
import Link from "next/link";

const CustomersPage = () => {
  const customerData = [
    {"id": "123", "name": "Acme Corporation", "value": 234576},
    {"id": "456", "name": "Brand Inc", "value":76908},
    {"id": "956", "name": "Cello Corporation", "value": 56786},
    {"id": "756", "name": "Dellp Corporation", "value": 45678},
  ];

  return (
    <div className="flex flex-col p-2 border rounded-md border-gray-300 m-3">
      <h2 className="text-xl my-2 font-semibold">All Customers</h2>
      <Link className="underline" href="/dashboard/prime">Prime Customers</Link>
      <MetricList data={customerData} />
    </div>
  )
}

export default CustomersPage
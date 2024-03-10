import MetricList from "@/components/MetricList"
const CustomersPage = () => {
  const customerData = [
    {"id": "123", "name": "Acme Corporation", "value": 234576},
    {"id": "456", "name": "Brand Inc", "value":76908},
    {"id": "956", "name": "Cello Corporation", "value": 56786},
    {"id": "756", "name": "Dellp Corporation", "value": 46789},
  ];

  return (
    <div className="flex flex-col p-2 border rounded-md border-gray-300 m-3">
      <h2 className="text-xl my-2 font-semibold">Top 10 Customers</h2>
      <MetricList data={customerData} />
    </div>
  )
}

export default CustomersPage
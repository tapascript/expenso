import "../globals.css";

export const metadata = {
  title: "Dashboard - Expenso",
  description: "Know the insights from the top-level dashboard",
};

export default function RootLayout({ children, balance, expenses, profit, customers }) {
  return (
    <div className="flex flex-col h-screen">
      {children}
      <div className="flex">
        {balance} 
        {expenses} 
        {profit}
      </div>
      <div>
        {customers}
      </div>
    </div>
  );
}

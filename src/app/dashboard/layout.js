import "../globals.css";

export const metadata = {
  title: "Dashboard - Expenso",
  description: "Know the insights from the top-level dashboard",
};

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

import "./globals.css";

export const metadata = {
  title: "NextJs Tailwind Sandbox k",
  description: "Tutoriel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

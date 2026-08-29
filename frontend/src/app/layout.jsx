import "./globals.css";

export const metadata = {
  title: "WeatherGPT",
  description: "AI-powered weather assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
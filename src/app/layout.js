export const metadata = {
  title: "shaaanuu",
  description: "A simple but elegant space of mine on the internet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

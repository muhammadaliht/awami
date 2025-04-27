import "./globals.css";
import { Navigation } from "./components/Navigation";

export const metadata = {
  title: "Awami Systems Technologies (AST)",
  description: "Awami Systems Technologies (AST) provides end-to-end solutions related to Information Technology to our customers, which makes us One-Stop solution provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <link rel="icon" href="/images/logo.png"></link>

      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

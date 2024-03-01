import toast, { Toaster } from 'react-hot-toast';
import { HeaderComponent } from "@/components/header.component";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/219e2bf90c.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Toaster
          position="top-right
          "></Toaster>
        <HeaderComponent />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

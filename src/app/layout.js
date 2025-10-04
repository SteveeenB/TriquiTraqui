import "./globals.css";


export const metadata = {
  title: "TriquiTraqui",
  description: "Triqui (Tic-Tac-Toe) hecho con Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        {children}
      </body>
    </html>
  );
}

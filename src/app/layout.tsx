import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Siukfa Tours & Travel | Premium Vehicle Rentals in Assam',
  description: 'Rent premium cars and bikes in Guwahati and explore Northeast India with ease. Best rates for Creta, Innova, Himalayan and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

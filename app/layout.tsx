// app/layout.tsx
export const metadata = {
  title: 'MindReboot Lab',
  description: 'Hypnotherapy Audio Library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "MindReboot Lab",
  description: "Hypnosis platform for anxiety, confidence, trauma, and transformation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

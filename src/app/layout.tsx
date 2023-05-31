"use client";
import { useEffect } from "react";
import "@/style/globals.css";

export const metadata = {
  title: "Mourad Rziga - Architect",
  description:
    "Explore an exceptional architect portfolio showcasing visionary designs and awe-inspiring spaces. With a passion for innovative architecture, our portfolio reflects a harmonious blend of form, function, and artistic expression. From residential marvels to commercial landmarks, each project embodies meticulous craftsmanship, sustainable practices, and an unwavering commitment to creating transformative built environments. Discover our diverse portfolio of architectural masterpieces that evoke emotions, push boundaries, and leave a lasting impact on the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setVH();
    window.addEventListener("resize", () => {
      setVH();
    });

    () => {
      window.removeEventListener("resize", () => {
        setVH();
      });
    };
  }, []);

  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}

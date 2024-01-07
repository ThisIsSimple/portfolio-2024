import Script from "next/script";
import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "전윤민입니다.",
  description: "🎁 안녕하세요, 현실에 꿈을 선물하는 개발자 전윤민입니다!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-background text-foreground">
        {children}
        <Script src="https://kit.fontawesome.com/ea03b3bf09.js" />
      </body>
    </html>
  );
}

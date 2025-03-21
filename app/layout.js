import "../styles/globals.css"

// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

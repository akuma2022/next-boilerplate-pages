import { AppPropsWithLayout } from "@/interface";
import "@/styles/globals.css";
import { GlobalProvider } from "@/provider";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout;

  if (Layout) {
    return (
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  } else {
    return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    );
  }
}

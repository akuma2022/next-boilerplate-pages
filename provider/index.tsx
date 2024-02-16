import SnackbarProviderCustom from "@/components/custom/snackbar/snackbar-provider";
import axiosClient from "@/helper/call-center";
import store from "@/redux/store";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

interface IGlobalProvider {
  children: ReactNode | ReactElement | JSX.Element;
}

export const GlobalProvider = (props: IGlobalProvider) => {
  const { children } = props;

  const emotionCache = createCache({ key: "css" });
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axiosClient.get(url),
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
      }}
    >
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <SnackbarProviderCustom>{children}</SnackbarProviderCustom>
        </CacheProvider>
      </Provider>
    </SWRConfig>
  );
};

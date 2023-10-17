import Footer from "./Footer";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <>
          {router.pathname == "/" || router.pathname =="/Register" ? (
            <>
              {children}
              <Footer />
            </>
          ) : (
            <>
              <Sidebar />
              {children}
              <Footer />
            </>
          )}
        </>
      );
}

export default Layout;
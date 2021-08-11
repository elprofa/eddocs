import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../containers/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

function App({ Component, pageProps,apollo}) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  //console.log(apollo);
  return (
    <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  );
}


App.getInitialProps=async function ({Component,ctx}){
 
  let pageProps={};
  if(Component.getInitialProps){
    pageProps=await Component.getInitialProps(ctx);
  }

  pageProps.query=ctx.query;

  return {pageProps};

}
export default App;
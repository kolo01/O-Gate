import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function App({ Component, pageProps }) {



  return (<ChakraProvider><Component {...pageProps} /></ChakraProvider>)
}

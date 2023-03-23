import '../styles/globals.css'
import { Raleway, Pacifico } from '@next/font/google'

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--raleway-font'
})

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: '--pacifico-font',
  weight: "400"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
   :root {
    --raleway-font: $(raleway.style.fontFamily);
    --pacifico-font: $(pacifico.style.fontFamily);
   }
`}
      </style>
      <Component {...pageProps} />
    </>

  )
}

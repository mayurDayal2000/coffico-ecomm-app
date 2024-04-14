import Image from "next/image";
import { Poppins } from "next/font/google";
import productPic from "/public/images/brewed coffee in a cup.webp";
import productsList from "@/pages/products.json";
import Head from "next/head";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffico | Discover Your Perfect Cup</title>
        <meta name="description" content="Discover your next favorite coffee with our curated selection of premium blends. Each sip promises unmatched quality and flavor, crafted to delight. Explore now!" />
        <link href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className={`py-14 2xl:py-24 bg-slate-100 ${font.className}`}>
        <section className="container mx-auto px-4">
          <h1 className="mb-2 xl:mb-4 text-3xl font-medium text-center">Discover Your Perfect Cup!</h1>
          <p className="mb-10 xl:mb-12 text-center">
            Discover your next favorite coffee with our curated selection of premium blends. <br /> Each sip promises unmatched quality and flavor, crafted to delight. Explore now!
          </p>

          <ul className="flex items-center justify-center flex-wrap">
            {productsList.map((item) => (
              <li className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-4 xl:mb-0">
                <a href="">
                  <div className="p-6 mb-8 bg-white hover:bg-slate-200 rounded-3xl transition-colors ease-in duration-300">
                    <Image className="w-full object-cover rounded-xl mb-4" src={productPic} alt="coffee product" />

                    <h2 className="mb-2 text-xl leading-8 font-medium">{item.productTitle}</h2>
                    <p className="text-xl text-blue-500 font-medium tracking-tighter">₹ {item.productPrice}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

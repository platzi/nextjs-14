"use client";

export const MainProducts = () => {
  console.log("variable de entorno",process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME)
  return(
    <section>
      <h1>Main Products</h1>
    </section>
  )
}
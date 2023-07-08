import Link from "next/link";

const histoires = [
  {
    id: 1,
    name: "Les glaces délicieuses",
    href: "#",
    imageSrc: "histoire1/1.jpg",
  },
  {
    id: 2,
    name: "Groudou le porc-épic",
    href: "1",
    imageSrc: "histoire1/2.jpg",
  },

  {
    id: 3,
    name: "Billfold Wallet",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg",
  },
  // More products...
];

export default function Example() {
  return (
    <section className=" mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {histoires.map((histoire) => (
          <Link
            href={`/${histoire.href}`}
            key={histoire.id}
            className="group border rounded-xl"
          >
            <div className=" aspect-h-1 aspect-w-1 h-48 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={histoire.imageSrc}
                alt="image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <h1 className="text-xl font-semibold text-gray-700">
                {histoire.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

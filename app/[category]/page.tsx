import { client } from "@/sanity/lib/client";
import { simplifiedProduct } from "../interface";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const getValidCategories = async () => {


    const query = `*[_type == "category"]{
      name
    }`;
    const categories = await client.fetch(query);
    return categories.map((cat: { name: string }) => cat.name);
  };



const getData = async (category: string) => {
  const query = `*[_type == "product" && category->name == "${category}"]{
  _id,
    name,
    price, 
    "imageUrl" : images[0].asset->url,
    "slug": slug.current,
    "category" : category->name
}`;

  const data = await client.fetch(query);
  return data;
};



const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const data: simplifiedProduct[] = await getData(params.category);


  const validCategories = await getValidCategories();

  // Check if the route is a valid category
  if (!validCategories.includes(params.category))
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-950">
          {params.category} is Not Found!
        </h1>
      </div>
    )




  return (
    <div className="bg-white mt-32 mb-20">


      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">




      <div className="lg:hidden flex flex-col  justify-center items-center gap-8 md:flex-row mb-10 ">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-150 hover:bg-gray-100 active:bg-gray-200 "
          >
            Men
          </Link>

          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-150 hover:bg-gray-100 active:bg-gray-200 "
          >
            Women
          </Link>

          <Link
            href="/Teen"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-150 hover:bg-gray-100 active:bg-gray-200 "
          >
            Teen
          </Link>
        </div>
      </div>






        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-gray-900 tracking-tight">
            Our Products For {params.category}
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt="product image"
                    height={2000}
                    width={2000}
                    className="w-full h-full lg:w-full lg:h-full object-cover object-center cursor-pointer scale-105 transition duration-300"
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm text-gray-900 font-medium">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>





      </div>
    </div>
  );
};

export default CategoryPage;

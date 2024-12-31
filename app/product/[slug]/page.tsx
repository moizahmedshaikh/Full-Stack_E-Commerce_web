import { fullProduct } from "@/app/interface";
import AddToCart from "@/components/AddToCart";
import CheckoutNow from "@/components/checkoutNow";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { Star, Truck } from "lucide-react";

const getData = async (slug: string) => {
  
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
    images,
    name,
    description,
    price,
    "slug": slug.current,
    "category": category->name,
    product_id,
} `;
  const data = await client.fetch(query);
  return data;
};



const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white my-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-1.5 inline-block text-gray-500">
                {data.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="flex items-center mb-6 gap-3 md:mb-10">
              <Button className=" rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Rating
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-gray-800">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                incl Vat plus Shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-7 h-7" />
              <span className="text-sm">2-4 days shipping</span>
            </div>

            <div className="flex gap-2.5 ">
              <AddToCart
                name={data.name}
                description={data.description}
                currency="USD"
                price={data.price}
                image={data.images[0]}
                product_id={data.product_id}
              />
              {/* <Button variant={"secondary"}>Checkout Now</Button> */}

              <CheckoutNow
              name={data.name}
              description={data.description}
              currency="USD"
              price={data.price}
              image={data.images[0]}
              product_id={data.product_id}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wider">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

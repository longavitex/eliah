import LayoutTwo from "../../../components/Layout/LayoutTwo";
import SliderTwo from "@/components/Sections/Slider/SliderTwo";
import sliderData from "@/data/slider/sliderTwo.json";
import CategoriesOne from "@/components/Sections/Categories/CategoriesOne";
import ProductTabOne from "@/components/Sections/ProductThumb/ProductTab/ProductTabOne";
import productTabOneData from "@/data/products.json";
import DaleOfWeekOne from "@/components/Sections/DealOfWeek/DaleOfWeekOne";
import BlogOne from "@/components/Sections/Blog/BlogOne";
import blogOneData from "@/data/blog/blog.json";
import BrandsOne from "@/components/Sections/Brands/BrandsOne";
import Benefits from "@/components/Other/Benefits";
import InstagramOne from "@/components/Sections/Instagram/InstagramOne";
import { shop } from "@/common/variables";

export default function homepage2() {
    return (
        <LayoutTwo title="Homepage 2">
            <SliderTwo className="-style-2" data={sliderData} showDots />
            <CategoriesOne
                data={[
                    {
                        image: "/images/category/CategoryOne/1.png",
                        category: "Cheek & Coutour",
                        quantity: 120,
                    },
                    {
                        image: "/images/category/CategoryOne/2.png",
                        category: "Eyes",
                        quantity: 86,
                    },
                    {
                        image: "/images/category/CategoryOne/3.png",
                        category: "Palettes",
                        quantity: 216,
                    },
                ]}
            />
            <ProductTabOne data={productTabOneData} categories={shop.CATEGORISE} />
            <DaleOfWeekOne
                subTitle="Deal of the week"
                title="Lip and liner duo"
                last={100000000}
            />
            <BlogOne data={blogOneData.slice(0, 4)} />
            <BrandsOne />
            <Benefits />
            <InstagramOne />
        </LayoutTwo>
    );
}

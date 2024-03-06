import LayoutFour from "@/components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "@/components/Other/Breadcrumb";
import CTAOne from "@/components/Sections/CallToAction/CTAOne";
import ServiceItem from "@/components/Pages/Services/ServiceItem";
import { formatSingleNumber } from "@/common/utils";

const servicesData = [
    {
        title: "Body treatment",
        description:
            "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.",
        bigImgSrc: "/images/contact/1_1.png",
        smallImgSrc: "/images/contact/1.png",
    },
    {
        title: "Professinal makeup",
        description:
            "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.",
        bigImgSrc: "/images/contact/2_1.png",
        smallImgSrc: "/images/contact/2.png",
    },
    {
        title: "Maincure & pedicure",
        description:
            "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.",
        bigImgSrc: "/images/contact/3_1.png",
        smallImgSrc: "/images/contact/3.png",
    },
    {
        title: "Hair cut & Coloring",
        description:
            "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis pendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.",
        bigImgSrc: "/images/contact/4_1.png",
        smallImgSrc: "/images/contact/4.png",
    },
];

export default function services() {
    return (
        <LayoutFour title="Services">
            <Breadcrumb title="Services">
                <BreadcrumbItem name="Home" />
                <BreadcrumbItem name="Services" current />
            </Breadcrumb>
            {servicesData &&
                servicesData.map((item, index) => (
                    <ServiceItem
                        key={index}
                        bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
                        smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
                        title={item.title}
                        order={formatSingleNumber(index + 1)}
                        reverse={index % 2 === 1}
                    />
                ))}

            <CTAOne />
        </LayoutFour>
    );
}

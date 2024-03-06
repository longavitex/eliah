import LayoutFour from "@/components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "@/components/Other/Breadcrumb";
import Checkout from "@/components/Sections/Checkout/Checkout";
import InstagramTwo from "@/components/Sections/Instagram/InstagramTwo";

export default function () {
    return (
        <LayoutFour title="Checkout">
            <Breadcrumb title="Checkout">
                <BreadcrumbItem name="Home" />
                <BreadcrumbItem name="Shop" />
                <BreadcrumbItem name="Checkout" current />
            </Breadcrumb>
            <Checkout />
            <InstagramTwo />
        </LayoutFour>
    );
}

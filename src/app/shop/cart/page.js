import LayoutFour from "@/components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "@/components/Other/Breadcrumb";
import Cart from "@/components/Sections/Cart/Cart";
import InstagramTwo from "@/components/Sections/Instagram/InstagramTwo";

export default function () {
    return (
        <LayoutFour title="Cart">
            <Breadcrumb title="Shopping cart">
                <BreadcrumbItem name="Home" />
                <BreadcrumbItem name="Shop" />
                <BreadcrumbItem name="Shopping cart" current />
            </Breadcrumb>
            <Cart />
            <InstagramTwo />
        </LayoutFour>
    );
}

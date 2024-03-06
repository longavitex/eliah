import LayoutFour from "@/components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "@/components/Other/Breadcrumb";
import Wishlist from "@/components/Sections/Wishlist/Wishlist";
import InstagramTwo from "@/components/Sections/Instagram/InstagramTwo";

export default function () {
    return (
        <LayoutFour title="Wishlist">
            <Breadcrumb title="Wishlist">
                <BreadcrumbItem name="Home" />
                <BreadcrumbItem name="Shop" />
                <BreadcrumbItem name="Wishlist" current />
            </Breadcrumb>
            <Wishlist />
            <InstagramTwo />
        </LayoutFour>
    );
}

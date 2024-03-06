
import LayoutFour from "@/components/Layout/LayoutFour";
import InstagramTwo from "@/components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "@/components/Other/Breadcrumb";
import LayoutBlog from "@/components/Blog/LayoutBlog";

export default function index() {
    return (
        <LayoutFour title="Blog">
            <Breadcrumb title="Blog">
                <BreadcrumbItem name="Home" />
                <BreadcrumbItem name="Blog" current />
            </Breadcrumb>
            <LayoutBlog />
            <InstagramTwo />
        </LayoutFour>
    );
}

import LayoutFour from "@/components/Layout/LayoutFour";
import InstagramTwo from "@/components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "@/components/Other/Breadcrumb";
import FormContact from "@/components/Other/FormContact";

export default function () {
    return (
        <LayoutFour title="Contact us">
            <Breadcrumb title="Contact us">
                <BreadcrumbItem name="Home" />
                <BreadcrumbItem name="Contact us" current />
            </Breadcrumb>
            <FormContact />
            <InstagramTwo />
        </LayoutFour>
    );
}

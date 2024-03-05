import LayoutFive from "@/components/Layout/LayoutFive";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import sliderData from "@/data/slider/sliderFive.json";
import IntroductionSix from "@/components/Sections/Introduction/IntroductionSix";
import IntroductionSeven from "@/components/Sections/Introduction/IntroductionSeven";
import introductionSevenData from "@/data/introduction/introductionSeven.json";
import IntroductionEight from "@/components/Sections/Introduction/IntroductionEight";
import TestimonialTwo from "@/components/Sections/Testimonial/TestimonialTwo";
import testimonialOneData from "@/data/testimonial/data.json";
import CTATwo from "@/components/Sections/CallToAction/CTATwo";

export default function homepage5() {
    return (
        <LayoutFive title="Homepage 5">
            <SliderOne data={sliderData} className="-style-5" />
            <IntroductionSix />
            <IntroductionSeven data={introductionSevenData} />
            <IntroductionEight />
            <TestimonialTwo data={testimonialOneData} />
            <CTATwo />
        </LayoutFive>
    );
}

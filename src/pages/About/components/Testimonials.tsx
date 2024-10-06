import SectionTitle from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { FaRegUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Smith",
      comment:
        "I love the quality and variety of fitness equipment available. It has really helped me stay motivated in my fitness journey!",
    },
    {
      name: "John Doe",
      comment:
        "Excellent customer service! I had a query about a product and received prompt and helpful assistance. Highly recommended.",
    },
    {
      name: "Sarah Johnson",
      comment:
        "The products are top-notch and reasonably priced. I've recommended Fitness Tools to all my friends.",
    },
    {
      name: "Michael Brown",
      comment:
        "Fast delivery and the products arrived in perfect condition. Will definitely shop here again.",
    },
    {
      name: "Jessica Martinez",
      comment:
        "Great experience shopping here! The website is easy to navigate, and I found exactly what I needed.",
    },
    {
      name: "David Wilson",
      comment:
        "The home gym equipment I bought exceeded my expectations. Thank you for helping me set up my home gym!",
    },
  ];
  return (
    <div>
      <SectionTitle
        title={"Testimonials"}
        subTitle={"our satisfied customers"}
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="ms-[15px] h-[170px]">
                  <CardContent className="p-6 px-8">
                    <div className="flex items-center gap-x-4 mb-4">
                      <FaRegUserCircle className="text-2xl text-secondaryColor" />
                      <p className="font-semibold">{item?.name}</p>
                    </div>
                    <p>{item?.comment}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;

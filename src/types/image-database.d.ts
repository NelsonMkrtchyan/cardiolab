declare module "~/constants/ImageDatabase.json" {
  const value: {
    Landing: {
      Slider: {
        slide_one: string;
        slide_two: string;
      };
      AboutUsSection: {
        image: string;
      };
      VideoSection: {
        image: string;
      };
    };
    AboutUsPage: {
      IntroSection: {
        image: string;
      };
    };
    StaffPage: Record<string, unknown>;
    ServicesPage: Record<string, unknown>;
    PriceListPage: Record<string, unknown>;
    GalleryPage: Record<string, unknown>;
    ContactUsPage: Record<string, unknown>;
    AbstractImages: {
      abstract_one: string;
      abstract_two: string;
      abstract_three: string;
      abstract_four: string;
      abstract_five: string;
    };
  };
  export default value;
}

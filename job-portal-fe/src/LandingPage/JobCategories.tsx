import { Carousel } from "@mantine/carousel";
import {
  IconSpeakerphone,
  IconCode,
  IconPalette,
  IconDeviceDesktop,
  IconPencil,
  IconBriefcase,
  IconCamera,
  IconChartBar,
} from "@tabler/icons-react";
import "@mantine/carousel/styles.css"; // <- important if not imported globally

const jobCategories = [
  {
    icon: IconSpeakerphone,
    title: "Digital Marketing",
    description: "Build brands online with marketing strategies",
    jobCount: "1.2k+ new job posted",
  },
  {
    icon: IconCode,
    title: "Web Developer",
    description: "Build and maintain websites for clients",
    jobCount: "2k+ new job posted",
  },
  {
    icon: IconPalette,
    title: "Arts & Design",
    description: "Create visual content for branding and media",
    jobCount: "500+ new job posted",
  },
  {
    icon: IconDeviceDesktop,
    title: "UI-UX Designer",
    description: "Design user interfaces and enhance user experience",
    jobCount: "800+ new job posted",
  },
  {
    icon: IconPencil,
    title: "Content Writing",
    description: "Write and edit content for various platforms",
    jobCount: "1.5k+ new job posted",
  },
  {
    icon: IconBriefcase,
    title: "Business Development",
    description: "Drive growth and strategic partnerships",
    jobCount: "900+ new job posted",
  },
  {
    icon: IconCamera,
    title: "Photography",
    description: "Capture moments and create visual stories",
    jobCount: "400+ new job posted",
  },
  {
    icon: IconChartBar,
    title: "Data Analytics",
    description: "Analyze data to drive business insights",
    jobCount: "1.1k+ new job posted",
  },
];

const JobCategories = () => {
  return (
    <div className="mt-10 pb-5 bg-mine-shaft-900 py-16">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
        Browse <span className="text-bright-sun-400">Job</span>Category
      </div>

      <div className="text-lg text-mine-shaft-300 text-center mx-auto mb-12 max-w-2xl">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Carousel
          withControls
          slideGap="md"
          slideSize={{ base: "100%", sm: "50%", md: "33.33%", lg: "20%" }}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
        >
          {jobCategories.map((category, index) => (
            <Carousel.Slide key={index}>
              <div className="bg-mine-shaft-800 rounded-lg p-6 h-72 border border-mine-shaft-700 hover:border-bright-sun-400 transition-all duration-300 cursor-pointer group min-w-[250px]">
                <div className="flex flex-col h-full items-center">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-bright-sun-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon size={24} className="text-mine-shaft-900" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-mine-shaft-100 mb-3 group-hover:text-bright-sun-400 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-mine-shaft-300 text-center text-sm mb-4 flex-grow leading-relaxed">
                    {category.description}
                  </p>

                  {/* Job Count */}
                  <div className="text-bright-sun-400 text-sm font-medium">
                    {category.jobCount}
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default JobCategories;

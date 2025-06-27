import {
  IconFileText,
  IconDeviceDesktop,
  IconUserCheck,
} from "@tabler/icons-react";

const Working = () => {
  const steps = [
    {
      icon: IconFileText,
      title: "Build Your Resume",
      description: "Create a standout resume with your skills.",
    },
    {
      icon: IconDeviceDesktop,
      title: "Apply for Job",
      description: "Find and apply for jobs that match your skills.",
    },
    {
      icon: IconUserCheck,
      title: "Get Hired",
      description: "Connect with employers and start your new job.",
    },
  ];

  return (
    <div className="bg-mine-shaft-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-mine-shaft-100 mb-4">
            How it <span className="text-bright-sun-400">Works</span>
          </h2>
          <p className="text-lg text-mine-shaft-300 max-w-2xl mx-auto">
            Effortlessly navigate through the process and land your dream job.
          </p>
        </div>

        <div className="flex items-center justify-between gap-16">

          <div className="flex-1 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-16 h-16 bg-bright-sun-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon size={28} className="text-mine-shaft-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-mine-shaft-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-mine-shaft-300 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <img
              src="../../public/Boy2.png"
              alt="a boy coding"
              className="h-115 w-115 contain-size"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Working;

import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center ">
      <div className="w-[55%]">
        <div>
          <img
            src="../../public/Boy.png"
            alt="a boy coding"
            className="h-150 w-150"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[45%] h-100 items-start justify-between p-10">
        <div className="text-6xl font-bold text-mine-shaft-100">
          Find your Dream job{" "}
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good compay.
        </div>
        <div className="flex gap-4 text-mine-shaft-100 ">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 [&_input]:!text-mine-shaft-100 "
            variant="unstyled"
            label="Job title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 [&_input]:!text-mine-shaft-100 "
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />
          <div className="flex items-center justify-center bg-bright-sun-400 rounded-lg p-1 px-2 hover:bg-bright-sun-500 cursor-pointer transition-all duration-300 ">
            <IconSearch stroke={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DreamJob;

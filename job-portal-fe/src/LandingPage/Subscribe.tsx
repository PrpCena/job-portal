import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="bg-mine-shaft-900 py-10">
      <div className="max-w-5xl mx-auto bg-mine-shaft-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Never Wants to Miss <br />
              Any <span className="text-bright-sun-400">Job News?</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center bg-mine-shaft-700 rounded-lg p-1.5">
              <TextInput
                placeholder="Your@email.com"
                variant="unstyled"
                classNames={{
                  input: "text-white placeholder-mine-shaft-300 bg-transparent border-none focus:ring-0 w-64 px-2",
                }}
              />
              <Button
                className="bg-bright-sun-400 text-mine-shaft-900 hover:bg-bright-sun-500 rounded-md font-semibold"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
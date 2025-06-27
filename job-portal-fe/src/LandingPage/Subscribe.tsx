import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="bg-mine-shaft-900 py-24">
      <div className="max-w-6xl mx-auto bg-mine-shaft-800 rounded-2xl shadow-lg p-12">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="md:text-left">
            <h2 className="text-5xl font-bold text-white leading-tight text-center">
              Never Wants to Miss <br />
              Any <span className="text-bright-sun-400">Job News?</span>
            </h2>
          </div>

          {/* Right: Form */}
          <div>
            <div className="flex items-center justify-between bg-mine-shaft-900 rounded-xl p-4">
              <TextInput
                placeholder="Your@email.com"
                variant="unstyled"
                size="xl"
                className= "[&_input]:!text-mine-shaft-100 [&_input]:!placeholder:text-mine-shaft-400"
              />
              <Button
                className="!rounded-lg font-bold"
                size="lg"
                color="brightSun.4"
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
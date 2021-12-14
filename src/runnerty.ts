const completionSpec: Fig.Spec = {
  name: "runnerty",
  description: "Process orchestrator",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for runnerty",
    },
    {
      name: ["--version", "-v", "-V"],
      description: "Show version for runnerty",
    },
    {
      name: "-c",
      description: "Specify the config file",
      args: {
        name: "path",
        description: "Path to the config file",
        isOptional: false,
      },
    },
  ],
  // Only uncomment if runnerty takes an argument
  // args: {}
};
export default completionSpec;

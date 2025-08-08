export default {
  default: {
    // The order here is critical: support files first, then steps.
    require: ["features/steps/**/*.js"],
    format: ["summary"],
    paths: ["features/**/*.feature"],
  },
};

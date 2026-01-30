const isNpm = process.env.npm_execpath && process.env.npm_execpath.includes("npm");
const isPnpm = process.env.npm_execpath && process.env.npm_execpath.includes("pnpm");

if (isNpm && !isPnpm) {
  console.error("\x1b[31m%s\x1b[0m", "Error: You are using npm. This project requires pnpm. Please use pnpm instead.");
  process.exit(1);
}
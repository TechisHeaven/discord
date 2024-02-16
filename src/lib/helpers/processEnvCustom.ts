interface Env {
  SECRET_KEY: string;
  SECRET_NAME: string;
  // Add other environment variables and their types as needed
}

export const processEnv: Env = {
  SECRET_KEY: process.env.SECRET_KEY as string,
  SECRET_NAME: process.env.SECRET_NAME as string,
  // Add other environment variables and their types as needed
};

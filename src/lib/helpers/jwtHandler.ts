import * as jwt from "jsonwebtoken";
import { processEnv } from "./processEnvCustom";

export default function CreateJwtToken(payload: { id: string; name: string }) {
  const secretKey = processEnv.SECRET_KEY;

  // Payload for the token (you can customize this as per your needs)

  // Options for the token (optional)
  const options: jwt.SignOptions = {
    expiresIn: "1h", // Token will expire in 1 hour
  };

  // Create the JWT
  const token = jwt.sign(payload, secretKey, options);

  return token;
}

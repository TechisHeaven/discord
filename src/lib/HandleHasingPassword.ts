import bcrypt from "bcrypt";
const saltRounds = 10;

export async function CreateHashPassword(password: string): Promise<string> {
  const HashedPassword = bcrypt.hashSync(password, saltRounds);
  return HashedPassword;
}
export async function CompareHashedPassword({
  password,
  hashedPassword,
}: {
  password: string;
  hashedPassword: string;
}): Promise<boolean> {
  const HashedPassword = bcrypt.compareSync(password, hashedPassword);
  return HashedPassword;
}

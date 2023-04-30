import jwt from "jsonwebtoken";
interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
}
export function verifyAuthorizationToken(
  token: string
): AuthenticatedUser | null {
  try {
    const user = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as AuthenticatedUser;
    return user;
  } catch (err) {
    console.error(`Failed to verify JWT token: ${err}`);
    return null;
  }
}

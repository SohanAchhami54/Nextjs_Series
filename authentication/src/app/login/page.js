
import Loginform from "@/components/Loginform";

export default async function LoginPage({ searchParams }) {
  const { error } = await searchParams;
  return <Loginform urlError={error} />;
}
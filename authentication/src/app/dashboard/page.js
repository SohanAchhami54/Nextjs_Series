import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function signOut() {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const name = user.user_metadata?.full_name ?? user.email;
  const avatar = user.user_metadata?.avatar_url;

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg">
        {avatar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatar}
            alt="Profile"
            referrerPolicy="no-referrer"
            className="mx-auto mb-4 h-20 w-20 rounded-full"
          />
        )}
        <h1 className="text-xl font-semibold text-zinc-900">Hello, {name}</h1>
        <p className="mb-6 text-sm text-zinc-500">{user.email}</p>

        <form action={signOut}>
          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Sign out
          </button>
        </form>
      </div>
    </main>
  );
}
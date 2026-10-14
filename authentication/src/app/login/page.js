// "use client";


// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { createClient } from "@/lib/supabase/client";

// const loginSchema = z.object({
//   email: z.string().email("Enter a valid email address"),
// });

// // Messages for errors that arrive in the URL (?error=...)
// const URL_ERRORS = {
//   invalid_code: "That code was incorrect. Enter your email to get a new one.",
//   auth_failed: "Google sign-in failed. Please try again.",
// };

// function Spinner() {
//   return (
//     <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
//       <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75" />
//     </svg>
//   );
// }

// export default function LoginForm({ urlError }) {
//   const router = useRouter();
//   const [sending, setSending] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [error, setError] = useState(URL_ERRORS[urlError] ?? null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     mode: "onChange", // validate while typing
//   });

//   const busy = sending || googleLoading;

//   // Email login: send the code, then go to the verify page
//   const onSubmit = async ({ email }) => {
//     setSending(true);
//     setError(null);

//     const supabase = createClient();
//     const { error } = await supabase.auth.signInWithOtp({
//       email,
//       options: { shouldCreateUser: true },
//     });

//     if (error) {
//       setError(error.message);
//       setSending(false);
//       return;
//     }

//     router.push(`/verify?email=${encodeURIComponent(email)}`);
//   };

//   // Google login
//   async function handleGoogleLogin() {
//     setGoogleLoading(true);
//     setError(null);

//     const supabase = createClient();
//     //the client generates a secret code_verifier and stores in a cookie. It sends only a hashed
//     //version, the code challenge, to supabase.
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
//         queryParams: {
//           access_type: "offline",
//           prompt: "consent",
//         },
//       },
//     });

//     if (error) {
//       setError(error.message);
//       setGoogleLoading(false);
//     }
//     // On success the browser redirects to Google automatically
//   }

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
//       <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
//         <header className="mb-8 text-center">
//           <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Welcome</h1>
//           <p className="mt-1.5 text-sm text-gray-500">
//             Enter your email to sign in or create an account
//           </p>
//         </header>

//         <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
//           <div>
//             <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               autoComplete="email"
//               placeholder="you@example.com"
//               aria-invalid={!!errors.email}
//               aria-describedby={errors.email ? "email-error" : undefined}
//               className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-500"
//               {...register("email")}
//             />
//             {errors.email && (
//               <p id="email-error" className="mt-1.5 text-sm text-red-600">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {error && (
//             <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={busy || !isValid}
//             className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {sending && <Spinner />}
//             {sending ? "Sending code…" : "Go"}
//           </button>
//         </form>

//         <div className="my-6 flex items-center gap-3" role="separator">
//           <div className="h-px flex-1 bg-gray-200" />
//           <span className="text-xs text-gray-400">or</span>
//           <div className="h-px flex-1 bg-gray-200" />
//         </div>

//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           disabled={busy}
//           className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
//             <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
//             <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z" />
//             <path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z" />
//             <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
//           </svg>
//           {googleLoading ? "Redirecting..." : "Continue with Google"}
//         </button>
//       </div>
//     </main>
//   );
// }


import Loginform from "@/components/Loginform";

export default async function LoginPage({ searchParams }) {
  const { error } = await searchParams;
  return <Loginform urlError={error} />;
}
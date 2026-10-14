
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createClient } from "@/lib/supabase/client";

const OTP_LENGTH = 6;
const STORAGE_KEY = "otp_email";

const otpSchema = z.object({
  otp: z.string().regex(
    new RegExp(`^\\d{${OTP_LENGTH}}$`),
    "Enter the complete 6-digit verification code"
  ),
});

export default function VerifyForm() {
  const router = useRouter();

  const [email, setEmail] = useState(null);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState(null);

  const submitting = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(otpSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const savedEmail = sessionStorage.getItem(STORAGE_KEY);

    if (!savedEmail) {
      router.replace("/login");
      return;
    }

    setEmail(savedEmail);
  }, [router]);

  async function onSubmit({ otp }) {
    if (submitting.current || !email) return;

    submitting.current = true;
    setVerifying(true);
    setError(null);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (error) {
        setError("The code is invalid or expired. Please try again.");
        return;
      }

      sessionStorage.removeItem(STORAGE_KEY);

      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      console.error("OTP verification failed:", err);
      setError("Unable to verify the code. Check your connection and try again.");
    } finally {
      submitting.current = false;
      setVerifying(false);
    }
  }

  if (!email) return null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Check your email
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            We sent a {OTP_LENGTH}-digit code to{" "}
            <span className="font-medium text-gray-900">{email}</span>
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <div>
            <label
              htmlFor="otp"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Verification code
            </label>

            <input
              id="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={OTP_LENGTH}
              placeholder={"0".repeat(OTP_LENGTH)}
              autoFocus
              aria-invalid={!!errors.otp}
              aria-describedby={errors.otp ? "otp-error" : undefined}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-center text-lg tracking-[0.5em] text-gray-900 placeholder:text-gray-300 transition focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 aria-[invalid=true]:border-red-500"
              {...register("otp", {
                onChange: (event) => {
                  event.target.value = event.target.value.replace(/\D/g, "");
                  setError(null);
                },
              })}
            />

            {errors.otp && (
              <p id="otp-error" className="mt-1.5 text-sm text-red-600">
                {errors.otp.message}
              </p>
            )}
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={verifying || !isValid}
            className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {verifying ? "Verifying..." : "Verify"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            onClick={() => sessionStorage.removeItem(STORAGE_KEY)}
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900 focus:outline-none focus-visible:underline"
          >
            Use a different email
          </Link>
        </div>
      </div>
    </main>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";

/*
 * DONATION FLOW
 *
 * The gateway is not wired up yet. This one flag controls everything:
 *   false -> a simulated gateway sheet opens (with a visible demo banner)
 *   true  -> the real Razorpay/Cashfree call inside handlePayment() runs
 *
 * There is deliberately no card number / CVV form. Gateways like Razorpay
 * open their own checkout, so card details never touch this page.
 */
const PAYMENT_ENABLED = false;

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

const IMPACT = {
  500: "A month of learning materials for one child",
  1000: "A month of daily meals for one child",
  2500: "A term of classroom supplies for one centre",
  5000: "A month of a coordinator's time across three centres",
};

const emptyDonor = { name: "", email: "", phone: "", pan: "", message: "" };

const Donate = () => {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [donor, setDonor] = useState(emptyDonor);
  const [anonymous, setAnonymous] = useState(false);
  const [errors, setErrors] = useState({});
  const [stage, setStage] = useState("form"); // form | gateway | processing | success | failed

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const handleDonorChange = (e) => {
    const { name, value } = e.target;
    setDonor((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};

    if (!finalAmount || finalAmount < 100) {
      next.amount = "Minimum amount is ₹100";
    }
    if (!donor.name.trim()) {
      next.name = "Please enter your name";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.email)) {
      next.email = "Please enter a valid email";
    }
    if (!/^[0-9]{10}$/.test(donor.phone.replace(/\D/g, ""))) {
      next.phone = "Please enter a 10-digit mobile number";
    }
    if (donor.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(donor.pan.trim())) {
      next.pan = "PAN format: ABCDE1234F";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handlePayment = () => {
    if (!validate()) return;

    if (!PAYMENT_ENABLED) {
      setStage("gateway");
      return;
    }

    /* ------------------------------------------------------------------
     * REAL GATEWAY GOES HERE. Razorpay looks roughly like this:
     *
     * const order = await fetch("/api/create-order", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify({ amount: finalAmount * 100, frequency }),
     * }).then((r) => r.json());
     *
     * const rzp = new window.Razorpay({
     *   key: import.meta.env.VITE_RAZORPAY_KEY_ID,
     *   order_id: order.id,
     *   amount: order.amount,
     *   currency: "INR",
     *   name: "Shakuntala Poddar Welfare Foundation",
     *   prefill: { name: donor.name, email: donor.email, contact: donor.phone },
     *   handler: () => setStage("success"),
     *   modal: { ondismiss: () => setStage("failed") },
     * });
     * rzp.open();
     *
     * Note: always verify the amount on the server. An amount sent from
     * the client cannot be trusted.
     * ------------------------------------------------------------------ */
  };

  const simulate = (result) => {
    setStage("processing");
    setTimeout(() => setStage(result), 1600);
  };

  const resetAll = () => {
    setStage("form");
    setDonor(emptyDonor);
    setCustomAmount("");
    setAmount(1000);
    setAnonymous(false);
    setErrors({});
  };

  const fieldClass =
    "w-full rounded-[8px] border bg-[#FBFBFB] px-4 py-[15px] font-['Inter'] text-[15px] text-[#1C1C1C] outline-none transition-colors placeholder:text-[#6C6C6C] focus:border-[#121212]";

  /* ---------------------------- SUCCESS ---------------------------- */
  if (stage === "success") {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-white px-5 py-24">
        <div className="w-full max-w-[520px] text-center">
          <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#D4F53C]">
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
              <path
                d="M2 12.5L10.5 21L28 3"
                stroke="#121212"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="mt-8 font-['Sora'] text-[28px] font-normal leading-[120%] tracking-[-0.84px] text-[#000000] sm:text-[32px] sm:tracking-[-0.96px]">
            Thank you, {anonymous ? "friend" : donor.name.split(" ")[0]}
          </h1>

          <p className="mt-4 font-['Inter'] text-[16px] leading-[160%] tracking-[-0.16px] text-[#515151]">
            Your ₹{finalAmount.toLocaleString("en-IN")}{" "}
            {frequency === "monthly" ? "monthly " : ""}contribution has been
            recorded. A confirmation and your 80G receipt will be sent to{" "}
            <span className="text-[#1C1C1C]">{donor.email}</span>.
          </p>

          {!PAYMENT_ENABLED && (
            <p className="mt-6 rounded-[8px] bg-[#FFF4E8] px-4 py-3 font-['Inter'] text-[13px] leading-[150%] text-[#8A4B00]">
              Demo mode — no real payment was made and no receipt will be
              issued.
            </p>
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="flex h-[52px] items-center justify-center rounded-[8px] bg-[#121212] px-8 font-['Inter'] text-[15px] text-[#FFF9F7] transition-opacity hover:opacity-90"
            >
              Back to home
            </Link>
            <button
              type="button"
              onClick={resetAll}
              className="flex h-[52px] items-center justify-center rounded-[8px] border border-black/15 px-8 font-['Inter'] text-[15px] text-[#1C1C1C] transition-colors hover:bg-black/[0.04]"
            >
              Make another donation
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------------------- FAILED ---------------------------- */
  if (stage === "failed") {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-white px-5 py-24">
        <div className="w-full max-w-[520px] text-center">
          <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FF5255]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4L20 20M20 4L4 20"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="mt-8 font-['Sora'] text-[28px] font-normal leading-[120%] tracking-[-0.84px] text-[#000000]">
            Payment didn't go through
          </h1>

          <p className="mt-4 font-['Inter'] text-[16px] leading-[160%] tracking-[-0.16px] text-[#515151]">
            Nothing was charged to your account. You can try again.
          </p>

          <button
            type="button"
            onClick={() => setStage("form")}
            className="mt-10 h-[52px] rounded-[8px] bg-[#121212] px-8 font-['Inter'] text-[15px] text-[#FFF9F7] transition-opacity hover:opacity-90"
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  /* ---------------------------- FORM ---------------------------- */
  return (
    <main className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-[120px] lg:pt-32">
        {!PAYMENT_ENABLED && (
          <div className="mx-auto mb-10 max-w-[680px] rounded-[8px] border border-[#F0D9B8] bg-[#FFF4E8] px-4 py-3 text-center font-['Inter'] text-[13px] leading-[150%] text-[#8A4B00]">
            Demo mode — the payment gateway isn't connected yet. No real
            transaction will take place.
          </div>
        )}

        <div className="mx-auto max-w-[680px]">
          <h1 className="font-['Sora'] text-[28px] font-normal capitalize leading-[120%] tracking-[-0.84px] text-[#000000] sm:text-[32px] sm:tracking-[-0.96px]">
            Make a donation
          </h1>
          <p className="mt-3 font-['Inter'] text-[16px] leading-[150%] tracking-[-0.48px] text-[#515151]">
            Every contribution helps one more child stay in school another term.
          </p>

          {/* frequency */}
          <div className="mt-10 inline-flex rounded-[10px] bg-[#F4F2EE] p-1">
            {[
              { id: "one-time", label: "One-time" },
              { id: "monthly", label: "Monthly" },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFrequency(option.id)}
                className={`h-[42px] rounded-[8px] px-6 font-['Inter'] text-[14px] transition-colors ${
                  frequency === option.id
                    ? "bg-white text-[#121212] shadow-sm"
                    : "text-[#6C6C6C]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* amount */}
          <div className="mt-8">
            <p className="font-['Inter'] text-[14px] uppercase tracking-[0.12em] text-[#6C6C6C]">
              Choose an amount
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PRESET_AMOUNTS.map((value) => {
                const active = !customAmount && amount === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount("");
                      setErrors((prev) => ({ ...prev, amount: undefined }));
                    }}
                    className={`h-[60px] rounded-[8px] border font-['Sora'] text-[18px] transition-colors ${
                      active
                        ? "border-[#121212] bg-[#121212] text-white"
                        : "border-[rgba(108,108,108,0.16)] bg-[#FBFBFB] text-[#1C1C1C] hover:border-[#121212]"
                    }`}
                  >
                    ₹{value.toLocaleString("en-IN")}
                  </button>
                );
              })}
            </div>

            <div className="mt-3">
              <div
                className={`flex items-center gap-2 rounded-[8px] border bg-[#FBFBFB] px-4 py-[15px] transition-colors focus-within:border-[#121212] ${
                  errors.amount
                    ? "border-[#FF5255]"
                    : "border-[rgba(108,108,108,0.16)]"
                }`}
              >
                <span className="font-['Sora'] text-[16px] text-[#6C6C6C]">
                  ₹
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={100}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setErrors((prev) => ({ ...prev, amount: undefined }));
                  }}
                  placeholder="Other amount"
                  aria-label="Custom amount"
                  className="w-full bg-transparent font-['Inter'] text-[15px] text-[#1C1C1C] outline-none placeholder:text-[#6C6C6C]"
                />
              </div>
              {errors.amount && (
                <p className="mt-2 font-['Inter'] text-[13px] text-[#FF5255]">
                  {errors.amount}
                </p>
              )}
            </div>

            {IMPACT[finalAmount] && (
              <p className="mt-4 rounded-[8px] bg-[#F4F2EE] px-4 py-3 font-['Inter'] text-[14px] leading-[150%] text-[#515151]">
                ₹{finalAmount.toLocaleString("en-IN")} — {IMPACT[finalAmount]}
              </p>
            )}
          </div>

          {/* donor details */}
          <div className="mt-10">
            <p className="font-['Inter'] text-[14px] uppercase tracking-[0.12em] text-[#6C6C6C]">
              Your details
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div>
                <input
                  name="name"
                  value={donor.name}
                  onChange={handleDonorChange}
                  placeholder="Full name"
                  aria-label="Full name"
                  className={`${fieldClass} ${
                    errors.name
                      ? "border-[#FF5255]"
                      : "border-[rgba(108,108,108,0.16)]"
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 font-['Inter'] text-[13px] text-[#FF5255]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    name="email"
                    type="email"
                    value={donor.email}
                    onChange={handleDonorChange}
                    placeholder="Email address"
                    aria-label="Email address"
                    className={`${fieldClass} ${
                      errors.email
                        ? "border-[#FF5255]"
                        : "border-[rgba(108,108,108,0.16)]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 font-['Inter'] text-[13px] text-[#FF5255]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="phone"
                    type="tel"
                    value={donor.phone}
                    onChange={handleDonorChange}
                    placeholder="Phone number"
                    aria-label="Phone number"
                    className={`${fieldClass} ${
                      errors.phone
                        ? "border-[#FF5255]"
                        : "border-[rgba(108,108,108,0.16)]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-2 font-['Inter'] text-[13px] text-[#FF5255]">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  name="pan"
                  value={donor.pan}
                  onChange={handleDonorChange}
                  placeholder="PAN (optional, required for 80G receipt)"
                  aria-label="PAN number"
                  className={`${fieldClass} uppercase ${
                    errors.pan
                      ? "border-[#FF5255]"
                      : "border-[rgba(108,108,108,0.16)]"
                  }`}
                />
                {errors.pan && (
                  <p className="mt-2 font-['Inter'] text-[13px] text-[#FF5255]">
                    {errors.pan}
                  </p>
                )}
              </div>

              <textarea
                name="message"
                value={donor.message}
                onChange={handleDonorChange}
                rows={3}
                placeholder="Message (optional)"
                aria-label="Message"
                className={`${fieldClass} resize-none border-[rgba(108,108,108,0.16)]`}
              />

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="h-[18px] w-[18px] accent-[#121212]"
                />
                <span className="font-['Inter'] text-[14px] text-[#515151]">
                  Make this donation anonymous
                </span>
              </label>
            </div>
          </div>

          {/* summary + pay */}
          <div className="mt-10 rounded-[12px] border border-[rgba(108,108,108,0.16)] p-5">
            <div className="flex items-center justify-between">
              <span className="font-['Inter'] text-[15px] text-[#515151]">
                {frequency === "monthly"
                  ? "Monthly donation"
                  : "One-time donation"}
              </span>
              <span className="font-['Sora'] text-[24px] text-[#000000]">
                ₹{(finalAmount || 0).toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="button"
              onClick={handlePayment}
              className="mt-5 h-[56px] w-full rounded-[8px] bg-[#121212] font-['Inter'] text-[16px] capitalize text-[#FFF9F7] transition-opacity hover:opacity-90"
            >
              Proceed to pay
            </button>

            <p className="mt-4 text-center font-['Inter'] text-[13px] leading-[150%] text-[#6C6C6C]">
              SPWF is a registered non-profit. Donations are eligible for tax
              benefit under 80G.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------ MOCK GATEWAY SHEET ------------------ */}
      {(stage === "gateway" || stage === "processing") && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">
          <div className="w-full max-w-[420px] rounded-[20px] bg-white p-6 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.55)]">
            <div className="rounded-[8px] bg-[#FFF4E8] px-3 py-2 text-center font-['Inter'] text-[12px] uppercase tracking-[0.14em] text-[#8A4B00]">
              Simulated gateway
            </div>

            <div className="mt-6 text-center">
              <p className="font-['Inter'] text-[14px] text-[#6C6C6C]">
                Paying to
              </p>
              <p className="mt-1 font-['Sora'] text-[18px] text-[#000000]">
                Shakuntala Poddar Welfare Foundation
              </p>
              <p className="mt-5 font-['Sora'] text-[36px] leading-none text-[#000000]">
                ₹{(finalAmount || 0).toLocaleString("en-IN")}
              </p>
            </div>

            {stage === "processing" ? (
              <div className="mt-8 flex flex-col items-center gap-4 py-4">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#121212]" />
                <p className="font-['Inter'] text-[14px] text-[#6C6C6C]">
                  Processing…
                </p>
              </div>
            ) : (
              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => simulate("success")}
                  className="h-[52px] rounded-[8px] bg-[#121212] font-['Inter'] text-[15px] text-[#FFF9F7] transition-opacity hover:opacity-90"
                >
                  Simulate successful payment
                </button>
                <button
                  type="button"
                  onClick={() => simulate("failed")}
                  className="h-[52px] rounded-[8px] border border-black/15 font-['Inter'] text-[15px] text-[#1C1C1C] transition-colors hover:bg-black/[0.04]"
                >
                  Simulate failure
                </button>
                <button
                  type="button"
                  onClick={() => setStage("form")}
                  className="mt-1 font-['Inter'] text-[14px] text-[#6C6C6C] underline underline-offset-4"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Donate;

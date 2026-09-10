import { useState } from "react";
import contactImage from "../../assets/images/contactImage.png";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(form);
  };

  const fieldWrapper =
    "flex w-full items-center gap-[10px] rounded-[4px] border border-[rgba(108,108,108,0.16)] bg-[#FBFBFB] px-4 py-[15px]";

  const fieldInput =
    "w-full bg-transparent font-['Inter'] text-[14px] font-normal leading-[140%] text-[#6C6C6C] outline-none placeholder:text-[#6C6C6C]";

  return (
    <section className="w-full bg-white">
      {/* Frame 2147226725 */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch justify-between gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:gap-[52px] lg:px-10 lg:py-16">
        {/* Frame 2147224904 */}
        <div className="flex w-full flex-col items-start gap-10 lg:h-[636px] lg:w-[672px] lg:flex-shrink-0 lg:self-stretch">
          {/* Frame 2147224489 */}
          <div className="flex w-full max-w-[510px] flex-col items-start gap-3">
            <h2 className="font-['Inter'] text-[28px] font-normal leading-[100%] tracking-[-0.96px] text-[#000000] sm:text-[32px]">
              Contact Us
            </h2>
            <p className="font-['Inter'] text-[15px] font-normal leading-[150%] tracking-[-0.48px] text-[#515151] sm:text-[16px]">
              We'd love to hear from you. Please fill out this form, and we'll
              reply soon.
            </p>
          </div>

          {/* Frame 2610820 */}
          <div className="flex w-full flex-1 flex-col items-start">
            <div className="flex w-full flex-col items-start gap-6">
              {/* Frame 7 */}
              <div className={`${fieldWrapper} h-[60px]`}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  aria-label="Enter Name"
                  className={fieldInput}
                />
              </div>

              {/* Frame 8 */}
              <div className={`${fieldWrapper} h-[60px]`}>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className={fieldInput}
                />
              </div>

              {/* Frame 7 */}
              <div className={`${fieldWrapper} h-[60px]`}>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  aria-label="Email address"
                  className={fieldInput}
                />
              </div>

              {/* Frame 2147224... message */}
              <div
                className={`${fieldWrapper} h-[140px] flex-1 items-start sm:h-[164px]`}
              >
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  aria-label="Message"
                  className={`${fieldInput} h-full resize-none`}
                />
              </div>
            </div>

            {/* Frame 2147224739 */}
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 flex w-full items-center justify-center gap-[10px] rounded-[4px] bg-[#000000] px-6 py-5 text-center font-['Inter'] text-[15px] font-normal uppercase leading-[100%] text-[#FFFFFF] transition-opacity duration-200 hover:opacity-90 sm:mt-12 sm:py-6 sm:text-[16px]"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Frame 2147226862 */}
        <div className="w-full lg:w-[636px] lg:flex-shrink-0">
          <img
            src={contactImage}
            alt="Children supported by SPWF"
            className="aspect-square h-auto w-full object-cover lg:h-[636px] lg:w-[636px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

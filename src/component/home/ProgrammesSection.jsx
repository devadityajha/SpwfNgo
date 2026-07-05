import React from "react";
import shiksharth from "../../assets/images/shiksharth.png";
import kaushal from "../../assets/images/kaushal.png";
import aahar from "../../assets/images/aahar.png";

const programs = [
  {
    number: "1.",
    name: "Shiksharth",
    image: shiksharth,
    bgColor: "#FF5255",
    description:
      "Helping children build strong learning foundations through engaging lessons, personalized attention, and a supportive environment where curiosity thrives.",
  },
  {
    number: "2.",
    name: "Kaushal Utthan",
    image: kaushal,
    bgColor: "#D4F53C",
    description:
      "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
  },
  {
    number: "3.",
    name: "Aahar",
    image: aahar,
    bgColor: "#CC66FF",
    description:
      "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
  },
];

function ProgramsSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "120px",
        gap: "64px",
      }}
    >
      {/* Heading */}
      {/* <div
        style={{
          width: "610px",
          height: "98px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Satisfy', cursive",
            fontSize: "44px",
            fontWeight: 400,
            lineHeight: "120%",
            letterSpacing: "-0.02em",
            color: "#000000",
            margin: 0,
            textAlign: "center",
          }}
        >
          <span style={{ letterSpacing: "-0.03em" }}>Changing Childhoods,</span>{" "}
          One Program
          <br />
          At A Time
        </p>
      </div> */}

      <div
        style={{
          width: "610px",
          height: "98px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "610px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Satisfy', cursive",
              fontSize: "44px",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "-0.03em",
              color: "#000000",
            }}
          >
            Changing Childhoods,
          </span>
          <span
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "125%",
              letterSpacing: "-0.03em",
              color: "#000000",
              marginLeft: "8px",
            }}
          >
            One Program
          </span>
        </div>

        <div
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "40px",
            fontWeight: 400,
            lineHeight: "125%",
            letterSpacing: "-0.03em",
            color: "#000000",
            textAlign: "center",
            marginTop: "-4px",
          }}
        >
          At A Time
        </div>
      </div>
      {/* Programs List */}
      <div
        style={{
          width: "1360px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {programs.map((program, index) => (
          <div
            key={index}
            style={{
              width: "1360px",
              height: "472px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "76px",
              paddingBottom: "76px",
              borderTop: "1px solid #DBDBDB",
              borderBottom: "1px solid #DBDBDB",
              boxSizing: "border-box",
            }}
          >
            {/* Program Name - Left */}
            <div
              style={{
                width: "281px",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "32px",
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  margin: 0,
                }}
              >
                {program.number} {program.name}
              </p>
            </div>

            {/* Center Card - 320×320 */}
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "40px",
                backgroundColor: program.bgColor,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={program.image}
                alt={program.name}
                style={{
                  width: "206.01px",
                  height: "178.04px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Description - Right */}
            <div
              style={{
                width: "462px",
                height: "218px",
                display: "flex",
                flexDirection: "column",
                gap: "60px",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: "-0.03em",
                  color: "#515151",
                  margin: 0,
                }}
              >
                {program.description}
              </p>

              <a
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#000000",
                  textDecoration: "none",
                  borderBottom: "1px solid #000000",
                  paddingBottom: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "fit-content",
                }}
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsSection;

import React from "react";
import notebookBg from "../../assets/images/notebook-bg.png";
import doodleBg from "../../assets/images/doodle-bg.png";

const stats = [
  { value: "30+", caption: "Govt. school admits · 2023" },
  { value: "130+", caption: "Govt. school admits · 2023" },
  { value: "05+", caption: "Govt. school admits · 2023" },
  { value: "250+", caption: "Govt. school admits · 2023" },
];

function StatsSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F7C334",
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "40px",
        paddingRight: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background doodle */}
      {notebookBg && (
        <img
          src={notebookBg}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "auto",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* Heading */}
      <div
        style={{
          width: "484px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Satisfy', cursive",
            fontSize: "44px",
            fontWeight: 400,
            lineHeight: "125%",
            letterSpacing: "-0.02em",
            color: "#000000",
            margin: 0,
            textAlign: "center",
            width: "100%",
          }}
        >
          <span style={{ fontFamily: "'Satisfy', cursive" }}>Numbers</span> That
          Became Lives
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          width: "1360px",
          height: "718px",
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {/* Left Card - Large */}
        <div
          style={{
            width: "631px",
            height: "718px",
            borderRadius: "8px",
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
            backgroundColor: "#FFFFFF",
          }}
        >
          <img
            src={doodleBg}
            alt="Notebook background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          {/* Stats overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "77px",
                left: "36px",
                fontFamily: "'Sora', sans-serif",
                fontSize: "112px",
                fontWeight: 400,
                lineHeight: "128px",
                letterSpacing: "-0.02em",
                color: "#000000",
                margin: 0,
              }}
            >
              750+
            </p>
            <p
              style={{
                position: "absolute",
                top: "202px",
                left: "36px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "26px",
                letterSpacing: "-0.01em",
                color: "#000000",
                margin: 0,
              }}
            >
              Govt. school admits · 2023
            </p>
          </div>
        </div>

        {/* Right Grid */}
        <div
          style={{
            width: "709px",
            height: "718px",
            display: "grid",
            gridTemplateRows: "351px 351px",
            gridTemplateColumns: "346.5px 346.5px",
            rowGap: "16px",
            columnGap: "16px",
            flexShrink: 0,
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                width: "346.5px",
                height: "351px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#FDFDFD",
              }}
            >
              <img
                src={doodleBg}
                alt="Notebook background"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    top: "61px",
                    left: "20px",
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "64px",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.02em",
                    color: "#000000",
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "125px",
                    left: "21px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "26px",
                    letterSpacing: "-0.01em",
                    color: "#000000",
                    margin: 0,
                  }}
                >
                  {stat.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

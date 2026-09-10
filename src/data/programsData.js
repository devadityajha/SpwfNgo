// // src/data/programsData.js

// import iconShiksharth from "../assets/images/shiksharth.png";
// import iconKaushal from "../assets/images/kaushal.png";
// import iconAahar from "../assets/images/aahar.png";
// import imgShiksharth from "../assets/images/imgShiksharth.png";
// import imgKaushal from "../assets/images/imgKaushal.png";
// import imgAahar from "../assets/images/imgAahar.png";

// export const programs = [
//   {
//     slug: "shiksharth",
//     number: "01",
//     title: "Shiksharth",
//     icon: iconShiksharth,
//     iconBg: "#EF5B54",
//     image: imgShiksharth,
//     bullets: [
//       "500+ children empowered",
//       "Personalized learning support",
//       "Safe and engaging classrooms",
//       "Building confidence through education",
//     ],
//     description:
//       "Helping children build strong learning foundations through engaging lessons, personalized attention, and a supportive environment where curiosity thrives.",
//   },
//   {
//     slug: "kaushal-utthan",
//     number: "02",
//     title: "Kaushal Utthan",
//     icon: iconKaushal,
//     iconBg: "#E4FF4C",
//     image: imgKaushal,
//     bullets: [
//       "500+ children empowered",
//       "Personalized learning support",
//       "Safe and engaging classrooms",
//       "Building confidence through education",
//     ],
//     description:
//       "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
//   },
//   {
//     slug: "aahar",
//     number: "03",
//     title: "Aahar",
//     icon: iconAahar,
//     iconBg: "#A9D3F5",
//     image: imgAahar,
//     bullets: [
//       "500+ children empowered",
//       "Personalized learning support",
//       "Safe and engaging classrooms",
//       "Building confidence through education",
//     ],
//     description:
//       "Nutritious meals and consistent care that keep children healthy, focused, and ready to learn every single day they walk into the classroom.",
//   },
// ];

// export const getProgramBySlug = (slug) =>
//   programs.find((program) => program.slug === slug);

// src/data/programsData.js
import iconShiksharth from "../assets/images/shiksharth.png";
import iconKaushal from "../assets/images/kaushal.png";
import iconAahar from "../assets/images/aahar.png";
import imgShiksharth from "../assets/images/imgShiksharth.png";
import imgKaushal from "../assets/images/imgKaushal.png";
import imgAahar from "../assets/images/imgAahar.png";
import shiksharthDetail1 from "../assets/images/imgShiksharth.png";
import shiksharthDetail2 from "../assets/images/imgShiksharth.png";
import shiksharthDetail3 from "../assets/images/imgShiksharth.png";
export const programs = [
  {
    slug: "shiksharth",
    number: "01",
    title: "Shiksharth",
    icon: iconShiksharth,
    iconBg: "#EF5B54",
    image: imgShiksharth,
    bullets: [
      "500+ children empowered",
      "Personalized learning support",
      "Safe and engaging classrooms",
      "Building confidence through education",
    ],
    description:
      "Helping children build strong learning foundations through engaging lessons, personalized attention, and a supportive environment where curiosity thrives.",
    detail: {
      sections: [
        {
          id: "what-is",
          navLabel: "What is Shiksharth",
          heading: null,
          imageBefore: shiksharthDetail1,
          paragraphs: [
            "Shiksharth is SPWF's flagship education initiative focused on ensuring that every child, regardless of their socio-economic background, has access to quality education and opportunities for holistic development. The program was created with the belief that education is one of the most powerful tools for breaking the cycle of poverty and creating lasting social change.",
            "Through Shiksharth, we provide children from underserved communities with academic support, mentorship, and a safe learning environment where they can grow with confidence. Beyond classroom learning, the program encourages creativity, critical thinking, and personal development, enabling children to realize their full potential and build brighter futures.",
          ],
        },
        {
          id: "objective",
          navLabel: "Objective",
          heading: "Objective",
          paragraphs: [
            "The primary objective of Shiksharth is to bridge educational gaps faced by underprivileged children and ensure that no child is deprived of learning opportunities due to social or economic barriers. We aim to strengthen foundational literacy and numeracy skills while fostering curiosity, confidence, and a lifelong love for learning.",
            "The program also seeks to support children's overall development by nurturing essential life skills such as communication, problem-solving, teamwork, and self-expression. By empowering children with both knowledge and values, Shiksharth prepares them to become confident, responsible, and independent individuals.",
          ],
          imageAfter: shiksharthDetail2,
        },
        {
          id: "how-it-works",
          navLabel: "How it Works",
          heading: "How it Works",
          paragraphs: [
            "Shiksharth operates through structured learning sessions conducted by dedicated educators and volunteers. Children participate in regular classes designed to enhance academic understanding, improve foundational skills, and support school education. The curriculum is tailored to address the individual learning needs of children, ensuring personalized attention and inclusive learning experiences.",
            "In addition to academics, the program incorporates creative activities, interactive workshops, mentorship sessions, and co-curricular engagements that promote holistic development. Continuous assessment and community involvement help us track progress, provide necessary support, and create a nurturing ecosystem for every child.",
          ],
        },
        {
          id: "the-impact",
          navLabel: "The Impact",
          heading: "The Impact",
          paragraphs: [
            "Over the years, Shiksharth has positively impacted the lives of hundreds of children by improving educational outcomes, increasing school retention, and boosting self-confidence. Many children who once lacked access to quality learning resources are now actively pursuing their education with renewed enthusiasm and aspiration.",
            "Beyond academics, the program has helped children develop essential life skills, discover their talents, and build stronger self-belief. Shiksharth has also strengthened community awareness around the importance of education, encouraging families to actively support their children's learning journey and contribute towards a more equitable future.",
          ],
          imageAfter: shiksharthDetail3,
        },
      ],
    },
  },
  {
    slug: "kaushal-utthan",
    number: "02",
    title: "Kaushal Utthan",
    icon: iconKaushal,
    iconBg: "#E4FF4C",
    image: imgKaushal,
    bullets: [
      "500+ children empowered",
      "Personalized learning support",
      "Safe and engaging classrooms",
      "Building confidence through education",
    ],
    description:
      "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
    detail: {
      sections: [
        {
          id: "what-is",
          navLabel: "What is Kaushal Utthan",
          heading: null,
          imageBefore: imgKaushal,
          paragraphs: [
            "Kaushal Utthan is SPWF's flagship education initiative focused on ensuring that every child, regardless of their socio-economic background, has access to quality education and opportunities for holistic development. The program was created with the belief that education is one of the most powerful tools for breaking the cycle of poverty and creating lasting social change.",
            "Through Shiksharth, we provide children from underserved communities with academic support, mentorship, and a safe learning environment where they can grow with confidence. Beyond classroom learning, the program encourages creativity, critical thinking, and personal development, enabling children to realize their full potential and build brighter futures.",
          ],
        },
        {
          id: "objective",
          navLabel: "Objective",
          heading: "Objective",
          paragraphs: [
            "The primary objective of Shiksharth is to bridge educational gaps faced by underprivileged children and ensure that no child is deprived of learning opportunities due to social or economic barriers. We aim to strengthen foundational literacy and numeracy skills while fostering curiosity, confidence, and a lifelong love for learning.",
            "The program also seeks to support children's overall development by nurturing essential life skills such as communication, problem-solving, teamwork, and self-expression. By empowering children with both knowledge and values, Shiksharth prepares them to become confident, responsible, and independent individuals.",
          ],
          imageAfter: imgKaushal,
        },
        {
          id: "how-it-works",
          navLabel: "How it Works",
          heading: "How it Works",
          paragraphs: [
            "Shiksharth operates through structured learning sessions conducted by dedicated educators and volunteers. Children participate in regular classes designed to enhance academic understanding, improve foundational skills, and support school education. The curriculum is tailored to address the individual learning needs of children, ensuring personalized attention and inclusive learning experiences.",
            "In addition to academics, the program incorporates creative activities, interactive workshops, mentorship sessions, and co-curricular engagements that promote holistic development. Continuous assessment and community involvement help us track progress, provide necessary support, and create a nurturing ecosystem for every child.",
          ],
        },
        {
          id: "the-impact",
          navLabel: "The Impact",
          heading: "The Impact",
          paragraphs: [
            "Over the years, Shiksharth has positively impacted the lives of hundreds of children by improving educational outcomes, increasing school retention, and boosting self-confidence. Many children who once lacked access to quality learning resources are now actively pursuing their education with renewed enthusiasm and aspiration.",
            "Beyond academics, the program has helped children develop essential life skills, discover their talents, and build stronger self-belief. Shiksharth has also strengthened community awareness around the importance of education, encouraging families to actively support their children's learning journey and contribute towards a more equitable future.",
          ],
          imageAfter: imgKaushal,
        },
      ],
    },
  },
  {
    slug: "aahar",
    number: "03",
    title: "Aahar",
    icon: iconAahar,
    iconBg: "#A9D3F5",
    image: imgAahar,
    bullets: [
      "500+ children empowered",
      "Personalized learning support",
      "Safe and engaging classrooms",
      "Building confidence through education",
    ],
    description:
      "Nutritious meals and consistent care that keep children healthy, focused, and ready to learn every single day they walk into the classroom.",
    detail: {
      sections: [
        {
          id: "what-is",
          navLabel: "What is Aahar",
          heading: null,
          imageBefore: imgAahar,
          paragraphs: [
            "Aahar is SPWF's flagship education initiative focused on ensuring that every child, regardless of their socio-economic background, has access to quality education and opportunities for holistic development. The program was created with the belief that education is one of the most powerful tools for breaking the cycle of poverty and creating lasting social change.",
            "Through Shiksharth, we provide children from underserved communities with academic support, mentorship, and a safe learning environment where they can grow with confidence. Beyond classroom learning, the program encourages creativity, critical thinking, and personal development, enabling children to realize their full potential and build brighter futures.",
          ],
        },
        {
          id: "objective",
          navLabel: "Objective",
          heading: "Objective",
          paragraphs: [
            "The primary objective of Shiksharth is to bridge educational gaps faced by underprivileged children and ensure that no child is deprived of learning opportunities due to social or economic barriers. We aim to strengthen foundational literacy and numeracy skills while fostering curiosity, confidence, and a lifelong love for learning.",
            "The program also seeks to support children's overall development by nurturing essential life skills such as communication, problem-solving, teamwork, and self-expression. By empowering children with both knowledge and values, Shiksharth prepares them to become confident, responsible, and independent individuals.",
          ],
          imageAfter: imgAahar,
        },
        {
          id: "how-it-works",
          navLabel: "How it Works",
          heading: "How it Works",
          paragraphs: [
            "Shiksharth operates through structured learning sessions conducted by dedicated educators and volunteers. Children participate in regular classes designed to enhance academic understanding, improve foundational skills, and support school education. The curriculum is tailored to address the individual learning needs of children, ensuring personalized attention and inclusive learning experiences.",

            "In addition to academics, the program incorporates creative activities, interactive workshops, mentorship sessions, and co-curricular engagements that promote holistic development. Continuous assessment and community involvement help us track progress, provide necessary support, and create a nurturing ecosystem for every child. ",
          ],
        },
        {
          id: "the-impact",
          navLabel: "The Impact",
          heading: "The Impact",
          paragraphs: [
            "Over the years, Shiksharth has positively impacted the lives of hundreds of children by improving educational outcomes, increasing school retention, and boosting self-confidence. Many children who once lacked access to quality learning resources are now actively pursuing their education with renewed enthusiasm and aspiration.",
            "Beyond academics, the program has helped children develop essential life skills, discover their talents, and build stronger self-belief. Shiksharth has also strengthened community awareness around the importance of education, encouraging families to actively support their children's learning journey and contribute towards a more equitable future.",
          ],
          imageAfter: imgAahar,
        },
      ],
    },
  },
];

export const getProgramBySlug = (slug) =>
  programs.find((program) => program.slug === slug);

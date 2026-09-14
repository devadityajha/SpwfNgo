/*
 * src/data/blogPosts.js
 * Index page aur detail page dono yahi se content lete hain.
 * Image add karni ho to upar import karke `image` field me laga do.
 */

import ethan from "../assets/images/ethan.png";
import cloudImage from "../assets/images/cloudImage.png";

export const blogPosts = [
  {
    slug: "every-child-deserves-the-chance-to-learn",
    title: "Every Child Deserves The Chance To Learn",
    excerpt: "How Education Creates Brighter Futures.",
    image: ethan,
    intro:
      "Education is more than reading books or passing exams — it is the foundation of confidence, opportunity, and a brighter future. Yet for millions of children, access to quality education remains a privilege rather than a basic right. Poverty, limited resources, and social challenges often force children to leave school before they can discover their true potential.",
    sections: [
      {
        heading: "Education Changes Everything",
        body: "At Shakuntala Poddar Welfare Foundation, we believe every child deserves an equal opportunity to learn, dream, and succeed. Through our education initiatives we work to remove the barriers that keep children out of classrooms — providing academic support, learning materials, mentorship, and safe spaces to grow, so that children build the skills and the confidence they need to shape their own futures.",
      },
      {
        heading: "Breaking Barriers To Learning",
        body: "Education is not just about classrooms — it is about unlocking possibilities. A child who learns today becomes an adult capable of making informed decisions, supporting their family, and contributing to their community. Every lesson learned is a step toward breaking the cycle of poverty and creating lasting change, not only for one child but for the generation that follows.",
      },
      {
        heading: "Beyond The Classroom",
        body: "Our work does not stop at academics. Nutrition support keeps children well enough to attend, skill development programmes prepare older students for work, and regular sessions with counsellors help children process what they carry with them. Learning holds only when the rest of a child's life is steady enough to support it.",
      },
    ],
  },
  {
    slug: "a-classroom-without-walls",
    title: "A Classroom Without Walls",
    excerpt: "Community Spaces That Keep Children Learning.",
    image: cloudImage,
    intro:
      "Not every child who wants to study has a school within reach. In the neighbourhoods we work in, a community hall, a shaded courtyard or a borrowed rooftop often becomes the classroom — and it works, because what children need most is a steady adult and a steady hour.",
    sections: [
      {
        heading: "Learning Where Children Already Are",
        body: "Setting up close to home removes the two biggest reasons children drop out: distance and cost of travel. Our community centres run in the same lanes where our students live, which means a missed bus or a rainy afternoon no longer costs a child a week of lessons.",
      },
      {
        heading: "Small Groups, Real Attention",
        body: "Each centre keeps groups small enough that a volunteer knows every child by name and knows exactly where each one is stuck. That attention is what turns irregular attendance into steady progress over a term.",
      },
    ],
  },
  {
    slug: "what-one-meal-a-day-changes",
    title: "What One Meal A Day Changes",
    excerpt: "Nutrition Is The First Step To Attendance.",
    image: ethan,
    intro:
      "A hungry child cannot concentrate, and a child who cannot concentrate slowly stops coming. Our nutrition programme exists because attendance and nutrition are the same problem wearing two different faces.",
    sections: [
      {
        heading: "Attendance Follows The Plate",
        body: "In the centres where we began serving a daily meal, attendance rose within the first month and stayed there. Families who had been weighing school against a day of work found the decision easier when the school day also meant a meal.",
      },
      {
        heading: "What We Serve, And Why",
        body: "Meals are planned with local ingredients and local cooks, which keeps the food familiar, the cost low, and the money inside the same neighbourhood the children come from.",
      },
    ],
  },
  {
    slug: "meet-the-volunteers-behind-spwf",
    title: "Meet The Volunteers Behind SPWF",
    excerpt: "The People Who Show Up Every Week.",
    image: cloudImage,
    intro:
      "Most of our teaching hours are given by people with full-time jobs of their own — students, engineers, homemakers, retired teachers. What they share is not free time but a fixed weekly slot they refuse to give up.",
    sections: [
      {
        heading: "Consistency Over Intensity",
        body: "Two steady hours a week from the same person does more for a child than a full day from someone new. We build our schedules around that, which is why our volunteer commitment is measured in months rather than hours.",
      },
      {
        heading: "How Onboarding Works",
        body: "Every volunteer is paired with a coordinator, sits in on sessions before leading one, and has someone to call when a class does not go the way it was planned. Nobody is handed a room and left to figure it out.",
      },
    ],
  },
  {
    slug: "skills-that-open-doors",
    title: "Skills That Open Doors",
    excerpt: "Why Vocational Training Matters After School.",
    image: ethan,
    intro:
      "Finishing school is a milestone, not a destination. For older students, the gap between a certificate and a first income is where most of the falling away happens — and that gap is what our skills programme is built to close.",
    sections: [
      {
        heading: "Training That Matches Local Demand",
        body: "Courses are chosen after talking to employers in the same city, not from a national syllabus. Tailoring, computer basics, retail and repair work are taught because those are the roles hiring nearby this year.",
      },
      {
        heading: "Placement Is Part Of The Course",
        body: "A course that ends at the final class has done only half the job. We keep in touch with each student through their first placement and their first three months in it, because that is when most people quietly drop out of work.",
      },
    ],
  },
  {
    slug: "where-your-donation-actually-goes",
    title: "Where Your Donation Actually Goes",
    excerpt: "A Transparent Look At Every Rupee.",
    image: cloudImage,
    intro:
      "Donors deserve to know what their money did, not just that it was received. This is a plain breakdown of how contributions are used across our programmes, and what we choose not to spend on.",
    sections: [
      {
        heading: "The Split",
        body: "The large majority of every contribution goes directly to programme costs — teaching staff, learning materials, meals and centre rent. The rest covers the coordination without which none of it would run reliably.",
      },
      {
        heading: "What You Receive Back",
        body: "Every donation is receipted and eligible for tax benefit under 80G. Quarterly, we send a short note with what changed in the centres — milestones, classroom moments, and where your support landed.",
      },
    ],
  },
];

export const getPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);

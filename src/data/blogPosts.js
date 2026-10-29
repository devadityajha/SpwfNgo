/*
 * src/data/blogPosts.js
 * Index page aur detail page dono yahi se content lete hain.
 * Image add karni ho to upar import karke `image` field me laga do.
 */

import ethan from "../assets/images/ethan.png";
import cloudImage from "../assets/images/cloudImage.png";

import img1 from "../assets/images/story-top.png";
import img2 from "../assets/images/story-middle.jpg";
import img3 from "../assets/images/story-bottom.png";

export const blogPosts = [
  {
    slug: "priyanshi-chauhan-story",
    title: "Priyanshi Found Her Voice In A Borrowed Classroom",
    excerpt: "From Hesitant Learner To Confident Student.",
    image: img1,
    author: "Priyanshi Chauhan",
    quote:
      '"Before Joining SPWF, I Never Imagined How Much My Life Could Change. Through Education, Encouragement, And Constant Support, I Found The Confidence To Learn, Grow, And Work Towards A Brighter Future."',
    intro:
      "When Priyanshi first walked into one of our community centres, she had already missed close to a year of school. Her family had moved twice in eighteen months, and each move meant a new neighbourhood, a new set of faces, and one more reason to stop asking questions in class. What changed was not a scholarship or a new building — it was a fixed hour, four days a week, with the same two volunteers who knew exactly where she had stopped understanding.",
    sections: [
      {
        heading: "Starting From Where She Was",
        body: "Our first few weeks with Priyanshi were spent not on the syllabus but on the gaps underneath it. Fractions had never settled, and reading aloud made her freeze. Rather than pushing her forward to keep pace with her grade, the centre coordinator moved her back two levels and rebuilt from there. It is slower work, and it is the only kind that holds.",
      },
      {
        heading: "The Turning Point",
        body: "By the second term, Priyanshi was answering without being called on. By the third, she was staying back after her own session to help the younger group with their reading. Her teachers at school noticed the change before her family did — attendance first, then participation, then the marks that followed both.",
      },
      {
        heading: "What Comes Next",
        body: "Priyanshi now wants to finish school and train as a teacher. We are supporting her through her board years with academic help, exam preparation, and the counselling sessions that keep the pressure of those years manageable. Her plan is her own; our job is to make sure nothing outside the classroom takes it away from her.",
      },
    ],
  },
  {
    slug: "ankita-yadav-story",
    title: "Ankita Stopped Sitting At The Back",
    excerpt: "How Being Asked Changed Everything.",
    image: img2,
    imagePosition: "center 12%",
    author: "Ankita Yadav",
    quote:
      '"I Used To Sit Quietly At The Back Of Every Class. The Mentors Here Kept Asking Me Questions Until I Started Answering, And Now I Am The One Helping The Younger Children With Their Lessons."',
    intro:
      "Ankita was never a child anyone worried about. She came to school, she sat quietly, she handed in what was asked of her. That is precisely why she went unnoticed for so long — in a classroom of fifty, the child who causes no trouble is the easiest one to lose.",
    sections: [
      {
        heading: "The Quiet Ones Slip Through",
        body: "Our volunteers are trained to watch for the children who never raise a hand, not just the ones who disrupt. In small groups there is nowhere to hide, and within a month it was clear that Ankita understood far more than she ever volunteered. What she lacked was not ability but the belief that her answer was worth saying out loud.",
      },
      {
        heading: "Asked Until She Answered",
        body: "The change came from something ordinary: being asked directly, by name, every single session, and being given the time to finish the sentence. It took eight weeks before she answered without hesitating. It took a term before she started asking questions of her own.",
      },
      {
        heading: "Now She Does The Asking",
        body: "Ankita leads the reading circle for the youngest group at her centre twice a week. She is better at it than most adults, because she still remembers exactly what it feels like to be the one who knows the answer and says nothing.",
      },
    ],
  },
  {
    slug: "aaradhya-jha-story",
    title: "Aaradhya's Family Was Not Sure School Would Lead Anywhere",
    excerpt: "Two Years Later, She Has A Plan.",
    image: img3,
    author: "Aaradhya Jha",
    quote:
      '"My Parents Were Not Sure School Would Lead Anywhere For Me. Two Years Later I Have A Report Card I Am Proud Of, And A Plan For What I Want To Become."',
    intro:
      "The hardest conversations we have are rarely with children. Aaradhya wanted to study. Her parents, weighing school fees against a daughter who could be earning, were not convinced it would lead anywhere — and they were not being unreasonable. Nobody in the family had finished school, so there was no example of what finishing it actually bought.",
    sections: [
      {
        heading: "Convincing The Household, Not The Child",
        body: "Our coordinators visited Aaradhya's home four times before she ever attended a session. Those visits were not about persuasion but about information — what the programme costs the family, what it would require of her, and what students before her had gone on to do. Families make better decisions with better information.",
      },
      {
        heading: "Progress They Could See",
        body: "What settled it was a report card. Her parents could not read every subject name, but they could see the improvement from one term to the next, and they could see their daughter explaining the paper to her younger brother at the kitchen table.",
      },
      {
        heading: "A Plan Of Her Own",
        body: "Aaradhya has decided she wants to work in healthcare. She has four years of school ahead of her and a household that now expects her to finish them. That shift — from permission to expectation — is the one that matters most, and it is the one that lasts after we are gone.",
      },
    ],
  },
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

import {
  Box,
  Toolbar,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavBar } from "../../components/landingComponents/NavBar";
import { Footer } from "../../components/landingComponents/Footer";
import { DoubleFAQCard } from "../../components/landingComponents/DoubleFAQCard";

const qs = [
  {
    q1: "What is Bridgy, and what problem does it solve?",
    q2: "Bridgy is a specialized ecosystem that connects high school students eager to make a difference with charities in need of enthusiastic volunteers and educational institutions seeking streamlined service programs. The platform addresses three major challenges:",
    q3s: [
      {
        title: "Access:",
        text: "Finding suitable service opportunities quickly.",
      },
      {
        title: "Management:",
        text: "Efficiently recruiting high school volunteers for charities.",
      },
      {
        title: "Advising:",
        text: "Enabling school counselors to monitor and manage students' service efforts effortlessly.",
      },
    ],
  },
  {
    q1: "How does Bridgy benefit high school students?",
    q2: "Bridgy allows high school students to:",
    q3s: [
      {
        title: "•",
        text: "Find meaningful service opportunities aligned with their interests and skills.",
      },
      {
        title: "•",
        text: "Track their accomplishments and get real-time impact reports.",
      },
      {
        title: "•",
        text: "Engage with projects that resonate with their aspirations.",
      },
    ],
  },
  {
    q1: "How does Bridgy assist educational institutions and counselors?",
    q2: "Educational institutions and counselors benefit from:",
    q3s: [
      {
        title: "•",
        text: "Seamless integration of service learning into the curriculum, reducing administrative workload.",
      },
      {
        title: "•",
        text: "Efficient student tracking and management through real-time reports.",
      },
      {
        title: "•",
        text: "More time to guide students rather than handling paperwork.",
      },
    ],
  },
  {
    q1: "What advantages does Bridgy offer charities and non-profits?",
    q2: "Charities and non-profits using Bridgy enjoy:",
    q3s: [
      {
        title: "•",
        text: "Simplified volunteer recruitment and management.",
      },
      {
        title: "•",
        text: "Access to dedicated volunteers who share their passion for impact.",
      },
      {
        title: "•",
        text: "Enhanced visibility for their cause and projects.",
      },
    ],
  },
  {
    q1: "How does Bridgy streamline service learning for students and counselors?",
    q2: "Bridgy provides a centralized platform for:",
    q3s: [
      {
        title: "•",
        text: "Students to explore and apply for suitable opportunities easily.",
      },
      {
        title: "•",
        text: "Counselors to monitor progress and impact.",
      },
      {
        title: "•",
        text: "Charities to recruit suitable volunteers efficiently.",
      },
    ],
  },
  {
    q1: "Who are the founders of Bridgy?",
    q2: "The founders are college students at Oxford University and the University of Chicago who experienced firsthand the challenges of managing community service during high school. They created Bridgy to provide a practical solution for students, counselors, and charities.",
    q3s: [],
  },
  {
    q1: "How can I get started with Bridgy?",
    q2: "You can get started by visiting Bridgy's website and following these steps:",
    q3s: [
      {
        title: "•",
        text: "Explore the platform to understand its offerings.",
      },
      {
        title: "•",
        text: "Create an account based on your role (student, charity, or counselor).",
      },
      {
        title: "•",
        text: "Start connecting passion with purpose!",
      },
    ],
  },
  {
    q1: "What support does Bridgy provide to its users?",
    q2: "Bridgy offers comprehensive support, including:",
    q3s: [
      {
        title: "•",
        text: "An FAQ section for immediate answers.",
      },
      {
        title: "•",
        text: "Direct contact via their website for personalized assistance.",
      },
      {
        title: "•",
        text: "Real-time reports and user-friendly dashboards for seamless platform navigation.",
      },
    ],
  },
  {
    q1: "How can I track the progress of my objectives in Bridgy?",
    q2: "You can track your progress using the Objective Progress and Class Progress sections on the dashboard. These indicators show the number of completed objectives out of the total assigned.",
    q3s: [],
  },
  {
    q1: "What information is available for each student in the dashboard?",
    q2: "Each student is listed with the following details:",
    q3s: [
      {
        title: "•",
        text: "Name",
      },
      {
        title: "•",
        text: "Email",
      },
      {
        title: "•",
        text: "Phone Number",
      },
      {
        title: "•",
        text: "Objective Progress (%)",
      },
      {
        title: "•",
        text: "Profile (click to view more details)",
      },
    ],
  },
  {
    q1: "Can I set specific objectives for my students on Bridgy?",
    q2: "Yes, you can set objectives by specifying:",
    q3s: [
      {
        title: "•",
        text: "Objective Type: For instance, 'Events' or 'Hours'.",
      },
      {
        title: "•",
        text: "Objective Quantity: The number of objectives required.",
      },
    ],
  },
  {
    q1: "How does Bridgy measure the economic impact of students' volunteer work?",
    q2: "The Economic Impact section on the dashboard displays the total economic value contributed by all students' volunteer work, measured in dollars. We base the number on a report by consultancy Point of Light estimating the value of volunteer work in the U.S at $31.80 per hour.",
    q3s: [],
  },
  {
    q1: "How do I add new students to Bridgy?",
    q2: "To add new students, click on the Add Student option on the left sidebar and follow the steps to input their details.",
    q3s: [],
  },
  {
    q1: "How can I monitor and manage student notifications?",
    q2: "Notifications are available under the Notifications tab, where you can view important updates related to student activities and service progress.",
    q3s: [],
  },
  {
    q1: "Where can I find more information or get support about using Bridgy?",
    q2: "Our website has detailed answers to a lot of questions and you can always:",
    q3s: [
      {
        title: "•",
        text: "Visit the FAQ section on the Bridgy website.",
      },
      {
        title: "•",
        text: "Contact them directly via the Contact Us section on the website.",
      },
    ],
  },
  {
    q1: "What is the purpose of the Bridgy dashboard, and what information does it provide?",
    q2: "The Bridgy dashboard provides a comprehensive overview of your progress, objectives, and events:",
    q3s: [
      {
        title: "Class Progress:",
        text: "Tracks the total number of completed objectives out of the assigned ones.",
      },
      {
        title: "Objective Progress:",
        text: "Displays completion status of objectives.",
      },
      {
        title: "Completed Hours:",
        text: "Shows the number of service hours completed.",
      },
      {
        title: "Economic Impact:",
        text: "Highlights the total economic contribution of volunteer work.",
      },
    ],
  },
  {
    q1: "How can I add personal events to Bridgy?",
    q2: "Click on Add Personal Event in the left sidebar and fill in the event details, including:",
    q3s: [
      {
        title: "•",
        text: "Mission Title",
      },
      {
        title: "•",
        text: "Supervisor Contact",
      },
      {
        title: "•",
        text: "Description",
      },
      {
        title: "•",
        text: "Feedback",
      },
      {
        title: "•",
        text: "Category, Date and Time",
      },
      {
        title: "•",
        text: "Location details (Country, City, Address)",
      },
      {
        title: "•",
        text: "Whether the event is remote or not",
      },
    ],
  },
  {
    q1: "How can I post new volunteer opportunities on Bridgy?",
    q2: "Click on Post Opportunities in the left sidebar and fill in the event details, including:",
    q3s: [
      {
        title: "•",
        text: "Mission Title",
      },
      {
        title: "•",
        text: "Supervisor Contact",
      },
      {
        title: "•",
        text: "Description",
      },
      {
        title: "•",
        text: "Category",
      },
      {
        title: "•",
        text: "Video URL (if any)",
      },
      {
        title: "•",
        text: "Required Hours and Number of Students",
      },
      {
        title: "•",
        text: "Date and Time",
      },
      {
        title: "•",
        text: "Location details",
      },
      {
        title: "•",
        text: "Cover Image",
      },
    ],
  },
  {
    q1: "How can I manage accepted students and participant requests for an event?",
    q2: "Within an event's details:",
    q3s: [
      {
        title: "Accepted Students:",
        text: "Shows usernames, emails, phone numbers, and profiles of accepted students.",
      },
      {
        title: "Student Requests:",
        text: "Displays usernames, emails, phone numbers, and profiles of students who have requested to participate. You can accept or reject their participation.",
      },
    ],
  },
  {
    q1: "Can I customize grade levels for students in Bridgy?",
    q2: "Yes, you can specify the grade level using the dropdown menu next to the Grade field on the dashboard.",
    q3s: [],
  },
];

export const FAQPage = () => {
  return (
    <Box sx={{ width: 1, bgcolor: "white.main" }}>
      <NavBar />
      <Toolbar />
      <Box sx={{ width: 1, bgcolor: "white.main" }}>
        <Box sx={{ m: 10 }}>
          {" "}
          <Typography textAlign="center" variant="h3" fontWeight="bold">
            Frequently Asked Questions
          </Typography>
          <Typography textAlign="center" variant="h4" sx={{ mt: 2, mb: 20 }}>
            Find more essential information about how Bridgy operates
          </Typography>
          <Container
            maxWidth="lg"
            sx={{ mt: 20, boxShadow: 10 }}
            disableGutters
          >
            {qs.map((q) => {
              return <DoubleFAQCard q1={q.q1} q2={q.q2} q3s={q.q3s} />;
            })}
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

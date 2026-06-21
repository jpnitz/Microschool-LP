export type Student = {
  name: string;
  grade: string;
  zip: string;
  learningStyle: string;
};

export type Standard = {
  code: string;
  subject: string;
  group: string;
  title: string;
  source: "Common Core" | "State" | "Custom";
  sequence: number;
};

export type SubjectState = {
  group: string;
  currentStandard: string;
  advancement: "Weekly assessment" | "Random" | "Chronological";
  baselineSource: "Manual" | "Diagnostic" | "Imported score" | "Not required";
};

export type Budget = {
  group: string;
  hours: number;
  offset: number;
};

export type Lesson = {
  subject: string;
  standard: string;
  title: string;
  minutes: number;
  mode: "Home" | "Field trip" | "Outdoor";
  value: string;
};

export type CalendarEvent = {
  day: string;
  time: string;
  title: string;
  subject: string;
  source: "engine" | "parent";
  mode: "home" | "trip" | "outdoor" | "parent";
  minutes: number;
};

export const educator = {
  name: "Jordan Lee",
  role: "Home educator",
  email: "jordan@example.com"
};

export const students: Student[] = [
  {
    name: "Maya",
    grade: "4",
    zip: "37206",
    learningStyle: "Hands-on maker who likes outdoor examples"
  },
  {
    name: "Leo",
    grade: "2",
    zip: "37206",
    learningStyle: "Emerging reader, benefits from visual models"
  }
];

export const standards: Standard[] = [
  {
    code: "4.NF.B.3",
    subject: "Math",
    group: "Math",
    title: "Understand fraction addition and subtraction as joining and separating parts.",
    source: "Common Core",
    sequence: 12
  },
  {
    code: "4.RI.3",
    subject: "ELA",
    group: "ELA",
    title: "Explain events, procedures, ideas, or concepts in a historical or scientific text.",
    source: "Common Core",
    sequence: 7
  },
  {
    code: "TN.4.LS2.1",
    subject: "Science",
    group: "Science",
    title: "Analyze how organisms interact with their environment.",
    source: "State",
    sequence: 3
  },
  {
    code: "CUSTOM.GARDEN.04",
    subject: "Gardening",
    group: "Gardening",
    title: "Plan a seasonal container garden using light, water, and spacing constraints.",
    source: "Custom",
    sequence: 4
  },
  {
    code: "PE.4.MS.2",
    subject: "Physical Education",
    group: "PE",
    title: "Apply movement strategies during small-group outdoor games.",
    source: "State",
    sequence: 5
  }
];

export const subjectStates: SubjectState[] = [
  {
    group: "Math",
    currentStandard: "4.NF.B.3",
    advancement: "Weekly assessment",
    baselineSource: "Diagnostic"
  },
  {
    group: "ELA",
    currentStandard: "4.RI.3",
    advancement: "Weekly assessment",
    baselineSource: "Manual"
  },
  {
    group: "Science",
    currentStandard: "TN.4.LS2.1",
    advancement: "Random",
    baselineSource: "Not required"
  },
  {
    group: "Gardening",
    currentStandard: "CUSTOM.GARDEN.04",
    advancement: "Chronological",
    baselineSource: "Not required"
  },
  {
    group: "PE",
    currentStandard: "PE.4.MS.2",
    advancement: "Random",
    baselineSource: "Not required"
  }
];

export const weeklyBudgets: Budget[] = [
  { group: "Math", hours: 4, offset: 0 },
  { group: "ELA", hours: 4, offset: 0.5 },
  { group: "Science", hours: 2, offset: 0 },
  { group: "Gardening", hours: 1.5, offset: 0 },
  { group: "PE", hours: 3, offset: 2 }
];

export const generatedLessons: Lesson[] = [
  {
    subject: "Math",
    standard: "4.NF.B.3",
    title: "Fraction picnic: add snack portions with paper models",
    minutes: 55,
    mode: "Home",
    value: "Uses pantry items and printable fraction strips."
  },
  {
    subject: "ELA",
    standard: "4.RI.3",
    title: "Read and map a how-to article about seed starting",
    minutes: 50,
    mode: "Home",
    value: "Connects informational reading to Maya's gardening interest."
  },
  {
    subject: "Science",
    standard: "TN.4.LS2.1",
    title: "Backyard ecosystem survey",
    minutes: 60,
    mode: "Outdoor",
    value: "Outdoor work near home; weather-aware scheduling."
  },
  {
    subject: "Gardening",
    standard: "CUSTOM.GARDEN.04",
    title: "Design a container garden with a real budget",
    minutes: 45,
    mode: "Home",
    value: "Custom curriculum advances chronologically."
  },
  {
    subject: "Science",
    standard: "TN.4.LS2.1",
    title: "Creek observation walk",
    minutes: 60,
    mode: "Field trip",
    value: "Highest-value local candidate within 5 miles; counts as one weekly trip."
  },
  {
    subject: "PE",
    standard: "PE.4.MS.2",
    title: "Neighborhood interval games",
    minutes: 45,
    mode: "Outdoor",
    value: "PE defaults outdoors and does not spend field-trip quota."
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    day: "Monday",
    time: "9:00",
    title: "Fraction picnic",
    subject: "Math",
    source: "engine",
    mode: "home",
    minutes: 55
  },
  {
    day: "Monday",
    time: "10:15",
    title: "Seed-starting article map",
    subject: "ELA",
    source: "engine",
    mode: "home",
    minutes: 50
  },
  {
    day: "Tuesday",
    time: "9:30",
    title: "Backyard ecosystem survey",
    subject: "Science",
    source: "engine",
    mode: "outdoor",
    minutes: 60
  },
  {
    day: "Wednesday",
    time: "13:00",
    title: "Pickup basketball",
    subject: "PE",
    source: "parent",
    mode: "parent",
    minutes: 120
  },
  {
    day: "Thursday",
    time: "10:00",
    title: "Creek observation walk",
    subject: "Science",
    source: "engine",
    mode: "trip",
    minutes: 60
  },
  {
    day: "Friday",
    time: "9:00",
    title: "Container garden design",
    subject: "Gardening",
    source: "engine",
    mode: "home",
    minutes: 45
  }
];

export const activityMatches = [
  {
    activity: "Played 2 hours of pickup basketball",
    matchedStandard: "PE.4.MS.2",
    subject: "PE",
    confidence: "92%",
    assessmentValue: "Practice evidence",
    creditedHours: 2
  },
  {
    activity: "Visited the farmers market and compared produce prices",
    matchedStandard: "4.NF.B.3",
    subject: "Math",
    confidence: "81%",
    assessmentValue: "Extension evidence",
    creditedHours: 0.5
  }
];

export const pageLinks = [
  { href: "/", label: "Overview" },
  { href: "/profile", label: "Profile" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/baseline", label: "Baseline" },
  { href: "/planner", label: "Planner" },
  { href: "/calendar", label: "Calendar" }
];

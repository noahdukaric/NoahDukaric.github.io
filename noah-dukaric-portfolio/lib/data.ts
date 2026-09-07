export const profile = {
  name: "Noah Dukaric",
  callsign: "N-DKRC",
  title: "Geomatics Engineering",
  subtitle: "Aerospace Minor · Motorsport-Driven",
  location: "Calgary, AB",
  coords: "51.0447° N, 114.0719° W",
  email: "Noah.Dukaric@UCalgary.ca",
  phone: "(403) 397-2556",
  linkedin: "https://www.linkedin.com/in/noah-dukaric",
  status: "Available for 2027 co-op / internship",
  summary:
    "Geomatics Engineering student at the University of Calgary's Schulich School of Engineering, minoring in Aerospace. I work where precision measurement meets mechanical design — from GNSS control surveys and total-station traverses to turbocharger flow analysis, with the setup discipline of a racing driver.",
}

export const education = {
  school: "University of Calgary",
  faculty: "Schulich School of Engineering",
  degree: "BSc Engineering — Major in Geomatics Engineering",
  minor: "Minor in Aerospace Engineering",
  span: "Sept 2024 – Expected May 2029",
}

export type Experience = {
  id: string
  role: string
  org: string
  location: string
  span: string
  discipline: "aerospace" | "motorsport" | "geomatics" | "field"
  points: string[]
}

export const experience: Experience[] = [
  {
    id: "tmt-bau",
    role: "Engineering Intern",
    org: "TMT BAU",
    location: "Zagreb, Croatia & International",
    span: "May 2026 – Aug 2026",
    discipline: "geomatics",
    points: [
      "Supported workforce planning for a heavy metal fabrication company producing large-scale ship components, coordinating recruitment logistics across the Philippines, Taiwan, and Vietnam and evaluating candidate qualifications against role requirements.",
      "Ran route analytics for manufactured ship parts and coordinated with a workforce of over 500 people to design parts and route them to manufacturing for production.",
      "Assisted with office design and workflow logistics at company headquarters, collaborating across international teams and time zones to support an on-schedule workforce mobilization strategy.",
    ],
  },
  {
    id: "cowboys",
    role: "Operations Assistant — VIP Lounge",
    org: "Cowboys Music Festival",
    location: "Calgary, AB",
    span: "Jul–Aug 2025, Jul–Aug 2026",
    discipline: "field",
    points: [
      "Supported bartenders and VIP service staff during one of Canada's largest music festivals, ensuring efficient operations in a fast-paced, high-volume environment.",
      "Provided attentive customer service to high-profile guests, contributing to an elevated and professional guest experience.",
    ],
  },
  {
    id: "motorsport",
    role: "Motorsport Driver",
    org: "Sim Racing & Track Days",
    location: "Calgary, AB",
    span: "May 2025 – Jul 2025",
    discipline: "motorsport",
    points: [
      "Competed in sim racing on a regular basis and participated in track days, building a strong understanding of vehicle dynamics and car setup.",
    ],
  },
  {
    id: "tennis",
    role: "Tennis Coach",
    org: "Tennis Alberta",
    location: "Calgary, AB",
    span: "Jun–Sep 2024, May–Aug 2025",
    discipline: "field",
    points: [
      "Coached beginner and intermediate players aged 6 to 16, focusing on skill development, teamwork, and sportsmanship.",
      "Developed personalized lesson plans and drills to improve technical ability and in-game strategy.",
      "Organized and ran tennis camps, improving participation and engagement throughout the summer season.",
    ],
  },
]

export type Project = {
  id: string
  index: string
  title: string
  org: string
  date: string
  discipline: "aerospace" | "motorsport" | "geomatics"
  tag: string
  image?: string
  points: string[]
  metrics: { label: string; value: string }[]
  tools: string[]
}

export const projects: Project[] = [
  {
    id: "turbo",
    index: "P-01",
    title: "Turbocharger Oil Inlet/Outlet Pipe Redesign",
    org: "2014 CLA 250",
    date: "Mar 2026",
    discipline: "aerospace",
    tag: "Mechanical / Flow",
    points: [
      "Designed high-pressure steel oil inlet and outlet piping for the turbocharger in SolidWorks, improving oil flow to the turbo and simplifying installation fit within the engine bay.",
      "Validated pipe geometry and flow performance using ANSYS simulation, checking the design against high-pressure operating conditions before finalizing dimensions.",
    ],
    metrics: [
      { label: "Platform", value: "CLA 250" },
      { label: "CAD", value: "SolidWorks" },
      { label: "Sim", value: "ANSYS" },
    ],
    tools: ["SolidWorks", "ANSYS", "Flow Analysis"],
  },
  {
    id: "cargo-ship",
    index: "P-02",
    title: "Large-Scale Cargo Ship Component Design & Production Routing",
    org: "TMT BAU",
    date: "May 2026 – Aug 2026",
    discipline: "geomatics",
    tag: "Systems / Logistics",
    points: [
      "Performed route analytics for large-scale cargo ship component manufacturing, coordinating with a workforce of over 500 people to move designed parts from engineering to production and gaining direct exposure to supply chain coordination on a large-scale fabrication project.",
    ],
    metrics: [
      { label: "Workforce", value: "500+" },
      { label: "Scope", value: "Ship parts" },
      { label: "Focus", value: "Routing" },
    ],
    tools: ["Route Analytics", "Supply Chain", "Production Planning"],
  },
  {
    id: "field-survey",
    index: "P-03",
    title: "Geomatics Field Survey — Resection, Traverse & Topographic",
    org: "Campus Site",
    date: "Aug 2026",
    discipline: "geomatics",
    tag: "Survey / Control",
    points: [
      "Used Trimble total stations and GNSS rovers to complete a full control and mapping survey, including a resection, a closed-loop traverse, and a topographic survey of a campus site.",
      "Ran the angular resection and station adjustment to establish a control point, then carried out a closed-loop traverse from that point, achieving a linear precision of 1:26,000 against a 1:10,000 specification.",
      "Directed a topographic survey from the established traverse stations, collecting detail and terrain points with the total station and rover to support production of a topographic map.",
    ],
    metrics: [
      { label: "Precision", value: "1:26,000" },
      { label: "Spec", value: "1:10,000" },
      { label: "Method", value: "Closed loop" },
    ],
    tools: ["Trimble Total Station", "GNSS Rover", "Resection", "Traverse"],
  },
]

export const software = [
  "SolidWorks",
  "ANSYS",
  "Python",
  "C++",
  "MATLAB",
  "Fusion 360",
  "ArcGIS",
  "Google Earth Engine",
  "Office 365",
]

export const equipment = ["Total Stations", "GNSS Rovers", "Surveying Equipment"]

export const nav = [
  { label: "Profile", href: "#profile" },
  { label: "Log", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Systems", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

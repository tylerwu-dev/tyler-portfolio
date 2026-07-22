export interface ProjectLinks {
  caseStudy: string
  github?: string
  live?: string
}

export interface ProjectScreenshot {
  title: string
  image: string
  description?: string
}

export interface CaseStudySection {
  overview: string | string[]
  problem?: string
  role: string | string[]
  techStack: string[]
  keyFeatures: string[]
  technicalDecisions: string[]
  challenges: { title?: string; challenge: string; solution: string }[]
  finalResult: string | string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  type: string
  tags: string[]
  description: string
  image: string
  imageGradient?: string
  links: ProjectLinks
  featured: boolean
  isDesignProject?: boolean
  screenshotVariant?: "mobile" | "web"
  screenshots: ProjectScreenshot[]
  caseStudy: CaseStudySection
}

export const SITE = {
  name: "Tyler Wu",
  title: "Full-Stack Developer",
  tagline: "Web · Mobile · UI/UX",
  location: "Toronto",
  email: "tyler.wu@example.com",
  github: "https://github.com/tylerwu",
  linkedin: "https://linkedin.com/in/tylerwu",
  resumeUrl: "/Tianle_(Tyler)_Wu_Resume.pdf",
} as const

export const projects: Project[] = [
  {
    id: "1",
    slug: "bookapro",
    title: "BookaPro",
    type: "Full-stack mobile marketplace",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    description:
      "A cross-platform marketplace connecting Toronto customers with local freelancers — map discovery, booking flows, and role-based customer & freelancer experiences.",
    image: "/images/bookapro.png",
    links: {
      caseStudy: "/projects/bookapro",
      github: "https://github.com/tylerwu/bookapro",
    },
    featured: true,
    screenshotVariant: "mobile",
    screenshots: [
      {
        title: "Role Selection / Auth",
        image: "/images/projects/bookapro/role-selection-auth.png",
        description: "Account type selection and authentication entry.",
      },
      {
        title: "Customer Map Discovery",
        image: "/images/projects/bookapro/customer-map-discovery.png",
        description: "Map-based freelancer discovery by category and location.",
      },
      {
        title: "Freelancer Detail",
        image: "/images/projects/bookapro/freelancer-detail.png",
        description: "Profile, services, and portfolio details.",
      },
      {
        title: "Booking Flow",
        image: "/images/projects/bookapro/booking-flow.png",
        description: "Service selection and appointment booking.",
      },
      {
        title: "Freelancer Services",
        image: "/images/projects/bookapro/freelancer-services.png",
        description: "Service creation and management for freelancers.",
      },
      {
        title: "Appointment Management",
        image: "/images/projects/bookapro/appointment-management.png",
        description: "Pending requests and appointment status updates.",
      },
    ],
    caseStudy: {
      overview: [
        "BookaPro is a cross-platform mobile marketplace app that connects customers with local freelancers and service providers in Toronto. The app allows customers to discover freelancers by category and location, view detailed freelancer profiles, save favourites, and book appointments. On the freelancer side, users can manage their business profile, create services, set weekly availability, review booking requests, and update appointment status.",
        "The project was built as a team-based mobile application using React Native, Expo, TypeScript, Firebase Authentication, Cloud Firestore, React Navigation, and React Native Maps. It uses role-based navigation to support two separate user experiences — customer and freelancer — within one shared mobile app.",
        "As the team lead, I worked across product planning, UI/UX design, system architecture, and full-stack mobile development. I helped break the project into weekly sprints, built the shared UI kit, planned the navigation structure, implemented core booking flows, and supported debugging across the app.",
      ],
      role: [
        "I worked on both the product design and full-stack mobile development of BookaPro. My responsibilities included creating wireframes, building the shared UI kit, designing the customer and freelancer user flows, planning the navigation architecture, creating the system architecture diagram, and structuring Firebase data for role-based experiences.",
        "On the development side, I implemented key parts of the authentication and role-routing flow, customer booking experience, profile management, appointment status logic, and reusable UI components. I also helped organize the team workflow through Jira sprints, GitHub branches, and regular progress reviews.",
        "A major part of my role was also supporting debugging and integration. For example, during development, we found an issue where category filters were returning the correct freelancer data, but the map was still showing stale markers. After checking the logs and confirming the filtering logic was correct, I identified the issue as a React Native Maps marker re-rendering problem and solved it by refreshing the marker rendering logic and deriving map data more consistently from the source freelancer list.",
      ],
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Firebase Authentication",
        "Cloud Firestore",
        "React Navigation",
        "React Native Maps",
        "Figma",
        "draw.io",
        "Jira",
        "GitHub",
      ],
      keyFeatures: [
        "Customer and freelancer role-based app experience",
        "Firebase Authentication with role-based routing",
        "Map-based freelancer discovery using React Native Maps",
        "Category filtering and freelancer profile viewing",
        "Freelancer detail pages with services and portfolio information",
        "Service selection and appointment booking flow",
        "Customer booking management across different booking states",
        "Freelancer pending request and schedule management",
        "Appointment status flow including pending, confirmed, completed, cancelled, and no-show states",
        "Service creation and editing for freelancers",
        "Weekly availability management",
        "Customer and freelancer profile management",
        "Freelancer business profile editing",
        "Favourites functionality",
        "Firestore-backed data storage for users, freelancers, services, appointments, and bookings",
      ],
      technicalDecisions: [
        "Used React Native + Expo to build one cross-platform mobile app for both iOS and Android.",
        "Used Firebase Authentication to support sign-in, sign-up, and role-based account creation.",
        "Used Cloud Firestore to store users, freelancers, services, appointments, and booking-related data.",
        "Designed separate customer and freelancer navigation flows while keeping them inside one shared application.",
        "Created reusable UI components and design tokens to keep screens visually consistent.",
        "Used a sprint-based workflow with Jira and GitHub branches to divide work clearly across a three-person team.",
      ],
      challenges: [
        {
          title: "Role-based navigation",
          challenge:
            "One challenge was supporting two very different user experiences inside one app. Customers needed discovery, favourites, booking, and profile features, while freelancers needed business profile, services, schedule, and request management.",
          solution:
            "We created separate navigation structures for customer and freelancer flows and used user role data from Firebase to route users to the correct experience after authentication.",
        },
        {
          title: "Map marker refresh bug",
          challenge:
            "During development, the category filter logic showed the correct freelancer count in the logs, but the map still displayed stale markers after switching categories.",
          solution:
            "I investigated the data flow and confirmed the issue was not the filter logic, but how react-native-maps was reconciling marker components. The solution was to derive the displayed freelancer and map freelancer lists from the same source data and force the map markers to refresh more reliably when the selected category changed.",
        },
        {
          title: "Appointment data consistency",
          challenge:
            "The app had booking and appointment data coming from different parts of the application.",
          solution:
            "To make the booking flow easier to maintain, I helped plan a cleaner appointment service layer and normalized appointment fields such as appointment date, customer name, price, and status values.",
        },
      ],
      finalResult: [
        "The current version of BookaPro demonstrates a functional marketplace-style mobile MVP. It includes role-based authentication, customer and freelancer navigation, map-based freelancer discovery, freelancer profiles, favourites, appointment booking, service management, schedule management, and Firebase-backed data storage.",
        "The project also gave me practical experience leading a small development team, translating product requirements into mobile user flows, designing reusable UI components, managing Firebase data, debugging real integration issues, and delivering a working cross-platform app on a physical mobile device.",
      ],
    },
  },
  {
    id: "2",
    slug: "ask-mirra",
    title: "Ask Mirra",
    type: "Mobile-first AI beauty web app",
    tags: ["Next.js", "Firebase", "Stripe", "AI"],
    description:
      "Ask Mirra is a mobile-first AI beauty web app built with Next.js, Firebase, Stripe, and AI image generation APIs. It includes authentication, preview balance logic, paid preview packs, webhook-based payment updates, and a responsive user flow from selfie upload to generated hairstyle preview.",
    image: "/images/ask-mirra.png",
    links: {
      caseStudy: "/projects/ask-mirra",
      live: "https://ask-mirra.vercel.app/",
      github: "https://github.com/tylerwu/ask-mirra",
    },
    featured: true,
    screenshotVariant: "mobile",
    screenshots: [
      {
        title: "Landing Page",
        image: "/images/projects/ask-mirra/landing-page.png",
        description: "Product entry point for hairstyle preview generation.",
      },
      {
        title: "Upload Selfie",
        image: "/images/projects/ask-mirra/upload-selfie.png",
        description: "Selfie upload step before style generation.",
      },
      {
        title: "Style Selection",
        image: "/images/projects/ask-mirra/style-selection.gif",
        description: "Choosing a hairstyle direction for the preview.",
      },
      {
        title: "Loading / Result",
        image: "/images/projects/ask-mirra/loading-result.gif",
        description: "AI generation state and hairstyle preview result.",
      },
      {
        title: "Pricing",
        image: "/images/projects/ask-mirra/pricing.png",
        description: "Paid preview packs through Stripe Checkout.",
      },
      {
        title: "Account / History",
        image: "/images/projects/ask-mirra/account-history.png",
        description: "Account access and previous preview history.",
      },
    ],
    caseStudy: {
      overview: [
        "Ask Mirra is a mobile-first AI beauty web app that helps users explore hairstyle ideas and generate personalized hair preview results. The app allows users to upload a selfie, choose a style direction, receive AI-generated hairstyle previews, and manage their preview balance through a paid preview system.",
        "The project was designed primarily for mobile users, with a responsive web interface that works across phone, tablet, and desktop screens. The goal was to create a beauty-focused product experience that feels simple, personal, and easy to use on a phone.",
        "The app was built as a production-ready web MVP using Next.js, TypeScript, Tailwind CSS, Firebase Authentication, Cloud Firestore, Stripe Checkout, and AI image generation APIs. It combines user authentication, AI-powered image processing, payment integration, and preview history into one complete mobile-first user flow.",
        "The goal of Ask Mirra was to build more than a static AI demo. I wanted to create a real web product with account management, limited free usage, paid preview purchases, and a scalable structure for future mobile app development.",
      ],
      role: [
        "I designed and developed Ask Mirra as a full-stack AI web application. My work included planning the product flow, designing the interface, building the responsive frontend, setting up Firebase authentication, connecting Firestore data, integrating Stripe Checkout, and implementing the preview balance system.",
        "A key part of my role was turning the AI feature into a complete product experience instead of just a one-time image generation demo. I built the flow around user accounts, limited free previews, paid preview packs, and account-based preview tracking so the product could support real usage and monetization.",
        "I also worked through payment and webhook debugging, including handling Stripe API version issues, webhook signature validation, and making sure successful payments correctly updated the user’s preview balance in Firestore.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase Authentication",
        "Cloud Firestore",
        "Stripe Checkout",
        "Stripe Webhooks",
        "AI image generation API",
        "fal.ai",
        "Vercel",
        "Figma",
      ],
      keyFeatures: [
        "AI-powered hairstyle preview generation",
        "Selfie upload and style direction selection",
        "User authentication with Firebase Authentication",
        "Free preview balance and paid preview balance logic",
        "Stripe Checkout integration for purchasing preview packs",
        "Stripe webhook handling to update user preview balance after successful payment",
        "Firestore-backed user profile and preview data",
        "Preview history and account-based usage tracking",
        "Responsive web interface optimized for desktop and mobile",
        "Clear user flow from upload → style selection → result → purchase",
        "Privacy-conscious retention planning for uploaded selfies and generated previews",
        "Production deployment through Vercel",
      ],
      technicalDecisions: [
        "Used Next.js + TypeScript to build a scalable web MVP with a clear frontend and API structure.",
        "Used Firebase Authentication to support account-based usage and preview tracking.",
        "Used Cloud Firestore to store user data, preview balance, and generated preview metadata.",
        "Used Stripe Checkout to create a secure payment flow without building custom payment forms.",
        "Used Stripe webhooks so preview balances are updated only after confirmed successful payments.",
        "Used Tailwind CSS to build a clean, responsive, beauty-focused interface quickly.",
        "Planned the product around “previews” instead of generic credits to make the value easier for users to understand.",
        "Designed a retention policy for uploaded selfies and generated images to keep user privacy in mind.",
      ],
      challenges: [
        {
          title: "Turning AI generation into a real product flow",
          challenge:
            "The main challenge was making the app feel like a usable product instead of a simple AI demo. A one-click AI generator is interesting, but it does not automatically create a complete product experience.",
          solution:
            "I designed the full journey around user accounts, preview limits, result pages, purchase options, and preview history. This made the app feel more like a complete beauty tool with a clear business model.",
        },
        {
          title: "Stripe Checkout and webhook integration",
          challenge:
            "One important technical challenge was connecting Stripe payments with the user’s preview balance. A payment should not update the balance until Stripe confirms that the checkout session was completed successfully.",
          solution:
            "I implemented Stripe Checkout and connected a webhook endpoint that listens for successful payment events. After receiving a valid webhook event, the app updates the user’s preview balance in Firestore.",
        },
        {
          title: "Webhook debugging",
          challenge:
            "During development, I ran into issues with Stripe webhook signature validation and API version mismatch.",
          solution:
            "I solved this by using raw request body handling for webhook verification and making sure the correct Stripe secret and API version were used. This helped me understand how real payment systems need secure event verification instead of trusting frontend payment status alone.",
        },
        {
          title: "Balancing free usage and paid previews",
          challenge:
            "Another challenge was designing the usage logic. The app needed to give users enough free value to try the product, while still supporting paid preview packs.",
          solution:
            "I separated preview balance logic from the UI and stored account-based preview counts in Firestore. This made the system easier to update later as the pricing or free preview policy changes.",
        },
      ],
      finalResult: [
        "Ask Mirra demonstrates my ability to build a full-stack AI web product with authentication, database logic, payment integration, responsive UI, and production deployment.",
        "The project gave me practical experience connecting AI generation with real product infrastructure, including user accounts, preview limits, Stripe Checkout, webhook-based balance updates, Firestore data management, and privacy-aware product planning.",
        "Unlike a simple AI prototype, Ask Mirra was built as a working MVP with a clear user flow and monetization structure.",
      ],
    },
  },
  {
    id: "3",
    slug: "easyrent",
    title: "EasyRent",
    type: "iOS rental marketplace",
    tags: ["SwiftUI", "MVVM", "Firebase"],
    description:
      "EasyRent is a SwiftUI-based real estate marketplace app with landlord, tenant, and guest flows, Firebase Authentication, Cloud Firestore, map-based rental discovery, saved listings, and rental request management.",
    image: "/images/easyrent.jpg",
    links: {
      caseStudy: "/projects/easyrent",
      github: "https://github.com/tylerwu/easyrent",
    },
    featured: true,
    screenshotVariant: "mobile",
    screenshots: [
      {
        title: "Sign In / Sign Up",
        image: "/images/projects/easyrent/sign-in-sign-up.png",
        description: "Authentication flow for rental users.",
      },
      {
        title: "Guest Home",
        image: "/images/projects/easyrent/guest-home.png",
        description: "Guest browsing experience without an account.",
      },
      {
        title: "Tenant Home / Search",
        image: "/images/projects/easyrent/tenant-home-search.png",
        description: "Property search and rental browsing for tenants.",
      },
      {
        title: "Property Detail",
        image: "/images/projects/easyrent/property-detail.png",
        description: "Listing details with location and property information.",
      },
      {
        title: "Request Page",
        image: "/images/projects/easyrent/request-page.png",
        description: "Rental request submission and status handling.",
      },
      {
        title: "Landlord My Properties",
        image: "/images/projects/easyrent/landlord-my-properties.png",
        description: "Landlord dashboard for viewing and managing listed rental properties.",
      },
    ],
    caseStudy: {
      overview: [
        "EasyRent is a SwiftUI-based real estate marketplace app inspired by 4rent.ca. The app was designed to support a complete rental workflow for landlords, tenants, and guests within one unified iOS application.",
        "The goal of the project was to translate a web-based rental platform model into a mobile-first experience. Users can browse rental listings, view property details, search by location, save properties, and submit rental requests. Landlords can create and manage property listings, review incoming rental requests, and approve or deny tenant applications.",
        "The app was built with SwiftUI, MVVM architecture, Firebase Authentication, Cloud Firestore, Map and Location services, and UserDefaults. It uses role-based access control to provide different navigation flows and dashboard experiences for landlords, tenants, and guest users.",
      ],
      role: [
        "I designed and developed EasyRent as a full-stack iOS application project. My work included analyzing the core functionality of a real estate rental marketplace, planning the role-based user flows, designing the SwiftUI interface, structuring the MVVM architecture, and connecting the app to Firebase for authentication and data storage.",
        "I implemented the landlord, tenant, and guest experiences within one app. This included landlord property management, tenant property search, saved listings, rental requests, and request status handling. I also built reusable SwiftUI components such as property cards, form fields, and status badges to keep the interface consistent and easier to maintain.",
        "On the backend side, I used Firebase Authentication for user accounts and Cloud Firestore to store user profiles, property data, and rental requests. I separated Firebase logic into helper/controller classes such as authentication, database, and location helpers to keep the View layer clean and focused on UI.",
      ],
      techStack: [
        "Swift",
        "SwiftUI",
        "MVVM",
        "Firebase Authentication",
        "Cloud Firestore",
        "UserDefaults",
        "MapKit",
        "Core Location",
        "EnvironmentObject",
        "ObservableObject",
      ],
      keyFeatures: [
        "Role-based experience for landlords, tenants, and guests",
        "Guest browsing flow for users without an account",
        "Firebase Authentication for sign-up and login",
        "“Remember Me” login support using UserDefaults",
        "Property listing creation, editing, and de-listing for landlords",
        "Rental search and property browsing for tenants and guests",
        "Property detail pages with location and listing information",
        "Shortlist / saved property functionality for tenants",
        "Rental request submission and withdrawal",
        "Landlord request management with approve and deny actions",
        "Firestore-backed user profiles, property listings, and rental requests",
        "Map and location service integration for rental discovery",
        "Dynamic app state management using EnvironmentObject and ObservableObject",
        "Reusable SwiftUI components for consistent UI design",
      ],
      technicalDecisions: [
        "Used SwiftUI to build a modern native iOS interface with declarative UI patterns.",
        "Followed MVVM architecture to separate Models, Views, ViewModels, and backend helper logic.",
        "Used Firebase Authentication to support secure user sign-up and login.",
        "Used Cloud Firestore to manage properties, users, and rental requests with scalable collections and relationships.",
        "Used UserDefaults for the “Remember Me” feature to prepopulate login fields after reopening the app.",
        "Used EnvironmentObject and ObservableObject to manage shared app state across different dashboards.",
        "Built reusable UI components including PropertyCardView, StatusBadgeView, and custom input fields to improve consistency and reduce repeated code.",
        "Isolated backend logic into helper classes such as FireAuthHelper, FireDBHelper, and LocationHelper so the SwiftUI views stayed easier to read and maintain.",
      ],
      challenges: [
        {
          title: "Supporting multiple user roles in one app",
          challenge:
            "One of the main challenges was designing different experiences for landlords, tenants, and guests while keeping the app structure clean.",
          solution:
            "I created role-based navigation flows and used stored user profile data from Firestore to determine what dashboard and features each user should access. This allowed the app to support different user journeys without needing separate apps for each role.",
        },
        {
          title: "Managing rental request relationships",
          challenge:
            "Rental requests involve multiple data relationships: a tenant creates a request, a landlord receives it, and the request is connected to a specific property.",
          solution:
            "I created clear User, Property, and Request models and structured Firestore data so requests could be connected to both users and properties. This made it easier to display request status from both the tenant and landlord sides.",
        },
        {
          title: "Keeping SwiftUI views clean",
          challenge:
            "As the app grew, putting too much Firebase and logic directly inside Views would have made the code hard to maintain.",
          solution:
            "I separated authentication, database, and location logic into dedicated helper/controller classes and used ViewModels and observable state to connect backend data with SwiftUI screens.",
        },
        {
          title: "Improving login experience",
          challenge:
            "Users needed a convenient way to return to the app without retyping credentials every time, while still confirming login intentionally.",
          solution:
            "I implemented a “Remember Me” feature using UserDefaults. Instead of automatically logging the user in, the app prepopulates saved login fields when reopened, which improves convenience while still requiring the user to manually confirm login.",
        },
      ],
      finalResult: [
        "EasyRent demonstrates my ability to build a native iOS marketplace application with role-based access, Firebase integration, Firestore data modeling, and reusable SwiftUI components.",
        "The project shows how a complex web-based rental platform concept can be translated into a mobile-first iOS experience. It also gave me practical experience with MVVM architecture, user authentication, role-specific dashboards, map-based discovery, rental request workflows, and clean SwiftUI component design.",
      ],
    },
  },
  {
    id: "4",
    slug: "carshare",
    title: "CarShare",
    type: "Android car rental app",
    tags: ["Kotlin", "Android", "Firebase", "Google Maps"],
    description:
      "CarShare is a native Android car-sharing marketplace app built with Kotlin, Firebase, Firestore, and Google Maps API. It includes owner and renter role-based dashboards, vehicle listing management, map-based car search, booking creation, confirmation codes, and booking cancellation.",
    image: "/images/carshare.jpg",
    links: {
      caseStudy: "/projects/carshare",
      github: "https://github.com/tylerwu/carshare",
    },
    featured: true,
    screenshotVariant: "mobile",
    screenshots: [
      {
        title: "Role-Based Registration",
        image: "/images/projects/carshare/role-based-registration.png",
        description: "Owner and renter registration with role selection."
      },
      {
        title: "Owner Dashboard",
        image: "/images/projects/carshare/owner-dashboard.png",
        description: "Owner dashboard for accessing car listings and booking management."
      },
      {
        title: "Create Car Listing",
        image: "/images/projects/carshare/create-car-listing.png",
        description: "Vehicle listing form with brand, model, price, city, address, and photo URL."
      },
      {
        title: "My Cars",
        image: "/images/projects/carshare/my-cars.png",
        description: "Owner view for reviewing listed vehicles and rental prices."
      },
      {
        title: "Map-Based Search",
        image: "/images/projects/carshare/map-based-search.png",
        description: "Renter search experience using Google Maps and price markers."
      },
      {
        title: "Car Detail / Booking",
        image: "/images/projects/carshare/car-detail-booking.png",
        description: "Vehicle detail screen with rental dates and booking action."
      },
      {
        title: "My Bookings",
        image: "/images/projects/carshare/my-bookings.png",
        description: "Renter booking history with confirmation codes, rental dates, and cancellation actions."
      }      
    ],
    caseStudy: {
      overview: [
        "CarShare is a full-stack native Android application built with Kotlin and Android Studio. It was designed as a simplified peer-to-peer car-sharing marketplace inspired by Turo, connecting car owners who want to list vehicles with renters who want to search, view, and book cars.",
        "The app supports two distinct user roles: Car Owner and Renter. Each role has its own dashboard, workflow, and available actions. Owners can create and manage vehicle listings, while renters can search available cars on a map, view car details, and create bookings.",
        "The project was built with Kotlin, Firebase Authentication, Cloud Firestore, Google Maps API, and Android Studio. It demonstrates role-based app logic, real-time NoSQL data storage, map-based search, booking management, and full CRUD-style marketplace functionality.",
      ],
      role: [
        "I designed and developed CarShare as a native Android full-stack mobile application. My work included planning the owner and renter user flows, building the Android screens, integrating Firebase Authentication, designing the Firestore data structure, connecting Google Maps, and implementing listing and booking logic.",
        "I implemented the role-based registration and login system so users are redirected to the correct dashboard after authentication. I also built the owner-side workflow for creating car listings and managing incoming bookings, as well as the renter-side workflow for map search, car detail viewing, booking creation, and booking cancellation.",
        "A major part of the project was connecting frontend screens with Firestore data. I created data flows for reading available cars, storing user profiles, retrieving owner-specific listings, creating booking records, and updating booking views for both owners and renters.",
      ],
      techStack: [
        "Kotlin",
        "Native Android",
        "Android Studio",
        "Firebase Authentication",
        "Cloud Firestore",
        "Google Maps API",
        "OOP",
        "Android XML",
      ],
      keyFeatures: [
        "Native Android application built with Kotlin",
        "Role-based user registration and login",
        "Firebase Authentication for secure account management",
        "Firestore-backed user profiles with owner and renter roles",
        "Dynamic dashboard routing based on user role",
        "Owner workflow for creating and managing car listings",
        "Vehicle listing form with brand, model, daily price, address, and image URL",
        "“My Cars” screen for owners to view their own listed vehicles",
        "Owner booking management with renter details, rental dates, and confirmation codes",
        "Renter workflow for browsing and booking available cars",
        "Google Maps integration for city-based car search",
        "Interactive map markers showing available vehicles and prices",
        "Car detail screen with booking date selection",
        "Booking creation with unique confirmation code generation",
        "Booking history and management for renters",
        "Booking cancellation that updates Firestore data",
        "Basic form validation for login, registration, listing creation, and booking inputs",
        "Full CRUD-style data flow for users, vehicles, and bookings",
      ],
      technicalDecisions: [
        "Used Kotlin and Android Studio to build a native Android application with platform-specific UI and lifecycle handling.",
        "Used Firebase Authentication to manage secure sign-up and login.",
        "Used Cloud Firestore as the backend database to store user profiles, vehicle listings, and booking records.",
        "Added role-based logic so owners and renters see different dashboards and workflows after login.",
        "Used Google Maps API to create a map-based rental search experience for renters.",
        "Stored vehicle listing data in Firestore so owner listings and renter search results could be updated from the same backend source.",
        "Generated confirmation codes for bookings to make the rental flow feel more realistic and complete.",
        "Followed Object-Oriented Programming principles to separate data models, UI screens, and business logic where possible.",
        "Added basic form validation to reduce incomplete or invalid data submissions.",
      ],
      challenges: [
        {
          title: "Building two user experiences in one app",
          challenge:
            "One of the main challenges was supporting both car owners and renters in a single application. Owners needed tools to create listings and manage bookings, while renters needed map search, car details, and booking functionality.",
          solution:
            "I used role-based account data stored in Firestore. After login, the app checks the user profile and redirects the user to the correct dashboard. This allowed the app to support two separate workflows while keeping one shared authentication system.",
        },
        {
          title: "Connecting map search with Firestore data",
          challenge:
            "Another challenge was displaying available cars on a map using real listing data. The app needed to fetch cars from Firestore, search by city or address, and display available cars as map markers.",
          solution:
            "I integrated Google Maps API and connected it with Firestore listing data. Available vehicles are loaded from the database and displayed as interactive markers, allowing renters to visually search for cars by location.",
        },
        {
          title: "Managing booking data for both owners and renters",
          challenge:
            "A booking record needs to be useful to both sides of the marketplace. Renters need to see their booking history, and owners need to see incoming bookings for their vehicles.",
          solution:
            "I structured booking data in Firestore with references to the car, renter, owner, rental dates, and confirmation code. This allowed the app to display booking information from both the renter and owner perspectives.",
        },
        {
          title: "Keeping the app maintainable",
          challenge:
            "As the app grew across multiple screens, it was important to keep the code readable and avoid putting too much logic into one place.",
          solution:
            "I followed OOP principles, used clear data models, and organized screen logic in a modular way. I also kept validation and Firestore operations separated from basic UI rendering where possible.",
        },
      ],
      finalResult: [
        "CarShare demonstrates my ability to build a native Android marketplace application with role-based authentication, Firestore data modeling, Google Maps integration, and booking management.",
        "The project gave me practical experience building multi-screen Android applications, connecting mobile UI with cloud backend data, handling different user roles, implementing CRUD operations, and designing marketplace-style workflows similar to a simplified version of Turo.",
      ],
    },
  },
  {
    id: "5",
    slug: "snowball",
    title: "Snowball",
    type: "UI/UX design project",
    tags: ["UI/UX", "Figma", "Mobile App"],
    description:
      "Snowball is a mobile UI/UX design project for a short-drama streaming platform. It focuses on content discovery, category browsing, watch history, paid episode unlocking, rewards, and top-up flows through a polished Figma prototype.",
    image: "/images/snowball.jpg",
    links: {
      caseStudy: "/projects/snowball",
      live: "https://www.figma.com/proto/n9BVe3dyel8dixAeATRLkV/Snowball-TV-App?node-id=1112-14443&starting-point-node-id=1112%3A14443&t=iQglQ6MxeoY927fR-1",
    },
    featured: false,
    isDesignProject: true,
    screenshotVariant: "mobile",
    screenshots: [
      {
        title: "Homepage",
        image: "/images/projects/snowball/homepage.png",
        description:
          "Short-drama homepage with featured banner, new releases, popular titles, genre sections, and all-series browsing.",
      },
      {
        title: "For You / Reels",
        image: "/images/projects/snowball/for-you-reels.png",
        description:
          "TikTok-style vertical short-drama watching feed with engagement actions and episode entry.",
      },
      {
        title: "Category Discovery",
        image: "/images/projects/snowball/category-discovery.png",
        description:
          "Genre-based browsing accessed from the For You page, including categories such as hidden identity, vampire, romance, revenge, and fantasy.",
      },
      {
        title: "Series List",
        image: "/images/projects/snowball/series-list.png",
        description: "Episode list and drama browsing flow for a selected series.",
      },
      {
        title: "Episode Player",
        image: "/images/projects/snowball/episode-player.png",
        description: "Full-screen short-drama viewing screen with like, save, share, episode title, progress, and playback controls.",
      },
      {
        title: "Unlock Episode",
        image: "/images/projects/snowball/unlock-episode.png",
        description: "Paid episode unlocking, refill states, unlock errors, and success feedback.",
      },
      {
        title: "My List / Watch History",
        image: "/images/projects/snowball/my-list-watch-history.png",
        description: "Saved collections, liked dramas, and watch history for returning users.",
      },
      {
        title: "Search",
        image: "/images/projects/snowball/search.png",
        description:
          "Search type selection, search history, search results, and history deletion states.",
      },
      {
        title: "Rewards",
        image: "/images/projects/snowball/rewards.png",
        description:
          "Daily check-in, reward tasks, ad-watching rewards, episode-watching rewards, invite rewards, and notification-based benefits.",
      },
    ],
    caseStudy: {
      overview: [
        "Snowball is a mobile UI/UX design project for a short-drama streaming platform, inspired by the idea of a “YouTube for short dramas.” The app was designed to help users discover short-form drama content, browse by category, continue watching previous episodes, and unlock paid episodes through an in-app reward and top-up system.",
        "The project focuses on improving content discovery and viewing continuity for users who may feel overwhelmed by large amounts of short-drama content. Instead of presenting all videos in one general feed, Snowball introduces clearer category browsing, trending content, watch history segmentation, and monetization-related flows such as episode unlocking, rewards, and top-ups.",
        "This was an end-to-end UI/UX design project created in Figma and FigJam. My role was Sole UI/UX Designer, responsible for planning the user experience, designing the mobile interface, creating screen flows, and building an interactive prototype.",
      ],
      role: [
        "I worked as the sole UI/UX designer for Snowball. My responsibilities included defining the product structure, identifying key user problems, designing the app’s information architecture, creating user flows, and building the full mobile interface in Figma.",
        "I focused on making the app easier to browse and return to. Since short-drama platforms can contain a large amount of fast-moving content, I designed category-based discovery and a more structured watch history experience to help users find relevant content and resume previously watched episodes more easily.",
        "I also designed monetization-related flows such as paid episode unlocking, rewards, and top-up screens. These flows were important because short-drama platforms often rely on a mix of free discovery, locked episodes, and in-app credits.",
      ],
      techStack: [
        "Design: Figma",
        "Planning: FigJam",
        "Research / Communication: Zoom",
        "Project Type: End-to-end mobile app UI/UX design",
        "Role: Sole UI/UX Designer",
        "Industry: Entertainment / Short Drama Streaming",
        "Duration: Q2 2024",
      ],
      keyFeatures: [
        "Mobile-first short-drama streaming app concept",
        "Home and search experience for discovering drama content",
        "Dedicated category system for browsing by genre",
        "Trending series section for highlighting popular content",
        "Watch history flow with multiple viewing segments",
        "Saved / bookmarked viewing list",
        "Episode detail and playback-related screens",
        "Paid episode unlock flow",
        "Rewards system for user engagement",
        "Top-up flow for purchasing in-app credits",
        "Clean mobile UI with entertainment-focused visual hierarchy",
        "Interactive Figma prototype for presenting the full user journey",
      ],
      technicalDecisions: [
        "Designed the app around short-form drama viewing instead of general video browsing.",
        "Created a dedicated category system so users can quickly explore genres they are interested in.",
        "Added trending series sections to help users discover popular and updated content.",
        "Split watch history into clearer segments so users can resume content from different contexts, such as recently watched, bookmarked, or favourite episodes.",
        "Designed paid episode unlock screens to make monetization clear without interrupting the viewing experience too aggressively.",
        "Added rewards and top-up flows to support an in-app credit system.",
        "Used a mobile-first layout with strong visual hierarchy, large content cards, clear navigation, and entertainment-focused imagery.",
        "Built reusable UI patterns in Figma to keep screens visually consistent across home, search, category, history, rewards, and top-up flows.",
      ],
      challenges: [
        {
          title: "Content overload",
          challenge:
            "One of the main problems was that users on short-drama platforms can feel overwhelmed by the amount of available content. A single feed can make discovery feel random and hard to control.",
          solution:
            "I designed a dedicated category system that allows users to browse content by genre and interest. This gives users a more structured way to explore the app instead of relying only on endless scrolling.",
        },
        {
          title: "Resuming previously watched content",
          challenge:
            "Another challenge was helping users find episodes or series they had already watched. On a short-drama platform, users may jump between many short episodes, making it difficult to remember where they left off.",
          solution:
            "I designed a more organized watch history experience with multiple segments, allowing users to continue from recently watched content, saved series, or favourite episodes.",
        },
        {
          title: "Balancing entertainment and monetization",
          challenge:
            "Short-drama apps often include locked episodes, rewards, and top-up systems. The challenge was to design these flows without making the app feel too aggressive or confusing.",
          solution:
            "I created clear paid episode unlock, rewards, and top-up screens that explain the user action directly and keep the visual style consistent with the rest of the app.",
        },
      ],
      finalResult: [
        "Snowball demonstrates my ability to design a complete mobile product experience from concept to interactive prototype. The project shows my understanding of mobile UI structure, entertainment platform UX, information architecture, user flow design, and monetization-related app patterns.",
        "Through this project, I practiced turning a broad product idea into a clear set of user journeys, including content discovery, category browsing, watch history, episode unlocking, rewards, and top-up flows.",
      ],
    },
  },
]

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "SwiftUI", "Kotlin", "Android SDK"],
  },
  {
    title: "Backend & Data",
    skills: ["Firebase Auth", "Firestore", "Firebase Storage", "Node.js", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "Xcode", "Android Studio", "Cursor"],
  },
  {
    title: "Design",
    skills: ["UI/UX", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null
  next: Project | null
} {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

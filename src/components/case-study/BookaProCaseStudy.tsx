import { getAdjacentProjects, type Project } from "../../data/projects"
import {
  PhoneSet,
  ProjectLinks,
  Prose,
  Sequence,
  Statement,
  StudyNav,
  StudySection,
  StudyShell,
  WideImage,
} from "./editorial"

const story = "/images/projects/bookapro/story"
const shots = "/images/projects/bookapro"

export default function BookaProCaseStudy({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <StudyShell
      title="BookaPro UX Case Study | Tyler Wu"
      description="UX case study for a two-sided freelancer marketplace, covering user flows, wireframing, usability testing, and role-based product design."
      projectTitle={project.title}
    >
      <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">Marketplace product</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
        BookaPro
      </h1>
      <p className="mt-4 max-w-4xl text-lg leading-relaxed text-text-secondary">
        Talent-first service marketplace for discovering and booking independent local professionals.
      </p>
      <p className="mt-6 max-w-4xl text-sm leading-relaxed text-text-secondary">
        <span className="text-text-primary">Role</span> UX Designer, Team Lead & Developer
        <span className="mx-2 text-border">/</span>
        <span className="text-text-primary">Team</span> 3
        <span className="mx-2 text-border">/</span>
        <span className="text-text-primary">Year</span> 2026
        <span className="mx-2 text-border">/</span>
        <span className="text-text-primary">Platform</span> Mobile
        <span className="mx-2 text-border">/</span>
        <span className="text-text-primary">Tools</span> Figma, FigJam, React Native, TypeScript, Firebase
      </p>
      <ProjectLinks project={project} />

      <div className="mt-10">
        <PhoneSet
          shots={[
            {
              src: `${shots}/customer-map-discovery.png`,
              alt: "BookaPro map used to discover local freelancers",
              caption: "Map discovery",
            },
            {
              src: `${shots}/freelancer-detail.png`,
              alt: "BookaPro freelancer profile with portfolio and services",
              caption: "Freelancer profile",
            },
            {
              src: `${shots}/booking-flow.png`,
              alt: "BookaPro service selection with date, time, and booking confirmation",
              caption: "Service and booking",
            },
          ]}
        />
      </div>

      <StudySection id="overview" kicker="01" title="A marketplace for the person, not the storefront">
        <Prose>
          <p>
            BookaPro is a two-sided marketplace that connects customers directly with independent
            service professionals: private chefs, nail artists, coaches, beauty freelancers, and
            other local talent.
          </p>
          <p>
            The product explores a talent-first model instead of the usual store-first booking model.
            People are choosing a specific professional, so the profile, portfolio, and availability
            have to carry the decision.
          </p>
          <p>
            The work covered the experience, the business model, and the mobile product. Discovery,
            evaluation, scheduling, and freelancer operations were designed as one system, then built
            in React Native with Firebase.
          </p>
        </Prose>
        <div className="mt-12">
          <PhoneSet
            columns={2}
            shots={[
              {
                src: `${shots}/freelancer-services.png`,
                alt: "BookaPro freelancer screen for creating and managing services",
                caption: "Freelancers manage the services customers book",
              },
              {
                src: `${shots}/appointment-management.png`,
                alt: "BookaPro freelancer schedule with a pending request to confirm or decline",
                caption: "Incoming bookings stay in one schedule",
              },
            ]}
          />
        </div>
      </StudySection>

      <StudySection id="problem" kicker="02" title="Five apps, two hours, no booking">
        <Statement>
          Booking one professional still means acting as your own project manager.
        </Statement>
        <Prose>
          <p className="mt-6">
            The pitch framed the existing path as social media, saved notes, maps, a portfolio, then a
            website, phone call, or DM. The line on the deck was “5 Apps, 2 Hours, 0 Bookings.”
          </p>
        </Prose>
        <div className="mt-8">
          <WideImage
            src={`${story}/fragmented-loop.png`}
            alt="Pitch slide titled The Endless Loop: 5 Apps, 2 Hours, 0 Bookings, moving from Rednote to Notes, Maps, Instagram, and Web or Call"
            caption="Slide from the BookaPro pitch. The loop is Rednote, notes, maps, Instagram, then a website or call."
          />
        </div>
        <div className="mt-12 grid gap-10 border-y border-border py-8 md:grid-cols-2 md:gap-16">
          <Sequence
            label="The fragmented loop"
            steps={["Social media", "Notes", "Maps", "Portfolio", "Website, phone, or DM", "Booking"]}
          />
          <Sequence
            label="BookaPro"
            steps={["Search", "View portfolio", "Select service", "Book"]}
          />
        </div>
        <div className="mt-8">
          <WideImage
            src={`${story}/loop-comparison.png`}
            alt="Comparison slide of the fragmented booking loop against BookaPro search, portfolio, and one-tap booking"
            caption="The same comparison, as drawn in the pitch: several tools on one side, search, portfolio, and booking on the other."
          />
        </div>
      </StudySection>

      <StudySection id="strategy" kicker="03" title="Designing more than a booking flow">
        <Prose>
          <p>
            The interface decisions sit on top of how the marketplace is supposed to work. Customers
            need one place to find someone and book them. Freelancers need visibility, control of
            their schedule, and a profile that is their business, not a studio’s listing.
          </p>
          <p>
            The business model canvas and pitch describe the segments, the offer, the channels, and
            how the product could make money. The design implication is narrower than the full canvas:
            profiles, availability, and two separate workflows had to be visible in the product.
          </p>
        </Prose>
        <div className="mt-10">
          <WideImage
            src={`${story}/business-model-canvas.png`}
            alt="BookaPro business model canvas covering partnerships, activities, value proposition, relationships, segments, channels, and revenue"
            caption="Business model canvas for BookaPro, April 2026. The readable implications below are the parts that shaped the product, not the whole canvas."
          />
        </div>
        <dl className="mt-12 divide-y divide-border border-y border-border">
          {[
            [
              "Freelancers need visibility",
              "Profiles and portfolios become the center of discovery. A customer is evaluating a person, so the work, services, and price have to live together.",
            ],
            [
              "Customers want less booking friction",
              "Availability and the booking action need to show up with the service, instead of starting another message thread.",
            ],
            [
              "Two groups use one product",
              "Customers discover and book. Freelancers manage services and incoming requests. That split becomes role-based navigation.",
            ],
            [
              "The business model depends on both sides staying in the app",
              "Channels in the canvas are the mobile app, social profiles, and direct profile links. Relationships are self-service booking, ratings and reviews, and automated engagement. Revenue concepts are credits or subscription, booking-related fees, and boosted freelancer profiles.",
            ],
          ].map(([need, implication]) => (
            <div key={need} className="grid gap-2 py-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-10">
              <dt className="text-sm font-semibold text-text-primary">{need}</dt>
              <dd className="text-sm leading-relaxed text-text-secondary">{implication}</dd>
            </div>
          ))}
        </dl>
      </StudySection>

      <StudySection id="users" kicker="04" title="Who the marketplace is for">
        <Prose>
          <p>
            These are the segments from the pitch and the business model canvas. They are not
            interview-backed personas, and there are no participant counts behind them.
          </p>
        </Prose>
        <div className="mt-8 space-y-6">
          <WideImage
            src={`${story}/customer-segments.png`}
            alt="Pitch slide for customer segments: Time-Starved Professional, who wants a zero-chat booking, and Lifestyle Explorer, who browses portfolios and pricing"
          />
          <WideImage
            src={`${story}/freelancer-segments.png`}
            alt="Pitch slide for freelancer segments: Independent Pro, who manages schedule and clients, and Niche Creative, who needs portfolio visibility tied to booking"
          />
        </div>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {[
            {
              side: "Customer",
              name: "Time-starved professional",
              goal: "Book a reliable person quickly and leave.",
              behaviour: "Opens the app for a fast booking rather than a long browse.",
              frustration: "Messaging on social apps, then finding out the person is already booked.",
              need: "Zero-chat scheduling, instant confirmation, and visible availability.",
            },
            {
              side: "Customer",
              name: "Lifestyle explorer",
              goal: "Find local talent whose work is worth a higher-consideration booking.",
              behaviour: "Browses, compares portfolios, and reads reviews before committing.",
              frustration: "Hidden fees, and storefront listings that hide the individual doing the work.",
              need: "Visual portfolios, transparent pricing, and talent gathered in one place.",
            },
            {
              side: "Freelancer",
              name: "Independent pro",
              goal: "Keep autonomy, own the brand, and run the day from one place.",
              behaviour: "Uses the product as a business tool for schedule and clients.",
              frustration: "High studio or platform commissions, and bookings scattered across DMs.",
              need: "Availability control, payments context, and one place for clients.",
            },
            {
              side: "Freelancer",
              name: "Niche creative",
              goal: "Be booked for a specific style, not absorbed into a studio brand.",
              behaviour: "Looks for ways to make the portfolio visible and shareable.",
              frustration: "Social attention that does not turn into a booking.",
              need: "A portfolio that is tied to a booking path and a link they can share.",
            },
          ].map((person) => (
            <article key={person.name} className="border-t border-border pt-5">
              <p className="text-xs font-medium tracking-[0.14em] text-accent uppercase">{person.side}</p>
              <h3 className="mt-2 text-xl font-semibold text-text-primary">{person.name}</h3>
              <dl className="mt-4 space-y-2 text-sm leading-relaxed">
                <div>
                  <dt className="inline font-medium text-text-primary">Goal. </dt>
                  <dd className="inline text-text-secondary">{person.goal}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-text-primary">Behaviour. </dt>
                  <dd className="inline text-text-secondary">{person.behaviour}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-text-primary">Frustration. </dt>
                  <dd className="inline text-text-secondary">{person.frustration}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-text-primary">Product need. </dt>
                  <dd className="inline text-text-secondary">{person.need}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </StudySection>

      <StudySection id="architecture" kicker="05" title="One app, two jobs">
        <Prose>
          <p>
            The structural problem was not a single screen. Customers and freelancers share a product
            and almost none of the daily tasks. Role-based navigation keeps discovery and booking on
            one side, and services, schedule, and request handling on the other.
          </p>
        </Prose>
        <div className="mt-10 space-y-8 border-y border-border py-8">
          <Sequence
            label="Customer"
            steps={["Discover", "Search / map", "Profile", "Service", "Booking", "Manage booking"]}
          />
          <Sequence
            label="Freelancer"
            steps={["Dashboard", "Profile", "Services", "Schedule", "Booking management", "Business overview"]}
          />
        </div>
        <div className="mt-8">
          <WideImage
            src={`${story}/customer-flow.png`}
            alt="Customer journey diagram from search and category, through a freelancer list, favourites, date and time, booking, reschedule, cancellation, and review"
            caption="Working customer journey from the project materials: search, shortlist, book, then reschedule, complete, or cancel."
          />
        </div>
      </StudySection>

      <StudySection id="wireframes" kicker="06" title="Wireframes before the build">
        <Prose>
          <p>
            Wireframes set the information hierarchy, the role-based navigation, the booking
            structure, and the split between customer and freelancer flows. They are structure, not a
            prototype.
          </p>
        </Prose>
        <div className="mt-8">
          <WideImage
            src={`${story}/wireframes.png`}
            alt="BookaPro wireframe sheet covering sign-in, account setup, map home, favourites, schedule, profile, freelancer services, and earnings"
            caption="Wireframe sheet for account entry, customer discovery and booking, and freelancer services, schedule, and profile."
          />
        </div>
      </StudySection>

      <StudySection id="product" kicker="07" title="The product as it shipped">
        <Statement>Every current BookaPro screen, grouped by the job it does.</Statement>
        <div className="mt-10 max-w-4xl space-y-3 text-sm leading-relaxed text-text-secondary">
          <p>
            Discover is the map. Evaluate is the freelancer profile. Book is service, time, and
            confirmation in one sequence. A separate reschedule or cancellation capture is not in this
            set; that path is in the journey diagram above.
          </p>
          <p>
            The account screen is how someone enters as a customer or a freelancer. Services and the
            schedule are the freelancer side. An earnings view exists in the wireframes, not in these
            captures.
          </p>
        </div>
        <div className="mt-12">
          <PhoneSet
            shots={[
              {
                src: `${shots}/customer-map-discovery.png`,
                alt: "BookaPro customer map for finding freelancers by location",
                caption: "Discover",
              },
              {
                src: `${shots}/freelancer-detail.png`,
                alt: "BookaPro freelancer detail page with profile and services",
                caption: "Evaluate",
              },
              {
                src: `${shots}/booking-flow.png`,
                alt: "BookaPro booking screen with services, available times, and confirm booking",
                caption: "Book",
              },
              {
                src: `${shots}/role-selection-auth.png`,
                alt: "BookaPro create account screen with Customer and Freelancer choices",
                caption: "Role at sign-up",
              },
              {
                src: `${shots}/freelancer-services.png`,
                alt: "BookaPro screen for freelancer service creation and management",
                caption: "Freelancer services",
              },
              {
                src: `${shots}/appointment-management.png`,
                alt: "BookaPro freelancer schedule showing a pending booking",
                caption: "Freelancer schedule",
              },
            ]}
          />
        </div>
      </StudySection>

      <StudySection id="testing" kicker="08" title="Where onboarding got in the way">
        <Prose>
          <p>
            Testing the registration and role-selection path showed extra friction. People had a
            harder time than necessary understanding how they entered the customer experience versus
            the freelancer experience.
          </p>
          <p>
            The flow was simplified so the role is chosen as part of account creation. There is no
            before-and-after pair of this step in the portfolio, so the current create-account screen
            above is the result, not a staged comparison.
          </p>
        </Prose>
      </StudySection>

      <StudySection id="system" kicker="09" title="Shared patterns, one implementation">
        <p className="max-w-4xl leading-relaxed text-text-secondary">
          Customer and freelancer screens reuse the same language: buttons, cards, tab navigation,
          status labels, form fields, and the booking controls. That kept the two roles from looking
          like two products, and it gave the React Native build a smaller set of components to repeat.
        </p>
        <p className="mt-8 text-sm tracking-wide text-text-primary">
          Buttons · Cards · Navigation · Status · Forms · Booking controls
        </p>
      </StudySection>

      <StudySection id="learnings" kicker="10" title="What the project made clear">
        <div className="max-w-4xl space-y-4 text-lg leading-relaxed text-text-primary">
          <p>A marketplace is designed for more than one stakeholder at a time.</p>
          <p>The business model and the interface are the same decision: who is visible, and how a booking starts.</p>
          <p>Two roles need a system, not an extra tab on someone else’s app.</p>
          <p>What Firebase and React Native could support shaped which flows were worth designing in detail.</p>
        </div>
      </StudySection>

      <StudyNav
        prev={prev ? { title: prev.title, href: prev.links.caseStudy } : null}
        next={next ? { title: next.title, href: next.links.caseStudy } : null}
      />
    </StudyShell>
  )
}

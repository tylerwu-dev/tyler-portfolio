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
} from "./editorial"

const shots = "/images/projects/snowball"

export default function SnowballCaseStudy({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <StudyShell
      title="Snowball UX Case Study | Tyler Wu"
      description="UX case study covering user research, competitive analysis, user flows, usability testing, navigation iteration, and product design."
      projectTitle={project.title}
    >
      <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">Research and product UX</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
        Snowball
      </h1>
      <p className="mt-4 max-w-4xl text-lg leading-relaxed text-text-secondary">
        Using research and usability testing to improve navigation, feature discovery, and product
        priorities.
      </p>
      <p className="mt-6 max-w-4xl text-sm leading-relaxed text-text-secondary">
        <span className="text-text-primary">Role</span> UI/UX Design Lead
        <span className="mx-2 text-border">/</span>
        <span className="text-text-primary">Company</span> Snowball Digital LTD., Toronto
        <span className="mx-2 text-border">/</span>
        <span className="text-text-primary">Timeline</span> Mar 2024 – Aug 2024
      </p>
      <p className="mt-2 max-w-4xl text-sm leading-relaxed text-text-secondary">
        <span className="text-text-primary">Methods</span> User interviews, competitive analysis, user
        flows, wireframing, usability testing
      </p>
      <ProjectLinks project={project} />

      <div className="mt-10">
        <PhoneSet
          shots={[
            {
              src: `${shots}/homepage.png`,
              alt: "Snowball home screen with a featured drama, new releases, and bottom navigation",
              caption: "Home",
            },
            {
              src: `${shots}/for-you-reels.png`,
              alt: "Snowball For You feed for watching short dramas",
              caption: "For You",
            },
            {
              src: `${shots}/rewards.png`,
              alt: "Snowball Rewards screen with daily check-in and Rewards selected in the tab bar",
              caption: "Rewards",
            },
          ]}
        />
      </div>

      <StudySection id="context" kicker="01" title="Where the work sat">
        <Prose>
          <p>
            I led UX for Snowball at Snowball Digital LTD. The product work covered recommendation and
            feed ranking, search, navigation, and rewards-related functionality.
          </p>
          <p>
            Those pieces pull in different directions. Browsing wants a catalog. The feed wants
            continuous watching. Search wants a direct answer. Rewards had to be easier to find
            because that was a business priority. Navigation had to stay understandable while those
            jobs shared one phone.
          </p>
          <p>
            The constraints were user expectations, discoverability, business priority, and what was
            practical to implement on iOS. I presented the rationale to my project supervisor and
            worked through the interactions with engineers.
          </p>
        </Prose>
        <div className="mt-12">
          <PhoneSet
            columns={2}
            shots={[
              {
                src: `${shots}/search.png`,
                alt: "Snowball search with history and results",
                caption: "Search as its own task",
              },
              {
                src: `${shots}/category-discovery.png`,
                alt: "Snowball category browsing for short-drama genres",
                caption: "Category browsing from the feed side of the product",
              },
            ]}
          />
        </div>
      </StudySection>

      <StudySection id="process" kicker="02" title="How the work moved">
        <p className="max-w-4xl text-sm leading-relaxed text-text-secondary">
          Competitive comparison boards, interview scripts, and the original flow file are not in this
          portfolio. The sequence below is the work itself. The screens later in the page are the
          product that work was aimed at.
        </p>
        <ol className="mt-10 grid gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Understand", "Where recommendation, search, navigation, and rewards were failing to be found."],
            ["02", "Research", "Competitive analysis, then interviews I scripted, ran, and wrote up."],
            ["03", "Synthesize", "Group what repeated, and turn that into an implication for the flow."],
            ["04", "Define the flow", "Decide where browsing, watching, search, and rewards sit."],
            ["05", "Explore", "Wireframes and interface studies for that structure."],
            ["06", "Test", "Watch whether people could find the important features."],
            ["07", "Iterate", "Adjust navigation with the test notes and the rewards priority together."],
          ].map(([index, label, text]) => (
            <li key={label} className="border-t border-border pt-4 pr-6">
              <p className="text-xs text-accent">{index}</p>
              <h3 className="mt-1 text-lg font-semibold text-text-primary">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{text}</p>
            </li>
          ))}
        </ol>
      </StudySection>

      <StudySection id="competitive" kicker="03" title="Competitive analysis">
        <Prose>
          <p>
            I compared navigation patterns, information hierarchy, and how easy a feature was to
            find. The questions were about where primary tasks live, what a home or feed puts first,
            and which interactions show up often enough to treat as familiar.
          </p>
          <p>
            Competitor names and the comparison board are not attached here, so this page does not
            list products or findings that are not in the files.
          </p>
        </Prose>
      </StudySection>

      <StudySection id="interviews" kicker="04" title="Interviews">
        <Statement>Plan the questions, run the interviews, write down what happened, then sort it.</Statement>
        <div className="mt-8">
          <Sequence steps={["Questions and script", "Interviews", "Observation notes", "Synthesis"]} />
        </div>
        <Prose>
          <p className="mt-8">
            I prepared the interview questions, conducted the interviews, documented observations, and
            grouped what kept showing up. Transcripts, counts, and quotes are not in the portfolio, so
            none are quoted here.
          </p>
        </Prose>
      </StudySection>

      <StudySection id="synthesis" kicker="05" title="From notes to a flow">
        <Prose>
          <p>
            Research was only useful if it changed the structure. Recurring observations were grouped
            into patterns, each pattern was turned into an implication, and those implications were
            used to shape the user flow rather than left as a separate report.
          </p>
          <p>
            The raw board is not in this repository, so specific observation-to-screen claims are not
            reconstructed. What the research was responsible for is the flow: clearer navigation,
            fewer steps to priority features, and a defined place for rewards next to browsing and
            watching.
          </p>
        </Prose>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {["Raw observations", "Patterns", "Implications", "User flow"].map((step, index) => (
            <li key={step}>
              <p className="text-3xl font-semibold tracking-tight text-text-primary">0{index + 1}</p>
              <p className="mt-2 text-sm text-text-secondary">{step}</p>
            </li>
          ))}
        </ol>
      </StudySection>

      <StudySection id="flow" kicker="06" title="The flow the product had to support">
        <Prose>
          <p>
            Home carries featured and new titles. For You is the watching feed. Search is a direct
            lookup, not a filter buried in that feed. A series opens into episodes and the player.
            Rewards is a primary destination because the business needed it to be easier to reach.
            Profile stays available without taking over browsing.
          </p>
        </Prose>
        <div className="mt-8 border-y border-border py-8">
          <Sequence
            steps={["Home", "Browse or For You", "Search", "Series", "Player", "Rewards", "Profile"]}
          />
        </div>
        <div className="mt-10">
          <PhoneSet
            shots={[
              {
                src: `${shots}/series-list.png`,
                alt: "Snowball series page listing episodes",
                caption: "A series, after browse or search",
              },
              {
                src: `${shots}/episode-player.png`,
                alt: "Snowball full-screen episode player",
                caption: "Playback",
              },
              {
                src: `${shots}/unlock-episode.png`,
                alt: "Snowball episode unlock state",
                caption: "Unlock when an episode is not open",
              },
            ]}
          />
        </div>
      </StudySection>

      <StudySection id="exploration" kicker="07" title="Exploring the structure in the interface">
        <Prose>
          <p>
            Wireframe files are not attached. The explorations that remain are the interface screens:
            home for hierarchy, the feed for watching, search for lookup, and rewards as a tab rather
            than a buried page. There is no earlier navigation screenshot in the set, so this is not a
            before-and-after.
          </p>
        </Prose>
        <div className="mt-10">
          <PhoneSet
            shots={[
              {
                src: `${shots}/homepage.png`,
                alt: "Snowball homepage with featured title and new releases",
                caption: "Home keeps catalog and a search entry",
              },
              {
                src: `${shots}/for-you-reels.png`,
                alt: "Snowball vertical watching feed",
                caption: "For You is separate from the catalog",
              },
              {
                src: `${shots}/my-list-watch-history.png`,
                alt: "Snowball saved list and watch history",
                caption: "A way back to something already started",
              },
            ]}
          />
        </div>
      </StudySection>

      <StudySection id="testing" kicker="08" title="Testing, then the tab bar">
        <Prose>
          <p>
            Usability testing looked at navigation and whether important features could be found. The
            bottom navigation was the structure that changed afterward. This is one decision in the
            project, not the whole story.
          </p>
          <p>
            Testing insights were evaluated together with business priorities. The navigation hierarchy
            was adjusted to improve access to important product functionality while increasing the
            prominence of rewards. I am not claiming that participants asked for rewards.
          </p>
          <p>
            In the prototype, Home, For You, Rewards, and Profile are the tabs. That is visible on the
            rewards screen at the top of the page.
          </p>
        </Prose>
      </StudySection>

      <StudySection id="product" kicker="09" title="The prototype, screen by screen">
        <Statement>All nine Snowball screens, kept together so the product can be read as a whole.</Statement>

        <div className="mt-14 space-y-16">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Find something</h3>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-text-secondary">
              Home, categories, and search are three ways into the catalog.
            </p>
            <div className="mt-8">
              <PhoneSet
                shots={[
                  {
                    src: `${shots}/homepage.png`,
                    alt: "Snowball homepage with featured banner and new releases",
                    caption: "Homepage",
                  },
                  {
                    src: `${shots}/category-discovery.png`,
                    alt: "Snowball genre category screen",
                    caption: "Category discovery",
                  },
                  {
                    src: `${shots}/search.png`,
                    alt: "Snowball search history and results",
                    caption: "Search",
                  },
                ]}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Watch</h3>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-text-secondary">
              The feed, a series, the player, and the unlock state.
            </p>
            <div className="mt-8">
              <PhoneSet
                columns={2}
                shots={[
                  {
                    src: `${shots}/for-you-reels.png`,
                    alt: "Snowball For You watching feed",
                    caption: "For You",
                  },
                  {
                    src: `${shots}/series-list.png`,
                    alt: "Snowball episode list for a series",
                    caption: "Series",
                  },
                  {
                    src: `${shots}/episode-player.png`,
                    alt: "Snowball episode player",
                    caption: "Player",
                  },
                  {
                    src: `${shots}/unlock-episode.png`,
                    alt: "Snowball paid episode unlock screen",
                    caption: "Unlock",
                  },
                ]}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Return, and rewards</h3>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-text-secondary">
              Watch history sits with saved items. Rewards is its own destination in the tab bar.
            </p>
            <div className="mt-8">
              <PhoneSet
                columns={2}
                shots={[
                  {
                    src: `${shots}/my-list-watch-history.png`,
                    alt: "Snowball my list and watch history",
                    caption: "My list and watch history",
                  },
                  {
                    src: `${shots}/rewards.png`,
                    alt: "Snowball rewards with check-in, tasks, and the Rewards tab selected",
                    caption: "Rewards",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </StudySection>

      <StudySection id="collaboration" kicker="10" title="How decisions were checked">
        <Prose>
          <p>
            I presented design rationale and recommendations to the project supervisor, and worked with
            engineers so the interactions stayed practical within iOS constraints. Research notes,
            technical feasibility, and the rewards priority were held at the same time.
          </p>
        </Prose>
      </StudySection>

      <StudySection id="reflection" kicker="11" title="Reflection">
        <div className="max-w-4xl space-y-4 text-lg leading-relaxed text-text-primary">
          <p>Research matters when it changes the flow, not when it stays in the notes.</p>
          <p>User evidence and a business priority can land in the same navigation decision without one pretending to be the other.</p>
          <p>Implementation limits are part of the design conversation, not a review after the screens are finished.</p>
          <p>A clear rationale is what lets a supervisor and an engineer judge the tradeoff.</p>
        </div>
      </StudySection>

      <StudyNav
        prev={prev ? { title: prev.title, href: prev.links.caseStudy } : null}
        next={next ? { title: next.title, href: next.links.caseStudy } : null}
      />
    </StudyShell>
  )
}

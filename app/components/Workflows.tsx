const HArrow = () => (
  <div className="flex items-center flex-shrink-0 self-center px-1">
    <div className="h-px w-6 bg-gray-300" />
    <div
      className="w-0 h-0"
      style={{
        borderTop: "5px solid transparent",
        borderBottom: "5px solid transparent",
        borderLeft: "7px solid #d1d5db",
      }}
    />
  </div>
);

const secHeaders = [
  "crd","name","city","state","filing_date","aum_raw",
  "num_advisors","websites","clients_list","uses_sma","aum_segment","last_refreshed",
];

const secRows = [
  ["296798","NEW WORLD ADVISORS LLC","HINGHAM","MA","2026-04-09","884935674","2","https://www.newworldadvisors.com","High net worth individuals, Pension and profit sharing plans, Charitable organizations","TRUE","Mid-Market","2026-05-19T15:02:06Z"],
  ["142618","THE WEALTH COLLABORATIVE, INC.","CORONA DEL MAR","CA","2026-03-23","791560364","2","http://www.thewealthcollaborative.com","Individuals, High net worth individuals, Corporations","TRUE","Mid-Market","2026-05-19T15:02:06Z"],
  ["148194","SEQUENT ASSET MANAGEMENT, LLC","HOUSTON","TX","2026-04-01","1055825621","2","http://www.sequentasset.com","Individuals, High net worth individuals, Corporations","TRUE","Large","2026-05-19T15:02:06Z"],
  ["155162","TALBOT FINANCIAL, LLC","BELLEVUE","WA","2026-03-02","1340535838","2","http://www.talbotfinancial.com/","Individuals, High net worth individuals","TRUE","Large","2026-05-19T15:02:06Z"],
  ["151053","DREXEL MORGAN & CO.","RADNOR","PA","2026-03-16","607000000","2","http://www.drexelmorgan.com","High net worth individuals","TRUE","Mid-Market","2026-05-19T15:02:06Z"],
  ["124147","FRANK, RIMERMAN ADVISORS LLC","PALO ALTO","CA","2026-03-28","3399039031","3","https://www.frankrimerman.com/","High net worth individuals, Charitable organizations","TRUE","Large","2026-05-19T15:02:06Z"],
  ["331098","TOPSAIL WEALTH MANAGEMENT LLC","CHARLOTTE","NC","2026-03-12","1309690152","4","https://topsailwealthmanagement.com/","Individuals, High net worth individuals, Charitable organizations, Corporations","TRUE","Large","2026-05-19T15:02:06Z"],
  ["174042","SENTRY ADVISORS, LLC","SAN FRANCISCO","CA","2026-03-05","2409025524","4","http://sentryadv.com","Individuals, High net worth individuals, Charitable organizations","TRUE","Large","2026-05-19T15:02:06Z"],
];

const firmHeaders = ["firm_overview","ai_and_technology_posture","recent_news","processed_at"];
const firmRows = [
  ["Sentry Advisors, LLC is a registered investment adviser that focuses on delivering high-quality financial advice to retail investors. The firm emphasizes a thoughtful understanding of client needs and risk tolerance, partnering with research-focused technology firms to provide objective, transparent, and confidential solutions.","NA","NA","2026-05-22T21:26:20Z"],
  ["Sequent Asset Management, LLC is a fee-only multi-family office that serves families with closely held businesses, multi-generational owners, senior corporate executives, professionals, retirees, trusts, estates and charitable organizations. The firm emphasizes a customized, client-first approach, acting as a personal chief financial officer and providing holistic wealth management, financial counseling, investment management and fiduciary coordination without model portfolios.","NA","In 2023 Sequent celebrated its fifteen-year anniversary, marking a milestone of fifteen years of operation as a boutique multi-family office.","2026-05-22T21:26:49Z"],
  ["Talbot Financial, LLC is an independent, fee-only wealth management firm based in Bellevue, Washington that serves high-net-worth families and individuals with a minimum investment of $500,000. The firm follows a value-style, active portfolio management approach emphasizing fundamental analysis, balance-sheet strength, free cash flow and tax-efficient trading, and it invests alongside its clients.","The firm uses Charles Schwab & Co., Inc. as its custodian and provides clients online account access via Schwab's portal. AI is mentioned only in the 2026 quarterly review as a market factor affecting technology stocks, but the firm does not indicate any internal AI-driven tools or platforms.","In 2025 Talbot Financial released a series of quarterly portfolio review newsletters (Q1-Q4 2025). The 2026 Q1 Review highlighted an AI-induced pullback in technology stocks and other macro-economic headwinds.","2026-05-22T21:27:20Z"],
  ["Drexel Morgan & Co. is a registered investment adviser and bank holding company that provides personalized investment management focused on high-net-worth clients seeking conservative, long-term equity exposure. Their core strategy centers on large-cap, dividend-paying, primarily A+ rated stocks with strong balance sheets.","NA","NA","2026-05-22T21:28:57Z"],
  ["The Wealth Collaborative, Inc. is a wealth-management firm that serves affluent individuals and families, focusing on aligning clients' values, desires, and behavior with their financial resources. Their approach combines purpose-driven portfolios built on Nobel-prize-winning financial science with a four-pillar framework incorporating financial science, behavioral finance, neuro-finance, and coaching.","NA","NA","2026-05-22T21:30:26Z"],
  ["Topsail Wealth Management LLC provides comprehensive wealth management services.","Topsail uses Charles Schwab as its custodian, SS&C Black Diamond for client-portal access and performance reporting, and eMoney's financial-planning suite for integrated planning and client relationship management. No specific AI tools or initiatives are mentioned.","NA","2026-05-22T21:31:10Z"],
  ["Frank, Rimerman Advisors LLC (FRA) is an SEC-registered investment advisor that provides private wealth management services to individual clients. The firm emphasizes the distinction between brokerage and advisory services.","NA","NA","2026-05-22T21:31:46Z"],
  ["New World Advisors is a boutique private-wealth RIA that serves high-net-worth individuals and families with conflict-free portfolio management, holistic financial planning, tailored private-market programs, philanthropic advising, and multigenerational wealth-transfer services. The firm emphasizes a client-centric, transparent approach, positioning itself as the trusted 'quarterback' for clients' financial lives.","The site references artificial-intelligence as a major market driver, noting AI-benefiting companies and AI-driven investment themes in its 2024-2025 market commentaries. No specific portfolio-management software or CRM platforms are mentioned beyond these AI market observations.","In 2023 the firm began publishing quarterly market commentary reports highlighting themes such as the Fed pivot and AI-driven investment opportunities; the series continued with quarterly updates throughout 2024 and 2025.","2026-05-22T21:46:13Z"],
];

const contactHeaders = ["contact_name","contact_title","contact_email","role_wedge","role_description","crd","firm_name"];
const contactRows = [
  ["Alex Flagg","Principal","alex@sentryadv.com","leadership","Principal responsible for overall firm leadership, strategy, and client relationship oversight.","174042","SENTRY ADVISORS, LLC"],
  ["Greg Powell","Principal","greg@sentryadv.com","leadership","Principal who helps guide the firm's investment approach and oversees client advisory services.","174042","SENTRY ADVISORS, LLC"],
  ["Liz Ly","CCO | Associate","liz@sentryadv.com","compliance_ops","Chief Compliance Officer managing regulatory compliance and risk oversight.","174042","SENTRY ADVISORS, LLC"],
  ["Susanna Han","Associate","susanna@sentryadv.com","investment","Associate involved in investment analysis and client service support.","174042","SENTRY ADVISORS, LLC"],
  ["Tim Hartzell","Founder, Chief Investment and Compliance Officer","thartzell@sequentasset.com","leadership","Co-founded Sequent in 2008; leads investment strategy, compliance, and overall firm direction.","148194","SEQUENT ASSET MANAGEMENT, LLC"],
  ["David Doll","Co-Founder","","leadership","Co-founded Sequent Asset Management; contributes to strategic leadership.","148194","SEQUENT ASSET MANAGEMENT, LLC"],
  ["Randy Talbot","Founder & Managing Partner","randy@talbotfinancial.com","leadership","Founded Talbot Financial in 2010; sets overall firm strategy and investment philosophy.","155162","TALBOT FINANCIAL, LLC"],
  ["Jim Pirak","Partner, COO & CCO","jim.pirak@talbotfinancial.com","compliance_ops","Oversees operations, ensures regulatory compliance, leads marketing and investor relations.","155162","TALBOT FINANCIAL, LLC"],
  ["Tom Swoffer, CFA","Partner, CIO & Portfolio Manager","tom.swoffer@talbotfinancial.com","investment","Directs investment strategy, conducts equity research, and manages client portfolios.","155162","TALBOT FINANCIAL, LLC"],
  ["Lynda McFeeley","Senior Vice President and Treasurer","lmcfeeley@drexelmorgan.com","leadership","Oversees firm's strategic direction and treasury functions.","151053","DREXEL MORGAN & CO."],
  ["Jeff Wheeler","President","jwheeler@thewealthcollaborative.com","leadership","Leads The Wealth Collaborative; provides wealth-management and estate-planning services.","142618","THE WEALTH COLLABORATIVE, INC."],
  ["Bryan Gendron","Assurance & Advisory Partner","bgendron@frankrimerman.com","other","Partner-In-Charge of Public Company Services Practice and Assurance Quality Control Group.","124147","FRANK, RIMERMAN ADVISORS LLC"],
  ["John Fasciano","Partner","john.fasciano@newworldadvisors.com","leadership","Partner responsible for overall firm strategy and client relationships.","296798","NEW WORLD ADVISORS LLC"],
  ["Christopher Cabral","Partner & CIO","chris.cabral@newworldadvisors.com","investment","Chief Investment Officer leading investment strategy and portfolio construction.","296798","NEW WORLD ADVISORS LLC"],
  ["Frank Burr","Partner","frank.burr@newworldadvisors.com","leadership","Partner contributing to firm governance and client advisory services.","296798","NEW WORLD ADVISORS LLC"],
  ["Alex Lee","Senior Analyst","alex.lee@newworldadvisors.com","investment","Senior Analyst conducting investment research and quantitative analysis.","296798","NEW WORLD ADVISORS LLC"],
  ["Krista Hommel","Client Service Associate","krista.brown@newworldadvisors.com","other","Handles client inquiries, account administration, and day-to-day service support.","296798","NEW WORLD ADVISORS LLC"],
];

function DataTable({
  headers,
  rows,
  expandCols,
}: {
  headers: string[];
  rows: string[][];
  expandCols?: number[];
}) {
  const expand = new Set(expandCols ?? []);
  return (
    <div className="overflow-x-auto rounded-md border border-gray-100">
      <table className="text-xs border-collapse min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((h) => (
              <th key={h} className="text-left font-medium text-gray-500 px-3 py-2 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
              {row.map((cell, j) =>
                expand.has(j) ? (
                  <td key={j} className="px-3 py-2 text-gray-600 max-w-[200px]">
                    <details>
                      <summary className="cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] list-none flex items-center gap-1 group">
                        <span className="text-gray-300 text-[10px] group-open:rotate-90 inline-block transition-transform">&#9654;</span>
                        <span className="truncate">{cell.slice(0, 50)}{cell.length > 50 ? "…" : ""}</span>
                      </summary>
                      <p className="mt-1 whitespace-normal text-gray-500 leading-relaxed">{cell}</p>
                    </details>
                  </td>
                ) : (
                  <td
                    key={j}
                    className="px-3 py-2 text-gray-600 whitespace-nowrap max-w-[180px] overflow-hidden text-ellipsis"
                    title={cell}
                  >
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Box({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-gray-200 rounded-xl p-4 bg-white ${className}`}>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">{label}</p>
      {children}
    </div>
  );
}

function StepBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-[#e8dfd0] rounded-lg px-3 py-2 text-xs text-gray-600 leading-relaxed bg-[#faf6f0]">
      {children}
    </div>
  );
}

const mingPhotos = Array.from({ length: 16 }, (_, i) => `/ming-flower/${String(i + 1).padStart(2, "0")}.jpg`);

export default function Workflows() {
  return (
    <section id="automations" className="pt-10 pb-10 border-t border-gray-100">
      <div className="px-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Automations I&apos;ve Built</h2>
        <h3 className="text-lg font-medium text-gray-900 mb-1">RIA Marketing Scraper</h3>
        <p className="text-base text-gray-500 leading-relaxed mb-3">
          Crawls and scrapes Registered Investment Advisor (RIA) websites to assemble a structured
          dataset of firm metadata, recent news, and key contacts including personal emails and bios,
          all sourced from live websites. Output is used to generate effective, personalized marketing
          campaigns. Built with Claude Code, uses self-hosted Firecrawl to crawl websites, and
          OpenRouter for LLM inference. Inference costs &lt;$0.005 per firm and takes &lt;1 minute per firm.
        </p>
        <p className="text-sm text-gray-400 italic">
          The diagram below is a visualization of the workflow — each stage shows real data produced by a live run.
        </p>
      </div>

      <div className="px-8 overflow-x-auto">
        <div className="flex flex-nowrap items-center gap-3" style={{ minWidth: 0 }}>

          <div className="flex-1 min-w-0">
            <Box label="Input">
              <p className="text-[10px] text-gray-400 mb-2">RIA data from SEC bulk ADV filing</p>
              <DataTable headers={secHeaders} rows={secRows} expandCols={[7, 8]} />
            </Box>
          </div>

          <div className="flex items-center flex-shrink-0">
            <HArrow />
          </div>

          <Box label="Workflow" className="w-[200px] flex-shrink-0 flex flex-col justify-center">
            <div className="flex flex-col gap-2">
              <StepBox>Crawls RIA websites in bulk using self-hosted Firecrawl</StepBox>
              <StepBox>Uses regex and gpt-oss-120b via OpenRouter to parse emails, summarize website content, extract recent news, and gather firm intelligence</StepBox>
              <StepBox>Writes results to Google Sheets</StepBox>
            </div>
          </Box>

          <div className="flex items-center flex-shrink-0">
            <HArrow />
          </div>

          <div className="flex-1 min-w-0">
            <Box label="Output">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[10px] text-gray-400 mb-1.5">Contacts</p>
                  <div className="max-h-[240px] overflow-y-auto">
                    <DataTable headers={contactHeaders} rows={contactRows} expandCols={[1, 4, 6]} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 mb-1.5">Firms</p>
                  <div className="max-h-[240px] overflow-y-auto">
                    <DataTable headers={firmHeaders} rows={firmRows} expandCols={[0, 1, 2]} />
                  </div>
                </div>
              </div>
            </Box>
          </div>

        </div>
      </div>

      {/* ── Google Reviews Image Scraper ── */}
      <div className="px-8 mt-12 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Google Reviews Image Scraper</h3>
        <p className="text-base text-gray-500 leading-relaxed mb-3">
          Given any restaurant/store/location name, scrapes every photo from its Google Maps listing.
          Uses Playwright controlling a headless Chromium browser, discovers all photo filter tabs,
          scrolls each to exhaustion. No paid APIs or keys required. Takes ~2 minutes per restaurant.
        </p>
        <p className="text-sm text-gray-400 italic">
          The diagram below shows the pipeline — output photos are a real sample from the live run.
        </p>
      </div>

      <div className="px-8 overflow-x-auto">
        <div className="flex flex-nowrap items-center gap-3" style={{ minWidth: 0 }}>

          {/* Input */}
          <Box label="Input" className="w-[180px] flex-shrink-0">
            <div className="flex flex-col gap-2">
              <div className="text-xs text-gray-700 font-medium leading-snug">
                Ming Flower Chinese Restaurant
              </div>
              <div className="text-xs text-gray-400">Lazelle Rd, Columbus OH</div>
              <div className="mt-1 inline-flex items-center gap-1 text-[10px] text-gray-400 border border-gray-200 rounded px-2 py-1 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Google Maps
              </div>
            </div>
          </Box>

          <HArrow />

          {/* Workflow steps */}
          <Box label="Workflow" className="w-[210px] flex-shrink-0">
            <div className="flex flex-col gap-2">
              <StepBox>Playwright launches headless Chromium</StepBox>
              <StepBox>Search Google Maps, open restaurant Photos panel</StepBox>
              <StepBox>Detect & iterate all filter tabs</StepBox>
              <StepBox>Scroll each tab to exhaustion, collect image URLs</StepBox>
              <StepBox>Deduplicate & download all images</StepBox>
            </div>
          </Box>

          <HArrow />

          {/* Output photo grid */}
          <div className="flex-1 min-w-0">
            <Box label="Output — 192 images scraped (16 shown)">
              <div className="grid grid-cols-4 gap-1.5">
                {mingPhotos.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-md bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Ming Flower photo ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
            </Box>
          </div>

        </div>
      </div>
    </section>
  );
}

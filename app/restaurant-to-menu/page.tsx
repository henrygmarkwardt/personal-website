import Link from "next/link";
import Nav from "../components/Nav";
import { HArrow, Box, StepBox, DataTable } from "../components/Workflows";

const scrapedPhotos = [
  "0010", "0011", "0012", "0013", "0017", "0019", "0027", "0035",
  "0040", "0047", "0049", "0056", "0058", "0060", "0068", "0073",
];

const beforeAfterPairs = ["0010", "0012", "0017", "0027", "0040", "0058", "0073", "0100"];

const menu: { section: string; items: [string, string][] }[] = [
  {
    section: "Appetizers",
    items: [
      ["Hummus Plate", "$12.95"],
      ["Nacho Grande", "$12.25"],
      ["Spinach and Artichoke Dip", "$11.50"],
      ["Chicken Strips", "$10.95"],
      ["Crab Tater Tots", "$8.99"],
      ["Plate of Tortilla Chips", "$6.95"],
    ],
  },
  {
    section: "Soups and Salads",
    items: [
      ["Mohawk Turtle Soup", "$9.50"],
      ["Mohawk House Salad", "$7.99"],
      ["California Salad", "$11.95"],
      ["French Onion Soup", "$7.99"],
      ["Caesar Salad", "$9.99"],
      ["Cobb Salad", "$14.95"],
      ["Spinach Salad", "$9.99"],
      ["Chef Salad", "$12.95"],
      ["Mohawk Avocado Salad", "$11.95"],
    ],
  },
  {
    section: "Quesadillas",
    items: [
      ["Cheese Quesadilla", "$6.95"],
      ["Grilled Chicken Quesadilla", "$11.25"],
      ["Santa Fe Beef Quesadilla", "$11.95"],
      ["Chicken Salad Quesadilla", "$11.50"],
      ["Spinach + Mushroom Quesadilla", "$11.25"],
      ["Veggie Quesadilla", "$10.75"],
    ],
  },
  {
    section: "Entrées",
    items: [
      ["Smoked Chicken Ravioli", "$12.95"],
      ["Veggie Paella", "$11.95"],
      ["Crustless Pizza", "$13.95"],
      ["Fish + Chips", "$18.75"],
      ["Baked Mac 'n Cheese", "$9.99"],
      ["Lasagna", "$13.95"],
    ],
  },
  {
    section: "Sandwiches",
    items: [
      ["Club Sandwich", "$11.75"],
      ["BBQ Bacon Burger", "$13.50"],
      ["Mushroom Bacon Swiss", "$13.75"],
      ["Black 'n Blue Burger", "$13.75"],
      ["Cheeseburger", "$12.75"],
      ["Turkey Reuben", "$12.75"],
      ["Fish Sandwich", "$12.95"],
      ["French Dip", "$13.50"],
    ],
  },
  {
    section: "Desserts",
    items: [
      ["Salty Caramel Lava Cake", "$6.25"],
      ["Triple Chocolate Cake", "$6.25"],
      ["Carrot Cake", "$6.25"],
      ["Italian Lemon Cake", "$6.25"],
    ],
  },
];

function SectionHeader({ id, n, title, blurb }: { id: string; n: string; title: string; blurb: string }) {
  return (
    <div id={id} className="px-8 mt-16 mb-8 scroll-mt-24">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-sm font-mono text-gray-400">{n}</span>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="text-base text-gray-500 leading-relaxed max-w-3xl">{blurb}</p>
    </div>
  );
}

export default function RestaurantToMenu() {
  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto pb-24">
        <div className="px-8 pt-10">
          <Link href="/#automations" className="text-sm text-gray-400 hover:text-gray-600">
            ← Back to automations
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">
            Restaurant Reviews → Menu Builder
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-3xl">
            Five stages turn a restaurant&apos;s name and menu URL into a finished, photo-illustrated menu.
            Every stage below shows real data from a live run on <span className="text-gray-700">The Old Mohawk</span> in
            Columbus, OH.
          </p>
        </div>

        {/* ── 01 Menu Extractor ── */}
        <SectionHeader
          id="extractor"
          n="01"
          title="Menu Extractor"
          blurb="Reads the restaurant's online menu page and turns the messy HTML into clean, structured text — every section, item, and price."
        />
        <div className="px-8 overflow-x-auto">
          <div className="flex flex-nowrap items-stretch gap-3" style={{ minWidth: 0 }}>
            <Box label="Input — menu URL" className="w-[220px] flex-shrink-0">
              <div className="text-xs text-gray-700 font-medium mb-2">oldmohawktavern.com/our-menu/</div>
              <div className="text-[11px] text-gray-400 leading-relaxed font-mono bg-gray-50 rounded p-2">
                &lt;div class=&quot;menu-item&quot;&gt;
                <br />&nbsp;&nbsp;Hummus Plate ... 12.95
                <br />&lt;/div&gt;
                <br />&lt;div class=&quot;menu-item&quot;&gt; ...
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <Box label="Workflow" className="w-[220px] flex-shrink-0 flex flex-col justify-center">
              <div className="flex flex-col gap-2">
                <StepBox>Fetches the live menu page HTML</StepBox>
                <StepBox>gpt-oss-120b extracts every dish and price into structured markdown</StepBox>
                <StepBox>Groups items under their menu sections</StepBox>
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <div className="flex-1 min-w-0">
              <Box label="Output — menu.md · 8 sections · 63 items">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-h-[300px] overflow-y-auto text-xs">
                  {menu.slice(0, 4).map((s) => (
                    <div key={s.section}>
                      <div className="font-semibold text-gray-800 mb-1">{s.section}</div>
                      {s.items.slice(0, 5).map(([name, price]) => (
                        <div key={name} className="flex justify-between text-gray-600 py-0.5">
                          <span className="truncate pr-2">{name}</span>
                          <span className="text-gray-400">{price}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Box>
            </div>
          </div>
        </div>

        {/* ── 02 Photo Scraper ── */}
        <SectionHeader
          id="scraper"
          n="02"
          title="Photo Scraper"
          blurb="Pulls every customer and owner photo from the restaurant's Google Maps listing — no paid API. A headless browser opens the Photos panel and scrolls each tab to exhaustion."
        />
        <div className="px-8 overflow-x-auto">
          <div className="flex flex-nowrap items-stretch gap-3" style={{ minWidth: 0 }}>
            <Box label="Input" className="w-[170px] flex-shrink-0">
              <div className="flex flex-col gap-2">
                <div className="text-xs text-gray-700 font-medium leading-snug">The Old Mohawk</div>
                <div className="text-[10px] text-gray-400">819 Mohawk St, Columbus OH</div>
                <div className="mt-1 inline-flex items-center gap-1 text-[10px] text-gray-400 border border-gray-200 rounded px-2 py-1 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Google Maps
                </div>
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <Box label="Workflow" className="w-[210px] flex-shrink-0">
              <div className="flex flex-col gap-2">
                <StepBox>Playwright launches headless Chromium</StepBox>
                <StepBox>Opens the restaurant Photos panel on Google Maps</StepBox>
                <StepBox>Detects and iterates every photo filter tab</StepBox>
                <StepBox>Scrolls each tab to exhaustion, collecting image URLs</StepBox>
                <StepBox>Deduplicates and downloads all images</StepBox>
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <div className="flex-1 min-w-0">
              <Box label="Output — 417 images scraped (16 shown)">
                <div className="grid grid-cols-4 gap-1.5">
                  {scrapedPhotos.map((id) => (
                    <div key={id} className="aspect-square overflow-hidden rounded-md bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/old-mohawk/scraped/${id}.jpg`}
                        alt={`scraped ${id}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </Box>
            </div>
          </div>
        </div>

        {/* ── 03 Classifier ── */}
        <SectionHeader
          id="classifier"
          n="03"
          title="Classifier"
          blurb="Most scraped photos are storefronts, menus, or crowded tables. A vision model labels every image and keeps only clean single-dish food shots — then a human gives the final yes/no in a review widget."
        />
        <div className="px-8 overflow-x-auto">
          <div className="flex flex-nowrap items-stretch gap-3" style={{ minWidth: 0 }}>
            <Box label="Input — 417 scraped photos" className="w-[200px] flex-shrink-0">
              <div className="grid grid-cols-3 gap-1">
                {scrapedPhotos.slice(0, 9).map((id) => (
                  <div key={id} className="aspect-square overflow-hidden rounded bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/old-mohawk/scraped/${id}.jpg`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <Box label="Workflow" className="w-[220px] flex-shrink-0">
              <div className="flex flex-col gap-2">
                <StepBox>perceptron-mk1 vision model labels each photo (food, storefront, menu, people…)</StepBox>
                <StepBox>Keeps only <span className="font-mono">primary_food_one_dish</span> images</StepBox>
                <StepBox>gpt-oss-120b matches each dish to a menu item</StepBox>
                <StepBox>Human reviewer confirms each keep/discard in a review widget</StepBox>
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <div className="flex-1 min-w-0">
              <Box label="Output — single-dish food shots, human-approved">
                <div className="grid grid-cols-4 gap-1.5">
                  {beforeAfterPairs.map((id) => (
                    <div key={id} className="relative aspect-square overflow-hidden rounded-md bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/old-mohawk/before/${id}.jpg`} alt="" className="w-full h-full object-cover" />
                      <span className="absolute top-1 right-1 text-[9px] bg-green-500 text-white rounded px-1 leading-tight">kept</span>
                    </div>
                  ))}
                </div>
              </Box>
            </div>
          </div>
        </div>

        {/* ── 04 Retoucher ── */}
        <SectionHeader
          id="retoucher"
          n="04"
          title="Retoucher"
          blurb="Each approved plate goes through an image model that cleans up the shot — removes silverware and clutter, fixes lighting, and crops so the food fills the frame. About $0.04 per image."
        />
        <div className="px-8 overflow-x-auto">
          <div className="flex flex-nowrap items-stretch gap-3" style={{ minWidth: 0 }}>
            <div className="flex-1 min-w-0">
              <Box label="Input — approved single-dish photos">
                <div className="grid grid-cols-4 gap-1.5">
                  {beforeAfterPairs.map((id) => (
                    <div key={id} className="aspect-square overflow-hidden rounded-md bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/old-mohawk/before/${id}.jpg`} alt="before" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </Box>
            </div>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <Box label="Workflow" className="w-[220px] flex-shrink-0 flex flex-col justify-center">
              <div className="flex flex-col gap-2">
                <StepBox>Sends each single-dish photo to bytedance-seed/seedream-4.5</StepBox>
                <StepBox>Prompt: clean restaurant-quality shot, remove silverware, food fills the frame</StepBox>
                <StepBox>Saves the retouched plate for the menu builder</StepBox>
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <div className="flex-1 min-w-0">
              <Box label="Output — retouched plates">
                <div className="grid grid-cols-4 gap-1.5">
                  {beforeAfterPairs.map((id) => (
                    <div key={id} className="aspect-square overflow-hidden rounded-md bg-gray-100 ring-1 ring-[#e8dfd0]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/old-mohawk/after/${id}.png`} alt="after" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </Box>
            </div>
          </div>
        </div>

        {/* ── 05 Menu Builder ── */}
        <SectionHeader
          id="builder"
          n="05"
          title="Menu Builder"
          blurb="The final stage joins the structured menu with the retouched photos — matching each dish image to the right menu item — and renders a clean, photo-illustrated menu."
        />
        <div className="px-8 overflow-x-auto">
          <div className="flex flex-nowrap items-stretch gap-3" style={{ minWidth: 0 }}>
            <Box label="Input" className="w-[200px] flex-shrink-0">
              <div className="flex flex-col gap-2">
                <div className="text-xs text-gray-700 font-medium">menu.md</div>
                <div className="text-[10px] text-gray-400">8 sections · 63 items</div>
                <div className="text-xs text-gray-700 font-medium mt-1">retouched photos</div>
                <div className="grid grid-cols-3 gap-1">
                  {beforeAfterPairs.slice(0, 6).map((id) => (
                    <div key={id} className="aspect-square overflow-hidden rounded bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/old-mohawk/after/${id}.png`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <Box label="Workflow" className="w-[210px] flex-shrink-0">
              <div className="flex flex-col gap-2">
                <StepBox>Matches each retouched photo to its best-fit menu item</StepBox>
                <StepBox>Places photos alongside the matching dish</StepBox>
                <StepBox>Renders a clean, photo-illustrated HTML menu</StepBox>
              </div>
            </Box>
            <div className="flex items-center flex-shrink-0"><HArrow /></div>
            <div className="flex-1 min-w-0">
              <Box label="Output — finished menu (live HTML the pipeline produced)">
                <div className="h-[460px] w-full overflow-hidden rounded border border-gray-100">
                  <iframe
                    src="/old-mohawk/menu.html"
                    title="Generated menu — The Old Mohawk"
                    style={{
                      width: "200%",
                      height: "920px",
                      border: 0,
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                    }}
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-2">
                  Scaled to fit — <a href="/old-mohawk/menu.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">open the full menu</a>.
                </p>
              </Box>
            </div>
          </div>
        </div>

        <div className="px-8 mt-16">
          <Link href="/#automations" className="text-sm text-gray-400 hover:text-gray-600">
            ← Back to automations
          </Link>
        </div>
      </main>
    </>
  );
}

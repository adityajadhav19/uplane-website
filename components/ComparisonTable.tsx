import { BrandMark } from "./Brand";

const comparisons = [
  ["Market research", "Endless browsing through ad libraries, taking screenshots, building messy spreadsheets. You’re guessing trends but are never sure if you’ve seen it all.", "Instantly analyze top-performing competitor ads, spot real-time trends, and uncover what’s resonating in your market. Your next campaign starts with insight, not guesswork."],
  ["Ad Creation", "Staring at a blank screen, struggling for ideas, rewriting copy, testing formats. Every new manual creative feels like climbing a mountain.", "Drop in an idea and get ready-to-launch high-performing variations. Built on proven winners, real-time trends, and your own input. Suddenly, ad creation becomes fun and scalable."],
  ["Landing Pages & Lead Capture", "Building a landing page takes days. You need a team, multiple rounds of feedback, endless testing, and still you’re not sure what works.", "Your idea turns into a fully-built, conversion-focused landing page in seconds. Complete with tracking, A/B testing, and seamless CRM integration. Uplane automatically tests and serves the highest-converting version."],
  ["Campaign Launch & Management", "Export button. Download folder. Waiting for Ads Manager. Uploading images. Cropping. Fixing mistakes. Being scared that campaigns do not perform well over the weekend. Manual budget adjustment to best performers.", "Click, and your campaign is live. Multi-channel. With smart budget shifts and automated audience personalization. No busywork, just pure strategy and impact."],
  ["Optimization & Learning Engine", "Manual analysis, delayed reactions, missed opportunities.", "Your campaigns learn on their own. The system identifies the top creatives, channels, audiences and scales them automatically. One test becomes a winner before you even open your laptop."],
  ["Reporting & Insights", "Late reports, manual data crunching.", "Every morning, your performance dashboard is ready in Slack, Teams, or email. What’s winning and what’s underperforming will be clear and automated."],
  ["Chat Interface", "Constant juggling between chats, tools, and teams, with slow, drawn-out communication.", "Chat with Uplane like you would with a team of the best data analysts, creative strategists, and brand strategists. Drop ideas, requests, or questions into the chat on Teams, Slack or email, and turn them into reality within seconds."]
] as const;

function CategoryIcon() {
  return <span className="comparison-search-icon" aria-hidden="true"><i /></span>;
}

export function ComparisonTable() {
  return (
    <div className="comparison-table comparison-table-polished" role="table" aria-label="Traditional marketing compared with Uplane">
      <div className="comparison-row comparison-header" role="row">
        <div role="columnheader">Categories</div>
        <div role="columnheader"><span className="traditional-icon">◧</span> The Traditional Way</div>
        <div role="columnheader"><BrandMark/> The Uplane way</div>
      </div>
      {comparisons.map(([category, traditional, uplane], index) => (
        <div className="comparison-row comparison-data-row" role="row" key={category} style={{"--row-index": index} as React.CSSProperties}>
          <div className="comparison-category comparison-category-cell" role="rowheader">
            <CategoryIcon />
            <b>{category}</b>
          </div>
          <div className="comparison-copy-cell comparison-traditional-cell" role="cell">
            <small>{category.toUpperCase()}</small>
            <p>{traditional}</p>
          </div>
          <div className="comparison-copy-cell comparison-uplane-cell" role="cell">
            <small>{category.toUpperCase()} <BrandMark small/></small>
            <p>{uplane}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { BrandMark } from "./Brand";

export const featureData = [
  { title: "Market research", copy: "Automatically analyze competitor’s top ads, identify real-time trends, and leverage market insights to fuel smarter ad creation.", kind: "research" },
  { title: "Ad creation", copy: "Automatically generate high-performing ad creatives based on previous market research, top performing creatives, or your ideas.", kind: "ads" },
  { title: "Landing Pages & Lead Capture", copy: "Instantly generate matching landing pages to your ads. These landing pages automatically come with A/B variants to constantly optimize conversion, full event tracking, and seamless CRM sync.", kind: "landing" },
  { title: "Campaign Launch & Management", copy: "Launch campaigns across channels. We allocate your budget 24/7 where it brings highest return, and deliver your ads to the exact right audiences.", kind: "campaign" },
  { title: "Optimization & Learning Engine", copy: "We continuously track customer behaviour across ads and landing pages. With access to your CRM, we identify your most valuable customers and learn how to target them. We will continuously improve both marketing funnel and targeting with our self-learning agents.", kind: "learning" },
  { title: "Reporting & Insights", copy: "Understand your customers better than ever. With automated daily reports and dashboards delivered directly to Slack, Teams, or email, we will keep you in the loop about marketing performance and customer behaviour. Here, we will tell you anything you want to know about your customers.", kind: "reporting" },
];

export function ResearchVisual() {
  return (
    <div className="visual visual-research">
      <div className="research-pill">
        <BrandMark small />
        <span>Research in progress...</span>
        <i className="research-pulse"><i /></i>
      </div>
      <div className="research-map">
        <div className="research-branches" aria-hidden="true"><i /><i /><i /></div>
        <div className="research-columns">
          <div className="mini-panel research-ads-panel">
            <label>Top ads</label>
            <div className="adtiles">
              {Array.from({ length: 9 }, (_, i) => (
                <span className={i % 3 === 0 ? "ad-tile-marked" : ""} key={i}>
                  {i % 3 === 0 ? <BrandMark small /> : <i className="ad-tile-lines" />}
                </span>
              ))}
            </div>
          </div>
          <div className="mini-panel trends">
            <label>Real-Time Trends</label>
            <div className="trend-icon"><span>↗</span></div>
            <b>News</b>
            <small>Predictive trends<br />for you</small>
          </div>
          <div className="mini-panel audience">
            <label>Audiences</label>
            <span><i /> Interest</span>
            <span className="audience-selected"><i /> Age Group <b>✓</b></span>
            <span><i /> Behaviors <b>✓</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdsVisual() {
  return (
    <div className="visual visual-ads">
      <div className="flow-pills">
        <span>Top ads</span><span>Real-Time Trends</span><span>Audiences</span>
      </div>
      <div className="ads-flow" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="engine-node"><BrandMark /></div>
      <div className="ad-output">
        {[1, 2, 3, 4].map((item) => (
          <div className="ad-output-card" key={item}>
            <div className="ad-output-top"><BrandMark small /><span>Uplane</span><i /></div>
            <div className="ad-creative">
              <BrandMark small />
              <b>Uplane</b>
            </div>
            <div className="ad-output-actions"><span>♥</span><span>◯</span><span>➤</span><i /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LandingVisual() {
  return (
    <div className="visual visual-landing">
      <div className="landing-toolbar">
        <span className="landing-variant">A</span>
        <div className="landing-toolbar-actions"><i /><i /><i /></div>
        <span className="landing-variant">B</span>
      </div>
      <div className="landing-pages">
        {["A", "B"].map((variant) => (
          <div className="landing-page-column" key={variant}>
            <small>Landing page {variant}</small>
            <div className="page-thumb">
              <div className="page-brand"><BrandMark small /><b>Uplane</b><i /></div>
              <div className="page-hero">
                <i /><b /><span /><span className="short-line" />
              </div>
              <div className="page-media"><span>▶</span></div>
              <div className="page-footer-lines"><i /><i /><i /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="crm-bubbles">
        <span className="crm-hubspot"><b>↗</b></span>
        <span className="crm-salesforce"><b>☁</b></span>
        <span className="crm-marketo"><b>m</b></span>
        <span className="crm-add">＋</span>
      </div>
    </div>
  );
}

export function CampaignVisual() {
  return (
    <div className="visual visual-campaign">
      <div className="platform-stack">
        <div className="platform-bars" aria-hidden="true">
          {["green", "green", "orange", "orange", "green", "green"].map((colour, index) => (
            <i className={colour} key={index} />
          ))}
        </div>
        <div className="platform-icons">
          {["G", "f", "♪", "▶", "in", "◎"].map((icon, index) => (
            <span className={`platform-${index + 1}`} key={icon}>{icon}</span>
          ))}
        </div>
      </div>
      <div className="campaign-status-list">
        <div className="launch-note">
          <BrandMark small />
          <div><b>Was deployed to Facebook (Now live on LinkedIn &amp; Instagram)</b><small>Campaign is active</small></div>
          <em>✓ Done</em>
        </div>
        <div className="launch-note">
          <BrandMark small />
          <div><b>Budget was increased</b><small>Top performing campaign</small></div>
          <em className="status-progress">↗ In Progress</em>
        </div>
        <div className="launch-note">
          <BrandMark small />
          <div><b>New audience added</b><small>Optimized for conversion</small></div>
          <em>✓ Done</em>
        </div>
      </div>
    </div>
  );
}

export function LearningVisual() {
  return (
    <div className="visual visual-learning">
      <div className="learning-map">
        <svg className="learning-connectors" viewBox="0 0 500 240" preserveAspectRatio="none" aria-hidden="true">
          <path d="M250 54 V91 C250 108 170 108 170 132 V162" />
          <path d="M250 91 C250 108 355 108 355 132 V162" />
          <path d="M170 162 C170 178 250 178 250 198" />
          <path d="M355 162 C355 178 250 178 250 198" />
        </svg>
        <div className="learning-node learning-node-top"><span className="learning-node-status" /><BrandMark small /><b>Uplane</b><small>Research complete</small></div>
        <div className="learning-node learning-node-left"><span className="learning-node-status" /><BrandMark small /><b>Uplane</b><small>Creative optimized</small></div>
        <div className="learning-node learning-node-right"><span className="learning-node-status" /><BrandMark small /><b>Uplane</b><small>Audience matched</small></div>
      </div>
    </div>
  );
}

export function ReportingVisual() {
  return (
    <div className="visual visual-reporting">
      <div className="report-sidebar">
        <BrandMark small />
        <i /><i /><i /><i /><i />
      </div>
      <div className="report-main">
        <div className="report-header"><BrandMark small /><span>Uplane Dashboard</span><i>•••</i></div>
        <div className="report-stats"><span><b>21%</b><small>Conversion</small></span><span><b>41%</b><small>Revenue</small></span><span><b>+6%</b><small>Growth</small></span></div>
        <div className="report-chart">
          <div className="report-chart-labels"><span>Performance</span><i>Last 30 days⌄</i></div>
          <svg viewBox="0 0 360 105" preserveAspectRatio="none" aria-hidden="true">
            <path className="chart-grid-line" d="M0 20 H360 M0 48 H360 M0 76 H360" />
            <path d="M0 85 C35 78 42 55 76 66 S130 34 165 45 S220 25 250 35 S320 8 360 10 L360 105 L0 105Z" fill="#e7f0ff" />
            <path d="M0 85 C35 78 42 55 76 66 S130 34 165 45 S220 25 250 35 S320 8 360 10" fill="none" stroke="#2476ff" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="report-channels"><span><b>✣</b> Slack</span><span><b>▣</b> Teams</span><span><b>✉</b> Email</span></div>
    </div>
  );
}

export function FeatureArt({ kind }: { kind: string }) {
  if (kind === "research") return <ResearchVisual />;
  if (kind === "ads") return <AdsVisual />;
  if (kind === "landing") return <LandingVisual />;
  if (kind === "campaign") return <CampaignVisual />;
  if (kind === "learning") return <LearningVisual />;
  return <ReportingVisual />;
}

export function PhoneVisual() {
  return <div className="phone-stage"><div className="phone-glow"/><div className="phone"><div className="phone-notch"/><div className="phone-status">9:41 <span>▴ ▪ ▰</span></div><div className="phone-nav">☰ <span>•••　✎</span></div><div className="phone-chat"><span className="chat-user">● User</span><p>Hi, I loved this Ad Concept I found</p><div className="chat-image"><BrandMark/></div><span className="chat-agent"><BrandMark small/> Uplane</span><p>Recreated it for your brand</p></div></div></div>;
}

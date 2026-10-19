import { companyOverview } from "@/data/site";

export function CompanyOverview() {
  return (
    <section
      id={companyOverview.id}
      className="overview"
      aria-labelledby="overview-title"
    >
      <div className="site-shell overview-grid">
        <div className="overview-intro">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {companyOverview.eyebrow}
          </p>
          <h2 id="overview-title" className="section-title">
            {companyOverview.title}
          </h2>
          <p className="section-description">{companyOverview.description}</p>
        </div>

        <div className="principles" aria-label="How we think">
          {companyOverview.principles.map((principle, index) => (
            <div className="principle" key={principle.label}>
              <span className="principle__node" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{principle.label}</h3>
                <p>{principle.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

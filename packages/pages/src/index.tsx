import { Button } from "@loomlogic/buttons";
import { Stat } from "@loomlogic/data-display";
import { ReviewQueue } from "@loomlogic/patterns";
import "./styles.css";

export function OperationsDashboard() {
  return (
    <main className="ll-dashboard">
      <header className="ll-dashboard__header">
        <div><span>Saturday, September 26</span><h1>Good afternoon, Mahdi.</h1><p>Here is the work that needs attention across your products.</p></div>
        <Button>New workflow</Button>
      </header>
      <section className="ll-dashboard__stats" aria-label="Summary">
        <Stat label="Open reviews" value="24" trend="6 ready today" />
        <Stat label="Active workflows" value="08" trend="All systems normal" />
        <Stat label="Time recovered" value="31h" trend="Up 12% this week" />
      </section>
      <ReviewQueue />
    </main>
  );
}

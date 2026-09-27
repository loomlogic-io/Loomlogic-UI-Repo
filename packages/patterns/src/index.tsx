import { Button } from "@loomlogic/buttons";
import { StatusBadge } from "@loomlogic/data-display";
import "./styles.css";

export function ReviewQueue() {
  return (
    <section className="ll-review-queue" aria-labelledby="review-queue-title">
      <header>
        <div>
          <span className="ll-review-queue__eyebrow">Pattern preview</span>
          <h2 id="review-queue-title">Review queue</h2>
        </div>
        <Button size="sm" variant="secondary">View all</Button>
      </header>
      <div className="ll-review-queue__row">
        <div className="ll-review-queue__avatar" aria-hidden="true">MK</div>
        <div><strong>Mara Kline</strong><span>Visit note · 8 minutes ago</span></div>
        <StatusBadge status="Candidate" />
        <Button size="sm">Review</Button>
      </div>
      <div className="ll-review-queue__row">
        <div className="ll-review-queue__avatar" aria-hidden="true">AJ</div>
        <div><strong>Alex Jin</strong><span>Care plan · 24 minutes ago</span></div>
        <StatusBadge status="Approved" />
        <Button size="sm" variant="secondary">Open</Button>
      </div>
    </section>
  );
}

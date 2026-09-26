import "./styles.css";

export interface TabItem<Value extends string> {
  label: string;
  value: Value;
  count?: number;
}

export function Tabs<Value extends string>({ items, onChange, value }: { items: Array<TabItem<Value>>; onChange: (value: Value) => void; value: Value }) {
  return (
    <div className="ll-tabs" role="tablist" aria-label="View">
      {items.map((item) => (
        <button
          className="ll-tabs__tab"
          data-selected={item.value === value}
          key={item.value}
          onClick={() => onChange(item.value)}
          role="tab"
          aria-selected={item.value === value}
          type="button"
        >
          {item.label}{item.count !== undefined && <span>{item.count}</span>}
        </button>
      ))}
    </div>
  );
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Projects Shipped" },
  { value: 98, suffix: "%", label: "Conversion Uplift" },
  { value: 100, suffix: "%", label: "Task Success Rate" },
  { value: 90, suffix: "%", label: "Order Accuracy" },
];

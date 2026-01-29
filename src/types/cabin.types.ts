export interface Cabin {
  id: string;
  type: string;
  status: "available" | "booked" | "vip" | "maintenance";
  price: number;
  guest?: string;
}

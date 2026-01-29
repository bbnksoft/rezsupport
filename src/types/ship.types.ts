// export interface Ship {
//   id: string;
//   name: string;
//   capacity: number;
//   status: string;
// }

// src/types/ship.types.ts
export interface Ship {
  id: number;
  name: string;
  capacity: number;
  decks: number;
  cabins: number;
  status: "Active" | "Maintenance";
  icon: string;
}

// src/types/deck.types.ts
export interface Deck {
  id: number;
  name: string;
  cabins: number;
  function: string;
}

// src/types/cabin.types.ts
export interface Cabin {
  id: string;
  type: string;
  status: "available" | "booked" | "vip" | "maintenance";
  price: number;
  guest?: string;
}

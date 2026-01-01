export interface Staff {
  name: string;
  image: string;
  position?: string;
  description?: string;
  focusArea?: string[]
}

export interface Club {
  id: string,
  name: string;
  title?: string;
  category?: string;
  image: string,
  summary: string;
  description: string;
  staff: Staff[];
}

export interface Event {
  id: number;
  title: string;
  image: string;
  summary: string;
  semester: string;
  description: string;
  date: string;
  location?: string;
  category?: string;
  speakers?: string[];
  keyTakeaways: string[];
  whatToExpect: string[];
}
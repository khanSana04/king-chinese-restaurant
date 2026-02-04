
export interface MenuSubItem {
  id: string;
  name: string;
  halfPrice?: string;
  fullPrice: string;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  items: MenuSubItem[];
}

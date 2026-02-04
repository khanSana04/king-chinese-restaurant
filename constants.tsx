
import { Category } from './types';

export const RESTAURANT_INFO = {
  name: "King Chinese & Kebab",
  address: "Shop 11, Pipe Road, Brahmanwadi, Near Lucky Hall, Kurla, Mumbai",
  rating: "4.1",
  phone: "+919876543210",
  whatsapp: "+919876543210",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=King+Chinese+Kebab+Kurla+Mumbai"
};

export const MENU_CATEGORIES: Category[] = [
  { 
    id: "chinese-rice", 
    label: "Chinese Rice", 
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "cr1", name: "Fried Rice", halfPrice: "80", fullPrice: "120" },
      { id: "cr2", name: "Schezwan Rice", halfPrice: "100", fullPrice: "140" },
      { id: "cr3", name: "Hong Kong Rice", halfPrice: "120", fullPrice: "170" },
      { id: "cr4", name: "Singapore Rice", halfPrice: "120", fullPrice: "170" },
      { id: "cr5", name: "Combination Rice", halfPrice: "90", fullPrice: "140" },
      { id: "cr6", name: "Egg Rice", halfPrice: "80", fullPrice: "120" },
      { id: "cr7", name: "Mix Fried Rice", fullPrice: "220" },
      { id: "cr8", name: "Maska Rice", fullPrice: "200" },
      { id: "cr9", name: "Malai Rice", fullPrice: "200" },
      { id: "cr10", name: "Loly Pop Rice", fullPrice: "260" },
    ]
  },
  { 
    id: "noodles", 
    label: "Noodles", 
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "n1", name: "Hakka Noodles", halfPrice: "80", fullPrice: "120" },
      { id: "n2", name: "Schezwan Noodles", halfPrice: "100", fullPrice: "140" },
      { id: "n3", name: "Hong Kong Noodles", halfPrice: "140", fullPrice: "190" },
      { id: "n4", name: "Singapore Noodles", halfPrice: "140", fullPrice: "190" },
      { id: "n5", name: "Egg Noodles", halfPrice: "80", fullPrice: "120" },
      { id: "n6", name: "Dragon Noodles", fullPrice: "190" },
      { id: "n7", name: "Tiranga Noodles", fullPrice: "230" },
    ]
  },
  { 
    id: "chicken-starter", 
    label: "Chicken Starter", 
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "cs1", name: "Baby Chicken", fullPrice: "210" },
      { id: "cs2", name: "Crispy Chicken", fullPrice: "210" },
      { id: "cs3", name: "King Spl Dry", fullPrice: "210" },
      { id: "cs4", name: "Rajwada Dry", fullPrice: "240" },
      { id: "cs5", name: "Korean Dry", fullPrice: "260" },
      { id: "cs6", name: "Singapore Dry", fullPrice: "270" },
      { id: "cs7", name: "Chilly Tadka", fullPrice: "280" },
      { id: "cs8", name: "Turki Dry", fullPrice: "290" },
    ]
  },
  { 
    id: "kepsa-rice", 
    label: "Kepsa Rice", 
    image: "https://images.unsplash.com/photo-1590593162211-f98f7f46253d?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "kr1", name: "CHK King Spl Kepsa", halfPrice: "550", fullPrice: "800" },
      { id: "kr2", name: "CHK Turki Kepsa", halfPrice: "700", fullPrice: "1200" },
      { id: "kr3", name: "CHK Arbi Kepsa", halfPrice: "800", fullPrice: "1300" },
      { id: "kr4", name: "CHK Hyderabadi Kepsa", halfPrice: "550", fullPrice: "800" },
      { id: "kr5", name: "CHK Reshmi Kepsa", halfPrice: "550", fullPrice: "800" },
      { id: "kr6", name: "CHK Chinese Kepsa", halfPrice: "500", fullPrice: "750" },
      { id: "kr7", name: "CHK Tandoori Kepsa", halfPrice: "550", fullPrice: "800" },
    ]
  },
  { 
    id: "shawarma", 
    label: "Shawarma", 
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "sh1", name: "Shawarma Khabos", fullPrice: "50" },
      { id: "sh2", name: "Shawarma Dolnad", fullPrice: "35" },
      { id: "sh3", name: "Shawarma Burger", fullPrice: "30" },
      { id: "sh4", name: "Open Shawarma", fullPrice: "200" },
      { id: "sh5", name: "Cheese Shawarma", fullPrice: "90" },
      { id: "sh6", name: "Bar-B Que Shawarma", fullPrice: "100" },
      { id: "sh7", name: "Tikka Shawarma", fullPrice: "140" },
      { id: "sh8", name: "Seekh Kabab Shawarma", fullPrice: "140" },
    ]
  },
  { 
    id: "grill-starter", 
    label: "Grill Starter", 
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "gs1", name: "SPL Barra Tandoori", halfPrice: "250", fullPrice: "430" },
      { id: "gs2", name: "Peshawari Tandoori", halfPrice: "260", fullPrice: "450" },
      { id: "gs3", name: "Amul Dahi Tandoori", halfPrice: "250", fullPrice: "450" },
      { id: "gs4", name: "Chicken Tandoori", fullPrice: "330" },
      { id: "gs5", name: "Chicken Leg", fullPrice: "100" },
      { id: "gs6", name: "Chicken Tikka", fullPrice: "70" },
    ]
  },
];

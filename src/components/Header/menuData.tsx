import { Menu } from "@/types/menu";

const mockCategories = [
  { id: 21, title: "Panels", path: "/products/panels", newTab: false },
  { id: 22, title: "Doors", path: "/products/doors", newTab: false },
  {
    id: 23,
    title: "Coldroom Panels",
    path: "/products/coldroom-panels",
    newTab: false,
  },
  {
    id: 24,
    title: "Accessories",
    path: "/products/accessories",
    newTab: false,
  },
];

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: mockCategories,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 5,
    title: "News",
    path: "/news",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact-us",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact-us",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;

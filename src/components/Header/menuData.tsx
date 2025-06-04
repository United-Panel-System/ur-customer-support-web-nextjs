import { Menu } from "@/types/menu";
import { ProductCategory } from "@/types/products"; // Adjust import path as needed

export const getMenuData = (productCategories: ProductCategory[]): Menu[] => {
  const mappedCategories = productCategories.map((category) => ({
    id: category.id,
    title: category.name,
    path: `/products?category=${encodeURIComponent(category.name.toLowerCase().replace(/\s+/g, "-"))}`,
    newTab: false,
  }));

  return [
    {
      id: 1,
      title: "Home",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: "About",
      path: `/about`,
      newTab: false,
      submenu: [
        {
          id: 21,
          title: "About Us",
          path: `/about`,
          newTab: false,
        },
        {
          id: 22,
          title: "Certifications",
          path: `/about/certifications`,
          newTab: false,
        },
      ],
    },
    {
      id: 3,
      title: "Products",
      path: "/products/category",
      newTab: false,
      submenu: [
        {
          id: 31,
          title: "Product Categories",
          path: `/products/category`,
          newTab: false,
        },
        ...mappedCategories,
      ],
    },
    {
      id: 3,
      title: "Projects",
      path: "/projects",
      newTab: false,
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
      title: "Contact",
      path: "/contact",
      newTab: false,
    },
    // {
    //   id: 7,
    //   title: "Pages",
    //   newTab: false,
    //   submenu: [
    //     {
    //       id: 41,
    //       title: "About Page",
    //       path: "/about",
    //       newTab: false,
    //     },
    //     {
    //       id: 42,
    //       title: "Contact Page",
    //       path: "/contact",
    //       newTab: false,
    //     },
    //     {
    //       id: 43,
    //       title: "Blog Grid Page",
    //       path: "/blog",
    //       newTab: false,
    //     },
    //     {
    //       id: 44,
    //       title: "Blog Sidebar Page",
    //       path: "/blog-sidebar",
    //       newTab: false,
    //     },
    //     {
    //       id: 45,
    //       title: "Blog Details Page",
    //       path: "/blog-details",
    //       newTab: false,
    //     },
    //     {
    //       id: 46,
    //       title: "Sign In Page",
    //       path: "/signin",
    //       newTab: false,
    //     },
    //     {
    //       id: 47,
    //       title: "Sign Up Page",
    //       path: "/signup",
    //       newTab: false,
    //     },
    //     {
    //       id: 48,
    //       title: "Error Page",
    //       path: "/error",
    //       newTab: false,
    //     },
    //   ],
    // },
  ];
};

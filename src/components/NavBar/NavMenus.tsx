import { NavMenu } from "../NavBar/NavMenu";

const navItems = [
  {
    key: "/",
    data: { label: "Home" },
    items: [],
  },
  {
    key: "/features",
    data: { label: "Features" },
    items: [
      {
        key: "/features/nextjs",
        data: { label: "NextJs" },
      },
      {
        key: "/features/typescript",
        data: { label: "TypeScript" },
      },
    ],
  },
];

export const NavMenus = () => (
  <div className="absolute right-0 flex w-32 flex-col sm:relative sm:flex-row">
    {navItems.map((navItem) => (
      <NavMenu key={navItem.key} primaryNavItem={navItem} />
    ))}
  </div>
);

export type NavItem = {
  key: string;
  data: {
    label: string;
  };
  items?: NavItem[];
};

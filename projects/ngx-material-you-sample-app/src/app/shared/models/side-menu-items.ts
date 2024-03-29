import { SideMenuItem } from "../interfaces/side-menu-item";

export const sideMenuItems: Array<SideMenuItem> = [
  { title: 'About', isHeadline: true, appendDivider: true },
  { title: 'Introduction', href: '/about/introduction', interactive: true },
  { title: 'Quick Start', href: '/about/quick-start', interactive: true },
  { title: 'Theming', isHeadline: true, appendDivider: true },
  { title: 'Material Theming', href: '/theming/material-theming', interactive: true },
  { title: 'Color', href: '/theming/color', interactive: true },
  { title: 'Typography', href: '/theming/typography', interactive: true },
  { title: 'Components', isHeadline: true, appendDivider: true },
  { title: 'Button', href: '/components/buttons', interactive: true },
  { title: 'Checkbox', href: '/components/checkbox', interactive: true },
  { title: 'Chips', href: '/components/chips', interactive: true },
  { title: 'Dialogs', href: '/components/dialogs', interactive: true },
  { title: 'Floating action button (FAB)', href: '/components/fab', interactive: true },
  { title: 'Icon Button', href: '/components/icon-button', interactive: true },
  { title: 'Lists', href: '/components/lists', interactive: true },
  { title: 'Menus', href: '/components/menus', interactive: true },
  { title: 'Progress indicators', href: '/components/progress-indicators', interactive: true },
  { title: 'Radio', href: '/components/radio', interactive: true },
  { title: 'Ripple', href: '/components/ripple', interactive: true },
  { title: 'Select', href: '/components/select', interactive: true },
  { title: 'Sliders', href: '/components/sliders', interactive: true },
  { title: 'Switch', href: '/components/switch', interactive: true },
  { title: 'Tabs', href: '/components/tabs', interactive: true },
  { title: 'Text field', href: '/components/text-field', interactive: true },
];

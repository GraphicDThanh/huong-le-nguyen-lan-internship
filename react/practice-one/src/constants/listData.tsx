import Star from 'assets/icons/star.svg';
import Frame from 'assets/icons/frame.svg';
import Map from 'assets/icons/map.svg';
import Users from 'assets/icons/users.svg';
import Phone from 'assets/icons/phone.svg';
import Send from 'assets/icons/send.svg';
import PhonePC from 'assets/icons/phone-pc.svg';
import Target from 'assets/icons/target.svg';
import MapPC from 'assets/icons/map-pc.svg';
import MailPC from 'assets/icons/mail-pc.svg';
import Forest from 'assets/images/forest.png';
import SkyStar from 'assets/images/sky-star.png';
import Economy from 'assets/images/economy.png';
import Chart from 'assets/images/chart.png';
import CircleCheckFill from 'assets/icons/circle-check-fill.svg';
import CircleCheck from 'assets/icons/circle-check.svg';
import AvatarWoman from 'assets/images/avatar-woman.png';
import AvatarMan from 'assets/images/avatar-man.png';
import { ListItemProps } from 'components/ListItem';

const listCity = [
  { text: 'Ho Chi Minh', value: 'hcm' },
  { text: 'DaNang', value: 'dn' },
  { text: 'HaNoi', value: 'hn' },
];

const listTime = [
  { text: '4:00 Available', value: '4pm' },
  { text: '5:00 Available', value: '5pm' },
  { text: '6:00 Available', value: '6pm' },
];

const listStars = Array(5).fill(Star);

const listFeature = [
  {
    id: 1,
    image: Frame,
    title: 'Peace of Mind',
    text: 'So it really behaves like neither. Now we have given up.',
  },
  {
    id: 2,
    image: Target,
    title: 'Set For Life',
    text: 'They were used to create the machines that launched.',
  },
  {
    id: 3,
    image: Users,
    title: '100% Satisfaction',
    text: 'So it really behaves like neither. Now we have given up.',
  },
];

const listMenuFooter = [
  {
    id: 1,
    title: 'Company Info',
    listItem: [
      { title: 'About Us', href: 'javascript:void(0)' },
      { title: 'Carrier', href: 'javascript:void(0)' },
      { title: 'We are hiring', href: 'javascript:void(0)' },
      { title: 'Blog', href: 'javascript:void(0)' },
    ],
  },
  {
    id: 2,
    title: 'Legal',
    listItem: [
      { title: 'About Us', href: 'javascript:void(0)' },
      { title: 'Carrier', href: 'javascript:void(0)' },
      { title: 'We are hiring', href: 'javascript:void(0)' },
      { title: 'Blog', href: 'javascript:void(0)' },
    ],
  },
  {
    id: 3,
    title: 'Features',
    listItem: [
      { title: 'Business Marketing', href: 'javascript:void(0)' },
      { title: 'User Analytic', href: 'javascript:void(0)' },
      { title: 'Live Chat', href: 'javascript:void(0)' },
      { title: 'Unlimited Support', href: 'javascript:void(0)' },
    ],
  },
  {
    id: 4,
    title: 'Resources',
    listItem: [
      { title: 'IOS & Android', href: 'javascript:void(0)' },
      { title: 'Watch a Demo', href: 'javascript:void(0)' },
      { title: 'Customers', href: 'javascript:void(0)' },
      { title: 'API', href: 'javascript:void(0)' },
    ],
  },
  {
    id: 5,
    title: 'Get In Touch',
    listItem: [
      {
        title: '(480) 555-0103',
        href: 'tel:+(480)555-0103',
        primaryImage: Phone,
        secondaryImage: PhonePC,
        size: 'sm',
      },
      {
        title: '4517 Washington Ave.',
        href: 'javascript:void(0)',
        primaryImage: Map,
        secondaryImage: MapPC,
        size: 'sm',
      },
      {
        title: 'debra.holt@example.com',
        href: 'mailto:debra.holt@example.com',
        primaryImage: Send,
        secondaryImage: MailPC,
        size: 'sm',
      },
    ] as ListItemProps[],
  },
];

const listMenuHeader = [
  { title: 'Home', href: '#home' },
  { title: 'Product', href: '#product' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Contact', href: '#contact' },
];

const listProject = [
  {
    id: 1,
    background: Forest,
    name: 'Tax Management',
    title: 'Life Tips From Top Ten Adventure Travelers',
  },
  {
    id: 2,
    background: SkyStar,
    name: 'Tax Management',
    title: 'Life Tips From Top Ten Adventure Travelers',
  },
  {
    id: 3,
    background: Economy,
    name: 'Tax Management',
    title: 'Life Tips From Top Ten Adventure Travelers',
  },
  {
    id: 4,
    background: Chart,
    name: 'Tax Management',
    title: 'Life Tips From Top Ten Adventure Travelers',
  },
];

const listItem = [
  {
    primaryImage: CircleCheckFill,
    title: 'Unlimited product updates',
  },
  {
    primaryImage: CircleCheckFill,
    title: 'Unlimited product updates',
  },
  {
    primaryImage: CircleCheckFill,
    title: 'Unlimited product updates',
  },
  {
    primaryImage: CircleCheck,
    title: '1GB  Cloud storage',
  },
  {
    primaryImage: CircleCheck,
    title: 'Email and community support',
  },
];

const listPricing = [
  {
    id: 1,
    title: 'FREE',
    name: 'Organize across all apps by hand',
    price: '0',
    listItem: listItem,
  },
  {
    id: 2,
    title: 'SILVER',
    name: 'Organize across all apps by hand',
    status: 'new' as 'new',
    price: '9.99',
    listItem: listItem,
  },
  {
    id: 3,
    title: 'GOLD',
    name: 'Organize across all apps by hand',
    price: '19.99',
    listItem: listItem,
  },
];

const listTestimonial = [
  {
    id: 1,
    image: AvatarWoman,
    rate: 4,
    description:
      'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed anew view of time first and then space.',
    job: 'Designer',
    name: 'Regina Miles',
  },
  {
    id: 2,
    image: AvatarMan,
    rate: 4,
    description:
      'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed anew view of time first and then space.',
    job: 'Designer',
    name: 'Regina Miles',
  },
];

export {
  listCity,
  listTime,
  listStars,
  listFeature,
  listProject,
  listItem,
  listTestimonial,
  listPricing,
  listMenuFooter,
  listMenuHeader,
};

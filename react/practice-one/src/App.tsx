import './App.css';
import { Button } from 'components/common/Button';
import CircleCheckFill from 'assets/icons/circle-check-fill.svg';
import CircleCheck from 'assets/icons/circle-check.svg';
import chartImg from 'assets/images/chart.png';
import AvatarWoman from 'assets/images/avatar-woman.png';
import { Typography } from 'components/common/Typography';
import { Image } from 'components/common/Image';
import { ListItem } from 'components/common/ListItem';
import { List } from 'components/common/List';
import { Input } from 'components/common/Input';
import { Textarea } from 'components/common/Textarea';
import { Select } from 'components/common/Select';
import { TestimonialCard } from 'components/common/TestimonialCard';
import { PricingCard } from 'components/common/PricingCard';
import { ProjectCard } from 'components/common/ProjectCard';
import { FeatureCard } from 'components/common/FeatureCard';
import { Logo } from 'components/common/Logo';
import logo from 'assets/icons/logo.svg';
import { Form } from 'components/common/Form';

function App() {
  const listItem = [
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheck,
      title: '1GB  Cloud storage',
    },
    {
      image: CircleCheck,
      title: 'Email and community support',
    },
  ];

  const listMenu = [
    { title: 'Home', href: '#home' },
    { title: 'Product', href: '#product' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Contact', href: '#contact' },
  ];

  const listItem = [
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheck,
      title: '1GB  Cloud storage',
    },
    {
      image: CircleCheck,
      title: 'Email and community support',
    },
  ];

  const listMenu = [
    { title: 'Home', href: '#home' },
    { title: 'Product', href: '#product' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <div className='App'>
      <Button variant='quaternary' title='123' type='button' as='a' href='' />
      <PricingCard title='FREE' name='Organize across all apps by hand' listItem={listItem} />
      <br />
      <Form classes='form-contact' />
      <br />
      <ProjectCard
        name='Tax management'
        title='Life Tips From top Ten Adventure Travelers'
        background={chartImg}
      />
      <br />
      <TestimonialCard
        description='This proved to be 
          impossible using the 
          traditional concepts 
          of space and time. Einstein 
          developed a new view 
          of time first and then 
          space. This proved to be 
          impossible using the 
          traditional concepts 
          of space and time. Einstein 
          developed a new view 
          of time first and then space.'
        job='Designer'
        name='Regina Miles'
        image={AvatarWoman}
      />
      <List listItem={listMenu} classes='list-menu' tagName='a' />
    </div>
  );
}

export default App;

import './App.css';
import { Button } from 'components/common/Button';
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

function App() {
  return (
    <div className='App'>
      <Button />
      <Typography />
      <Image />
      <br />
      <ListItem />
      <br />
      <List />
      <br />
      <Input />
      <br />
      <br />
      <Textarea />
      <br />
      <Select />
      <br />
      <TestimonialCard />
      <br />
      <PricingCard />
      <br />
      <ProjectCard />
      <br />
      <FeatureCard />
      <br />
      <Logo logo={logo} href='#' />
    </div>
  );
}

export default App;

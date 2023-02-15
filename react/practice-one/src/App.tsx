import './App.css';
import { Button } from 'components/common/Button';
import { Typography } from 'components/common/Typography';
import { Icon } from 'components/common/Icon';
import { ListItem } from 'components/common/ListItem';
import { List } from 'components/common/List';
import { Input } from 'components/common/Input';
import { Textarea } from 'components/common/Textarea';
import { Select } from 'components/common/Select';
import { TestimonialCard } from 'components/common/TestimonialCard';

function App() {
  return (
    <div className='App'>
      <Button />
      <Typography />
      <Icon />
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
    </div>
  );
}

export default App;

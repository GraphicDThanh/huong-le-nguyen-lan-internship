import { ListItem } from '../ListItem';
import './index.css';

const List = () => {
  const listItem = Array(5).fill(0);

  return (
    <div className='list list-column'>
      <p className='title'>Get In Touch</p>
      {listItem.map(() => (
        <ListItem />
      ))}
    </div>
  );
};

export { List };

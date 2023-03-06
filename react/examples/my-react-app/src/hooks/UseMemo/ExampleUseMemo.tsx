import { useMemo, useState } from 'react';

interface State {
  name: string;
  price: string;
}

const ExampleUseMemo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<State[]>([]);

  const total = useMemo(() => {
    const totalPrice = products.reduce((result, prod) => result + Number(prod.price), 0);

    return totalPrice;
  }, [products]);

  const handleSubmit = () => {
    setProducts([...products, { name, price }]);
  };

  return (
    <div>
      <input
        value={name}
        type='text'
        placeholder='enter name...'
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        type='text'
        placeholder='enter price...'
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type='button' onClick={handleSubmit}>
        Add
      </button>
      <br />
      <p>Total: {total}</p>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ExampleUseMemo };

const ComponentsTest = () => {
  const data = [
    { item: 'a', price: 12 },
    { item: 'b', price: 13 },
  ];

  return (
    <div>
      {data.map((item) => (
        <>
          <p>{item.item}</p> <p>{item}</p>
        </>
      ))}
    </div>
  );
};

export default ComponentsTest;

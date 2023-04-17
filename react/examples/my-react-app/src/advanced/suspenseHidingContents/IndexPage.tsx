export default function IndexPage({ navigate }: { navigate: (link: string) => void }) {
  const handleClick = () => {
    navigate('/the-beatles');
  };

  return (
    <button type='button' onClick={handleClick}>
      Open The Beatles artist page
    </button>
  );
}

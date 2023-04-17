const ChildrenAlbum = ({ id, year, title }: { id: string; year: number; title: string }) => (
  <li key={id}>
    {title} ({year})
  </li>
);

export default ChildrenAlbum;

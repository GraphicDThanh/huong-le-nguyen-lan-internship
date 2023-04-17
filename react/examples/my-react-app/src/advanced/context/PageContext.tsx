import { ReactNode } from 'react';
import Heading from './Heading';
import Section from './Section';

function Post({ title, body }: { title: string; body: ReactNode }) {
  return (
    <Section isFancy>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title='Flavors of Lisbon' body='...those pastéis de nata!' />
      <Post title='Buenos Aires in the rhythm of tango' body='I loved it!' />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title='Hello traveller!' body='Read about my adventures.' />
      <AllPosts />
    </Section>
  );
}

import configPromise from '@payload-config';
import { getPayload } from 'payload';

// Next.js Server Component — async because we await data before render
const Home = async () => {
  const payload = await getPayload({
    // if your configPromise is a promise, await it; otherwise pass directly
    config: await configPromise,
  });

  const data = await payload.find({
    collection: "categories"
  })

  // You can now query collections, globals, etc.
  // const posts = await payload.find({ collection: 'posts' });

  return (
    <div className="p-4">
      {JSON.stringify(data, null)}
    </div>
  );
};

export default Home;

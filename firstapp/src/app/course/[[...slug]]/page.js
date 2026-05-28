const Page = async ({ params }) => {
  const { slug } = await params;

  const slugPath = slug?.join('') || 'home';

  return (
    <div>
      <h1>This is course: {slugPath}</h1>
    </div>
  );
};

export default Page;
import { fetchUpdateList } from '@/utils/fetchList';

import Button from '@/components/atoms/Button';
import List from '@/components/molecules/List';

const Page = async () => {
  const listInitial = await fetchUpdateList();
  console.log('fetch server side: ', listInitial);

  return (
    <div>
      <h1>Server Side Component</h1>
      <Button />
      <List listInitial={listInitial} />
    </div>
  );
};

export default Page;

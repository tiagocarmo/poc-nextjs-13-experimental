'use client';

import { useState } from 'react';
import ButtonCallback from '@/components/atoms/ButtonCallback';
import { fetchUpdateList } from '@/utils/fetchList';

const List = ({ listInitial = [] }) => {
  const [listItens, setListItens] = useState(listInitial);
  const [offset, setOffset] = useState(listInitial.length);
  const [loading, setLoading] = useState(false);

  const handleCallback = async () => {
    setLoading(true);
    const updatedList = await fetchUpdateList(offset);
    console.log('fetch client side: ', updatedList);

    if (listItens !== updatedList) {
      setListItens(updatedList);
      setOffset(offset + 20);
    }
    setLoading(false);
  };

  return (
    <>
      <ul>
        {listItens.length > 0 && listItens.map((item, key) => (
          <li key={`${item.name}-${key}`}>
            {item.name}
          </li>
        ))}
      </ul>
      <ButtonCallback
        fnCallback={handleCallback}
        loading={loading}
      />
    </>
  );
}

export default List;

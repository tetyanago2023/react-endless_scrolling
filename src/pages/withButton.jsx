import { useData } from '../useData';
import Card from '../card';
import { useState } from 'react';
import { useEffect } from 'react';

const WithButton = () => {
    const [page, setPage] = useState(1);
    const {items, isLoading, isError, fetchMoreData} = useData(page);

    const onLoadMoreClick = () => {
        setPage(page + 1)
    }

    useEffect(() => {fetchMoreData(page)}, [page])

    return (
        <>
            {items.map((item) => {
                return <Card key={item.id} {...item}/>
            })}
            {isLoading ? <h2>Loading...</h2> : null}
            {isError ? <h2>Error during getting data</h2> : null}
            <button onClick={onLoadMoreClick}>Load more</button>
        </>
    )
}

export default WithButton;

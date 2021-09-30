import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import Users from '../Users';
import Loader from '../Loader';
import Msg from '../Msg';

function Records() {
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(2);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`);
            const data = await res.json();
            setItems(data);
        }
        getData();
    }, [])

    const fetchMoreDetails = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`);
        const data = await res.json();
        return data;
    }

    const fetchData = async () => {
        const moreData = await fetchMoreDetails();
        setItems([...items, ...moreData]);
        if (moreData.length === 0 || moreData.length < 20) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={<Msg />}
        >
                <div className="records">
                <div className="row m-2">
                    {items.map((item) => {
                        return <Users key={item.id} item={item} />;
                    })}
                </div>
                </div>
        </InfiniteScroll>
    )
}

export default Records;
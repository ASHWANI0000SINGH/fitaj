import React from "react";
import { useQuery } from "react-query";

const Dummy = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json()
      ),
  });
  console.log("data", data);
  return (
    <>
      <h1> React Query</h1>
      {isPending && <span>Loading..</span>}
      {error && <span>Something went wrong</span>}
      <>
        {data?.map((post) => {
          return (
            <>
              <div>
                title: {post?.name}
                title: {post?.email}
              </div>
            </>
          );
        })}
      </>
    </>
  );
};

export default Dummy;

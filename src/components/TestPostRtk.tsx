import React from "react";
import {
  useGetPostsQuery,
  useDropPostMutation,
  useAddPostMutation,
} from "../service/postApi";

const TestPostRtk = () => {
  const { data, isLoading, error } = useGetPostsQuery();
  const [dropPost, { isLoading: dropLoading }] = useDropPostMutation();
  const [addPost, { isLoading: addLoading }] = useAddPostMutation();
  console.log(data);

  if (isLoading) return <>Loading . . .</>;
  if (error) return <>{error}</>;
  if (dropLoading) return <>Loading . . .</>;
  if (addLoading) return <>Loading . . .</>;

  return (
    <React.Fragment>
      <form onSubmit={() => addPost({ title: "test title", userId: 10 })}>
        <button type="submit">Add</button>
      </form>
      <section>
        {data &&
          Array.isArray(data.posts) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data?.posts?.map((post: any) => {
            return (
              <div
                onClick={() => dropPost(post.id)}
                key={post.id}
                className="p-3 bg-red-50 rounded"
              >
                {post.title}
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default TestPostRtk;

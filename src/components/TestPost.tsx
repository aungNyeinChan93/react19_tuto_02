import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import type { AppDispatch, RootState } from "../store";
import { fetchPosts } from "../features/post/postSlice";
import PostCard from "./PostCard";

const TestPost = () => {
  const { posts, error, isLoading } = useAppSelector(
    (store: RootState) => store.posts
  );

  const appDispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchPosts());
  }, [appDispatch]);

  // console.log(posts);

  if (isLoading) return <>Loading . . .</>;

  if (error) return <>{error}</>;

  return (
    <React.Fragment>
      <section>
        <div className="flex flex-col space-y-10 justify-center items-center my-10">
          <h3 className="text-2xl font-semibold font-mono ">Posts</h3>
          <div className="grid sm:grid-cols-4 gap-6 mx-10">
            {posts &&
              Array.isArray(posts) &&
              posts?.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestPost;

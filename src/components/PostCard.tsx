import React from "react";
import type { Post } from "../features/post/postSlice";
import { removePost } from "../features/post/postSlice";
import { useAppDispatch } from "../hook";
import type { AppDispatch } from "../store";

interface PosdCardProps {
  post: Post;
}
const PostCard: React.FC<PosdCardProps> = ({
  post: { id, title, body, reactions, views },
}) => {
  const appDispatch: AppDispatch = useAppDispatch();
  return (
    <React.Fragment>
      <section className="">
        <a
          href={`${id}`}
          className="block bg-gradient-to-r from-green-200 via-indigo-100 to-yellow-200 rounded-md border border-gray-300 hover:border-red-500 p-4 shadow-sm sm:p-6 h-[250px] overflow-hidden"
        >
          <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
            <div className="mt-4 sm:mt-0">
              <h3 className="text-lg font-medium text-pretty text-gray-900">
                {title}
              </h3>

              <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                {body}
              </p>
            </div>
          </div>

          <dl className="mt-6 flex gap-4 lg:gap-6">
            <div className="flex items-center gap-2">
              <dt className="text-gray-700">
                <span className="sr-only"> {views} </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </dt>

              <dd className="text-xs text-gray-700">31/06/2025</dd>
            </div>

            <div className="flex items-center gap-2">
              <dt className="text-gray-700">
                <span className="sr-only"> Reading time </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </dt>

              <dd className="text-xs text-gray-700">{reactions.dislikes}</dd>
              <dd className="text-xs text-gray-700">{reactions.likes}</dd>

              <button
                type="button"
                onClick={() => appDispatch(removePost(Number(id)))}
              >
                Delete
              </button>
            </div>
          </dl>
        </a>
      </section>
    </React.Fragment>
  );
};

export default PostCard;

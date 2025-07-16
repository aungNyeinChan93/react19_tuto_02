"use client";

import { Suspense, use } from "react";
const TestUse = () => {
  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const { users } = await response.json();
    return users;
  };
  const users = use(fetchUsers());
  console.log(users);

  return (
    <Suspense
      fallback={<h1 className="text-red-400 text-2xl">Loading . . .</h1>}
    >
      <section>
        {users &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          users?.map((user: any) => {
            return <div key={user.id}>{user.firstName}</div>;
          })}
      </section>
    </Suspense>
  );
};

export default TestUse;

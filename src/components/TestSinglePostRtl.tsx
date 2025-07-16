import React from "react";
import { useGetPostQuery } from "../service/postApi";

const TestSinglePostRtk = () => {
  const { data, isLoading } = useGetPostQuery("4");
  console.log(data);

  if (isLoading) return <>Loading . . . </>;
  return (
    <React.Fragment>
      <section>{data?.title}</section>
    </React.Fragment>
  );
};

export default TestSinglePostRtk;

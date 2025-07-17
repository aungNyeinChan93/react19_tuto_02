/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetQuotesQuery } from "../service/quoteApi";

const TestQuotertk = () => {
  const { data, isLoading } = useGetQuotesQuery();
  //   console.log(data);

  if (isLoading) return <>Loading. . .</>;
  return (
    <React.Fragment>
      <section>
        {data.quotes?.map((quote: any) => (
          <div key={quote.id}>{quote.quote}</div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default TestQuotertk;

import React from "react";
import Image from "./share/Image";
import Link from "./share/Link";
import Paragrap from "./share/Paragrap";

const TestDesign = () => {
  return (
    <React.Fragment>
      <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <Image
          src={`https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
        />
        <div className="bg-white p-4 sm:p-6">
          <Link href="#">How to position your furniture for positivity</Link>
          <Paragrap>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </Paragrap>
        </div>
      </article>
    </React.Fragment>
  );
};

export default TestDesign;

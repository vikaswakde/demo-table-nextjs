import React from "react";
import { PeopleDataTable } from "./data-table";
import { columns } from "./columns";
import { people } from "@/people";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto py-10">
      <PeopleDataTable columns={columns} data={people} />
    </div>
  );
};

export default page;

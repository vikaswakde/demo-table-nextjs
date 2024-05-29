import { Button } from "@/components/ui/button";
import Image from "next/image";
import PeopleDataTable from "./people/data-table";
import { columns } from "./people/columns";
import { people } from "@/people";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <PeopleDataTable columns={columns} data={people} />
    </div>
  );
}

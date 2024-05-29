import { people } from "@/people";
import xlsx, { IJsonSheet } from "json-as-xlsx";

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: "Persons",
      columns: [
        { label: "Person ID", value: "id" },
        { label: "First Name", value: "first_name" },
        { label: "Last Name", value: "last_name" },
        { label: "Email", value: "email" },
        { label: "Gender", value: "gender" },
        {
          label: "Date of Birth",
          value: (row) => {
            // @ts-ignore
            const date_of_birth = row?.getValue("date_of_birth") ?? "";
            const formatted = new Date(
              date_of_birth as string
            ).toLocaleDateString();
            return formatted;
          },
          // ({ row }) => {
          //   const date_of_birth = row.getValue("date_of_birth")
          //   const formatted = new Date(date_of_birth as string).toLocaleDateString();
          //   return formatted;
          // },
        },
      ],
      content: people,
    },
  ];
  let settings = {
    fileName: "People Excel",
  };
  xlsx(columns, settings);
}

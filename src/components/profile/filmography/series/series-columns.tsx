import { IFilmography } from "@/data/filmography.type";
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<IFilmography>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
]
import { prisma } from "@/lib/prisma";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { revalidatePath } from "next/cache";

async function setUserAsAdmin(id: string) {
  "use server";
  await prisma.user.update({
    where: { id },
    data: { role: "admin", isAdmin: true },
  });
  revalidatePath("/admin/users");
}

export default async function UsersAdminPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.isAdmin ? "Yes" : "No"}</TableCell>
              <TableCell>
                {user.role !== "admin" && (
                  <form action={async () => { await setUserAsAdmin(user.id); }}>
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                      type="submit"
                    >
                      Set as admin
                    </button>
                  </form>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

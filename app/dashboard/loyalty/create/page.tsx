import Form from "@/app/ui/loyalty/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Loyalty", href: "/dashboard/loyalty" },
          {
            label: "Create loyalty program",
            href: "/dashboard/loyalty/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}

import { NavLink, useSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import QueryLink from "../../components/QueryLink";
import { getInvoices } from "../../data";
import "./styles.css";

export default function Invoices() {
  let invoices = getInvoices();

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("name") || ""}
          onChange={(event) => {
            let name = event.target.value;
            if (name) {
              setSearchParams({ name });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices.filter((invoice) => {
            let name = searchParams.get("name");
            if (!name) return true;
            let invoiceName = invoice.name.toLowerCase();
            return invoiceName.startsWith(name.toLowerCase());
          })
        .map((invoice) => (
          <QueryLink
            className={({ isActive }: any) =>
              isActive ? " dblock nav-red" : "dblock nav-blue"
            }
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </QueryLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function Userlist() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const toast = useRef(null);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/user");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/user/${id}`);
      fetchUsers();

      toast.current.show({
        severity: "success",
        summary: "Deleted",
        detail: "User deleted successfully",
        life: 2500,
      });
    } catch (error) {
      console.error(error);

      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Delete failed",
        life: 2500,
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const actionTemplate = (rowdata) => (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-warning mr-2"
        onClick={() => navigate(`/edit/${rowdata.id}`)}
      />

      <Button
        icon="pi pi-trash"
        className="p-button-sm p-button-danger mr-2"
        onClick={() => deleteUser(rowdata.id)}
      />
    </>
  );

  return (
    <div className="p-4">
      <Toast ref={toast} />

      <div className="flex justify-content-between mb-2">
        <h1>User crud</h1>

        <Button
          label="Add User"
          icon="pi pi-plus"
          size="small"
          onClick={() => navigate("/add")}
        />
      </div>

      <DataTable
        value={users}
        stripedRows
        paginator
        rows={5}
        size="small"
        filterDisplay="row"
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search"
          sortable
        />

        <Column
          field="username"
          header="Username"
          filter
          filterPlaceholder="Search"
          sortable
        />

        <Column
          field="email"
          header="Email"
          filter
          filterPlaceholder="Search"
          sortable
        />

        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search"
          sortable
        />

        <Column
          header="Action"
          body={actionTemplate}
          style={{ width: "13%" }}
        />
      </DataTable>
    </div>
  );
}
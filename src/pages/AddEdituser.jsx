import { useNavigate } from "react-router-dom";
import api from "../api/axios";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userSchema } from "../validation/userSchema";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function AddEdituser() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      age: null,
    },
  });

  const onSubmit = async (data) => {
    await api.post("/user", data);
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>Add User</h2>

      <form className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
        <div className="field" style={{ marginBottom: "14px" }}>
          <label>Name</label>
          <InputText {...register("name")} />
          <small className="p-error">{errors.name?.message}</small>
        </div>

        <div className="field" style={{ marginBottom: "14px" }}>
          <label>Username</label>
          <InputText {...register("username")} />
          <small className="p-error">{errors.username?.message}</small>
        </div>

        <div className="field" style={{ marginBottom: "14px" }}>
          <label>Email</label>
          <InputText {...register("email")} />
          <small className="p-error">{errors.email?.message}</small>
        </div>

        <div className="field" style={{ marginBottom: "14px" }}>
          <label>Age</label>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <InputNumber
                value={field.value}
                onValueChange={(e) => field.onChange(e.value)}
              />
            )}
          />
          <small className="p-error">{errors.age?.message}</small>
        </div>

        <Button label="Save" icon="pi pi-check" type="submit" />
      </form>
    </div>
  );
}
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addNewCompany } from "@/api/apiCompanies";
import { BarLoader } from "react-spinners";
import { useEffect } from "react";
import useFetch from "@/hooks/Usefetch";

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
  logo: z
    .any()
    .refine(
      (file) =>
        file &&
        file.length > 0 &&
        (file[0].type === "image/png" || file[0].type === "image/jpeg"),
      {
        message: "Only PNG or JPEG images are allowed",
      }
    ),
});

const AddCompanyDrawer = ({ fetchCompanies }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingAddCompany,
    error: errorAddCompany,
    data: dataAddCompany,
    fn: fnAddCompany,
  } = useFetch(addNewCompany);

  const onSubmit = async (data) => {
    fnAddCompany({
      ...data,
      logo: data.logo[0], // Make sure file is an array and has an item
    });
  };

  useEffect(() => {
    if (dataAddCompany?.length > 0) {
      fetchCompanies();
    }
  }, [loadingAddCompany, dataAddCompany]);

  return (
    <Drawer>
      <DrawerTrigger>
        <Button type="button" size="sm" variant="secondary">
          Add Company
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add a New Company</DrawerTitle>
        </DrawerHeader>

        <form className="flex gap-2 p-4 pb-0" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Company name" {...register("name")} />
          <Input
            type="file"
            accept="image/*"
            {...register("logo")}
            className="file:text-gray-500"
          />
          <Button type="submit" variant="destructive" className="w-40">
            Add
          </Button>
        </form>

        <DrawerFooter>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}
          {errorAddCompany?.message && (
            <p className="text-red-500">{errorAddCompany?.message}</p>
          )}
          {loadingAddCompany && <BarLoader width={"100%"} color="#36d7b7" />}
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddCompanyDrawer;

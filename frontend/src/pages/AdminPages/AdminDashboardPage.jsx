import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

import { Box, Toolbar } from "@mui/material";
import { BackdropPage } from "../../components/sharedComponents/BackdropPage";
import { SchoolsTable } from "../../components/adminComponents/SchoolsTable";
import { OrganizationsTable } from "../../components/adminComponents/OrganizationsTable";

export const AdminDashboardPage = () => {
  const [schools, setSchools] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/admin/schools")
      .then((res) => {
        setSchools(res.data);
      })
      .catch((error) => console.log(error));

    axiosInstance
      .get("/admin/organizations")
      .then((res) => setOrganizations(res.data))
      .catch((error) => console.log(error));
  }, []);

  if (!schools && !organizations) return <BackdropPage />;

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ m: 4 }}>
        <Box>
          <SchoolsTable schools={schools} />
        </Box>

        <Box sx={{ mt: 6 }}>
          <OrganizationsTable organizations={organizations} />
        </Box>
      </Box>
    </Box>
  );
};

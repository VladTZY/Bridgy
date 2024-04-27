import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import {
  Box,
  Toolbar,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { TextInput } from "../../components/sharedComponents/TextInput";
import { MultilineInput } from "../../components/sharedComponents/MultilineInput";
import { IconInput } from "../../components/sharedComponents/IconInput";
import { DateInput } from "../../components/sharedComponents/DateInput";

import { CreationModal } from "../../components/sharedComponents/CreationModal";

import TimelapseIcon from "@mui/icons-material/Timelapse";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PublicIcon from "@mui/icons-material/Public";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MapIcon from "@mui/icons-material/Map";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const locationsInfo = [
  {
    id: "country",
    name: "Country",
    icon: PublicIcon,
  },
  {
    id: "city",
    name: "City",
    icon: ApartmentIcon,
  },
  {
    id: "address",
    name: "Address",
    icon: MapIcon,
  },
];

const categories = [
  "No category",
  "Advocay & Human Rights",
  "Animlas",
  "Arts & Culture",
  "Board Development",
  "Children & Youth",
  "Community",
  "Computers & Tehnology",
  "Crisis Support",
  "Disaster Relief",
  "Education & Literacy",
  "Emergency & Safety",
  "Employment",
  "Environment",
  "Faith-Based",
  "Health & Medicine",
  "Homeless & Housing",
  "Hunger",
  "Immigrants & Refugees",
  "International",
  "Justice & Legal",
  "LGBTQ+",
  "Media & Broadcasting",
  "People with Disabilities",
  "Politics",
  "Race & Ethnicity",
  "Seniors",
  "Sports & Recreation",
  "Veterans & Military Families",
  "Women",
];

const errorFields = [
  "name",
  "supervisorContact",
  "description",
  "category",
  "hours",
  "datetime",
  "capacity",
  "country",
  "city",
  "address",
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const PostOpportunitiesPage = () => {
  const [creationModal, setCreationModal] = useState(false);
  const [nav, setNav] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    supervisorContact: "",
    description: "",
    category: "No category",
    isRemote: false,
    file: null,
    hours: 0,
    datetime: dayjs(),
    capacity: 0,
    country: "",
    city: "",
    address: "",
    videoUrl: "",
  });
  const [formError, setFormError] = useState({
    name: false,
    supervisorContact: false,
    description: false,
    category: false,
    hours: false,
    datetime: false,
    capacity: false,
    country: false,
    city: false,
    address: false,
  });
  const [colors, setColors] = useState({
    color: "blue.light",
    hoverColor: "blue.main",
  });

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setFormError({ ...formError, [e.target.id]: false });
  };

  const updateUrl = (e) => {
    setFormData({ ...formData, videoUrl: e.target.value });
  };

  const addFile = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
    setColors({ color: "green.light", hoverColor: "green.main" });
  };

  const handleSubmit = async () => {
    let error = false;

    for (let i = 0; i < errorFields.length; i++) {
      let field = errorFields[i];

      if (
        !(
          formData.isRemote &&
          (field == "country" || field == "city" || field == "address")
        )
      ) {
        if (field == "description" && formData[field].length > 2000) {
          setFormError((prev) => ({ ...prev, [field]: true }));
          error = true;
        }

        if (formData[field] == "" || formData[field] == 0) {
          setFormError((prev) => ({ ...prev, [field]: true }));
          error = true;
        } else {
          setFormError((prev) => ({ ...prev, [field]: false }));
        }
      }
    }

    if (error) return;

    let formSend = new FormData();

    for (const key in formData)
      if (key != "file" && key != "isRemote" && key != "datetime")
        formSend.append(key, formData[key]);
    formSend.append("datetime", formData.datetime.$d);
    formSend.append("remote", formData.isRemote);
    formSend.append("photoUrl", formData.file);

    console.log(formSend);

    axiosInstance
      .post(`/organization/create_event`, formSend)
      .then((res) => {
        setNav(res.data.id);
        setCreationModal(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ m: 4, p: 2, bgcolor: "white.main", borderRadius: 5 }}>
        <Typography
          variant="h4"
          fontWeight="700"
          sx={{
            fontSize: {
              xs: "22px",
              lg: "26px",
              xl: "30px",
            },
          }}
        >
          Post Opportunity
        </Typography>
        <Box sx={{ mx: 2, mt: 3 }}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} lg={6}>
              <TextInput
                id="name"
                name="Mission Title"
                value={formData.name}
                error={formError.name}
                updateFormData={updateFormData}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextInput
                id="supervisorContact"
                name="Supervisor Contact"
                value={formData.supervisorContact}
                error={formError.supervisorContact}
                updateFormData={updateFormData}
              />
            </Grid>
            <Grid item xs={12}>
              <MultilineInput
                id="description"
                name="Description"
                value={formData.description}
                error={
                  formError.description || formData.description.length > 2000
                }
                updateFormData={updateFormData}
              />
              <Box
                sx={{
                  width: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography>
                  {formData.description.length} / 2000 characters
                </Typography>
              </Box>
            </Grid>

            <Grid item container xs={12} spacing={3} sx={{ mb: 2 }}>
              <Grid item xs={12} lg={4}>
                <FormControl fullWidth id="category">
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={formData.category}
                    label="Category"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      });
                      setFormError({ ...formError, category: false });
                    }}
                  >
                    {categories.map((category) => {
                      return (
                        <MenuItem id="category" key={category} value={category}>
                          {category}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextInput
                  id="videoUrl"
                  name="Video URL*"
                  value={formData.videoUrl}
                  updateFormData={updateUrl}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Typography color="gray" sx={{ textAlign: "center" }}>
                  * marks optional fields
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4}>
              <IconInput
                id="capacity"
                name="Number of Students"
                value={formData.capacity}
                error={formError.capacity}
                type="number"
                icon={<TimelapseIcon sx={{ color: "blue.main" }} />}
                updateFormData={updateFormData}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <IconInput
                id="hours"
                name="Required Hours"
                value={formData.hours}
                error={formError.hours}
                type="number"
                icon={<PeopleAltIcon sx={{ color: "blue.main" }} />}
                updateFormData={updateFormData}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <DateInput
                id="datetime"
                name="Date and Time"
                value={formData.datetime}
                error={formError.datetime}
                updateFormData={updateFormData}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isRemote}
                    onChange={() =>
                      setFormData({ ...formData, isRemote: !formData.isRemote })
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "blue.main",
                      },
                    }}
                  />
                }
                label="Is this event remote?"
              />
            </Grid>
            {!formData.isRemote && (
              <Grid item container direction="row" spacing={3}>
                {locationsInfo.map((info) => {
                  return (
                    <Grid item xs={12} lg={4} key={info.id}>
                      <IconInput
                        id={info.id}
                        name={info.name}
                        value={formData[info.id]}
                        error={formError[info.id]}
                        type="text"
                        icon={<info.icon sx={{ color: "blue.main" }} />}
                        updateFormData={updateFormData}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Grid>
        </Box>
        <Stack sx={{ mx: 2, mt: 4 }} direction={{ xs: "column", md: "row" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              component="label"
              variant="contained"
              sx={{
                bgcolor: colors.color,
                color: "blue.contrastText",
                px: 4,
                py: 2,
                fontSize: "18px",
                borderRadius: 8,
                textTransform: "none",
                ":hover": {
                  bgcolor: colors.hoverColor,
                },
              }}
              startIcon={<CloudUploadIcon />}
            >
              Upload Cover Image*
              <VisuallyHiddenInput type="file" onChange={addFile} />
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "blue.light",
                color: "blue.contrastText",
                px: 4,
                py: 2,
                fontSize: "18px",
                borderRadius: 8,
                textTransform: "none",
                ":hover": {
                  bgcolor: "blue.main",
                },
              }}
              onClick={handleSubmit}
            >
              Create Opportunity
            </Button>
          </Box>
        </Stack>
      </Box>
      {creationModal ? (
        <CreationModal
          id={nav}
          setModal={setCreationModal}
          title={"Posting an opportunity"}
        />
      ) : null}
    </Box>
  );
};

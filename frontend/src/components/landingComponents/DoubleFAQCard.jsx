import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const DoubleFAQCard = ({ q1, q2, q3s }) => {
  return (
    <Accordion sx={{ py: 1 }} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "blue.main" }} />}
      >
        <Typography variant="h5" fontWeight="medium">
          {q1}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "blue.main" }} />}
          >
            <Typography variant="h6">{q2}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {q3s.map((q3) => {
              return (
                <Grid container direction="row">
                  <Typography fontWeight="bold" variant="h6" sx={{ mr: 1 }}>
                    {q3.title}
                  </Typography>
                  <Typography variant="h6"> {q3.text}</Typography>
                </Grid>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
};

import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import moment from 'moment-timezone';

const ContentView = ({
  title, banner, date, content, author
}) => {

  return (
    <Container>
      <Card>
        <CardMedia component="img" height="400px" sx={{ objectFit: "contain" }} src={"/" + banner} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h4" sx={{ mt: 2, px: 5 }} component="div">
            {title}
          </Typography>
          <Box px={5}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Box>
          <Box>
            {author ?
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 5
              }}>
                <Typography gutterBottom variant="body2" component="div">
                  Por:{author}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  {`${moment.utc(date).local().format("DD/MM/YYYY")}`}
                </Typography>
              </Box> :
              <Typography gutterBottom variant="body2" component="div">
                {`${moment.utc(date).local().format("DD/MM/YYYY")}`}
              </Typography>
            }
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContentView;
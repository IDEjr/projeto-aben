import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import moment from 'moment-timezone';
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styled from "@emotion/styled";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const StyledReactQuill = styled(ReactQuill)`
  .ql-snow {
    border: none;
    font-size: 18px;
  }
  .ql-video {
    width: 1010px;
    height: 500px;
  }
`;

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
            <StyledReactQuill
              value={content}
              readOnly={true}
              modules={{
                toolbar: false,
              }}
            />
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
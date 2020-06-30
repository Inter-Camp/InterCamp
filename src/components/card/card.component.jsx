import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const CardComponent = ({ id, children }) => {
  return (
    <Card className="question-text">
      <CardContent>
        <Typography
        gutterBottom
        variant="body1" 
        component="h1"
        key={id}
        >
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

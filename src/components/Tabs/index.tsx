import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "./TabelPanel";
import { VisibilityRounded, Code } from "@mui/icons-material";
import { Editor } from "../Editor";
import { Previewer } from "../Previewer";
import React from "react";

type Props = {
  content: string;
  onChangeContent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const MarkdownTabs = ({ content, onChangeContent }: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        border: "solid 1.25px rgb(0, 0, 0)",
        borderRadius: "4px",
        height: "fit-content",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            label='Edit file'
            icon={<Code />}
            iconPosition='start'
            {...a11yProps(0)}
          />
          <Tab
            label='Preview'
            icon={<VisibilityRounded />}
            iconPosition='start'
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Editor content={content} onChange={onChangeContent} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Previewer content={content} />
      </TabPanel>
    </Box>
  );
};
export default MarkdownTabs;

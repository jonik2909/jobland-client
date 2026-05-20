import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function OtherHeader() {
  const location = useLocation();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const path: string = location.pathname
    .split("/")
    .filter((path: string) => path)[0];

  useEffect(() => {
    switch (path) {
      case "jobs":
        setTitle("Find Jobs");
        setDesc("Home / Jobs");
        break;
      case "companies":
        setTitle("Companies");
        setDesc("Home / Companies");
        break;
      case "candidates":
        setTitle("Showing All Candidates");
        setDesc("Home / Candidates");
        break;
      case "community":
        setTitle("Community");
        setDesc("Home / Community");
        break;
    }
  }, [location]);

  return (
    <Stack className="other-header">
      <strong>{title}</strong>
      <span>{desc}</span>
    </Stack>
  );
}

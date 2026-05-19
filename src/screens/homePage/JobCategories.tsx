import { Box, Container, Stack } from "@mui/material";

const mockCategories = [
  {
    categoryName: "Web Development",
    categoryImage: "/icons/web-development.svg",
  },
  {
    categoryName: "Mobile Development",
    categoryImage: "/icons/mobile-development.svg",
  },
  { categoryName: "UI/UX Designer", categoryImage: "/icons/ux-design.svg" },
  { categoryName: "Data Science", categoryImage: "/icons/data-science.svg" },
  { categoryName: "DevOps", categoryImage: "/icons/devops.svg" },
  { categoryName: "Cybersecurity", categoryImage: "/icons/cyber-security.svg" },
];

export default function JobCategories() {
  return (
    <Stack className="job-category">
      <Container className="container">
        <span className="title">Popular Job Categories</span>
        <p className="desc">2020 jobs live - 293 added today.</p>
        <Stack className="wrapper">
          {mockCategories.map((category, index) => (
            <Box className="category-card" key={index}>
              <div className="icon-box">
                <img src={category.categoryImage} alt={category.categoryName} />
              </div>
              <span className="cat-title">{category.categoryName}</span>
            </Box>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}

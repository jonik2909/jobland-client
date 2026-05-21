import { Box } from "@mui/material";
import { Link } from "react-router";
import type { Member } from "../../types/member";
import { formatEnum, getImageUrl } from "../../lib/config";
import { MemberFeatured } from "../../types/enums/member.enum";

interface CompanyCardProps {
  company: Member;
}

export default function CompanyCard(props: CompanyCardProps) {
  const { company } = props;
  return (
    <Link to={`/companies/1`}>
      <Box className="company-card">
        {company.memberFeatured === MemberFeatured.YES && (
          <div className="featured">Featured</div>
        )}
        <img src={getImageUrl(company.memberImage)} alt="" className="logo" />
        <strong>{company.memberNick}</strong>

        <div className="spec-box">
          <img src="/icons/brifcase-gray.svg" alt="" />
          <span>{formatEnum(company.memberCategory) || "-"}</span>
        </div>
        <div className="spec-box">
          <img src="/icons/location.svg" alt="" />
          <span>{company.memberCountry || "-"}</span>
        </div>
        <button>Open Jobs - {company.activeJobs}</button>
      </Box>
    </Link>
  );
}

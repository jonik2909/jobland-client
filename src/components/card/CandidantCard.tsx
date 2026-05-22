import { Box } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Link } from "react-router";
import type { Member } from "../../types/member";
import { formatEnum, getImageUrl } from "../../lib/config";

interface CandidantCardProps {
  candidant: Member;
}

export default function CandidantCard(props: CandidantCardProps) {
  const { candidant } = props;
  return (
    <Link to={`/candidates/${candidant.id}`}>
      <Box className="candidant-card">
        <img
          src={getImageUrl(candidant.memberImage)}
          alt=""
          className="user-img"
        />
        <div className="main-info">
          <span className="job-title">{candidant.memberNick}</span>
          <div className="main">
            <div>
              <strong>{formatEnum(candidant.memberCategory) || "-"}</strong>
            </div>

            <div>
              <img src="/icons/job-money.svg" alt="" />
              <span>${candidant.memberHourRate}</span>
            </div>

            <div>
              <img src="/icons/location.svg" alt="" />
              <span>{candidant.memberCountry || "-"}</span>
            </div>
          </div>
          <div className="badges">
            <div>{candidant.memberType}</div>
            <div>{candidant.memberExperience || "-"}</div>
          </div>
        </div>
        <div className="view-info">
          <div className="bookmark">
            <BookmarkBorderOutlinedIcon />
          </div>
          <button>View Profile</button>
        </div>
      </Box>
    </Link>
  );
}

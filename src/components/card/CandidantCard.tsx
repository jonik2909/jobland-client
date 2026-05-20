import { Box } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Link } from 'react-router';

export default function CandidantCard() {
	return (
		<Link to={`/candidates/1`}>
			<Box className="candidant-card">
				<img src="/icons/default-user.svg" alt="" className="user-img" />
				<div className="main-info">
					<span className="job-title">Jonibek Buronov</span>
					<div className="main">
						<div>
							<strong>Software Engineering</strong>
						</div>

						<div>
							<img src="/icons/job-money.svg" alt="" />
							<span>$120</span>
						</div>

						<div>
							<img src="/icons/location.svg" alt="" />
							<span>Tashkent, Uzbekistan</span>
						</div>
					</div>
					<div className="badges">
						<div>Candidate</div>
						<div>3 y</div>
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

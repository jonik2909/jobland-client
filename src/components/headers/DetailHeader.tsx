import { Stack, Box, Container } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

interface DetailHeaderProps {
	isJob: boolean
}

export default function DetailHeader(props: DetailHeaderProps) {
	const { isJob } = props
	return (
		<Stack className="detail-header">
			{!isJob ? (
				<Container className="container">
					<img
						src="/icons/default-user.svg"
						alt=""
						className="logo"
					/>
					<Box className="main-info">
						<span className="job-title">John Doe</span>
						<div className="main">
							<div>
								<strong>Candidate</strong>
							</div>

							<div>
								<img src="/icons/clock.svg" alt="" />
								<span>October 24, 2026</span>
							</div>
							<div>
								<img src="/icons/brifcase-gray.svg" alt="" />
								<span>Development</span>
							</div>
						</div>
						<div className="badges">
							<div>USER</div>
							<div>$5000</div>
						</div>
					</Box>
					<Box className="btns">
						<button>Download CV</button>

						<div>
							<BookmarkBorderOutlinedIcon />
						</div>
					</Box>
				</Container>
			) : (
				<Container className="container">
					<img
						src="/icons/default-user.svg"
						alt=""
						className="logo"
					/>
					<Box className="main-info">
						<span className="job-title">Software Engineer</span>
						<div className="main">
							<div>
								<img src="/icons/brifcase-gray.svg" alt="" />
								<span>Development</span>
							</div>
							<div>
								<img src="/icons/location.svg" alt="" />
								<span>Tashkent</span>
							</div>
							<div>
								<img src="/icons/clock.svg" alt="" />
								<span>October 24, 2026</span>
							</div>
							<div>
								<img src="/icons/job-money.svg" alt="" />
								<span>$1000</span>
							</div>
						</div>
						<div className="badges">
							<div>Uzbekistan</div>
							<div>Full Time</div>
							<div>Middle</div>
						</div>
					</Box>
					<Box className="btns">
						<button>Apply for Job</button>

						<div>
							<BookmarkBorderOutlinedIcon />
						</div>
					</Box>
				</Container>
			)}
		</Stack>
	);
}

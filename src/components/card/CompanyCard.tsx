import { Box } from '@mui/material';
import { Link } from 'react-router';

export default function CompanyCard() {
	return (
		<Link to={`/companies/1`}>
			<Box className="company-card">
				<div className="featured">Featured</div>
				<img src="/icons/default-user.svg" alt="" className="logo" />
				<strong>TechCorp Inc.</strong>

				<div className="spec-box">
					<img src="/icons/brifcase-gray.svg" alt="" />
					<span>Development</span>
				</div>
				<div className="spec-box">
					<img src="/icons/location.svg" alt="" />
					<span>Uzbekistan</span>
				</div>
				<button>Open Jobs - 4</button>
			</Box>
		</Link>
	);
}

import { useState } from 'react';
import { Stack, Box, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckIcon from '@mui/icons-material/Check';

export default function AllApplicants() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const sortingClickHandler = (e: any) => {
		setAnchorEl(e.currentTarget);
	};

	return (
		<Stack className="tab-content">
			<span className="main-title">All Applicants</span>
			<span className="main-desc">Ready to jump back in?</span>
			<Stack className="content">
				<Stack className="wrap">
					<Box className="filter-box">
						<span className="title">Applicant</span>
						<div className="filter">
							<div className="sort-box">
								<div onClick={sortingClickHandler}>
									All <KeyboardArrowDownRoundedIcon />
								</div>
								<Menu
									anchorEl={anchorEl}
									open={!!anchorEl}
									onClose={() => setAnchorEl(null)}
									sx={{ paddingTop: '5px' }}
									slotProps={{
										list: {
											'aria-labelledby': 'basic-button',
											sx: { width: anchorEl && anchorEl.offsetWidth },
										},
									}}
								>
									<MenuItem onClick={() => setAnchorEl(null)} id="All" disableRipple>
										All
									</MenuItem>
									<MenuItem onClick={() => setAnchorEl(null)} id="STATUS" disableRipple>
										STATUS
									</MenuItem>
								</Menu>
							</div>
						</div>
					</Box>
					<Box className="accordion-box">
						<Box sx={{ marginTop: '10px' }}>
							<Stack
								direction="row"
								sx={{
									alignItems: 'center',
									backgroundColor: '#F5F7FC',
									padding: '15px 30px',
									borderRadius: '8px',
									minHeight: '70px',
									'& > span:first-of-type': {
										flexGrow: 1,
									},
									'& > span:not(:first-of-type)': {
										marginLeft: '20px',
									}
								}}
							>
								<span className="title-text" style={{ fontSize: '18px', fontWeight: 600, color: '#202124' }}>Senior React Developer</span>
								<span className="total-text" style={{ color: '#1967D2' }}>Total(s): 3</span>
								<span className="approved-text" style={{ color: '#34A853' }}>Approved: 1</span>
								<span className="rejected-text" style={{ color: '#D93025' }}>Rejected(s): 0</span>
							</Stack>
							<Box sx={{ padding: 0, marginTop: '20px' }}>
								<div className="card-wrapper">
									<div className="my-candidate-card">
										<img src="/icons/default-user.svg" alt="" className="user-img" />
										<div className="main-info">
											<span className="job-title">Jonibek</span>
											<div className="main">
												<div>
													<strong>Development</strong>
												</div>

												<div>
													<img src="/icons/job-money.svg" alt="" />
													<span>12k</span>
												</div>
											</div>
											<div className="badges">
												<div>App</div>
												<div>Design</div>
												<div>Digital</div>
											</div>
										</div>
										<div className="action-info">
											<div className="active">
												<RemoveRedEyeOutlinedIcon />
											</div>

											<div className="active">
												<CheckIcon />
											</div>
											<div>
												<HighlightOffIcon />
											</div>
										</div>
									</div>

									<div className="my-candidate-card">
										<img src="/icons/default-user.svg" alt="" className="user-img" />
										<div className="main-info">
											<span className="job-title">Alex</span>
											<div className="main">
												<div>
													<strong>Design</strong>
												</div>

												<div>
													<img src="/icons/job-money.svg" alt="" />
													<span>8k</span>
												</div>
											</div>
											<div className="badges">
												<div>UI/UX</div>
												<div>Web</div>
											</div>
										</div>
										<div className="action-info">
											<div>
												<RemoveRedEyeOutlinedIcon />
											</div>

											<div>
												<CheckIcon />
											</div>
											<div>
												<HighlightOffIcon />
											</div>
										</div>
									</div>
								</div>
							</Box>
						</Box>
					</Box>
				</Stack>
			</Stack>
		</Stack>
	);
}

import { Stack, Box, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from 'react';

export default function MyBackground() {
	const [open, setOpen] = useState(false);

	const dialogOpenHandler = () => {
		setOpen(true);
	};

	const dialogCloseHandler = () => {
		setOpen(false);
	};

	return (
		<Stack className="tab-content">
			<span className="main-title">My Resume</span>
			<span className="main-desc">Ready to jump back in?</span>
			<Stack className="content">
				<Stack>
					<Stack className="wrap">
						<Box className="resume-info-box">
							<div className="top-content">
								<span>Education</span>
								<div>
									<IconButton onClick={() => dialogOpenHandler()}>
										<AddIcon />
									</IconButton>
									Add Education
								</div>
							</div>
							<div className="bott-content">
								<div className="experience-box">
									<div className="left-box">
										<div className="order-number red">1</div>
										<div className="line red"></div>
									</div>
									<div className="right-box">
										<div className="company-box">
											<div className="company-info">
												<strong>Harvard University</strong>
											</div>
											<div className="year red">2016 - 2020</div>
											<div className="resume-action-box">
												<div>
													<EditOutlinedIcon />
												</div>
												<div>
													<DeleteOutlineOutlinedIcon />
												</div>
											</div>
										</div>
										<p style={{ whiteSpace: 'pre-line' }}>Bachelor's degree in Computer Science.</p>
									</div>
								</div>
								<div className="experience-box">
									<div className="left-box">
										<div className="order-number red">2</div>
									</div>
									<div className="right-box">
										<div className="company-box">
											<div className="company-info">
												<strong>Stanford University</strong>
											</div>
											<div className="year red">2020 - 2022</div>
											<div className="resume-action-box">
												<div>
													<EditOutlinedIcon />
												</div>
												<div>
													<DeleteOutlineOutlinedIcon />
												</div>
											</div>
										</div>
										<p style={{ whiteSpace: 'pre-line' }}>Master's degree in Software Engineering.</p>
									</div>
								</div>
							</div>
						</Box>

						<Box className="resume-info-box">
							<div className="top-content">
								<span>Work & Experience</span>
								<div>
									<IconButton onClick={() => dialogOpenHandler()}>
										<AddIcon />
									</IconButton>
									Add Work
								</div>
							</div>
							<div className="bott-content">
								<div className="experience-box">
									<div className="left-box">
										<div className="order-number blue">1</div>
									</div>
									<div className="right-box">
										<div className="company-box">
											<div className="company-info">
												<strong>Google</strong>
											</div>
											<div className="year blue">2022 - 2026</div>
											<div className="resume-action-box">
												<div>
													<EditOutlinedIcon />
												</div>
												<div>
													<DeleteOutlineOutlinedIcon />
												</div>
											</div>
										</div>
										<p style={{ whiteSpace: 'pre-line' }}>Senior Software Engineer.</p>
									</div>
								</div>
							</div>
						</Box>

						<Box className="resume-info-box">
							<div className="top-content">
								<span>Awards</span>
								<div>
									<IconButton onClick={() => dialogOpenHandler()}>
										<AddIcon />
									</IconButton>
									Add Awards
								</div>
							</div>
							<div className="bott-content">
								<div className="experience-box">
									<div className="left-box">
										<div className="order-number yellow">1</div>
									</div>
									<div className="right-box">
										<div className="company-box">
											<div className="company-info">
												<strong>Best Developer Award</strong>
											</div>
											<div className="year yellow">2024 - 2024</div>
											<div className="resume-action-box">
												<div>
													<EditOutlinedIcon />
												</div>
												<div>
													<DeleteOutlineOutlinedIcon />
												</div>
											</div>
										</div>
										<p style={{ whiteSpace: 'pre-line' }}>Awarded for the best performance in 2024.</p>
									</div>
								</div>
							</div>
						</Box>

						{/* DIALOG START */}
						<Dialog open={open} onClose={dialogCloseHandler} fullWidth={true} maxWidth={'sm'}>
							<DialogTitle>Create Or Edit</DialogTitle>
							<DialogContent>
								<DialogContentText>
									<div className="dialog-box">
										<TextField
											fullWidth
											id="standard-basic"
											label="Position"
											variant="standard" />

										<TextField
											sx={{ mt: '10px' }}
											fullWidth
											id="standard-basic"
											label="Description"
											variant="outlined"
											multiline
											rows={5} />
										<div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
											<TextField
												label="Start Date"
												type="date"
												sx={{ width: '48%' }}
												slotProps={{ inputLabel: { shrink: true } }}
											/>
											<TextField
												label="End Date"
												type="date"
												sx={{ width: '48%' }}
												slotProps={{ inputLabel: { shrink: true } }}
											/>
										</div>
									</div>
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={dialogCloseHandler}>Cancel</Button>
								<Button type="submit" >
									Save
								</Button>
							</DialogActions>
						</Dialog>
						{/* DIALOG END */}
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}

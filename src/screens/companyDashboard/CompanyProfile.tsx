import { Stack, Box, Button } from '@mui/material';

export default function CompanyProfile() {
	return (
		<Stack className="tab-content">
			<span className="main-title">Company Profile</span>
			<span className="main-desc">Ready to jump back in?</span>
			<Stack className="content">
				<Stack className="wrap">
					<span className="title">Company Profile</span>
					<Box className="avatar-box">
						<img src="/icons/default-user.svg" alt="" />
						<div>
							<button>
								<input
									type="file"
									hidden
									accept="image/jpg, image/jpeg, image/png"
								/>
								Browse Logo
							</button>
							<p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Company name</span>
							<input
								type="text"
								placeholder="Name"
							/>
						</div>
						<div className="box">
							<span>Email Address</span>
							<input
								type="text"
								placeholder="Email Address"
							/>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Phone</span>
							<input
								type="text"
								placeholder="Phone"
							/>
						</div>
						<div className="box">
							<span>Website</span>
							<input
								type="text"
								placeholder="Website"
							/>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Categories</span>
							<select
								name=""
								id=""
								defaultValue="select"
							>
								<option value="select" disabled>
									Select
								</option>
								<option value="1">Development</option>
								<option value="2">Design</option>
								<option value="3">Marketing</option>
							</select>
						</div>
						<div className="box">
							<span>Team size</span>
							<select
								name=""
								id=""
								defaultValue="select"
							>
								<option value="select" disabled>
									Select
								</option>
								<option value="1-50">1-50</option>
								<option value="50-100">50-100</option>
								<option value="100-150">100-150</option>
								<option value="150-200">150-200</option>
							</select>
						</div>
					</Box>

					<Box className="single-input">
						<div className="box">
							<span>Country</span>
							<select
								name=""
								id=""
								defaultValue="select"
							>
								<option value="select" disabled>
									Select
								</option>
								<option value="South Korea">South Korea</option>
								<option value="Uzbekistan">Uzbekistan</option>
							</select>
						</div>
					</Box>
					<Box className="single-input">
						<div className="box">
							<span>About Company</span>
							<textarea
								name=""
								id=""
								cols={30}
								rows={10}
								placeholder="write here..."
							></textarea>
						</div>
					</Box>

					<Box className="box-wrap">
						<Button variant="contained">
							save
						</Button>
					</Box>
				</Stack>
			</Stack>
		</Stack>
	);
}

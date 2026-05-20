import { Stack, Box, Button } from '@mui/material';

export default function NewJob() {
	return (
		<Stack className="tab-content">
			<span className="main-title">Post a New Job</span>
			<span className="main-desc">Ready to jump back in?</span>
			<Stack className="content">
				<Stack className="wrap">
					<span className="title">Post Job</span>

					<Box className="single-input">
						<div className="box">
							<span>Job Title</span>
							<input
								type="text"
								placeholder="Title"
							/>
						</div>
					</Box>

					<Box className="single-input">
						<div className="box">
							<span>Job Description</span>
							<textarea
								name=""
								id=""
								cols={30}
								rows={10}
								placeholder="write here..."
							></textarea>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Job Requirements</span>
							<textarea
								name=""
								id=""
								cols={30}
								rows={5}
								placeholder="write here..."
							></textarea>
						</div>
						<div className="box">
							<span>Job Expertise</span>
							<textarea
								name=""
								id=""
								cols={30}
								rows={5}
								placeholder="write here..."
							></textarea>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Offered Salary</span>
							<select
								name=""
								id=""
								defaultValue=""
							>
								<option value="" disabled>
									Select
								</option>
								<option value="50-100">50-100 K</option>
								<option value="100-150">100-150 K</option>
								<option value="150-200">150-200 K</option>
								<option value="200-300">200-300 K</option>
							</select>
						</div>
						<div className="box">
							<span>Job Type</span>
							<select
								name=""
								id=""
								defaultValue=""
							>
								<option value="" disabled>
									Select
								</option>
								<option value="FULL_TIME">FULL_TIME</option>
								<option value="PART_TIME">PART_TIME</option>
								<option value="CONTRACT">CONTRACT</option>
								<option value="INTERNSHIP">INTERNSHIP</option>
							</select>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Experience</span>
							<select
								name=""
								id=""
								defaultValue=""
							>
								<option value="" disabled>
									Select
								</option>
								<option value="1-2">1-2 y</option>
								<option value="2-4">2-4 y</option>
								<option value="5-10">5-10 y</option>
							</select>
						</div>
						<div className="box">
							<span>Level</span>
							<select
								name=""
								id=""
								defaultValue=""
							>
								<option value="" disabled>
									Select
								</option>
								<option value="JUNIOR">JUNIOR</option>
								<option value="MIDDLE">MIDDLE</option>
								<option value="SENIOR">SENIOR</option>
							</select>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Job Hour Rate</span>
							<input
								type="number"
								placeholder="Rate"
							/>
						</div>
						<div className="box">
							<span>Category</span>
							<select
								name=""
								id=""
								defaultValue=""
							>
								<option value="" disabled>
									Select
								</option>
								<option value="1">Development</option>
								<option value="2">Design</option>
								<option value="3">Marketing</option>
							</select>
						</div>
					</Box>

					<Box className="single-input">
						<div className="box">
							<span>Application Deadline Date</span>
							<input
								type="date"
								placeholder="Date"
							/>
						</div>
					</Box>

					<Box className="double-input">
						<div className="box">
							<span>Country</span>
							<select
								id=""
								name=""
								className="form-control"
								defaultValue=""
							>
								<option value="" disabled>
									Select a country
								</option>
								<option value="South Korea">South Korea</option>
								<option value="Uzbekistan">Uzbekistan</option>
							</select>
						</div>
						<div className="box">
							<span>City</span>
							<input
								type="text"
								placeholder="City"
							/>
						</div>
					</Box>
					<Box className="single-input">
						<div className="box">
							<span>Google Map Address</span>
							<input
								type="text"
								placeholder="Google Map Address"
							/>
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

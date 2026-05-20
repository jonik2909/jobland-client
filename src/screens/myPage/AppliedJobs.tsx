import { Stack, Box, Pagination, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#F5F7FC',
		color: '#1967D2',
		border: 'none',
		padding: '25px 30px',
		[`&.${tableCellClasses.head}:first-child`]: {
			borderRadius: '8px 0 0 8px',
		},
		[`&.${tableCellClasses.head}:last-child`]: {
			borderRadius: '0 8px 8px 0px',
		},
	},
}));

const StyledTableRow = styled(TableRow)(() => ({
	td: {
		padding: '30px 0px',
		border: 'none',
		borderBottom: '1px solid #ECEDF2',
		[`&:first-child, &:last-child`]: {
			padding: '30px 30px',
		},
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export default function AppliedJobs() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [filterName, setFilterName] = useState<string>('All');

	const sortingClickHandler = (e: any) => {
		setAnchorEl(e.currentTarget);
	};



	return (
		<Stack className="tab-content">
			<span className="main-title">Applied Jobs</span>
			<span className="main-desc">Ready to jump back in?</span>
			<Stack className="content">
				<Stack>
					<Stack className="wrap">
						<Box className="filter-box">
							<span className="title">Applied Jobs</span>
							<div className="filter">
								<div className="sort-box">
									<div onClick={sortingClickHandler}>
										{filterName} <KeyboardArrowDownRoundedIcon />
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
										<MenuItem id={'All'} disableRipple>
											All
										</MenuItem>
										<MenuItem disableRipple >
											STATUS
										</MenuItem>
									</Menu>
								</div>
							</div>
						</Box>
						<Box className="table-wrap">
							<TableContainer>
								<Table sx={{ minWidth: 700 }} aria-label="customized table">
									<TableHead>
										<TableRow>
											<StyledTableCell>Title</StyledTableCell>
											<StyledTableCell align="center">Date Applied</StyledTableCell>
											<StyledTableCell align="center">Status</StyledTableCell>
											<StyledTableCell align="center">Action</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<StyledTableRow>
											<StyledTableCell>
												<div className="applied-job-box">
													<img src="/icons/default-user.svg" alt="" className="job-logo" />
													<div className="my-job-title">
														<p>Senior Product Designer</p>
														<div style={{ margin: 0 }}>
															<div>
																<img src="/icons/brifcase-gray.svg" alt="" />
																<span>Design</span>
															</div>
															<div style={{ marginRight: '20px', marginLeft: '20px' }}>
																<img src="/icons/location.svg" alt="" />
																<span>Seoul, South Korea</span>
															</div>
															<div>
																<img src="/icons/job-money.svg" alt="" />
																<span>50k - 100k</span>
															</div>
														</div>
													</div>
												</div>
											</StyledTableCell>
											<StyledTableCell align="center">
												<div className="date-box">
													<p>October 25, 2026</p>
												</div>
											</StyledTableCell>
											<StyledTableCell align="center">
												<div className="job-status submitted">Submitted</div>
											</StyledTableCell>
											<StyledTableCell align="center">
												<div className="job-action-box">
													<div>
														<DeleteOutlineOutlinedIcon />
													</div>
												</div>
											</StyledTableCell>
										</StyledTableRow>
										<StyledTableRow>
											<StyledTableCell>
												<div className="applied-job-box">
													<img src="/icons/default-user.svg" alt="" className="job-logo" />
													<div className="my-job-title">
														<p>Software Engineer</p>
														<div style={{ margin: 0 }}>
															<div>
																<img src="/icons/brifcase-gray.svg" alt="" />
																<span>Development</span>
															</div>
															<div style={{ marginRight: '20px', marginLeft: '20px' }}>
																<img src="/icons/location.svg" alt="" />
																<span>Tashkent, Uzbekistan</span>
															</div>
															<div>
																<img src="/icons/job-money.svg" alt="" />
																<span>150k - 200k</span>
															</div>
														</div>
													</div>
												</div>
											</StyledTableCell>
											<StyledTableCell align="center">
												<div className="date-box">
													<p>October 20, 2026</p>
												</div>
											</StyledTableCell>
											<StyledTableCell align="center">
												<div className="job-status approved">Approved</div>
											</StyledTableCell>
											<StyledTableCell align="center">
												<div className="job-action-box">
													<div className="disable">
														<DeleteOutlineOutlinedIcon />
													</div>
												</div>
											</StyledTableCell>
										</StyledTableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
						<Stack className="pagination-box">
							<Pagination color="primary" count={5} page={1} />
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}

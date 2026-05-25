import { Stack, Box, Button } from "@mui/material";
import type { CompanyJobCreate } from "../../types/job";
import { useEffect, useState } from "react";
import { AppErrors, formatEnum, validateDataHandler } from "../../lib/config";
import companyService from "../../services/CompanyService";
import { errorToast, successToast } from "../../lib/Toastify";
import { useNavigate, useSearchParams } from "react-router";
import { JobLevel, JobType } from "../../types/enums/job.enum";
import { CategoryType, Country } from "../../types/enums/common.enum";

export default function NewJob() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const [jobInput, setJobInput] = useState<CompanyJobCreate>({
    jobTitle: "",
    jobDesc: "",
    jobType: "select" as any,
    jobRequirement: "",
    jobExpertise: "",
    jobSalary: "select" as any,
    jobLevel: "select" as any,
    jobExperience: "select" as any,
    jobHourRate: 0,
    jobDeadline: "",
    jobCategory: "select" as any,
    jobCountry: "select" as any,
    jobCity: "",
    jobAddress: "",
  });

  useEffect(() => {
    if (jobId) {
      companyService
        .getCompanyJob(jobId)
        .then((data) => {
          setJobInput({
            jobTitle: data.jobTitle,
            jobDesc: data.jobDesc,
            jobType: data.jobType,
            jobRequirement: data.jobRequirement,
            jobExpertise: data.jobExpertise,
            jobSalary: data.jobSalary,
            jobLevel: data.jobLevel,
            jobExperience: data.jobExperience,
            jobHourRate: data.jobHourRate,
            jobDeadline: data.jobDeadline,
            jobCategory: data.jobCategory,
            jobCountry: data.jobCountry,
            jobCity: data.jobCity,
            jobAddress: data.jobAddress,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [jobId]);

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setJobInput({
      ...jobInput,
      [name]: value,
    });
  };

  const createJobHandler = async () => {
    try {
      const isValid = validateDataHandler(jobInput);
      if (!isValid) throw new Error(AppErrors.INPUT_ERR);

      await companyService.createJob(jobInput);
      successToast("Job posted successfully!");

      navigate("/company/dashboard/manage-jobs");
    } catch (err) {
      console.log(err);
      errorToast(err).then();
    }
  };

  const updateJobHandler = async () => {
    try {
      const isValid = validateDataHandler(jobInput);
      if (!isValid) throw new Error(AppErrors.INPUT_ERR);

      if (jobId) {
        await companyService.updateJob({ ...jobInput, id: jobId });
        successToast("Job updated successfully!");

        navigate("/company/dashboard/manage-jobs");
      }
    } catch (err) {
      console.log(err);
      errorToast(err).then();
    }
  };

  console.log("jobId:", jobId);

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
                name="jobTitle"
                value={jobInput.jobTitle}
                onChange={inputChangeHandler}
              />
            </div>
          </Box>

          <Box className="single-input">
            <div className="box">
              <span>Job Description</span>
              <textarea
                cols={30}
                rows={10}
                placeholder="write here..."
                name="jobDesc"
                value={jobInput.jobDesc}
                onChange={inputChangeHandler}
              ></textarea>
            </div>
          </Box>

          <Box className="double-input">
            <div className="box">
              <span>Job Requirements</span>
              <textarea
                cols={30}
                rows={5}
                placeholder="write here..."
                name="jobRequirement"
                value={jobInput.jobRequirement}
                onChange={inputChangeHandler}
              ></textarea>
            </div>
            <div className="box">
              <span>Job Expertise</span>
              <textarea
                cols={30}
                rows={5}
                placeholder="write here..."
                name="jobExpertise"
                value={jobInput.jobExpertise}
                onChange={inputChangeHandler}
              ></textarea>
            </div>
          </Box>

          <Box className="double-input">
            <div className="box">
              <span>Offered Salary</span>
              <select
                name="jobSalary"
                value={jobInput.jobSalary}
                onChange={inputChangeHandler}
              >
                <option value="select" disabled>
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
                name="jobType"
                value={jobInput.jobType}
                onChange={inputChangeHandler}
              >
                <option value="select" disabled>
                  Select
                </option>
                {Object.values(JobType).map((type) => (
                  <option key={type} value={type}>
                    {formatEnum(type)}
                  </option>
                ))}
              </select>
            </div>
          </Box>

          <Box className="double-input">
            <div className="box">
              <span>Experience</span>
              <select
                name="jobExperience"
                value={jobInput.jobExperience}
                onChange={inputChangeHandler}
              >
                <option value="select" disabled>
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
                name="jobLevel"
                value={jobInput.jobLevel}
                onChange={inputChangeHandler}
              >
                <option value="select" disabled>
                  Select
                </option>
                {Object.values(JobLevel).map((level) => (
                  <option key={level} value={level}>
                    {formatEnum(level)}
                  </option>
                ))}
              </select>
            </div>
          </Box>

          <Box className="double-input">
            <div className="box">
              <span>Job Hour Rate</span>
              <input
                type="number"
                placeholder="Rate"
                name="jobHourRate"
                value={jobInput.jobHourRate}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="box">
              <span>Category</span>
              <select
                name="jobCategory"
                value={jobInput.jobCategory}
                onChange={inputChangeHandler}
              >
                <option value="select" disabled>
                  Select
                </option>
                {Object.values(CategoryType).map((category) => (
                  <option key={category} value={category}>
                    {formatEnum(category)}
                  </option>
                ))}
              </select>
            </div>
          </Box>

          <Box className="single-input">
            <div className="box">
              <span>Application Deadline Date</span>
              <input
                type="date"
                placeholder="Date"
                name="jobDeadline"
                value={jobInput.jobDeadline}
                onChange={inputChangeHandler}
              />
            </div>
          </Box>

          <Box className="double-input">
            <div className="box">
              <span>Country</span>
              <select
                className="form-control"
                name="jobCountry"
                value={jobInput.jobCountry}
                onChange={inputChangeHandler}
              >
                <option value="select" disabled>
                  Select a country
                </option>
                {Object.values(Country).map((country) => (
                  <option key={country} value={country}>
                    {formatEnum(country)}
                  </option>
                ))}
              </select>
            </div>
            <div className="box">
              <span>City</span>
              <input
                type="text"
                placeholder="City"
                name="jobCity"
                value={jobInput.jobCity}
                onChange={inputChangeHandler}
              />
            </div>
          </Box>
          <Box className="single-input">
            <div className="box">
              <span>Google Map Address</span>
              <input
                type="text"
                placeholder="Google Map Address"
                name="jobAddress"
                value={jobInput.jobAddress}
                onChange={inputChangeHandler}
              />
            </div>
          </Box>

          {jobInput.jobAddress && (
            <Box>
              <iframe
                title="test"
                src={`https://www.google.com/maps?q=${jobInput.jobAddress}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          )}
          <Box className="box-wrap">
            {jobId ? (
              <Button variant="contained" onClick={updateJobHandler}>
                update
              </Button>
            ) : (
              <Button variant="contained" onClick={createJobHandler}>
                save
              </Button>
            )}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

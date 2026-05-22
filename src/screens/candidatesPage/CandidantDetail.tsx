import { Stack, Box, Container } from "@mui/material";
import DetailHeader from "../../components/headers/DetailHeader";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectCandidantDetail, setCandidantDetail } from "./state";
import memberService from "../../services/MemberService";
import { useEffect, useMemo } from "react";
import { BackgroundType } from "../../types/enums/common.enum";
import moment from "moment";

export default function CandidantDetail() {
  const { candidantId } = useParams();
  const dispatch = useAppDispatch();
  const candidantDetail = useAppSelector(selectCandidantDetail);

  useEffect(() => {
    if (!candidantId) return;
    memberService
      .getMember(candidantId)
      .then((data) => {
        dispatch(setCandidantDetail(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const educations = useMemo(
    () =>
      candidantDetail?.membeBackgrounds?.filter(
        (bg) => bg.backType === BackgroundType.EDUCATION,
      ) ?? [],
    [candidantDetail],
  );
  const experiences = useMemo(
    () =>
      candidantDetail?.membeBackgrounds?.filter(
        (bg) => bg.backType === BackgroundType.EXPERIENCE,
      ) ?? [],
    [candidantDetail],
  );
  const awards = useMemo(
    () =>
      candidantDetail?.membeBackgrounds?.filter(
        (bg) => bg.backType === BackgroundType.AWARD,
      ) ?? [],
    [candidantDetail],
  );
  return (
    <div className="candidate-detail">
      <DetailHeader isJob={false} memberDetail={candidantDetail} />
      <Container className="container">
        <Stack className="left">
          <Box className="info">
            <span className="main-title">About Candidate</span>
            <p style={{ whiteSpace: "pre-line" }}>
              {candidantDetail?.memberDesc ?? "no Description"}
            </p>
          </Box>

          <Box className="work-experience">
            <span className="main-title">Education</span>
            {educations.length > 0 ? (
              educations.map((edu, index) => (
                <div className="experience-box" key={edu.id}>
                  <div className="left-box">
                    <div className="order-number red">{index + 1}</div>
                  </div>
                  <div className="right-box">
                    <div className="company-box">
                      <div className="company-info">
                        <strong>{edu.backName}</strong>
                      </div>
                      <div className="year red">
                        {moment(edu.backStart).format("YYYY")} -{" "}
                        {moment(edu.backEnd).format("YYYY")}
                      </div>
                    </div>
                    <p style={{ whiteSpace: "pre-line" }}>{edu.backDesc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data-text">No education info</p>
            )}
          </Box>

          <Box className="work-experience">
            <span className="main-title">Work & Experience</span>
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <div className="experience-box" key={exp.id}>
                  <div className="left-box">
                    <div className="order-number blue">{index + 1}</div>
                  </div>
                  <div className="right-box">
                    <div className="company-box">
                      <div className="company-info">
                        <strong>{exp.backName}</strong>
                      </div>
                      <div className="year blue">
                        {moment(exp.backStart).format("YYYY")} -{" "}
                        {moment(exp.backEnd).format("YYYY")}
                      </div>
                    </div>
                    <p style={{ whiteSpace: "pre-line" }}>{exp.backDesc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data-text">No experience info</p>
            )}
          </Box>

          <Box className="work-experience">
            <span className="main-title">Awards</span>
            {awards.length > 0 ? (
              awards.map((award, index) => (
                <div className="experience-box" key={award.id}>
                  <div className="left-box">
                    <div className="order-number yellow">{index + 1}</div>
                  </div>
                  <div className="right-box">
                    <div className="company-box">
                      <div className="company-info">
                        <strong>{award.backName}</strong>
                      </div>
                      <div className="year yellow">
                        {moment(award.backStart).format("YYYY")} -{" "}
                        {moment(award.backEnd).format("YYYY")}
                      </div>
                    </div>
                    <p style={{ whiteSpace: "pre-line" }}>{award.backDesc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data-text">No awards info</p>
            )}
          </Box>
        </Stack>

        <Stack className="right">
          <Stack className="experience-info">
            <div className="info-box">
              <img src="/icons/calendar-blue.svg" alt="" />
              <div>
                <strong>Experience</strong>
                <span>{candidantDetail?.memberExperience || "-"} years</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/hourglass-blue.svg" alt="" />
              <div>
                <strong>Age </strong>
                <span>{candidantDetail?.memberAge} years</span>
              </div>
            </div>

            <div className="info-box">
              <img src="/icons/salary-blue.svg" alt="" />
              <div>
                <strong>Expected Salary </strong>
                <span>${candidantDetail?.memberSalary || "-"}</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/language-blue.svg" alt="" />
              <div>
                <strong>Language </strong>
                <span>{candidantDetail?.memberLanguage ?? "-"}</span>
              </div>
            </div>
            <div className="info-box">
              <img src="/icons/view.svg" alt="" />
              <div>
                <strong>Candidate View:</strong>
                <span>{candidantDetail?.memberViews} views</span>
              </div>
            </div>

            <div className="tag-box">
              <span className="main-title">Professional Skills</span>
              <div className="wrapper">
                <div>app</div>
                <div>administrative</div>
                <div>android</div>
                <div>design</div>
              </div>
            </div>
          </Stack>
          <Stack className="contact-us">
            <span>Contact Us</span>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
            ></textarea>
            <button>Send Message</button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

import {
  Stack,
  Box,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectMyBackgrounds, setMyBackgrounds } from "./state";
import backgroundService from "../../services/BackgroundService";
import { BackgroundType } from "../../types/enums/common.enum";
import moment from "moment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import type { BackgroundInput } from "../../types/background";
import { errorToast, successToast } from "../../lib/Toastify";
import { AppErrors, validateDataHandler } from "../../lib/config";

export default function MyBackground() {
  const dispatch = useAppDispatch();
  const myBackgrounds = useAppSelector(selectMyBackgrounds);
  const [open, setOpen] = useState(false);
  const [rebuild, setRebuild] = useState<Date>(new Date());
  const [insertData, setInsertData] = useState<BackgroundInput>({
    backName: "",
    backDesc: "",
    backType: "" as any,
    backStart: "",
    backEnd: "",
  });

  useEffect(() => {
    backgroundService
      .getMyBackgrounds()
      .then((data) => {
        dispatch(setMyBackgrounds(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setMyBackgrounds([]));
      });
  }, [rebuild]);

  const dialogOpenHandler = (type: BackgroundType) => {
    setOpen(true);

    setInsertData({
      backName: "",
      backDesc: "",
      backType: type,
      backStart: "",
      backEnd: "",
    });
  };

  const dialogCloseHandler = () => {
    setOpen(false);
  };

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setInsertData({ ...insertData, [name]: value });
  };

  const createBackgroundHandler = async () => {
    try {
      const isValid = validateDataHandler(insertData);
      if (!isValid) throw new Error(AppErrors.INPUT_ERR);

      await backgroundService.createBackground(insertData);
      setRebuild(new Date());
      setOpen(false);

      successToast("Created Successfully!", 700);
    } catch (err) {
      console.log("Error, createBackgroundHandler:", err);
      errorToast(err);
    }
  };

  const educations = useMemo(
    () =>
      myBackgrounds.filter(
        (ele: any) => ele.backType === BackgroundType.EDUCATION,
      ),
    [myBackgrounds],
  );
  const experiences = useMemo(
    () =>
      myBackgrounds.filter(
        (ele: any) => ele.backType === BackgroundType.EXPERIENCE,
      ),
    [myBackgrounds],
  );
  const awards = useMemo(
    () =>
      myBackgrounds.filter((ele: any) => ele.backType === BackgroundType.AWARD),
    [myBackgrounds],
  );

  console.log("insertData:", insertData);

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
                  <IconButton
                    onClick={() => dialogOpenHandler(BackgroundType.EDUCATION)}
                  >
                    <AddIcon />
                  </IconButton>
                  Add Education
                </div>
              </div>
              <div className="bott-content">
                {educations.length > 0 ? (
                  educations.map((edu, index) => (
                    <div className="experience-box" key={edu.id}>
                      <div className="left-box">
                        <div className="order-number red">{index + 1}</div>
                        {index + 1 < educations.length ? (
                          <div className="line red"></div>
                        ) : (
                          ""
                        )}
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
                          <div className="resume-action-box">
                            <div>
                              <EditOutlinedIcon />
                            </div>
                            <div>
                              <DeleteOutlineOutlinedIcon />
                            </div>
                          </div>
                        </div>
                        <p style={{ whiteSpace: "pre-line" }}>{edu.backDesc}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-data">
                    <InfoOutlinedIcon />
                    <span>Please Add Your Education</span>
                  </div>
                )}
              </div>
            </Box>

            <Box className="resume-info-box">
              <div className="top-content">
                <span>Work & Experience</span>
                <div>
                  <IconButton
                    onClick={() => dialogOpenHandler(BackgroundType.EXPERIENCE)}
                  >
                    <AddIcon />
                  </IconButton>
                  Add Work
                </div>
              </div>
              <div className="bott-content">
                {experiences.length > 0 ? (
                  experiences.map((exp, index) => (
                    <div className="experience-box" key={exp.id}>
                      <div className="left-box">
                        <div className="order-number blue">{index + 1}</div>
                        {index + 1 < experiences.length ? (
                          <div className="line blue"></div>
                        ) : (
                          ""
                        )}
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
                          <div className="resume-action-box">
                            <div>
                              <EditOutlinedIcon />
                            </div>
                            <div>
                              <DeleteOutlineOutlinedIcon />
                            </div>
                          </div>
                        </div>
                        <p style={{ whiteSpace: "pre-line" }}>{exp.backDesc}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-data">
                    <InfoOutlinedIcon />
                    <span>Please Add Your Experience</span>
                  </div>
                )}
              </div>
            </Box>

            <Box className="resume-info-box">
              <div className="top-content">
                <span>Awards</span>
                <div>
                  <IconButton
                    onClick={() => dialogOpenHandler(BackgroundType.AWARD)}
                  >
                    <AddIcon />
                  </IconButton>
                  Add Awards
                </div>
              </div>
              <div className="bott-content">
                {awards.length > 0 ? (
                  awards.map((award, index) => (
                    <div className="experience-box" key={award.id}>
                      <div className="left-box">
                        <div className="order-number yellow">{index + 1}</div>
                        {index + 1 < awards.length ? (
                          <div className="line yellow"></div>
                        ) : (
                          ""
                        )}
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
                          <div className="resume-action-box">
                            <div>
                              <EditOutlinedIcon />
                            </div>
                            <div>
                              <DeleteOutlineOutlinedIcon />
                            </div>
                          </div>
                        </div>
                        <p style={{ whiteSpace: "pre-line" }}>
                          {award.backDesc}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-data">
                    <InfoOutlinedIcon />
                    <span>Please Add Your Award</span>
                  </div>
                )}
              </div>
            </Box>

            {/* DIALOG START */}
            <Dialog
              open={open}
              onClose={dialogCloseHandler}
              fullWidth={true}
              maxWidth={"sm"}
            >
              <DialogTitle>Create Or Edit</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div className="dialog-box">
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="Position"
                      variant="standard"
                      name="backName"
                      value={insertData.backName}
                      onChange={inputChangeHandler}
                    />

                    <TextField
                      sx={{ mt: "10px" }}
                      fullWidth
                      id="standard-basic"
                      label="Description"
                      variant="outlined"
                      multiline
                      rows={5}
                      name="backDesc"
                      value={insertData.backDesc}
                      onChange={inputChangeHandler}
                    />
                    <div
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        label="Start Date"
                        type="date"
                        sx={{ width: "48%" }}
                        slotProps={{ inputLabel: { shrink: true } }}
                        name="backStart"
                        value={insertData.backStart}
                        onChange={inputChangeHandler}
                      />
                      <TextField
                        label="End Date"
                        type="date"
                        sx={{ width: "48%" }}
                        slotProps={{ inputLabel: { shrink: true } }}
                        name="backEnd"
                        value={insertData.backEnd}
                        onChange={inputChangeHandler}
                      />
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={dialogCloseHandler}>Cancel</Button>
                <Button type="submit" onClick={createBackgroundHandler}>
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

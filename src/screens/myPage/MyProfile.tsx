import { Stack, Box, Button } from "@mui/material";
import { useRef, useState } from "react";
import { errorToast } from "../../lib/Toastify";
import { AppErrors, formatEnum, validateDataHandler } from "../../lib/config";
import { CategoryType, Country } from "../../types/enums/common.enum";
import type { MemberUpdate } from "../../types/member";
import { useGlobals } from "../../hooks/useGlobals";

export default function MyProfile() {
  const { authMember } = useGlobals();
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("/icons/default-user.svg");
  const [file, setFile] = useState<File | null>(null);
  const [updateInput, setUpdateInput] = useState<MemberUpdate>({
    memberNick: authMember?.memberNick || "",
    memberPhone: authMember?.memberPhone || "",
    memberAge: authMember?.memberAge || 0,
    memberEmail: authMember?.memberEmail || "",
    memberWebsite: authMember?.memberWebsite || "",
    memberCountry: authMember?.memberCountry || ("select" as any),
    memberDesc: authMember?.memberDesc || "",
    memberSalary: authMember?.memberSalary || "select",
    memberExperience: authMember?.memberExperience || "select",
    memberLanguage: authMember?.memberLanguage || "",
    memberHourRate: authMember?.memberHourRate || 0,
    memberCategory: authMember?.memberCategory || ("select" as any),
  });

  const imageChangeHandler = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        errorToast(AppErrors.IMG_FORMAT);
        return;
      }
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
    setUpdateInput({ ...updateInput, [name]: value });
  };

  const updateMemberHandler = async () => {
    try {
      console.log("update member process");

      if (file) {
        // image upload process
      }

      const isValid = validateDataHandler(updateInput);
      console.log("isValid:", isValid);

      // update member process
    } catch (err) {
      console.log("Error, updateMemberHandler:", err);
      errorToast(err);
    }
  };

  console.log("updateInput:", updateInput);
  return (
    <Stack className="tab-content">
      <span className="main-title">My Profile</span>
      <span className="main-desc">Ready to jump back in?</span>
      <Stack className="content">
        <Stack>
          <Stack className="wrap">
            <span className="title">My Profile</span>
            <Box className="avatar-box">
              <img src={imagePreview} alt="avatar" />
              <div>
                <button onClick={() => fileInputRef.current?.click()}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    accept="image/jpg, image/jpeg, image/png, image/webp"
                    onChange={imageChangeHandler}
                  />
                  Browse Image
                </button>
                <p>
                  Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                  files are .jpg & .png
                </p>
              </div>
            </Box>

            <Box className="double-input">
              <div className="box">
                <span>Nick</span>
                <input
                  type="text"
                  placeholder="Nick"
                  name="memberNick"
                  value={updateInput?.memberNick}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="box">
                <span>Age</span>
                <input
                  type="number"
                  placeholder="age"
                  name="memberAge"
                  value={updateInput?.memberAge}
                  onChange={inputChangeHandler}
                />
              </div>
            </Box>

            <Box className="double-input">
              <div className="box">
                <span>Phone</span>
                <input
                  type="text"
                  placeholder="Phone"
                  name="memberPhone"
                  value={updateInput?.memberPhone}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="box">
                <span>Email Address</span>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="memberEmail"
                  value={updateInput?.memberEmail}
                  onChange={inputChangeHandler}
                />
              </div>
            </Box>

            <Box className="single-input">
              <div className="box">
                <span>Country</span>
                <select
                  name="memberCountry"
                  value={updateInput.memberCountry}
                  onChange={inputChangeHandler}
                >
                  <option value="select" disabled>
                    Select
                  </option>

                  {Object.keys(Country).map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </Box>

            <Box className="double-input">
              <div className="box">
                <span>Hour Rate($)</span>
                <input
                  type="number"
                  placeholder="Hour Rate"
                  name="memberHourRate"
                  value={updateInput.memberHourRate}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="box">
                <span>Expected Salary($)</span>
                <select
                  name="memberSalary"
                  value={updateInput.memberSalary}
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
            </Box>

            <Box className="double-input">
              <div className="box">
                <span>Categories</span>
                <select
                  name="memberCategory"
                  value={updateInput.memberCategory}
                  onChange={inputChangeHandler}
                >
                  <option value="select" disabled>
                    Select
                  </option>
                  {Object.keys(CategoryType).map((category) => (
                    <option value={category}>{formatEnum(category)}</option>
                  ))}
                </select>
              </div>
              <div className="box">
                <span>Experience</span>
                <select
                  name="memberExperience"
                  value={updateInput.memberExperience}
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
            </Box>

            <Box className="single-input">
              <div className="box">
                <span>Languages</span>
                <input
                  type="text"
                  placeholder="Uzbek, Korean, English..."
                  name="memberLanguage"
                  value={updateInput.memberLanguage}
                  onChange={inputChangeHandler}
                />
              </div>
            </Box>

            <Box className="single-input">
              <div className="box">
                <span>Website</span>
                <input
                  type="text"
                  placeholder="Website"
                  name="memberWebsite"
                  value={updateInput.memberWebsite}
                  onChange={inputChangeHandler}
                />
              </div>
            </Box>
            <Box className="single-input">
              <div className="box">
                <span>About</span>
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="write here..."
                  name="memberDesc"
                  value={updateInput.memberDesc}
                  onChange={inputChangeHandler}
                ></textarea>
              </div>
            </Box>

            <Box className="box-wrap">
              <Button variant="contained" onClick={updateMemberHandler}>
                save
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

import { Stack, Box, Button } from "@mui/material";
import { useRef, useState } from "react";
import { errorToast } from "../../lib/Toastify";
import { AppErrors } from "../../lib/config";

export default function MyProfile() {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("/icons/default-user.svg");

  const imageChangeHandler = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        errorToast(AppErrors.IMG_FORMAT);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
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
                <input type="text" placeholder="Nick" />
              </div>
              <div className="box">
                <span>Age</span>
                <input type="number" placeholder="age" />
              </div>
            </Box>

            <Box className="double-input">
              <div className="box">
                <span>Phone</span>
                <input type="text" placeholder="Phone" />
              </div>
              <div className="box">
                <span>Email Address</span>
                <input type="text" placeholder="Email Address" />
              </div>
            </Box>

            <Box className="single-input">
              <div className="box">
                <span>Country</span>
                <select name="" id="">
                  <option value="select" disabled>
                    Select
                  </option>
                  <option value="Korea">Korea</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                </select>
              </div>
            </Box>

            <Box className="double-input">
              <div className="box">
                <span>Hour Rate($)</span>
                <input type="number" placeholder="Hour Rate" />
              </div>
              <div className="box">
                <span>Expected Salary($)</span>
                <select name="" id="">
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
                <select name="" id="">
                  <option value="select" disabled>
                    Select
                  </option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                </select>
              </div>
              <div className="box">
                <span>Experience</span>
                <select name="" id="">
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
                <input type="text" placeholder="Uzbek, Korean, English..." />
              </div>
            </Box>

            <Box className="single-input">
              <div className="box">
                <span>Website</span>
                <input type="text" placeholder="Website" />
              </div>
            </Box>
            <Box className="single-input">
              <div className="box">
                <span>About</span>
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
              <Button variant="contained">save</Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

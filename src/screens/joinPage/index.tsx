import { useMemo, useState } from "react";
import {
  Visibility,
  VisibilityOff,
  BusinessCenter,
  Person,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router";
import memberService from "../../services/MemberService";
import { errorToast, successToast } from "../../lib/Toastify";
import type { Member } from "../../types/member";
import { MemberType } from "../../types/enums/member.enum";
import { useGlobals } from "../../hooks/useGlobals";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function JoinPage() {
  /** INITIALIZATIONS **/
  const query = useQuery();
  const navigate = useNavigate();
  const { setAuthMember } = useGlobals();

  const [memberNick, setMemberNick] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberType, setMemberType] = useState(MemberType.CANDIDATE);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [positionChange, setPositionChange] = useState(
    query.get("register") ? "sign-up-mode" : "sign-in-mode",
  );

  /** HANDLERS **/
  const changeModeHandler = (newMode: string) => {
    if (newMode === "sign-up") {
      setPositionChange("sign-up-mode");
      navigate("/join?register=true");
    } else {
      setPositionChange("sign-in-mode");
      navigate("/join");
    }
  };

  const loginHandler = async () => {
    try {
      const result: Member = await memberService.login(
        memberNick,
        memberPassword,
      );

      setAuthMember(result);
      successToast(`Welcome ${result.memberNick}`);
      navigate("/");
    } catch (err) {
      console.log("Error, loginHandler:", err);
      errorToast(err);
    }
  };

  const signupHandler = async () => {
    try {
      const result: Member = await memberService.signup({
        memberNick,
        memberPassword,
        memberPhone,
        memberType,
      });

      setAuthMember(result);
      successToast(`Welcome ${result.memberNick}`);
      navigate("/");
    } catch (err) {
      console.log("Error, signupHandler:", err);
      errorToast(err);
    }
  };

  return (
    <div className="login-page">
      <div className={`main-container ${positionChange}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <div className="sign-in-form auth-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <input
                  name="mb_nick"
                  type="text"
                  placeholder="Username"
                  style={{
                    width: "320px",
                    paddingLeft: "10px",
                  }}
                  value={memberNick}
                  onChange={(e) => setMemberNick(e.target.value)}
                />
              </div>
              <div className="input-field">
                <input
                  name="mb_password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  style={{
                    width: "320px",
                    paddingLeft: "10px",
                  }}
                  value={memberPassword}
                  onChange={(e) => {
                    setMemberPassword(e.target.value);
                  }}
                />

                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </span>
              </div>
              <button
                className="btn"
                onClick={loginHandler}
                disabled={!memberNick || !memberPassword}
              >
                Sign in
              </button>
            </div>

            <div className="sign-up-form auth-form">
              <h2 className="title">Register </h2>
              <div className="options-box">
                <div
                  className={
                    memberType === MemberType.CANDIDATE ? "active" : ""
                  }
                  onClick={() => setMemberType(MemberType.CANDIDATE)}
                >
                  <Person /> Candidate
                </div>
                <div
                  className={memberType === MemberType.COMPANY ? "active" : ""}
                  onClick={() => setMemberType(MemberType.COMPANY)}
                >
                  <BusinessCenter />
                  Company
                </div>
              </div>
              <div className="input-field">
                <input
                  name="mb_nick"
                  type="text"
                  placeholder="Username"
                  style={{
                    width: "320px",
                    paddingLeft: "10px",
                  }}
                  value={memberNick}
                  onChange={(e) => setMemberNick(e.target.value)}
                />
              </div>
              <div className="input-field">
                <input
                  name="mb_phone"
                  placeholder="Your number"
                  type="number"
                  style={{
                    width: "360px",
                    paddingLeft: "10px",
                  }}
                  value={memberPhone}
                  onChange={(e) => setMemberPhone(e.target.value)}
                />
              </div>
              <div className="input-field">
                <input
                  name="mb_password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  style={{
                    width: "320px",
                    paddingLeft: "10px",
                  }}
                  value={memberPassword}
                  onChange={(e) => setMemberPassword(e.target.value)}
                />

                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </span>
              </div>
              <button
                className="btn"
                disabled={!memberNick || !memberPassword || !memberPhone}
                onClick={signupHandler}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Are you new here ?</h3>
              <p>For Our ViserPet You are special! We always welcome you</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => changeModeHandler("sign-up")}
              >
                Sign Up
              </button>
            </div>
            <img src="/image/login-img.png" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Do you already have an account ?</h3>
              <p>If you have an account we ask you to click Sign in button</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => changeModeHandler("sign-in")}
              >
                Sign in
              </button>
            </div>
            <img src="/image/login-img.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

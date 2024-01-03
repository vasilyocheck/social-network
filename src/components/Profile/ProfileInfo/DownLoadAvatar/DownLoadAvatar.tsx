import React, { ChangeEvent, useRef } from "react";
import downloadIcon from "../../../../assets/img/camera.svg";
import mainS from "../ProfileInfo.module.css";
import { useAppDispatch } from "app/hooks";
import { updateAvatarTC } from "redux/reducers/profile-reducer";

type DownLoadAvatarPropsType = {
  disabled: boolean;
};

export const DownLoadAvatar = ({ disabled }: DownLoadAvatarPropsType) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const selectFileHandler = () => {
    inputRef && inputRef.current?.click();
  };
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      if (file.size < 4000000) {
        postAvatar(file);
      } else {
        alert("Файл слишком большого размера");
      }
    }
  };

  const postAvatar = (file: File) => {
    const formData = new FormData();
    formData.append("myFile", file);
    dispatch(updateAvatarTC(formData));
  };

  return (
    <div className={mainS.loadingIcon}>
      <label>
        <button className={mainS.downloadIcon} onClick={selectFileHandler} disabled={disabled}>
          <img src={downloadIcon} alt="download icon" className={mainS.camIcon} />
        </button>
        <input type="file" ref={inputRef} className={mainS.downloadInput} onChange={handleUpload} accept="image/*" />
      </label>
    </div>
  );
};

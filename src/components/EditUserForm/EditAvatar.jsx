import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, selectAvatar } from "../../redux/auth/authSlice";
import { editAvatarThunk } from "../../redux/auth/operations";
import { Icon } from "../../icons/Icon";
import s from "./EditAvatar.module.css";

function EditAvatar() {
  const [image, setImage] = useState(null);
  const theme = useSelector(selectTheme);
  const avatarURL = useSelector(selectAvatar);
  const dispatch = useDispatch();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("avatarURL", file);

        const resultAction = await dispatch(editAvatarThunk(formData));

        if (editAvatarThunk.fulfilled.match(resultAction)) {
          console.log("Avatar uploaded successfully");
        } else {
          console.error("Failed to upload avatar:", resultAction.error.message);
        }
      } catch (error) {
        console.error("Error uploading avatar:", error.message);
      }
    }
  };

  const getDefaultIcon = () => {
    switch (theme) {
      case "dark":
        return <Icon size={68} id="user-2" />;
      case "colorful":
        return <Icon size={68} id="user" />;
      case "light":
      default:
        return <Icon size={68} id="user-1" />;
    }
  };

  return (
    <div className={s.avatarContainer}>
      <div className={s.imageContainer}>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="avatar"
            className={s.avatarImage}
          />
        ) : avatarURL ? (
          <img src={avatarURL} alt="avatar" className={s.avatarImage} />
        ) : (
          getDefaultIcon()
        )}
      </div>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageUpload}
        className={s.fileInput}
      />
      <label htmlFor="imageUpload" className={s.uploadButton}>
        <Icon size={24} id="plus" className={s.icon} />
      </label>
    </div>
  );
}

export default EditAvatar;

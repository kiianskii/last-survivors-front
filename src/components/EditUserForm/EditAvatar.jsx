import { useState } from "react";
import { Icon } from "../../icons/Icon";
import s from "./EditAvatar.module.css";

function EditAvatar() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={s.avatarContainer}>
      <div className={s.imageContainer}>
        {image ? (
          <img src={image} alt="logo" className={s.avatarImage} />
        ) : (
          <Icon size={80} id="logo" />
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
        <Icon size={10} id="plus" className={s.icon} />
      </label>
    </div>
  );
}

export default EditAvatar;

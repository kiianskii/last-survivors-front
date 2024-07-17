const BackgroundImage = ({ url, size, className }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${url})`,
        width: size,
        height: size,
        backgroundSize: "cover",
        backgroundPosition: "center",
        repeat: "no-repeat",
      }}
    ></div>
  );
};

export default BackgroundImage;

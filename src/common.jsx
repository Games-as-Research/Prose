export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const ScreenContainer = (props) => {
  return (
    <div
      className={
        "flex flex-row h-screen w-screen max-md:flex-col " + props.className
      }
    >
      {props.children}
    </div>
  );
};

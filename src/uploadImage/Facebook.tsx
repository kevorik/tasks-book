export const Facebook = (props: any): JSX.Element => {
  const { path } = props;

  return (
    <div>
      <img style={{ width: "32px" }} src={path} alt="альтернативный текст" />
    </div>
  );
};

export default Facebook;

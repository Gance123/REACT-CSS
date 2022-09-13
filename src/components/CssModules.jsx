import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    // 変数classesのcontainerプロパテ
    <div className={classes.container}>
      <p className={classes.title}>- Css Modules -</p>
      <button className={classes.button}>Fight!</button>
    </div>
  );
};

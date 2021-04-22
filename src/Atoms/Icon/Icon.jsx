import icons from "./symbol-defs.svg";
const config = {
  size: "1em",
};

const Icon = (props) => {
  const { attr, size, title, ...svgProps } = props;
  const computedSize = size || config.size;
  let className = config.className || "";
  if (props.className)
    className = (className ? className + " " : "") + props.className;

  const computedProps = Object.assign(
    { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
    config.attr,
    attr,
    svgProps,
    {
      className: className,
      style: Object.assign(
        Object.assign({ color: props.color || config.color }, props.style),
        props.style
      ),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg",
    }
  );

  return (
    <svg version="1.1" {...computedProps}>
      {props.iconTitle ? <title>{props.iconTitle}</title> : null}
      <use xlinkHref={`${icons}#${props.icon}`} />
    </svg>
  );
};

export default Icon;

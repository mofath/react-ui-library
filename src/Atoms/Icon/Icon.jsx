import icons from './symbol-defs.svg';
const conf = {};

const Icon = (props) => {
  const { attr, size, title, ...svgProps } = props;
  const computedSize = size || conf.size || "1em";
  let className;
  if (conf.className) className = conf.className;
  if (props.className)
    className = (className ? className + " " : "") + props.className;

  const finalProps = Object.assign(
    { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
    conf.attr,
    attr,
    svgProps,
    {
      className: className,
      style: Object.assign(
        Object.assign({ color: props.color || conf.color }, props.style),
        props.style
      ),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg",
    }
  );

  return (
    <svg version="1.1" {...finalProps}>
      {props.iconTitle ? <title id={"svg-title-" + props.icon}>{props.iconTitle}</title> : null}
      <use xlinkHref={`${icons}#${props.icon}`} />
    </svg>
  );
};

export default Icon;

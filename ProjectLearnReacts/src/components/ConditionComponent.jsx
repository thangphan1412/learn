import Code from "./Code";
import HelloNewDay from "./HelloNewDay";
export default function ConditionConponent(props) {
  if (props.display) {
    return <Code />;
  } else {
    return <HelloNewDay />;
  }
}

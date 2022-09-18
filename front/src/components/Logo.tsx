import {
  chakra,
  ImageProps,
  forwardRef,
} from "@chakra-ui/react"
import _ from "lodash";
import logo from "../assets/logo.svg"

type LogoProps = ImageProps & { isSpinning: boolean };

export const Logo = forwardRef<LogoProps, "img">((props, ref) => {
  const { isSpinning } = props;

  return (
    <chakra.img
      style={isSpinning ? styles.spinning : undefined}
      src={logo}
      ref={ref}
      aria-label={isSpinning ? 'Spinning logo' : 'Logo'}
      { ..._.omit(props, 'isSpinning') }
    />)
})

const styles = {
  spinning: {
    transform: 'rotate(1080deg)',
    transition: 'transform 2.5s ease-in',
  },
};

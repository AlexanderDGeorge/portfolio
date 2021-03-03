import { useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";

export default function Skills() {
  const { scrollHeight } = useContext(ScrollContext);

  const [spring, setSpring] = useSpring(() => ({
    transform: "translateY(0%)",
  }));

  useEffect(() => {
    const percent = (scrollHeight - 1000) / 10;
    if (scrollHeight > 1000) {
      setSpring({ transform: `translateY(-${percent}%)` });
    } else {
      setSpring({ transform: `translateY(0%)` });
    }
  }, [scrollHeight]);

  return <StyledSkills style={spring}></StyledSkills>;
}

const StyledSkills = styled(animated.div)`
  position: absolute;
  height: 50%;
  width: 100%;
  background: #333;
  background-image: url(/ellinoir.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

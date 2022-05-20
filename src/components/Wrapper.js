import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedPlaceState, spinnerState } from "../state/atoms";
import { DetailsSection } from "./DetailsSection";
import { MainSection } from "./MainSection";
import { Credits } from "./Credits";
import { GlobalSpinner } from "./GlobalSpinner";
import Clear from "../images/Clear.jpg";
import Clouds from "../images/Clouds.jpg";
import Fog from "../images/Fog.jpg";
import Mist from "../images/Mist.jpg";
import Rain from "../images/Rain.jpg";
import Snow from "../images/Snow.jpg";
import Haze from "../images/Haze.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position-y: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
  object-fit: cover;
`;

const Main = styled(MainSection)`
  order: 2;
  display: flex;
`;

const weatherTypeImageMap = {
  Clear: Clear,
  Clouds: Clouds,
  Fog: Fog,
  Mist: Mist,
  Rain: Rain,
  Drizzle: Rain,
  Snow: Snow,
  Haze: Haze,
};

export const Wrapper = () => {
  const { current } = useRecoilValue(selectedPlaceState);
  const isSpinnerActive = useRecoilValue(spinnerState);
  const weatherType = current.weather.main || "Clouds";
  return (
    <React.Fragment>
      <GlobalSpinner active={isSpinnerActive} />
      <BackgroundImage
        rel="preload"
        src={weatherTypeImageMap[weatherType] || weatherTypeImageMap["Clouds"]}
      />
      <Container>
        <Main />
        <DetailsSection />
        <Credits />
      </Container>
    </React.Fragment>
  );
};

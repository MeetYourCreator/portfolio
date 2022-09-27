import styled from 'styled-components';
import Adbusters103 from '../../Assets/press_adbusters_103.png';
import WallStreetJournal from '../../Assets/press_wsj.png';
import PrintMag from '../../Assets/press_printmag.png';
import TranslatingAnarchy from '../../Assets/press_translating-anarchy.png';
import Breitbart from '../../Assets/press_breitbart.png';
import HuffingtonPost from '../../Assets/press_huffingtonpost.png';

export const MssgContainer = styled.section`
display: flex;
`
export const Adbusters = styled.section`
  background: papayawhip;
  background-position: center;
  background-image: url(${Adbusters103});
`;

export const WSJ = styled.section`
  background: papayawhip;
  background-position: center top;
  background-image: url(${WallStreetJournal});
  box-sizing:border-box;
`;

export const PM = styled.section`
  background: papayawhip;
  background-position: left top;
  background-image: url(${PrintMag})
`;

export const TA = styled.section`
  background: papayawhip;
  background-image: url(${TranslatingAnarchy})
`;

export const HP = styled.section`
  background: papayawhip;
  background-image: url(${HuffingtonPost})
`;

export const BB = styled.section`
  background: papayawhip;
  background-position: center;
  background-image: url(${Breitbart})
`;
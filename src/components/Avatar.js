import React from "react";
import styled from 'styled-components';
import F0 from '../../assets/players/f0.svg';
import F1 from '../../assets/players/f1.svg';
import F2 from '../../assets/players/f2.svg';
import F3 from '../../assets/players/f3.svg';
import F4 from '../../assets/players/f4.svg';
import F5 from '../../assets/players/f5.svg';
import F6 from '../../assets/players/f6.svg';
import F7 from '../../assets/players/f7.svg';
import F8 from '../../assets/players/f8.svg';
import F9 from '../../assets/players/f9.svg';
import F10 from '../../assets/players/f10.svg';
import F11 from '../../assets/players/f11.svg';
import F12 from '../../assets/players/f12.svg';
import F13 from '../../assets/players/f13.svg';
import F14 from '../../assets/players/f14.svg';
import F15 from '../../assets/players/f15.svg';
import F16 from '../../assets/players/f16.svg';
import F17 from '../../assets/players/f17.svg';
import F18 from '../../assets/players/f18.svg';
import F19 from '../../assets/players/f19.svg';
import F20 from '../../assets/players/f20.svg';
import F21 from '../../assets/players/f21.svg';
import F22 from '../../assets/players/f22.svg';
import F23 from '../../assets/players/f23.svg';
import M0 from '../../assets/players/m0.svg';
import M1 from '../../assets/players/m1.svg';
import M2 from '../../assets/players/m2.svg';
import M3 from '../../assets/players/m3.svg';
import M4 from '../../assets/players/m4.svg';
import M5 from '../../assets/players/m5.svg';
import M6 from '../../assets/players/m6.svg';
import M7 from '../../assets/players/m7.svg';
import M8 from '../../assets/players/m8.svg';
import M9 from '../../assets/players/m9.svg';
import M10 from '../../assets/players/m10.svg';
import M11 from '../../assets/players/m11.svg';
import M12 from '../../assets/players/m12.svg';
import M13 from '../../assets/players/m13.svg';
import M14 from '../../assets/players/m14.svg';
import M15 from '../../assets/players/m15.svg';
import M16 from '../../assets/players/m16.svg';
import M17 from '../../assets/players/m17.svg';
import M18 from '../../assets/players/m18.svg';
import M19 from '../../assets/players/m19.svg';
import M20 from '../../assets/players/m20.svg';
import M21 from '../../assets/players/m21.svg';
import M22 from '../../assets/players/m22.svg';
import M23 from '../../assets/players/m23.svg';

const iconMap = {
	f0: F0,
	f1: F1,
	f2: F2,
	f3: F3,
	f4: F4,
	f5: F5,
	f6: F6,
	f7: F7,
	f8: F8,
	f9: F9,
	f10: F10,
	f11: F11,
	f12: F12,
	f13: F13,
	f14: F14,
	f15: F15,
	f16: F16,
	f17: F17,
	f18: F18,
	f19: F19,
	f20: F20,
	f21: F21,
	f22: F22,
	f23: F23,
	m0: M0,
	m1: M1,
	m2: M2,
	m3: M3,
	m4: M4,
	m5: M5,
	m6: M6,
	m7: M7,
	m8: M8,
	m9: M9,
	m10: M10,
	m11: M11,
	m12: M12,
	m13: M13,
	m14: M14,
	m15: M15,
	m16: M16,
	m17: M17,
	m18: M18,
	m19: M19,
	m20: M20,
	m21: M21,
	m22: M22,
	m23: M23
}

const IconWrapper = styled.div`
	text-align: center; 
	// background: ${props => props.theme.playerColor[props.color]};
	border-radius: 10%;

	svg {
		fill: ${props => props.theme.playerColor[props.color]};
		width: auto;
		height: auto;
	}
`;

const Avatar = props => {
	const Icon = iconMap[props.icon];

	return <IconWrapper color={props.color}>
		<Icon />
	</IconWrapper>
}

export default Avatar;
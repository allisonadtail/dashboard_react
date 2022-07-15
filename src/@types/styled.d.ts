// defined in the Typescript on styled 
//defind types

import 'styled-components';
import {defaultTheme} from '../styles/themes/default';

type ThemeTypeExtends = typeof defaultTheme;

// sobrescrever 
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeTypeExtends {}
}
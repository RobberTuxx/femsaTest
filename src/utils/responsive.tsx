import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const WIDTH = 393;
const HEIGHT = 852;

export function widthResponsive(width: number) {
    return wp(width / (WIDTH / 100));
}

export function heightResponsive(height: number) {
    return hp(height / (HEIGHT / 100));
}

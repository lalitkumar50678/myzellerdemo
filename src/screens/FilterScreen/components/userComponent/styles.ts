import {StyleSheet} from 'react-native';
import { BLACK, BLUE, LIGHT_BLUE } from '../../../../utility/Colors';

const userStyles = StyleSheet.create({
    userStyle:{
        flexDirection: 'row',
    },
    profileStyle:{
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: LIGHT_BLUE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameStyle:{
        justifyContent: 'center',
        marginStart: 10,
    },
    nameTxt:{
        fontSize: 16,
        color: BLACK,
    },
    userTypeTxt:{
        fontSize: 14,
        fontWeight: '100',
    },
    profileTxt:{
        fontSize: 14,
        color: BLUE,
    },
});
export default userStyles;

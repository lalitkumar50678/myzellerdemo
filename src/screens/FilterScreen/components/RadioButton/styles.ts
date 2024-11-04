import {StyleSheet} from 'react-native';
import { BLUE, LIGHT_BLUE, LIGHT_GRAY } from '../../../../utility/Colors';

const styles = StyleSheet.create({
    circluerStyle:{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circluerStyleFill:{
        borderColor: BLUE,
    },
    circluerStyleUnFill:{
        borderColor: LIGHT_GRAY,
    },
    fillCircle:{
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: BLUE,
    },
    radioStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        borderRadius: 5,
    },
    radioStyleFill:{
        backgroundColor: LIGHT_BLUE,
    },
    container:{
        width: '90%',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    textStyle:{
        marginStart: 10,
    }
});
export default styles;
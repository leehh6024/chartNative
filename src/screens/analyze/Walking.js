import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import {BarChart} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 1,
  fillShadowGradientFromOpacity: 1,
  fillShadowGradientToOpacity: 1,
  // 색상은 HEX, RGB값 둘 다 상관없음.
  color: (opacity = 1) => `#7263E3`,
  labelColor: (opacity = 1) => `rgba(25, 31, 40, ${opacity})`,
  strokeWidth: 1,
  barPercentage: 1,
  useShadowColorFromDataset: false,
  decimalPlaces: 0,
  propsForBackgroundLines:{
    stroke: '#FFFFFF',
  },
  barRadius: 6,
  propsForLabels: {
    fontSize: '12',
    fontWeight: "600",
  },
}

const data = {
    labels: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7"],
    datasets: [
        {
            data : [5000, 12000, 20000, 3000, 8000, 4000, 3000],
            colors: [
                (opacity = 1) => `#E5E8EB`,
                (opacity = 1) => `#7263E3`,
                (opacity = 1) => `#7263E3`,
                (opacity = 1) => `#E5E8EB`,
                (opacity = 1) => `#E5E8EB`,
                (opacity = 1) => `#E5E8EB`,
                (opacity = 1) => `#E5E8EB`,
            ],
        }
    ]
};

export default function Walking() {
  return (

        <View style={styles.container}>
            <BarChart
            style={styles.flexbox}
            data={data}
            width={screenWidth+16}
            height={168}
            chartConfig={chartConfig}
            withVerticalLabels={true}
            withHorizontalLabels={false}
            fromZero={true}
            showBarTops={false}
            showValuesOnTopOfBars={true}
            withCustomBarColorFromData={true}
            flatColor={true}
            />
        </View>
    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth - 64,
    justifyContent: 'center',
  },
  flexbox: {
    backgroundColor: '#FFFFFF',
    position: "absolute",
    left: -80,
  }
});
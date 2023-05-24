import React, {useState} from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import {LineChart} from "react-native-chart-kit";
import {Rect, Ellipse, Svg, Text as TextSVG} from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(25, 31, 40, ${opacity})`,
  // labelColor: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  strokeWidth: 4,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  // YLabels 소수점 표현.
  decimalPlaces: 0,
  propsForDots: {
    r: "5",
  },
  propsForBackgroundLines:{
    stroke: "rgba(209,214,219,0.8)", // 기존색상, 내부 색상임
    // stroke: 'rgba(176,184,193,0.4)', // 수정요구 색상, 좌측과 하단의 외곽 색상임
    strokeDasharray: '1.8',
    strokeWidth: 1,
    border: "1px solid black",
  },
  propsForLabels: {
    fontSize: '12', 
    fontFamily: 'Apple SD Gothic Neo',
  },
  propsForVerticalLabels: {
    fontWeight: "600",
    // labelColor: "rgba(255, 0, 0, 1)",
  },
  propsForHorizontalLabels: {
    fontWeight: "400",
  }
}

export default function WeightChart() {
  const [tooltipPos, setTooltipPos] = useState({ x:0, y:0, visible: false, value: 0})

  const data = {
    // labels에 날짜 데이터 받아오면 됨
    labels: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7"],
    datasets: [
      {
        data : [65.1, 65.3, 65.7, 65.3, 65.1, 64.9, 65.2],
        color: () => `rgba(114, 101, 227, 1)`,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth}
        height={229}
        chartConfig={chartConfig}
        withDots={true}
        withShadow={false}
        // fromNumber={71}
        // withInnerLines={false}
        // withOuterLines={false}
        // withHorizontalLabels={false}
        // yLabelsOffset={-300}
        // withHorizontalLines={false}
        yAxisSuffix='kg'
        yAxisInterval={1}
        getDotColor={(dataPoint, dataPointIndex) => {
          if (dataPointIndex === 6) {
            return 'rgba(114, 101, 227, 1)';
          }
          return 'rgba(0,0,0,0)';
        }}
        renderDotContent={({x, y, index,indexData}) => {
          return (
            <TextSVG 
              key={index}
              x={x+5}
              y={y-10}
              fill="rgba(114, 101, 227, 1)"
              fontStyle="normal"
              fontSize="12"
              fontWeight="700"
              fontFamily='Apple SD Gothic Neo'
              textAnchor='middle'>
              {index === 6 ? `${indexData}kg` : null}
            </TextSVG>
          );
        }}
        bezier={true}
        decorator={() => {
          return tooltipPos.visible ? <View>
            <Svg>
              <Rect 
                x={tooltipPos.x - 20}
                y={tooltipPos.y - 30}
                width="42"
                height="18"
                fill="#191F28" 
                borderRadius="30" />
                <TextSVG
                  x={tooltipPos.x + 1}
                  y={tooltipPos.y - 18}
                  fill="white"
                  fontSize="10"
                  fontWeight="700"
                  // fontFamily='Apple SD Gothic Neo'
                  textAnchor="middle" >
                    {`${tooltipPos.value}kg`}
                </TextSVG>
            </Svg>
          </View> : null
        }}

        onDataPointClick={(data) => {
          let isSamePoint = (tooltipPos.x === data.x && tooltipPos.y === data.y)

          isSamePoint ? setTooltipPos((previousState) => {
            return {
              ...previousState,
              value: data.value,
              visible: !previousState.visible
            }
          }) : setTooltipPos({ x:data.x, value: data.value, y: data.y, visible: true})
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    justifyContent: 'center',
    position: 'absolute',
    left: -40,
  },
});
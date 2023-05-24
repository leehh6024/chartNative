import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// import assets from '../../../assets';
// import { safeZone } from '../../styled';
import styled from 'styled-components';
// import { ScrollView } from 'react-native-gesture-handler';

import FoodChart from "./FoodChart";
import WeightChart from "./WeightChart";
import Water from "./Water";
import Walking from "./Walking";

export default () => {

  const [tabIdx, setTabIdx] = useState(0);
  const [termTab, setTermTab] = useState(0);
  const contData = [{
    date : '1월 7일(일)',
    tandanji : '15:70:15',
    weight : '70.0',
    walk: '20,000',
    drink: '2,000',
    sleepTime : '6시간',
    sleepTimeDetail : '( 07:00 - 18:00 )',
    diet:[{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼','김치찌개','문어찜','도너케밥','순살치킨','초밥']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    }]
  },{
    date : '1월 6일(토)',
    tandanji : '15:15:70',
    weight : '70.0',
    walk: '30,000',
    drink: '3,000',
    sleepTime : '6시간',
    sleepTimeDetail : '( 07:00 - 18:00 )',
    diet:[{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼','김치찌개','문어찜','도너케밥','순살치킨','초밥']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    }]
  },{
    date : '1월 5일(금)',
    tandanji : '70:15:15',
    weight : '70.0',
    walk: '40,000',
    drink: '4,000',
    sleepTime : '6시간',
    sleepTimeDetail : '( 07:00 - 18:00 )',
    diet:[{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼','김치찌개','문어찜','도너케밥','순살치킨','초밥']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    }]
  },{
    date : '1월 4일(목)',
    tandanji : '70:15:15',
    weight : '70.0',
    walk: '50,000',
    drink: '5,000',
    sleepTime : '6시간',
    sleepTimeDetail : '( 07:00 - 18:00 )',
    diet:[{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼','김치찌개','문어찜','도너케밥','순살치킨','초밥']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    }]
  },{
    date : '1월 3일(수)',
    tandanji : '70:15:15',
    weight : '70.0',
    walk: '60,000',
    drink: '6,000',
    sleepTime : '6시간',
    sleepTimeDetail : '( 07:00 - 18:00 )',
    diet:[{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼','김치찌개','문어찜','도너케밥','순살치킨','초밥']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    }]
  },{
    date : '1월 2일(화)',
    tandanji : '70:15:15',
    weight : '70.0',
    walk: '70,000',
    drink: '7,000',
    sleepTime : '6시간',
    sleepTimeDetail : '( 07:00 - 18:00 )',
    diet:[{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼','김치찌개','문어찜','도너케밥','순살치킨','초밥']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    }]
  },{
    date : '1월 1일(월)',
    tandanji : '70:15:15',
    weight : '70.0',
    walk: '90,000',
    drink: '9,000',
    sleepTime : '6시간',
    sleepTimeDetail : '( 07:00 - 18:00 )',
    diet:[{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼','김치찌개','문어찜','도너케밥','순살치킨','초밥']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    },{
      tandanji : '20:30:50',
      dangjil : '10',
      list : ['떡볶이', '타꼬야끼']
    }]
  }]

  return (
    // <View style={safeZone()}>
    <View>
       <ScrollView>
        <MainHeader
          userName={'김'}
          onPressAlarm={() => {}}
          onPressUser={() => {}}
        />
        <TopTab 
          tabIdx = {tabIdx}
          setTabIdx = {setTabIdx}
        />
        <TermSelect/>
        <AnalyzeCont 
          tabIdx={tabIdx}
          contData={contData}
          termTab={termTab}
          setTermTab={setTermTab}
        />
       </ScrollView>
    </View>
  );
};

const MainHeader = ({ userName, onPressAlarm, onPressUser }) => {
  return (
      <View style={[styles.headerWrap]}>
        <View style={styles.header}>
          <Text style={styles.title}>분석</Text>
          {/* <Image
            source={assets.ic_analyze}
            style={{
              marginLeft: 6,
              width: 20,
              height: 20
            }}
          /> */}
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity onPress={onPressAlarm}>
            {/* <Image source={assets.ic_alarm} style={{ width: 26, height: 26, marginRight: 12 }} /> */}
          </TouchableOpacity>
          <UserNameWrap onPress={onPressUser}>
            <UserName>{userName}</UserName>
          </UserNameWrap>
        </View>
      </View>
  );
};

const UserNameWrap = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background: #7265e3;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`;

const UserName = styled.Text`
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -1px;
    color: #ffffff;
`;

const TopTab = ({tabIdx, setTabIdx}) => {
  return(
    <View
      style={{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#E5E8EB'
      }}
    >
      <TouchableOpacity
        style={[
          styles.topTab,
          {marginLeft: 24},
          (tabIdx === 0) && {
            borderBottomWidth: 3,
            borderColor: '#7265E3'
          }
        ]}
        onPress={() => setTabIdx(0)}
      >
          <Text style={[
            styles.topTabTxt,
            (tabIdx === 0) && {
                fontWeight:'800',
                color:"#191F28"
              }
            ]}>식단</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.topTab,
          (tabIdx === 1) && {
            borderBottomWidth: 3,
            borderColor: '#7265E3'
          }
        ]}
        onPress={() => setTabIdx(1)}
      >
          <Text style={[
            styles.topTabTxt,
            (tabIdx === 1) && {
                fontWeight:'800',
                color:"#191F28"
              }
            ]}>체중</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.topTab,
          (tabIdx === 2) && {
            borderBottomWidth: 3,
            borderColor: '#7265E3'
          }
        ]}
        onPress={() => setTabIdx(2)}
      >
          <Text style={[
            styles.topTabTxt,
            (tabIdx === 2) && {
                fontWeight:'800',
                color:"#191F28"
              }
            ]}>걷기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.topTab,
          (tabIdx === 3) && {
            borderBottomWidth: 3,
            borderColor: '#7265E3'
          }
        ]}
        onPress={() => setTabIdx(3)}
      >
          <Text style={[
            styles.topTabTxt,
            (tabIdx === 3) && {
                fontWeight:'800',
                color:"#191F28"
              }
            ]}>음수량</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.topTab,
          (tabIdx === 4) && {
            borderBottomWidth: 3,
            borderColor: '#7265E3'
          }
        ]}
        onPress={() => setTabIdx(4)}
      >
          <Text style={[
            styles.topTabTxt,
            (tabIdx === 5) && {
                fontWeight:'800',
                color:"#191F28"
              }
            ]}>수면</Text>
      </TouchableOpacity>
    </View>
  )
}

const TermSelect = () => {
  return(
    <View>
      <View
        style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems: 'center',
          paddingTop: 16,
          paddingBottom: 16,
          marginTop: 8
        }}
      >
        <TouchableOpacity>
          {/* <Image
            source={assets.ic_prev}
            style={{
              marginLeft: 30,
              width: 7,
              height: 13
            }}
          /> */}
        </TouchableOpacity>
        <Text
          style={{
            fontWeight:"700",
            fontSize: 18,
            letterSpacing: -0.3
          }}
        >23.1.1 ~ 23.1.7</Text>
        <TouchableOpacity>
        {/* <Image
            source={assets.ic_next}
            style={{
              marginRight: 30,
              width: 7,
              height: 13
            }}
          /> */}
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 8,
          marginBottom: 8
        }}
      >
        {/* <Image
          source={assets.ic_line}
          style={{
            width:'100%',
            height: 1
          }}
        /> */}
      </View>
    </View>
  )
}

const AnalyzeCont = ({tabIdx, contData, termTab, setTermTab}) => {
  if(tabIdx === 0){
    return(
      <View>
        <View
          style={{paddingBottom:32}}
        >
          <SectionTitle 
            title="당질"
            goal='30'
            unit='g'
          />
          <TempChart name="food" />
          <TermTab
            termTab={termTab}
            setTermTab={setTermTab}
          />
        </View>
        <Divider/>
        <View
          style={{marginTop:32}}
        >
          <SectionTitle 
            title="탄단지 비율"
            goal='10:20:70'
          />
          {contData.map((item) => {
            return (
              <TandanjiChart
                tandanji={item.tandanji}
                date={item.date}
              />
            );
          })}
        </View>
        <View
          style={{
            justifyContent:'center',
            alignItems:'center',
            paddingTop: 19.5,
            paddingBottom: 19.5
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text
              style={{
                fontWeight:'400',
                fontSize: 14,
                lineHeight: 16.8,
                letterSpacing: -0.3,
                color: '#6B7684'
              }}
            >더보기</Text>
            {/* <Image
              source={assets.ic_more}
              style={{ 
                marginLeft: 10.33
              }}
            /> */}
          </TouchableOpacity>
        </View>
        <Divider/>
        <View
          style={{marginTop: 32}}
        >
          <SectionTitle 
            title="일별 식단"
          />
          {contData.map((item) => {
            return(
              <DietDetail
                item={item}
              />
            )
          })}
        </View>
      </View>
    )
  }
  if(tabIdx === 1){
    return(
      <View>
        <View
          style={{paddingBottom:32}}
        >
          <SectionTitle 
            title="몸무게"
            goal='71'
            unit='kg'
          />
          <TempChart name="weight"/>
          <TermTab
            termTab={termTab}
            setTermTab={setTermTab}
          />
        </View>
        <Divider/>
        <View
          style={{
            marginTop: 35,
            marginLeft: 24,
            marginRight: 24
          }}
        >
          {contData.map((item) => {
            return(
              <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginBottom: 30
              }}
            >
              <Text
                style={{
                  fontWeight:'400',
                  fontSize: 14,
                  lineHeight: 14,
                  letterSpacing: -0.3,
                  color:'#4E5968',
                  marginRight: 48
                }}
              >{item.date}</Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  letterSpacing: -0.3,
                  color:'#191F28',
                  marginRight: 4
                }}
              >{item.weight}</Text>
              <Text
                style={{
                  fontWeight:'700',
                  fontSize: 16,
                  letterSpacing: -0.3,
                  color:'#191F28'
                }}
              >kg</Text>
            </View>
            )
          })}
        </View>
      </View>
    )
  }
  if(tabIdx === 2){
    return(
      <View>
        <View
          style={{paddingBottom:32}}
        >
          <SectionTitle 
            title="걸음수"
            goal='3,000'
            unit='보'
          />
          <TempChart name="walking" />
          <TermTab
            termTab={termTab}
            setTermTab={setTermTab}
          />
        </View>
        <Divider/>
        <View
          style={{
            marginTop: 35,
            marginLeft: 24,
            marginRight: 24
          }}
        >
          {contData.map((item) => {
            return(
              <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginBottom: 30
              }}
            >
              <Text
                style={{
                  fontWeight:'400',
                  fontSize: 14,
                  lineHeight: 14,
                  letterSpacing: -0.3,
                  color:'#4E5968',
                  marginRight: 48
                }}
              >{item.date}</Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  letterSpacing: -0.3,
                  color:'#191F28',
                  marginRight: 4
                }}
              >{item.walk}</Text>
              <Text
                style={{
                  fontWeight:'700',
                  fontSize: 16,
                  letterSpacing: -0.3,
                  color:'#191F28'
                }}
              >보</Text>
            </View>
            )
          })}
        </View>
      </View>
    )
  }
  if(tabIdx === 3){
    return(
      <View>
        <View
          style={{paddingBottom:32}}
        >
          <SectionTitle 
            title="음수량"
            goal='1,000'
            unit='ml'
          />
          <TempChart name="water"/>
          <TermTab
            termTab={termTab}
            setTermTab={setTermTab}
          />
        </View>
        <Divider/>
        <View
          style={{
            marginTop: 35,
            marginLeft: 24,
            marginRight: 24
          }}
        >
          {contData.map((item) => {
            return(
              <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginBottom: 30
              }}
            >
              <Text
                style={{
                  fontWeight:'400',
                  fontSize: 14,
                  lineHeight: 14,
                  letterSpacing: -0.3,
                  color:'#4E5968',
                  marginRight: 48
                }}
              >{item.date}</Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  letterSpacing: -0.3,
                  color:'#191F28',
                  marginRight: 4
                }}
              >{item.drink}</Text>
              <Text
                style={{
                  fontWeight:'400',
                  fontSize: 12,
                  letterSpacing: -0.3,
                  color:'#191F28'
                }}
              >ml</Text>
            </View>
            )
          })}
        </View>
      </View>
    )
  }
  if(tabIdx === 4){
    return(
      <View>
        <View
          style={{paddingBottom:32}}
        >
          <SectionTitle 
            title="수면시간"
            goal='6'
            unit='시간'
          />
          <TempChart/>
          <TermTab
            termTab={termTab}
            setTermTab={setTermTab}
          />
        </View>
        <Divider/>
        <View
          style={{
            marginTop: 35,
            marginLeft: 24,
            marginRight: 24
          }}
        >
          {contData.map((item) => {
            return(
              <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginBottom: 30
              }}
            >
              <Text
                style={{
                  fontWeight:'400',
                  fontSize: 14,
                  lineHeight: 14,
                  letterSpacing: -0.3,
                  color:'#4E5968',
                  marginRight: 48
                }}
              >{item.date}</Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  letterSpacing: -0.3,
                  color:'#191F28',
                  marginRight: 12
                }}
              >{item.sleepTime}</Text>
              <Text
                style={{
                  fontWeight:'400',
                  fontSize: 16,
                  letterSpacing: -0.3,
                  color:'#191F28'
                }}
              >{item.sleepTimeDetail}</Text>
            </View>
            )
          })}
        </View>
      </View>
    )
  }
}

const Divider = styled.View`
  height: 16px;
  background: #F2F4F6;
`

const SectionTitle = ({title, goal, unit}) => {
  return(
    <View
      style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft: 24,
        paddingRight: 32
      }}
    >
      <Text
        style={{
          fontWeight:'600',
          fontSize: 18,
          lineHeight: 24,
          letterSpacing: -0.3,
          color:'#191F28'
        }}
      >
        {title}
      </Text>
      {
        (goal || unit) &&
        <View
          style={{
            flexDirection:'row',
            // alignItems:'center',
          }}
        >
          <Text
            style={{
              fontWeight:'400',
              fontSize: 14,
              lineHeight: 14,
              letterSpacing: -0.3,
              color:'#4E5968',
              marginRight: 4
            }}
          >목표</Text>
          <View
            style={{
              flexDirection:'row',
              alignItems:'center',
            }}
          >
            <Text
              style={{
                fontWeight:'700',
                fontSize: 14,
                lineHeight: 16,
                letterSpacing: -0.3,
                color: '#4E5968'
              }}
            >{goal}</Text>
            <Text
              style={{
                fontWeight:'700',
                fontSize: 14,
                lineHeight: 14,
                letterSpacing: -0.3,
                color: '#4E5968'
              }}
            >
              {unit}
            </Text>
          </View>
        </View>
      }
    </View>
  )
}

// 임시 차트
const TempChart = ({name}) => {
  return(
    <View
      style={{
        // height: 300,
        height: 229,
        marginLeft: 32,
        marginRight: 32,
        // marginTop: 20,
        // marginBottom: 20,
        // backgroundColor:'red'
      }}
    >
      {name === 'food' && <FoodChart />}
      {name === 'weight' && <WeightChart/>}
      {name === 'walking' && <Walking/>}
      {name === 'water' && <Water/>}
    </View>
  )
}

const TermTab = ({termTab, setTermTab}) => {
  return(
    <View
      style={{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 28,
        paddingRight: 28
      }}
    >
      <TouchableOpacity
        style={[
        {
          width: '25%',
          height: 33,
          borderRadius: 100,
          justifyContent:'center',
          alignItems:'center'
        },
        (termTab === 0) && {backgroundColor:'#F2F4F6'}
        ]}
        onPress={() => {setTermTab(0)}}
      >
        <View>
          <Text
            style={[
              {fontSize: 12},
              (termTab === 0) ? {
                fontWeight:'700',
                color: '#191F28'
              } : {
                fontWeight:'400',
                color:'#4E5968'
              }
            ]}
          >주</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[{
          width: '25%',
          height: 33,
          borderRadius: 100,
          justifyContent:'center',
          alignItems:'center'
        },
        termTab === 1 && {backgroundColor:'#F2F4F6'}
        ]}
        onPress={() => {setTermTab(1)}}
      >
        <View>
          <Text
            style={[
              {fontSize: 12},
              (termTab === 1) ? {
                fontWeight:'700',
                color: '#191F28'
              } : {
                fontWeight:'400',
                color:'#4E5968'
              }
            ]}
          >월</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[{
          width: '25%',
          height: 33,
          borderRadius: 100,
          justifyContent:'center',
          alignItems:'center'
        },
        termTab === 2 && {backgroundColor:'#F2F4F6'}
        ]}
        onPress={() => {setTermTab(2)}}
      >
        <View>
          <Text
            style={[
              {fontSize: 12},
              (termTab === 2) ? {
                fontWeight:'700',
                color: '#191F28'
              } : {
                fontWeight:'400',
                color:'#4E5968'
              }
            ]}
          >분기</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[{
          width: '25%',
          height: 33,
          borderRadius: 100,
          justifyContent:'center',
          alignItems:'center'
        },
        termTab === 3 && {backgroundColor:'#F2F4F6'}
        ]}
        onPress={() => {setTermTab(3)}}
      >
        <View>
          <Text
            style={[
              {fontSize: 12},
              (termTab === 3) ? {
                fontWeight:'700',
                color: '#191F28'
              } : {
                fontWeight:'400',
                color:'#4E5968'
              }
            ]}
          >6개월</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const TandanjiChart = ({tandanji,date}) => {
  const tan = tandanji.split(':')[0]+'%';
  const dan = tandanji.split(':')[1]+'%';
  const ji = tandanji.split(':')[2]+'%';

  console.log(tan, dan, ji)

  return(
    <View
      style={{
        paddingTop:28,
        paddingLeft:24,
        paddingRight:24
      }}
    >
      <View
        style={{
          flexDirection:"row"
        }}
      >
        <View
          style={{
            flexDirection:"row"
          }}
        >
          <Text
            style={{
              fontWeight:'400',
              fontSize: 14,
              lineHeight: 16.8,
              letterSpacing: -0.3,
              color:'#4E5968',
              marginRight: 4
            }}
          >탄수화물</Text>
          <Text
            style={{
              fontWeight:'700',
              fontSize: 14,
              lineHeight: 18,
              letterSpacing: -0.3,
              color:'#191F28'
            }}
          >{tandanji.split(':')[0]}</Text>
          <Text
            style={{
              fontWeight:'400',
              fontSize: 12,
              lineHeight: 18,
              letterSpacing: -0.3,
              color:'#191F28',
              marginRight: 20
            }}
          >%</Text>
        </View>
        <View
          flexDirection="row"
        >
          <Text
            style={{
              fontWeight:'400',
              fontSize: 14,
              lineHeight: 16.8,
              letterSpacing: -0.3,
              color:'#4E5968',
              marginRight: 4
            }}
          >단백질</Text>
          <Text
            style={{
              fontWeight:'700',
              fontSize: 14,
              lineHeight: 18,
              letterSpacing: -0.3,
              color:'#191F28'
            }}
          >{tandanji.split(':')[1]}</Text>
          <Text
            style={{
              fontWeight:'400',
              fontSize: 12,
              lineHeight: 18,
              letterSpacing: -0.3,
              color:'#191F28',
              marginRight: 20
            }}
          >%</Text>
        </View>
        <View
          flexDirection="row"
        >
          <Text
            style={{
              fontWeight:'400',
              fontSize: 14,
              lineHeight: 16.8,
              letterSpacing: -0.3,
              color:'#4E5968',
              marginRight: 4
            }}
          >지방</Text>
          <Text
            style={{
              fontWeight:'700',
              fontSize: 14,
              lineHeight: 18,
              letterSpacing: -0.3,
              color:'#191F28'
            }}
          >{tandanji.split(':')[2]}</Text>
          <Text
            style={{
              fontWeight:'400',
              fontSize: 12,
              lineHeight: 18,
              letterSpacing: -0.3,
              color:'#191F28',
              marginRight: 20
            }}
          >%</Text>
        </View>
      </View>
      <View
        style={{
          height:8,
          flexDirection:'row',
          marginTop: 10,
          marginBottom: 10
        }}
      >
        <View
          style={{
            backgroundColor:"#1F87FE",
            width:tan,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
          }}
        ></View>
        <View
          style={{
            backgroundColor:"#7265E3",
            width:dan,
            marginLeft: 2,
            marginRight: 2,
          }}
        ></View>
        <View
          style={{
            backgroundColor:"#7FE3F0",
            width:ji,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}
        ></View>
      </View>
      <Text
        style={{
          fontWeight:'400',
          fontSize:12,
          lineHeight: 14.4,
          letterSpacing: -0.3,
          color:'#8B95A1'
        }}
      >
        {date}
      </Text>
    </View>
  )
}

const DietDetail = ({item}) => {

  // const tan = item.diet

  return(
    <View
      style={{
        paddingTop: 48,
        paddingLeft: 24,
        paddingRight: 24
      }}
    >
      <View>
        <Text
          style={{
            fontWeight:'400',
            fontSize: 12,
            lineHeight: 14.4,
            letterSpacing: -0.3,
            color:'#8B95A1'
          }}
        >{item.date}</Text>
      </View>
      <View>
          <View
            style={{
              marginTop: 20
            }}
          >
            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}
            >
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor:'#F9B300',
                    borderRadius:100,
                    marginRight: 14
                  }}
                ></View>
                <Text
                  style={{
                    fontWeight:'700',
                    fontSize:16,
                    lineHeight:20,
                    letterSpacing:-0.3,
                    color:'#191F28'
                  }}
                >아침식사</Text>
              </View>
              <View style={{
                flexDirection:'row',
                alignItems:'center',
              }}>
                {/* <Image
                  source={assets.ic_dangjil}
                  style={{ 
                    width: 20,
                    height: 20,
                    marginRight: 3
                  }}
                /> */}
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 8
                  }}
                >당질</Text>
                <Text
                  style={{
                    fontWeight:'800',
                    fontSize:16,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28'
                  }}
                >{item.diet[0].dangjil}</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 12,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginLeft: 2
                  }}
                >g</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop: 8
              }}
            >
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center',
                  marginRight: 13
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >탄수화물</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[0].tandanji.split(':')[0]}%</Text>
              </View>
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center',
                  marginRight: 13
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >단백질</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[0].tandanji.split(':')[1]}%</Text>
              </View>
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >지방</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[0].tandanji.split(':')[2]}%</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection:'row',
                flexWrap: 'wrap',
                marginTop: 12
              }}
            >
            {
              item.diet[0].list.map((item2) => {
                  return(
                    <View
                      style={{
                        paddingVertical: 4,
                        paddingHorizontal: 8,
                        backgroundColor:'#F2F4F6',
                        borderRadius: 100,
                        marginRight: 4,
                        marginBottom: 4
                      }}
                    >
                      <Text>{item2}</Text>
                    </View>
                  )
              })
            }
            </View>
          </View>
          <View
            style={{
              marginTop: 28
            }}
          >
            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}
            >
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor:'#07B419',
                    borderRadius:100,
                    marginRight: 14
                  }}
                ></View>
                <Text
                  style={{
                    fontWeight:'700',
                    fontSize:16,
                    lineHeight:20,
                    letterSpacing:-0.3,
                    color:'#191F28'
                  }}
                >점심식사</Text>
              </View>
              <View style={{
                flexDirection:'row',
                alignItems:'center',
              }}>
                {/* <Image
                  source={assets.ic_dangjil}
                  style={{ 
                    width: 20,
                    height: 20,
                    marginRight: 3
                  }}
                /> */}
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 8
                  }}
                >당질</Text>
                <Text
                  style={{
                    fontWeight:'800',
                    fontSize:16,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28'
                  }}
                >{item.diet[1].dangjil}</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 12,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginLeft: 2
                  }}
                >g</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop: 8
              }}
            >
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center',
                  marginRight: 13
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >탄수화물</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[1].tandanji.split(':')[0]}%</Text>
              </View>
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center',
                  marginRight: 13
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >단백질</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[1].tandanji.split(':')[1]}%</Text>
              </View>
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >지방</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[1].tandanji.split(':')[2]}%</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection:'row',
                flexWrap: 'wrap',
                marginTop: 12
              }}
            >
            {
              item.diet[1].list.map((item2) => {
                  return(
                    <View
                      style={{
                        paddingVertical: 4,
                        paddingHorizontal: 8,
                        backgroundColor:'#F2F4F6',
                        borderRadius: 100,
                        marginRight: 4,
                        marginBottom: 4
                      }}
                    >
                      <Text>{item2}</Text>
                    </View>
                  )
              })
            }
            </View>
          </View>
          <View
            style={{
              marginTop: 28
            }}
          >
            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}
            >
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor:'#007AE6',
                    borderRadius:100,
                    marginRight: 14
                  }}
                ></View>
                <Text
                  style={{
                    fontWeight:'700',
                    fontSize:16,
                    lineHeight:20,
                    letterSpacing:-0.3,
                    color:'#191F28'
                  }}
                >저녁식사</Text>
              </View>
              <View style={{
                flexDirection:'row',
                alignItems:'center',
              }}>
                {/* <Image
                  source={assets.ic_dangjil}
                  style={{ 
                    width: 20,
                    height: 20,
                    marginRight: 3
                  }}
                /> */}
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 8
                  }}
                >당질</Text>
                <Text
                  style={{
                    fontWeight:'800',
                    fontSize:16,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28'
                  }}
                >{item.diet[2].dangjil}</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 12,
                    lineHeight: 20,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginLeft: 2
                  }}
                >g</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop: 8
              }}
            >
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center',
                  marginRight: 13
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >탄수화물</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[2].tandanji.split(':')[0]}%</Text>
              </View>
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center',
                  marginRight: 13
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >단백질</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[2].tandanji.split(':')[1]}%</Text>
              </View>
              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#191F28',
                    marginRight: 4
                  }}
                >지방</Text>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize:14,
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    color:'#8B95A1'
                  }}
                >{item.diet[2].tandanji.split(':')[2]}%</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection:'row',
                flexWrap: 'wrap',
                marginTop: 12
              }}
            >
            {
              item.diet[2].list.map((item2) => {
                  return(
                    <View
                      style={{
                        paddingVertical: 4,
                        paddingHorizontal: 8,
                        backgroundColor:'#F2F4F6',
                        borderRadius: 100,
                        marginRight: 4,
                        marginBottom: 4
                      }}
                    >
                      <Text>{item2}</Text>
                    </View>
                  )
              })
            }
            </View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 21,
    paddingVertical: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameWrap: {
    padding: 8,
    paddingHorizontal: 10,
    backgroundColor: '#7265E3',
    borderRadius: 200,
  },
  userName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    color: '#191F28',
  },
  topTab: {
    marginRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  topTabTxt: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.3,
    color:'#B0B8C1',
  }
});

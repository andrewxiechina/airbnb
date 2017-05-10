import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  } from 'react-native';
import CardSimple from './CardSimple';
import style from '../style/style';

export default class Content extends Component {
  render() {
    return (
        <View style={[{paddingLeft: 15, paddingRight: 0, marginBottom:45}]}>
          <ScrollView>
            <View>
              <View style={[style.row, {marginBottom: 10, paddingTop: 60}]}>
                <Text style={[style.h4]}>Hot Experiences</Text>
                <Text style={[style.font, style.textRight, {marginRight: 20}]}>View All ></Text>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={54} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/1a9b6954-8439-4088-b638-68f4df74944d.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={30} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/e819b31c-c0a5-4ba4-85fe-a2327f7f4930.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={20} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/162f03b6-4f4b-40e4-aee8-13995998bc6e.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/caf186a2-50e4-4293-a85a-0c1a64a0df60.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/75f08d7e-dff2-472a-aa6e-e1cbcd2bc9a6.jpg?aki_policy=xl_poster'}/>
              </ScrollView>
            </View>
            <View>
              <View style={[style.row, {marginBottom: 10}]}>
                <Text style={[style.h4]}>Hot Experiences</Text>
                <Text style={[style.font, style.textRight]}>View All ></Text>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={54} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/1a9b6954-8439-4088-b638-68f4df74944d.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={30} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/e819b31c-c0a5-4ba4-85fe-a2327f7f4930.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={20} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/162f03b6-4f4b-40e4-aee8-13995998bc6e.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/caf186a2-50e4-4293-a85a-0c1a64a0df60.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/75f08d7e-dff2-472a-aa6e-e1cbcd2bc9a6.jpg?aki_policy=xl_poster'}/>
              </ScrollView>
            </View>
            <View>
              <View style={[style.row, {marginBottom: 10}]}>
                <Text style={[style.h4]}>Hot Experiences</Text>
                <Text style={[style.font, style.textRight]}>View All ></Text>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={54} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/1a9b6954-8439-4088-b638-68f4df74944d.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={30} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/e819b31c-c0a5-4ba4-85fe-a2327f7f4930.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={20} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/162f03b6-4f4b-40e4-aee8-13995998bc6e.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/caf186a2-50e4-4293-a85a-0c1a64a0df60.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/75f08d7e-dff2-472a-aa6e-e1cbcd2bc9a6.jpg?aki_policy=xl_poster'}/>
              </ScrollView>
            </View>
            <View>
              <View style={[style.row, {marginBottom: 10}]}>
                <Text style={[style.h4]}>Hot Experiences</Text>
                <Text style={[style.font, style.textRight]}>View All ></Text>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={54} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/1a9b6954-8439-4088-b638-68f4df74944d.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={30} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/e819b31c-c0a5-4ba4-85fe-a2327f7f4930.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={20} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/162f03b6-4f4b-40e4-aee8-13995998bc6e.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/caf186a2-50e4-4293-a85a-0c1a64a0df60.jpg?aki_policy=xl_poster'}/>
                <CardSimple title="Taste and enjoy Makgeolli with Korean" price={99} numOfReviews={5} numOfStars={5} imgUrl={'https://a0.muscache.com/im/pictures/75f08d7e-dff2-472a-aa6e-e1cbcd2bc9a6.jpg?aki_policy=xl_poster'}/>
              </ScrollView>
            </View>

          </ScrollView>
        </View>
    );
  }
}

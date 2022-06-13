import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from "react-redux";

const  TermsAndCondition =({navigation}) =>{
const rp_assmt_id = useSelector((state) => state.assmt[0].rp_assmt_id);



const handleTermsAndConditions = async () => {
  try {
    const result = await window.$http.postWithHeaders("assessment/terms", {
      rp_assmt_id,
    });

    console.log("term and condition api "+ JSON.stringify(result))
    if (result.code === 200) {
navigation.navigate('BeginAssessment')
    }
  } catch (error) {
    console.log(error);
  }
};

    return (
      <View style={styles.container}>

        <ScrollView  showsVerticalScrollIndicator={false}
          style={styles.tcContainer}
      >
          <Text style={styles.tcP}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id
            earum esse, provident fuga ea deleniti tempore veritatis eum
            corrupti ullam ipsam asperiores nihil quae aut voluptatem aliquid
            enim! Eaque minima dolorem nihil omnis ipsam impedit, et assumenda?
            Eveniet ea repellendus odio facere, assumenda cumque voluptas eaque
            dolorum atque repellat?
          </Text>
          <Text style={styles.tcP}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            pariatur iste recusandae, repellendus illo magni? Non blanditiis
            harum consequuntur mollitia, eum corporis unde. Nesciunt, ipsa.
          </Text>
          <Text style={styles.tcL}>
            {'\u2022'}Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, aspernatur.
          </Text>
          <Text style={styles.tcL}>
            {'\u2022'} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, aspernatur.
          </Text>
          <Text style={styles.tcL}>
            {'\u2022'}Lorem ipsum dolor sit amet consectetur adipisicing.
          </Text>

          <Text style={styles.tcL}>
            {'\u2022'}Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, aspernatur.
          </Text>
          <Text style={styles.tcL}>
            {'\u2022'} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, aspernatur.
          </Text>
          <Text style={styles.tcL}>
            {'\u2022'} Lorem ipsum dolor sit amet consectetur adipisicing
          </Text>

          <Text style={styles.tcL}>
            {'\u2022'} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, aspernatur.
          </Text>
          <Text style={styles.tcL}>
            {'\u2022'}Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, aspernatur.
          </Text>
          <Text style={styles.tcL}>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </Text>

          <Text style={styles.tcP}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id
            earum esse, provident fuga ea deleniti tempore veritatis eum
            corrupti ullam ipsam asperiores nihil quae aut voluptatem aliquid
            enim! Eaque minima dolorem nihil omnis ipsam impedit, et assumenda?
            Eveniet ea repellendus odio facere, assumenda cumque voluptas eaque
            dolorum atque repellat? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eveniet pariatur iste recusandae, repellendus illo
            magni? Non blanditiis harum consequuntur mollitia, eum corporis
            unde. Nesciunt, ipsa. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cum id earum esse, provident fuga ea deleniti
            tempore veritatis eum corrupti ullam ipsam asperiores nihil quae aut
            voluptatem aliquid enim! Eaque minima dolorem nihil omnis ipsam
            impedit, et assumenda? Eveniet ea repellendus odio facere, assumenda
            cumque voluptas eaque dolorum atque repellat? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Eveniet pariatur iste recusandae,
            repellendus illo magni? Non blanditiis harum consequuntur mollitia,
            eum corporis unde. Nesciunt, ipsa. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cum id earum esse, provident fuga ea
            deleniti tempore veritatis eum corrupti ullam ipsam asperiores nihil
            quae aut voluptatem aliquid enim! Eaque minima dolorem nihil omnis
            ipsam impedit, et assumenda? Eveniet ea repellendus odio facere,
            assumenda cumque voluptas eaque dolorum atque repellat? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Eveniet pariatur iste
            recusandae, repellendus illo magni? Non blanditiis harum
            consequuntur mollitia, eum corporis unde. Nesciunt, ipsa. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Cum id earum
            esse, provident fuga ea deleniti tempore veritatis eum corrupti
            ullam ipsam asperiores nihil quae aut voluptatem aliquid enim! Eaque
            minima dolorem nihil omnis ipsam impedit, et assumenda? Eveniet ea
            repellendus odio facere, assumenda cumque voluptas eaque dolorum
            atque repellat? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Eveniet pariatur iste recusandae, repellendus illo magni? Non
            blanditiis harum consequuntur mollitia, eum corporis unde. Nesciunt,
            ipsa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            id earum esse, provident fuga ea deleniti tempore veritatis eum
            corrupti ullam ipsam asperiores nihil quae aut voluptatem aliquid
            enim! Eaque minima dolorem nihil omnis ipsam impedit, et assumenda?
            Eveniet ea repellendus odio facere, assumenda cumque voluptas eaque
            dolorum atque repellat? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eveniet pariatur iste recusandae, repellendus illo
            magni? Non blanditiis harum consequuntur mollitia, eum corporis
            unde. Nesciunt, ipsa
          </Text>
        </ScrollView>

        <TouchableOpacity

          onPress={ handleTermsAndConditions}
          style={styles.button}>
          <Text style={styles.buttonLabel}>I Agree</Text>
        </TouchableOpacity>
      </View>
    );
  
}
export default  TermsAndCondition
const {width, height} = Dimensions.get('window');

const styles = {
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  tcP: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 14,
    padding:10
  },

  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },

  button: {
    backgroundColor: '#00A39D',
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center',
  },
};



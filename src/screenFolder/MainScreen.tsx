import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SingleBoxComp from '../componentFolder/SingleBoxComp';

const MainScreen = () => {
  const [selectedBox, setSelectedBox] = React.useState<number>(0);
  const dataArray = [
    {
      id: 1,
      title: 'Pay Now',
      price: '557',
      message: 'Pay $380 and cancel free',
    },
    { id: 2, title: 'Pay Later', price: '600', message: 'Pay $600 at hotel' },
  ];
  return (
    <View style={styles.container}>
      {dataArray.map((item, index) => (
        <SingleBoxComp
          key={item.id}
          title={item.title}
          price={item.price}
          message={item.message}
          isSelected={selectedBox === index}
          onpressProp={checked => {
            setSelectedBox(checked ? index : -1);
          }}
        />
      ))}
      {/* <SingleBoxComp />
   <SingleBoxComp /> */}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});

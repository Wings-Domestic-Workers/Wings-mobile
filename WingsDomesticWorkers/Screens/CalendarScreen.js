import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Agenda } from 'react-native-calendars';
import tw from 'tailwind-react-native-classnames';

const CalendarScreen = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    const newItems = { ...items };
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!newItems[strTime]) {
          newItems[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: `Event for ${strTime}`,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItemsSorted = Object.keys(newItems)
        .sort()
        .reduce((acc, key) => {
          acc[key] = newItems[key];
          return acc;
        }, {});
      setItems(newItemsSorted);
    }, 1000);
  };

  const renderItem = (item) => (
    <TouchableOpacity
      style={[tw`bg-white p-4 rounded-lg shadow-md`, { height: item.height }]}
      onPress={() => Alert.alert(item.name)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleDayPress = (day) => {
    const strTime = timeToString(day.timestamp);
    const newItems = { ...items };
    if (!newItems[strTime]) {
      newItems[strTime] = [];
    }
    newItems[strTime].push({
      name: `New Event on ${strTime}`,
      height: 100,
    });
    setItems(newItems);
  };

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  // Flatten the items for the FlatList
  const flatItems = Object.keys(items).reduce((acc, key) => {
    items[key].forEach((item) => acc.push({ ...item, date: key }));
    return acc;
  }, []);

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-1/2`}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={timeToString(Date.now())}
          renderItem={renderItem}
          onDayPress={handleDayPress}
          theme={{
            agendaDayTextColor: 'black',
            agendaDayNumColor: 'blue',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue',
          }}
          style={tw`h-full`} // Ensure Agenda takes full height of its container
          scrollEnabled={false} 
        />
      </View>
      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-lg font-bold mb-2`}>Events</Text>
        <FlatList
          data={flatItems}
          keyExtractor={(item, index) => `${item.date}-${index}`}
          renderItem={({ item }) => (
            <View style={tw`mb-4 p-4 bg-white rounded-lg shadow-md`}>
              <Text>{item.name}</Text>
              <Text style={tw`text-gray-500`}>{item.date}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CalendarScreen;



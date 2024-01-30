import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IEventState, removeEvent } from '../features/events/eventsSlice';
import { AppDispatch, RootState } from '../store';
import { Button } from '../components/Button';


function HomeScreen(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const events: IEventState[] = useSelector<RootState, IEventState[]>((state: RootState) => state.events.events)

  function deleteEvent (id: number): void {
    dispatch(removeEvent(id))
  }

  return (
    <View>
      <View style={{display: 'flex', rowGap: 10, width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
        {events?.map((event: IEventState) => {
          return <View style={{display: 'flex'}}>
            <Text style={{fontSize: 18}}>{event.name}</Text>
            <Button onPress={() => deleteEvent(event.id)}>Remove</Button>
          </View>
        })}
      </View>
    </View>
  )
}

export default HomeScreen;

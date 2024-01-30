import { createSlice } from '@reduxjs/toolkit'

export interface IEventState {
    id: number;
    name: string;
    date: string;
    image: string;
}

export interface IEventsState {
    events: IEventState[]
}

export interface IAddEventAction {
    type: string,
    payload: IEventState
}

export interface IRemoveEventAction {
    type: string,
    payload: number
}

const initialState: IEventsState = {
    events: [
        {
            id: 1,
            name: 'John and Pavlo marriage',
            date: '1/30/2024',
            image: ''
        }
    ]
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent: (state: IEventsState, action: IAddEventAction) => {
            const { id, name, date, image } = action.payload
            state.events.push({id, name, date, image})
        },
        removeEvent: (state: IEventsState, action: IRemoveEventAction) => {
            state.events = state.events.filter((event: IEventState) => event.id !== action.payload)
        }
    }
})

export const {addEvent, removeEvent} = eventSlice.actions
export default eventSlice.reducer
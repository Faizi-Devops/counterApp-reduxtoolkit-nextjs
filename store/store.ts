import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice';
const store= configureStore({
    reducer: {
       counter: counterSlice,
    }
 })
 
 // export default the store 
 export default store;
 export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
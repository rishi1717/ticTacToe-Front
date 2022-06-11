import {
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit"
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"
import storage from "reduxjs-toolkit-persist/lib/storage"
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1"
import appReducer from "./appSlice"

const persistConfig = {
	key: "root",
	storage: storage,
	stateReconciler: autoMergeLevel1,
}

const reducers = combineReducers({
	app: appReducer,
})

const _persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: _persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export default store
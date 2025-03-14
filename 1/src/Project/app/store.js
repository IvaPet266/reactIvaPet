import { configureStore } from '@reduxjs/toolkit'
import colorThemeReducer from '../features/colorTheme/colorThemeSlice'

export default configureStore({
    reducer: {
        colorTheme: colorThemeReducer,
    },
})